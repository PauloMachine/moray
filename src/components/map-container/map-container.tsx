import { useEffect, useMemo, useState } from "react";
import type { LatLngBoundsExpression } from "leaflet";
import { MapContainer as LMapContainer } from "react-leaflet";
import { getBoundsFromGeoJSON } from "../geo-json/index.ts";
import { IMapContainer } from "./map-container.types.ts";

const MapContainer = ({ data, children }: IMapContainer) => {
  const [bounds, setBounds] = useState<LatLngBoundsExpression | undefined>(
    undefined
  );

  const formatBounds = useMemo(() => {
    return data ? getBoundsFromGeoJSON(data) : undefined;
  }, [data]);

  useEffect(() => {
    if (formatBounds) setBounds(formatBounds);
  }, [formatBounds]);

  return (
    data &&
    bounds && (
      <LMapContainer
        zoom={14}
        bounds={bounds}
        zoomControl={false}
        style={{ height: "100vh", width: "100%" }}
      >
        {children}
      </LMapContainer>
    )
  );
};

export default MapContainer;
