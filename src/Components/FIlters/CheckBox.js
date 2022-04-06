import axios from "axios"
import { useEffect, useState } from "react"


export const CheckBox = ()=>{


    const category = [
        {id:1, name:"men's clothing"},
        {id:2, name:"women's clothing"},
        {id:3, name:'jewelery'},
        {id:4, name:'electronics'},
    ]   


    const [myList, setMyList]= useState([])
    const [Apidaa, setApiData] = useState([])



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

    }, myList)
    



    const handleChange = (e)=>{
        let {name , checked} = e.target
        if(name == 'allSelect'){
            let temp = myList.map((val)=>  {  
                return  { ...val, isChecked:checked} })
                console.log(temp)
            setMyList(temp)
        }else{
            let temp = myList.map((val)=> val.name == name ? {...val, isChecked: checked} :val)
            setMyList(temp)
            console.log("selected", temp)
        }
        
    }


    



    return(
        <div className="pb-5">
            <input type="checkbox" 
            name="allSelect"
            checked={myList.filter((data)=> data?.isChecked !== true).length < 1}
            onChange={handleChange}/>
            
            <label>Select All</label>
          

            {myList.map((data, index)=> {
               return <li key={index}>
                        <input type="checkbox" 
                        name={data.name}
                        checked={data?.isChecked || false}
                        onChange={handleChange}
                        />{data.name}
                     </li> 
            })}

            




        </div>
        
    )
}