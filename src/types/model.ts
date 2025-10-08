export interface Anime {
  rating: string;
  description: string;
  assets: Assets;
  originalName: string;
  seasonsCount: number;
  ageRating: string;
  originalAssets: Assets;
  genresIds: string[];
  genres: string[];
  episodeCount: number;
  releaseYears: number[];
  name: string;
}

export interface Assets {
  banner: string;
  portrait: string;
  poster: string;
}

export interface Genre {
  name: string;
}

export type WithId<T> = T & { id: string };

export interface Season {
  index: number;
  name: string;
}

export interface Episode {
  assets: Assets;
  externalId: string;
  name: string;
  index: number;
  originalAssets: Assets;
  type: string;
}
