import { Cards } from "../Card/Cards";

export const Posts = ({data, loading})=>{
    
    let mydata = [1,2,3,4]
    
    return( <div className="row">
                                { data.length > 0 ? data.map((val) => {
                                return (
                                    <Cards
                                    key={val.id}
                                    id={val.id}
                                    price={val.price}
                                    title={val.title}
                                    url={val.image}
                                    category={val.category}
                                    des={val.description}
                                    rating={val.rating.rate}
                                    ratingCount={val.rating.count}
                                    loading={loading}
                                    ></Cards>
                                )  
                                }) : mydata.map((val) => {
                                    return (
                                        <Cards loading={loading}></Cards>
                                    )  
                                    }) }    
                            
                                
        </div>
        )
}