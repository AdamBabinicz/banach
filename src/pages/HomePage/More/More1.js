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
import { HeroSection } from "./MoreStyles1";

const More1 = () => {
  return (
    <HeroSection id="stefan-banach">
      <Row justify="center" align="center" height="100%" padding="2rem">
        <Column align="center" mb="10%">
          <MainHeading>Hugo Steinhaus</MainHeading>
          <TextWrapper
            color="white"
            // size="clamp(1rem,3vw,1.3rem)"
            size="max(.8rem, 1.2vw)"
            margin="0 0 2rem"
            lineHeight="1.1rem"
            maxWidth="1200px"
            align="justify"
          >
            <p>
              W 1918 opublikował pracę Additive und stetige
              Funktionaloperationen („Mathematische Zeitschrift”, 5/1919),
              uważaną za pierwszą polską pracę o operacjach funkcyjnych. Po
              zakończeniu I wojny światowej przebywał w Jaśle, gdzie pracował
              jako matematyk w biurze rozdziału gazu.
              <br />
              <br /> W 1920 został profesorem nadzwyczajnym matematyki
              Uniwersytetu Lwowskiego i kierownikiem I Katedry Matematyki
              (1920–1939), a w 1923 profesorem zwyczajnym. Wtedy napisał
              popularną książeczkę „Czem jest, a czem nie jest matematyka”.
              Kilkakrotnie wyjeżdżał do Paryża, Getyngi i Bolonii.
              <br />
              <br /> W Bolonii odbył się kongres matematyczny, reprezentowany
              przez naukowców niemal z całego świata. Subwencję na pobyt
              polskich matematyków załatwił prof. Kazimierz Bartel. (sprawował
              wówczas stanowisko Prezesa Rady Ministrów).
              <br />
              <br />
              Skupione wokół Steinhausa i Stefana Banacha (o którym sam
              Steinhaus mówił, że jest jego największym matematycznym odkryciem)
              grono lwowskich matematyków, wśród których byli między innymi
              Stanisław Mazur, Władysław Orlicz, Juliusz Paweł Schauder, Stefan
              Kaczmarz, Stanisław Ulam, Władysław Nikliborc tworzyło tak zwaną
              lwowską szkołę matematyczną.
              <br />
              <br />
              <em>pl.wikipedia.org/wiki/Hugo_Steinhaus</em>
            </p>
          </TextWrapper>
        </Column>
      </Row>
    </HeroSection>
  );
};

export default More1;
