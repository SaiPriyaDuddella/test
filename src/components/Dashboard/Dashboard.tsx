import { Link, Route, Switch } from 'react-router-dom'
import AddProduct from '../AddProduct/AddProduct'
import ProductTable from '../ProductTable/ProductTable'
import Home from '../Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewProductDetails from '../ViewProductDetails/ViewProductDetails'
import EditProduct from '../EditProduct/EditProduct'
import styles from './Dashboard.module.scss'
import Error from '../Error/Error'
import Button from '@material-ui/core/Button';
import { Breadcrumbs, Typography } from '@material-ui/core';
import { Add, HomeOutlined, ViewList } from '@material-ui/icons';

import Skeleton from '@material-ui/lab/Skeleton';

export default function Dashboard() {
    return (
        <>
            <Typography variant="h2" className={styles.h3}>
                <Skeleton variant='text'> Product Management System</Skeleton>
            </Typography>
            <Breadcrumbs aria-label="breadcrumb" className={styles.breadcrumb}>

                <Link to='/home' id={styles.home} >
                    <Button startIcon={<HomeOutlined />} color="secondary"  >Home</Button>
                </Link>
                <Link to='/products' id={styles.home}>
                    <Button startIcon={<ViewList />} color="secondary"  >Products</Button>
                </Link>
                <Link to='/addProduct' id={styles.home}>
                    <Button startIcon={<Add />} color="secondary" >Add Products</Button>
                </Link>

            </Breadcrumbs>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/home' component={Home}></Route>
                <Route exact path='/addProduct' component={AddProduct}></Route>
                <Route exact path='/products' component={ProductTable}></Route>
                <Route exact path='/products/view/:id' component={ViewProductDetails}></Route>
                <Route exact path='/products/edit/:id' component={EditProduct}></Route>
                <Route exact path='*' component={Error}></Route>
            </Switch>
        </>
    )
}
