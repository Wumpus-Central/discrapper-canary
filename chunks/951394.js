r.d(n, {
    Z0: function () {
        return u;
    },
    zx: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(481060),
    l = r(925424);
function u(e) {
    let { className: n } = e;
    return (0, i.jsx)('div', { className: o()(n, l.separator) });
}
function c(e) {
    let { onClick: n, onContextMenu: r, className: a, selected: u = !1, children: c, disabled: d = !1, dangerous: f, ...p } = e;
    return (0, i.jsx)(s.Clickable, {
        onClick: d ? void 0 : n,
        onContextMenu: d ? void 0 : r,
        className: o()(a, {
            [l.button]: !0,
            [l.selected]: u,
            [l.disabled]: d,
            [l.dangerous]: f
        }),
        ...p,
        children: c
    });
}
function d(e) {
    let { className: n, children: r, ...a } = e;
    return (0, i.jsx)('div', {
        className: o()(n, l.wrapper),
        ...a,
        children: r
    });
}
n.ZP = d;
