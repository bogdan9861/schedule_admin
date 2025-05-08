import api from "../api";

const schedules = () => {
  const getAllSchedules = async () => {
    await api.get("/schedules");
  };

  return {getAllSchedules};
};

export default schedules;
