import React from "react";

const Empty = (props) => {
  return (
    <main className="appointment__add">
      <img onClick={props.onAdd} className="appointment__add-button" src="images/add.png" alt="Add" />
    </main>
  );
};

export default Empty;
