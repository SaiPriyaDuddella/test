import * as actionTypes from './actionTypes'
import { productArrayState, productState, productArrayCopy } from './ProductsState';


export const productArrayStateReducer = (prevState = productArrayState, action: any) => {
    let newState = null;
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS_ACTION:
            newState = {
                ...prevState,
                productArray: action.data,
                error: ''
            }
            break;

        case actionTypes.GET_PRODUCTS_FAILURE_ACTION:
            newState = {
                ...prevState,
                productArray: [],
                error: action.data
            }
            break;

        default:
            newState = {
                ...prevState
            }
            break;
    }
    return newState
}


export const productStateReducer = (prevState = productState, action: any) => {
    let newState = null;
    switch (action.type) {
        case actionTypes.GET_PRODUCT_SUCCESS_ACTION:
            newState = {
                ...prevState,
                product: action.data,
                error: ''
            }
            break;

        case actionTypes.GET_PRODUCT_FAILURE_ACTION:
            newState = {
                ...prevState,
                product: {},
                error: action.data
            }
            break;

        default:
            newState = {
                ...prevState
            }
            break;
    }
    return newState
}

export const productArrayCopyStateReducer = (prevState = productArrayCopy, action: any) => {
    let newState = null;
    switch (action.type) {
        case actionTypes.GET_PRODUCT_ARRAY_COPY_ACTION:
            newState = {
                ...prevState,
                productArrayCopy: action.data
            }
            break;

        default:
            newState = {
                ...prevState
            }
            break;
    }
    return newState
}