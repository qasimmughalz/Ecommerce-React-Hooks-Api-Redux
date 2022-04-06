import { getByDisplayValue } from '@testing-library/react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Details } from './Components/Card/Detail';
import { CartDetails } from './Components/Cart/CartDetails';

function App() {
  

  return (
    <div className='container-fluid App'>


          <Routes>
            <Route path='/' element={<Home/>}> </Route>
            <Route path='/products/:id' element={<Details/>} ></Route>
            <Route path='/cart' element={<CartDetails/>} ></Route>
          </Routes>

        
    </div>
  );
}

export default App;
