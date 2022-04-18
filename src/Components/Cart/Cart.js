import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { MyActions } from "../redux/reducer"




export const Cart = ()=>{

    const cartData = useSelector(state=> state.MyActions)


    return <Link to='/cart'style={{paddingTop:'15px'}}>
                  <p style={{borderLeft:'1px solid #000'}} className='ps-2'> <i className="fas fa-shopping-cart purple   "> <span className="purple">{cartData.mycart}  </span>  </i>  </p>
         </Link>
             
}