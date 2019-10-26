import React from 'react';
import './signInSignUp.scss';

import SignIn from '../../components/signIn/signIn';
import SignUp from '../../components/signUp/signUp';

const SignInandSignUp = () => (
    <div className="sign-in-sign-up">
    <SignIn />
    <SignUp />
    </div>
)

export default SignInandSignUp;