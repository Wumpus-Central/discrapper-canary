n.d(t, {
    A: () => p,
    C: () => o,
});
var r = n(472501),
    i = n(773669),
    a = n(723702),
    s = n(652215);
let o = "https://".concat(s.XlF),
    l = "https://".concat(s.hCb),
    c = "https://creator-support.discord.com",
    u = "https://support-apps.discord.com";

function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
    return t + e;
}

function f() {
    return i.default.locale.toLowerCase();
}
let p = {
    getArticleURL: (e) => d("/hc/".concat(f(), "/articles/").concat(e)),
    getDevArticleURL: (e) => d("/hc/".concat(f(), "/articles/").concat(e), l),
    getCreatorSupportArticleURL: (e) => d("/hc/".concat(f(), "/articles/").concat(e), c),
    getTwitterURL: () => (0, r.A)(s.Pq7.TWITTER),
    getCommunityURL: () => d("/hc/".concat(f())),
    getSubmitRequestURL(e) {
        let t = d("/hc/".concat(f(), "/requests/new?platform=").concat(encodeURIComponent((0, a.getPlatformName)())));
        return null != e && (t += "&device_info=".concat(encodeURIComponent(e))), t;
    },
    getSearchURL(e) {
        let t = encodeURIComponent(e);
        return d("/hc/".concat(f(), "/search?utf8=%E2%9C%93&query=").concat(t, "&commit=Search"));
    },
    getFeaturedArticlesJsonURL: () => d("/api/v2/help_center/en-us/articles.json?label_names=featured"),
    getAppsSupportURL: (e) => d("/hc/".concat(f(), "/articles/").concat(e), u),
};
