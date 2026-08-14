"use strict";
n.d(t, { A: () => c });
var l = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    r = n(633018),
    a = n(406810),
    o = n(73510),
    u = n(744071);
function c(e) {
    let { section: t, className: n, width: i, height: c, padding: d, isSelected: h, selectable: m = !1, ...f } = e,
        p = (function (e) {
            switch (e.id) {
                case o.Ik.BUILT_IN:
                    return r.k;
                case o.Ik.FRECENCY:
                    return a.O;
                default:
                    return;
            }
        })(t);
    return (0, l.jsx)("div", {
        className: s()(u.iE, n, { [u.rb]: m, [u.wH]: m && h }),
        style: { width: i, height: c, padding: d ?? 0 },
        children:
            null != p
                ? (0, l.jsx)(p, { className: u.Kk, color: "currentColor", size: "custom", width: i, height: c, ...f })
                : null,
    });
}
