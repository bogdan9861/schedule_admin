import api from "../api";

const groups = () => {
  const getAllGroups = async () => {
    return await api.get("groups");
  };

  return { getAllGroups };
};

export default groups;
