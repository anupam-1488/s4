import logo from './logo.svg';
import './App.css';
import Home from './HomePage/Home';
import Footer from './Footer';
import ProductPage from './Product';
import RoutesComponent from './Routes';
import './Styles/Completecss.css'
import { ToastContainer } from 'react-toastify';


function App() {


  
  return (
    <>
     
      <RoutesComponent/>
      <ToastContainer />
          <Footer />
    </>
  );
}

export default App;
