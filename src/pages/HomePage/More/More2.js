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
import { HeroSection } from "./MoreStyles2";

const More = () => {
  return (
    <HeroSection id="stefan-banach">
      <Row justify="center" align="center" height="100%" padding="2rem">
        <Column align="center" mb="10%">
          <MainHeading>Otton Nikodym</MainHeading>
          <TextWrapper
            color="white"
            size="clamp(1rem,3vw,1.3rem)"
            margin="0 0 2rem"
            lineHeight="1.1rem"
            maxWidth="1200px"
            align="justify"
          >
            Nikodym był współzałożycielem Towarzystwa Matematycznego w Krakowie
            w 1919 r., które wkrótce przerodziło się w Polskie Towarzystwo
            Matematyczne. Był on bardzo wszechstronnym matematykiem. Interesował
            się twórczo logiką, teorią miary, teorią potencjału, analizą
            funkcjonalną, równaniami różniczkowymi cząstkowymi drugiego rzędu,
            matematycznymi metodami fizyki, teorią sieci, algebrą.
            <br />
            <br /> Jest autorem 86 prac matematycznych, pięciu podręczników
            akademickich, kilku prac z zakresu dydaktyki, popularyzacji
            matematyki i metodyki nauczania matematyki. Wśród nich był
            podręcznik akademicki "Równania różniczkowe" (1949 r.), "Teoria
            tensorów wraz z zastosowaniami do geometrii i fizyki matematycznej"
            (1938 r.), a także mający dwa wydania, napisany wspólnie z żoną
            Stanisławą "Wstęp do rachunku różniczkowego" (1936 r. i IM47 r.)
            przeznaczony dla samokształcenia absolwentów szkół średnich i
            studentów pierwszych lat kierunków matematycznych.
            <br />
            <br /> Nikodym interesował się problemami dydaktyki matematyki tak
            szkoły średniej, jak i wyższej. Był autorem cyklu wykładów z
            dziedziny nauk ścisłych. Napisał "Spójrzmy w głębiny myśli" (1946
            r.) oraz "Dydaktykę matematyki czystej w zakresie gimnazjum
            wyższego" (I tom "Liczby naturalne" - 1930 r., II tom "Ułamki oraz
            ich algebra" - 1937 r.).
            <br />
            <br />
            <em>www.tomaszgrebski.pl/viewpage.php?page_id=251</em>
          </TextWrapper>
        </Column>
      </Row>
    </HeroSection>
  );
};

export default More;
