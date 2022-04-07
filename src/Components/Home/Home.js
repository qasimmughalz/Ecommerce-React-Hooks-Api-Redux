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




export const Home = () => {
  const [display, setDisplay] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const StoreData = useSelector(state=> state.MyActions)

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


    function handleGetFromChild(val){
        setSearch(val)
    }

    function filteredData(val){
        if(val.length > 0){
          setDisplay(val)
        }else{
          setDisplay(data)
        }
    }
    





  return (
    <div className="container-fluid mt-5">
      <Cart></Cart>    
      <div>
      <h3 className="display-4 my-4 text-center"> Shop</h3>


      {/* ============= FILTERS ================= */}

      <div className="row">
        <div className="col-md-2 shadow-lg border ">

            <h3 className="mt-3">Filters</h3>

            <RealTime value={search} GetFromChild={handleGetFromChild}></RealTime><hr/>
            <ManualFilter></ManualFilter><hr/>
            <CheckBox setFilteredData={filteredData} ></CheckBox>

        </div>

        <div className="col-md-10">

         <DataPagination DataLength={display.length} data={display} />

       
        </div>
      </div>

      </div>
    </div>
  );
};
