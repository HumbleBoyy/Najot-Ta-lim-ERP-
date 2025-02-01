import React, { useContext, useEffect, useState } from 'react';
import { MainLogo } from '../../assets/logos'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Context } from '../../Context/Context'
import getUsers from '../../service/getUsers';
const Login = () => {
  const [form] = Form.useForm();
  const {setToken} = useContext(Context)
  const [clientReady, setClientReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const allUsers = getUsers("/users")

 console.log(allUsers)
  useEffect(() => {
    setClientReady(true);
  }, []);


  const handleSubmit = (data) => {
    setIsLoading(true) 
    const isUser = allUsers.some(item => item.username === data.username && item.password === data.password)
    
    if(isUser){
      setTimeout(()=> {
        setToken(data)
      },1000)
      
    }
    setTimeout(()=> {
      setIsLoading(false)  
      
      },500)
  };

  

  return (
    <div className='flex justify-center flex-col items-center main_color h-[100vh]'>
      <div className='flex items-center gap-2 mb-5'>
        Logo
        <h2 className='text-[30px] font-meduim text-black'>Admin Panel</h2>
      </div>
      <Form autoComplete='off' form={form} className='flex flex-col gap-3 w-[360px]' layout="inline" onFinish={handleSubmit}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input size='large' prefix={<UserOutlined />} placeholder="Ismingiz" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input size='large' prefix={<LockOutlined />}  type="password" placeholder="Parol"/>
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            size='large'
            type="primary"
            htmlType="submit"
            className='w-full'
            disabled={
              !clientReady ||
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
            loading={isLoading}
          >
            Kirish
          </Button>
        )}
      </Form.Item>
    </Form>
    </div>
  )
}

export default Login
