import { LegendList } from "@legendapp/list";
import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import Animated, { FadeInLeft } from "react-native-reanimated";
import { useResolveClassNames } from "uniwind";
import { useAnime } from "~/modules/anime/screens/anime-detail-screen/hooks/use-anime";
import { useAnimeSeasons } from "~/modules/anime/screens/anime-detail-screen/hooks/use-anime-seasons";
import { SeasonRow } from "~/modules/anime/screens/anime-detail-screen/parts/season-row";

export function AnimeDetailScreen() {
  const { animeId } = useLocalSearchParams<{ animeId: string }>();
  const animeQuery = useAnime(animeId);
  const gradientStyles = useResolveClassNames(
    "flex flex-1 justify-end px-screen-px py-8 gap-4",
  );
  const bannerStyles = useResolveClassNames("h-[60vh] w-full");
  const seasonsQuery = useAnimeSeasons(animeId);

  if (!animeQuery.data || !seasonsQuery.data) return null;

  const anime = animeQuery.data;

  return (
    <View>
      <LegendList
        ListHeaderComponent={
          <ImageBackground
            style={bannerStyles}
            transition={300}
            cachePolicy="memory"
            source={{
              uri: anime.assets.banner ?? anime.originalAssets.banner,
            }}
          >
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.81)"]}
              style={gradientStyles}
            >
              <Animated.Text
                entering={FadeInLeft.delay(100)}
                className="text-label-secondary text-2xl uppercase"
              >
                {anime.originalName}
              </Animated.Text>
              <Animated.Text
                entering={FadeInLeft.delay(200)}
                className="text-7xl font-semibold text-label-primary uppercase"
              >
                {anime.name}
              </Animated.Text>
              <Animated.Text
                entering={FadeInLeft.delay(300)}
                className="text-label-secondary text-2xl"
                numberOfLines={5}
              >
                {anime.description}
              </Animated.Text>
              <Animated.Text
                entering={FadeInLeft.delay(400)}
                className="text-label-secondary text-2xl"
              >
                {anime.releaseYears}
              </Animated.Text>
            </LinearGradient>
          </ImageBackground>
        }
        estimatedItemSize={500}
        data={seasonsQuery.data ?? []}
        renderItem={({ item }) => <SeasonRow animeId={animeId} season={item} />}
        keyExtractor={(item) => item.id}
        recycleItems
      />
    </View>
  );
}
