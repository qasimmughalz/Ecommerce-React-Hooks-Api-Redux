


export const RealTime = ({search, GetFromChild})=>{



    const handleChange= (val)=>{
        
        console.log("changing value", val)
        GetFromChild(val)
    }



    return(
        <div className="mt-3">
        <label>Search</label>
                <input
                value={search}
                onChange={(e)=> handleChange(e.target.value)}
                placeholder="search"
                className="form-control "
            >
            </input>
      </div>
    )


}