import EventCard from "./EventCard";
import "./css/category-element.css";
const handleData = (events) => {
  let arr = events;
  if (events.length > 3) arr = events.slice(0, 3);
  return arr;
};

const CategoryElement = ({ category, events, seeMore }) => {
  const arr = handleData(events);
  const renderedComponents = arr.map((item) => (
    <EventCard
      id={item._id}
      key={item._id}
      category={item.category.toLowerCase()}
    />
  ));
  return (
    <div className="category-element-wrapper" id={`${category}`}>
      <h1>{category}</h1>
      <div className="category-events-wrapper">{renderedComponents}</div>
      <button
        onClick={() => {
          seeMore(category);
        }}
      >
        SEE MORE
      </button>
    </div>
  );
};

export default CategoryElement;
