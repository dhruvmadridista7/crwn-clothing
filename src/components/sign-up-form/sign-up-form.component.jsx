import { useState } from "react";
// import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

// import { UserContext } from "../../contexts/user.context";

import Button from "../button/button.component";
// import './sign-up-form.styles.scss';
import { SignUpContainer } from './sign-up-form.styles';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}



const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const navigate = useNavigate();

    // console.log(formFields);
    // console.log("hit")   //checking re-rendering after using useContext in this component.
    // const { setCurrentUser } = useContext(UserContext);

    const resetFormField = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('password do not match');
            return;
        }
        // console.log(email, password);
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            // console.log(response); 
            // setCurrentUser(user);

            await createUserDocumentFromAuth(user, { displayName });
            navigate('/');
            resetFormField();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }


    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign Up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />

                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    );
};


export default SignUpForm;