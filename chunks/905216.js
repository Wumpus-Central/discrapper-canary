"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(956793),
    o = n(709562),
    l = n(985018);
function u(e) {
    let { centerButton: t = !1, onClick: n, iconSize: u = "md", ...c } = e,
        d = t ? o.l : o.A,
        _ = () => {
            n?.(), a.default.disconnect();
        },
        f = () => l.intl.string(l.t["6vrfgt"]),
        p = i.useRef(null);
    return (0, r.jsx)(d, {
        ...c,
        isTrayButton: !1,
        onClick: _,
        ref: p,
        iconComponent: (0, r.jsx)(s.AYu, {
            eventTargetRef: p,
            className: s.d5l[u],
            dataBinding: { fill: "currentColor" },
        }),
        label: f(),
    });
}
