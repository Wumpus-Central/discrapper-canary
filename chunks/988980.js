n.d(t, {
    Z: () => a,
    q: () => s
});
var r = n(192379),
    i = n(812206),
    o = n(701488);
function a(e) {
    return r.useMemo(() => s(e), [e]);
}
function s(e) {
    var t, n;
    return !(null != e && o.P9.includes(null != e ? e : '')) || (null == (n = i.Z.getApplication(e)) || null == (t = n.embeddedActivityConfig) ? void 0 : t.legacy_responsive_aspect_ratio);
}
