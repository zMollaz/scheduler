import React from "react";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

function InterviewerList(props) {
  const { interviewers, interviewer, setInterviewer } = props;
  const parsedInterviewers = interviewers.map((oneInterviewer) => (
    <InterviewerListItem
      setInterviewer={setInterviewer}
      id={oneInterviewer.id}
      name={oneInterviewer.name}
      avatar={oneInterviewer.avatar}
      key={oneInterviewer.id}
      selected={oneInterviewer.id === interviewer}
    />
  ));
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{parsedInterviewers}</ul>
    </section>
  );
}

export default InterviewerList;
