import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./css/event-card.css";
import LoaderSpinner from "../../componenets/LoaderSpinner";
import axios from "axios";
const EventCard = (props) => {
  let data = {};
  const [categoryElements, setCategoryElements] = useState({
    loading: true,
    results: [],
    err: null,
  });

  useEffect(() => {
    setCategoryElements({ ...categoryElements, loading: true });
    axios
      .get(`https://api-promoters-intl.onrender.com/get-events/${props.category.toUpperCase()}`)
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
  categoryElements.results.forEach((element) => {
    if (props.id === element._id) data = element;
  });
  return (
    <>
     <div className="event-card-wrapper">
      {categoryElements.loading && <LoaderSpinner />}
      {!categoryElements.loading && !categoryElements.err && (
       
          <Link to={`/Events/${props.category}/${props.id}`}>
            <img
              src={data.cover}
              placeholder="load-failure"
              alt={"cover_image"}
              style={{ display: "block" }}
            ></img>
            <label>{data.title}</label>
          </Link>
        
      )}
      </div>
    </>
  );
};

export default EventCard;
