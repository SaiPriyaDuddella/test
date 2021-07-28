import React, { memo } from 'react'
import { Product } from '../../models/product'
import { MenuItem, Select } from '@material-ui/core';

type SortProductsPropsType = {
    productArray: Product[],
    sortHandler: (result: Product[]) => void
}
function SortProducts(props: SortProductsPropsType) {
    function selectChangeHandler(selectedValue: string): void {
        sortArray(selectedValue)
    }
    const { productArray } = props;

    function sortArray(selectedValue: string): void {
        switch (selectedValue) {
            case 'name':
                productArray.sort((a, b) => {
                    if (a.productName > b.productName)
                        return 1
                    return -1
                })
                break;
            case 'price':
                productArray.sort((a, b) => { return a.price - b.price })
                break;
            case 'code':
                productArray.sort((a, b) => {
                    if (a.productCode > b.productCode)
                        return 1
                    return -1
                })
                break;
            case 'rating':
                productArray.sort((a, b) => { return a.starRating - b.starRating })
                break;
            default:
                productArray.sort((a, b) => { return a.id - b.id })

        }

        props.sortHandler(productArray)
    }


    return (
        <>
        Sort By : &nbsp;&nbsp;&nbsp;
        <Select value={""} onChange={(e: any) => {
            selectChangeHandler(e.target.value)
        }}>
            <MenuItem value=''>--select--</MenuItem>
            <MenuItem value='price'>Price</MenuItem>
            <MenuItem value='code'>Code</MenuItem>
            <MenuItem value='rating'>Rating</MenuItem>
            <MenuItem value='name'>Name</MenuItem>
        </Select>
    </>

    )
}

export default memo(SortProducts)
