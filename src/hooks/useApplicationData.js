import { useState, useEffect } from "react";
import axios from "axios";

//Custom hook to manage stateful data & ajax requests  
const useApplicationData = () => {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  //Renders updated no of spots accordingly
  const updateSpots = () => {
    axios.get("/api/days").then((response) => {
      setState((prev) => ({ ...prev, days: response.data }));
    });
  };

  //Creates new appointment object & sends it to server
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.put(`/api/appointments/${id}`, appointment).then(() => {
      setState((prev) => ({ ...prev, appointments }));
      updateSpots();
    });
  };

  //Deletes an appointment by changing it to null using appointment id 
  // & updates the db
  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete(`/api/appointments/${id}`, appointment).then(() => {
      setState((prev) => ({ ...prev, appointments }));
      updateSpots();
    });
  };

  //State setter
  const setDay = (day) => setState((prev) => ({ ...prev, day }));

  //Fetches all the required data once when loading up the root endpoint
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((state) => ({
        ...state,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);
  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
};

export default useApplicationData;
