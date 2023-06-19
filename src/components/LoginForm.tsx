import { Alert, Button, Card, Form, Input } from "antd"
import { FC } from "react"
import { rules } from "../utils/rules"
import { useActions } from "../hooks/useActions"
import { useAppSelector } from "../hooks/useRedux"
import { authSelector } from "../store/selectors"

const LoginForm: FC = () => {
  const { login } = useActions()
  const { loading, error } = useAppSelector(authSelector)

  const onFinish = (data: any) => {
    login({ ...data })
  }

  return (
    <>
      {error && (
        <Alert
          message="Invalid username or password"
          type="error"
          showIcon
          style={{ position: "absolute", top: 100 }}
        />
      )}
      <Card>
        <Form onFinish={onFinish}>
          <Form.Item
            label="Username"
            name="username"
            rules={[rules.require("Username: admin")]}
          >
            <Input placeholder="admin" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[rules.require("Password: 123")]}
          >
            <Input.Password placeholder="123" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}

export default LoginForm
