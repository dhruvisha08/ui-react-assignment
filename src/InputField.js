import React from 'react';
import {useField} from 'formik';
import './style.css';

const InputField = (props) =>{
  const [field,meta] = useField(props.name);

  return(
    <div className="form-group row no-gutters">
    {props.label && <label htmlFor={props.name} className="label col-lg-3">{props.label}</label>}
    <input
    {...field}
    {...props}
    className=" inputField col-lg-9"/>
    {meta.error && meta.touched && <p className="error">{meta.error}</p>}
    </div>
  )
}

export default InputField;

// import React from 'react';
// import './style.css'

//   const InputField = ({ id, value, label, placeholder, type, onChange }) => {

//   /**
//    * To handle the input entered by user
//    * @param {event} e 
//    * To store the value according to the label
//    * @param {unique id} label 
//    */  
//   const handleChange = (e, label) => {
//       const  value  = e.target.value ;
//       onChange(value, label);
//     };

  
//     return (
//       <div className="form-group row no-gutters">
//         {label && <label htmlFor="input-field" className="label col-lg-3">{label}</label>}
//         <input
//           id={id}
//           type={type}
//           value={value}
//           className=" inputField col-lg-9"
//           placeholder={placeholder}
//           onChange={(e) => {handleChange(e, label)}}
//         />
//         </div>
//     );
//   };

// export default InputField;