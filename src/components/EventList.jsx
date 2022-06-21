// components
import SingleEvent from "./SingleEvent";

const EventList = ({ events }) => {
  return (
    <>
      <div className="eventList">
        <ul>
          {events.map((event, idx) => (
            <li key={idx}>
              <SingleEvent event={event} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default EventList;
