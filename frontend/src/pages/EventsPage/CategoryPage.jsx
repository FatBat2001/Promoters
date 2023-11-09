import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "./EventCard";
import HeaderImage from "./HeaderImage";
import "./css/category-page.css";
import React from "react";
import LoaderSpinner from "../../componenets/LoaderSpinner";

const CategoryPage = () => {
  const { category } = useParams();
  const [categoryElements, setCategoryElements] = useState({
    loading: true,
    results: [],
    err: null,
  });

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

  const renderedComponents = categoryElements.results.map((item) => (
    <EventCard id={item._id} key={item._id} category={category} />
  ));

  return (
    <>
      {categoryElements.loading && <LoaderSpinner />}
      {!categoryElements.loading && !categoryElements.err && (
        <div>
          <HeaderImage labelText={category} />
          <div className="category-page-wrapper">
            <div className="category-page-cards-wrapper">
              {renderedComponents}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryPage;
