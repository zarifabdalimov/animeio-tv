import { LegendList } from "@legendapp/list";
import { useGenres } from "~/modules/discovery/screens/discovery-screen/hooks/use-genres";
import { GenreRow } from "./parts/genre-row";

export function DiscoveryScreen() {
  const genresQuery = useGenres();

  return (
    <LegendList
      data={genresQuery.data ?? []}
      renderItem={({ item }) => <GenreRow genre={item} />}
      estimatedItemSize={500}
      keyExtractor={(genre) => genre.name}
      recycleItems
    />
  );
}
