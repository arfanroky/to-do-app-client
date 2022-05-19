
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/home' element={<Home></Home>}></Route>
     </Routes>
    </div>
  );
}

export default App;
