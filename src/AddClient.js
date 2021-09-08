import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import InputField from './InputField'
import * as Yup from 'yup';
import './style.css';
import NavBar from './NavBar';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { connect } from 'react-redux';
import { saveForm } from './AddClientAction';
import { useHistory } from 'react-router';


const AddClient = ({ client, saveForm }) =>{

const history = useHistory();
 
const [partner, setPartner] = useState([{ partners: "" }]); 

/**
 * To store the value entered by user
 * @param {event} e 
 * @param {unique value} index 
 */
const handleInputChange = (e, index) => {
  const { name, value } = e.target;
  const list = [...partner];
  list[index][name] = value;
  setPartner(list);
};

const addNewField = () =>{
  setPartner([...partner,{partners:""}]);
  
}

const removeField = index => {
    const list = [...partner];
    list.splice(index, 1);
    setPartner(list);
}

return(
  <div className="body">
    <NavBar/>
    <h1>Add Client</h1>
    <div className="outline">
    <Formik
      initialValues={{
          firstName:'',
          middleName:'',
          lastName:'',
          email:'',
          contact:'',
          address:'',
          dob:'',
          age:'',
          gender:'',
          occupation:'',
          bName:'',
          bType:'',
          partners:'',
          avgIncome:'',
        }}
        validationSchema={
          Yup.object().shape({
            firstName: Yup.string()
              .min(2, 'Too Short!')
              .max(15, 'Too Long!')
              .required('Required'),
            email: Yup.string().email('Invalid email').required('Required'),
            contact: Yup.number()
            .required('Required Field'),
          }) }
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
          const data = {
            firstName: values.firstName,
            email: values.email,
            contact: values.contact
          }
          saveForm(data);
          localStorage.setItem("client", JSON.stringify(values));
          history.push('ui-react-assignment/clientDetails');
        }}
        >
          {({ handleSubmit, }) => (
            <Form className="form-group" onSubmit={handleSubmit}>

            <div className="container-fluid">
              <div className="row no-gutters">

                  <div  className="col-lg-4">
                      <div className="PPBox">
                        <div className="circle">
                            <Field id="profile" name="profilePicture" type="file"
                             accept="image/png,image/jpeg" style={{display: 'none'}}
                             />
                             <label htmlFor="profile">
                             <span className="material-icons add">
                               add_circle
                            </span>
                             </label>
                        </div>

                      </div>
                  </div>
                  
                    <div  className="col-lg-8">
                    <InputField
                        type={"text"}
                        name={"firstName"}
                        label={"First Name*"}
                      />

                      <InputField
                        type={"text"}
                        name={"middleName"}
                        label={"Middle Name"}
                      />
                      <InputField
                        type={"text"}
                        name={"lastName"}
                        label={"Last Name"}
                      />
                    </div>
              </div>
            </div>

              <div className="container-fluid row">
                 <div className="col-lg-6">
                      <InputField
                          type={"email"}
                          label={"Email Id*"}
                          name={"email"}
                          />
                      
                  </div>
                  <div className="col-lg-6">
                      <InputField
                          type="tel"
                          label="Phone*"
                          name="contact" 
                          />
                  </div>
                  
              </div>
              
              <div className="container">
                      <InputField
                          type="text"
                          label="Address"
                          name="address" 
                         />
              </div>

              <div className="container-fluid row">
                    <div class="col-lg-6">
                      <InputField
                          type="date"
                          label="DOB"
                          name="dob"
                          />
                    </div>

                    <div className="col-lg-6">
                      <InputField
                          type="number"
                          label="Age"
                          name="age" 
                          />
                    </div>      
              </div>

              <div className="container-fluid row">
                  <div className="col-lg-6">
                      <InputField
                          type="text"
                          label="Business Name"
                          name="bName"
                          />
                  </div>
                        
                  <div className="col-lg-6">
                      <InputField
                          type="text"
                          label="Business Type"
                          name="btype"
                           />
                  </div>        
                </div>

              <div className="container-fluid ">
                <div className="row ">
                <div className="col-lg-6">
                      <p className="label">Gender</p>
                      <label className="label">
                        <Field type="radio" name="gender" value="female"/>Female
                      </label>
                      <label className="label">
                        <Field type="radio" name="gender" value="male"/>Male
                      </label>
                </div>
                <div className="col-lg-6">
                      <p className="label ">Occupation</p>
                      <label className="label">
                        <Field type="checkbox" name="occupation" value="Bussiness" />
                        Business
                      </label>
                      <label label className="label">
                      <Field type="checkbox" name="occupation" value="Service"  />
                       Service
                    </label>
                </div> 
                </div>              
               </div>     

              <div className="container-fluid row">
               <div className="col-lg-6"> 
              <label className="label" htmlFor="partners">Partners if any</label>
                  {partner.map((x,i) =>{
                          return(
                            <div>
                            {partner.length !== 1 && <button className="button" onClick={ () => removeField(i) }><FaMinusCircle /></button> }
                            <Field type="text" className=" inputField" name="partners"
                                     value={x.partners}
                                     onChange={e => handleInputChange(e, i)}/>
                            {partner.length -1 === i && <button className="button" onClick={addNewField}><FaPlusCircle /></button>}
                            </div>
                          )
                        })}
                </div>
                <div className="col-lg-6">
                <label htmlFor="annualS" style={{marginTop: "20px"}} className="col-lg-5 label">Average Annual Income:</label>
                <select
                          name="annualS"
                           style={{height:"40px", marginTop:"50px"}}>
                          <option value="" label="Salary Range" />  
                          <option value="30K" label="29K"></option>
                          <option value="60K" label="30K-59K"></option>
                          <option value="90K" label="60K-90K"></option>
                       </select> 
              </div>
              </div>    

                      <button type="button" className="btn" style={{marginLeft:"320px"}}>Cancel</button>
                      <button type="reset" className="btn">Reset</button>
                      <button type="submit" className="btn"> Submit</button>  
               
            </Form> )} 
          </Formik>
    </div>
  </div>
  
)
}

const mapStateToProps = state => ({
  client: state.client
})

const mapDispatchToProps = dispatch => {
  return {
    saveForm: (data) => {
      dispatch(saveForm(data))
    }
  };
}



export default connect(mapStateToProps,mapDispatchToProps)(AddClient);