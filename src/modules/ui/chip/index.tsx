import { cva, VariantProps } from "class-variance-authority";
import { View, Text } from "react-native";

const variants = cva("px-3 py-1 rounded-full", {
  variants: {
    color: {
      primary: "bg-chip-primary",
      red: "bg-chip-red",
    },
  },
});

type ChipVariants = VariantProps<typeof variants>;

interface ChipProps extends ChipVariants {
  label: string;
}

export function Chip({ label, color = "primary" }: ChipProps) {
  return (
    <View className={variants({ color })}>
      <Text className="text-white text-xl font-medium uppercase">{label}</Text>
    </View>
  );
}
