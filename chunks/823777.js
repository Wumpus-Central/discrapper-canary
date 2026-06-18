i.d(r, { default: () => m });
var n = i(627968),
    a = i(64700),
    s = i(189213),
    e = i(834730),
    l = i(400492),
    o = i(375708),
    c = i(85324);
function m(t) {
    let { transitionState: r, onClose: i } = t,
        m = () => (i?.(), Promise.resolve());
    a.useEffect(() => {
        (0, l.Ak)("success", 0.1);
    }, []);
    let [d] = a.useState(() => {
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
    return (0, n.jsx)(s.Modal, {
        transitionState: r,
        title: o.intl.string(o.t["62E+tw"]),
        actions: [{ text: o.intl.string(o.t.cpT0Cq), onClick: m, variant: "primary" }],
        onClose: m,
        children: (0, n.jsx)("div", {
            className: c.jE,
            children: (0, n.jsxs)(e.E, {
                className: c.KP,
                variant: "text-sm/normal",
                children: [o.intl.string(o.t["4z1Tq0"]), (0, n.jsx)("br", {}), d],
            }),
        }),
    });
}
