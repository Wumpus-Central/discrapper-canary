n.d(t, {
    Z: () => o,
    q: () => s
});
var r = n(73800),
    i = n(812206),
    a = n(701488);
function o(e) {
    return r.useMemo(() => s(e), [e]);
}
function s(e) {
    var t, n;
    return !(null != e && a.P9.includes(null != e ? e : '')) || (null == (n = i.Z.getApplication(e)) || null == (t = n.embeddedActivityConfig) ? void 0 : t.legacy_responsive_aspect_ratio);
}
