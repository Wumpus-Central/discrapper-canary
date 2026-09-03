n.d(t, { A: () => a });
var l = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    r = n(354001);
function a(e) {
    let { selected: t = !1, hovered: n = !1, unread: i = !1, disabled: a = !1, className: o, overlay: u = !1 } = e;
    (t = !a && t), (n = !a && n), (i = !a && i);
    let c = t || n || i;
    return (0, l.jsx)("div", {
        className: s()(o, r.iE, { [r.Lw]: u }),
        "aria-hidden": !0,
        children: (0, l.jsx)("span", { className: s()(r.AS, { [r.RK]: c, [r.yo]: n, [r.wH]: t }) }),
    });
}
