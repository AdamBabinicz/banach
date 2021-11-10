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
import { HeroSection } from "./MoreStyles";

const More = () => {
  return (
    <HeroSection id="stefan-banach">
      <Row justify="center" align="center" height="100%" padding="2rem">
        <Column align="center" mb="10%">
          <MainHeading>Stefan Banach</MainHeading>
          <TextWrapper
            color="white"
            size="clamp(1rem,3vw,.9rem)"
            margin="0 0 2rem"
            lineHeight="1.1rem"
            maxWidth="1000px"
            align="justify"
          >
            Początkowo studiował matematykę jako samouk. Przez krótki czas
            uczęszczał na Uniwersytet Jagielloński, a następnie wstąpił na
            Politechnikę Lwowską. Studia na Politechnice przerwał wybuch I wojny
            światowej. Banach wrócił do Krakowa. Nie przestał interesować się
            matematyką, nie odbywał jednak w tym czasie regularnych studiów;
            <br />
            <br /> A oto jak opisuje Steinhaus swe pierwsze spotkanie z
            Banachem: "Idąc letnim wieczorem r. 1916 wzdłuż plant krakowskich,
            usłyszałem rozmowę, a raczej tylko kilka słów; wyrazy "całka
            Lebesgue'a" były tak nieoczekiwane, że zbliżyłem się do ławki i
            zapoznałem się z dyskutantami; to Stefan Banach i Otton Nikodym
            rozmawiali o matematyce". Tak odbyło się "odkrycie" Banacha.
            Steinhaus uważał je za swoje największe odkrycie matematyczne.
            <br />
            <br /> To spotkanie Steinhausa z Banachem miało niemal
            natychmiastowe konsekwencje naukowe: Steinhaus zakomunikował
            Banachowi pewne zagadnienie, nad którym od dłuższego czasu pracował,
            a w parę dni później - ku zdziwieniu Steinhausa - Banach przyszedł z
            gotowym rozwiązaniem. <br />
            <br />
            <em>www.lwow.com.pl/m.htm</em>
          </TextWrapper>
        </Column>
      </Row>
    </HeroSection>
  );
};

export default More;
