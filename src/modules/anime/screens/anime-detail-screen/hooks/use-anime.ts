import { doc, getDoc } from "@react-native-firebase/firestore";
import { useQuery } from "@tanstack/react-query";
import { animeCollection } from "~/libs/firestore";
import { Anime, WithId } from "~/types/model";

export function useAnime(id: string) {
  return useQuery({
    queryKey: ["anime", id],
    queryFn: async (): Promise<WithId<Anime> | null> => {
      const snapshot = await getDoc(doc(animeCollection, id));

      if (!snapshot.exists) return null;

      return {
        ...(snapshot.data() as Anime),
        id: snapshot.id,
      };
    },
  });
}
