import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "./axios";
import { useContext } from "react";
import { FormContext } from "../context/formContext";

export default function PaypalButton() {

const {formData} = useContext(FormContext)


  function createOrder() {
    return axios.post("/paypal/order/create", {
      cart: [
        { 
          id: "MLA1376164717",
          name: "Telefono Celular Alcatel 3h Plus 64gb 3gb Ram Space Gray",
          quantity: "1",
          value: 69999,
        },
      ], form: formData, 
    })
    .then((response) => response.data.id);
}
function onApprove(data: any) {
  return axios.post("/paypal/order/capture", {
    orderID: data.orderID,
  })
  .then((response) => {
    const name = response.data.payer.name.given_name;
    alert(`Transaction completed by ${name}. THANK YOU!!!`);
  });
}
    return (
      <PayPalButtons
      createOrder={createOrder}
      onApprove={onApprove}
      />
    );
}

 
