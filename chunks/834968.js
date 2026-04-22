"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(633018),
    a = n(406810),
    o = n(73510),
    c = n(824527);
function u(e) {
    let { section: t, className: n, width: l, height: u, padding: d, isSelected: h, selectable: m = !1, ...p } = e,
        f = ((e) => {
            switch (e.id) {
                case o.Ik.BUILT_IN:
                    return r.k;
                case o.Ik.FRECENCY:
                    return a.O;
                default:
                    return;
            }
        })(t);
    return (0, i.jsx)("div", {
        className: s()(c.iE, n, { [c.rb]: m, [c.wH]: m && h }),
        style: { width: l, height: u, padding: d ?? 0 },
        children:
            null != f
                ? (0, i.jsx)(f, { className: c.Kk, color: "currentColor", size: "custom", width: l, height: u, ...p })
                : null,
    });
}
