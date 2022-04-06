import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { MyActions } from "../redux/reducer"





export const Cart = ()=>{

    const cartData = useSelector(state=> state.MyActions)


    return  <div>

                 <Link to='/cart'>
                 <p> My Cart : {cartData.mycart} </p>
                </Link>
            </div>      
}