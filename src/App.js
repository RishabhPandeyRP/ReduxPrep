import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Cart from './component/Cart';

function App() {
  return (
    <div className="App relative">
      
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
