import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Products from './Components/Products';


function App() {

  const initialOptions = {
    clientId: "ARcXNIfrwUwed-zseg6cd2tmsRPIzQyAB_YXjdrFYeYDblq6v0uFchUcAjLel979w_ycnSmd-tod1kGa",
    currency: "USD",
    intent: "capture",
};
  const router = createBrowserRouter([{
    path: "/",
    element: <Products />
  }, {path: "*", element: <div>ERROR 404</div>},

])

  return (
    <>
   <PayPalScriptProvider options={initialOptions}>
   <RouterProvider router={router}/>
   </PayPalScriptProvider>
   </>
  )
}

export default App
