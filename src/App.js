
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PrivateAuth from './components/PrivateAuth';
import ToDoTaskAdd from './components/ToDoTaskAdd';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

    <div className="App">
      <ToastContainer></ToastContainer>
        <Home></Home>
     <Routes>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/task-add' element={
         <PrivateAuth>
           <ToDoTaskAdd></ToDoTaskAdd>
         </PrivateAuth>
       }></Route>

       <Route path='/login' element={<Login></Login>}></Route>
     </Routes>
    </div>
  );
}

export default App;
