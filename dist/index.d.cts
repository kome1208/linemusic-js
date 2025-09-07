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
    apiVersion?: number;
    nonSync?: boolean;
}
interface GetTrackSourceOptions {
    bitRateType?: BitRateType;
}
type GetTrackSourceResult = BaseResponse<GetTrackSource>;
type GetTracksResult = BaseResponse<GetTracks>;
type GetAlbumsResult = BaseResponse<GetAlbums>;
type GetAlbumResult = BaseResponse<GetAlbum>;
type GetArtistsResult = BaseResponse<GetArtists>;
type GetVideosResult = BaseResponse<GetVideos>;
type GetPlaylistsResult = BaseResponse<GetPlaylists>;
type GetChartResult = BaseResponse<GetChart>;
type GetLyricsResult = BaseResponse<GetLyrics>;
interface GetTrackSource {
    requestTime: number;
    playRange: string;
    playReason: string;
    nextAction: string;
    trackSource: TrackSource;
}
interface GetChart {
    type: string;
    title: string;
    chartDate: string;
    duration: string;
    itemType: "TRACK" | "ALBUM" | "VIDEO";
    items: GetTracks | GetAlbums | GetVideos;
    subTab: Tab[];
    lineRankEndInternalId: number;
    previousLineRankEndInternalId: number;
    createdAt: string;
}
interface GetAlbum {
    album: Album;
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
interface GetLyrics {
    lyric: {
        trackId: string;
        isSyncLyric: boolean;
        lyric: string;
    };
    credential: string;
}
interface GetTracks {
    trackTotalCount: number;
    tracks: Track[];
}
interface GetAlbums {
    albumTotalCount: number;
    albums: Album[];
}
interface GetArtists {
    artistTotalCount: number;
    albums: Artist[];
}
interface GetVideos {
    videoTotalCount: number;
    videos: Video[];
}
interface GetPlaylists {
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
    search(query: string, options?: SearchOptions): Promise<GetTracksResult | GetAlbumsResult | GetArtistsResult | GetVideosResult | GetPlaylistsResult>;
    getLyrics(trackId: string, options?: LyricsOptions): Promise<GetLyricsResult>;
    getTrackSource(trackId: string, options?: GetTrackSourceOptions): Promise<GetTrackSourceResult>;
    getFeatured(type?: FeaturedType, options?: DisplayOptions): Promise<GetTracksResult | GetAlbumsResult>;
    getChart(type?: ChartType): Promise<GetChartResult>;
    getAlbum(albumId: string): Promise<GetAlbumResult>;
    getAlbumTracks(albumId: string, options?: DisplayOptions): Promise<GetTracksResult>;
    getTracks(trackId: string): Promise<GetTracksResult>;
}

export { type Album, type Artist, type BaseResponse, BitRateType, ChartType, type DisplayOptions, FeaturedType, type GetAlbum, type GetAlbumResult, type GetAlbums, type GetAlbumsResult, type GetArtists, type GetArtistsResult, type GetChart, type GetChartResult, type GetLyrics, type GetLyricsResult, type GetPlaylists, type GetPlaylistsResult, type GetTrackSource, type GetTrackSourceOptions, type GetTrackSourceResult, type GetTracks, type GetTracksResult, type GetVideos, type GetVideosResult, LINEMusic, type LINEMusicOptions, type LyricsOptions, type Playlist, type SearchOptions, SearchType, SortType, type Tab, type Track, type TrackSource, type Video };
