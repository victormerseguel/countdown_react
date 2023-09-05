import "./Counter.css";
import { useContext } from "react";
import { CountdownContext } from "../context/CountdownContext";

const Counter = ({ title, number }) => {
  const { event } = useContext(CountdownContext);

  let eventColor = event.color;

  return (
    <div className="counter">
      <p className="counter-number" style={{ backgroundColor: eventColor }}>
        {number}
      </p>
      <h3 className="counter-text" style={{ color: eventColor }}>
        {title}
      </h3>
    </div>
  );
};

export default Counter;
