import { Button, Form, Input } from 'antd'
import React from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector,useDispatch} from 'react-redux'
import { hideLoading } from '../redux/alertsSlice'
import { showLoading } from '../redux/alertsSlice';


const Login = () => {
    const dispatch = useDispatch()
;    const navigate = useNavigate();
    const onFinish = async(values) => {
        
        try{
            dispatch(showLoading())
            const response = await axios.post("/api/user/login",values);
            dispatch(hideLoading())
            if(response.data.success){
                toast.success(response.data.message)
                toast("Redirecting to login page");
                localStorage.setItem("token",response.data.data);
                navigate("/")

            }else{
                dispatch(hideLoading())
                toast.error(response.data.message)

            }

        }catch(error){
            toast.error("Something went wrong ")

        }
    }
  return (
    <div className='authentication'>
        <div className='authentication-form card p-3'>
            <h1 className='card-title'>ログイン</h1>
            <Form layout="vertical" onFinish={onFinish}>

                <Form.Item label="メールアドレス" name="email">
                    <Input placeholder="メールアドレス"  />
                </Form.Item>
                <Form.Item label="パスワード" name="password">
                    <Input placeholder="パスワード" type="password"/>
                </Form.Item>
                <Button className='primary-button my-2' htmlType='submit'>ログイン</Button>
                <Link to ="/register" className='anchor mt-2'>登録がまだ方はこちら</Link>


            </Form>
        </div>
    </div>

  )
}

export default Login