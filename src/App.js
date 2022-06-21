import React from 'react';
// dependencies
import { Routes, Route } from 'react-router-dom';
import axios from "axios";
// hooks
import { useState, useEffect } from "react";
// import css files
import './css/style.css';
//pages
import EventDetail from './pages/EventDetail';
import Home from './pages/Home';
function App() {
  const [events, setEvents] = useState([]);
  const fetchEvents = async () => {
    const dataURL = "http://localhost:3000/db";
    const response = await axios.get(dataURL);
    setEvents(response.data.events);
  };
  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home events={events} />} />
        <Route path="/events/:eventName" element={<EventDetail events={events} />} />
      </Routes>

    </>
  );
}

export default App;
