import { useEffect, useState } from "react";
import { Cards } from "../Card/Cards";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../redux/actions";
import { setDataToApi } from "../redux/actions";
import { MyActions } from "../redux/reducer";
import { store } from "../redux/store";
import { Cart } from "../Cart/Cart";
import { RealTime } from "../FIlters/Realtime";
import { ManualFilter } from "../FIlters/Manual";
import { CheckBox } from "../FIlters/CheckBox";
import { DataPagination } from "../Pagination/DataPagination";
import { ChooseCompare } from "../Compare/ChooseCompare";
import { Link } from "react-router-dom";
import css from './Home.css'
import { Navbar } from "./Navbar";



export const Home = () => {
  const [display, setDisplay] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const StoreData = useSelector(state => state.MyActions)

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products/")
        .then((res) => {
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


  function handleGetFromChild(val) {
    setSearch(val)
  }

  function filteredData(val) {
    if (val.length > 0) {
      setDisplay(val)
    } else {
      setDisplay(data)
    }
  }







  return (
    <div>

      <Navbar/>

      <div className="container-fluid hero-section ">

          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 m-auto text-center">
              <h1 className="display-4 text-white">Get Your Dream Car</h1>
            <RealTime value={search} GetFromChild={handleGetFromChild}></RealTime>
            </div>
          </div>
      </div>
     
   
     
      <div className="container-fluid">

        <div className="row">
          {/* <div className="col-md-2 shadow-lg border ">

            <h3 className="mt-3">Filters</h3>

          
            <ManualFilter></ManualFilter><hr />
            <CheckBox setFilteredData={filteredData} ></CheckBox>

          </div> */}

          <div className="col-md-9 m-auto">

            <div className="my-5">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Category</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Car</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Make</button>
                </li>
              </ul>
              <div class="tab-content my-3" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row my-3">
                  <div className="col-md-2">
                          <div className="card text-center category-cards">
                            <div className="card-body rounded p-0 m-0">
                                  <img src="https://wsa2.pakwheels.com/assets/browse-more/car-ctg-1300cc-cars-98fe0baa7b3171f120ab5c0fa8a8cdc1.svg" className="img-fluid" alt="" />
                                  <p className="mt-2">1300cc Cars</p>
                            </div>
                          </div>
                      </div>
                      <div className="col-md-2">
                          <div className="card text-center category-cards">
                            <div className="card-body rounded p-0 m-0">
                                  <img src="https://wsa2.pakwheels.com/assets/browse-more/car-ctg-1300cc-cars-98fe0baa7b3171f120ab5c0fa8a8cdc1.svg" className="img-fluid" alt="" />
                                  <p className="mt-2">1300cc Cars</p>
                            </div>
                          </div>
                      </div>
                      <div className="col-md-2">
                          <div className="card text-center category-cards">
                            <div className="card-body rounded p-0 m-0">
                                  <img src="https://wsa2.pakwheels.com/assets/browse-more/car-ctg-1300cc-cars-98fe0baa7b3171f120ab5c0fa8a8cdc1.svg" className="img-fluid" alt="" />
                                  <p className="mt-2">1300cc Cars</p>
                            </div>
                          </div>
                      </div>
                      <div className="col-md-2">
                          <div className="card text-center category-cards">
                            <div className="card-body rounded p-0 m-0">
                                  <img src="https://wsa2.pakwheels.com/assets/browse-more/car-ctg-1300cc-cars-98fe0baa7b3171f120ab5c0fa8a8cdc1.svg" className="img-fluid" alt="" />
                                  <p className="mt-2">1300cc Cars</p>
                            </div>
                          </div>
                      </div>
                      <div className="col-md-2">
                          <div className="card text-center category-cards">
                            <div className="card-body rounded p-0 m-0">
                                  <img src="https://wsa2.pakwheels.com/assets/browse-more/car-ctg-1300cc-cars-98fe0baa7b3171f120ab5c0fa8a8cdc1.svg" className="img-fluid" alt="" />
                                  <p className="mt-2">1300cc Cars</p>
                            </div>
                          </div>
                      </div>
                      <div className="col-md-2">
                          <div className="card text-center category-cards">
                            <div className="card-body rounded p-0 m-0">
                                  <img src="https://wsa2.pakwheels.com/assets/browse-more/car-ctg-1300cc-cars-98fe0baa7b3171f120ab5c0fa8a8cdc1.svg" className="img-fluid" alt="" />
                                  <p className="mt-2">1300cc Cars</p>
                            </div>
                          </div>
                      </div>

                  </div>
                  <div className="row my-3">
                  <div className="col-md-2">
                          <div className="card text-center category-cards">
                            <div className="card-body rounded p-0 m-0">
                                  <img src="https://wsa2.pakwheels.com/assets/browse-more/car-ctg-1300cc-cars-98fe0baa7b3171f120ab5c0fa8a8cdc1.svg" className="img-fluid" alt="" />
                                  <p className="mt-2">1300cc Cars</p>
                            </div>
                          </div>
                      </div>
                      <div className="col-md-2">
                          <div className="card text-center category-cards">
                            <div className="card-body rounded p-0 m-0">
                                  <img src="https://wsa2.pakwheels.com/assets/browse-more/car-ctg-1300cc-cars-98fe0baa7b3171f120ab5c0fa8a8cdc1.svg" className="img-fluid" alt="" />
                                  <p className="mt-2">1300cc Cars</p>
                            </div>
                          </div>
                      </div>
                      <div className="col-md-2">
                          <div className="card text-center category-cards">
                            <div className="card-body rounded p-0 m-0">
                                  <img src="https://wsa2.pakwheels.com/assets/browse-more/car-ctg-1300cc-cars-98fe0baa7b3171f120ab5c0fa8a8cdc1.svg" className="img-fluid" alt="" />
                                  <p className="mt-2">1300cc Cars</p>
                            </div>
                          </div>
                      </div>
                      <div className="col-md-2">
                          <div className="card text-center category-cards">
                            <div className="card-body rounded p-0 m-0">
                                  <img src="https://wsa2.pakwheels.com/assets/browse-more/car-ctg-1300cc-cars-98fe0baa7b3171f120ab5c0fa8a8cdc1.svg" className="img-fluid" alt="" />
                                  <p className="mt-2">1300cc Cars</p>
                            </div>
                          </div>
                      </div>
                      <div className="col-md-2">
                          <div className="card text-center category-cards">
                            <div className="card-body rounded p-0 m-0">
                                  <img src="https://wsa2.pakwheels.com/assets/browse-more/car-ctg-1300cc-cars-98fe0baa7b3171f120ab5c0fa8a8cdc1.svg" className="img-fluid" alt="" />
                                  <p className="mt-2">1300cc Cars</p>
                            </div>
                          </div>
                      </div>
                      <div className="col-md-2">
                          <div className="card text-center category-cards">
                            <div className="card-body rounded p-0 m-0">
                                  <img src="https://wsa2.pakwheels.com/assets/browse-more/car-ctg-1300cc-cars-98fe0baa7b3171f120ab5c0fa8a8cdc1.svg" className="img-fluid" alt="" />
                                  <p className="mt-2">1300cc Cars</p>
                            </div>
                          </div>
                      </div>

                  </div>
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">School</div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Garden</div>
              </div>
            </div>


            <DataPagination DataLength={display.length} data={display} />


          </div>
        </div>
        </div>

   
    </div>
  );
};
