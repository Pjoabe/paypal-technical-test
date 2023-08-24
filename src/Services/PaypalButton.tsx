import { PayPalButtons } from "@paypal/react-paypal-js";

export default function PaypalButton() {

  function createOrder() {
    return fetch("/my-server/create-paypal-order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // use the "body" param to optionally pass additional order information
        // like product ids and quantities
        body: JSON.stringify({
            cart: [
                {
                    id: "YOUR_PRODUCT_ID",
                    quantity: "YOUR_PRODUCT_QUANTITY",
                },
            ],
        }),
    })
        .then((response) => response.json())
        .then((order) => order.id);
}
function onApprove(data: any) {
      return fetch("/my-server/capture-paypal-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderID: data.orderID
        })
      })
      .then((response) => response.json())
      .then((orderData) => {
            const name = orderData.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
      });

    }
    return (
      <PayPalButtons
      createOrder={createOrder}
      onApprove={onApprove}
      />
    );
}

 
