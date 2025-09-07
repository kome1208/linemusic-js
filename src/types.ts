export interface LINEMusicOptions {
    lmlc: string,
    deviceId: string,
}

export enum SortType {
    Relevance = "RELEVANCE",
    Popular = "POPLAR",
    Release = "RELEASE",
}

export enum SearchType {
    Tracks = "tracks",
    Albums = "albums",
    Artists = "artists",
    Videos = "videos",
    Playlists = "playlists",
    Lyrics = "lyrics",
}

export enum FeaturedType {
    Tracks = "tracks",
    Albums = "albums"
}

export enum ChartType {
    Tracks = "tracks",
    Albums = "albums",
    Videos = "videos"
}

export enum BitRateType {
    Min = "min",
    Mid = "mid",
    Max = "max"
}

export interface BaseResponse<T> {
    response: {
        result: T
    }
}

export interface SearchOptions {
    start?: number,
    display?: number,
    sortType?: SortType,
    searchType?: SearchType,
}

export interface DisplayOptions {
    start?: number,
    display?: number
}

export interface LyricsOptions {
    apiVersion?: number,
    nonSync?: boolean
}

export interface GetTrackSourceOptions {
    bitRateType?: BitRateType,
}

export type GetTrackSourceResult = BaseResponse<GetTrackSource>;

export type GetTracksResult = BaseResponse<GetTracks>;

export type GetAlbumsResult = BaseResponse<GetAlbums>;

export type GetAlbumResult = BaseResponse<GetAlbum>

export type GetArtistsResult = BaseResponse<GetArtists>;

export type GetVideosResult = BaseResponse<GetVideos>;

export type GetPlaylistsResult = BaseResponse<GetPlaylists>;

export type GetChartResult = BaseResponse<GetChart>;

export type GetLyricsResult = BaseResponse<GetLyrics>;

export interface GetTrackSource {
    requestTime: number,
    playRange: string,
    playReason: string,
    nextAction: string,
    trackSource: TrackSource
}

export interface GetChart {
    type: string,
    title: string,
    chartDate: string,
    duration: string,
    itemType: "TRACK" | "ALBUM" | "VIDEO",
    items: GetTracks | GetAlbums | GetVideos,
    subTab: Tab[],
    lineRankEndInternalId: number,
    previousLineRankEndInternalId: number,
    createdAt: string,
}

export interface GetAlbum {
    album: Album
}

export interface Tab {
    name: string,
    type: string,
}

export interface TrackSource {
    id: string,
    bitRateType: BitRateType,
    m3u8Url: string,
    playTime: number,
    eqMeta: string
}

export interface GetLyrics {
    lyric: {
        trackId: string,
        isSyncLyric: boolean,
        lyric: string,
    },
    credential: string
}

export interface GetTracks {
    trackTotalCount: number,
    tracks: Track[]
}

export interface GetAlbums {
    albumTotalCount: number,
    albums: Album[]
}

export interface GetArtists {
    artistTotalCount: number,
    albums: Artist[]
}

export interface GetVideos {
    videoTotalCount: number,
    videos: Video[]
}

export interface GetPlaylists {
    playlistTotalCount: number,
    playlists: Playlist[]
}

export interface Track {
    trackId: string,
    trackTitle: string,
    discNumber: number,
    trackNumber: number,
    artistTotalCount: number,
    listenedCount: number,
    artists: Artist[],
    album: Album,
    hasLyric: boolean,
    isStreaming: boolean,
    isDownload: boolean,
    isMobileDownload: boolean,
    userAction: {
        isPurchased: boolean,
    },
    likeCount: number,
    isKaraokeEnabled: boolean,
    isExplicit: boolean,
    lyric?: string
}

export interface Artist {
    artistId: string,
    artistName: string,
    trackCount: number,
    albumCount: number,
    videoCount: number,
    imageUrl: string,
    likeCount: number
}

export interface Album {
    albumId: string,
    albumTitle: string,
    releaseDate: string,
    imageUrl: string,
    artistTotalCount: number,
    artists: Artist[],
    trackTotalCount: number,
    isAdult: boolean,
    producerLine: string,
    isStreaming: boolean,
    isMobileDownload: boolean,
    isDownload: boolean,
    likeCount: number,
    userAction: {
        isPurchased: boolean
    }
}

export interface Video {
    videoId: string,
    imageUrl: string,
    videoTitle: string,
    artistName: string,
    playTime: string,
    releaseDate: string,
    track: Track
}

export interface Playlist {
    plId: string,
    title: string,
    subTitle: string,
    image: {
        baseImageUrl: string,
    },
    desc: string,
    timeInfo: string,
    updateTime: string,
    tracksTotalCount: number,
    sub2Title: string,
    playtime: number,
    likeCount: number,
    isPublic: boolean,
    isMine: boolean,
    type: string,
    contentType: string,
    playlistContentType: string,
    playlistDataType: string,
    isCoverImageUrl: boolean,
    isOfficialAccount: boolean
}