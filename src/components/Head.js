import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_API_KEY } from "../utils/constants";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryResult, setQueryResult] = useState([]);
  const [visible, setVisible] = useState(false);
const [searchResult,setSearchResult]= useState([])
  useEffect(() => {
    getSearchQuery();
  }, [searchQuery]);
const [showComponent,setShowComponent] =useState(false)

 

  const getSearchQuery = async () => {
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=" +
        searchQuery
    );

    const jsonData = await data.json();
    setQueryResult(jsonData[1]);
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
const ResultSearch = ({ info }) => {
  return (
    <div className="flex flex-wrap">
      {info?.map((item) => {
        return (
          <Link to={"watch?v=" + item.id.videoId}>
            <div className="max-w-xs overflow-hidden bg-white shadow-lg rounded-lg mx-3">
              <img
                className="px-2 m-2 w-80 rounded-lg"
                src={item.snippet.thumbnails.medium.url}
                alt="Thumbnail"
              />
              <ul>
                <li className="font-bold py-2 truncate">
                  {item.snippet.title}
                </li>
                <li>{item.snippet.channelTitle}</li>
              </ul>
            </div>
          </Link>
        );
      })}
    </div>
  );
};


  const handleSuggestionClick = async (searchQuery) => {
setShowComponent(true)
    const fetchedData = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchQuery}&type=video&key=${YOUTUBE_API_KEY}`
    );
    const response = await fetchedData.json();
 
    setSearchResult(response.items);
   

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
          Search
        </button>
        {showComponent && <ResultSearch info={searchResult} />}
        {visible && queryResult.length > 0 && (
          <div className="absolute mt-10 w-60 border border-gray-400 rounded bg-white flex flex-col">
            {queryResult.map((item) => (
              <div
                key={item}
                className="py-2 px-3 hover:bg-gray-200 cursor-pointer
                text-gray-800"
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
 
