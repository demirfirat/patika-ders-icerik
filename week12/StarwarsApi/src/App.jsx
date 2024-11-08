import './App.css';
import {Routes, Route} from 'react-router-dom';
import Mainpage from './components/Mainpage/Mainpage';
import ShipDetails from './components/ShipDetails/ShipDetails';
import Header from './components/Header/Header';

function App() {
  

  return (
    <>
     <Header />
     <Routes>
      <Route path='/' element={<Mainpage />} />
      <Route path='/ship/:name' element={<ShipDetails />} />
     </Routes>
    </>
  )
}

export default App
