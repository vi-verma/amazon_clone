import React from "react";
import classes from "./Signup.module.css";
import logo from "../../resources/Amazon-Logo.png";
import { Form, Input, InputNumber, Button, Typography, Select } from "antd";

const layout = {
    labelCol: { span: 16 },
    wrapperCol: { span: 24 },
    layout: "vertical",
    // span:2
};
const { Option } = Select;

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: "${label} is required!",
    types: {
        email: "${label} is not a valid email!",
        number: "${label} is not a valid number!",
    },
    number: {
        range: "${label} must be between ${min} and ${max}",
    },
};
/* eslint-enable no-template-curly-in-string */

const Signup = () => {
    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <div className={classes.signup}>
            <img src={logo} alt="logo" />
            <div className={classes.form}>
                <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    validateMessages={validateMessages}
                >
                    <Typography.Title>Create Account</Typography.Title>
                    <Form.Item
                        name={["user", "name"]}
                        label="Name"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={["user", "mobile number"]}
                        label="Mobile"
                        rules={[{ type: "number", min: 6000000000, max: 9999999999   }]}
                    >
                        <Input.Group compact>
                            <Select defaultValue="Sign Up" style={{ width: "20%" }}>
                                <Option value="Sign Up">+91</Option>
                                <Option value="Sign In">+92</Option>
                            </Select>
                            <Input style={{ width: "80%" }} />
                        </Input.Group>
                    </Form.Item>
                    <Form.Item
                        name={["user", "email"]}
                        label="Email"
                        rules={[{ type: "email" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Password"  name="password"  rules={[ { required: true,message: "Please input your password!", }, ]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, color:'red' }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Signup;
