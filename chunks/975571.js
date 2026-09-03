n.d(t, { A: () => u, C: () => l });
var i = n(472501),
    r = n(773669),
    a = n(723702),
    s = n(652215);
let l = `https://${s.XlF}`,
    o = `https://${s.hCb}`;
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
    return t + e;
}
function c() {
    return r.default.locale.toLowerCase();
}
let u = {
    getArticleURL: (e) => d(`/hc/${c()}/articles/${e}`),
    getDevArticleURL: (e) => d(`/hc/${c()}/articles/${e}`, o),
    getCreatorSupportArticleURL: (e) => d(`/hc/${c()}/articles/${e}`, "https://creator-support.discord.com"),
    getTwitterURL: () => (0, i.A)(s.Pq7.TWITTER),
    getCommunityURL: () => d(`/hc/${c()}`),
    getSubmitRequestURL(e) {
        let t = d(`/hc/${c()}/requests/new?platform=${encodeURIComponent((0, a.getPlatformName)())}`);
        return null != e && (t += `&device_info=${encodeURIComponent(e)}`), t;
    },
    getSearchURL(e) {
        let t = encodeURIComponent(e);
        return d(`/hc/${c()}/search?utf8=%E2%9C%93&query=${t}&commit=Search`);
    },
    getFeaturedArticlesJsonURL: () => d("/api/v2/help_center/en-us/articles.json?label_names=featured"),
    getAppsSupportURL: (e) => d(`/hc/${c()}/articles/${e}`, "https://support-apps.discord.com"),
};
