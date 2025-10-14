import { LegendList } from "@legendapp/list";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useSeasonEpisodes } from "~/modules/anime/screens/anime-detail-screen/hooks/use-season-episodes";
import { Row as R, Row } from '~/modules/components/row'
import { Tile } from "~/modules/components/tile";
import { Season, WithId } from "~/types/model";

interface SeasonRowProps {
  animeId: string;
  season: WithId<Season>;
}

export function SeasonRow({ animeId, season }: SeasonRowProps) {
  const episodesQuery = useSeasonEpisodes(animeId, season.id);
  const styles = R.useRowLegendListContentContainerStyles()

  if (!episodesQuery.data) return null;

  return (
    <Row.Container>
      <Row.Title>{season.name}</Row.Title>
      <LegendList
        horizontal
        data={episodesQuery.data ?? []}
        renderItem={({ item, index }) => (
          <Animated.View entering={FadeInDown.delay(index * 100)}>
            <Tile.Container>
              <Tile.FocusContainer>
                <Tile.Image
                  source={item.assets.poster ?? item.originalAssets.poster}
                />
              </Tile.FocusContainer>
              <Tile.Title>{item.name}</Tile.Title>
            </Tile.Container>
          </Animated.View>
        )}
        estimatedItemSize={400}
        contentContainerStyle={styles}
        keyExtractor={(item) => item.id}
        recycleItems
      />
    </Row.Container>
  );
}
