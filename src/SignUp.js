import React, { useEffect, useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import './style.css';
import logo from './Logo.PNG';
import { Link, useHistory } from 'react-router-dom';
import { v4 } from "uuid";


const SignUp = () => {

    const history = useHistory();

    const [user, setUser] = useState({  
        uname:"",
        pwd:"",
        cpwd:"",
        id: v4()

    });

    const { uname, pwd, cpwd } = user

    
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
      }, [user]);

      /**
       * To change the input value
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
        console.log(user);
        setUser({uname:"", pwd:"", cpwd:""});
        history.push('ui-react-assignment/signIn');
    };

    return(
        <div className="body">
            <h1> </h1>
          <div className="formBox">
             {/* <!-- Sign up and Sign in button --> */}  
             <button type="button" id="signUpButton"  >SIGN UP</button>
             <Link to='ui-react-assignment/signIn'>
                <button type="button" id="signInButton" >SIGN IN</button>
             </Link>
        
             {/* <!-- Logo --> */}
             <img className="logo" src={logo} alt="Opcito"/>

             {/* <!-- Sign up form  --> */}
             <form id="sign" className="input-group1" onSubmit={handleSubmit}>
                <Field 
                    type="text" 
                    className="InputField" 
                    placeholder="Username*" 
                    name="uname" component="input"
                    value={uname}
                    onChange={handleInput}
                    required={true}
                     />
                <Field 
                    type="password" 
                    className="InputField" 
                    placeholder="Password*" 
                    name="pwd" component="input"
                    value={pwd}
                    onChange={handleInput} 
                    required={true}/>
                <Field 
                    type="password" 
                    className="InputField" 
                    placeholder="Confirm Password*" 
                    name="cpwd" component="input"
                    value={cpwd}
                    onChange={handleInput}
                    required={true} />
                <button type="button" id="cancelButton">Cancel</button>
                <button type="submit" id="submitButton">Submit</button>
             </form>


            
         </div>
        </div>
        
    );
}

export default reduxForm({
    form: "signUp"
})(SignUp);