t.d(l, {
    E: () => r,
    Z: () => s
});
var n = t(729594),
    i = t(981631);
function r(e) {
    return null != e && 'open.spotify.com' === e;
}
function s(e) {
    var l;
    if (null == e.url || (null === (l = e.provider) || void 0 === l ? void 0 : l.name) !== 'Spotify' || e.type !== i.hBH.LINK) return !1;
    try {
        let l = n.parse(e.url, !0).host;
        return r(l);
    } catch (e) {
        return !1;
    }
}
