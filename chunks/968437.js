n.d(t, {
    WD: () => u,
    nt: () => l
});
var i = n(404759),
    r = n.n(i);
n(913527);
var a = n(70956),
    s = n(124368),
    o = n(388032);
function l() {
    return [
        {
            label: o.intl.string(o.t.cs8A1d),
            value: a.Z.Minutes.HOUR
        },
        {
            label: o.intl.string(o.t.zFKbrK),
            value: a.Z.Minutes.DAY
        },
        {
            label: o.intl.string(o.t.TmPIZW),
            value: 3 * a.Z.Minutes.DAY
        },
        {
            label: o.intl.string(o.t['/7i2en']),
            value: a.Z.Minutes.WEEK
        }
    ];
}
function u(e, t) {
    var n;
    return null !== (n = null != t ? t : null == e ? void 0 : e.defaultAutoArchiveDuration) && void 0 !== n ? n : s.AX;
}
a.Z.Minutes.HOUR, a.Z.Minutes.DAY, a.Z.Minutes.DAY, a.Z.Minutes.WEEK, r()(() => l().map((e) => e.value));
