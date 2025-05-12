import React, { useEffect } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { Button, Card } from "antd";

import "./Main.scss";

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  const onExit = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="main">
      <button className="main__exit" onClick={onExit}>
        <img
          src="https://img.icons8.com/?size=100&id=EEbC6eISU8ef&format=png&color=EB0E0E"
          alt=""
        />
      </button>
      <div className="main__inner">
        <h1 className="main__title">Admin</h1>
        <Button
          className="main__btn"
          onClick={() => navigate("/schedule/create")}
        >
          <span>Создать расписание</span>
          <img
            className="main__btn-img"
            src="https://img.icons8.com/?size=100&id=61&format=png&color=7C7C7C"
            alt=""
          />
        </Button>
        <Button className="main__btn" onClick={() => navigate("/event/create")}>
          <span>Создать новость</span>
          <img
            className="main__btn-img"
            src="https://img.icons8.com/?size=100&id=61&format=png&color=7C7C7C"
            alt=""
          />
        </Button>
        <Button
          className="main__btn"
          onClick={() => navigate("/schedule/manage")}
        >
          <span>Управление расписанием</span>
          <img
            className="main__btn-img"
            src="https://img.icons8.com/?size=100&id=61&format=png&color=7C7C7C"
            alt=""
          />
        </Button>
      </div>
    </div>
  );
};

export default Main;
