import { Link } from "react-router-dom"
import { Cart } from "../Cart/Cart"

export const Navbar = () => {

    return (
      
        <nav className="navbar navbar-expand-lg navbar-light  bg-white text-dark fixed-top">
            <div className="container text-center mt-2">
                <a className="navbar-brand" href="/"><img style={{width:'150px'}} src="https://carvago.com/images/logo.svg" className="img-fluid"></img> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse  navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <Link to='/compare'>
                        <li className="nav-item ">
                            <a className="nav-link active" aria-current="page" href="#">Compare</a>
                        </li>
                        </Link>
                        <Link to='/search'>
                        <li className="nav-item">
                            <a className="nav-link" href="#">See All Listings</a>
                        </li>
                        </Link>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ">Contact</a>
                        </li>
                    </ul>
                </div>
                 <li className="nav-item">
                            <a className="nav-link ">Login</a>
                 </li>
                <Cart/>
            </div>
        </nav>
    )
}