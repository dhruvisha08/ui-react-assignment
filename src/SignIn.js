import React from 'react';
import { Field, reduxForm } from 'redux-form';
import logo from './Logo.PNG';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { v4 } from "uuid";

const SignIn = props => {

    const history = useHistory();

    const [user, setUser] = useState({
        uname:"",
        pwd:"",
        id: v4()
    });

    const [ userInfos, setUserInfos ] = useState([])

    useEffect(() => {
        localStorage.setItem("userInfo", JSON.stringify(user));
      }, [user]);

      /**
       * To handle the input change
       * @param {event} e 
       */
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]:value});
    }

    /**
     * To submit the value entered by user
     * @param {event} e 
     */

    const handleSubmit = (e) => {
        e.preventDefault();
        const userInfo = { ...user, id: new Date().getTime().toString() }
        setUserInfos([...userInfos, userInfo ]);
        console.log(userInfo);
        setUser({uname:"", pwd:""});
        history.push('ui-react-assignment/addClient');
    }

    

    return(
        <div className="body">
            <h1> </h1>
            <div className="formBox">
             {/* <!-- Sign up and Sign in button --> */}
             <Link to='ui-react-assignment/signUp'>
                <button type="button" id="signUpButton" >SIGN UP</button>
             </Link>
             <button type="button" id="signInButton" >SIGN IN</button>

                {/* <!-- Logo --> */}
                <img className="logo" src={logo} alt="Opcito"/>

                {/* <!-- Sign in form  --> */}
                <form id="sign" className="input-group1" onSubmit={handleSubmit}>
                    <Field 
                        type="text" 
                        className="InputField" 
                        placeholder="Username*" 
                        name="uname" component="input"
                        value={user.uname}
                        onChange={handleInput}
                        required={true}
                        />
                    <Field 
                        type="password" 
                        className="InputField" 
                        placeholder="Password*" 
                        name="pwd" component="input"
                        value={user.pwd}
                        onChange={handleInput} 
                        required={true}/>
                    <button type="button" id="cancelButton">Cancel</button>
                    <button type="submit" id="submitButton">Submit</button>
                </form>
                </div>
        </div>
        
        
    );
}

export default reduxForm({
    form: "signIn"
})(SignIn);