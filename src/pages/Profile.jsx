import React from 'react'
import Layout from '../components/Layout'
import { Row, Col, Form, Tabs, Input, Button } from "antd"
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { hideLoading, showLoading } from '../redux/alertsSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import axios from 'axios';
const { TabPane } = Tabs
const { TextArea } = Input;


const Profile = () => {
  const dispatch = useDispatch();
  const [personalInfo,setPersonalInfo] = useState()
  const [activeTab,setActiveTab] = useState("1")
  const navigate = useNavigate();
  const user = useSelector((state)=>state.user.user);
 

  const onPersonalInfoSubmit = (values) => {
    setPersonalInfo(values)
    setActiveTab("2")

  }

  const onPersonalInfoFinal = async(values) => {
    values._id = user._id

    try{

      dispatch(showLoading());   
      const response = await axios.post("/api/user/update",{
        ...personalInfo,
        ...values,
        
      });
      dispatch(hideLoading());
      if(response.data.success){
        toast.success(response.data.message);
        navigate("/");
      }else{
        toast.error(response.data.message);
       
      }
    }catch{
      dispatch(hideLoading())

    }

  }



  return (
    
    <Layout>
      <Tabs defaultActiveKey='1' activeKey={activeTab}>
          <TabPane tab="基本情報" key="1">
            <Form layout="vertical" onFinish={onPersonalInfoSubmit} initialValues={user}>
              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item label="氏" required rules ={[{required: true}]} name="firstName">
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item label="名" required rules ={[{required: true}]} name="lastName">
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item label="電話番号" required rules ={[{required: true}]} name="mobileNumber">
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item label="Eメールアドレス" required rules ={[{required: true}]} name="email">
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item label="ポートフォリオ" required rules ={[{required: true}]} name="portfolio">
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={24} sm={24}>
                  <Form.Item label="職務要約" required rules ={[{required: true}]} name="about">
                    <TextArea rows={4}/>
                  </Form.Item>
                </Col>
                <Col lg={24} sm={24}>
                  <Form.Item label="住所" required rules ={[{required: true}]} name="address">
                    <TextArea rows={4}/>
                  </Form.Item>
                </Col>
              </Row>

              <Button htmlType='submit'>次へ</Button>
            </Form>
          </TabPane>
          <TabPane tab="スキルと経験" key="2">
            <Form  initialValues={user} layout="vertical" onFinish={onPersonalInfoFinal}>
              <Row>
              <Col lg={24} sm={24}>
                <Form.List name="education" >

                  {(education,{add,remove})=>(
                   
                    <div>
                      {education.map((field,index) =>(
                       
                     
                        <div className='flex'>
                          <Form.Item required {...field} label="経歴" style={{width:"80%"}} rules={[{required:true}]}>
                            <TextArea rows={4} />

                          </Form.Item>
                          <Button onClick={()=>{add()}}>追加</Button>
                          {index !== 0 &&(<Button onClick={()=>{remove(index)}}>削除</Button>)}
                        </div>
 
                      ))}
                    </div>
                  )}
              
                </Form.List>
                </Col>

                <Col lg={24} sm={24}>
                <Form.List name="skills" >

                  {(skills,{add,remove})=>(
                    <div>
                      {skills.map((field,index) =>(
                     
                        <div className='flex'>
                          <Form.Item required {...field} label="スキル" style={{width:"80%"}} rules={[{required:true}]}>
                            <TextArea rows={4} />

                          </Form.Item>
                          <Button onClick={()=>{add()}}>追加</Button>
                          {index !== 0 &&(<Button onClick={()=>{remove(index)}}>削除</Button>)}
                        </div>
 
                      ))}
                    </div>
                  )}
              
                </Form.List>
                </Col>

                <Col lg={24} sm={24}>
                <Form.List name="projects" >

                  {(projects,{add,remove})=>(
                    <div>
                      {projects.map((field,index) =>(
                     
                        <div className='flex'>
                          <Form.Item required {...field} label="プロジェクト" style={{width:"80%"}} rules={[{required:true}]}>
                            <TextArea rows={4} />

                          </Form.Item>
                          <Button onClick={()=>{add()}}>追加</Button>
                          {index !== 0 &&(<Button onClick={()=>{remove(index)}}>削除</Button>)}
                        </div>
 
                      ))}
                    </div>
                  )}
              
                </Form.List>
                </Col>

                <Col lg={24} sm={24}>
                <Form.List name="experience" >

                  {(experience,{add,remove})=>(
                    <div>
                      {experience.map((field,index) =>(
                     
                        <div className='flex'>
                          <Form.Item required {...field} label="経験年数" style={{width:"80%"}} rules={[{required:true}]}>
                            <TextArea rows={4} />

                          </Form.Item>
                          <Button onClick={()=>{add()}}>追加</Button>
                          {index !== 0 &&(<Button onClick={()=>{remove(index)}}>削除</Button>)}
                        </div>
 
                      ))}
                    </div>
                  )}
              
                </Form.List>
                </Col>
              </Row>
              <Button onClick={()=>{setActiveTab("1")}}>戻る</Button>
              <Button htmlType='submit'>更新する</Button>

            </Form>

          </TabPane>
      </Tabs>
    </Layout>
   
    
  )
}

export default Profile