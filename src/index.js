"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LINEMusic = void 0;
const got_1 = __importDefault(require("got"));
const types_1 = require("./types");
class LINEMusic {
    lmlc;
    deviceId;
    apiUrl = "https://music.line.me/api2";
    constructor(options) {
        this.lmlc = options.lmlc;
        this.deviceId = options.deviceId;
    }
    getHeaders() {
        return {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:142.0) Gecko/20100101 Firefox/142.0",
            "Cookie": `lmlc=${this.lmlc}`,
            "x-lang": "ja",
            "x-lm-did": this.deviceId,
            "X-Requested-With": "XMLHttpRequest",
        };
    }
    async search(query, options = {
        start: 1,
        display: 3,
        sortType: types_1.SortType.Relevance,
        searchType: types_1.SearchType.Tracks
    }) {
        const searchResponse = await got_1.default.get(`${this.apiUrl}/search/${options.searchType}.v1`, {
            searchParams: {
                "query": query,
                "start": options.start,
                "display": options.display,
                "sort": options.sortType
            },
            headers: this.getHeaders()
        });
        return JSON.parse(searchResponse.body);
    }
    async getLyrics(trackId, options = { nonSync: true, apiVersion: 1 }) {
        const getLyricsResponse = await got_1.default.get(`${this.apiUrl}/track/${trackId}/lyrics.v1`, {
            searchParams: {
                "nonSync": options.nonSync,
            },
            headers: this.getHeaders()
        });
        return JSON.parse(getLyricsResponse.body);
    }
    async getTrackSource(trackId, options = { bitRateType: types_1.BitRateType.Mid }) {
        const getTrackSourceResponse = await got_1.default.get(`${this.apiUrl}/track/${trackId}/source/forWebPlay.v1`, {
            searchParams: {
                "bitRateType": options.bitRateType,
            },
            headers: this.getHeaders()
        });
        return JSON.parse(getTrackSourceResponse.body);
    }
    async getFeatured(type = types_1.FeaturedType.Tracks, options = { start: 1, display: 100 }) {
        const getTimeLineNewResponse = await got_1.default.get(`${this.apiUrl}/${type == types_1.FeaturedType.Tracks ? "tracks/featuredNew" : "albums/featured"}.v1`, {
            searchParams: {
                "start": options.start,
                "display": options.display
            },
            headers: this.getHeaders()
        });
        return JSON.parse(getTimeLineNewResponse.body);
    }
    async getChart(type = types_1.ChartType.Tracks) {
        return JSON.parse("a");
    }
}
exports.LINEMusic = LINEMusic;
//# sourceMappingURL=index.js.map