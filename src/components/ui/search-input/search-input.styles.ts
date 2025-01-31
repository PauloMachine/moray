import styled from "styled-components";
import Flex from "../flex";

export const StyledInputContainer = styled.div`
  position: absolute;
  width: 100%;
  max-width: 400px;
  z-index: 999;
  right: 0;
  padding: 30px 30px 0px 0px;

  @media (max-width: 600px) {
    max-width: 300px;
    padding: 16px;
  }
`;

export const StyledInputContent = styled(Flex)`
  background-color: #fff;
  padding-left: 15px;
  padding-right: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  outline: none;
`;

export const StyledUl = styled.ul`
  position: absolute;
  top: 100%;
  left: 0%;
  transform: translateX(-50%);
  width: 400px;
  background: white;
  border-radius: 8px;
  list-style: none;
  padding: 8px 0;
  margin-top: 6px;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  @media (max-width: 600px) {
    max-width: 300px;
    padding: 0px;
    margin-top: -10px;
    margin-left: 15px;
  }
`;

export const StyledLi = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #ddd;
    color: #000;
  }
`;
