import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { MyActions } from "../redux/reducer"
import { store } from "../redux/store"


export const CartDetails = ()=> {

    
    let totalPrice;

    const storeData = useSelector((state)=> state.MyActions)
    
    if(storeData.allProducts.length > 1){
            totalPrice = storeData.allProducts.map((e)=> e.price ).reduce((prev, next)=> prev+next)
     }
   


    return( <div className="container">
            <div className="row">
                <div className="col-md-6 ">
                    <h1 className="Display-1">Shopping Cart List</h1>
                </div>
                <div className="col-md-6 border shadow-lg p-4">
                 {storeData.allProducts.length > 1 ? 
                    <ul className="list-unstyled">
                        {storeData.allProducts.map((val)=>{
                                    return <li className="row my-3 border-bottom pb-2 ">
                                                <div className="col-8 row align-items-center">
                                                        <div  className="col-3"  style={{height:'80px' , width:'80px'}}>
                                                            <img src={val.image} className="img-fluid" ></img>

                                                        </div>
                                                        <div className="col-7">

                                                        <p className="ms-3">{val.title}</p>
                                                        </div>
                                                </div>
                                                <div className="col-4 text-right" style={{textAlign:'right'}}>
                                                        <h5>${val.price}</h5>
                                                </div>
                                     </li>
                        })}
                                <li className="row my-3  ">
                                                <div className="col-8 row align-items-center">
                                                        <h5>Total: </h5>
                                                </div>
                                                <div className="col-4 text-right" style={{textAlign:'right'}}>
                                                        <h5>  ${totalPrice ? totalPrice.toFixed(3) : null  }</h5>
                                                </div>
                                </li>
                        
                    </ul>  : <p>Please Select Some Items</p> }
                </div>

            </div>

                
            <Link to='/'>
                        <p className="text-center my-5">Back to Home Page</p>
            </Link>


           
    </div>)
}