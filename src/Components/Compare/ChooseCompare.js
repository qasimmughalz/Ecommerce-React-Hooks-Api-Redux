import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RealTime } from "../FIlters/Realtime";
import { Navbar } from "../Home/Navbar";
import { Posts } from "../Pagination/Posts";
import { ToggleCompare } from "../redux/actions";
import { MyActions } from "../redux/reducer";
import "./Compare.css";
import axios from "axios";
import { setDataToApi } from "../redux/actions";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { HeroSection } from "../Home/HeroSection";
import { Footer } from "../Home/Footer";





export const ChooseCompare = () => {
  const [data, setData] = useState([]);
  const [car1, setCar1] = useState(0);
  const [car2, setCar2] = useState(0);
  const [mykeys, setMyKeys] = useState([]);
  const [filter, setFilter] = useState([]);
  let cars = [];

  const dispatch = useDispatch();

  // ============== API CALL ============

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products/")
        .then((res) => {
          setData(res.data);
          dispatch(setDataToApi(res.data));
        })
        .catch((e) => console.log(e));
    };
    fetchdata();
  }, []);

  // ============ Logics =============

  useEffect(() => {
    if (filter.length > 0) {
      let keys = Object.keys(filter[0]);
      console.log("dekhle keys", keys)
      const value = [...keys.splice(5,1)]
      setMyKeys(keys);
    }
  }, [filter]);








  const handleSubmit = (e) => {
    e.preventDefault();

    cars.push(car1);
    cars.push(car2);
    const filtered = data.filter((e) => cars.some((val) => val == e.id));
    setFilter(filtered);
  };



  return (
    <div>
         <Navbar></Navbar>
        
        <HeroSection>
        <div className="container mt-5">
                     <div className="row align-items-center pt-5 justify-content-center">
                        <div className="col-md-9   rounded mt-5">
                        <div className="card bg-transparent border-0 p-5">
                            <h1 className="display-4 text-white fw-bold ">Compare X vs Y</h1>
                            <p className="text-left text-white">Compare two of your dream cars and choose on right away !</p> 
                        </div>
                        </div>
                    </div>
                    </div>
        
      </HeroSection>
      <div className="container pt-5">
          
          <div className="my-5 jumbotron shadow-lg">
          
            <form onSubmit={handleSubmit}>
              <div className="row" style={{ height: "auto" }}>
                <div className="col">
                  <label className="my-2 fw-bold">Select Car 1:</label>
                  <select
                    className="form-control"
                    value={car1}
                    onChange={(e) => setCar1(e.target.value)}
                  >
                    <option value="" disabled selected>
                      car name
                    </option>
                    {data.map((e) => {
                      return (
                        <option key={e.id} value={e.id} placeholder="enter">
                          {e.title}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col">
                  <label className="my-2 fw-bold">Select Car 2:</label>
                  <select
                    className="form-control"
                    value={car2}
                    onChange={(e) => setCar2(e.target.value)}
                  >
                    <option value="" disabled selected>
                      car name
                    </option>
                    {data.map((e) => {
                      return (
                        <option key={e.id} value={e.id} placeholder="enter">
                          {e.title}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div
                className="col text-right my-4"
                style={{ textAlign: "right" }}
              >
                <button className="btn btn-success" type="submit">
                  Compare
                </button>
              </div>
            </form>
          </div>
        </div> 
    


      

      <div className="container mt-5 p-5">
        <div className="row">
           {filter.map((e)=>{
             return <div className="col-md-6 text-center">
                        <img className='img-fluid'style={{height:'300px'}} src={e.image}></img>
                    </div>
           })}
           </div>
      </div>

     

      <div className="container pt-5 mb-5 bg-white">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>  
              <th scope='col' style={{width:"10%"}}> Name  </th> 
                {filter.map((val) => {
                  return <th scope="col" style={{width:"45%"}}>{val.title}</th>;
                })}
              </tr>
            </thead>


            {filter.length > 0 ? (
              <tbody>
                {
                    mykeys.map((val) => {
                      return (
                          <tr>
                             <th scope="row">{val.toUpperCase()}</th>
                            {filter.map((el)=> {
                              if( typeof el[val] === 'object' ){
                                return  <td>{el[val].rate}</td>
                              }else if(val === 'image' ){
                               return 
                              }else{
                                return <td>{el[val]}</td>
                              }
                            })}  
                        </tr>
                      );
                    })
            
            }
            
              </tbody>
            ) : (
              <td>Please Select Cars to compare</td>
            )}
          </table>
        </div>
      </div>
            
      <Footer></Footer>
    </div>
  );
};
