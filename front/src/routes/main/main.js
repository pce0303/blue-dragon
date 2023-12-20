import React from "react"
import { Link } from "react-router-dom";
import '../../styles/main.scss';

export default function Main() {
  return (
    <div className="wrapper">
      <div className="title-container">
        {/* <img src="" alt=""/> */}
        <p className="title">푸른 용의 신년운세 & 소원</p>
      </div>
      <div className="button-container">
        <Link to="/luck"><button className="luck">운세 보기</button></Link>
        <Link to="/create"><button className="create">소원 빌기</button></Link>
        <Link to="/view"><button className="view">소원 보기</button></Link>
      </div>
    </div> 
  );
}