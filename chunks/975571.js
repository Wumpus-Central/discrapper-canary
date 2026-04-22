"use strict";
n.d(t, { A: () => c, C: () => o });
var r = n(472501),
    i = n(773669),
    s = n(723702),
    a = n(652215);
let o = `https://${a.XlF}`,
    l = `https://${a.hCb}`;
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
    return t + e;
}
function d() {
    return i.default.locale.toLowerCase();
}
let c = {
    getArticleURL: (e) => u(`/hc/${d()}/articles/${e}`),
    getDevArticleURL: (e) => u(`/hc/${d()}/articles/${e}`, l),
    getCreatorSupportArticleURL: (e) => u(`/hc/${d()}/articles/${e}`, "https://creator-support.discord.com"),
    getTwitterURL: () => (0, r.A)(a.Pq7.TWITTER),
    getCommunityURL: () => u(`/hc/${d()}`),
    getSubmitRequestURL(e) {
        let t = u(`/hc/${d()}/requests/new?platform=${encodeURIComponent((0, s.getPlatformName)())}`);
        return null != e && (t += `&device_info=${encodeURIComponent(e)}`), t;
    },
    getSearchURL(e) {
        let t = encodeURIComponent(e);
        return u(`/hc/${d()}/search?utf8=%E2%9C%93&query=${t}&commit=Search`);
    },
    getFeaturedArticlesJsonURL: () => u("/api/v2/help_center/en-us/articles.json?label_names=featured"),
    getAppsSupportURL: (e) => u(`/hc/${d()}/articles/${e}`, "https://support-apps.discord.com"),
};
