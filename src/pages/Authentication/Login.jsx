import { Padding } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";


const initialValues={email:"",password:""};
const validationSchema={email:Yup.string().email("Invalid email").required("Email is required"),
password:Yup.string().min(6,"password must be atleast 6 characters").required("Password is required")}

export const Login = () => {
    const[formValues,setFormValues]=useState();
    
    const navigate=useNavigate();

    const handleSubmit=(values)=>{
        console.log("handle submit",values);
    }
  return (

    <>
    <Formik  onSubmit={handleSubmit} validationSchema={validationSchema} initialValues={initialValues} >
        <Form className='space-y-5'>
            <div className='space-y-5'>
                <div >
                    <Field as={TextField} name="email" placeholder='Email' type='email' variant='outlined' fullWidth/>
                     <ErrorMessage name='email' component="div" className='text-red-500'/>
                </div>
                <div >
                    <Field as={TextField} name="password" placeholder='Password' type='password' variant='outlined' fullWidth/>
                     <ErrorMessage name='password' component="div" className='text-red-500'/>
                </div>

                
                <Button sx={{Padding: ".8rem 0rem"}} fullWidth type='submit' variant='contained' color='primary'>Login</Button>
            </div>
            </Form>
    </Formik>

    <div className='flex gap-2 items-center justify-center pt-5'>
         <p>if you don't have account ?</p>
         <Button onClick={()=>navigate('/register')}>Register</Button>
    </div>

    </>
  )
}
