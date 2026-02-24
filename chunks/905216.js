"use strict";
n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(377802),
    s = n(956793),
    a = n(709562),
    o = n(985018);
function l(e) {
    let { centerButton: t = !1, onClick: n, onMouseEnter: l, onMouseLeave: u, ...c } = e,
        d = t ? a.l : a.A,
        _ = () => {
            n?.(), s.default.disconnect();
        },
        f = () => o.intl.string(o.t["6vrfgt"]),
        { Component: p, events: h } = (0, i.O)();
    return (0, r.jsx)(d, {
        ...c,
        isTrayButton: !1,
        onClick: _,
        iconComponent: p,
        onMouseEnter: (e) => {
            l?.(e), h.onMouseEnter();
        },
        onMouseLeave: (e) => {
            u?.(e), h.onMouseLeave();
        },
        label: f(),
    });
}
