import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RealTime } from "../FIlters/Realtime";
import { Navbar } from "../Home/Navbar";
import { Posts } from "../Pagination/Posts";
import { ToggleCompare } from "../redux/actions";
import { MyActions } from "../redux/reducer";
import "./Compare.css";

export const ChooseCompare = () => {



    const [car1, setCar1]= useState(0)
    const [car2, setCar2] = useState(0)
     let cars = []
     let filter = []



    
    const StateData = useSelector((state) => state.MyActions);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(ToggleCompare());
    //     console.log("Mount Compare", StateData.compare);
    //     return () => {
    //     dispatch(ToggleCompare());
    //     console.log("UnMount Compare", StateData.compare);
    //     };
    // }, []);


  

    const handleSelectedCar1 = (e)=>{
        setCar1(e.target.value)
    }

    const handleSelectedCar2 = (e)=>{
    
        setCar2(e.target.value)
    }



    const handleSubmit= (e)=>{
            e.preventDefault()

            cars.push(car1)
            cars.push(car2)

            console.log("Selected cars : ", cars)
            const filtered = StateData.ApiData.filter((e)=> cars.some((val)=> val == e.id))
            console.log("Filtered Items : ", filtered)
           
    }
  


  return (
    <div >

      <Navbar></Navbar>
      <div className="container-fluid hero-section ">
        <div className="container">
            <div className="mt-5 pt-5 text-white">
                <h3 className="display-4">Car Comparison</h3>
            </div>
          <div className="mb-5 jumbotron shadow-lg" >
            <form onSubmit={handleSubmit}>
              <div className="row" style={{height:'auto'}}>
                <div className="col">
                  <label className="my-2">Select Car 1:</label>
                  <select className="form-control" value={car1}  onChange={handleSelectedCar1}>
                    <option value="" disabled selected>
                      car name
                    </option>
                    {StateData.ApiData.map((e) => {
                      return (
                        <option key={e.id} value={e.id}  placeholder="enter">
                          {e.title}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col">
                  <label className="my-2">Select Car 2:</label>
                  <select className="form-control" value={car2} onChange={handleSelectedCar2}>
                    <option value="" disabled selected>
                      car name
                    </option>
                    {StateData.ApiData.map((e) => {
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
                <button className="btn btn-success" type='submit'>Compare</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container mt-5">
            <div className="table-responsive">
                <table className="">
                    <thead>
                        <th></th>
                    </thead>
                    <tbody>
                            { filter.length > 0 ?
                              <tr> 
                                             <td>{cars[0].id}</td>
                                             <td>{cars[0].title}</td>
                                             <td>{cars[0].category}</td>
                                             <td>{cars[0].description}</td>
                                             <td>{cars[0].price}</td>
                                             <td>{cars[0].rating.count}</td>
                                             <td>{cars[0].rating.rate}</td>
                                </tr> : <p>No data bro</p>
                            }
                      
                    </tbody>
                </table>

            </div>
      </div>
    </div>
  );
};
