import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./Calendar.css";

function Calendar() {
  const [events, setEvents] = useState([
    {
      title: "",
      start: "",
      end: "",
      color: "",
      textColor: "",
    },
  ]);
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [color, setColor] = useState("");
  const [textColor, setTextColor] = useState("");

  function handleAddEvents() {
    const newEvent = { title, start, end, color, textColor };
    setEvents([...events, newEvent]);
    setTitle("");
    setStart("");
    setEnd("");
    setColor("");
    setTextColor("");
  }

  return (
    <div className="main">
      <div className="buttons">
        <div className="name">
          배경색
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="color"
          />
          <br />
        </div>

        <div className="name">
          글자색
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="textcolor"
          />
          <br />
        </div>

        <div className="name">
          일정 시작
          <input
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="start"
          />
          <br />
        </div>

        <div className="name">
          일정 종료
          <input
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="end"
          />
          <br />
        </div>

        <div className="name">
          일정 작성
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="작성 해주세요"
            className="title"
          />
          <br />
        </div>

        <button onClick={handleAddEvents}>일정 추가</button>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
        eventColor={color}
        eventTextColor={textColor}
        eventContent={(eventInfo) => (
          <div
            style={{
              backgroundColor: eventInfo.event.backgroundColor,
              color: eventInfo.event.textColor,
              padding: "5px",
              borderRadius: "5px",
              width: "100%",
              fontSize: "0.1rem",
            }}
          >
            {eventInfo.event.title}
          </div>
        )}
      />
    </div>
  );
}

export default Calendar;
