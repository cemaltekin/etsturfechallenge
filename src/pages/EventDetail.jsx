import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import defaultEventImg from '../images/defaulteventimage.png'

const EventDetail = ({ events }) => {
  const { eventName } = useParams();
  const thisEvent = events.find((event) => event.name === eventName);
  return (
    <>
      <h2>{thisEvent ? thisEvent.name : <Spinner />}</h2>
      <h2>{thisEvent ? thisEvent.id : <Spinner />}</h2>
      <h2>{thisEvent ? thisEvent.images ? thisEvent.images[0].img1 : defaultEventImg : <Spinner />}</h2>
    </>
  );
};

export default EventDetail;
