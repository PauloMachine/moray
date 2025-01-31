import { LatLngBoundsExpression } from "leaflet";
import { FeatureCollection, MultiPolygon, Geometry } from "geojson";

export const getBoundsFromGeoJSON = (
  geoJson: FeatureCollection<Geometry, unknown>
): LatLngBoundsExpression | null => {
  const coordinates: [number, number][] = geoJson.features.flatMap(
    (feature) => {
      if (feature.geometry.type === "MultiPolygon") {
        return (feature.geometry as MultiPolygon).coordinates.flat(2) as [
          number,
          number,
        ][];
      }
      return [];
    }
  );

  if (coordinates.length === 0) return null;

  const latitudes = coordinates.map((c) => c[1]);
  const longitudes = coordinates.map((c) => c[0]);

  return [
    [Math.min(...latitudes), Math.min(...longitudes)],
    [Math.max(...latitudes), Math.max(...longitudes)],
  ];
};
