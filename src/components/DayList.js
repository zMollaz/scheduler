import React from "react";
import DayListItem from "./DayListItem";

function DayList(props) {
  const { days, day, setDay } = props;
  const parsedDays = days.map((oneDay) => 
    <DayListItem 
    {...oneDay}
    selected={day === oneDay.name}
    setDay={setDay}
    key={oneDay.id}
    />
  );
  return (
  <ul>
    {parsedDays}
  </ul>
  );
}

export default DayList;
