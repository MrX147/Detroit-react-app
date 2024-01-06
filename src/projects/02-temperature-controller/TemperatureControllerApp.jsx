import { useState } from "react";
import Button from "../components/Button";

export default function TemperatureControllerApp() {
  const [count, setCount] = useState(0);

  const handleButtonClick = (action) => {
    if (action === "+") {
      setCount(count + 1);
    } else if (action === "-") {
      setCount(count - 1);
    }
  };
  const circleColorClass = count > 0 ? "red" : count < 0 ? "blue" : "";
  return (
    <div className="container">
      <h1>Temperature Controller</h1>
      <div className="circle-container">
        <h2 className={`circle ${circleColorClass}`}>{count}°C</h2>
      </div>

      <div className="button-container">
        <Button handleClick={() => handleButtonClick("+")} text={"+"} />
        <Button handleClick={() => handleButtonClick("-")} text={"-"} />
        <button type="button" className="btn btn-primary">
          Primary
        </button>
      </div>
    </div>
  );
}
