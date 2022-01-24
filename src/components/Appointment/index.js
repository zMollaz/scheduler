import React from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import "./styles.scss";
import useVisualMode from "hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";


function Appointment(props) {
  const { id, time, interview, interviewers, bookInterview } = props;
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);
  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    bookInterview(id, interview)
    .then(() => transition(SHOW));
  };
  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show student={interview.student} interviewer={interview.interviewer} />
      )}
      {mode === CREATE && (
        <Form
          interviewers={interviewers}
          onCancel={back}
          onSave={save}
          // bookInterview={bookInterview} delete this
        />
      )}
      {mode === SAVING && <Status message="Saving"/>}
    </article>
  );
}

export default Appointment;
