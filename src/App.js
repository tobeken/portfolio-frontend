import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import PostJob from './pages/PostJob';
import Profile from './pages/Profile';
import Home from './pages/Home';
import RecommendJobs from './pages/RecommendJobs';
import { Toaster } from 'react-hot-toast';

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
<Toaster position="top-center" reverseOrder={false} />
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/postjob" element={<PostJob/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/recommendjobs" element={<RecommendJobs/>}/> 
      <Route path="/" element={<Home/>}/>
    </Routes>
</BrowserRouter>
</div>
  );
}

export default App;
