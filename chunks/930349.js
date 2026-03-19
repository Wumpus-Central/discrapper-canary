l.d(t, { C: () => d });
var a = l(627968);
l(64700);
var n = l(503698),
    r = l.n(n),
    i = l(158954),
    o = l(397927),
    s = l(98451);
function u(e) {
    let { mode: t, className: l } = e;
    return "add" === t
        ? (0, a.jsx)(o.j96, { size: "sm", color: "white", "aria-hidden": !0, className: l })
        : (0, a.jsx)(o.R2l, { size: "sm", color: "white", "aria-hidden": !0, className: l });
}
function c(e) {
    let { alignment: t, showOnHover: l, children: n } = e;
    return (0, a.jsx)("div", {
        className: r()(s.overlay, {
            [s.overlayAlignCenter]: "center" === t,
            [s.overlayAlignRight]: "right" === t,
            [s.overlayAlwaysVisible]: !l,
        }),
        children: n,
    });
}
function d(e) {
    let { iconAlignment: t, editingMode: l, variant: n, onClick: o, "aria-label": d, children: p } = e;
    return (0, a.jsxs)(i.DUT, {
        "aria-label": d,
        className: r()(s.base, s[n]),
        onClick: o,
        children: [
            (0, a.jsx)("div", { className: s.content, children: p }),
            (0, a.jsx)(c, {
                alignment: t,
                showOnHover: "edit" === l,
                children: (0, a.jsx)(u, { mode: l, className: s.overlayIcon }),
            }),
        ],
    });
}
(d.Icon = u), (d.Overlay = c);
