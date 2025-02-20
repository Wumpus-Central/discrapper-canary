l.d(t, {
    E: () => i,
    Z: () => s
});
var r = l(729594),
    n = l(981631);
function i(e) {
    return null != e && 'open.spotify.com' === e;
}
function s(e) {
    var t;
    if (null == e.url || (null === (t = e.provider) || void 0 === t ? void 0 : t.name) !== 'Spotify' || e.type !== n.hBH.LINK) return !1;
    try {
        let t = r.parse(e.url, !0).host;
        return i(t);
    } catch (e) {
        return !1;
    }
}
