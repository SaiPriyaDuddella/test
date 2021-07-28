import { Product } from "../models/product"
import { ProductService } from "../service/productService"
import { getProductArrayCopyActionCreator, getProductFailureActionCreator, getProductsFailureActionCreator, getProductsSuccessActionCreator, getProductSuccessActionCreator } from "./actionCreators"

export function getProducts() {

    return (dispatch: any) => {
        ProductService.getReference().getProducts()
            .then(
                (products: any) => {
                    dispatch(getProductsSuccessActionCreator(products))
                    dispatch(getProductArrayCopyActionCreator(products))

                }
            )
            .catch(
                (error: any) => {
                    dispatch(getProductsFailureActionCreator(error.message))
                }
            )
    }
}


export function getProductById(id: number) {

    return (dispatch: any) => {
        ProductService.getReference().getProductById(id)
            .then(
                (product: any) => {
                    dispatch(getProductSuccessActionCreator(product.data))
                }
            )
            .catch(
                (error: any) => {
                    dispatch(getProductFailureActionCreator(error.message))
                }
            )
    }
}

export function addProduct(product: Product, history: any) {
    return (dispatch: any) => {
        let serviceReference = ProductService.getReference()
        let response = serviceReference.addProduct(product)
        response.then(
            res => {
                if (res.status === 201) {
                    alert('product added successfully');
                    history.push('/products')
                }
            }
        )
            .catch((error: any) => {
                alert("Product with given id already exists...please change the id")
                dispatch(getProductFailureActionCreator(error.message))
            })
    }

}

export function updateProduct(id: number, product: Product, history: any) {
    return (dispatch: any): void => {
        ProductService.getReference().updateProductById(id, product)
            .then(
                res => {
                    if (res.status === 200) {
                        alert('product updated successfully');
                        history.push('/products')
                    }
                }
            )
            .catch((error: any) => {
                alert("Error occured while updating the product")
                dispatch(getProductFailureActionCreator(error.message))
                history.push('/products')
            })
    }

}
