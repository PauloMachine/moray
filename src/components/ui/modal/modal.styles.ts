import styled from "styled-components";
import Flex from "../flex";

export const StyledModalContainer = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 30px;

  @media (max-width: 600px) {
    align-items: center !important;
  }
`;

export const StyledModalContent = styled(Flex)`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  height: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 600px) {
    width: 300px;
  }
`;
