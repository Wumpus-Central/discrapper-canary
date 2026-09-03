n.d(t, { DH: () => E, lj: () => u, AU: () => _, xb: () => A });
var i = n(319060),
    r = n(155718);
n(323874), n(14289), n(35956);
var a = n(776231),
    s = n(486020),
    l = n(652215);
let { API_ENDPOINT: o, CDN_HOST: d } = window.GLOBAL_ENV;
var c = n(375708);
let u = 0;
function _() {
    return { id: u, name: c.intl.string(c.t.E407b7) };
}
function E(e) {
    let { itemId: t, hash: n, containerWidth: r = parseFloat(i.A.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) } = e;
    return (function (e) {
        let { itemId: t, hash: n, containerWidth: i = 1024 } = e,
            r = new URLSearchParams({ size: (0, a.kr)(i * (0, a.mZ)()).toString() }).toString(),
            c = s.QB ? "webp" : "png";
        return null != d
            ? `https://${d}/app-assets/application-directory/collection-items/${t}/${n}.${c}?${r}`
            : `${location.protocol}${o}${l.Rsh.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, c)}?${r}`;
    })({ itemId: t, hash: n, containerWidth: r });
}
function A(e) {
    switch (e.type) {
        case r.LZ.MEDIA_PROXY:
            let t = e.proxy_url ?? e.url;
            return { type: l.geh.IMG, width: 0, height: 0, src: t };
        case r.LZ.YOUTUBE:
            let n = (function (e) {
                if (null == e) return null;
                let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
                return null != t ? t[1] : null;
            })(e.url);
            if (null != n) return { type: l.geh.YOUTUBE_VIDEO, youtubeVideoId: n };
    }
    return console.warn("Unsupported carousel item", e), null;
}
