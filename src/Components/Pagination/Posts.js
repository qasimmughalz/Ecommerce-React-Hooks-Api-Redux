import { Cards } from "../Card/Cards";

export const Posts = ({data})=>{
    
    
    
    return(
    
                <div>
                     {data.length >= 1 ? (
                            <div className="row">
                                {data.map((val) => {
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
                                    ></Cards>
                                );
                                })}
                            </div>
                            ) : (
                            <p className="text-center">loading ...</p>
                            )}
              </div>)
}