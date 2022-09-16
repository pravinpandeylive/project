import logo from './logo.svg';
import './App.css';
import { BrowserRouter} from "react-router-dom";

import Nav from './component/Nav';
import Navbar from './component/Navbar';
function App() {
  return (
<>
  <BrowserRouter>
     <Navbar/>
  
      <Nav/>
     
  </BrowserRouter>


    </>

    
    );
  }

export default App;
