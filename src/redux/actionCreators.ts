import * as actionTypes from './actionTypes'
export const getProductsSuccessActionCreator = (productArray: any) => {
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS_ACTION,
        data: productArray
    }
}

export const getProductsFailureActionCreator = (error: any) => {
    return {
        type: actionTypes.GET_PRODUCTS_FAILURE_ACTION,
        data: error
    }
}

export const getProductSuccessActionCreator = (product: any) => {
    return {
        type: actionTypes.GET_PRODUCT_SUCCESS_ACTION,
        data: product
    }
}

export const getProductFailureActionCreator = (error: any) => {
    return {
        type: actionTypes.GET_PRODUCT_FAILURE_ACTION,
        data: error
    }
}



export const getProductArrayCopyActionCreator = (productArrayCopy: any) => {
    return {
        type: actionTypes.GET_PRODUCT_ARRAY_COPY_ACTION,
        data: productArrayCopy
    }
}