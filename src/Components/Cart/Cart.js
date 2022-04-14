import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { MyActions } from "../redux/reducer"




export const Cart = ()=>{

    const cartData = useSelector(state=> state.MyActions)


    return <Link to='/cart'style={{paddingTop:'15px'}}>
                  <p style={{borderLeft:'1px solid #000'}} className='ps-2'> <i class="fas fa-shopping-cart "> <span >{cartData.mycart}  </span>  </i>  </p>
         </Link>
             
}