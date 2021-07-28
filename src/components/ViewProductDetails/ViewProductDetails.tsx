
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../../redux/asyncCallbacks'
import styles from './ViewProductDetails.module.scss'
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core'
import Image from 'material-ui-image'
import { Edit, KeyboardArrowLeft } from '@material-ui/icons'

function ViewProductDetails(props: any) {

    let params = useParams<any>()
    const stateValues = useSelector((state: any) => {
        return {
            error: state.productStateRef.error,
            product: state.productStateRef.product,
        }
    })

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductById(params.id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Grid className={styles.container} container>
                <br></br><br></br><br></br>
                <Grid container spacing={2}>
                    <Typography className={styles.h4} variant="h5">Details of: {stateValues.product.productName}</Typography>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TableContainer component={Paper}>
                            <Table className={styles.table} aria-label="customized table">
                                <TableBody>
                                    <TableRow>
                                        <TableCell >Name</TableCell>
                                        <TableCell>{stateValues.product.productName}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Code:</TableCell><
                                            TableCell>{stateValues.product.productCode}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Description :</TableCell>
                                        <TableCell>{stateValues.product.description}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Availability:</TableCell>
                                        <TableCell>{stateValues.product.releaseDate}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Rating :</TableCell>
                                        <TableCell>{stateValues.product.starRating}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Price:</TableCell>
                                        <TableCell>{stateValues.product.price}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer><br />
                        <Link style={{ textDecoration: 'none' }} to='/products'> <Button startIcon={<KeyboardArrowLeft />} variant="contained">Back</Button></Link>
                    </Grid>

                    <Grid item xs={4}>
                        <Image className={styles.image} src={stateValues.product.imageUrl} alt='NA'></Image>
                    </Grid>

                    <Grid item xs={2} >
                        <Link style={{ textDecoration: 'none' }} to={`/products/edit/${stateValues.product.id}`}><Button startIcon={<Edit />} variant="contained" color="primary">Edit</Button></Link>
                    </Grid>

                </Grid>
            </Grid>

        </>
    )
}
export default memo(ViewProductDetails)