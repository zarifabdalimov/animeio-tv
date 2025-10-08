import { PropsWithChildren } from "react";
import { Text, View } from "react-native";

export function Container({ children }: PropsWithChildren) {
  return <View className="py-6">{children}</View>;
}

export function Title({ children }: PropsWithChildren) {
  return (
    <Text className="text-4xl text-label-secondary uppercase text-wrap font-bold pl-8">
      {children}
    </Text>
  );
}
