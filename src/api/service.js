import schedules from "./endpoints/schedules";
import user from "./endpoints/users";

const service = () => {
  const usersEndpoints = user();
  const schedulesEndpoints = schedules();

  return {
    user: {
      ...usersEndpoints,
      ...schedulesEndpoints,
    },
  };
};

export default service;
