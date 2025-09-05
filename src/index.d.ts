import { FeaturedType, GetLyricsResult, GetTrackSourceOptions, GetTrackSourceResult, LINEMusicOptions, LyricsOptions, GetAlbumsResult, GetArtistsResult, SearchOptions, GetPlaylistsResult, GetTracksResult, GetVideosResult, DisplayOptions, ChartType, GetChartResult } from "./types";
export declare class LINEMusic {
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
}
//# sourceMappingURL=index.d.ts.map