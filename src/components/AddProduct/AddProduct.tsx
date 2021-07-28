import { Formik, Form, Field, ErrorMessage, FormikErrors, FormikValues } from 'formik'
import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addProduct } from '../../redux/asyncCallbacks'
import './AddProduct.css'

function AddProduct() {

    const initialValues = {
        id: "",
        productName: "",
        productCode: "",
        releaseDate: "",
        description: "",
        price: "",
        starRating: "",
        imageUrl: ""
    }

    const validate = (values: any): FormikErrors<FormikValues> => {
        let errors: FormikErrors<FormikValues> = {};
        //id
        if (!values.id) {
            errors.id = 'Required';
        }
        else if (values.id < 0) {
            errors.id = 'Id should not be negative'
        }
        //product name
        if (!values.productName) {
            errors.productName = 'Required';
        }
        else if (!/^[a-zA-z ]+$/i.test(values.productName)) {
            errors.productName = 'Must be characters no digits allowed';
        }
        //product code
        if (!values.productCode) {
            errors.productCode = 'Required';
        }
        else if (!/^[A-Z]{3}[-][0-9]{4}$/i.test(values.productCode)) {
            errors.productCode = 'Must be in format XXX-0000';
        }
        //release date
        if (!values.releaseDate) {
            errors.releaseDate = 'Required'
        }
        //price
        if (!values.price) {
            errors.price = 'Required'
        }
        else if (values.price < 0) {
            errors.price = 'Price should not be negative'
        }
        //starRating
        if (!values.starRating) {
            errors.starRating = 'Required'
        }
        else if (values.starRating < 0) {
            errors.starRating = 'Star Rating should not be negative'
        }
        //image path
        if (!values.imageUrl) {
            errors.imageUrl = 'Required'
        }

        return errors;
    };
    
    const dispatch = useDispatch()
    const onSubmit = (values: any): void => {
         dispatch(addProduct(values,history))
    }

    const history = useHistory()

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate} >
            <Form>
                <br />
                <label htmlFor='id'> Product Id:</label><br />
                <Field className='form-control' placeholder='Enter Product Id' type='number' name="id" />
                <div id='error'><ErrorMessage name='id' /></div>

                <br />
                <label htmlFor='productName'> Product Name:</label><br />
                <Field className='form-control' placeholder='Enter Product Name' name="productName" />
                <div id='error'><ErrorMessage name='productName' /></div>

                <br />
                <label htmlFor='productCode'>Product Code:</label><br />
                <Field className='form-control' placeholder='Enter Product Code' name="productCode" />
                <div id='error'><ErrorMessage name='productCode' /></div>

                <br />
                <label htmlFor='releaseDate'> Release Date:</label><br />
                <Field className='form-control' type='date' name="releaseDate" />
                <div id='error'><ErrorMessage name='releaseDate' /></div>

                <br />
                <label htmlFor='description'> Description:</label><br />
                <Field className='form-control' placeholder='Enter Product Description' name="description" />
                <div id='error'><ErrorMessage name='description' /></div>

                <br />
                <label htmlFor='price'> Price:</label><br />
                <Field className='form-control' placeholder='Enter Product Price' type='number' name="price" />
                <div id='error'><ErrorMessage name='price' /></div>

                <br />
                <label htmlFor='starRating'> Star Rating:</label><br />
                <Field className='form-control' placeholder='Enter Product Rating' type='number' name="starRating" />
                <div id='error'><ErrorMessage name='starRating' /></div>

                <br />
                <label htmlFor='imageUrl'> Image Path:</label><br />
                <Field className='form-control' placeholder='Enter Image Path' name="imageUrl" />
                <div id='error'><ErrorMessage name='imageUrl' /></div>

                <br />
                <div className='row'>
                    <div className='col text-center'>
                        <button type='submit' className='btn btn-primary'>Add</button>
                        <button type='reset' className='btn btn-light'>Cancel</button>
                    </div>
                </div>
            </Form>
        </Formik>
    )

}

export default memo(AddProduct)
