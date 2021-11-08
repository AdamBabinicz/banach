import React from "react";
import { Button, Heading, TextWrapper } from "../../globalStyles";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCardInfo,
  PricingCardPlan,
  PricingCardCost,
  PricingCardFeatures,
  PricingCardText,
  PricingCardFeature,
} from "./PricingStyles";
import Tilt from "react-tilt";
import { pricingData } from "../../data/homeData";

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: "1rem" }}>
      <PricingSection id="dorobek">
        <PricingWrapper>
          <PricingHeading>Analiza funkcjonalna</PricingHeading>
          <TextWrapper
            color="white"
            maxWidth="460px"
            mb="2rem"
            size="1.2rem"
            lineHeight="1.3rem"
            align="center"
            weight="600"
          >
            fundamentalne twierdzenia
          </TextWrapper>
          <PricingContainer>
            {pricingData.map((card, index) => (
              <Tilt
                className="Tilt"
                key={index}
                options={{ max: 15, scale: 1.01, speed: 200 }}
              >
                <PricingCardInfo key={index}>
                  <PricingCardPlan>{card.title}</PricingCardPlan>
                  <PricingCardCost>{card.price}</PricingCardCost>
                  <PricingCardText>{card.numAcc}</PricingCardText>

                  <PricingCardFeatures>
                    {card.features.map((feature, index) => (
                      <PricingCardFeature key={index}>
                        {feature}
                      </PricingCardFeature>
                    ))}
                  </PricingCardFeatures>
                  {/* <Button>Więcej</Button> */}
                </PricingCardInfo>
              </Tilt>
            ))}
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
};

export default Pricing;
