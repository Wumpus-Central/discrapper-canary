n.d(t, { A: () => u, c: () => d });
var i = n(477900);
n(582128);
var l = n(503698),
    a = n.n(l),
    s = n(939249),
    r = n(544299),
    o = n(269967);
function c(e, t) {
    return { insetInlineStart: `${e.x}%`, insetBlockStart: `${e.y}%`, width: `${t}%` };
}
function d(e) {
    let { asset: t, label: n, position: l, width: s, className: r } = e;
    return (0, i.jsx)("div", {
        role: "listitem",
        className: a()(o.kL, r),
        style: c(l, s),
        children: (0, i.jsx)("img", { className: o.Sl, src: t, alt: n }),
    });
}
function u(e) {
    let { asset: t, label: n, position: l, width: d, className: u, disabled: h, onClick: p, innerRef: m } = e,
        A = (0, r.Sb)({ position: l, targetLabel: n });
    return (0, i.jsx)(s.D, {
        role: "listitem",
        innerRef: m,
        className: a()(o.x6, u, h ? o.r9 : void 0),
        style: c(l, d),
        "aria-disabled": h && null == A,
        onClick: h ? void 0 : p,
        ...A,
        children: (0, i.jsx)("img", { className: o.Sl, src: t, alt: n }),
    });
}
