import React from "react";
// pages
import Search from "../components/Search";
import EventList from "../components/EventList";
const Home = ({ events, searchEvent }) => {
  return (
    <div>
      <Search events={events} searchEvent={searchEvent} />
      <EventList events={events} />
    </div>
  );
};

export default Home;
