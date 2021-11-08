import React from "react";
import styled from "styled-components";
// import CtaButton from "./CtaButton";
// import Navigation from "./Navigation";
import SmallHeading from "./SmallHeading";
// import block from "./images/1.jpg";

function MainContent() {
  return (
    <MainContentStyled>
      {/* <Navigation /> */}
      <SmallHeading className="content">
        <div className="left">
          <div title={"Genialny lwowski matematyk"} identifier={"Before"} />
          <h1>
            Stefan Banach <span className="GradientText">(1892 - 1945)</span>
          </h1>
          <p className="text">
            Był autorem ponad 60 prac naukowych i twórcą wielu twierdzeń o
            fundamentalnym znaczeniu dla wielu działów matematyki. Styl pracy
            Banacha, jego niezwykła intuicja naukowa, bezpośredniość i otwartość
            pozwoliły mu (wraz z Steinhausem) na stworzenie Lwowskiej Szkoły
            Matematycznej.
          </p>
          {/* <div className="btns-con">
            <CtaButton name={"Zobacz więcej"} />
            <CtaButton name={"Czytaj"} />
          </div> */}
        </div>
        <div className="right">
          <img src="./images/1.jpg" alt="..." />
        </div>
      </SmallHeading>
    </MainContentStyled>
  );
}

const MainContentStyled = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 80%;
  height: 100%;
  transform: translateX(-50%);

  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    width: 100%;

    .left {
      display: flex;
      justify-content: center;
      flex-direction: column;

      h1 {
        padding: 1.8rem 0;
      }
      .text {
        text-align: left;
      }
      .btns-con {
        margin-top: 3rem;
      }
    }
    .right {
      img {
        position: absolute;
        right: 35%;
        bottom: 10%;
        width: 10%;
      }
    }
  }
`;

export default MainContent;
