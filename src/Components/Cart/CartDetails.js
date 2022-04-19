import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Footer } from "../Home/Footer";
import { HeroSection } from "../Home/HeroSection";
import { Navbar } from "../Home/Navbar";
import { ProductQuntityAddition } from "../redux/actions";
import { MyActions } from "../redux/reducer";
import { store } from "../redux/store";
import './cart.css'





export const CartDetails = () => {




  let totalPrice;

  const storeData = useSelector((state) => state.MyActions);

  const [show, setShow] = useState(false)


  if (storeData.allProducts.length > 1) {
      totalPrice = storeData.allProducts
        .map((e) => e.price)
        .reduce((prev, next) => prev + next);
    }

  const dispatch = useDispatch()


  const handleAddition = (e)=>{

    
      dispatch(ProductQuntityAddition(e))
      
      totalPrice = storeData.allProducts
        .map((e) => e.price)
        .reduce((prev, next) => prev + next);
    
  }




  return (
    <div>
      <Navbar></Navbar>
      <HeroSection>
        <div className="container mt-5">
          <div className="row align-items-center pt-5 justify-content-center">
            <div className="col-md-9   rounded mt-5">
              <div className="card bg-transparent border-0 p-5">
                <h1 className="display-4 text-white fw-bold ">Your Cart !</h1>
                <p className="text-left text-white">
                  Real Time and Manual Filters to get your specific car in no
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </HeroSection>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6 border shadow-lg p-4">
            {storeData.allProducts.length > 1 ? (
              <ul className="list-unstyled">
                <li>
                  <div className="row">
                    <div className="col-8 row align-items-center">
                      <h5 className="fw-bold">ITEMS</h5>
                    </div>
                    <div
                      className="col-4 text-right"
                      style={{ textAlign: "right" }}
                    >
                      <h5 className="fw-bold">PRICE</h5>
                    </div>
                  </div>
                </li>
                <hr></hr>
                {storeData.allProducts.map((val) => {
                  return (
                    <li className="row my-3 border-bottom pb-2 cart-items " onMouseEnter={()=> setShow(true)} onMouseLeave={()=> setShow(false)}>
                      
                     {show ? <button className="btn btn-danger">X</button> : null }
                      
                      {/* ============== */}
                      <div className="col-8 row align-items-center">
                        <div
                          className="col-3"
                          style={{ height: "80px", width: "80px" }}
                        >
                          <img src={val.image} className="img-fluid"></img>
                        </div>
                        <div className="col-7">
                          <p className="ms-3">{val.title}</p>
                        </div>
                      </div>
                      <div
                        className="col-4 text-right"
                        style={{ textAlign: "right" }}
                      >
                        <h5 className="me-2 fw-bold"> <span className="text-success"> $ </span>{val.price*val.qty}</h5>
                        <div
                        className="quantity"
                      
                      >
                        <button type="button" class="btn btn-secondary">
                          - </button>
                        <p className="mx-2 text-center pt-3"> {val.qty} </p> 
                        <button type="button" class="btn btn-secondary" onClick={()=> handleAddition(val.id)} >
                          +
                        </button>
                      </div>
                      </div>
                    </li>
                  );
                })}
                <li className="row my-3 relative">
                
                  <div className="col-8 row align-items-center">
                    <h5 className="fw-bold">Total: </h5>
                  </div>
                  <div
                    className="col-4 text-right"
                    style={{ textAlign: "right" }}
                  >
                    <h5> ${totalPrice ? totalPrice.toFixed(3) : null}</h5>
                  </div>
                </li>
              </ul>
            ) : (
              <p> Your cart is Empty ! Please Select Some Items</p>
            )}
          </div>
        </div>

        <Link to="/">
          <div className="text-center">
          <button className="text-center btn hero-btn  my-5">Back to Home Page</button>
          </div>
        </Link>
      </div>

      <Footer></Footer>
    </div>
  );
};
