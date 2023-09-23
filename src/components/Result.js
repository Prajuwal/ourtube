import React from "react";
import { useSelector } from "react-redux";
import { YOUTUBE_API_KEY } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Result = () => {
  const [videoData, setVideoData] = useState([]);
  const resultKeyword = useSelector((state) => state.result.resultValue);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const fetchedData = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${resultKeyword}&type=video&key=${YOUTUBE_API_KEY}`
    );

    const response = await fetchedData.json();
    //  console.log(response.items);
    setVideoData(response.items);
  };

  return (
    <div className="flex flex-wrap">
      {videoData.map((item) => {
        return (
          <Link to={"watch?v=" + item.id} key={item.id}>
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

export default Result;
