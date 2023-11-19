import React, {useState} from 'react';
import { Link, Redirect} from 'react-router-dom';
import Layout from '../core/layout';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import { response } from 'express';

const Signup = () => {
    const [values, setValues] = useState({
        name: "Ibukun Awosika",
        email: 'fred.aleokemalachi@gmail.com',
        password: 'rrrrrrrr',
        buttonText: 'Submit'
    });

    const {name, email, password, buttonText} = values;
    
    const handleChange =(name,event) => {
        setValues({...values, [name]: event.target.value});
    }
    
    const clickSubmit = event => {
        event.preventDefault()
        setValues({...values, buttonText: 'Submitting'})
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signup`,
            data: {name, email, password}
        })
        .then(response => {
            console.log('SIGNUP SUCCESS', response)
            setValues({...values, name: '', email: '', password: '', buttonText: 'Submitted'})
            toast.success(response.data.message);
        })
        .catch((error) => {
            console.log('SIGNUP ERROR', error.response.data);
            setValues({ ...values, buttonText: 'Submit' });
            toast.error(error.response.data.error);
        });

    const signupForm = () => (
        <form>
            <div>
                <lable className='text-muted'>Name</lable>
                <input onChange={(event) => handleChange("name", event)} type="text" className='form-control'/>

            </div>

            <div>
                <lable className='text-muted'>Email</lable>
                <input onChange={(event) => handleChange("email", event)} type="text" className='form-control'/>
                
            </div>
            
            <div>
                <lable className='text-muted'>Password</lable>
                <input onChange={(event) => handleChange("password", event)} type="text" className='form-control'/>
            </div>
            <div>
                <button className='btn btn-primary' onClick={clickSubmit}>{buttonText}</button>
            </div>
        </form>
    )

    return(
    <Layout>
        <div className='col-md-6 offset-md-3'>
            <ToastContainer />
            {JSON.stringify({name, email, password})}
            <h1 className='p-5 text-center'>Signup</h1>
            {signupForm()}
        </div>
    </Layout>
)}
}
export default Signup;