import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Column,
  MainHeading,
  Row,
  TextWrapper,
} from "../../globalStyles";
// import { BiPlayCircle } from "react-icons/bi";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { HeroSection, ButtonContainer } from "./HeroStyles";
import Modal from "../Portal/Modal";
import Modal1 from "../Portal/Modal";

const Hero = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <HeroSection id="hero">
      <Row justify="center" align="center" height="100%" padding="2rem">
        <Column align="center" mb="10%">
          <MainHeading>Lwowska Szkoła Matematyczna</MainHeading>
          <TextWrapper
            color="white"
            size="clamp(1rem,3vw,1.3rem)"
            margin="0 0 2rem"
            lineHeight="1.1rem"
            maxWidth="480px"
            align="center"
          >
            polska matematyczna szkoła naukowa zaliczana do tzw. polskiej szkoły
            matematycznej działająca w dwudziestoleciu międzywojennym we Lwowie,
            skupiona wokół Stefana Banacha i Hugona Steinhausa; specjalizowała
            się w analizie funkcjonalnej, wydawała „Studia Mathematica”.
          </TextWrapper>
          <ButtonContainer>
            <Link to={"/geniusz-matematyki"}>
              <Button big fontBig>
                Więcej
              </Button>
            </Link>
            <Button big fontBig onClick={() => Toggle()}>
              <AiOutlineDoubleRight size="2.3rem" />
              Pochodzenie
            </Button>
            <Modal show={modal} close={Toggle} title="Trudne dzieciństwo">
              <p>
                Jego ojcem był góral z Ostrowska lub Jordanowa, Stefan Greczek
                (służący jako żołnierz w wojsku austriackim, później pracujący
                jako urzędnik w Krakowie), a matką prawdopodobnie góralka
                Katarzyna Banach, pochodząca z Borównej. Wychowywał się w
                rodzinie zastępczej (właścicielki pralni, Franciszki Płowej, i
                jej córki, Marii Puchalskiej). Znał osobiście tylko swojego ojca
                i czasami się z nim spotykał. Zgodnie z obietnicą daną matce
                ojciec łożył na jego utrzymanie. Od dzieciństwa wykazywał
                nieprzeciętne zdolności matematyczne i lingwistyczne.
              </p>
              <br />
              <p>
                <em>pl.wikipedia.org/wiki/Stefan_Banach</em>
              </p>
            </Modal>
          </ButtonContainer>
        </Column>
      </Row>
    </HeroSection>
  );
};

export default Hero;
