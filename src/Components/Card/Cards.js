import { useState } from "react"
import { Details } from "./Detail"
import { Link } from "react-router-dom"
import { scryRenderedComponentsWithType } from "react-dom/test-utils"
import { getValue } from "@testing-library/user-event/dist/utils"
import { combineReducers } from "redux"
import { useDispatch } from "react-redux"
import { AddToCart } from "../redux/actions"

export const Cards = ({id, price,title,url, rating, ratingCount, category , des})=>{

    const dispatch = useDispatch()


    const [show, setShow] = useState(false)


    function handleCart(id){
       
        console.log("selected" , id)
        dispatch(AddToCart(id))
    }


    return <div  className="col-md-3 my-3" onMouseEnter={()=> setShow(true)} onMouseLeave={()=> setShow(false)}>

          
                <div className="card p-3" style={{minHeight:'530px'}} >
                <Link to={`/products/${id}`} >
                    <img src={url} loading="lazy"style={{height:'350px' , width:'100%'}}  ></img>  </Link>
                    <div className="d-flex justify-content-between mt-3">
                        <p>{title}</p>
                        <p>{price}</p>
                    </div>
                    <small className="text-muted">{category}</small> 
                    {show ? <button className="btn btn-secondary mt-3" onClick={()=> handleCart(id)}>Add to Cart</button> :
                    null}
                </div>

           
    </div>
}

