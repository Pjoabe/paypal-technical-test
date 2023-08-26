import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Product from './Components/Products';
import { FormProvider } from './context/formContext';
import Form from './Pages/Form';


function App() {

  const initialOptions = {
    clientId: "ARcXNIfrwUwed-zseg6cd2tmsRPIzQyAB_YXjdrFYeYDblq6v0uFchUcAjLel979w_ycnSmd-tod1kGa",
    currency: "BRL",
    intent: "capture",
};
  const router = createBrowserRouter([{
    path: "/",
    element: <Form />
  }, {path: "*", element: <div>ERROR 404</div>},
  {
    path: "/product",
    element: <Product />
  }
])

  return (
    <FormProvider>
   <PayPalScriptProvider options={initialOptions}>
   <RouterProvider router={router}/>
   </PayPalScriptProvider>
    </FormProvider>
  )
}

export default App
