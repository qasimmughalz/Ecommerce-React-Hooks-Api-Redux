import { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Cart } from "../Cart/Cart";
import { useDispatch } from "react-redux";

export const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const fetch = axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((e) => setData(e.data));

  const dispatch = useDispatch();

  return (
    <div className="container mt-5">
      <div style={{ textAlign: "right" }}>
        <Cart></Cart>
      </div>

      <h3 className="display-4 my-4 text-center"> Product Detail</h3>

      <div className="container p-5 m-5">
        {Object.keys(data).length > 0 ? (
          <div className="row  align-items-center">
            <div className="col-md-5">
              <img src={data.image} className="img-fluid"></img>
            </div>
            <div className="col-md-6">
              <h1>{data.title}</h1>
              <p>{data.category}</p>
              <div className="d-flex justify-content-between mt-3">
                <p>{data.title}</p>
                <h3>${data.price}</h3>
              </div>
              <p className="mt-4"> {data.description}</p>

              <button className="btn btn-success" onClick={() => dispatch}>
                Add to Cart
              </button>
            </div>
          </div>
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
};
