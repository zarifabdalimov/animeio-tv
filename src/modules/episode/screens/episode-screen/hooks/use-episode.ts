import { doc, getDoc } from "@react-native-firebase/firestore";
import { useQuery } from "@tanstack/react-query";
import { animeSeasonEpisodesCollection } from "~/libs/firestore";
import { Episode, WithId } from "~/types/model";

export function useEpisode(
  animeId: string,
  seasonId: string,
  episodeId: string,
) {
  return useQuery({
    queryKey: ["episode", animeId, seasonId, episodeId],
    queryFn: async (): Promise<WithId<Episode> | null> => {
      const snapshot = await getDoc(
        doc(animeSeasonEpisodesCollection(animeId, seasonId), episodeId),
      );

      if (!snapshot.exists) return null;

      return {
        ...(snapshot.data() as Episode),
        id: snapshot.id,
      };
    },
  });
}
