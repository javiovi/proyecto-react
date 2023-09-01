import React from 'react';
import { Formik, Field, Form} from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
                password: Yup.string().required('Password is required')
    }
)

const LoginFormik = () => {
    const initialCredentials = {
        email: '',
        password: ''
    }
  return (
    <div><h4>Login Formik</h4>
        <Formik
        initialValues={
            initialCredentials}
            //*** Uip Validation Schema */
            validationSchema={loginSchema}
            //*** On SUmit Evente */
            onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 1000));
        alert(JSON.stringify(values, null, 2));
        localStorage.setItem('credentials', values) }}> ///* We save the data in the localStorage *//

{/* We Obtain props from FOrmik */}
{props => {
    const {
       touched,
        errors,
        isSubmitting,
       } = props;

    return (
        <Form>
 <label htmlFor="email">Email</label>

        <Field id="email"  type="email" name="email" placeholder="example@email.com" />

        {
            errors.email && touched.email && (
                <div className='error'>
                <p>{errors.email}</p>
                 </div>
            )
        }

 <label htmlFor="email">Password</label>
        <Field
          id="password"
          name="password"
          placeholder="password"
          type='password'
        />

        {errors.password && touched.password && 
        (
            <div className='error'>
                <p>{errors.password}</p>
            </div>
        )}
        <button type="submit">Login</button>
        {isSubmitting ? <p>Login your credentials...</p>: null}
 </Form>
    )


    }
}




</Formik>
 
    </div>
  );
}

export default LoginFormik