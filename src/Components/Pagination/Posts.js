import { Cards } from "../Card/Cards";

export const Posts = ({ data, loading }) => {
  let mydata = [1, 2, 3, 4];

  return (
    <div className="row justify-content-center">
      {loading ? (
        mydata.map((val) => {
          return <Cards loading={loading}></Cards>;
        })
      ) : (
        <>
          {data.length > 0 ? (
            data.map((val) => {
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
              );
            })
          ) : (
            <img
              style={{ height: "400px", width: "400px" }}
              src="https://thumbs.dreamstime.com/b/i-sorry-message-white-background-sad-boy-holding-poster-word-sorry-conceptual-handwritten-message-boy-word-sorry-114449870.jpg"
            ></img>
          )}
        </>
      )}
    </div>
  );
};
