import React from "react";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

function InterviewerList(props) {
  const parsedInterviewers = props.interviewers.map((interviewer) => (
    <InterviewerListItem
      setInterviewer={()=> props.onChange(interviewer.id)}
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

export default InterviewerList;


// function InterviewerList(props) {
//   const { interviewers } = props;
//   const [value, setValue] = useState(props.value)
//   const onChange = (id) => {
//     setValue(id);
//   }
//   const parsedInterviewers = interviewers.map((interviewer) => (
//     <InterviewerListItem
//       setInterviewer={()=> onChange(interviewer.id)}
//       name={interviewer.name}
//       avatar={interviewer.avatar}
//       key={interviewer.id}
//       selected={interviewer.id === value}
//     />
//   ));