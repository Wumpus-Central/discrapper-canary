"use strict";
n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(377802),
    s = n(956793),
    a = n(709562),
    o = n(985018);
function l(e) {
    let { centerButton: t = !1, onClick: n, onMouseEnter: l, onMouseLeave: u, ...d } = e,
        c = t ? a.l : a.A,
        { Component: _, events: f } = (0, i.O)();
    return (0, r.jsx)(c, {
        ...d,
        isTrayButton: !1,
        onClick: () => {
            n?.(), s.default.disconnect();
        },
        iconComponent: _,
        onMouseEnter: (e) => {
            l?.(e), f.onMouseEnter();
        },
        onMouseLeave: (e) => {
            u?.(e), f.onMouseLeave();
        },
        label: o.intl.string(o.t["6vrfgt"]),
    });
}
