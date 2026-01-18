import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const userSchema = yup.object().shape(
    {
        signup_fname: yup.string().required('First Name is mandatory'),
        signup_lname: yup.string().required('Last Name is mandatory'),
        signup_username: yup.string().required('Username is mandatory'),
        signup_email: yup.string().email('Please enter valid Email ID').required('Email is mandatory'),
        signup_password: yup.string().min(6,'Password should have a minimum of 6 characters').max(12, 'Password should have a maximum of 12 characters').required('Password is mandatory'),
        signup_confirm_password: yup.string().oneOf([yup.ref('signup_password'),null], 'Passwords should match'),
        signup_phn: yup.string().matches(phoneRegExp, 'Phone number is not valid')
    }
);
