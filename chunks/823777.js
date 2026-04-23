n.d(a, { default: () => m });
var r = n(627968),
    i = n(64700),
    s = n(189213),
    e = n(834730),
    l = n(400492),
    o = n(985018),
    c = n(85324);
function m(t) {
    let { transitionState: a, onClose: n } = t,
        m = () => (n?.(), Promise.resolve());
    i.useEffect(() => {
        (0, l.Ak)("success", 0.1);
    }, []);
    let [d] = i.useState(() => {
        let t;
        return (t = [
            o.intl.format(o.t.ZAbzbA, {}),
            o.intl.format(o.t.WXVqdT, {}),
            o.intl.format(o.t.BxG87N, {}),
            o.intl.format(o.t.pWZvZk, {}),
            o.intl.format(o.t["/UhvyQ"], {}),
            o.intl.format(o.t.XrRGpI, {}),
            o.intl.format(o.t.SN3QDR, {}),
        ])[Math.floor(Math.random() * t.length)];
    });
    return (0, r.jsx)(s.Modal, {
        transitionState: a,
        title: o.intl.string(o.t["62E+tw"]),
        actions: [{ text: o.intl.string(o.t.cpT0Cq), onClick: m, variant: "primary" }],
        onClose: m,
        children: (0, r.jsx)("div", {
            className: c.jE,
            children: (0, r.jsxs)(e.E, {
                className: c.KP,
                variant: "text-sm/normal",
                children: [o.intl.string(o.t["4z1Tq0"]), (0, r.jsx)("br", {}), d],
            }),
        }),
    });
}
