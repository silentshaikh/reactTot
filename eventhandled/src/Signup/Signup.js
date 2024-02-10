import * as Yup from 'yup';
const signUpSchema = Yup.object({
    name: Yup.string().min(3).max(30).required("🔴 Please Enter Your Name"),
    email: Yup.string().email().required("🔴 Please Enter Your Email"),
    password: Yup.string().min(8).required("🔴 Please Enter Your Password"),
    cpassword: Yup.string().required().oneOf([Yup.ref("password"),null],"🔴 Please Enter a Correct Password"),
});
export {signUpSchema};