import { GeoJsonObject } from "geojson";

export interface IGeoJSON<T> {
  data: GeoJsonObject;
  onClick: (properties: T | null) => void;
}

export type TGeoJSON = {
  type:
    | "FeatureCollection"
    | "Feature"
    | "Point"
    | "MultiPoint"
    | "LineString"
    | "MultiLineString"
    | "Polygon"
    | "MultiPolygon"
    | "GeometryCollection";
};
