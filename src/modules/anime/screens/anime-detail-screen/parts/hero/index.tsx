import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text } from "react-native";
import Animated, { FadeInLeft } from "react-native-reanimated";
import { useResolveClassNames } from "uniwind";
import { Chip } from "~/modules/ui/chip";
import { Anime } from "~/types/model";

interface HeroProps {
  anime: Anime;
}

export function Hero({ anime }: HeroProps) {
  const bannerStyles = useResolveClassNames("h-[60vh] w-full");
  const gradientStyles = useResolveClassNames(
    "flex flex-1 justify-end px-screen-px py-8 gap-4",
  );

  return (
    <ImageBackground
      style={bannerStyles}
      transition={300}
      contentPosition={{
        top: 0,
      }}
      cachePolicy="memory"
      source={{
        uri: anime.assets.banner ?? anime.originalAssets.banner,
      }}
    >
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.81)"]}
        style={gradientStyles}
      >
        {[
          <View className="flex flex-row gap-2 items-center">
            <Text className="text-label-secondary text-2xl uppercase">
              {anime.originalName}
            </Text>
            <Text className="text-label-secondary text-2xl">
              {anime.rating}
            </Text>
          </View>,
          <View className="flex flex-row gap-2 items-center">
            <Text className="text-7xl font-semibold text-label-primary uppercase">
              {anime.name}
            </Text>
            <Chip label={anime.ageRating} color="red" />
          </View>,
          <Text className="text-label-secondary text-2xl" numberOfLines={5}>
            {anime.description}
          </Text>,
          <View className="flex flex-row gap-2">
            {anime.genres.map((genre) => (
              <Chip key={genre} label={genre} color="primary" />
            ))}
          </View>,
          <Text className="text-label-secondary text-2xl">
            {anime.releaseYears.join(", ")}
          </Text>,
        ].map((item, index) => (
          <Animated.View key={index} entering={FadeInLeft.delay(300 + (index * 100))}>
            {item}
          </Animated.View>
        ))}
      </LinearGradient>
    </ImageBackground>
  );
}
