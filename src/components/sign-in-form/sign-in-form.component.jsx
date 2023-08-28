import { useState } from "react";
// import { useContext } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

// import { UserContext } from "../../contexts/user.context";

import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
 } from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email : '',
    password : ''
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    // const { setCurrentUser } = useContext(UserContext);

    const resetFormField = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        // const { user } = await signInWithGooglePopup();
        // console.log(response);
        // setCurrentUser(user);
        // await createUserDocumentFromAuth(user);    //moved this to user.context file to centralize the userAuth with user creation
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            // setCurrentUser(user);
            // console.log(response);
            resetFormField();
        } catch (error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    }


    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an acoount?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />

                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
                {/* <FormInput label="Email" type="email" required onChange={handleChange} name="Email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChange} name="Password" value={password} /> */}
                <div className="buttons-container">
                    <Button type="submit">Sign IN</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign IN</Button>
                </div>
            </form>
        </div>
    );
};


export default SignInForm;