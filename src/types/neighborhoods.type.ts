import type { FeatureCollection, MultiPolygon } from "geojson";

export type TGeometry<T extends string> = {
  type: T;
  coordinates: number[][][][];
};

export type TFeatureProperties = {
  id: number;
  name: string;
  setor: string;
  zona: string;
  color: string;
};

export type TFeature<G extends string = "MultiPolygon"> = {
  type: "Feature";
  properties: TFeatureProperties;
  geometry: TGeometry<G>;
};

export interface INeighborhoods
  extends FeatureCollection<MultiPolygon, TFeatureProperties> {
  type: "FeatureCollection";
  features: TFeature[];
}
