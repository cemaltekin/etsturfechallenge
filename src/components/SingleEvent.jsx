import React from "react";
//dependencies
import { Link } from "react-router-dom";
import defaultEventImg from '../images/defaulteventimage.png'
const SingleEvent = ({ event }) => {
  return (
    <div className="singleEvent">
      {/* The picture of the event must be in square format */}
      <div
        className="eventImg"
        style={{
          backgroundImage: `url(${event.images ? event.images[0].img1 : defaultEventImg})`,
        }}
      ></div>
      {/* Three dots are added to the end of the event titles that do not fit on a single line, this is put in order not to spoil the card size. */}
      <h2 className="eventName">{event.name}</h2>
      {/* Three dots are added to the end of the event description that does not fit in three lines, and it is placed in order not to change the card size. */}
      <p className="eventDesc">{event.description}</p>
      <div className="eventDates">
        <i className="fas fa-calendar"></i>
        <span>
          {event.date[0].start} - {event.date[0].start}
        </span>
      </div>
      <div className="eventLocation">
        <i className="fas fa-globe"></i>
        <span>{event.city}</span>
      </div>
      <div className="eventAddress">
        <i className="fas fa-location-dot"></i>
        <span className="">{event.open_address}</span>
      </div>
      <Link to={`/events/${event.name}`} className="infoBtn">Etkinlik Detayı</Link>
    </div>
  );
};

export default SingleEvent;
