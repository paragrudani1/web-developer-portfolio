/** @format */

import React from "react";
import classes from "./ImageSlider.module.css";
import { useState } from "react";
import { useRef } from "react";
import line from "../../../assets/arrows/Line 5.svg";
import img1 from "../../../assets/Screenshot_2020-04-08 Figma 1.png";
import img2 from "../../../assets/Screenshot_2020-04-08 Figma 2.png";
import img3 from "../../../assets/Screenshot_2020-04-08 online appointment project 1.png";
import img4 from "../../../assets/Screenshot_2020-04-08 Tool- Parag Rudani(1) 1.png";
import img5 from "../../../assets/Screenshot_2020-04-08 Unsplash Clone 1.png";
import img6 from "../../../assets/Screenshot_2020-06-24 React App(2).png";

const ImageSlider = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([
    {
      photo: img1,
      title: "Title 1",
      type: "Landing Page Design",
      id: 1,
      link: "link1",
    },
    {
      photo: img2,
      title: "Title 2",
      type: "Landing Page Design",
      id: 2,
      link: "link2",
    },
    {
      photo: img3,
      title: "Title 3",
      type: "Landing Page Design",
      id: 3,
      link: "link3",
    },
    {
      photo: img4,
      title: "Title 4",
      type: "Landing Page Design",
      id: 4,
      link: "link4",
    },
    {
      photo: img5,
      title: "Title 5",
      type: "Landing Page Design",
      id: 5,
      link: "link5",
    },
    {
      photo: img6,
      title: "Title 6",
      type: "Landing Page Design",
      id: 6,
      link: "link6",
    },
  ]);

  const count = useRef({
    counter: 0,
  });

  const [currentCount, setCurrentCount] = useState(0);

  const slide = useRef();
  const img = useRef();

  return (
    <React.Fragment>
      <div className={classes.ImageSlider} id="project">
        <div className={classes.Project_Header}>
          <div className={classes.Project_Title}>
            <h1>
              Featured <span>Work</span>
            </h1>
            <div className={classes.Arrow_Img}>
              <img src={line} alt="img" />
            </div>
          </div>
          <div className={classes.Project_Sub}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className={classes.Slider_Controller}>
          <div
            className={classes.PrevBtn}
            onClick={() => {
              count.current.counter -= 1;
              if (count.current.counter < 0) count.current.counter = 5;
              slide.current.style.transform = `translateX(${
                -slide.current.children[0].clientWidth * count.current.counter
              }px)`;
              setCurrentCount(count.current.counter);
            }}
          >
            <svg
              width="95"
              height="15"
              viewBox="0 0 95 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M95 7.29426L80 7.29426M71.1765 7.29426L5 7.29426M5 7.29426L14.7059 2.00014M5 7.29426L14.7059 12.5884"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
          </div>
          <div className={classes.Container}>
            <div ref={slide} className={classes.Slide}>
              {data.map((data, index) => {
                return (
                    <img ref={img} key={index} src={data.photo} alt={data.title} />
                );
              })}
            </div>
            <div className={classes.Project_Detail}>
              <p>{data[currentCount].type}</p>
              <h1>{data[currentCount].title}</h1>
              <a href={data[currentCount].link}>View full Preview</a>
            </div>
          </div>
          <div
            className={classes.NextBtn}
            onClick={() => {
              count.current.counter += 1;
              if (count.current.counter >= 6) count.current.counter = 0;
              slide.current.style.transform = `translateX(${
                -slide.current.children[0].clientWidth * count.current.counter
              }px)`;
              setCurrentCount(count.current.counter);
            }}
          >
            <svg
              width="95"
              height="15"
              viewBox="0 0 95 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 7.29412H15M23.8235 7.29412H90M90 7.29412L80.2941 12.5882M90 7.29412L80.2941 2"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
          </div>
        </div>
        <div className={classes.Btn}>
          <div
            onClick={() => {
              count.current.counter -= 1;
              if (count.current.counter < 0) count.current.counter = 5;
              slide.current.style.transform = `translateX(${
                -slide.current.children[0].clientWidth * count.current.counter
              }px)`;
              setCurrentCount(count.current.counter);
            }}
          >
            <svg
              width="95"
              height="15"
              viewBox="0 0 95 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M95 7.29426L80 7.29426M71.1765 7.29426L5 7.29426M5 7.29426L14.7059 2.00014M5 7.29426L14.7059 12.5884"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
          </div>
          <div
            onClick={() => {
              count.current.counter += 1;
              if (count.current.counter >= 6) count.current.counter = 0;
              slide.current.style.transform = `translateX(${
                -slide.current.children[0].clientWidth * count.current.counter
              }px)`;
              setCurrentCount(count.current.counter);
            }}
          >
            <svg
              width="95"
              height="15"
              viewBox="0 0 95 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 7.29412H15M23.8235 7.29412H90M90 7.29412L80.2941 12.5882M90 7.29412L80.2941 2"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ImageSlider;
