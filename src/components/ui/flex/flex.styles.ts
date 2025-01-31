import styled from "styled-components";
import type { TFlex } from "./flex.types";

export const Flex = styled.div<TFlex>`
  width: 100%;
  display: flex;
  box-sizing: border-box;

  flex-direction: ${({ direction }) => direction || "column"};
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};
  gap: ${({ gap }) => (gap ? `${gap}px` : "0px")};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};
  padding: ${({ p }) => (p ? `${p}px` : "0px")};
  padding-top: ${({ py }) => (py ? `${py}px` : "0px")};
  padding-bottom: ${({ py }) => (py ? `${py}px` : "0px")};
  padding-left: ${({ px }) => (px ? `${px}px` : "0px")};
  padding-right: ${({ px }) => (px ? `${px}px` : "0px")};
`;
