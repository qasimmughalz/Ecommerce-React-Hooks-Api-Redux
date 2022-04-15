import { useState } from "react";
import { Details } from "./Detail";
import { Link } from "react-router-dom";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import { getValue } from "@testing-library/user-event/dist/utils";
import { combineReducers } from "redux";
import { useDispatch } from "react-redux";
import { AddToCart } from "../redux/actions";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import './card.css'

export const Cards = (props) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  function handleCart(id) {
    dispatch(AddToCart(id));
  }

  const { id, price, title, url, category, loading } = props;

  console.log("I am in cards bro ", loading);

  return (
    <div
      className="col-md-3 my-3"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className="card p-3" >
          <div >
        <Link to={`/products/${id}`}>
          {loading ? (
            <Skeleton
              circle
              height="200px"
              width='100%'
              containerClassName="avatar-skeleton"
            />
          ) : (
            <img
              src={url}
              loading="lazy"
              style={{ height: "200px", width: "100%" }}
            ></img>
          )}
        </Link>

        <div className="pt-4" style={{height:'70px'}}>

        <small className="heading-overflow" >
          {loading ? <Skeleton count={3}/> : title}
        </small>
        </div>


        <div className="d-flex justify-content-between mt-3">
            <small className="text-muted">
            {loading ? <Skeleton count={3}/> : category}
            </small>
          <small className="font-weight-bold">{loading ? <Skeleton width={30} /> : `$${price}`} </small>
        </div>
       
        </div>
        
        {loading ? <Skeleton /> :  <button
            className="btn hero-btn mt-3"
            onClick={() => handleCart(id)}
          >
            Add to Cart
          </button>}
         
          
        
      </div>
    </div>
  );
};
