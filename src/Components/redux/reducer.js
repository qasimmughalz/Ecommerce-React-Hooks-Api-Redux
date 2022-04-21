const initialStates = {
  allProducts: [],
  price: 0,
  mycart: 0,
  ApiData: [],
  compare: false,
};

export const MyActions = (state = initialStates, action) => {
  switch (action.type) {
    case "ToggleCompare":
      return {
        ...state,
        compare: !state.compare,
      };

    case "setDataToApi":
      return {
        ...state,
        ApiData: action.payload,
      };
    case "ProductQuntityAddition":
        const obj =  state.allProducts.map((el)=> el.id === action.payload ? {...el , qty: el.qty+1 } : el)
        console.log("dispatch dunction ", obj)
      return {
            ...state, 
            allProducts: obj
        };

    case "AddToCart":
      console.log("payload", action.payload)
      console.log("payload", state.ApiData)
      const filter = state.ApiData.find((e) => e.id === action.payload);
      filter.qty = 1;
      return {
        ...state,
        mycart: state.mycart + 1,
        allProducts: [...state.allProducts, filter],
      };
    default:
      return state;
  }
};
