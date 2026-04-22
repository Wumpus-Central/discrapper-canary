i.d(e, { A: () => A });
var n = i(627968),
    a = i(64700),
    l = i(735438),
    r = i(477782),
    o = i(964355),
    d = i(391973),
    s = i(810412),
    u = i(985018);
let c = (0, l.throttle)((t, e) => {
    (0, s.xp)(t.type, { opacity: e });
}, 1e3);
function A(t) {
    let e = a.useCallback((e) => c(t, e), [t]);
    return (0, n.jsx)(r.aK, {
        id: "opacity",
        "aria-haspopup": !0,
        label: u.intl.string(u.t.OVovCb),
        control: (i, a) =>
            (0, n.jsx)(o.i, {
                ...i,
                ref: a,
                value: 100 * t.opacity,
                maxValue: 100,
                onChange: (i) => {
                    (0, d.Ju)({ widgetId: t.id, opacity: i / 100 }), e(Math.floor(i));
                },
                "aria-label": u.intl.string(u.t.kbFsAD),
            }),
    });
}
