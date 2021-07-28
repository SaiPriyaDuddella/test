import { TextField } from '@material-ui/core'
import React, { useRef, useEffect, memo } from 'react'
import { Product } from '../../models/product'

type FilterProductsPropsType = {
    productArray: Product[]
    filterHandler: (filteredArray: Product[]) => void
}
function FilterProducts(props: FilterProductsPropsType) {
    const filterRef = useRef<HTMLInputElement>(null)

    const filterBy = (value: string): void => {
        let result: Product[] = []
        for (const element of props.productArray) {
            let name = element.productName.toLocaleLowerCase()
            let key = value.toLocaleLowerCase()
            if (name.includes(key))
                result.push(element)
        }
        result.sort((a, b) => {
            return a.id - b.id
        })
        props.filterHandler(result)
    }

    useEffect(() => {
        filterRef.current?.focus()
    }, [])
    return (
        <div>
            Filter By : &nbsp;
            <TextField inputRef={filterRef} onChange={(e) => {
                filterBy(e.target.value)
            }} />
        </div>
    )
}

export default memo(FilterProducts)
