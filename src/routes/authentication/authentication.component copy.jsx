// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

// import { 
//     auth,
//     signInWithGooglePopup,
//     signInWithGoogleRedirect,
//     createUserDocumentFromAuth 
// } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import './authentication.styles.scss'

const Authentication = () => {
    // const logGoogleUser = async () => {
    //     const { user } = await signInWithGooglePopup();
    //     // console.log(response);
    //     const userDocRef = await createUserDocumentFromAuth(user);
    // }

    // const logGoogleUserWithRedirect = async () => {
    //     const { user } = await signInWithGoogleRedirect();
    //     console.log(user);   //here nothing will be logged because while redirecting
    //                         //our application will be unmounted so we can't able to get the redirected data directly.
    // }
    // to get the redirected data we have to use auth and useEffect
    // useEffect(() => {
    //     (async () => {
    //         const response = await getRedirectResult(auth);
    //         // console.log(response);
    //         if(response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     })();
    // }, []);

    return (
        <div className="authentication-container">
            <SignInForm />
            {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
            <SignUpForm />
        </div>
    );
}

export default Authentication;


