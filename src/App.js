import { useState, useEffect } from "react";

const App = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const countdown = () => {
    const endDate = new Date("March 22, 2023 00:00:00").getTime();
    const today = new Date().getTime();

    const timeDiff = endDate - today;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timeDays = Math.floor(timeDiff / days);
    let timeHours = Math.floor((timeDiff % days) / hours);
    let timeMinutes = Math.floor((timeDiff % hours) / minutes);
    let timeSeconds = Math.floor((timeDiff % minutes) / seconds);

    timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

    setDays(timeDays);
    setHours(timeHours);
    setMinutes(timeMinutes);
    setSeconds(timeSeconds);
    setIsLoading(false);
  };

  useEffect(() => {
    setInterval(countdown, 1000);
  });

  return (
    <>
      {isLoading ? (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      ) : (
        <section className="container">
          <h1>Ramadan 2023 countdown</h1>
          <div className="countdown">
            <article>
              <p> {days} </p>
              <h3> days</h3>
            </article>
            <article>
              <p> {hours} </p>
              <h3> hours</h3>
            </article>
            <article>
              <p> {minutes} </p>
              <h3> minutes</h3>
            </article>
            <article>
              <p> {seconds} </p>
              <h3> seconds </h3>
            </article>
          </div>
        </section>
      )}
    </>
  );
};

export default App;
