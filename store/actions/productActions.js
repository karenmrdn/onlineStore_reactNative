export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const deleteProduct = (id) => {
  return { type: DELETE_PRODUCT, id };
};

export const createProduct = (title, description, imageUrl, price) => {
  return {
    type: CREATE_PRODUCT,
    productData: {
      title,
      imageUrl,
      description,
      price,
    },
  };
};

export const updateProduct = (id, title, description, imageUrl) => {
  return {
    type: UPDATE_PRODUCT,
    id,
    productData: {
      title,
      description,
      imageUrl,
    },
  };
};
