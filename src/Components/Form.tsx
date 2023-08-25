import { americanStates } from '../Services/States';
import { countries } from '../Services/countries';
import { useState, ChangeEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Form() {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    Address: '',
    Address2: '',
    HouseNumber: '',
    City: '',
    State: '',
    PostalCode: '',
    Country: ''
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
const {FirstName, LastName, Email, PhoneNumber, Address, Address2, HouseNumber, City, State, PostalCode, Country} = formData;
  return (
    <div className='form-row'>
    <fieldset className="form-row">
      <div className='form-group col-md-6'>
      <label htmlFor='FirstName'>First Name:
        <input 
        className="form-control"
        value={FirstName} 
        onChange={handleInputChange} 
        id='FirstName' 
        name='FirstName'  
        type="text"
        required/>
      </label>
      </div>
      <br/>
     <div className='form-group col-md-6'>
      <label htmlFor='LastName'>Last Name:
        <input 
        className="form-control"
        value={LastName} 
        onChange={handleInputChange} 
        type="text" id='LastName' 
        name='LastName'
        required/>
      </label>
      </div>
      <br/>
      <div className='form-group col-md-6'>
      <label htmlFor='Email'>Email:
        <input 
        className="form-control"
        value={Email} 
        onChange={handleInputChange} 
        type="email" 
        name='Email' 
        id='Email'
        required/>
      </label>
      </div>
      <br/>

      <div className='form-group col-md-6'>
      <label htmlFor='PhoneNumber'>Phone Number:
        <input
        className="form-control"
        value={PhoneNumber} 
        onChange={handleInputChange} 
        type="tel" 
        id='PhoneNumber' 
        name='PhoneNumber'
        required/>
      </label>
      </div>
      <br/>
        <div className='form-group col-md-6'>
        <label htmlFor='Address' />Address:
        <input 
        className="form-control"
        value={Address} 
        onChange={handleInputChange} 
        type="text" 
        id="Address" 
        name="Address"
        required/>
        </div>
      <br/>
      <div className='form-group col-md-6'>
      <label htmlFor='Address2' />Address2:
        <input 
        className="form-control"
        value={Address2} 
        onChange={handleInputChange} 
        type="text" 
        id="Address2" 
        name="Address2"/>
      </div>
      <br/>
      <div className='form-group col-md-6'>
      <label  htmlFor='HouseNumber'>House Number:</label>
     <input  
     className="form-control"
     value={HouseNumber} 
     onChange={handleInputChange} 
     type="text" 
     id="HouseNumber" 
     name="HouseNumber"
     required/>
     </div>
      <br/>
      <div className='form-group col-md-6'>
      <label htmlFor='City'>City:</label>
     <input 
     className="form-control"
     value={City} 
     onChange={handleInputChange} 
     type="text" 
     id="City" 
     name="City" 
     required/>
     </div>
      <br/>
      <div className='form-group col-md-6'>
      <label htmlFor='Country'>Country:
     <select 
     className="form-control"
     value={Country}
     onChange={handleInputChange} 
     id="Country" 
     name="Country" 
     required>
      <option disabled selected>Select the country</option>
      {countries.map((countriesArr) => 
         <option 
         key={countriesArr}
         value={countriesArr}>{countriesArr}</option>
      )}
     </select>
     </label>
     </div>
     <br/>
     <div className='form-group col-md-6'>
      <label htmlFor='State'>State:
     <select 
     className="form-control"
     value={State}
     onChange={handleInputChange} 
     id="State" 
     name="State" 
     required>
      <option disabled selected>Select the state</option>
      {americanStates.map((state) => 
         <option 
         key={state}
         value={state}>{state}</option>
      )}
     </select>
     </label>
     </div>
       <br/>
       <div className='form-group col-md-6'>
     <label htmlFor='PostalCode'>Postal Code:</label>
       <input 
       className="form-control"
       value={PostalCode} 
       onChange={handleInputChange} 
       type="text" 
       id="PostalCode" 
       name="PostalCode"
       pattern="[0-9]{5}-[0-9]{3}" 
       required>
       </input>
       </div>
       <button className="btn btn-primary mb-2">Submit</button>
    </fieldset>
    </div>
  );
  }
