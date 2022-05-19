import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';

const Home = () => {


    const [user] = useAuthState(auth);

    return (
        <div className='flex justify-center items-center py-6 bg-white'>
           {
               !user ? <button className='btn btn-link'><Link to='/login'>Login</Link></button> :  <button 
               onClick={() => signOut(auth)}
               className='btn btn-xs bg-white'>Sign Out</button>
           }
        </div>
    );
};

export default Home;