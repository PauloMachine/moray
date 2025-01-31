import type { CSSProperties, ReactNode } from "react";

export type TFlex = {
  children?: ReactNode;
  onClick?: () => void;
  direction?: "row" | "column";
  align?: "flex-start" | "flex-end" | "center";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  gap?: string;
  p?: string;
  px?: string;
  py?: string;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  style?: CSSProperties;
};
