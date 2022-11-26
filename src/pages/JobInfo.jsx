import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import moment from "moment"
import { Button } from "antd"

const JobInfo = () => {
    const jobs = useSelector((state)=>state.job.job);
    let {id} = useParams();
    const job = jobs.find(job => job._id===id)

  return (
    <Layout>
          <div>
          <p style={{fontSize:"30px"}}><b>{job.title}</b></p>
          <hr />
          <p><b>会社名</b>:{job.company}</p>

          <p><b>仕事概要</b>:{job.smallDescription}</p>
          <p><b>仕事内容詳細</b>:{job.fullDescription}</p>
          <p><b>応募資格</b>:{job.skillsRequired}</p>
          <p><b>経験年数</b>:{job.experience}</p>
          <p><b>学歴</b>:{job.minimumQualification}</p>

          <hr />
          <p><b>給与</b>:{job.salaryFrom}-{job.salaryTo}</p>
          <p><b>部署</b>:{job.department}</p>
          <p><b>会社概要</b>:{job.companyDescription}</p>

          <div className='flex justify-content-between' style={{paddingTop:"30px"}}>
            <Button>応募する</Button>
            <p><b>更新日：{moment(job.createdAt).format('MM-DD -yyyy')}</b></p>
          </div>

          </div>
       



    </Layout>
  
  )
}

export default JobInfo