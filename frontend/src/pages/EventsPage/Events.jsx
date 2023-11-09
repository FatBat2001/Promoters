import CategoryElement from "./CategoryElement";
import { getAllEvents, getCategoryList } from "../../helper/helperFunctions";
import { useNavigate } from "react-router-dom";
import "./css/events.css";
import HeaderImage from "./HeaderImage";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const Events = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState({
    loading: true,
    results: [],
    err: null,
    
  });

  useEffect(() => {
    setEvents({ ...events, loading: true });
    axios
      .get("https://api-promoters-intl.onrender.com/get-events/")
      .then((res) => {
        setEvents({ ...events, results: res.data, loading: false, err: null });
      })
      .catch((err) => {
        setEvents({ ...events, err: "something went wrong", loading: false });
      });
  }, []);

  const handleSeeMore = (category) => {
    navigate(`/events/${category}`);
  };

  const arr = getAllEvents();
  const concerts = [];
  const activations = [];
  const corporate = [];
  const conferences = [];

  events.results.forEach((item) => {
    if (item.category.toLowerCase() === "concerts" && concerts.length <= 3) concerts.push(item);
    if (item.category.toLowerCase() === "activations" && activations.length <= 3) activations.push(item);
    if (item.category.toLowerCase() === "corporate" && corporate.length <= 3) corporate.push(item);
    if (item.category.toLowerCase() === "conferences" && conferences.length <= 3) conferences.push(item);
  });
  // const a = [concerts, activations, corporate, conferences];
  // console.log(a);
  // const renderedComponents = arr.map((item, index) => (
  //   <CategoryElement
  //     key={index}
  //     id={index}
  //     category={item.category}
  //     events={item[item.category].events}
  //     seeMore={handleSeeMore}
  //   />
  // ));

  return (
    <>
      <HeaderImage labelText={"OUR EVENTS"} />

      {events.loading && (
        <div className="loading-spinner">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {!events.loading && !events.err && (
        <div className="events-parent-wrapper">
          <div className="events-wrapper">
            <CategoryElement
              category={'concerts'}
              events={concerts}
              seeMore={handleSeeMore}
            />
             <CategoryElement
              category={'activations'}
              events={activations}
              seeMore={handleSeeMore}
            />
             <CategoryElement
              category={'corporate'}
              events={corporate}
              seeMore={handleSeeMore}
            />
             <CategoryElement
              category={'conferences'}
              events={conferences}
              seeMore={handleSeeMore}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Events;
