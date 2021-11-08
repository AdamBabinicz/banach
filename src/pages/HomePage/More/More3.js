import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Column,
  MainHeading,
  Row,
  TextWrapper,
} from "../../../globalStyles.js";
// import { BiPlayCircle } from "react-icons/bi";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { ButtonContainer } from "../../../components/Hero/HeroStyles";
import { HeroSection } from "./MoreStyles3";

const More = () => {
  return (
    <HeroSection id="stefan-banach">
      <Row justify="center" align="center" height="100%" padding="2rem">
        <Column align="center" mb="10%">
          <MainHeading>Najważniejsze dzieło Banacha</MainHeading>
          <TextWrapper
            color="white"
            size="clamp(1rem,3vw,1.3rem)"
            margin="0 0 2rem"
            lineHeight="1.1rem"
            maxWidth="1200px"
            align="justify"
          >
            W 1932 r. wydano najważniejsze dzieło Banacha „Théorie des
            opérations linéaires”. Monografia zapewniła mu światową sławę.
            Sensację w środowisku naukowym wzbudziła także przełomowa praca
            opublikowana wspólnie z Alfredem Tarskim, dotycząca powierzchni kuli
            i zbiorów rozłącznych. Ukoronowaniem jego kariery naukowej w
            międzywojennej Polsce był w 1939 r. wybór na prezesa Polskiego
            Towarzystwa Matematycznego. W roku 1937 wybitny amerykański
            matematyk węgierskiego pochodzenia, późniejszy współtwórca broni
            nuklearnej, teorii gier i podstaw informatyki John von Neumann
            namawiał Banacha do wyjazdu do USA. Lwowski profesor odmówił,
            stwierdzając, że nie ma kwoty mogącej wynagrodzić mu opuszczenie
            jego miasta i uczelni.
            <br />
            <br />
            Banach wykładał na obu lwowskich uczelniach – uniwersytecie i
            politechnice. Najważniejszym miejscem spotkań lwowskiego środowiska
            matematycznego nie były jednak sale wykładowe, ale Kawiarnia
            Szkocka. Skupieni wokół Steinhausa i Banacha uczeni stali się
            najważniejszą szkołą matematyczną w Polsce, która do historii nauki
            przeszła jako Lwowska Szkoła Matematyczna. W 1929 r. zaczęła
            publikować własny organ poświęcony analizie funkcjonalnej – „Studia
            Mathematica”.
            <br />
            <br /> 6 listopada 2018 r. prezydent RP Andrzej Duda odznaczył
            Banacha Orderem Orła Białego. <br />
            <br />
            <em>dzieje.pl/postacie/stefan-banach</em>
          </TextWrapper>
        </Column>
      </Row>
    </HeroSection>
  );
};

export default More;
