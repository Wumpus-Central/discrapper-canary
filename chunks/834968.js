"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(633018),
    o = n(406810),
    l = n(73510),
    u = n(824527);
function c(e) {
    let { section: t, className: n, width: i, height: c, padding: d, isSelected: _, selectable: f = !1, ...p } = e,
        h = ((e) => {
            switch (e.id) {
                case l.Ik.BUILT_IN:
                    return a.k;
                case l.Ik.FRECENCY:
                    return o.O;
                default:
                    return;
            }
        })(t);
    return (0, r.jsx)("div", {
        className: s()(u.iE, n, { [u.rb]: f, [u.wH]: f && _ }),
        style: { width: i, height: c, padding: d ?? 0 },
        children:
            null != h
                ? (0, r.jsx)(h, { className: u.Kk, color: "currentColor", size: "custom", width: i, height: c, ...p })
                : null,
    });
}
