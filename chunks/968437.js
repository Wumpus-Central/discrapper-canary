n.d(t, {
    WD: () => c,
    nt: () => l,
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
            id: "1hour",
            label: s.intl.string(s.t.cs8A1c),
            value: a.Z.Minutes.HOUR,
        },
        {
            id: "24hours",
            label: s.intl.string(s.t.zFKbrF),
            value: a.Z.Minutes.DAY,
        },
        {
            id: "3days",
            label: s.intl.string(s.t.TmPIZX),
            value: 3 * a.Z.Minutes.DAY,
        },
        {
            id: "1week",
            label: s.intl.string(s.t["/7i2el"]),
            value: a.Z.Minutes.WEEK,
        },
    ];
}
function c(e, t) {
    var n;
    return null != (n = null != t ? t : null == e ? void 0 : e.defaultAutoArchiveDuration) ? n : o.AX;
}
a.Z.Minutes.HOUR, a.Z.Minutes.DAY, a.Z.Minutes.DAY, a.Z.Minutes.WEEK, i()(() => l().map((e) => e.value));
