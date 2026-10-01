i.d(a, { A: () => r });
var e = i(477900);
i(582128);
var d = i(503698),
    c = i.n(d),
    n = i(354001);
function r(s) {
    let {
        selected: a = !1,
        hovered: i = !1,
        unread: d = !1,
        disabled: r = !1,
        className: p,
        overlay: t = !1,
        size: h = "medium",
    } = s;
    ((a = !r && a), (i = !r && i), (d = !r && d));
    let l = a || i || d;
    return (0, e.jsx)("div", {
        className: c()(p, n.iE, { [n.Lw]: t, [n.EX]: "small" === h }),
        "aria-hidden": !0,
        children: (0, e.jsx)("span", { className: c()(n.AS, { [n.RK]: l, [n.yo]: i, [n.wH]: a }) }),
    });
}
