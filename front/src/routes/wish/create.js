import React from "react"
import { Link } from "react-router-dom"
import '../../styles/create.scss';

export default function Create() {
  return (
    <div className="wrapper">
      <div className="title"></div>
      <div className="wish-container">
        <input type="text" className="wish-value"/>
        <button className="submit" onClick={UploadWish}>등록하기</button>
        <Link to="/"><button className="cancel">취소</button></Link>
      </div>
    </div>
  );
}

const UploadWish = () => {

}