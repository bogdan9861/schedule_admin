import React from "react";

import "./BackBtn.scss";
import { useNavigate } from "react-router-dom";

const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <button className="backBtn" onClick={() => navigate(-1)}>
      <img
        style={{ transform: "rotate(-180deg)" }}
        src="https://img.icons8.com/?size=100&id=61&format=png&color=000000"
        alt=""
      />
    </button>
  );
};

export default BackBtn;
