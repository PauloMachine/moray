import type { LeafletMouseEvent } from "leaflet";
import { GeoJSON as LGeoJSON } from "react-leaflet";
import type { IGeoJSON } from "./geo-json.types";

const GeoJSON = <T,>({ data, onClick }: IGeoJSON<T>) => {
  return (
    <LGeoJSON
      data={data}
      eventHandlers={{
        click: (event: LeafletMouseEvent) => {
          onClick(event.sourceTarget.feature.properties);
        },
      }}
    />
  );
};

export default GeoJSON;
