i.d(e, { V: () => o });
var n = i(955572),
    l = i(775602),
    s = i(419954),
    r = i(780964),
    u = i(652215),
    a = i(985018);
let o = (0, s.sN)(r.X.SATURATION, {
    useTitle: () => a.intl.string(a.t["5PWWCY"]),
    useSubtitle: () => a.intl.string(a.t["0PbE/H"]),
    markers: u.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (t) => ((100 * t) % 2 == 0 ? "".concat(100 * t, "%") : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => l.A.saturation,
    setValue: (t) => (0, n.HU)(t),
});
