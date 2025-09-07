import got from "got";
import { BitRateType, FeaturedType, GetLyricsResult, GetTrackSourceOptions, GetTrackSourceResult, LINEMusicOptions, LyricsOptions, GetAlbumsResult, GetArtistsResult, SearchOptions, GetPlaylistsResult, GetTracksResult, SearchType, GetVideosResult, SortType, DisplayOptions, ChartType, GetChartResult, GetAlbumResult } from "./types.js";

export class LINEMusic {
    private lmlc: string;
    private deviceId: string;
    private apiUrl = "https://music.line.me/api2";

    constructor(options: LINEMusicOptions) {
        this.lmlc = options.lmlc;
        this.deviceId = options.deviceId;
    }

    private getHeaders() {
        return {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:142.0) Gecko/20100101 Firefox/142.0",
            "Cookie": `lmlc=${this.lmlc}`,
            "x-lang": "ja",
            "x-lm-did": this.deviceId,
            "X-Requested-With": "XMLHttpRequest",
        }
    }

    async search(
        query: string,
        options: SearchOptions = {
            start: 1,
            display: 3,
            sortType: SortType.Relevance,
            searchType: SearchType.Tracks
        }
    ): Promise<GetTracksResult | GetAlbumsResult | GetArtistsResult | GetVideosResult | GetPlaylistsResult> {
        const searchResponse = await got.get(
            `${this.apiUrl}/search/${options.searchType}.v1`,
            {
                searchParams: {
                    "query": query,
                    "start": options.start,
                    "display": options.display,
                    "sort": options.sortType
                },
                headers: this.getHeaders()
            }
        );

        return JSON.parse(searchResponse.body);
    }

    async getLyrics(trackId: string, options: LyricsOptions = { nonSync: true, apiVersion: 1 }): Promise<GetLyricsResult> {
        const getLyricsResponse = await got.get(
            `${this.apiUrl}/track/${trackId}/lyrics.v1`,
            {
                searchParams: {
                    "nonSync": options.nonSync,
                },
                headers: this.getHeaders()
            }
        );

        return JSON.parse(getLyricsResponse.body);
    }

    async getTrackSource(trackId: string, options: GetTrackSourceOptions = { bitRateType: BitRateType.Mid }): Promise<GetTrackSourceResult> {
        const getTrackSourceResponse = await got.get(
            `${this.apiUrl}/track/${trackId}/source/forWebPlay.v1`,
            {
                searchParams: {
                    "deviceId": this.deviceId,
                    "forceAnonymous": false,
                    "bitRateType": options.bitRateType,
                    "t": Date.now()
                },
                headers: this.getHeaders()
            }
        );

        return JSON.parse(getTrackSourceResponse.body);
    }

    async getFeatured(type: FeaturedType = FeaturedType.Tracks, options: DisplayOptions = {start:1, display: 100}): Promise<GetTracksResult | GetAlbumsResult> {
        const getFeaturedResponse = await got.get(
            `${this.apiUrl}/${type == FeaturedType.Tracks ? "tracks/featuredNew" : "albums/featured"}.v1`,
            {
                searchParams: {
                    "start": options.start,
                    "display": options.display
                },
                headers: this.getHeaders()
            }
        );

        return JSON.parse(getFeaturedResponse.body);
    }

    async getChart(type: ChartType = ChartType.Tracks): Promise<GetChartResult> {
        const getFeaturedResponse = await got.get(
            `${this.apiUrl}/chart/${type}.v1`,
            {
                headers: this.getHeaders()
            }
        );

        return JSON.parse(getFeaturedResponse.body);
    }

    async getAlbum(albumId: string): Promise<GetAlbumResult> {
        const response = await got.get(
            `${this.apiUrl}/album/${albumId}.v1`,
            {
                headers: this.getHeaders()
            }
        );

        return JSON.parse(response.body);
    }

    async getAlbumTracks(albumId: string, options: DisplayOptions = { display: 1000 }): Promise<GetTracksResult> {
        const response = await got.get(
            `${this.apiUrl}/album/${albumId}/tracks.v1`,
            {
                searchParams: {
                    "start": options.start,
                    "display": options.display
                },
                headers: this.getHeaders()
            }
        );

        return JSON.parse(response.body);
    }

    async getTracks(trackId: string): Promise<GetTracksResult> {
        const response = await got.get(
            `${this.apiUrl}/tracks/${trackId}.v1`,
            {
                headers: this.getHeaders()
            }
        );

        return JSON.parse(response.body);
    }
}

export * from "./types.js";