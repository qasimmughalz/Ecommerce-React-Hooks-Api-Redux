import { Link } from "react-router-dom"
import { Cart } from "../Cart/Cart"

export const Navbar = () => {

    return (
      
        <nav className="navbar navbar-expand-lg navbar-dark  bg-transparent text-light fixed-top">
            <div className="container text-center mt-2">
                <a className="navbar-brand" href="#"><img style={{width:'150px'}} src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-b8b4c00b25fde9cc8f514dc4947c266a.svg" className="img-fluid"></img> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse  navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <Link to='/compare'>
                        <li className="nav-item ">
                            <a className="nav-link active" aria-current="page" href="#">Compare</a>
                        </li>
                        </Link>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ">Disabled</a>
                        </li>
                    </ul>
                </div>
                <Cart/>
            </div>
        </nav>
    )
}