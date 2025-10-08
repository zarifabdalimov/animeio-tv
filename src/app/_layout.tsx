import "../global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { LogBox } from "react-native";
import { Uniwind, useResolveClassNames } from "uniwind";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: Infinity,
    },
  },
});

LogBox.ignoreAllLogs();

Uniwind.setTheme("dark");

export default function RootLayout() {
  const styles = useResolveClassNames("bg-bg-primary");

  return (
    <QueryClientProvider client={client}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: styles,
          animation: "slide_from_left",
        }}
      />
    </QueryClientProvider>
  );
}
