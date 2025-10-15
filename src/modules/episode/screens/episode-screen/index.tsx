import { useGlobalSearchParams } from "expo-router/build/hooks";
import { useEpisode } from "~/modules/episode/screens/episode-screen/hooks/use-episode";
import { Player } from "./parts/player";

export function EpisodeScreen() {
  const params = useGlobalSearchParams<{
    animeId: string;
    seasonId: string;
    episodeId: string;
  }>();
  const episodeQuery = useEpisode(
    params.animeId,
    params.seasonId,
    params.episodeId,
  );

  if (!episodeQuery.data) return null;

  return <Player episode={episodeQuery.data} />;
}
