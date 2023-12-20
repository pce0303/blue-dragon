import React, { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({children}) => {
  return (
    <div className="background">
      <div className="title-container">
        <p className="title">푸른 용의 신년운세 & 소원</p>
      </div>
      <div className="button-container">
        <button className="luck">운세 보기</button>
        <button className="wish">소원 빌기</button>
        <button className="view">소원 보기</button>
      </div>
    </div> 
  )
}

export default Main;