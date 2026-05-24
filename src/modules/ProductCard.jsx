const ProductCard = ({ name, desc, img, price }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top p-3" alt={name} style={{ height: "250px", objectFit: "contain", backgroundColor: "#fff" }}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{desc}</p>
                <p className="card-text">Ár: {price} Ft</p>
                <a href="#" className="btn btn-primary">Gomb</a>
            </div>
        </div>
    )
}
export default ProductCard