import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../store/actions'
import { Form, Input, Button } from 'antd';
let AddTodo = ({ dispatch }) => {
  // let input

  const [form] = Form.useForm()
  const onFinish = (values) => {
    dispatch(addTodo(values.text))
    form.resetFields();
  }

  return (
    <div style={{padding: "10px 0"}}>
      <Form
        name="basic"
        form={form}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="内容"
          name="text"
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">添加</Button>
      </Form>
      {/* <form
        onSubmit={e => {
          e.preventDefault()
          if(!input.value.trim()){
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input 
          ref={node => {
            input = node
          }}
        />
        <button type="submit">Add Todo</button>
      </form> */}
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo