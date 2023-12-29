import { useQuery } from "@tanstack/react-query";
import { fetchRoverPhotos } from "../api/rover";

export const useGetRoverPhotos = () =>
  useQuery({
    queryKey: ["photos"],
    queryFn: fetchRoverPhotos,
  });
