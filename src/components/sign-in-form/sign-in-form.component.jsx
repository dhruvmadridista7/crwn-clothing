import { useState } from "react";
// import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES} from "../button/button.component";

// import { UserContext } from "../../contexts/user.context";

import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
 } from "../../utils/firebase/firebase.utils";

// import './sign-in-form.styles.scss';
import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';

const defaultFormFields = {
    email : '',
    password : ''
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const navigate = useNavigate();

    // const { setCurrentUser } = useContext(UserContext);

    const resetFormField = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        navigate('/');
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
            navigate('/');
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
        <SignInContainer>
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
                <ButtonsContainer>
                    <Button type="submit">Sign IN</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign IN</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
};


export default SignInForm;