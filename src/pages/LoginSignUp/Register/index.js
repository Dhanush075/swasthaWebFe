import React from "react";
import { Button, Form, Input, Radio, Checkbox, message } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import OrgForm from "./OrgForm";
import "../stylesTrial.css";

function Register() {
  const [type, setType] = React.useState("individual");

  const onFinish = async (values) => {
    try {
      let requestData = {
        registration_type: type,
        name: values.name,
        email: values.email,
        mobile_number: values.mobile,
        products: values.checkboxGroup,
      };

      if (type === "organization") {
        requestData = {
          ...requestData,
          organization_name: values.organizationName,
          position: values.position,
        };
      }

      const response = await axios.post(
        "http://localhost:4000/api/registration/add",
        requestData
      );

      console.log("Registration successful:", response.data);
      message.success("Registration successful!");

      localStorage.setItem(
        "user",
        JSON.stringify({
          name: values.name,
          email: values.email,
          mobile: values.mobile,
          isLoggedIn: true,
        })
      );

      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    } catch (error) {
      console.error("Registration failed:", error);
      if (error.response) {
        console.log("Error response from server:", error.response.data);
        message.error("Registration failed. Email already exists");
      } else {
        message.error("Registration failed. Please try again later.");
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
            <span>
              {type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()} -
              Registration
            </span>
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

          {/* Individual Registration Fields */}
          {type === "individual" && (
            <>
              <Form.Item
                label="Name"
                name="name"
                className="col-span-2"
                rules={[
                  {
                    required: true,
                    message: "Please enter your name",
                  },
                  {
                    pattern: /^[A-Za-z\s]+$/,
                    message: "Only alphabets and spaces are allowed.",
                  },
                ]}
              >
                <Input />
              </Form.Item>

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
                name="mobile"
                label="Mobile number"
                className="col-span-2"
                rules={[
                  {
                    required: true,
                    message: "Please enter your mobile number",
                  },
                  {
                    pattern: /^(?!(\d)\1{9})[6789]\d{9}$/,
                    message: "Please enter a valid mobile number",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="checkboxGroup"
                label="Which product are you interested in?"
                className="col-span-2"
                rules={[
                  {
                    required: true,
                    message: "Please choose the product you are interested in",
                  },
                ]}
              >
                <Checkbox.Group>
                  <Checkbox
                    value="SwasthaMedical"
                    className="text-base font-normal"
                  >
                    Swastha Medical
                  </Checkbox>
                  <Checkbox
                    value="SwasthaHospital"
                    className="text-base font-normal"
                  >
                    Swastha Hospital
                  </Checkbox>
                  <Checkbox
                    value="SwasthaStree"
                    className="text-base font-normal"
                  >
                    Swastha Stree
                  </Checkbox>
                  <Checkbox
                    value="SwasthaVahan"
                    className="text-base font-normal"
                  >
                    Swastha Vahan
                  </Checkbox>
                </Checkbox.Group>
              </Form.Item>
            </>
          )}

          {/* Organization Registration Fields */}
          {type !== "individual" && <OrgForm type={type} />}

          <Button
            type="primary"
            block
            className="col-span-2 text-xl custom-button"
            htmlType="submit"
          >
            Register Now
          </Button>

          <Link
            to="/login"
            className="col-span-2 text-center text-gray-500 underline text-xl"
          >
            Already have an account? Login
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Register;