import React from "react"
import { Link } from "react-router-dom";

export default function View() {
  return (
    <div className="wrapper">
      <div className="title"></div>
      <div className="wishlist">
        <div className="wish-box">
          <p className="id">myID</p>
          <p className="value">내용</p>
          <button className="like">좋아요</button>
        </div>
      </div>
      <div className="button-container">
        <Link to="/"><button className="home">돌아가기</button></Link>
        <Link to="/create"><button className="create">나도 소원 빌기</button></Link>
        <Link to="/luck"><button className="luck">운세 보러 가기</button></Link>
      </div>
      
    </div>
  );
}