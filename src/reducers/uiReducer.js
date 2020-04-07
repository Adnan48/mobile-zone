import ActionType from '../actions/actionType';

const initState = {
    data: null,
    editedProduct: null,
    editStatus: 'INIT',
  };
  
  export default function uiReducer(state = initState, action) {
    switch(action.type){
        case ActionType.PRODUCT_DATA_FROM_FILE:{
            return{
                ...state,
                data: action.payload,
            }
        }
        case ActionType.GET_EDIT_PRODUCT_DATA:{
            return{
                ...state,
                editedProduct: action.payload,
                editStatus: 'INIT',
            }
        }
        case ActionType.UPDATE_PRODUCT_DATA:{
            return{
                ...state,
                editedProduct: {
                    ...state.editedProduct,
                    ...action.payload,
                },
            }
        }
        
        case ActionType.SAVE_EDITED_DATA:{
            return{
                ...state,
                data: [
                    ...action.payload,
                ],
                editStatus: 'FULFILLED',
            }
        }
        default:
    }
      return state;
  }