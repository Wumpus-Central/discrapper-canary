i.d(e, { B: () => A });
var n = i(955572),
    l = i(775602),
    s = i(419954),
    r = i(780964),
    a = i(358776),
    u = i(652215),
    o = i(985018);
let d = (t) => `${t.toFixed(0)}px`,
    A = (0, s.sN)(r.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => ((0, a.bp)("FontScaling") ? o.intl.string(o.t.rT3Pq5) : o.intl.string(o.t.qPOqoK)),
        useSubtitle: () => ((0, a.bp)("FontScaling") ? o.intl.string(o.t.LXUhen) : o.intl.string(o.t.XrtbPo)),
        markers: u.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: u.hH7.FONT_SIZES["0"],
        maxValue: u.hH7.FONT_SIZES[u.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => u.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => l.A.fontSize,
        onValueRender: d,
        onMarkerRender: d,
        asValueChanges: (t) => (0, n.XS)(t),
    });
