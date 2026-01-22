i.d(e, { B: () => T });
var n = i(955572),
    l = i(775602),
    s = i(419954),
    r = i(780964),
    u = i(652215),
    a = i(985018);
let o = (t) => "".concat(t.toFixed(0), "px"),
    T = (0, s.sN)(r.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => a.intl.string(a.t.qPOqoK),
        useSubtitle: () => a.intl.string(a.t.XrtbPo),
        markers: u.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: u.hH7.FONT_SIZES["0"],
        maxValue: u.hH7.FONT_SIZES[u.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => u.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => l.A.fontSize,
        onValueRender: o,
        onMarkerRender: o,
        asValueChanges: (t) => (0, n.XS)(t),
    });
