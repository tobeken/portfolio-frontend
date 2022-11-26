import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import PostJob from './pages/PostJob';
import Profile from './pages/Profile';
import Home from './pages/Home';
import AllJobs from './pages/AllJobs';
import RecommendJobs from './pages/RecommendJobs';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import { useEffect } from 'react';
import { setJob } from './redux/jobsSlice';
import { hideLoading, showLoading } from './redux/alertsSlice';
import axios from 'axios';
import JobInfo from './pages/JobInfo';

const App  = () => {
  const {loading} = useSelector(state=>state.alerts)
  const dispatch = useDispatch()

  const jobs = useSelector((state)=>state.job.job);

  const getJobs = async () => {
    try{
      dispatch(showLoading())
      const response = await axios.get("/api/jobs/getalljobs");
      dispatch(hideLoading());
      dispatch(setJob(response.data));
    }catch(error){
      dispatch(hideLoading())

    }
  }
  useEffect (() => {

    getJobs();
  },[])


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
      <Route path="/jobs/:id" element={<JobInfo/>} />
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
