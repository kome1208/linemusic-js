"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitRateType = exports.ChartType = exports.FeaturedType = exports.SearchType = exports.SortType = void 0;
var SortType;
(function (SortType) {
    SortType["Relevance"] = "RELEVANCE";
    SortType["Popular"] = "POPLAR";
    SortType["Release"] = "RELEASE";
})(SortType || (exports.SortType = SortType = {}));
var SearchType;
(function (SearchType) {
    SearchType["Tracks"] = "tracks";
    SearchType["Albums"] = "albums";
    SearchType["Artists"] = "artists";
    SearchType["Videos"] = "videos";
    SearchType["Playlists"] = "playlists";
    SearchType["Lyrics"] = "lyrics";
})(SearchType || (exports.SearchType = SearchType = {}));
var FeaturedType;
(function (FeaturedType) {
    FeaturedType["Tracks"] = "tracks";
    FeaturedType["Albums"] = "albums";
})(FeaturedType || (exports.FeaturedType = FeaturedType = {}));
var ChartType;
(function (ChartType) {
    ChartType["Tracks"] = "tracks";
    ChartType["Albums"] = "albums";
    ChartType["Videos"] = "videos";
})(ChartType || (exports.ChartType = ChartType = {}));
var BitRateType;
(function (BitRateType) {
    BitRateType["Min"] = "min";
    BitRateType["Mid"] = "mid";
    BitRateType["Max"] = "max";
})(BitRateType || (exports.BitRateType = BitRateType = {}));
//# sourceMappingURL=types.js.map