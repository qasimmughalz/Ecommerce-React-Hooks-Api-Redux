

export const AddToCart = (id)=>{
    return {
        type: 'AddToCart',
        payload : id
    }
}


export const setDataToApi= (id)=>{
    return {
        type: 'setDataToApi',
        payload : id
    }
}
