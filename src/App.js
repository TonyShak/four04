import './App.css';
import Navbar from './components/Navbar'
import  Footer from './components/Footer'
import Ourbrand from './components/OurBrand';
import Video from './components/Video';
import { BrowserRouter } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>  
    <div>
    <Navbar/>
    </div>
    <div>
    <Video/>
    </div>
  <div>
    <Ourbrand/>
    </div>
    <div>
      
    </div>
      <div >
        <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
