"use strict";
n.d(t, { A: () => f, C: () => o });
var r = n(472501),
    i = n(773669),
    a = n(723702),
    s = n(652215);
let o = `https://${s.XlF}`,
    l = `https://${s.hCb}`,
    u = "https://creator-support.discord.com",
    c = "https://support-apps.discord.com";
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
    return t + e;
}
function _() {
    return i.default.locale.toLowerCase();
}
let f = {
    getArticleURL: (e) => d(`/hc/${_()}/articles/${e}`),
    getDevArticleURL: (e) => d(`/hc/${_()}/articles/${e}`, l),
    getCreatorSupportArticleURL: (e) => d(`/hc/${_()}/articles/${e}`, u),
    getTwitterURL: () => (0, r.A)(s.Pq7.TWITTER),
    getCommunityURL: () => d(`/hc/${_()}`),
    getSubmitRequestURL(e) {
        let t = d(`/hc/${_()}/requests/new?platform=${encodeURIComponent((0, a.getPlatformName)())}`);
        return null != e && (t += `&device_info=${encodeURIComponent(e)}`), t;
    },
    getSearchURL(e) {
        let t = encodeURIComponent(e);
        return d(`/hc/${_()}/search?utf8=%E2%9C%93&query=${t}&commit=Search`);
    },
    getFeaturedArticlesJsonURL: () => d("/api/v2/help_center/en-us/articles.json?label_names=featured"),
    getAppsSupportURL: (e) => d(`/hc/${_()}/articles/${e}`, c),
};
