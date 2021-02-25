import React, { useCallback, useState } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/user";
import { USER_LOGIN_SUCCESS } from "../reducers/user";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLogInLoading } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  const onSubmit = useCallback(() => {
    dispatch(
      login({
        type: USER_LOGIN_SUCCESS,
        payload: {
          email,
          password,
        },
      })
    );
  }, [email, password]);

  return (
    <>
      <Form onFinish={onSubmit}>
        <Input placeholder="email" value={email} onChange={onChangeEmail} />
        <Input
          placeholder="password"
          value={password}
          onChange={onChangePassword}
        />
        <Button htmlType="submit">Login</Button>
      </Form>
    </>
  );
};

export default LoginForm();
