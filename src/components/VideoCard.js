import React from 'react'
import { Link } from 'react-router-dom';
const VideoCard = ({ video }) => {
   
  return (
    <div className="flex flex-wrap">
          {video.map((item) => {
              return (
                <Link to={"watch?v=" + item.id}>
                  {" "}
                  <div className="max-w-xs overflow-hidden bg-white shadow-lg rounded-lg mx-auto mx-3">
                    key={item.id}
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
                      <li>{item.statistics.viewCount}</li>
                    </ul>
                  </div>
                </Link>
              );
      })}
    </div>
  );
}

export default VideoCard