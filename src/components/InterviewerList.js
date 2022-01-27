import React from "react";
import PropTypes from "prop-types";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

function InterviewerList(props) {
  const parsedInterviewers = props.interviewers.map((interviewer) => (
    <InterviewerListItem
      setInterviewer={() => props.onChange(interviewer.id)}
      name={interviewer.name}
      avatar={interviewer.avatar}
      key={interviewer.id}
      selected={interviewer.id === props.value}
    />
  ));
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{parsedInterviewers}</ul>
    </section>
  );
}

//Ensuring passed prop is an array
InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};

export default InterviewerList;
