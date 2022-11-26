import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import {useSelector,useDispatch} from "react-redux"
// import axios from 'axios'
import {Row,Col,Button} from "antd"
// import { hideLoading, showLoading } from '../redux/alertsSlice'
// import { setJob } from '../redux/jobsSlice'
import { Link } from "react-router-dom"
import moment from "moment"

const AllJobs = () => {
  // const dispatch = useDispatch()
  const jobs = useSelector((state)=>state.job.job);

  // const getJobs = async () => {
  //   try{
  //     dispatch(showLoading())
  //     const response = await axios.get("/api/jobs/getalljobs");
  //     dispatch(hideLoading());
  //     dispatch(setJob(response.data));
  //   }catch(error){
  //     dispatch(hideLoading())

  //   }
  // }
  // useEffect (() => {

  //   getJobs();
  // },[])


  return (
    <div>
    <Layout>
      <Row gutter={16}>
    {jobs.map((job)=>{
       return <Col lg={12} sm={24}>
        <div className='job-div bs m-2 p-2'>
          <h4>{job.title}</h4>
          <p>{job.company}</p>
          <hr />
          <p>{job.smallDescription}</p>
          <div className="flex">
          <p>給与:<b>{job.salaryFrom}万円-{job.salaryTo}万円</b></p>
          <p style={{marginLeft:"20px"}}>経験年数:<b>{job.experience}年</b></p>
          </div>
          <hr />
          <div className='flex justify-content-between'>
            <Link to={`/jobs/${job._id}`}><Button>詳細を見る</Button></Link>
            <p>更新日：{moment(job.createdAt).format('MMM-DD-YYYY')}</p>
          </div>
       
          
        </div>
        
       </Col>
})}
      </Row>


    </Layout>

    </div>
    
    

  )
}

export default AllJobs