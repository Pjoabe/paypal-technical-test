import { americanStates } from '../Services/States';
import { countries } from '../Services/countries';
import { useState, ChangeEvent, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FormContext } from "../context/formContext";
import { useNavigate } from 'react-router-dom';


export default function Form() {
  
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);
  const {formData, setFormData} = useContext(FormContext)

  useEffect(() => {
    const isValid = Object.values(formData).every(value => value.length >= 2);
    setIsFormValid(isValid);
  }, [formData]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
     const { name, value } = event.target;
     setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


  const onSubmitButton = () => {
   navigate("/product")
  };

  const { firstName, lastName, email, phoneNumber, address, address2,
  houseNumber, city, state, postalCode, country} = formData;
  return (
    <div className='form-row'>
    <fieldset className="form-row flex-column align-items-center">
      <div className='d-flex'>
      <div className='form-group col-md-6'>
      <label htmlFor='FirstName'>First Name:
        <input 
        className="form-control"
        value={firstName} 
        onChange={handleInputChange} 
        id='FirstName' 
        name='firstName'  
        type="text"
        required/>
      </label>
      </div>

     <div className='form-group col-md-6'>
      <label htmlFor='LastName'>Last Name:
        <input 
        className="form-control"
        value={lastName} 
        onChange={handleInputChange} 
        type="text" id='LastName' 
        name='lastName'
        required/>
      </label>
      </div>
      <br/>
      </div>
      <div className='d-flex'>
      <div className='form-group col-md-6'>
      <label htmlFor='Email'>Email:
        <input 
        className="form-control"
        value={email} 
        onChange={handleInputChange} 
        type="email" 
        name='email' 
        id='Email'
        required/>
      </label>
      </div>
      <br/>

      <div className='form-group col-md-6'>
      <label htmlFor='PhoneNumber'>Phone Number:
        <input
        className="form-control"
        value={phoneNumber} 
        onChange={handleInputChange} 
        type="tel" 
        id='PhoneNumber' 
        name='phoneNumber'
        required/>
      </label>
      </div>
      </div>
      <br/>
      <div className='d-flex'>
        <div className='form-group col-md-6'>
        <label htmlFor='Address' />Address:
        <input 
        placeholder='2211 N First Street'
        className="form-control"
        value={address} 
        onChange={handleInputChange} 
        type="text" 
        id="Address" 
        name="address"
        required/>
        </div>
      <br/>
      <div className='form-group col-md-6'>
      <label htmlFor='Address2' />Address2:
        <input 
        className="form-control"
        value={address2} 
        onChange={handleInputChange} 
        type="text" 
        id="Address2" 
        name="address2"/>
      </div>
      </div>
      <div className='d-flex'>
      <br/>
      <div className='form-group col-md-6'>
      <label  htmlFor='HouseNumber'>House Number:</label>
     <input  
     placeholder='9000'
     className="form-control"
     value={houseNumber} 
     onChange={handleInputChange} 
     type="text" 
     id="HouseNumber" 
     name="houseNumber"
     required/>
     </div>
      <br/>
      <div className='form-group col-md-6'>
      <label htmlFor='City'>City:</label>
     <input 
     placeholder='JACKSONVILLE'
     className="form-control"
     value={city} 
     onChange={handleInputChange} 
     type="text" 
     id="City" 
     name="city" 
     required/>
     </div>
     </div>
      <br/>
      <div className='d-flex'>
      <div className='form-group col-md-6'>
      <label htmlFor='Country'>Country:
     <select 
     placeholder='UNITED STATES OF AMERICA'
     className="form-control"
     value={country}
     onChange={handleInputChange} 
     id="Country" 
     name="country" 
     required>
      <option disabled selected>Select the country</option>
      {countries.map((countriesArr) => 
         <option 
         key={countriesArr.sigla}
         value={countriesArr.sigla}>{countriesArr.nome}</option>
      )}
     </select>
     </label>
     </div>
     <br/>
     <div className='d-flex stateClass'>
     <div className='form-group col-md-6'>
      <label htmlFor='State'>State:
     <select 
     className="form-control"
     value={state}
     onChange={handleInputChange} 
     id="State" 
     name="state" 
     required>
      <option
      placeholder='Arkansas'
      disabled selected>Select the state</option>
      {americanStates.map((state) => 
         <option 
         key={state.sigla}
         value={state.sigla}>{state.nome}</option>
      )}
     </select>
     </label>
     </div>
     </div>
       <br/>
       <div className='d-flex'>
       <div className='form-group col-md-6'>
     <label htmlFor='PostalCode'>Postal Code:</label>
       <input 
       placeholder='72076-9551'
       className="form-control"
       value={postalCode} 
       onChange={handleInputChange} 
       type="text" 
       id="PostalCode" 
       name="postalCode"
       pattern="[0-9]{5}-[0-9]{3}" 
       required>
       </input>
       </div>
       </div>
       </div>
       <div className='d-flex align-items-center m-2'>
       <button
       className="btn btn-primary  submitBtn"
       onClick={onSubmitButton}
       disabled={!isFormValid}
       >Submit</button>
       </div>
    </fieldset>
    </div>
  );
  }
