import api from "../api";

const events = () => {
  const createEvent = async (data) => {
    return await api.post("/events", data);
  };

  return { createEvent };
};

export default events;
