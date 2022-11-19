import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Header from '../components/header/Header'
import JobCard from '../components/card/JobCard'


function Home() {
  const [jobs,setJobs] = useState([]);

  useEffect(()=>{
    const fetchJobs = async()=>{
      const response = await axios.get("/api/jobs/getalljobs")
      setJobs(response.data);
    };
    fetchJobs();

  },[])

  return (
    <>
 
  <Header />
  <h3>aaa</h3>
  {jobs.map((job)=>(
  <JobCard job={job} key={job.id}  />
  ))}


  </>
  
  )
}

export default Home