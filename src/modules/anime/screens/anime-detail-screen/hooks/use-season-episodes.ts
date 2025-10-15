import {
  FirebaseFirestoreTypes,
  getDocs,
  orderBy,
  query,
} from "@react-native-firebase/firestore";
import { useQuery } from "@tanstack/react-query";
import { animeSeasonEpisodesCollection } from "~/libs/firestore";
import { Episode, WithId } from "~/types/model";

export function useSeasonEpisodes(animeId: string, seasonId: string) {
  return useQuery({
    queryKey: ["anime", "seasons", animeId, seasonId, "episodes"],
    queryFn: async (): Promise<WithId<Episode>[]> => {
      const snapshot = await getDocs(
        query(
          animeSeasonEpisodesCollection(animeId, seasonId),
          orderBy("index", "asc"),
        )
      );
      return snapshot.docs.map(
        (doc: FirebaseFirestoreTypes.QueryDocumentSnapshot<Episode>) => ({
          ...doc.data(),
          id: doc.id,
        }),
      );
    },
  });
}
