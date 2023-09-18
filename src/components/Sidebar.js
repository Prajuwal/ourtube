import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-4 shadow-lg w-48">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Youtube Music</li>
      </ul>
      <hr className="my-4 border-t border-gray-300" />
      <ul>
        <li>Library</li>
        <li>History</li>
        <li>Your Vidoes</li>
        <li>Watch Later</li>
        <li>Downloads</li>
        <li>Liked Vedeos</li>
      </ul>
      <hr className="my-4 border-t border-gray-300" />
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Films</li>
        <li>News</li>
        <li>Learning</li>
        <li>Live</li>
        <li>Fashion & Beauty</li>
      </ul>
    </div>
  );
};

export default Sidebar;
