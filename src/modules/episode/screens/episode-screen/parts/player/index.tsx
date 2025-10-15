import { useVideoPlayer, VideoView } from 'expo-video'
import { useResolveClassNames } from 'uniwind'
import { Episode } from '~/types/model'

interface PlayerProps {
	episode: Episode;
}

export function Player({ episode }: PlayerProps) {
	const styles = useResolveClassNames("w-full h-full");
	const player = useVideoPlayer(
		{
			uri: episode.sources.at(0)?.url ?? "",
		},
		(player) => {
			player.play();
		},
	);

	return <VideoView style={styles} player={player} />;
}
