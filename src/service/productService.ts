
import { Product } from "../models/product";
import axios from "axios";

export class ProductService {
    static instance: ProductService
    static noOfTimes: number
    private constructor() {
    }
    static getReference(): ProductService {
        if (ProductService.instance === undefined) {
            ProductService.instance = new ProductService()
        }
        return ProductService.instance
    }
    getProducts = async (): Promise<any> => {
        let response = await axios.get("http://localhost:5000/products")
        let array: Product[] = response.data
        array.sort((a, b) => {
            return a.id - b.id
        })
        return array
    }
    async deleteProduct(id: number): Promise<any> {
        let response = await axios.delete(`http://localhost:5000/products/${id}`)
        console.log(response.status)
    }
    async addProduct(product: Product): Promise<any> {
        let response = await axios.post('http://localhost:5000/products', product)
        return response
    }
    async getProductById(id: number): Promise<any> {
        let response = await axios.get(`http://localhost:5000/products/${id}`)
        return response
    }
    async updateProductById(id: number, product: Product): Promise<any> {
        let response = await axios.put(`http://localhost:5000/products/${id}`, product)
        return response
    }
}