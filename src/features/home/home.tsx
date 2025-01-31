import { useMemo, useState } from "react";
import { TileLayer } from "react-leaflet";
import { GeoJSON } from "../../components/geo-json";
import MapContainer from "../../components/map-container";
import HomeModal from "./home-modal.tsx";
import { useNeighborhoods } from "../../hooks/neighborhoods.hook.ts";
import { Flex, SearchInput } from "../../components/ui";
import type { SNeighborhood } from "./home.types.ts";
import type { TFeatureProperties } from "../../types/neighborhoods.type.ts";

const Home = () => {
  const { data: neighborhoods } = useNeighborhoods();
  const [neighborhood, setNeighborhood] = useState<SNeighborhood | null>(null);

  const searchOptions = useMemo(() => {
    return (
      neighborhoods?.features.map((feature) => ({
        label: feature.properties.name,
        value: feature.properties.id,
      })) || []
    );
  }, [neighborhoods]);

  const handleSelectNeighborhood = (value: string | number) => {
    const selectedFeature = neighborhoods?.features.find(
      (feature) => feature.properties.id === value
    );

    if (selectedFeature) setNeighborhood(selectedFeature.properties);
  };

  return (
    <Flex>
      <HomeModal
        neighborhood={neighborhood}
        setNeighborhood={setNeighborhood}
      />
      {neighborhoods && (
        <MapContainer data={neighborhoods}>
          <SearchInput
            data={searchOptions}
            onSelect={handleSelectNeighborhood}
            placeholder="Pesquise pelo nome do bairro"
          />
          <TileLayer
            url={`${import.meta.env.VITE_MAP_URL}?key=${import.meta.env.VITE_MAP_KEY}`}
          />
          <GeoJSON<TFeatureProperties>
            data={neighborhoods}
            onClick={setNeighborhood}
          />
        </MapContainer>
      )}
    </Flex>
  );
};

export default Home;
