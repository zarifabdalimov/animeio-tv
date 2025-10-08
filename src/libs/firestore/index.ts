import {
  collection,
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";
import { Genre } from "~/types/model";
import { firestore } from "../firebase";

export const genresCollection = collection(
  firestore,
  "genres",
) as FirebaseFirestoreTypes.CollectionReference<Genre>;

export const animeCollection = collection(
  firestore,
  "anime",
) as FirebaseFirestoreTypes.CollectionReference<Genre>;

export const animeSeasonsCollection = (animeId: string) =>
  collection(firestore, "anime", animeId, "seasons");

export function animeSeasonEpisodesCollection(
  animeId: string,
  seasonId: string,
) {
  return collection(
    firestore,
    "anime",
    animeId,
    "seasons",
    seasonId,
    "episodes",
  );
}
