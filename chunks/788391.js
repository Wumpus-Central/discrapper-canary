n.d(e, { S: () => T });
var i = n(857595),
    l = n(607070),
    s = n(509613),
    u = n(313789),
    r = n(981631),
    a = n(388032);
let o = (t) => "".concat(t.toFixed(0), "px"),
    T = (0, s.UO)(u.n.APPEARANCE_FONT_SCALING, {
        useTitle: () => a.intl.string(a.t.qPOqoK),
        useSubtitle: () => a.intl.string(a.t.XrtbPo),
        markers: r.yqN.FONT_SIZES,
        stickToMarkers: !0,
        minValue: r.yqN.FONT_SIZES["0"],
        maxValue: r.yqN.FONT_SIZES[r.yqN.FONT_SIZES.length - 1],
        getInitialValue: () => l.Z.fontSize,
        onValueRender: o,
        onMarkerRender: o,
        asValueChanges: (t) => (0, i.oL)(t),
    });
