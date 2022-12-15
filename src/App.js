import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Categories from './components/Categories';
import { Route, Routes } from 'react-router-dom';
import AddCategories from './components/AddCategories';

function App() {
  localStorage.setItem('authToken', "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTY3MTExNzg1N30.2zLEDcpzWcTCClmYQ3A01utB1G2ek0tQPvbgxbGZ4a3PR17YZBVX1NOz9bFVYGVeMx1S4SjRUPNhe9EFi1f0rw")
  return (
    <>
      {/* <Home/> */}
      <Routes>
        <Route exact path='/' element={<Categories/>} />
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/add-categories' element={<AddCategories/>}/>
        
      </Routes>
      
    </>
  );
}

export default App;
