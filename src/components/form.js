import React, { useState } from 'react';
const RegisterForm = props => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const onChangeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(formState);
    }

// First and last name must be at least 2 characters
// the email must be at least 5 characters
// the passwords must match and be at least 8 characters

    let firstError;
    if(formState.firstName.length < 2 && formState.firstName.length !== 0){
        firstError=<p>First name must be at least 2 characters</p>
    }

    let lastError;
    if(formState.lastName.length < 2 && formState.lastName.length !== 0){
        lastError=<p>Last name must be at least 2 characters</p>
    }

    let emailError;
    if(formState.email.length < 5 && formState.email.length !== 0){
        emailError=<p>Email must be at least 5 characters</p>
    }

    let passwordError;
    if(formState.password.length < 8 && formState.password.length !== 0 ){
        passwordError=<p>Password must be at least 8 characters</p>
    }

    let pwconfirmerror;
    if(formState.confirmPassword.length !== formState.password.length && formState.confirmPassword.length !== 0){
        pwconfirmerror=<p>Password does not match</p>
    }



    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                {firstError}
                <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>
                <br/>        
                {lastError}
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
                <br/>        
                {emailError}
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                <br/>        
                {passwordError}
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                <br/>        
                {pwconfirmerror}
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                <br/>   
                <input type="submit" />     
            </form>

            {/* <p>First Name: {formState.firstName}</p>
            <p>Last Name: {formState.lastName}</p>
            <p>Email: {formState.email}</p>
            <p>Password: {formState.password}</p>
            <p>Confirm Password: {formState.confirmPassword}</p> */}

        </div>
    );
}

export default RegisterForm
