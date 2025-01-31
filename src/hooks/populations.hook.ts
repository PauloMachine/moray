import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import type { IPopulations } from "../types/populations.type";
import { getPopulations } from "../services/populations.service";

export const usePopulations = () => {
  return useQuery<IPopulations[], Error>({
    queryKey: ["populations"],
    queryFn: () => getPopulations(),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    onError: () => {
      console.error("An error occurred during get populations");
    },
  } as UseQueryOptions<IPopulations[], Error, IPopulations[]>);
};
