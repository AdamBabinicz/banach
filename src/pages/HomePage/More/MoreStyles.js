import styled from "styled-components";
import { Row, Section } from "../../../globalStyles";
import { orange } from "../../../Colors";

export const HeroSection = styled(Section)`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)),
    url("/images/3.jpg") center/cover fixed;
  min-height: 100vh;
  display: flex;
  padding-top: 15rem;

  @media screen and (max-width: 768px) {
    padding-top: 120px;
  }
`;

// export const TextWrapper = styled.p`
//   @media screen and (max-width: 768px) {
//     p {
//       font-size: 0.8rem;
//       color: red !important;
//     }
//   }
// `;

export const ButtonContainer = styled(Row)`
  justify-content: center;
  flex-flow: wrap;

  button {
    background-color: transparent;
    margin: 0 0.3rem;
  }
  button:nth-child(1) {
    border: 2px solid ${orange};

    &:hover {
      border: 2px solid transparent;
    }
  }

  button:nth-child(2) {
    padding: 8px 32px;

    display: flex;
    align-items: center;

    &:hover {
      background-color: transparent;
      color: ${orange};
    }
    > svg {
      margin-right: 0.4rem;
    }
  }
`;
