import React from "react"
import { Link } from "react-router-dom";
import '../../styles/luck.scss';

export default function Luck() {
  return (
    <div className="container">
      <div className="luck-title">
        <p>내 띠별 운세 확인하기</p>
      </div>
      <div className="select-container">
        <select name="zodiac-sign" id="zodiac">
          <option value="default">선택하기</option>
          <option value="mouse">쥐</option>
          <option value="cow">소</option>
          <option value="tiger">호랑이</option>
          <option value="rabbit">토끼</option>
          <option value="dragon">용</option>
          <option value="snake">뱀</option>
          <option value="horse">말</option>
          <option value="sheep">양</option>
          <option value="monkey">원숭이</option>
          <option value="chicken">닭</option>
          <option value="dog">개</option>
          <option value="pig">돼지</option>
        </select>
        <button className="submit" onClick={showLuck}>확인하기</button>
      </div>
      <div className="value-container">
        <p className="title"></p>
        <img src="" alt=""></img>
        <p className="value"></p>
        <div className="button-container">
          <Link to="/"><button>돌아가기</button></Link>
          <Link to="/create"><button>소원 빌기</button></Link>
          <Link to="/view"><button>소원 보기</button></Link>
        </div>
      </div>
    </div>
  );
}

const showLuck = () => {

}