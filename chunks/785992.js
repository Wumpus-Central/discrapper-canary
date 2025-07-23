t.d(l, {
    E: () => i,
    Z: () => s
});
var r = t(729594),
    n = t(981631);
function i(e) {
    return null != e && 'open.spotify.com' === e;
}
function s(e) {
    var l;
    if (null == e.url || (null == (l = e.provider) ? void 0 : l.name) !== 'Spotify' || e.type !== n.hBH.LINK) return !1;
    try {
        let l = r.parse(e.url, !0).host;
        return i(l);
    } catch (e) {
        return !1;
    }
}
