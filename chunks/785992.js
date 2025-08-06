n.d(t, {
    E: () => a,
    Z: () => s,
});
var r = n(729594),
    i = n(981631);
let o = "open.spotify.com";
function a(e) {
    return null != e && e === o;
}
function s(e) {
    var t;
    if (null == e.url || (null == (t = e.provider) ? void 0 : t.name) !== "Spotify" || e.type !== i.hBH.LINK) return !1;
    try {
        let t = r.parse(e.url, !0).host;
        return a(t);
    } catch (e) {
        return !1;
    }
}
