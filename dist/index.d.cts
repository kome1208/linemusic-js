interface LINEMusicOptions {
    lmlc: string;
    deviceId: string;
}
declare enum SortType {
    Relevance = "RELEVANCE",
    Popular = "POPLAR",
    Release = "RELEASE"
}
declare enum SearchType {
    Tracks = "tracks",
    Albums = "albums",
    Artists = "artists",
    Videos = "videos",
    Playlists = "playlists",
    Lyrics = "lyrics"
}
declare enum ShareType {
    Track = "track",
    Album = "album",
    Artist = "artist",
    Video = "video",
    Playlist = "playlist"
}
declare enum FeaturedType {
    Tracks = "tracks",
    Albums = "albums"
}
declare enum ChartType {
    Tracks = "tracks",
    Albums = "albums",
    Videos = "videos"
}
declare enum BitRateType {
    Min = "min",
    Mid = "mid",
    Max = "max"
}
interface BaseResponse<T> {
    response: {
        result: T;
    };
}
interface Share {
    originUrl: string;
    shortUrl: string;
    thumbnailUrl: string;
    channelId: number;
}
interface SearchOptions {
    start?: number;
    display?: number;
    sortType?: SortType;
    searchType?: SearchType;
}
interface DisplayOptions {
    start?: number;
    display?: number;
}
interface LyricsOptions {
    apiVersion?: 1 | 3;
    nonSync?: boolean;
}
interface GetTrackSourceOptions {
    bitRateType?: BitRateType;
}
interface TrackSourceResponse {
    requestTime: number;
    playRange: string;
    playReason: string;
    nextAction: string;
    trackSource: TrackSource;
}
interface AutoCompletes {
    sacList: string[];
}
interface Chart {
    type: string;
    title: string;
    chartDate: string;
    duration: string;
    itemType: "TRACK" | "ALBUM" | "VIDEO";
    items: MultipleTracks | MultipleAlbums | MultipleVideos;
    subTab: Tab[];
    lineRankEndInternalId: number;
    previousLineRankEndInternalId: number;
    createdAt: string;
}
interface Tab {
    name: string;
    type: string;
}
interface TrackSource {
    id: string;
    bitRateType: BitRateType;
    m3u8Url: string;
    playTime: number;
    eqMeta: string;
}
interface LyricsV1 {
    trackId: string;
    isSyncLyric: boolean;
    lyric: string;
}
interface LyricsV3 {
    trackId: string;
    hasNormalLyric: boolean;
    hasSyncLyric: boolean;
    normalLyric: NormalLyric;
    syncLyric: SyncLyric;
}
interface NormalLyric {
    sourceType: string;
    languageType: string;
    text: string;
}
interface SyncLyric {
    startTimeIndex: number[];
    contents: SyncLyricContent[];
}
interface SyncLyricContent {
    sourceType: string;
    generatedType: string;
    languageType: string;
    contentType: string;
    text: string[];
}
interface MultipleTracks {
    trackTotalCount: number;
    tracks: Track[];
}
interface MultipleAlbums {
    albumTotalCount: number;
    albums: Album[];
}
interface MultipleArtists {
    artistTotalCount: number;
    albums: Artist[];
}
interface MultipleVideos {
    videoTotalCount: number;
    videos: Video[];
}
interface MultiplePlaylists {
    playlistTotalCount: number;
    playlists: Playlist[];
}
interface Track {
    trackId: string;
    trackTitle: string;
    discNumber: number;
    trackNumber: number;
    artistTotalCount: number;
    listenedCount: number;
    artists: Artist[];
    album: Album;
    hasLyric: boolean;
    isStreaming: boolean;
    isDownload: boolean;
    isMobileDownload: boolean;
    userAction: {
        isPurchased: boolean;
    };
    likeCount: number;
    isKaraokeEnabled: boolean;
    isExplicit: boolean;
    lyric?: string;
}
interface Artist {
    artistId: string;
    artistName: string;
    trackCount: number;
    albumCount: number;
    videoCount: number;
    imageUrl: string;
    likeCount: number;
}
interface Album {
    albumId: string;
    albumTitle: string;
    releaseDate: string;
    imageUrl: string;
    artistTotalCount: number;
    artists: Artist[];
    trackTotalCount: number;
    isAdult: boolean;
    playtime?: number;
    producerLine: string;
    isStreaming: boolean;
    isMobileDownload: boolean;
    isDownload: boolean;
    likeCount: number;
    userAction: {
        isPurchased: boolean;
    };
}
interface Video {
    videoId: string;
    imageUrl: string;
    videoTitle: string;
    artistName: string;
    playTime: string;
    releaseDate: string;
    track: Track;
}
interface Playlist {
    plId: string;
    title: string;
    subTitle: string;
    image: {
        baseImageUrl: string;
    };
    desc: string;
    timeInfo: string;
    updateTime: string;
    tracksTotalCount: number;
    sub2Title: string;
    playtime: number;
    likeCount: number;
    isPublic: boolean;
    isMine: boolean;
    type: string;
    contentType: string;
    playlistContentType: string;
    playlistDataType: string;
    isCoverImageUrl: boolean;
    isOfficialAccount: boolean;
}

declare class LINEMusic {
    private lmlc;
    private deviceId;
    private apiUrl;
    constructor(options: LINEMusicOptions);
    private getHeaders;
    search(query: string, options?: SearchOptions): Promise<MultipleTracks | MultipleAlbums | MultipleArtists | MultiplePlaylists | MultipleVideos>;
    getLyrics(trackId: string, options?: LyricsOptions): Promise<LyricsV1 | LyricsV3>;
    getTrackSource(trackId: string, options?: GetTrackSourceOptions): Promise<TrackSourceResponse>;
    getFeatured(type?: FeaturedType, options?: DisplayOptions): Promise<MultipleTracks | MultipleAlbums>;
    getChart(type?: ChartType): Promise<Chart>;
    getAlbum(albumId: string): Promise<Album>;
    getAlbumTracks(albumId: string, options?: DisplayOptions): Promise<MultipleTracks>;
    getPlaylist(playlistId: string): Promise<Playlist>;
    getTrack(trackId: string): Promise<Track>;
    getAutoCompletes(query: string): Promise<string[]>;
    getShareUrl(type: ShareType, id: string): Promise<Share>;
}

export { type Album, type Artist, type AutoCompletes, type BaseResponse, BitRateType, type Chart, ChartType, type DisplayOptions, FeaturedType, type GetTrackSourceOptions, LINEMusic, type LINEMusicOptions, type LyricsOptions, type LyricsV1, type LyricsV3, type MultipleAlbums, type MultipleArtists, type MultiplePlaylists, type MultipleTracks, type MultipleVideos, type NormalLyric, type Playlist, type SearchOptions, SearchType, type Share, ShareType, SortType, type SyncLyric, type SyncLyricContent, type Tab, type Track, type TrackSource, type TrackSourceResponse, type Video };
