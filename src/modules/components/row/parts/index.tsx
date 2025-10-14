import { PropsWithChildren } from "react";
import { Text, View } from "react-native";
import { useResolveClassNames } from "uniwind";

export function Container({ children }: PropsWithChildren) {
  return <View className="py-10">{children}</View>;
}

export function Title({ children }: PropsWithChildren) {
  return (
    <Text className="text-4xl text-label-secondary uppercase text-wrap font-bold px-screen-px">
      {children}
    </Text>
  );
}

export const useRowLegendListContentContainerStyles = () =>
  useResolveClassNames("gap-tiles-gap px-screen-px pt-4");
