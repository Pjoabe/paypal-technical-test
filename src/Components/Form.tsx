import { americanStates } from '../Services/States';
import { countries } from '../Services/countries';
import { useState, ChangeEvent } from 'react';

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
    <div>
    <fieldset>
      <label htmlFor='FirstName'>First Name:
        <input 
        value={FirstName} 
        onChange={handleInputChange} 
        id='FirstName' 
        name='FirstName'  
        type="text"
        required/>
      </label>
      <br/>

      <label htmlFor='LastName'>Last Name:
        <input 
        value={LastName} 
        onChange={handleInputChange} 
        type="text" id='LastName' 
        name='LastName'
        required/>
      </label>
      <br/>

      <label htmlFor='Email'>Email:
        <input 
        value={Email} 
        onChange={handleInputChange} 
        type="email" 
        name='Email' 
        id='Email'
        required/>
      </label>
      <br/>

      <label htmlFor='PhoneNumber'>Phone Number:
        <input 
        value={PhoneNumber} 
        onChange={handleInputChange} 
        type="tel" 
        id='PhoneNumber' 
        name='PhoneNumber'
        required/>
      </label>
      <br/>

        <label htmlFor='Address' />Address:
        <input 
        value={Address} 
        onChange={handleInputChange} 
        type="text" 
        id="Address" 
        name="Address"
        required/>
      <br/>
      <label htmlFor='Address2' />Address2:
        <input 
        value={Address2} 
        onChange={handleInputChange} 
        type="text" 
        id="Address2" 
        name="Address2"/>
      <br/>

      <label  htmlFor='HouseNumber'>House Number:</label>
     <input  
     value={HouseNumber} 
     onChange={handleInputChange} 
     type="text" 
     id="HouseNumber" 
     name="HouseNumber"
     required/>
      <br/>

      <label htmlFor='City'>City:</label>
     <input 
     value={City} 
     onChange={handleInputChange} 
     type="text" 
     id="City" 
     name="City" 
     required/>
      <br/>
      <label htmlFor='Country'>Country:
     <select 
     value={Country}
     onChange={handleInputChange} 
     id="Country" 
     name="Country" 
     required>
      <option  value="" disabled selected>Select the country</option>
      {countries.map((countriesArr) => 
         <option 
         key={countriesArr}
         value={countriesArr}>{countriesArr}</option>
      )}
     </select>
     </label>
     <br/>
      <label htmlFor='State'>State:
     <select 
     value={State}
     onChange={handleInputChange} 
     id="State" 
     name="State" 
     required>
      <option  value="" disabled selected>Select the state</option>
      {americanStates.map((state) => 
         <option 
         key={state}
         value={state}>{state}</option>
      )}
     </select>
     </label>
       <br/>
     <label htmlFor='PostalCode'>Postal Code:</label>
       <input 
       value={PostalCode} 
       onChange={handleInputChange} 
       type="text" 
       id="PostalCode" 
       name="PostalCode"
       pattern="[0-9]{5}-[0-9]{3}" 
       required>
       </input>
    </fieldset>
    </div>
  );
  }