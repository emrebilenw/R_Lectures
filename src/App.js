import './App.css';
import Navbar from './Components/Navbar';
import {Routes, Route} from "react-router-dom";
import HomePage from './Components/HomePage';
import Hakkımda from './Components/Hakkımda';
import Tools from './Components/Tools';
import Login from './Components/Login';
import AuthStatus from './Components/AuthStatus';
import Signup from './Components/Signup';

import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import Contact from './Components/Contact';
const App=({auth})=> {

  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);


  return (
    <div className="App ">
      
      <Navbar auth={auth} user={user}></Navbar> 
      <AuthStatus auth={auth}></AuthStatus>
      <Routes>
        <Route path='/Home' element={<HomePage></HomePage>}>
        </Route>

        <Route path='/' element={<HomePage></HomePage>}>
        </Route>

        <Route path='/About' element={<Hakkımda></Hakkımda>}>
        </Route>

        <Route path='/Tools' element={<Tools auth={auth} user={user}></Tools>}>

        </Route>

        <Route path='/Login' element={<Login auth={auth} user={user}></Login>}> 

        </Route>

        <Route path='/Signup' element={<Signup auth={auth} user={user}></Signup>}> 

        </Route>

        <Route path='/Contact' element={<Contact></Contact>}> 

        </Route>
      </Routes>
    </div>
  );
}

export default App;
