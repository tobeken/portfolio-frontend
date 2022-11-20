import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import PostJob from './pages/PostJob';
import Profile from './pages/Profile';
import Home from './pages/Home';
import RecommendJobs from './pages/RecommendJobs';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import AllJobs from './pages/AllJobs';

const App  = () => {

  const {loading} = useSelector(state=>state.alerts)
  return (
     
<BrowserRouter>
{loading && (<div className='spinner-parent'>
  <div class="spinner-border" role="status">
  </div>
</div>)}
<Toaster position="top-center" reverseOrder={false} />
<div className='loader'></div>
    <Routes>
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>}/>
      <Route path="/register" element={<PublicRoute><Register /></PublicRoute>}/>
      <Route path="/alljobs" element={<AllJobs/>} />
      <Route path="/postjob" element={<PostJob/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/recommendjobs" element={<RecommendJobs/>}/> 
      <Route path="/" 
             element={
             <ProtectedRoute>
                  <Home />
             </ProtectedRoute>
            }
            />
    </Routes>
</BrowserRouter>

  );
}

export default App;
