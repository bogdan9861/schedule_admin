import { Dropdown, Input, Select, Table } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import service from "../../api/service";

import "./Schedules.scss";
import { setFile } from "../../utils/setFile";

const Schedules = () => {
  const [schedules, setSchedules] = useState([]);
  const [groups, setGroups] = useState([]);
  const [group, setGroup] = useState(null);
  const [name, setName] = useState("");

  const { getAllSchedules, getAllGroups, removeSchedule } = service();
  const navigate = useNavigate();

  const columns = [
    {
      title: "Имя файла",
      dataIndex: "fileName",
      key: "fileName",
    },
    {
      title: "Дата",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Файл",
      dataIndex: "file",
      key: "file",
      render: (fileUrl) =>
        fileUrl ? <a href={setFile(fileUrl)}>открыть</a> : "Нет фото",
    },
    {
      title: "Группа",
      dataIndex: "group",
      render: (group) => <span>{group.name}</span>,
    },
    {
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => onDelete(id)}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <img
              style={{
                width: 26,
              }}
              src="https://img.icons8.com/?size=100&id=67884&format=png&color=C21717"
              alt=""
            />
          </button>
        </div>
      ),
    },
  ];

  const onDelete = (id) => {
    const newArr = schedules.filter((schedule) => schedule.id !== id);

    setSchedules(newArr);

    removeSchedule(id)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateSchedule = ({ groupId, name }) => {
    getAllSchedules({ groupId, name })
      .then((res) => {
        setSchedules(res.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    updateSchedule({ groupId: "", name: "" });

    getAllGroups()
      .then((res) => {
        setGroups(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const filterGroups = (group) => {
    setGroup(group);
    updateSchedule({ groupId: group, name });
  };

  return (
    <div className="schedule__wrapper">
      <button className="schedule__back" onClick={() => navigate(-1)}>
        <img
          src="https://img.icons8.com/?size=100&id=85498&format=png&color=000000"
          alt=""
        />
      </button>
      <div className="schedule">
        <Input.Search
          className="schedule__input"
          placeholder="Поиск"
          onChange={(e) => setName(e.target.value)}
          onSearch={() => updateSchedule({ groupId: group, name })}
        />
        <Select
          className="schedule__select"
          placeholder="Фильтр по группе"
          onChange={filterGroups}
        >
          <Select.Option value="">Все</Select.Option>
          {groups.map((el) => (
            <Select.Option value={el.id}>{el.name}</Select.Option>
          ))}
        </Select>
        <Table dataSource={schedules} columns={columns}></Table>
      </div>
    </div>
  );
};

export default Schedules;
