import React from "react";
import classNames from "classnames";

import "./InterviewerListItem.scss";

function InterviewerListItem(props) {
  const { name, avatar, setInterviewer, selected } = props;
  
  //Changes the styling to reflect selection of an interviewer
  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": selected,
  });

  return (
    <li onClick={setInterviewer} className={interviewerClass}>
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {selected && name}
    </li>
  );
}

export default InterviewerListItem;
