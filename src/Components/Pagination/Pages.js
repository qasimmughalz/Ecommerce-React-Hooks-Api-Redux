import { useMemo } from "react"


export const Pages = ({totalLength , toShow , getPageNumber})=>{


    


    const mynum = useMemo(()=>  CreatePages(totalLength , toShow) , [totalLength])



    function CreatePages(pages, show){
        const numbers = []
            for(let i =1; i<= Math.ceil(pages/show) ;i++){
            numbers.push(i)
            console.log("Looping")
            }
            return numbers
    }



    console.log("valll", mynum)
    const handlePage = (page)=>{
        getPageNumber(page)
    }   



    return(
        <div className="col-md-5 m-auto">

        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                { 
                 mynum.map((e, index)=>  <li key={index} class="page-item" onClick={()=> handlePage(e)} ><a class="page-link" href="#">{e}</a></li> )  
                }
            </ul>
            </nav>
         </div>
    )

}