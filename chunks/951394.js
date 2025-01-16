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
    s = r.n(a),
    o = r(481060),
    l = r(925424);
function u(e) {
    let { className: n } = e;
    return (0, i.jsx)('div', { className: s()(n, l.separator) });
}
function c(e) {
    let { onClick: n, onContextMenu: r, className: a, selected: u = !1, children: c, disabled: d = !1, dangerous: f, ..._ } = e;
    return (0, i.jsx)(o.Clickable, {
        onClick: d ? void 0 : n,
        onContextMenu: d ? void 0 : r,
        className: s()(a, {
            [l.button]: !0,
            [l.selected]: u,
            [l.disabled]: d,
            [l.dangerous]: f
        }),
        ..._,
        children: c
    });
}
function d(e) {
    let { className: n, children: r, ...a } = e;
    return (0, i.jsx)('div', {
        className: s()(n, l.wrapper),
        ...a,
        children: r
    });
}
n.ZP = d;
