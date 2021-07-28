import React from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../../models/product'
import { createTheme, TableCell, TableRow, ThemeProvider } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Image from 'material-ui-image'
import { red } from '@material-ui/core/colors'
import { Delete } from '@material-ui/icons'

type ProductRowPropType = {
    product: Product
    deleteHandler: Function
}

const theme = createTheme({
    palette: {
        secondary: {
            main: red[500]
        }
    }
})

function ProductRow(props: ProductRowPropType) {

    //uncomment to check error boundary

    // if(props.product.id===8)
    // throw new Error('crashed')
    console.log('row rendered')
    const { product } = props
    return (
        <ThemeProvider theme={theme}>
            <TableRow key={product.id}>
                <TableCell><Link to={`/products/view/${props.product.id}`} ><Image src={props.product.imageUrl} alt='NA'></Image></Link></TableCell>
                <TableCell>{product.productName}</TableCell>
                <TableCell>{product.productCode}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.starRating}</TableCell>

                <TableCell><Button startIcon={<Delete />} variant="contained" color="secondary" onClick={() => props.deleteHandler(props.product.id)}>Delete</Button></TableCell>
            </TableRow>

        </ThemeProvider>

    )
}
function areEqual(prevProps: any, nextProps: any): boolean {

    let keys = Object.keys(prevProps.product)
    for (let x of keys) {

        if (prevProps.product[x] !== nextProps.product[x])
            return false
    }
    return true
}
export default React.memo(ProductRow, areEqual)
