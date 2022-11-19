import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PostJob from './pages/PostJob';
import Profile from './pages/Profile';
import {css} from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader"
import { useSelector } from 'react-redux';

const App  = () => {
  const {loader} = useSelector(state=>state.loaderReducer)
  return (
    <div className='App'>
      {loader && (  <div className="sweet-loading text-center">
        <FadeLoader color={"blue"} />
       </div>)}
     
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/postjob" element={<PostJob/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
</BrowserRouter>
</div>
  );
}

export default App;
