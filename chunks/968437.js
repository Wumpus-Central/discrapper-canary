n.d(t, {
    WD: () => c,
    nt: () => l
});
var r = n(404759),
    i = n.n(r);
n(913527);
var o = n(70956),
    a = n(124368),
    s = n(388032);
function l() {
    return [
        {
            label: s.NW.string(s.t.cs8A1d),
            value: o.Z.Minutes.HOUR
        },
        {
            label: s.NW.string(s.t.zFKbrK),
            value: o.Z.Minutes.DAY
        },
        {
            label: s.NW.string(s.t.TmPIZW),
            value: 3 * o.Z.Minutes.DAY
        },
        {
            label: s.NW.string(s.t['/7i2en']),
            value: o.Z.Minutes.WEEK
        }
    ];
}
function c(e, t) {
    var n;
    return null != (n = null != t ? t : null == e ? void 0 : e.defaultAutoArchiveDuration) ? n : a.AX;
}
o.Z.Minutes.HOUR, o.Z.Minutes.DAY, o.Z.Minutes.DAY, o.Z.Minutes.WEEK, i()(() => l().map((e) => e.value));
