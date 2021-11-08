import React, { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Content from "../../components/Content/Content";
import Pricing from "../../components/Pricing/Pricing";
import { heroOne, heroTwo, heroThree } from "../../data/homeData";
import Popup from "../../components/Popup/Popup";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 2000);
  }, []);

  return (
    <>
      <Hero />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Pricing />
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h3
          style={{
            marginBottom: "2.5rem",
            textAlign: "center",
            lineHeight: "3.5rem",
          }}
        >
          Stefan Banach - karmiciel wszy!
          <span aria-label="Description of the overall image" role="img">
            &nbsp;
          </span>
        </h3>
        <p>
          Profesor Rudolf Weigl pomógł ochronić wielu usuniętych z pracy
          profesorów uniwersytetu i ich współpracowników, zatrudniając ich jako
          karmicieli wszy. Takie zatrudnienie uprawniało do specjalnych racji
          żywnościowych i - chociaż częściowo - ubezpieczało przed
          aresztowaniami, wywózką i/lub śmiercią pod okupacją hitlerowską.
          Niektóre aspekty zatrudnienia w Instytucie Weigla miały wiele
          wspólnego z filmem Spielberga „Lista Schindlera”. <br />
          <br />
          <em>www.lwow.com.pl/m.htm</em>
          <br />
          <br />
        </p>
      </Popup>
    </>
  );
};

export default HomePage;
