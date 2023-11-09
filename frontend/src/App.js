import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";
import "./App.css";
import {Outlet } from "react-router-dom";
import EventCard from "./pages/EventsPage/EventCard";
import { getAllEvents, getCategoryList } from "./helper/helperFunctions";
import CategoryPage from "./pages/EventsPage/CategoryPage";
import Event from "./pages/EventPage/Event";
import ScrollToTop from "./componenets/ScrollToTop";
import ScrollTopBtn from "./componenets/ScrollTopBtn";
import { useEffect, useState } from "react";
import Loader from "./componenets/Loader";


function App() {

  const [loading,setLoading] = useState(true)

    // This will run one time after the component mounts
    useEffect(() => {
        // callback function to call when event triggers
        const onPageLoad = () => {
            setLoading(false)
        };

        // Check if the page has already loaded
        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad, false);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);


  const data = getAllEvents();
  return (
    <div className="relative">
      <Loader loading={loading} />
      <div style={{ display: loading ? "none" : "" }}>
        <ScrollToTop />
        <Navbar />
        <Outlet />
        {/* <Event /> */}
        {/* <button onClick={() => console.log(data)}>click</button> */}
        <Footer />
        <ScrollTopBtn />
      </div>
    </div>
  );
}

export default App;
