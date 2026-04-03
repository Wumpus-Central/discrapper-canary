l.d(t, { N: () => h, k: () => m });
var a = l(627968);
l(64700);
var n = l(503698),
    r = l.n(n),
    i = l(158954),
    o = l(990078),
    s = l(985018),
    d = l(967024);
function u() {
    return (0, a.jsx)("div", { className: d.overlay });
}
function c(e) {
    let { icon: t, iconAlignment: l } = e;
    return (0, a.jsx)("div", {
        className: r()(d.iconContainer, { [d.iconAlignCenter]: "center" === l, [d.iconAlignRight]: "right" === l }),
        children: (0, a.jsx)(t, { size: "md", color: "white", "aria-hidden": !0, className: d.overlayIcon }),
    });
}
function p(e) {
    let { onClick: t, type: l, accessibleLabel: n } = e,
        r = "remove" === l ? s.intl.string(s.t["2A+piL"]) : s.intl.string(s.t.GaEG4t);
    return (0, a.jsx)(o.m, {
        text: r,
        ariaHidden: !0,
        children: (0, a.jsx)(i.K0, {
            "aria-label": n,
            icon: "remove" === l ? i.ucK : i.mqY,
            size: "sm",
            variant: "overlay-secondary",
            onClick: t,
        }),
    });
}
function m(e) {
    let { variant: t, onClick: l, accessibleLabel: n, children: o } = e;
    return (0, a.jsx)("div", {
        className: d.tileWrapper,
        children: (0, a.jsxs)(i.DUT, {
            "aria-label": n,
            className: r()(d.base, d[t]),
            onClick: l,
            children: [
                (0, a.jsx)("div", { className: d.content, children: o }),
                (0, a.jsx)(u, {}),
                (0, a.jsx)(c, { icon: i.TIR, iconAlignment: "bar" === t ? "right" : "center" }),
            ],
        }),
    });
}
function h(e) {
    let { variant: t, onClick: l, accessibleLabel: n, children: o, showOverlay: s, deleteButtonConfig: c } = e;
    return (0, a.jsxs)("div", {
        className: d.tileWrapper,
        children: [
            (0, a.jsxs)(i.DUT, {
                "aria-label": n,
                className: r()(d.base, d[t]),
                onClick: l,
                children: [(0, a.jsx)("div", { className: d.content, children: o }), s && (0, a.jsx)(u, {})],
            }),
            null != c && (0, a.jsx)("div", { className: d.deleteButtonWrapper, children: (0, a.jsx)(p, { ...c }) }),
        ],
    });
}
