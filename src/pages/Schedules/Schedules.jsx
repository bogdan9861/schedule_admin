import { Table } from "antd";
import React, { useEffect, useState } from "react";
import service from "../../api/service";

const Schedules = () => {
  const [schedules, setSchedules] = useState([]);

  const { user } = service();
  const { getAllSchedules } = user;

  useEffect(() => {
    getAllSchedules()
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  }, []);

  return <Table></Table>;
};

export default Schedules;
