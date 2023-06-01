import { Alert, Button, Form, Input } from "antd"
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

  const onFinishFailed = () => console.log("failed")

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
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item
          label="Username"
          name="username"
          rules={[rules.require("Please input your username!")]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[rules.require("Please input your password!")]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default LoginForm
