n.d(r, {
    default: () => d,
}),
    n(896048);
var i = n(627968),
    a = n(64700),
    e = n(158954),
    s = n(397927),
    l = n(400492),
    o = n(985018),
    c = n(237905);

function d(t) {
    let { transitionState: r, onClose: n } = t,
        d = () => (null == n || n(), Promise.resolve());
    a.useEffect(() => {
        (0, l.Ak)("success", 0.1);
    }, []);
    let [f] = a.useState(() => {
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
    return (0, i.jsx)(e.Modal, {
        transitionState: r,
        title: o.intl.string(o.t["62E+tw"]),
        actions: [
            {
                text: o.intl.string(o.t.cpT0Cq),
                onClick: d,
                variant: "primary",
            },
        ],
        onClose: d,
        children: (0, i.jsx)("div", {
            className: c.jE,
            children: (0, i.jsxs)(s.Text, {
                className: c.KP,
                variant: "text-sm/normal",
                children: [o.intl.string(o.t["4z1Tq0"]), (0, i.jsx)("br", {}), f],
            }),
        }),
    });
}
