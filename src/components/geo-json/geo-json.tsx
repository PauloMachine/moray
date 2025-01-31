import type { LeafletMouseEvent } from "leaflet";
import { GeoJSON as LGeoJSON } from "react-leaflet";
import type { IGeoJSON } from "./geo-json.types";

const GeoJSON = <T,>({ data, onClick }: IGeoJSON<T>) => {
  return (
    <LGeoJSON
      data={data}
      style={(feature) => ({
        color: feature?.properties?.color || "#4285f4",
      })}
      eventHandlers={{
        click: (event: LeafletMouseEvent) => {
          onClick(event.sourceTarget.feature.properties);
        },
      }}
    />
  );
};

export default GeoJSON;
