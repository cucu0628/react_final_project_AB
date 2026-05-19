import { NavLink } from "react-router-dom"

const NavBar = () => {

    const style = ({isActive}) =>{
        if(isActive){
            return "nav-link active";
        }else{
            return "nav-link";
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand">TeloShop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav w-100">
                            <li className="nav-item">
                                <NavLink to="/" className={style}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/telo" className={style}>Telefonok</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/admin" className={style}>Admin</NavLink>
                            </li>

                            <li className="nav-item ms-auto">
                                <NavLink to="/login" className={style}>Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default NavBar