import { useParams } from "react-router";
import { HeroSection } from "../Home/HeroSection";
import { Navbar } from "../Home/Navbar";
import { useEffect, useState } from "react";
import { setDataToApi } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { DataPagination } from "../Pagination/DataPagination";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CheckBox } from "../FIlters/CheckBox";
import { ManualFilter } from "../FIlters/Manual";
import { Footer } from "../Home/Footer";

export const SearchPage = () => {
  // to store data in redux from API for fast calculation
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  const [loading, setLoading] = useState(true);
  const params = useParams();

  const [inputVal, setInputVal] = useState(search);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products/")
        .then((res) => {
          setData(res.data);
          dispatch(setDataToApi(res.data));
          setSearch(params.search);
        })
        .catch((e) => console.log(e));
    };
    fetchdata();
  }, []);

  useEffect(() => {
    if (search === undefined) {
      setFiltered(data);
      console.log("search value if ", search);
    } else {
      console.log("search value else ", search);
      const filter = data.filter((val) => {
        return val.title.toLowerCase().includes(search.toLowerCase());
      });
      setFiltered(filter);
      setInputVal(search);
    }
  }, [search]);

  useEffect(() => {
    if (data.length > 0) {
      console.log("loading data appi se ", loading);
      setLoading(!loading);
    }
  }, [data]);

  function filteredData(val) {
    if (val.length > 0) {
      setFiltered(val);
    } else {
      setFiltered(data);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(inputVal);
  }

  const handleMinMax = (min, max) => {
    console.log(min, max);
    const filter = data.filter(
      (data) => data.price >= min && data.price <= max
    );
    setFiltered(filter);
  };

  return (
    <div>
      <Navbar></Navbar>
      <HeroSection>
        <div className="container mt-5">
          <div className="row align-items-center pt-5 justify-content-center">
            <div className="col-md-9   rounded mt-5">
              <div className="card bg-transparent border-0 p-5">
                <h1 className="display-4 text-white fw-bold ">
                  Carvago at your Service!
                </h1>
                <p className="text-left text-white">
                  Real Time and Manual Filters to get your specific car in no
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </HeroSection>

      <div className="container">
        <div className="row my-5">
          <div className="col-md-3 my-3">
            <ManualFilter setMinMax={handleMinMax}></ManualFilter>
            <hr />

            <h3>Categories:</h3>
            <CheckBox setFilteredData={filteredData}></CheckBox>
          </div>
          <div className="col-md-9 my-3">
            <div className="card border-0 ">
              <h1 className="display-4 fw-bold ">Search Here..</h1>
              <form onSubmit={handleSubmit}>
                <input
                  placeholder="search your car here....."
                  className="form-control grey-inputs"
                  value={loading ? "loading..." : inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                ></input>
                <div className="text-right" style={{ textAlign: "right" }}>
                  <button
                    className="btn hero-btn mt-4"
                    value="submit"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <DataPagination
              DataLength={filtered.length}
              loading={loading}
              data={filtered}
            />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};
