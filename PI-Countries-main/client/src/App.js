import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Home from './components/Home';
import Details from './components/Details';
import CreateActivity from './components/CreateActivity'

function App() {
  return (
    
     <Routes>
       <Route exact path ="/" element ={<Landing/>}></Route>
       <Route exact path ="/home" element ={<Home/>}></Route>
       <Route exact path ="/home/paises/:id" element ={<Details/>}></Route>
       <Route exact path ="/Activity" element ={<CreateActivity/>}></Route>
       
     </Routes>
    
  );
}

export default App;
