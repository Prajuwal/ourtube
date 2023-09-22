import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import VideoContainer from "./VideoContainer";

const commentInfo = [
  {
    name: "User1",
    comment: "This is the main comment.",
    replies: [
      {
        name: "User2",
        comment: "Reply 1 to the main comment.",
        replies: [
          {
            name: "User1",
            comment: "Reply to Reply 1.",
            replies: [],
          },
        ],
      },
      {
        name: "User3",
        comment: "Reply 2 to the main comment.",
        replies: [],
      },
    ],
  },
  {
    name: "User4",
    comment: "Another main comment.",
    replies: [],
  },
];

const Comment = ({ name, comment, replies }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <img
          className="w-8 h-8 rounded-full"
          src="https://via.placeholder.com/50"
          alt={`${name}'s profile`}
        />
        <span className="font-semibold">{name}</span>
      </div>
      <p className="px-4 py-2 bg-gray-100 rounded-lg">{comment}</p>
      <div className="pl-4 space-y-2">
        {replies.map((reply, index) => (
          <Comment key={index} {...reply} />
        ))}
      </div>
    </div>
  );
};

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-8">
        <iframe
          className="p-5 m-5"
          width="100%"
          height="600"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="space-y-4 p-4">
          {commentInfo.map((comment, index) => (
            <Comment key={index} {...comment} />
          ))}
        </div>
      </div>
      <div className="col-span-4">
        <VideoContainer />
      </div>
    </div>
  );
};

export default WatchPage;
