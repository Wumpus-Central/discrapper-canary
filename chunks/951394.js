n.d(t, {
    Z0: () => l,
    ZP: () => c,
    zx: () => u
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(587746);
function l(e) {
    let { className: t } = e;
    return (0, i.jsx)('div', { className: a()(t, o.separator) });
}
function u(e) {
    let { onClick: t, onContextMenu: n, className: r, selected: l = !1, children: u, disabled: c = !1, dangerous: d, ...f } = e;
    return (0, i.jsx)(s.P3F, {
        onClick: c ? void 0 : t,
        onContextMenu: c ? void 0 : n,
        className: a()(r, {
            [o.button]: !0,
            [o.selected]: l,
            [o.disabled]: c,
            [o.dangerous]: d
        }),
        ...f,
        children: u
    });
}
let c = function (e) {
    let { className: t, children: n, ...r } = e;
    return (0, i.jsx)('div', {
        className: a()(t, o.wrapper),
        ...r,
        children: n
    });
};
