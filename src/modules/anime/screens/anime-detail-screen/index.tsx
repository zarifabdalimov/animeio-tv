import { LegendList } from "@legendapp/list";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { useAnime } from "~/modules/anime/screens/anime-detail-screen/hooks/use-anime";
import { useAnimeSeasons } from "~/modules/anime/screens/anime-detail-screen/hooks/use-anime-seasons";
import { Hero } from "~/modules/anime/screens/anime-detail-screen/parts/hero";
import { SeasonRow } from "~/modules/anime/screens/anime-detail-screen/parts/season-row";

export function AnimeDetailScreen() {
  const { animeId } = useLocalSearchParams<{ animeId: string }>();
  const animeQuery = useAnime(animeId);
  const seasonsQuery = useAnimeSeasons(animeId);

  if (!animeQuery.data || !seasonsQuery.data) return null;

  return (
    <View>
      <LegendList
        ListHeaderComponent={<Hero anime={animeQuery.data} />}
        estimatedItemSize={500}
        data={seasonsQuery.data}
        renderItem={({ item }) => <SeasonRow animeId={animeId} season={item} />}
        keyExtractor={(item) => item.id}
        recycleItems
      />
    </View>
  );
}
