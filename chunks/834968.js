"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(73510),
    l = n(60090);
let u = (e) => {
    switch (e.id) {
        case o.Ik.BUILT_IN:
            return a.kC9;
        case o.Ik.FRECENCY:
            return a.O4;
        default:
            return;
    }
};
function c(e) {
    let { section: t, className: n, width: i, height: a, padding: o, isSelected: c, selectable: d = !1, ..._ } = e,
        f = u(t);
    return (0, r.jsx)("div", {
        className: s()(l.iE, n, { [l.rb]: d, [l.wH]: d && c }),
        style: { width: i, height: a, padding: o ?? 0 },
        children:
            null != f
                ? (0, r.jsx)(f, { className: l.Kk, color: "currentColor", size: "custom", width: i, height: a, ..._ })
                : null,
    });
}
