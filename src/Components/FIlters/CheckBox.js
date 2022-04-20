import axios from "axios"
import { useEffect, useState } from "react"

export const CheckBox = ({setFilteredData})=>{
    const category = [
        {id:1, name:"Men's clothing"},
        {id:2, name:"Women's clothing"},
        {id:3, name:'Jewelery'},
        {id:4, name:'Electronics'},
    ]   

    const [myList, setMyList]= useState([])
    const [Apidata, setApiData] = useState([])
    const [filtered, setFIltered] = useState([])


    useEffect(()=> {
        // ======== Category Set =========
        setMyList(category)
        // ======= API CALL ==========

        const fetched = async ()=>{
            const resp =  await axios.get("https://fakestoreapi.com/products/")
            .then((data)=> setApiData(data.data) )
        }   
        fetched()
    }, [])


    useEffect(()=>{

    const CheckedFilter = myList.filter((val)=> val.isChecked == true)
    
    const categories = CheckedFilter.map((data)=> data.name)

    console.log("changins catt ===", categories)

    console.log("api data chech ", Apidata)

    
    const final = Apidata.filter((e)=> categories.some((val)=> val.toLowerCase() === e.category.toLowerCase()))

    setFilteredData(final)
  

    }, [myList])
    

    const handleChange = (e)=>{
        let {name , checked} = e.target
        if(name == 'allSelect'){
            let temp = myList.map((val)=>  {  
                return  { ...val, isChecked:checked} })
                
            setMyList(temp)
            console.log("my list after",myList )
        }else{
            let temp = myList.map((val)=> val.name == name ? {...val, isChecked: checked} :val)
            setMyList(temp)
            console.log("my list after checked",myList )
        }
    }




    return(
        <div className="pb-5">
            <input type="checkbox" 
            name="allSelect"
            checked={myList.filter((data)=> data?.isChecked !== true).length < 1}
            onChange={handleChange}/>
            
            <label className="ps-1"> SELECT ALL</label>
          

            {myList.map((data, index)=> {
               return <li key={index}>
                        <input type="checkbox" 
                        name={data.name}
                        checked={data?.isChecked || false}
                        onChange={handleChange}
                        />  {data.name.toUpperCase()}
                     </li> 
            })}


        </div>
        
    )
}