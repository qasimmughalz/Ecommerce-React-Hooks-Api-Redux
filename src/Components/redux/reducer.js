





const initialStates = {
        allProducts: [],
        price:0,
        mycart:0, 
        ApiData : [],
        compare:false
}


export const MyActions = (state=initialStates , action)=>{

    switch(action.type){    

        case 'ToggleCompare':
            return {
                ...state,  
                compare: !state.compare
            }

        case 'setDataToApi':
            return {
                ...state, 
                ApiData: action.payload
            }
            
        case 'AddToCart':  
                const filter = state.ApiData.find((e)=> e.id === action.payload)
            return {
                ...state, 
                mycart: state.mycart+1,
                allProducts:[...state.allProducts , filter ]
            }
        default:
            return state


    }
}