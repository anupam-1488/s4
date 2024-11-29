import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./HomePage/Home";
import SpinnerReducer from "./Reducer";
import Loader from "./Components/Loader";
import ProductPage from "./Product";
import Aboutus from "./Aboutus";
import ManagementTeam from "./OurManagement";
import EventPage from "./Events";
import ContactPage from "./Contactus";
 
 
let store = configureStore({
    reducer: {
      red: SpinnerReducer,
    },
  });
 
 
  const RoutesComponent = () => (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product' element={<ProductPage/>} />
          <Route path='/about' element={<Aboutus/>} />
          <Route path='/management' element={<ManagementTeam/>} />
          <Route path='/events' element={<EventPage/>} />
          <Route path='/contactus' element={<ContactPage/>} />





        </Routes>  
        <Loader/>
      </BrowserRouter>
    </Provider>
  );
  export default RoutesComponent;