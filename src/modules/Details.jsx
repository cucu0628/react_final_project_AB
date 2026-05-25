import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";

const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [adat, setAdat] = useState(null);

    useEffect(() => {
        get()
    }, [])

    const get = async () => {
        const resp = await fetch(`http://localhost:3000/product/${id}`)
        const data = await resp.json()
        setAdat(data)

    }
    console.log(adat)

    if (adat === null) {
        return <div className="container mt-5">Betöltés...</div>;
    }

    return (
        <div>

            <button className="btn mb-4 d-inline-flex align-items-center gap-2" onClick={() => navigate(-1)}>
                <SlArrowLeft /> Vissza
            </button>


            <div className="row">

                <div className="col-md-6 text-center">
                    <img
                        src={adat[0].img_url}
                        alt={adat[0].name}
                        className="img-fluid"
                        style={{ maxHeight: "300px", objectFit: "contain" }}
                    />
                </div>

                <div className="col-md-6">
                    <h2>{adat[0].name}</h2>
                    <h4 className="text-primary">{adat[0].price} Ft</h4>
                    <p className="mt-3">{adat[0].description}</p>
                    <p>Készlet: {adat[0].stock} db</p>

                </div>
            </div>
        </div >


    )
}
export default Details