import { useState } from "react"
import { Cards } from "../Card/Cards"
import { Pages } from "./Pages"
import { Posts } from "./Posts"


export const DataPagination = ({DataLength, data})=> {


        const [toshow, settoShow]= useState(4)
        const [currentPage, setCurrentPage]= useState(1)


        
        const lastPost = currentPage * toshow
        const firstPost = lastPost - toshow
        const current = data.slice(firstPost, lastPost)
        
        const updatePage = (val)=>{
            setCurrentPage(val)
        }




    return (<div>       

                <Posts data={current}></Posts>
                <Pages totalLength={DataLength} toShow={toshow} getPageNumber={updatePage} ></Pages>

        </div>)

}