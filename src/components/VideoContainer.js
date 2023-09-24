import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {



const [videoData,setVideoData]=useState([])
  useEffect(() => {
    getData();
  }, []);

  
  const getData = async() => {
    const fetchedData = await fetch(YOUTUBE_API_URL)
    const data = await fetchedData
    const response = await data.json()
  //  console.log(response.items);
  setVideoData(response.items);
  }
  return (
    <div >
      
      <VideoCard video={videoData} />
     
    </div>
  );
};

export default VideoContainer;
