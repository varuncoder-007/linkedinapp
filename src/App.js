import {React,useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux"
import {auth } from "./firebase"
import './App.css';
import { login,logout,selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widgets from './Widgets';


function App() {
  
  const user = useSelector(selectUser);
  const dispatch= useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        dispatch(login({
           email: userAuth.email,
           uid: userAuth.uid,
           displayName: userAuth.displayName,
           photoUrl: userAuth.photoURL
        }))
      }else{
        dispatch(logout());
      }
    })
  },[dispatch])


  return (
    <div className="App">
      {!user ? ( <Login /> 
      ):( <>
      <Header />
    <div className="app__body">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
    </>
    )}
    </div>
  );
}

export default App;
