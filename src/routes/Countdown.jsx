import Title from "../components/Title";
import Counter from "../components/Counter";

import { Navigate } from "react-router-dom";
import { CountdownContext } from "../context/CountdownContext";
import { useContext } from "react";
import useCountdown from "../hooks/useCountdown";
import useShowNumber from "../hooks/useShowNumber";

const Countdown = () => {
  const { event } = useContext(CountdownContext);

  if (!event) return <Navigate to="/" />;

  const eventTitle = event.title;
  const eventColor = event.color;

  const [day, hour, minute, second] = useCountdown(event.date);

  return (
    <>
      <Title title={eventTitle} eventColor={eventColor} />
      <div className="countdown-container">
        <Counter title="Dias" number={useShowNumber(day)} />
        <Counter title="Horas" number={useShowNumber(hour)} />
        <Counter title="Minutos" number={useShowNumber(minute)} />
        <Counter title="Segundos" number={useShowNumber(second)} />
      </div>
    </>
  );
};

export default Countdown;
