import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { useResolveClassNames } from "uniwind";
import { Tile as T } from "~/modules/components/tile";
import { Anime, WithId } from "~/types/model";

interface AnimeTileProps {
  anime: WithId<Anime>;
}

export function AnimeTile({ anime }: AnimeTileProps) {
  const gradientStyles = useResolveClassNames("flex flex-1 justify-end p-4");
  const router = useRouter();

  function handleOnPress() {
    router.push(`/anime/${anime.id}`);
  }

  return (
    <T.Container>
      <T.FocusContainer onPress={handleOnPress}>
        <T.Image source={anime.assets.poster ?? anime.originalAssets.poster}>
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.81)"]}
            style={gradientStyles}
          >
            <Text className="text-white">
              Seasons {anime.seasonsCount} | Episodes {anime.episodeCount}
            </Text>
          </LinearGradient>
        </T.Image>
      </T.FocusContainer>
      <View>
        <T.Title>{anime.name}</T.Title>
        <View className="flex flex-row justify-between">
          <T.Caption>{anime.releaseYears}</T.Caption>
          <T.Caption>{anime.rating}</T.Caption>
        </View>
      </View>
    </T.Container>
  );
}
