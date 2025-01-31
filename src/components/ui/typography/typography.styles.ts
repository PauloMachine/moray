import styled from "styled-components";
import type { TTypography } from "./typography.types";

export const Typography = styled.a<TTypography>`
  font-family: "Roboto", sans-serif;
  color: ${({ color }) => (color ? `${color} !important` : "#000")};
  font-size: ${({ size }) => (size ? `${size}px` : "14px")};
  flex-wrap: ${({ wrap }) => wrap || "wrap"};
  font-weight: ${({ weight }) => Number(weight) || 400};
`;
