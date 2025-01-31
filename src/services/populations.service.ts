import type { IPopulations } from "../types/populations.type";
import populations from "./mocks/populations.json";

export const getPopulations = async (): Promise<IPopulations[]> => {
  return populations;
};
