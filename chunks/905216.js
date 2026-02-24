"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(956793),
    o = n(709562),
    l = n(985018);
function u(e) {
    let { centerButton: t = !1, onClick: n, ...u } = e,
        c = t ? o.l : o.A,
        d = () => {
            n?.(), a.default.disconnect();
        },
        _ = () => l.intl.string(l.t["6vrfgt"]),
        f = i.useRef(null);
    return (0, r.jsx)(c, {
        ...u,
        isTrayButton: !1,
        onClick: d,
        ref: f,
        iconComponent: (0, r.jsx)(s.AYu, {
            eventTargetRef: f,
            className: s.d5l.refresh_sm,
            dataBinding: { fill: "currentColor" },
        }),
        label: _(),
    });
}
