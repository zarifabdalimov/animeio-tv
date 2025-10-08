import { View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export function SkeletonRow() {
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      className="flex flex-row gap-8 pt-4 px-8"
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <View className="gap-2" key={index}>
          <SkeletonTile height={200} width={400} />
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
  height: number;
  width: number;
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
