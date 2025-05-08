import { Button, Card, Input } from "antd";
import React from "react";

import Dragger from "antd/es/upload/Dragger";
import BackBtn from "../../components/BackBtn/BackBtn";

import "./AddSchedule.scss";

const AddSchedule = () => {
  return (
    <div className="addSchedule">
      <BackBtn />
      <Card className="addSchedule__card" title="Создать расписание">
        <span className="addSchedule__label">Выберите файл</span>
        <Dragger className="addSchedule__dragger" accept=".pdf, .xls" maxCount={1} />

        <Button className="addSchedule__btn" type="primary">
          Опубликовать
        </Button>
      </Card>
    </div>
  );
};

export default AddSchedule;
