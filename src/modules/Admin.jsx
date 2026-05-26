import { useRef } from "react"
import Swal from "sweetalert2"

const Admin = () => {
    const termek = useRef()
    const url = useRef()
    const ar = useRef()
    const keszlet = useRef()
    const leiras = useRef()

    const kuld = async () => {
        if (termek.current.value == "" || url.current.value == "" || ar.current.value == "" || keszlet.current.value == "" || leiras.current.value == "") {
            Swal.fire({
                theme: "dark",
                icon: "error",
                title: "Oops...",
                text: "Tölts ki mindent",
            });
        } else {
            const resp = await fetch("http://localhost:3000/products", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": localStorage.getItem("token")
                },
                body: JSON.stringify({
                    name: termek.current.value,
                    description: leiras.current.value,
                    img_url: url.current.value,
                    price: ar.current.value,
                    stock: keszlet.current.value
                })
            })
            if (resp.ok) {
                Swal.fire({
                    theme: "dark",
                    icon: "success",
                    title: "Good",
                    text: "Sikeres hozzáadás",
                });
            }
        }


    }

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center mt-5" >
                <div className="card p-4 shadow-sm" style={{ width: "100%", maxWidth: "500px" }}>
                    <h3 className="mb-4 text-center">Új termék hozzáadása</h3>

                    <form onSubmit={(e) => e.preventDefault()}>

                        <div className="mb-3">
                            <label htmlFor="productName" className="form-label">Termék neve</label>
                            <input type="text" className="form-control" id="productName" placeholder="pl. iPhone 15 Pro" ref={termek} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="productImg" className="form-label">Kép URL címe</label>
                            <input type="url" className="form-control" id="productImg" placeholder="https://example.com/kep.jpg" ref={url} />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="productPrice" className="form-label">Ár (Ft)</label>
                            <input type="number" className="form-control" id="productPrice" min="0" placeholder="0" ref={ar} />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="productStock" className="form-label">Készlet (db)</label>
                            <input type="number" className="form-control" id="productStock" min="0" placeholder="0" ref={keszlet} />
                        </div>


                        <div className="mb-4">
                            <label htmlFor="productDesc" className="form-label">Leírás</label>
                            <textarea className="form-control" id="productDesc" rows="3" placeholder="A termék részletes leírása..." ref={leiras}></textarea>
                        </div>


                        <button type="submit" className="btn btn-primary w-100 fw-bold" onClick={kuld}>
                            Termék hozzáadás
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Admin