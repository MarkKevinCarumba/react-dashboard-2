import React from "react";
import { cardsData } from "../../data/Data";
import { motion, LayoutGroup } from "framer-motion";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = () => {
  /**
       * 🔥 WHY YOU NEED LayoutGroup IN YOUR CARD CODE
            Your card has:
    
            A CompactCard
            An ExpandedCard
            They are different components
            They share the same layoutId="expandableCard"
            Framer Motion can only animate shared layout transitions if both components belong to the same LayoutGroup.
    
            Otherwise:
    
            The compact card disappears
            The expanded card appears
            No transition happens
       */
  return (
    <LayoutGroup>
      <div className="cards">
        {cardsData.map((card, index) => (
          <div key={index} className="parent-container">
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        ))}
      </div>
    </LayoutGroup>
  );
};

export default Cards;
