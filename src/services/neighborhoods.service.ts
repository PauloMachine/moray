import type { INeighborhoods } from "../types/neighborhoods.type";
import neighborhoods from "./mocks/neighborhoods.json";

export const getNeighborhoods = async (): Promise<INeighborhoods> => {
  return neighborhoods as INeighborhoods;
};
