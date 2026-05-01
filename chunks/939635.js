"use strict";
n.d(t, { DH: () => f, lj: () => d, AU: () => _, xb: () => h });
var i = n(319060),
    r = n(155718);
n(323874), n(14289), n(35956);
var s = n(776231),
    a = n(486020),
    o = n(652215);
let { API_ENDPOINT: l, CDN_HOST: u } = window.GLOBAL_ENV;
var c = n(375708);
let d = 0;
function _() {
    return { id: d, name: c.intl.string(c.t.E407b7) };
}
function f(e) {
    let { itemId: t, hash: n, containerWidth: r = parseFloat(i.A.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) } = e;
    return (function (e) {
        let { itemId: t, hash: n, containerWidth: i = 1024 } = e,
            r = new URLSearchParams({ size: (0, s.kr)(i * (0, s.mZ)()).toString() }).toString(),
            c = a.QB ? "webp" : "png";
        return null != u
            ? `https://${u}/app-assets/application-directory/collection-items/${t}/${n}.${c}?${r}`
            : `${location.protocol}${l}${o.Rsh.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, c)}?${r}`;
    })({ itemId: t, hash: n, containerWidth: r });
}
function h(e) {
    switch (e.type) {
        case r.LZ.MEDIA_PROXY:
            let t = e.proxy_url ?? e.url;
            return { type: o.geh.IMG, width: 0, height: 0, src: t };
        case r.LZ.YOUTUBE:
            let n = ((e) => {
                if (null == e) return null;
                let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
                return null != t ? t[1] : null;
            })(e.url);
            if (null != n) return { type: o.geh.YOUTUBE_VIDEO, youtubeVideoId: n };
    }
    return console.warn("Unsupported carousel item", e), null;
}
