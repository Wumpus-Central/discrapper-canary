n.d(t, {
    E: () => o,
    Z: () => s,
});
var r = n(729594),
    i = n(981631);
let a = "open.spotify.com";
function o(e) {
    return null != e && e === a;
}
function s(e) {
    var t;
    if (null == e.url || (null == (t = e.provider) ? void 0 : t.name) !== "Spotify" || e.type !== i.hBH.LINK) return !1;
    try {
        let t = r.parse(e.url, !0).host;
        return o(t);
    } catch (e) {
        return !1;
    }
}
