import React from 'react'
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
import axios from 'axios';
import "./index.scss"
import { Helmet } from 'react-helmet';
 const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      description: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      title: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      price: Yup.number()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    
  });
const Add = () => {
  return (
    <div className='add'>
        <Helmet>
                <meta charSet="utf-8" />
                <title> Add Customer</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
         <Formik
       initialValues={{
         img: '',
         description: '',
         title: '',
         name: '',
         price: '',
         img2: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
        axios.post("http://localhost:8000/customer",values)
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
            <h3>Img Url</h3>
           <Field name="img" />
           {errors.img && touched.img ? (
             <div>{errors.img}</div>
           ) : null}
           <h3>Description</h3>
           <Field name="description" />
           {errors.description && touched.description ? (
             <div>{errors.description}</div>
           ) : null}
           <h3>Title</h3>
           <Field name="title"/>
           {errors.title && touched.title ? <div>{errors.title}</div> : null}
           <h3>Name</h3>
           <Field name="name"/>
           {errors.name && touched.name ? <div>{errors.name}</div> : null}
           <h3>Price</h3>
           <Field name="price"/>
           {errors.price && touched.price ? <div>{errors.price}</div> : null}
           <h3>Img2 Url</h3>
           <Field name="img2" />
           {errors.img2 && touched.img2 ? (
             <div>{errors.img2}</div>
           ) : null}
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
    </div>
  )
}

export default Add