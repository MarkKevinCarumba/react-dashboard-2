import React, { useState, Fragment } from "react";
/**
 * Framer Motion is a powerful animation library for React that makes it easy, smooth,
 * and fun to add animations—without writing complex CSS or JavaScript.
 */
import { motion, LayoutGroup } from "framer-motion";
import { findAllByTestId } from "@testing-library/react";
// react-circular-progressbar is a ready-made React component for showing circular progress indicators,
import { CircularProgressbar } from "react-circular-progressbar";
import { UilTimes } from "@iconscout/react-unicons";
// This imports the Chart component from the react-apexcharts library.
// react-apexcharts is a React wrapper for ApexCharts, a powerful JavaScript charting library.
import Chart from "react-apexcharts";
import "./Card.css";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  const layoutId = `expandableCard-${props.title}`;
  return (
    <Fragment>
      {expanded ? (
        <ExpandedCard
          param={props}
          layoutId={layoutId}
          expand={() => setExpanded(false)}
        />
      ) : (
        <CompactedCard
          param={props}
          layoutId={layoutId}
          expand={() => setExpanded(true)}
        />
      )}
    </Fragment>
  );
};

// Compact Card
function CompactedCard({ param, layoutId, expand }) {
  const Png = param.png;
  return (
    <motion.div
      className="compact-card"
      onClick={expand}
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId={layoutId} // layoutId is one of the most powerful features of Framer Motion.
      // It enables shared layout animations — smooth transitions between two different components as if they were the same element.
    >
      <div className="radial-bar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, layoutId, expand }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };
  return (
    <motion.div
      className="expanded-card"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId={layoutId}
    >
      <div
        style={{
          alignSelf: "flex-end",
          cursor: "pointer",
          color: "white",
        }}
      >
        <UilTimes onClick={expand} />
      </div>
      <span>{param.title}</span>
      <div className="chart-container">
        <Chart options={data.options} series={param.series} type="area" />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
}

export default Card;
