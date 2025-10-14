import { DimensionValue, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { useResolveClassNames } from "uniwind";

export function SkeletonRow() {
  const { height, width } = useResolveClassNames("w-tile-w h-tile-h");

  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      className="flex flex-row gap-tiles-gap pt-4 px-screen-px"
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <View className="gap-2" key={index}>
          <SkeletonTile height={height} width={width} />
          <View className="gap-1">
            <SkeletonTile height={30} width={80} />
            <SkeletonTile height={25} width={40} />
          </View>
        </View>
      ))}
    </Animated.View>
  );
}

interface SkeletonProps {
  height?: DimensionValue;
  width?: DimensionValue;
}

function SkeletonTile({ height, width }: SkeletonProps) {
  return (
    <View
      className="bg-zinc-800 rounded-2xl"
      style={{
        height,
        width,
      }}
    />
  );
}
