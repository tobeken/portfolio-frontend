import React,{useState} from 'react'
import Layout from '../components/Layout'
import toast from 'react-hot-toast'
import { Row,Col,Form,Tabs,Input,Button, Select} from "antd"
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading } from '../redux/alertsSlice'
import { showLoading } from '../redux/alertsSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const { TextArea } = Input;
const { TabPane } = Tabs;
const { Option } = Select;


const PostJob = () => {
  const dispatch = useDispatch();
  const[jobInfo,setJobInfo] =useState({});
  const[activeTab,setActiveTab] =useState("0")
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user)

  const onFirstFormFinish = (values) => {
    setJobInfo(values)
    setActiveTab("1")
  }
  console.log(jobInfo)

  const onFinalFormFinish = async(values) => {
    values.postedBy = user._id

    try{

      dispatch(showLoading());   
      const response = await axios.post("/api/jobs/postjob",{
        ...jobInfo,
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
    <>
    <Layout>
    <Tabs defaultActiveKey='0' activeKey={activeTab}>
      <TabPane tab="求人情報" key="0">
        <Form layout="vertical" onFinish={onFirstFormFinish}>
          <Row gutter={16}>
            <Col lg={8} sm={24}>
            <Form.Item name="title" rules={[{required:true}]} label="求人名">
              <Input />
            </Form.Item>
            </Col>

            <Col lg={8} sm={24}>
            <Form.Item name="department" rules={[{required:true}]} label="部署">
              <Input />
            </Form.Item>
            </Col>

            <Col lg={8} sm={24}>
            <Form.Item name="experience" rules={[{required:true}]} label="経験数">
              <Input />
            </Form.Item>
            </Col>

            <Col lg={8} sm={24}>
            <Form.Item name="salaryFrom" rules={[{required:true}]} label="年収下限">
              <Input type="number" />
            </Form.Item>
            </Col>

            <Col lg={8} sm={24}>
            <Form.Item name="salaryTo" rules={[{required:true}]} label="年収上限">
              <Input type="number" />
            </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
          <Col lg={8} sm={24}>
            <Form.Item name="skillsRequired" rules={[{required:true}]} label="スキル">
              <Input />
            </Form.Item>
          </Col>

          <Col lg={8} sm={24}>
            <Form.Item name="minimumQualification" rules={[{required:true}]} label="最低限の資格">
              <Select>
                <Option value="Degree">学位</Option>
                <Option value="plus 2">2年以上</Option>
                <Option value="10th">10年</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col lg={24} sm={24}>
            <Form.Item name="smallDescription" rules={[{required:true}]} label="職務概要">
              <TextArea rows={3}/>
            </Form.Item>
          </Col>

          <Col lg={24} sm={24}>
            <Form.Item name="fullDescription" rules={[{required:true}]} label="職務内容">
              <TextArea rows={6}/>
            </Form.Item>
          </Col>

          </Row>

          <Button htmlType='submit'>次へ</Button>

        </Form>
      </TabPane>
      <TabPane tab="会社情報" key="1">
        <Form layout="vertical" onFinish={onFinalFormFinish}>
          <Row gutter={16}>
            <Col lg={8} sm={24}>
              <Form.Item name="company" label="会社名" rules={[{required:true}]}>
                <Input />
              </Form.Item>
            </Col>
            <Col lg={8} sm={24}>
              <Form.Item name="email" label="Eメールアドレス" rules={[{required:true}]}>
                <Input />
              </Form.Item>
            </Col>
              <Form.Item name="phoneNumber" label="電話番号" rules={[{required:true}]}>
                <Input />
              </Form.Item>
            <Col lg={24} sm={24}>
              <Form.Item name="companyDescription" label="会社情報" rules={[{required:true}]}>
                <TextArea rows={3} />
              </Form.Item>
            </Col>
          </Row>
          <Button onClick={()=>{setActiveTab("0")}}>前へ</Button>
          <Button htmlType='submit'>求人を投稿する</Button>
        </Form>
      </TabPane>
    </Tabs>
        
    </Layout>
    </>
  )
}

export default PostJob