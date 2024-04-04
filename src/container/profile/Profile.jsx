import React, { useState } from 'react';
import { Form, Input, Button, Upload, Avatar } from 'antd';
import { UserOutlined, LockOutlined, UploadOutlined } from '@ant-design/icons';
import './Profile.css';

export default function Profile() {
  const [image, setImage] = useState();

  const beforeUpload = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
    return false;
  };

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="profile">
    <Form
      name="profile"
      onFinish={onFinish}
    >
      <Avatar src={image || 'https://www.clevelanddentalhc.com/wp-content/uploads/2018/03/sample-avatar.jpg'} size={64} />
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item
        name="fullname"
        rules={[{ required: true, message: 'Please input your Full Name!' }]}
      >
        <Input placeholder="Full Name" />
      </Form.Item>
      <Form.Item
        name="upload"
        valuePropName="fileList"
        getValueFromEvent={(e) => Array.isArray(e) ? e : e && e.fileList}
        rules={[{ required: true, message: 'Please upload your Profile Image!' }]}
      >
        <Upload 
          name="avatar" 
          listType="picture-card" 
          showUploadList={false} 
          beforeUpload={beforeUpload}
          className="avatar-uploader"
        >
          {image ? <img src={image} alt="avatar" style={{ width: '100%' }} /> : 
            <div>
              <UploadOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          }
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
}