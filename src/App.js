import './App.css';
import Navbar from './components/Navbar'
import  Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>  
    <div>
    <Navbar/>
    </div>
    <div>

    </div>
    <div>

    </div>
      <div>
        <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
