import got from "got";
import { BitRateType, FeaturedType, GetTrackSourceOptions, LINEMusicOptions, LyricsOptions, SearchOptions, SearchType, SortType, DisplayOptions, ChartType, Album, Playlist, MultipleTracks, MultipleAlbums, MultipleArtists, MultiplePlaylists, MultipleVideos, LyricsV1, LyricsV3, TrackSourceResponse, Chart, ShareType, Share, Track } from "./types.js";

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
    ): Promise<MultipleTracks | MultipleAlbums | MultipleArtists | MultiplePlaylists | MultipleVideos> {
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

        return JSON.parse(searchResponse.body).response.result;
    }

    async getLyrics(trackId: string, options: LyricsOptions = { nonSync: true, apiVersion: 1 }): Promise<LyricsV1 | LyricsV3> {
        const getLyricsResponse = await got.get(
            `${this.apiUrl}/track/${trackId}/lyrics.v${options.apiVersion}`,
            {
                searchParams: {
                    "nonSync": options.nonSync,
                },
                headers: this.getHeaders()
            }
        );

        return JSON.parse(getLyricsResponse.body).response.result.lyric;
    }

    async getTrackSource(trackId: string, options: GetTrackSourceOptions = { bitRateType: BitRateType.Mid }): Promise<TrackSourceResponse> {
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

        return JSON.parse(getTrackSourceResponse.body).response.result;
    }

    async getFeatured(type: FeaturedType = FeaturedType.Tracks, options: DisplayOptions = {start:1, display: 100}): Promise<MultipleTracks | MultipleAlbums> {
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

        return JSON.parse(getFeaturedResponse.body).response.result;
    }

    async getChart(type: ChartType = ChartType.Tracks): Promise<Chart> {
        const getFeaturedResponse = await got.get(
            `${this.apiUrl}/chart/${type}.v1`,
            {
                headers: this.getHeaders()
            }
        );

        return JSON.parse(getFeaturedResponse.body).response.result.chart;
    }

    async getAlbum(albumId: string): Promise<Album> {
        const response = await got.get(
            `${this.apiUrl}/album/${albumId}.v1`,
            {
                headers: this.getHeaders()
            }
        );

        if (!response.ok) throw Error(response.body);

        return JSON.parse(response.body).response.result.album;
    }

    async getAlbumTracks(albumId: string, options: DisplayOptions = { display: 1000 }): Promise<MultipleTracks> {
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

        return JSON.parse(response.body).response.result;
    }

    async getPlaylist(playlistId: string): Promise<Playlist> {
        const response = await got.get(
            `${this.apiUrl}/playlist/${playlistId}.v2`,
            {
                headers: this.getHeaders()
            }
        );

        return JSON.parse(response.body).response.result.playlist;
    }

    async getTrack(trackId: string): Promise<Track> {
        const response = await got.get(
            `${this.apiUrl}/track/${trackId}.v1`,
            {
                headers: this.getHeaders()
            }
        );

        return JSON.parse(response.body).response.result;
    }

    async getAutoCompletes(query: string): Promise<string[]> {
        const response = await got.get(
            `${this.apiUrl}/search/autoCompletes.v1`,
            {
                searchParams: {
                    "query": query,
                },
                headers: this.getHeaders()
            }
        );

        return JSON.parse(response.body).response.result.sacList;
    }

    async getShareUrl(type: ShareType, id: string): Promise<Share> {
        const response = await got.get(
            `${this.apiUrl}/${type}/${id}/shareUrl.v1`,
            {
                headers: this.getHeaders()
            }
        );

        return JSON.parse(response.body).response.result;
    }
}

export * from "./types.js";