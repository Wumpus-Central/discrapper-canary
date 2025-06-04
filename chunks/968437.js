n.d(t, {
    WD: () => c,
    nt: () => l
});
var r = n(404759),
    i = n.n(r);
n(913527);
var a = n(70956),
    o = n(124368),
    s = n(388032);
function l() {
    return [
        {
            label: s.intl.string(s.t.cs8A1d),
            value: a.Z.Minutes.HOUR
        },
        {
            label: s.intl.string(s.t.zFKbrK),
            value: a.Z.Minutes.DAY
        },
        {
            label: s.intl.string(s.t.TmPIZW),
            value: 3 * a.Z.Minutes.DAY
        },
        {
            label: s.intl.string(s.t['/7i2en']),
            value: a.Z.Minutes.WEEK
        }
    ];
}
function c(e, t) {
    var n;
    return null != (n = null != t ? t : null == e ? void 0 : e.defaultAutoArchiveDuration) ? n : o.AX;
}
a.Z.Minutes.HOUR, a.Z.Minutes.DAY, a.Z.Minutes.DAY, a.Z.Minutes.WEEK, i()(() => l().map((e) => e.value));
