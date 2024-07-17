import { Form, Input, Checkbox } from "antd";
import React from "react";

function OrgForm({ type }) {
  return (
    <>
      <Form.Item
        label="Name"
        name="name"
        className="col-span-2"
        rules={[
          {
            required: true,
            message: "Please enter your name!",
          },
          {
            pattern: /^[A-Za-z\s]+$/,
            message: "Only Alphabets and space is allowed.",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Organization Name"
        name="organizationName"
        rules={[
          {
            required: true,
            message: "Please enter your organization name!",
          },
          {
            pattern: /^[A-Za-z\s]+$/,
            message: "Only Alphabets and space is allowed.",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Position"
        name="position"
        rules={[
          {
            required: true,
            message: "Please enter your position!",
          },
          {
            pattern: /^[A-Za-z\s]+$/,
            message: "Only Alphabets and space is allowed.",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            message: "Please enter your email address!",
          },
          {
            pattern: /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,})+$/,
            type: "email",
            message: "Please enter a valid email address.",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="mobile"
        label="Mobile Number"
        rules={[
          {
            required: true,
            message: "Please enter your mobile number!",
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
            message: "Please choice the product you are interested in",
          },
        ]}
      >
        <Checkbox.Group>
          <Checkbox value="SwasthaMedical" className="text-base font-normal">
            Swastha Medical
          </Checkbox>
          <Checkbox value="SwasthaHospital" className="text-base font-normal">
            Swastha Hospital
          </Checkbox>
          <Checkbox value="SwasthaStree" className="text-base font-normal">
            Swastha Stree
          </Checkbox>
          <Checkbox value="SwasthaVahan" className="text-base font-normal">
            Swastha Vahan
          </Checkbox>
        </Checkbox.Group>
      </Form.Item>
    </>
  );
}

export default OrgForm;
