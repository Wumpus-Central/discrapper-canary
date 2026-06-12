i.d(a, { A: () => d });
var e = i(627968),
    l = i(64700),
    o = i(735438),
    r = i(477782),
    n = i(964355),
    p = i(391973),
    s = i(810412),
    c = i(375708);
let u = (0, o.throttle)((t, a) => {
    (0, s.xp)(t.type, { opacity: a });
}, 1e3);
function d(t) {
    let a = l.useCallback((a) => u(t, a), [t]);
    return (0, e.jsx)(r.aK, {
        id: "opacity",
        "aria-haspopup": !0,
        label: c.intl.string(c.t.OVovCb),
        control: (i, l) =>
            (0, e.jsx)(n.i, {
                ...i,
                ref: l,
                value: 100 * t.opacity,
                maxValue: 100,
                onChange: (i) => {
                    (0, p.Ju)({ widgetId: t.id, opacity: i / 100 }), a(Math.floor(i));
                },
                "aria-label": c.intl.string(c.t.kbFsAD),
            }),
    });
}
