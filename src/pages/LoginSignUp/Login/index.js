import React, { useState } from "react";
import { Button, Form, Input, Radio, message } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import "../stylesTrial.css";

function Login() {
  const [type, setType] = useState("individual");

  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/registration/verify/email",
        {
          email: values.email,
          password: values.password,
        }
      );

      console.log("Login successful:", response.data);
      message.success("Login successful!");

      // Store user details in localStorage
      localStorage.setItem("user", JSON.stringify(response.data.user));

      window.location.href = "/SidebarPage";
    } catch (error) {
      console.error("Login failed:", error);
      if (error.response) {
        console.log("Error response from server:", error.response.data);
        message.error("Login failed. Invalid Email or Password");
      } else {
        message.error("Login failed. Please try again later.");
      }
    }
  };

  return (
    <div>
      <div className="flex h-screen items-center justify-center ">
        <Form
          layout="vertical"
          className="rounded shadow grid grid-cols-2 p-5 gap-3 w-1/2 form-text"
          onFinish={onFinish}
        >
          <h1 className="col-span-2 text-2xl text-center">
            <span>Login</span>
            <hr />
          </h1>

          <Radio.Group
            onChange={(e) => setType(e.target.value)}
            value={type}
            className="col-span-2"
          >
            <Radio value="organization" className="text-base font-normal">
              Organization
            </Radio>
            <Radio value="individual" className="text-base font-normal">
              Individual
            </Radio>
          </Radio.Group>

          <Form.Item
            name="email"
            label="Email"
            className="col-span-2"
            rules={[
              {
                required: true,
                message: "Please enter your email address",
              },
              {
                type: "email",
                message: "Please enter a valid email address.",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            className="col-span-2"
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Button
            type="primary"
            block
            className="col-span-2 text-xl custom-button"
            htmlType="submit"
          >
            Login
          </Button>

          <Link
            to="/register"
            className="col-span-2 text-center text-gray-500 underline text-xl"
          >
            Don't have an account? Register
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;

