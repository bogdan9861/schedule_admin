import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Input } from "antd";

import Dragger from "antd/es/upload/Dragger";
import BackBtn from "../../components/BackBtn/BackBtn";

import "./AddEvent.scss";

const AddEvent = () => {
  const navigate = useNavigate();

  return (
    <div className="addEvent">
      <BackBtn />
      <Card className="addEvent__card" title="Создать новость">
        <span className="addEvent__label">Заголовок новости</span>
        <Input className="addEvent__input" placeholder="Введите текст" />

        <span className="addEvent__label">Текст новости</span>
        <Input.TextArea
          className="addEvent__input"
          placeholder="Введите текст"
        />

        <span className="addEvent__label">Выберите файл</span>
        <Dragger
          className="addEvent__dragger"
          accept=".png, .jpg, .jpeg, .gif"
          maxCount={1}
        />

        <Button className="addEvent__btn" type="primary">
          Создать
        </Button>
      </Card>
    </div>
  );
};

export default AddEvent;
