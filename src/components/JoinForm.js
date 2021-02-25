import React, { useCallback, useState } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../actions/user";
import { USER_JOIN_SUCCESS } from "../reducers/user";

const JoinForm = () => {
  const dispatch = useDispatch();
  const { userJoinLoading, userList } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  const onChangeNickname = useCallback((e) => {
    setNickname(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  const onChangePaswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    console.log(email, nickname, password, passwordCheck);
    if (password !== passwordCheck) {
      return alert("비밀번호가 틀립니다.");
    }
    dispatch(
      addUser({
        type: USER_JOIN_SUCCESS,
        payload: { email, nickname, password },
      })
    );
  }, [email, nickname, password, passwordCheck]);

  return (
    <>
      <Form onFinish={onSubmit}>
        <Input
          type="email"
          value={email}
          placeholder="email"
          onChange={onChangeEmail}
        />
        <Input
          value={nickname}
          placeholder="nickname"
          onChange={onChangeNickname}
        />
        <Input
          type="password"
          value={password}
          placeholder="password"
          onChange={onChangePassword}
        />
        <Input
          type="password"
          value={passwordCheck}
          placeholder="passwordCheck"
          onChange={onChangePaswordCheck}
        />
        <Button htmlType="submit" loading={userJoinLoading}>
          Submit
        </Button>
      </Form>
      <div>
        {userList &&
          userList.map((user) => (
            <>
              <div>{user.email}</div>
              <div>{user.nickname}</div>
            </>
          ))}
      </div>
    </>
  );
};

export default JoinForm;
