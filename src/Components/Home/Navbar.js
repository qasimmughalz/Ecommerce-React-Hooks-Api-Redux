import { Link } from "react-router-dom"
import { Cart } from "../Cart/Cart"

export const Navbar = () => {

    return (
      
        <nav class="navbar navbar-expand-lg navbar-light  bg-transparent text-dark">
            <div class="container text-center">
                <a class="navbar-brand" href="#">CarsExpert</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse  navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <Link to='/compare'>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Compare</a>
                        </li>
                        </Link>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ">Disabled</a>
                        </li>
                    </ul>
                </div>
                <Cart/>
            </div>
        </nav>
    )
}