import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { sendSearchResult } from "../utils/resultSlice";
import { Link } from "react-router-dom";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryResult, setQueryResult] = useState([]);
  const [visible, setVisible] = useState(false);
  const [resultKeyword, setResultKeyword] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    getSearchQuery();
  }, [searchQuery]);

useEffect(() => {
 
  dispatch(sendSearchResult(resultKeyword));
}, [resultKeyword]);

  const getSearchQuery = async () => {
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=" +
        searchQuery
    );

    const jsonData = await data.json();
    setQueryResult(jsonData[1]);
  };

  
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSuggestionClick = (result) => {
    setResultKeyword(result);
    //console.log(resultKeyword);
  };

  return (
    <div className="p-2 shadow-lg flex items-center">
      <img
        onClick={toggleMenuHandler}
        className="h-12 cursor-pointer"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJ_Pmd1cDf3Y8ilFgW4L5KS0Zrk5x0UYjeA&usqp=CAU"
        alt="Menu"
      />
      <img
        className="h-12 mx-2"
        src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
        alt="YouTube Logo"
      />
      <div className="relative flex items-center">
        <input
          className="h-10 w-100 pl-3 pr-10 border border-gray-400 rounded-full focus:outline-none focus:border-gray-500"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setVisible(true)}
          onBlur={() => setVisible(false)}
        />

        <button onClick={() => handleSuggestionClick(searchQuery)}>
          <Link to="/result">Search</Link>
        </button>

        {visible && queryResult.length > 0 && (
          <div className="absolute mt-10 w-60 border border-gray-400 rounded bg-white flex flex-col">
            {queryResult.map((item, index) => (
              <div
                key={index}
                className="py-2 px-3 hover:bg-gray-200 cursor-pointer
                text-gray-800"
                onClick={() => handleSuggestionClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Head;
