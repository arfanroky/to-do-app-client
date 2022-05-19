import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';

const Home = () => {


    const [user] = useAuthState(auth);

    return (
        <div className='flex justify-center items-center py-6 bg-white'>
           {
               !user ? <button className='btn btn-outline'><Link to='/login'>Login</Link></button> :  <button 
               onClick={() => signOut(auth)}
               className='btn  bg-green-500 border-0 text-black hover:bg-green-800 hover:text-white'>Sign Out</button>
           }
           <button className=' mx-4 py-3 px-6 border border-rose-300 rounded text-rose-500'><Link to='/task-add'>ToDoTaskAdd</Link></button>
        </div>
    );
};

export default Home;