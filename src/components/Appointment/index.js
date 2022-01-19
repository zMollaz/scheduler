import React from "react";
import "./styles.scss";

function Appointment(props) {
  return (
    <article className="appointment">
      
      {props.time ? `Appointment at ${props.time}` : "No Appointments"}
    </article>
  )
}

export default Appointment;