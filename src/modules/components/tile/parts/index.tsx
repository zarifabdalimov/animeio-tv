import { ImageBackground, ImageBackgroundProps } from "expo-image";
import { PropsWithChildren } from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useResolveClassNames } from "uniwind";

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

export function Title({ children }: PropsWithChildren) {
  return (
    <Text numberOfLines={1} className="text-label-primary font-medium text-2xl">
      {children}
    </Text>
  );
}

export function Caption({ children }: PropsWithChildren) {
  return <Text className="text-label-secondary text-lg">{children}</Text>;
}


export function Image({
  source,
  children,
}: PropsWithChildren<{
  source: ImageBackgroundProps["source"];
}>) {
  const imageContainerStyles = useResolveClassNames("h-tile-h w-full");
  const imageStyles = useResolveClassNames("rounded-2xl");

  return (
    <ImageBackground
      transition={300}
      source={source}
      style={imageContainerStyles}
      cachePolicy="memory"
      imageStyle={imageStyles}
    >
      {children}
    </ImageBackground>
  );
}

export function Container({ children }: PropsWithChildren) {
  return <View className="gap-2 w-tile-w">{children}</View>;
}

export function FocusContainer(props: TouchableOpacityProps) {
  const scale = useSharedValue(1);

  function handleOnFocus() {
    scale.value = withSpring(1.1);
  }

  function handleOnBlur() {
    scale.value = withSpring(1);
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <AnimatedTouchableOpacity
      style={animatedStyle}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      activeOpacity={1}
      className="w-tile-w"
      {...props}
    />
  );
}
