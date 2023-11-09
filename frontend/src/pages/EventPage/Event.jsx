import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCategoryList } from "../../helper/helperFunctions";
import EventCard from "../EventsPage/EventCard";
import ThumbCaro from "./Components/ThumbCaro";
import "./Styles/Event.css";
import EventNav from "./Components/EventNav";
import CardSwiper from "./Components/CardSwiper";
import axios from "axios";
import LoaderSpinner from "../../componenets/LoaderSpinner";

const Event = () => {
  const navigate = useNavigate();
  const { category, id } = useParams();

  const [categoryElements, setCategoryElements] = useState({
    loading: true,
    results: [],
    err: null,
  });
  const relatedEvents = [];
  const event = useRef(undefined);
  useEffect(() => {
    setCategoryElements({ ...categoryElements, loading: true });
    axios
      .get(`https://api-promoters-intl.onrender.com/get-events/${category.toUpperCase()}`)
      .then((res) => {
        setCategoryElements({
          ...categoryElements,
          results: res.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setCategoryElements({
          ...categoryElements,
          err: "something went wrong",
          loading: false,
        });
      });
  }, []);
  if (!categoryElements.loading && !categoryElements.err) {
    categoryElements.results.forEach((element) => {
      if (element._id === id) {
        event.current = element;
      } else {
        relatedEvents.push(element);
      }
      
    });
    if (!event.current) {
      console.log(`no event ${event}`);
      navigate("/");
    } else console.log(event.current.media);
    console.log(event); 
  }

  const renderedComponents = relatedEvents.map((item) => (
    <EventCard id={item._id} key={item._id} category={category} />
  ));
  return (
    <>
      <EventNav />
      {/* loader */}
        {
            categoryElements.loading && ( 
                <LoaderSpinner /> 
            )
        }
      {/* content  */}
      {!categoryElements.loading && !categoryElements.err && (
        <div className="event-container">
          {/* Carousel */}
          <ThumbCaro data={event.current.media} />

          <h1 className="EventTitle">
            <b>{event.current.title}</b>
          </h1>
          <p className="EventDesc">{event.current.description}</p>
          <h1 className="EventRelated">
            <b>REALTED EVENTS</b>
          </h1>

          {/* Recommendation Carousel */}
          <div className="EventRecommended">
            <CardSwiper data={renderedComponents}></CardSwiper>
          </div>
        </div>
      )}
    </>
    // <></>
  );
};

export default Event;
