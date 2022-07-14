export const AddToCart = (id) => {
  return {
    type: "AddToCart",
    payload: id,
  };
};

export const setDataToApi = (data) => {
  return {
    type: "setDataToApi",
    payload: data,
  };
};

export const ToggleCompare = () => {
  return {
    type: "ToggleCompare",
  };
};

export const ProductQuntityAddition = (id) => {
  return {
    type: "ProductQuntityAddition",
    payload: id,
  };
};

export const ProductQuntityReduction = (id) => {
  return {
    type: "ProductQuntityReduction",
    payload: id,
  };
};
