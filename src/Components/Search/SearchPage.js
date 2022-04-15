import { useParams } from "react-router"



export const SearchPage = ()=>{


        const params = useParams()


        console.log("data in params", params.search)
        


    return(
        <div>
            <h1>{params.search}</h1>
        </div>
    )
}