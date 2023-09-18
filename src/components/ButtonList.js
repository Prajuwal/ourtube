import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = ['All', 'Music', 'Podcasts','Streaming','FreeStyle', 'Gaming', 'Mixes', 'Rap', 'Live', 'Thoughts', 'Dramdedy', 'Movies', 'Entertainment', 'News']
  return (
    <div className="flex px-4 mx-5">
      {list.map((item, index) => {
      return (
        <div key={index} className="mb-4 px-5 py-2">
          <Button name={item} />
        </div>
      );
      })}
    </div>
  );
}
export default ButtonList
