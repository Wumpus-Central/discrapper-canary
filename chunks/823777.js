r.d(n, { default: () => m });
var i = r(627968),
    a = r(64700),
    s = r(189213),
    e = r(834730),
    l = r(400492),
    o = r(375708),
    c = r(85324);
function m(t) {
    let { transitionState: n, onClose: r } = t;
    function m() {
        return r?.(), Promise.resolve();
    }
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
    return (0, i.jsx)(s.Modal, {
        transitionState: n,
        title: o.intl.string(o.t["62E+tw"]),
        actions: [{ text: o.intl.string(o.t.cpT0Cq), onClick: m, variant: "primary" }],
        onClose: m,
        children: (0, i.jsx)("div", {
            className: c.jE,
            children: (0, i.jsxs)(e.E, {
                className: c.KP,
                variant: "text-sm/normal",
                children: [o.intl.string(o.t["4z1Tq0"]), (0, i.jsx)("br", {}), d],
            }),
        }),
    });
}
