import {
  FirebaseFirestoreTypes,
  getDocs,
} from "@react-native-firebase/firestore";
import { useQuery } from "@tanstack/react-query";
import { genresCollection } from "~/libs/firestore";
import { Genre, WithId } from "~/types/model";

export function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: async (): Promise<WithId<Genre>[]> => {
      const docs = await getDocs(genresCollection);
      return docs.docs.map(
        (item: FirebaseFirestoreTypes.QueryDocumentSnapshot<Genre>) => ({
          ...item.data(),
          id: item.id,
        }),
      );
    },
  });
}
