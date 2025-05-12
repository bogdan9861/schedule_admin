import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Input, message } from "antd";

import Dragger from "antd/es/upload/Dragger";
import BackBtn from "../../components/BackBtn/BackBtn";
import service from "../../api/service";

import "./AddEvent.scss";

const AddEvent = () => {
  const navigate = useNavigate();
  const { createEvent } = service();
  const [messageApi, contextHolder] = message.useMessage();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Новость успешно опубликованна",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "При публикации новости произошла ошибка",
    });
  };

  const clearState = () => {
    setTitle("");
    setDescription("");
    setFile(null);
  };

  const onSubmit = () => {
    const fromData = new FormData();
    fromData.append("title", title);
    fromData.append("text", description);
    fromData.append("file", file.file.originFileObj);
    createEvent(fromData)
      .then((res) => {
        success();
        clearState();
      })
      .catch((e) => {
        error();
      });
  };

  return (
    <div className="addEvent">
      {contextHolder}
      <BackBtn />
      <Card className="addEvent__card" title="Создать новость">
        <span className="addEvent__label">Заголовок новости</span>
        <Input
          className="addEvent__input"
          placeholder="Введите текст"
          onChange={(e) => setTitle(e.target.value)}
        />

        <span className="addEvent__label">Текст новости</span>
        <Input.TextArea
          className="addEvent__input"
          placeholder="Введите текст"
          onChange={(e) => setDescription(e.target.value)}
        />

        <span className="addEvent__label">Выберите файл</span>
        <Dragger
          className="addEvent__dragger"
          accept=".png, .jpg, .jpeg, .gif"
          maxCount={1}
          onChange={(file) => setFile(file)}
        />

        <Button className="addEvent__btn" type="primary" onClick={onSubmit}>
          Создать
        </Button>
      </Card>
    </div>
  );
};

export default AddEvent;
