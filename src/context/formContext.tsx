import React, {  ReactNode, createContext, useState } from "react";

interface Iform {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    address: string,
    address2: string,
    houseNumber: string,
    city: string,
    state: string,
    postalCode: string,
    country: string,
}



interface ComponentProps {
  children: ReactNode;
}

const INITIAL_STATE = {
firstName: '',
lastName: '',
email: '',
phoneNumber: '',
address: '2211 N First Street',
address2: 'Building 17',
houseNumber: '',
city: 'San Jose',
state: 'CA',
postalCode: '95131',
country: 'US',
}


const INITIAL_STATE2 = 1;




export const FormContext = createContext<{
cartQuantity: number;

formData: Iform;
setCartQuantity: React.Dispatch<React.SetStateAction<number>>
setFormData:  React.Dispatch<React.SetStateAction<Iform>>
}>({
cartQuantity: INITIAL_STATE2,
formData: INITIAL_STATE,
setFormData: () => undefined,
setCartQuantity: () => undefined,
})

export const FormProvider = ({children}: ComponentProps) => {

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [cartQuantity, setCartQuantity] = useState(INITIAL_STATE2);

  return (
  <FormContext.Provider value={{cartQuantity, setCartQuantity,formData, setFormData}}>{children}</FormContext.Provider>
)
}
