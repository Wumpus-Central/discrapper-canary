i.d(e, { V: () => d });
var n = i(955572),
    l = i(775602),
    s = i(419954),
    r = i(780964),
    a = i(358776),
    u = i(652215),
    o = i(985018);
let d = (0, s.sN)(r.X.SATURATION, {
    useTitle: () => o.intl.string(o.t["5PWWCY"]),
    useSubtitle: () => ((0, a.bp)("Saturation") ? o.intl.string(o.t.xf5S6P) : o.intl.string(o.t["0PbE/H"])),
    markers: u.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (t) => ((100 * t) % 2 == 0 ? `${100 * t}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => l.A.saturation,
    asValueChanges: (t) => (0, n.HU)(t),
});
