import { useState } from "react"




export const ManualFilter = ()=>{

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const [cat, setCat] = useState('')


        console.log("MIn, Max", min, max, cat)




    return(
        <div className="my-3">
          <form>
              <div className="row">
                <div className="col-">
                  <label>Price</label>
                  <input  type="number" onChange={(e)=> setMin(e.target.value)} className="form-control my-2" placeholder="min" min="0"/>
                  <input type="number" onChange={(e)=> setMax(e.target.value)}  className="form-control my-2" placeholder="max" min='0'/>
                </div>
                <div className="col-">
                    <label>Category</label>
                    <select className="form-control my-2" onChange={(e)=> setCat(e.target.value)}>
                      <option value="Men">Men Wear</option>
                      <option value="Women">Women Wear</option>
                      <option value="Jevelary">Jevelary</option>
                      <option value="Jevelary">electronics</option>
                    </select>
                    <button className="btn btn-secondary">Filter</button>
                </div>
              </div>
            
          </form>
        </div>
    )
} 