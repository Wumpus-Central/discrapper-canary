"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(633018),
    o = n(406810),
    l = n(73510),
    u = n(824527);
function c(e) {
    let { section: t, className: n, width: r, height: c, padding: d, isSelected: _, selectable: h = !1, ...f } = e,
        p = (function (e) {
            switch (e.id) {
                case l.Ik.BUILT_IN:
                    return a.k;
                case l.Ik.FRECENCY:
                    return o.O;
                default:
                    return;
            }
        })(t);
    return (0, i.jsx)("div", {
        className: s()(u.iE, n, { [u.rb]: h, [u.wH]: h && _ }),
        style: { width: r, height: c, padding: d ?? 0 },
        children:
            null != p
                ? (0, i.jsx)(p, { className: u.Kk, color: "currentColor", size: "custom", width: r, height: c, ...f })
                : null,
    });
}
