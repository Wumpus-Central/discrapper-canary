n.d(t, {
    Z: () => s,
    q: () => o
});
var i = n(192379),
    r = n(812206),
    a = n(701488);
function s(e) {
    return i.useMemo(() => o(e), [e]);
}
function o(e) {
    var t, n;
    return !(null != e && a.P9.includes(null != e ? e : '')) || (null === (n = r.Z.getApplication(e)) || void 0 === n ? void 0 : null === (t = n.embeddedActivityConfig) || void 0 === t ? void 0 : t.legacy_responsive_aspect_ratio);
}
