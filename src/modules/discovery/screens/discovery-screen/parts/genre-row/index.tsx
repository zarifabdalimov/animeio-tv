import { LegendList } from "@legendapp/list";
import { Row as R } from "~/modules/components/row";
import { SkeletonRow } from "~/modules/discovery/screens/discovery-screen/parts/genre-row/parts/skeleton";
import { useAnimeByGenre } from "../../hooks/use-anime-by-genre";
import { AnimeTile } from "./parts/anime-tile";

export function GenreRow({ genre }: { genre: { name: string } }) {
  const animeQuery = useAnimeByGenre(genre);

  return (
    <R.Container>
      <R.Title>{genre.name}</R.Title>
      {animeQuery.isLoading ? (
        <SkeletonRow />
      ) : (
        <LegendList
          horizontal
          estimatedItemSize={500}
          data={animeQuery.data ?? []}
          renderItem={({ item }) => <AnimeTile anime={item} />}
          keyExtractor={(anime) => anime.name}
          recycleItems
        />
      )}
    </R.Container>
  );
}
