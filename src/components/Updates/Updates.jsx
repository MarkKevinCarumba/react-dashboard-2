import { div } from "framer-motion/client";
import React from "react";
import { UpdatesData } from "../../data/Data";
import "./Update.css";

const Updates = () => {
  return (
    <div className="updates">
      {UpdatesData.map((update, index) => (
        <div key={index} className="update">
          <img src={update.img} alt="profile" />
          <div className="noti">
            <div style={{ marginBottom: "0.5rem" }}>
              <span>{update.name}</span>
              <span> {update.noti}</span>
            </div>
            <span>{update.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Updates;
