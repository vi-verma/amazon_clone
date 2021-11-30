import React from 'react';
import styles from './Login.module.css';
import logo from '../../resources/Amazon-Logo.png';
import { Form, Input, Button, Checkbox, Typography } from 'antd';

const Login = () => {
    
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={styles.login}>
            <img className={styles.logo} src={logo} alt='logo'></img>
            <div className={styles.form}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 24,
                    }}
                    wrapperCol={{
                        span: 24,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    layout='vertical'
                    size='medium'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                   <Typography.Title
                   level={2}
                   style={{textAlign:'left'}}
                   >
                       Sign-In
                   </Typography.Title>
                    <Form.Item
                        label="Email or Mobile phone number"
                        name="Email or Mobile phone number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            // offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            // offset: 8,
                            span: 24,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    );
};

export default Login; <h1>Login</h1>