//Returns an array of appointments for a given day
export function getAppointmentsForDay(state, day) {
  const results = [];
  const requiredDay = state.days.filter((dayObj) => dayObj.name === day)[0];
  if (!requiredDay) {
    return results
  }
  const appointmentsArray = requiredDay.appointments;
  const appointmentsKeys = Object.keys(state.appointments);
  for (const appointment of appointmentsArray) {
    if (appointmentsKeys.includes(appointment.toString())) {
      results.push(state.appointments[appointment]);
    }
  }
  return results;
};

//Returns an array of interviewers for a given day
export function getInterviewersForDay(state, day) {
  const results = [];
  const requiredDay = state.days.filter((dayObj) => dayObj.name === day)[0];
  if (!requiredDay) {
    return results
  }
  const interviewersArray = requiredDay.interviewers;
  const interviewersKeys = Object.keys(state.interviewers);
  for (const interviewer of interviewersArray) {
    if (interviewersKeys.includes(interviewer.toString())) {
      results.push(state.interviewers[interviewer]);
    }
  }
  return results;
};

//Returns an interview object when when given an interview id
export function getInterview(state, interview) {
  if(!interview) {
    return null;
  }
  const interviewObj = {  
    "student": interview.student,
    "interviewer": state.interviewers[interview.interviewer]
  }
  return interviewObj;
};