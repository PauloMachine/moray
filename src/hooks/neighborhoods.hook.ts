import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import type { INeighborhoods } from "../types/neighborhoods.type";
import { getNeighborhoods } from "../services/neighborhoods.service";

export const useNeighborhoods = () => {
  return useQuery<INeighborhoods, Error>({
    queryKey: ["neighborhoods"],
    queryFn: () => getNeighborhoods(),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    onError: () => {
      console.error("An error occurred during get neighborhoods");
    },
  } as UseQueryOptions<INeighborhoods, Error, INeighborhoods>);
};
