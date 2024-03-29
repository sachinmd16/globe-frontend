import { Padding } from '@mui/icons-material';
import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";


const initialValues = {firstName:"",lastName:"", email: "", password: "",gender:"" };
const validationSchema = {
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "password must be atleast 6 characters").required("Password is required")
}

export const Register = () => {
  const [gender, setGender] = useState("");
  const navigate=useNavigate();

  const handleSubmit = (values) => {
    values.gender=gender;
    console.log("handle submit", values)
  }

  const handleChange=(event)=>{
    setGender(event.target.value)
  }

  return (

      <>
    <Formik onSubmit={handleSubmit} /*validationSchema={validationSchema}*/ initialValues={initialValues} >
      <Form className='space-y-5'>
        <div className='space-y-5'>
          <div >
            <Field as={TextField} name="firstname" placeholder='First Name' type='text' variant='outlined' fullWidth />
            <ErrorMessage name='firstname' component="div" className='text-red-500' />
          </div>
          <div >
            <Field as={TextField} name="lastname" placeholder='Last Name' type='text' variant='outlined' fullWidth />
            <ErrorMessage name='lastname' component="div" className='text-red-500' />
          </div>
          <div >
            <Field as={TextField} name="email" placeholder='Email' type='email' variant='outlined' fullWidth />
            <ErrorMessage name='email' component="div" className='text-red-500' />
          </div>
          <div >
            <Field as={TextField} name="password" placeholder='Password' type='password' variant='outlined' fullWidth />
            <ErrorMessage name='password' component="div" className='text-red-500' />
          </div>
          <div>
          <RadioGroup
          onChange={handleChange}
        row
        aria-labelledby="gender"
        name="gender"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <ErrorMessage name='gender' component='div' className='text-red-500'/>
      </RadioGroup>
          </div>


          <Button sx={{ Padding: ".8rem 0rem" }} fullWidth type='submit' variant='contained' color='primary'>Register</Button>
        </div>
      </Form>
    </Formik>
    
    <div className='flex gap-2 items-center justify-center pt-5'>
         <p>if you already have account ?</p>
         <Button onClick={()=>navigate('/login')}>Login</Button>
    </div>

    </>
  )
}
export default Register;