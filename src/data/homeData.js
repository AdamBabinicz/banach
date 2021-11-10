export const heroOne = {
  id: "banach",
  inverse: true,
  bigImage: true,
  topLine: {
    text: "analizy funkc.",
    extraText: "pionier",
  },
  headline: "Stefan Banach",
  description:
    "Nigdy nie ukończył studiów, matematyki nauczył się sam. Jako autor ponad 60 prac naukowych i twórca wielu twierdzeń, w sposób fundamentalny wpłynął na wiele działów królowej nauk.",
  buttonLabel: "Czytaj więcej",
  imgStart: "start",
  img: "./images/5.png",
  linkTo: "/stefan-banach",
  bottomImg: "",
  start: "true",
};

export const heroTwo = {
  id: "steinhaus",
  reverse: true,
  lightBg: false,
  topLine: {
    text: "Banacha",
    extraText: "odkrywca",
  },
  headline: "Hugo Dyonizy Steinhaus",
  description:
    "Był autorem wielu prac z zakresu teorii gier, analizy funkcjonalnej, topologii, teorii mnogości, szeregów trygonometrycznych, szeregów ortogonalnych, teorii funkcji rzeczywistych oraz zastosowań i popularyzacji matematyki.",
  buttonLabel: "Czytaj więcej",
  linkTo: "/hugo-steinhaus",
  imgStart: "",
  img: "./images/3.png",
  bottomImg: "",
  alt: "Vault",
  start: "true",
};

export const heroThree = {
  id: "nikodym",
  bigImage: true,
  smallSection: true,
  inverse: true,
  topLine: {
    text: "Banacha",
    extraText: "rozmówca",
  },
  headline: "Otton Marcin Nikodym",
  description:
    "polski matematyk uznany za wkład w rozwój teorii miary, analizy funkcjonalnej, równań różniczkowych i opisowej teorii mnogości. Jeden z założycieli Polskiego Towarzystwa Matematycznego w 1919.",
  buttonLabel: "Czytaj więcej",
  linkTo: "/otto-nikodym",
  imgStart: "",
  img: "./images/4.png",
  bottomImg: "",
  alt: "Vault",
  start: "true",
};

export const pricingData = [
  {
    title: "Twierdzenie Banacha-Steinhausa",
    price: "zasada jednostajnej ograniczoności",
    numAcc: "twierdzenie analizy funkcjonalnej",
    features: [
      "Granica punktowa ciągu operatorów liniowych i jednakowo ciągłych między przestrzeniami Banacha jest ciągłym operatorem liniowym.",
    ],
  },
  {
    title: "Twierdzenie Hahna-Banacha",
    price:
      "sformułowane i udowodnione niezależnie przez Hansa Hahna i Stefana Banacha w latach 20. XX wieku",
    numAcc: "twierdzenie analizy funkcjonalnej",
    features: [
      "Twierdzenie to mówi o możliwości rozszerzenia ograniczonych funkcjonałów liniowych z podprzestrzeni przestrzeni unormowanej na całą przestrzeń, a także o bogatej strukturze przestrzeni sprzężonej.",
    ],
  },
  {
    title: "Paradoks Banacha-Tarskiego",
    price: "paradoksalny rozkład kuli",
    numAcc: "twierdzenie teorii miary",
    features: [
      "Trójwymiarową kulę można „rozciąć” na skończoną liczbę części (wystarczy ich sześć), a następnie używając wyłącznie przesunięć i obrotów można złożyć z tych części dwie kule o takich samych promieniach jak promień kuli wyjściowej.",
    ],
  },

  // {
  //   title: "Student",
  //   price: "$7.49/month after offer period",
  //   numAcc: "1 account",
  //   features: [
  //     "Special discount for eligible students in university",
  //     "Listen to music ad-free",
  //     "Play anywhere - even offline",
  //     "On-demand playback",
  //   ],
  // },
];
