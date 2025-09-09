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

export enum ShareType {
    Track = "track",
    Album = "album",
    Artist = "artist",
    Video = "video",
    Playlist = "playlist",
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

export interface Share {
    originUrl: string,
    shortUrl: string,
    thumbnailUrl: string,
    channelId: number
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
    apiVersion?: 1 | 3,
    nonSync?: boolean
}

export interface GetTrackSourceOptions {
    bitRateType?: BitRateType,
}

export interface TrackSourceResponse {
    requestTime: number,
    playRange: string,
    playReason: string,
    nextAction: string,
    trackSource: TrackSource
}

export interface AutoCompletes {
    sacList: string[]
}

export interface Chart {
    type: string,
    title: string,
    chartDate: string,
    duration: string,
    itemType: "TRACK" | "ALBUM" | "VIDEO",
    items: MultipleTracks | MultipleAlbums | MultipleVideos,
    subTab: Tab[],
    lineRankEndInternalId: number,
    previousLineRankEndInternalId: number,
    createdAt: string,
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

export interface LyricsV1 {
    trackId: string,
    isSyncLyric: boolean,
    lyric: string,
}

export interface LyricsV3 {
    trackId: string,
    hasNormalLyric: boolean,
    hasSyncLyric: boolean,
    normalLyric: NormalLyric,
    syncLyric: SyncLyric
}

export interface NormalLyric {
    sourceType: string,
    languageType: string,
    text: string,
}

export interface SyncLyric {
    startTimeIndex: number[],
    contents: SyncLyricContent[]
}

export interface SyncLyricContent {
    sourceType: string,
    generatedType: string,
    languageType: string,
    contentType: string,
    text: string[]
}

export interface MultipleTracks {
    trackTotalCount: number,
    tracks: Track[]
}

export interface MultipleAlbums {
    albumTotalCount: number,
    albums: Album[]
}

export interface MultipleArtists {
    artistTotalCount: number,
    albums: Artist[]
}

export interface MultipleVideos {
    videoTotalCount: number,
    videos: Video[]
}

export interface MultiplePlaylists {
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
    playtime?: number,
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