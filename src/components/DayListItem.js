import React from "react";
import "./DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  const { name, spots, setDay, selected } = props;
  //Conditional styling based on no of spots & day selection
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full ": spots === 0,
  });
  const formatSpots = (spots) => {
    let spotText = "";
    if (spots === 0) {
      spotText = "no spots remaining";
    }
    if (spots === 1) {
      spotText = "1 spot remaining";
    }
    if (spots > 1) {
      spotText = `${spots} spots remaining`;
    }
    return spotText;
  };

  return (
    <li onClick={() => setDay(name)} className={dayClass} data-testid="day">
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  );
}
