import { Form, Input, Button, Checkbox } from 'antd'
import styled from 'styled-components'
import Header from '../components/Header'

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <>
      <Header />
      <Container>
        <div
          style={{
            position: 'relative',
            left: '-1%'
          }}
        >
          <Form
            name='basic'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Form.Item
              label='Username'
              name='username'
              rules={[
                { required: true, message: 'Please input your username!' }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Password'
              name='password'
              rules={[
                { required: true, message: 'Please input your password!' }
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name='remember'
              valuePropName='checked'
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type='primary' htmlType='submit'>
                Ingresar
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Container>
    </>
  )
}

export default Login

const Container = styled.main`
  padding: 4% 8%;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
