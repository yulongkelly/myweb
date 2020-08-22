import React, { useState } from "react";
import axios from "axios";

function AvaliableTime() {
  let now = new Date();
  const [busyTime, setBusyTime] = useState([]);
  axios
    .get(`https://agendaapi.azurewebsites.net/api/agenda`)
    // axios automatically changes the response to JSON
    .then((res) => {
      setBusyTime(
        res.data.map((item) => {
          let start = new Date(item.startDateTime);
          if (
            start.getFullYear() === now.getFullYear() &&
            start.getMonth() === now.getMonth() &&
            start.getDate() === now.getDate()
          ) {
            const event = {
              startDateTime: start,
              endDateTime: new Date(item.endDateTime),
            };
            let begin = event.startDateTime.getHours();
            let end = event.endDateTime.getHours();
            let period;
            if (begin < 12 && end < 12) {
              period = `${begin}am - ${end}am`;
            } else if (begin < 12 && end >= 12) {
              period = `${begin}am - ${end - 12}pm`;
            } else {
              period = `${begin - 12}pm - ${end - 12}pm`;
            }
            return period;
          }
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="avaliable">
      <h5>
        I am NOT avaliable on
        {busyTime.map((time) => {
          return <div>{time}</div>;
        })}
      </h5>
    </div>
  );
}

export default AvaliableTime;
