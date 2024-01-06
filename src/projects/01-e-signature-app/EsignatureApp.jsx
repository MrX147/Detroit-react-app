import React from "react";
import Title from "../components/Title";
import { useState } from "react";

export default function EsignatureApp() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("default date");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  document.body.style.background = "#eee";
  return (
    <div className="container">
      <Title text="E-Signature Application" />
      <Title text={name} />
      <Title text={date} />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
        eligendi facilis deserunt animi, illum accusamus repellat quos, totam
        maxime aperiam ratione placeat. Ab, deleniti. Similique porro explicabo
        architecto reiciendis sunt.
      </p>
      <footer className="footer">
        <input
          className="date"
          type="date"
          value={date}
          onChange={handleDateChange}
        ></input>
        <input
          className="name"
          type="text"
          value={name}
          onChange={handleNameChange}
        ></input>
      </footer>
    </div>
  );
}
