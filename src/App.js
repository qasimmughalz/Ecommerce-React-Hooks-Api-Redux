import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Cards } from './Components/Card/Cards';



function App() {  

    const [data, setData] = useState([])


      useEffect(()=>{
        const fetchdata = async ()=>{
          const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
          .then(res=> setData(res.data)).catch(e => console.log(e))
        }   
        fetchdata()
      },[])
     
      

      console.log("data sss",data)


      return (
    <div className="container App">

      <div className='m-auto'>
        <h3 className='display-4 my-4 text-center'>The App</h3>
        <input placeholder='search' className='form-control my-5'></input>
        <div className='row'>
            {data.map(val => {
              return <Cards key={val.id} id={val.id} title={val.title}  url={val.url}        ></Cards>
            })}
        </div>
      </div>

    </div>
  );
}

export default App;
