import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import Swal from "sweetalert2"


const Products = () => {

    const [products, setProducts] = useState([])

    const getProd = async () => {
        try {
            const resp = await fetch("http://localhost:3000/products")
            const data = await resp.json()
            setProducts(data)
        } catch (err) {
            console.log(err)
        }

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
            setProducts([])
            getProd()
        }
    }

    useEffect(() => {
        getProd();
    }, [])

    return (
        <div className="container mt-5">
            <div className="row g-4">
            {products.map((item) => (<ProductCard name={item.name} desc={item.description} img={item.img_url} price={item.price} key={item.id} id={item.id} del={del}/>))}
            </div>
        </div>
    )
}
export default Products