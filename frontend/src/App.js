

import Header from './components/header/header';
import Home from './components/Home/Home';
import Dataprovider from './context/dataprovider';
import {Box} from '@mui/material';
import Detailview from './components/Productdetails/detail-view';
import Cart from './components/cart/cart';


import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Dataprovider>
      <BrowserRouter>
         <Header/>
         <Box style={{marginTop:54}}>
         <Routes> 
            <Route path='/' element={<Home/>}/>
            <Route path='/product/:id' element={<Detailview/>} />
            <Route path='/cart' element={<Cart/>}/>
         </Routes>
         </Box>  
      </BrowserRouter>
    </Dataprovider>
  );
}

export default App;
