import api from "../api";

const schedules = () => {
  const getAllSchedules = async ({ groupId, name }) => {
    return await api.get(
      `schedules/all?groupId=${groupId || ""}&name=${name || ""}`
    );
  };

  const createSchedule = async (data) => {
    return await api.post(`schedules`, data);
  };

  const removeSchedule = async (id) => {
    return await api.delete(`schedules/${id}`);
  };

  return { getAllSchedules, removeSchedule, createSchedule };
};

export default schedules;
