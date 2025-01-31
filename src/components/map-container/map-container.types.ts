import { FeatureCollection, Geometry } from "geojson";

export interface IMapContainer {
  data: FeatureCollection<Geometry, unknown>;
  children: React.ReactNode;
}
