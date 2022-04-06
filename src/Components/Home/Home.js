import { useEffect, useState } from "react";
import { Cards } from "../Card/Cards";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../redux/actions";
import { setDataToApi } from "../redux/actions";
import { MyActions } from "../redux/reducer";
import { store } from "../redux/store";
import { Cart } from "../Cart/Cart";










export const Home = () => {
  const [display, setDisplay] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products/")
        .then((res) => {
          console.log("api data", res);
          setData(res.data);
          setDisplay(res.data);
          dispatch(setDataToApi(res.data));
        })
        .catch((e) => console.log(e));
    };
    fetchdata();
  }, []);

  useEffect(() => {
    if (search == "") {
      setDisplay(data);
    } else {
      const filtered = data.filter((val) => {
        return val.title.toLowerCase().includes(search.toLocaleLowerCase());
      });
      setDisplay(filtered);
    }
  }, [search]);



  const StoreData = useSelector(state=> state.MyActions)

    console.log("Cart Products" , StoreData.allProducts)
 

  console.log()

  return (
    <div className="container mt-5">
      <div style={{ textAlign: "right" }}>
            <Cart></Cart>    
        </div>

      <div className="m-auto">
        <h3 className="display-4 my-4 text-center"> Shop</h3>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search"
          className="form-control my-5"
        ></input>

        {display.length > 1 ? (
          <div className="row">
            {display.map((val) => {
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
          <p className="text-center">loading...</p>
        )}
      </div>
    </div>
  );
};
