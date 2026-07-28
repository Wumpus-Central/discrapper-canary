"use strict";
n.d(t, { A: () => l });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(179618);
function l(e) {
    let { selected: t = !1, hovered: n = !1, unread: r = !1, disabled: l = !1, className: o, overlay: d = !1 } = e;
    (t = !l && t), (n = !l && n), (r = !l && r);
    let c = t || n || r;
    return (0, i.jsx)("div", {
        className: a()(o, s.iE, { [s.Lw]: d }),
        "aria-hidden": !0,
        children: (0, i.jsx)("span", { className: a()(s.AS, { [s.RK]: c, [s.yo]: n, [s.wH]: t }) }),
    });
}
