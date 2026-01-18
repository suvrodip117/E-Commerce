import * as yup from "yup";

export const userSchema = yup.object().shape(
    {
        login_username: yup.string().required('First Name is mandatory'),
        login_password: yup.string().required('Password is mandatory'),
    }
);
