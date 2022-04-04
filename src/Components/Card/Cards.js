


export const Cards = ({id,title,url})=>{
    return <div  className="col-md-3">
            <div className="card">
                <img src={url} loading="lazy" ></img>
                <p>{id}</p>
                <h4>{title}</h4>
            </div>

    </div>
}