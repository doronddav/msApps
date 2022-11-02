import { useState } from "react";

import PopUP from "../popUp/PopUP";

import "./photoCard.css";

const PhotoCard = ({ data }) => {
  //Every card gets a state of Open: true/false. the state controls the display if the popup component
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open === true ? (
        <PopUP data={data} setOpen={setOpen} />
      ) : (
        <div className="item">
          <button
            onClick={(e) => {
              setOpen(true);
            }}
          >
            <img src={data.largeImageURL} alt={data.tags}></img>
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoCard;
