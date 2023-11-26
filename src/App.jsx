import { useState, useEffect } from "react";
import "./App.css";
import bg from "./assets/bg.jpg";

function App() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  const countDown = () => {
    const date = new Date();
    const nextYear = new Date("Jan 1, 2024");
    const diff = new Date(nextYear - date);
    const sec = diff / 1000;
    const d = Math.floor(sec / 3600 / 24);

    setSec(diff.getSeconds());
    setMin(diff.getMinutes());
    setDays(d);
    setHours(diff.getHours());
  };

  useEffect(() => {
    setInterval(countDown, 1000);
  }, []);

  return (
    <div className="app">
      <h1>New Year Countdown</h1>
      <div className="countdown__container">
        <div className="timeNum days">
          <p>
            days <br /> {days}
          </p>
        </div>
        <div className="timeNum hours">
          <p>
            hours <br /> {hours}
          </p>
        </div>
        <div className="timeNum min">
          <p>
            min <br /> {min}
          </p>
        </div>
        <div className="timeNum sec">
          <p>
            sec <br /> {sec}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
