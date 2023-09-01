import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

//Models
import {User} from '../../../models/user.class'
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {
    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER 
    }

    const registerShcema = Yup.object().shape(
        {
            username: Yup.string().min(6, 'username must be too short')
            .max(12, 'username too Long')
            .required('username is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')
            .required('Role is required'),
           password: Yup.string()
           .min(8, 'password to short')
           .required('Password is required'),
           confirm: Yup.string()
           .when("password", {
            is: value => (value && value.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                'Passwoed must match!'
            )
           }).required('You must confirm the password')

        }

    )

    const submit = (values) => {
        alert('register user')
    }
    
    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
            initialValues={initialValues}
           onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 1000));
        alert(JSON.stringify(values, null, 2))} 
           }>

            </Formik>
        </div> 
        );
}

export default RegisterFormik;
