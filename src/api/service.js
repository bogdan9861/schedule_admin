import events from "./endpoints/events";
import groups from "./endpoints/groups";
import schedules from "./endpoints/schedules";
import user from "./endpoints/users";

const service = () => {
  const usersEndpoints = user();
  const schedulesEndpoints = schedules();
  const groupsEndpoints = groups();
  const eventsEndpoints = events();

  return {
    ...usersEndpoints,
    ...schedulesEndpoints,
    ...groupsEndpoints,
    ...eventsEndpoints,
  };
};

export default service;
