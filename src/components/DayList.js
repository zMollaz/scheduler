import React from "react";
import DayListItem from "./DayListItem";

function DayList(props) {
  const { days, value, onChange } = props;
  const parsedDays = days.map((oneDay) => (
    <DayListItem
      {...oneDay}
      selected={oneDay.name === value}
      setDay={onChange}
      key={oneDay.id}
    />
  ));
  return <ul>{parsedDays}</ul>;
}

export default DayList;
