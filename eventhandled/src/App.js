import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useFormik } from 'formik';
import { signUpSchema } from './Signup/Signup';
// import { array } from 'yup';
let initialValues =
{
  name: "",
  email: "",
  password: "",
  cpassword: "",
};
let getData = localStorage.getItem("Form");
function App() {
  let arr;
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, { resetForm }) => {
      alert("form Submit");
      console.log(values)
      resetForm({ values: "" });
      if(getData == null){
        arr = [];
      }else{
       arr = JSON.parse(getData);
      }
      arr = [...arr,values];
      localStorage.setItem("Form",JSON.stringify(arr));
    },
  });
  return (
    <>
      <h1>Form Validation</h1>
      <section>
        <form onSubmit={handleSubmit} className='form-container'>
          <label htmlFor="">Username</label>
          <input type="text" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="Enter Your Name" />
          {errors.name && touched.name ? <p>{errors.name}</p> : null}
          <label htmlFor="">Email Address</label>
          <input type="email" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Enter Your Email" />
          {errors.email && touched.email ? <p>{errors.email}</p> : null}
          <label htmlFor="">Phone Number</label>
          <input type="password" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder="Enter Your Password" />
          {errors.password && touched.password ? <p>{errors.password}</p> : null}
          <label htmlFor="">  Confirm Password</label>
          <input type="password" name='cpassword' value={values.cpassword} onChange={handleChange} onBlur={handleBlur} placeholder="Enter Your Confirm Password" />
          {errors.cpassword && touched.cpassword ? <p>{errors.cpassword}</p> : null}
          <button className="btn" type='submit'>Submit</button>
        </form>
        <div className="data">
          <table border={1}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Confirm Password</th>
              </tr>
            </thead>
            <tbody>
              {Array.from(values).map((element, index) => {
                return (<tr key={index}>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>{element.password}</td>
                  <td>{element.cpassword}</td>
                </tr>)
              })
              }
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
export default App;
