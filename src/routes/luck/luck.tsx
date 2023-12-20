import React from "react";

const Luck: React.FC = () => {
  return (
    <div className="container">
      <div className="luck-title">
        <div className="select-container">
          <select name="zodiac-sign" id="zodiac">
            <option value=""></option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Luck;