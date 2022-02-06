import React, { useEffect, useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Wheels.css";

import { Wheel } from "react-custom-roulette";
import { postRoullete } from "../../redux/PostJudge/postJudgeActions";

import ModalRoulette from "../Modals/ModalRoulette";

const data = [
  { option: "0", style: { backgroundColor: "#0000AE" } },
  { option: "1" },
  { option: "2" },
  { option: "3" },
  { option: "4" },
  { option: "5" },
  { option: "6" },
  { option: "7" },
  { option: "8" },
  { option: "9" },
  { option: "10" },
  { option: "11" },
  { option: "12" },
  { option: "13" },
  { option: "14" },
  { option: "15" },
  { option: "16" },
  { option: "17" },
  { option: "18" },
  { option: "19" },
  { option: "20" },
  { option: "21" },
  { option: "22" },
  { option: "23" },
  { option: "24" },
  { option: "25" },
  { option: "26" },
];

const backgroundColors = ["#000000", "#eb7811"];
const textColors = ["white"];
const outerBorderColor = "#1a1717";
const outerBorderWidth = 9;
const innerBorderColor = "#1a1717";
const innerBorderWidth = 17;
const innerRadius = 40;
const radiusLineColor = "#e3caa8";
const radiusLineWidth = 3;
const fontSize = 20;
const textDistance = 86;

const Medium = () => {
  const dispatch = useDispatch();

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [prizeSelected, setPrizeSelected] = useState("0");
  const getData = useSelector((state) => state.getAll.problems);
  const medARR = getData.slice(7, 11);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSpinClick = () => {
    // The Wheel component will call this function when spin is clicked
    // The next line will set the prize number to a random number between 0 and end of data array(which will be no. of questions)
    // You can then access the question number(option name) through indexing(newPrizeNumber is the index value).
    const newPrizeNumber = Math.floor(Math.random() * medARR.length);
    const mediumID = medARR[newPrizeNumber].id;
    const selectedQues = data[newPrizeNumber].option;
    console.log("abccc", selectedQues);
    console.log(mediumID);
    dispatch(postRoullete(mediumID));
    setPrizeSelected(newPrizeNumber);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div className="">
      <header className="">
        <div>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            backgroundColors={backgroundColors}
            textColors={textColors}
            fontSize={fontSize}
            outerBorderColor={outerBorderColor}
            outerBorderWidth={outerBorderWidth}
            innerRadius={innerRadius}
            innerBorderColor={innerBorderColor}
            innerBorderWidth={innerBorderWidth}
            radiusLineColor={radiusLineColor}
            radiusLineWidth={radiusLineWidth}
            perpendicularText
            textDistance={textDistance}
            onStopSpinning={() => {
              setMustSpin(false);
              handleOpen();
            }}
          />
          <ModalRoulette
            open={open}
            onClose={handleClose}
            problemNo={prizeSelected}
          />
        </div>
        <div
          className="spin-btn font-robo text-2xl mx-auto xl:mt-8 2xl:mt-16"
          onClick={handleSpinClick}
        >
          SPIN
        </div>
      </header>
    </div>
  );
};

export default memo(Medium);
