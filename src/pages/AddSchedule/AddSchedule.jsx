import { Button, Card, Input, message, Select } from "antd";
import React, { useEffect, useState } from "react";
import service from "../../api/service";

import Dragger from "antd/es/upload/Dragger";
import BackBtn from "../../components/BackBtn/BackBtn";

import "./AddSchedule.scss";

const AddSchedule = () => {
  const [file, setFile] = useState(null);
  const [fileList, setFileList] = useState(null);
  const [groups, setGroups] = useState([]);
  const [group, setGroup] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();

  const { createSchedule, getAllGroups } = service();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "рассписание успешно опубликованна",
    });
  };

  const error = (message) => {
    messageApi.open({
      type: "error",
      content: "При публикации рассписания произошла ошибка",
    });
  };

  useEffect(() => {
    getAllGroups()
      .then((res) => {
        setGroups(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const clearState = () => {
    setGroup(null);
    setFileList([]);
  };

  const onSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("groupId", group);

    createSchedule(formData)
      .then((res) => {
        success();
        clearState();
      })
      .catch((e) => {
        error();
      });
  };

  return (
    <div className="addSchedule">
      {contextHolder}
      <BackBtn />
      <Card className="addSchedule__card" title="Создать расписание">
        <span className="addSchedule__label">Выберите файл</span>
        <Dragger
          className="addSchedule__dragger"
          accept=".pdf, .xls"
          maxCount={1}
          onChange={(file) => {
            setFile(file.file.originFileObj);
            setFileList(file.fileList);
          }}
          fileList={fileList}
        />
        <Select
          className="addSchedule__select"
          placeholder="Выберите группу"
          onChange={(value) => setGroup(value)}
          value={group}
        >
          <Select.Option value="">Все</Select.Option>
          {groups.map((el) => (
            <Select.Option value={el.id}>{el.name}</Select.Option>
          ))}
        </Select>

        <Button className="addSchedule__btn" type="primary" onClick={onSubmit}>
          Опубликовать
        </Button>
      </Card>
    </div>
  );
};

export default AddSchedule;
