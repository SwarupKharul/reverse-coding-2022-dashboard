import React, { useState, useRef } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import Leaderboard from "../../../containers/LeaderboardContainer/Leaderboard";
import Chevron from "../Chevron";

import "./Accordion.css";

const Accordion = (props) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  const [setColor, setColorState] = useState("#984FB9");
  const [setTextColor, setTextColorState] = useState("gray");
  const [setDisplay, setDisplayState] = useState("displayBorder");
  const [hideBorder, setHideBorder] = useState("accordion");
  const content = useRef(null);
  const history = useHistory();

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
    setColorState(setActive === "active" ? "#984FB9" : "#984FB9");
    setTextColorState(setActive === "active" ? "gray" : "purple");
    setDisplayState(
      setActive === "active" ? "displayBorder" : "accordion__content"
    );
    setHideBorder(setActive === "active" ? "accordion" : "accordion-active");
  };

  const questionRedirect = () => {
    // window.location.href = "/questions";
    // <Link to="/questions" />;

    history.push("/questions");
  };

  return (
    <div className="accordion__section z-0">
      <button
        type="button"
        className={`${hideBorder} ${setActive}`}
        onClick={toggleAccordion}
      >
        <div className="grid grid-cols-3 gap-x-24 accordion__title">
          <div className={`${setActive}`}>{props.title}</div>
          <button
            type="button"
            className={`${setTextColor} pl-8 accordion__title`}
            onClick={questionRedirect}
          >
            Open
          </button>
          <div className={`${setActive}`}>{props.score}/100</div>
        </div>
        <Chevron className={`${setRotate}`} width={10} fill={`${setColor}`} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={`${setDisplay}`}
      >
        <div
          className="accordion__text "
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
};

export default Accordion;
