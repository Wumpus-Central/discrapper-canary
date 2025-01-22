r.d(n, {
    Z: function () {
        return s;
    },
    q: function () {
        return l;
    }
});
var i = r(192379),
    a = r(812206),
    o = r(701488);
function s(e) {
    return i.useMemo(() => l(e), [e]);
}
function l(e) {
    var n, r;
    if (!(null != e && o.P9.includes(null != e ? e : ''))) return !0;
    return null === (r = a.Z.getApplication(e)) || void 0 === r ? void 0 : null === (n = r.embeddedActivityConfig) || void 0 === n ? void 0 : n.legacy_responsive_aspect_ratio;
}
