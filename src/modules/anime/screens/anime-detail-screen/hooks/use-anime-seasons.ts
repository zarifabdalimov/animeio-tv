import {
  FirebaseFirestoreTypes,
  getDocs,
} from "@react-native-firebase/firestore";
import { useQuery } from "@tanstack/react-query";
import { animeSeasonsCollection } from "~/libs/firestore";
import { Season, WithId } from "~/types/model";

export function useAnimeSeasons(animeId: string) {
  return useQuery({
    queryKey: ["anime", "seasons", animeId],
    queryFn: async (): Promise<WithId<Season>[]> => {
      const snapshot = await getDocs(animeSeasonsCollection(animeId));
      return snapshot.docs.map(
        (doc: FirebaseFirestoreTypes.QueryDocumentSnapshot<Season>) => ({
          ...doc.data(),
          id: doc.id,
        }),
      );
    },
  });
}
