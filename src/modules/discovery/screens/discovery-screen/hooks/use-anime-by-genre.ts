import {
  collection,
  FirebaseFirestoreTypes,
  getDocs,
  orderBy,
  query,
  where,
} from "@react-native-firebase/firestore";
import { useQuery } from "@tanstack/react-query";
import { firestore } from "~/libs/firebase";
import { Anime, Genre, WithId } from "~/types/model";

export function useAnimeByGenre(genre: WithId<Genre>) {
  return useQuery({
    queryKey: ["series", genre.name],
    queryFn: async (): Promise<WithId<Anime>[]> => {
      const q = query(
        collection(firestore, "anime"),
        where("genresIds", "array-contains", genre.id),
        orderBy("name", "asc"),
      );

      const docs = await getDocs(q);
      return docs.docs.map(
        (item: FirebaseFirestoreTypes.QueryDocumentSnapshot<Anime>) => ({
          ...item.data(),
          id: item.id,
        }),
      );
    },
  });
}
