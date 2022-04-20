import { useRef, useState } from "react"




export const ManualFilter = ({setMinMax})=>{

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const [cat, setCat] = useState('')


    const minimum = useRef(0)
    const maximum = useRef(0)

    const handlesubmit = (e)=>{
        e.preventDefault()
        setMinMax(minimum.current.value, maximum.current.value)
  }



    return(
        <div className="my-3">
          <form onSubmit={handlesubmit}>
              <div className="row">
                <div className="col-">
                  <label>Price</label>
                  <input  type="number" ref={minimum} className="form-control my-2" placeholder="min" min="0"/>
                  <input type="number" ref={maximum} className="form-control my-2" placeholder="max" max='500'/>
                </div>
                <div className="col-">
                   
                    <button className="btn btn-secondary">Filter</button>
                </div>
              </div>
            
          </form>
        </div>
    )
} 