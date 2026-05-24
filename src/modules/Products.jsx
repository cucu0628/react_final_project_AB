import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"


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

    useEffect(() => {
        getProd();
    }, [])

    return (
        <div className="container mt-5">
            <div className="row g-4">
            {products.map((item) => (<ProductCard name={item.name} desc={item.description} img={item.img_url} price={item.price} key={item.id} />))}
            </div>
        </div>
    )
}
export default Products