import React, { useEffect, useState } from "react";
import { Button, Card, Input, Typography } from "antd";

import "./Login.scss";
import service from "../../api/service";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = service();
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = () => {
    setError("");

    login({ login: userLogin, password })
      .then((res) => {
        if (res.data.role === "ADMIN") {
          navigate("/");
          localStorage.setItem("token", res.data.token);
          return;
        }

        setError("Вы не обладаете правами администратора");
      })
      .catch((e) => {
        if (e.response.data.message) {
          setError(e.response.data.message);
        }
      });
  };

  return (
    <div className="wrapper">
      <Card className="card" title="Вход">
        <Input
          className="card__input"
          placeholder="Логин"
          onChange={(e) => setUserLogin(e.target.value)}
        />
        <Input
          className="card__input"
          placeholder="Пароль"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Typography.Text type="danger" style={{ marginBottom: 6 }}>
          {error}
        </Typography.Text>

        <Button className="card__btn" onClick={onSubmit}>
          Войти
        </Button>
      </Card>
    </div>
  );
};

export default Login;
