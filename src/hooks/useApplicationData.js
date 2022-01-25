import { useState, useEffect } from "react";
import axios from "axios";

const useApplicationData = () => {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const filteredDayAppointmentsArray = state.days.filter(
      (day) => day.name === state.day
    )[0].appointments;

    const filteredArrayOfAppointmentObjects = Object.values(
      appointments
    ).filter((appointment) =>
      filteredDayAppointmentsArray.includes(appointment.id)
    );

    const numOfSpots = filteredArrayOfAppointmentObjects.filter(
      (dayAppointment) => dayAppointment.interview === null
    ).length;

    const dayIndex = state.days.findIndex((day) => day.name === state.day);
    const updatedDay = { ...state.days[dayIndex], spots: numOfSpots };
    const days = [
      ...state.days.slice(0, dayIndex),
      updatedDay,
      ...state.days.slice(dayIndex + 1),
    ];

    return axios.put(`/api/appointments/${id}`, appointment).then(() => {
      setState((prev) => ({ ...prev, appointments, days }));
    });
  };

  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const filteredDayAppointmentsArray = state.days.filter(
      (day) => day.name === state.day
    )[0].appointments;

    const filteredArrayOfAppointmentObjects = Object.values(
      appointments
    ).filter((appointment) =>
      filteredDayAppointmentsArray.includes(appointment.id)
    );

    const numOfSpots = filteredArrayOfAppointmentObjects.filter(
      (dayAppointment) => dayAppointment.interview === null
    ).length;

    const dayIndex = state.days.findIndex((day) => day.name === state.day);
    const updatedDay = { ...state.days[dayIndex], spots: numOfSpots };
    const days = [
      ...state.days.slice(0, dayIndex),
      updatedDay,
      ...state.days.slice(dayIndex + 1),
    ];

    return axios.delete(`/api/appointments/${id}`, appointment).then(() => {
      setState((prev) => ({ ...prev, appointments, days }));
    });
  };

  const setDay = (day) => setState((prev) => ({ ...prev, day }));

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
