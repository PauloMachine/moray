import type { TFeatureProperties } from "../../types/neighborhoods.type";

export type SNeighborhood = TFeatureProperties | null;

export interface IHomeModal {
  neighborhood: SNeighborhood;
  setNeighborhood: (neighborhood: SNeighborhood) => void;
}
