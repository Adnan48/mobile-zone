import ActionType from './actionType';

export function productDataFromFile(data){
    return (dispatch) => {

        dispatch({type: ActionType.PRODUCT_DATA_FROM_FILE, payload: data})
    }
}
export function getEditProductData(id){
    return (dispatch, getState) => {
        const data = getState().uiReducer.data;
        const editedProduct = data[id];
        console.log(editedProduct);
        dispatch({type: ActionType.GET_EDIT_PRODUCT_DATA, payload: editedProduct})
    }
}

export function updateProductData(data){
    return (dispatch) => {
        dispatch({ type: ActionType.UPDATE_PRODUCT_DATA, payload: data })
    }
}

export function saveEditedData(index){
    return (dispatch, getState) => {
        const {editedProduct, data} = getState().uiReducer;
        const newData = [...data]
         newData[index] = editedProduct;
        dispatch({ type: ActionType.SAVE_EDITED_DATA, payload: newData })
    }
}


