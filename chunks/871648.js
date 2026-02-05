a.d(e, { A: () => d });
var i = a(627968),
    n = a(64700),
    o = a(735438),
    l = a(397927),
    r = a(391973),
    u = a(810412),
    c = a(985018);
let s = (0, o.throttle)((t, e) => {
    (0, u.xp)(t.type, { opacity: e });
}, 1e3);
function d(t) {
    let e = n.useCallback((e) => s(t, e), [t]);
    return (0, i.jsx)(l.aK1, {
        id: "opacity",
        "aria-haspopup": !0,
        label: c.intl.string(c.t.OVovCb),
        control: (a, n) =>
            (0, i.jsx)(l.i42, {
                ...a,
                ref: n,
                value: 100 * t.opacity,
                maxValue: 100,
                onChange: (a) => {
                    (0, r.Ju)({ widgetId: t.id, opacity: a / 100 }), e(Math.floor(a));
                },
                "aria-label": c.intl.string(c.t.kbFsAD),
            }),
    });
}
