import React, { useState, useEffect, memo } from 'react'
import ProductRow from '../ProductRow/ProductRow'
import { ProductService } from '../../service/productService'
import { Product } from '../../models/product'
import styles from './productTable.module.scss'
import FilterProducts from '../FilterProducts/FilterProducts'
import SortProducts from '../SortProducts/SortProducts'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsSuccessActionCreator } from '../../redux/actionCreators'
import { getProducts } from '../../redux/asyncCallbacks'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'

function ProductTable() {

    const [deleteFlag, setDeleteFlag] = useState<boolean>(false)
    const stateValues = useSelector((state: any) => {
        return {
            error: state.productArrayStateRef.error,
            productArray: state.productArrayStateRef.productArray,
            productsArrayCopy: state.productArrayCopyStateRef.productArrayCopy
        }
    })
    const dispatch = useDispatch()
    async function deleteProduct(Id: number): Promise<any> {
        console.log('delete')
        await ProductService.getReference().deleteProduct(Id)
        setDeleteFlag(true)
    }

    const filterArray = (filteredArray: Product[]): void => {
        dispatch(getProductsSuccessActionCreator(filteredArray))
    }

    function sortArray(sortedArray: Product[]): void {
        dispatch(getProductsSuccessActionCreator([...sortedArray]))
    }
    useEffect(() => {
        console.log('useEffect default called')
        dispatch(getProducts())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {

        console.log('useEffect called')
        dispatch(getProducts())
        setDeleteFlag(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deleteFlag])

    return (
        <div className={styles.productTable}>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <FilterProducts productArray={stateValues.productsArrayCopy} filterHandler={filterArray}></FilterProducts>
                    </div>
                    <div className='col-6'>
                        <SortProducts productArray={stateValues.productArray} sortHandler={sortArray}></SortProducts>
                    </div>
                </div>
            </div>
            <br></br>
            {
                stateValues.productArray.length > 0 ?
                    <TableContainer component={Paper}>
                        <Table className={styles.table} aria-label="customized table">
                            <caption style={{ captionSide: 'top', color: 'black' }}>{stateValues.productArray.length} record(s) found...</caption>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Image</TableCell>
                                    <TableCell >Name</TableCell>
                                    <TableCell >Code</TableCell>
                                    <TableCell >Price</TableCell>
                                    <TableCell >Rating</TableCell>
                                    <TableCell >Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    stateValues.productArray.map((product: any) => {
                                        return <ProductRow key={product.id} product={product} deleteHandler={deleteProduct}></ProductRow>
                                    })
                                }

                            </TableBody>
                        </Table>

                    </TableContainer>
                    : <div className='zerorecords'>No records found</div>
            }
        </div>
    )

}

export default memo(ProductTable)
