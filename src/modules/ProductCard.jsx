import { NavLink } from "react-router-dom"
import { useAuth } from "../Context/LoginContext"
import Swal from "sweetalert2"
import { useState } from "react"

const ProductCard = ({ name, desc, img, price, id }) => {
    const { isLogged } = useAuth()

    const delConf = (id) => {
        Swal.fire({
            theme: "dark",
            title: "Szeretnéd törölni?",
            showCancelButton: true,
            cancelButtonText: "Nem",
            confirmButtonText: "Igen",
        }).then((result) => {
            if (result.isConfirmed) {
                del(id)     
            }
        });
    }


    const del = async (id) => {
        const resp = await fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("token"),
            },
        })
        if(resp.ok){
            Swal.fire({
                theme: "dark",
                title: "Sikeres törlés",
                icon: "success",
            })
            window.location.reload();
        }
    }

    return (
        <div className="card mx-2" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top p-3" alt={name} style={{ height: "250px", objectFit: "contain", backgroundColor: "#fff" }} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Ár: {price} Ft</p>
                <NavLink to={`/details/${id}`}> <button className="btn btn-primary">Részletek</button></NavLink>
                {isLogged ? <button className="btn btn-danger mx-4" onClick={() => delConf(id)}>Törlés</button> : ""}
            </div>
        </div>
    )
}
export default ProductCard