l.d(t, { N: () => x, k: () => h });
var a = l(627968);
l(64700);
var n = l(503698),
    r = l.n(n),
    i = l(158954),
    o = l(990078),
    s = l(397927),
    u = l(985018),
    c = l(967024);
function d() {
    return (0, a.jsx)("div", { className: c.overlay });
}
function p(e) {
    let { icon: t, iconAlignment: l } = e;
    return (0, a.jsx)("div", {
        className: r()(c.iconContainer, { [c.iconAlignCenter]: "center" === l, [c.iconAlignRight]: "right" === l }),
        children: (0, a.jsx)(t, { size: "sm", color: "white", "aria-hidden": !0, className: c.overlayIcon }),
    });
}
function m(e) {
    let { onClick: t, type: l, accessibleLabel: n } = e,
        r = "remove" === l ? u.intl.string(u.t["2A+piL"]) : u.intl.string(u.t.GaEG4t);
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
function h(e) {
    let { variant: t, onClick: l, accessibleLabel: n, children: o } = e;
    return (0, a.jsx)("div", {
        className: c.tileWrapper,
        children: (0, a.jsxs)(i.DUT, {
            "aria-label": n,
            className: r()(c.base, c[t]),
            onClick: l,
            children: [
                (0, a.jsx)("div", { className: c.content, children: o }),
                (0, a.jsx)(d, {}),
                (0, a.jsx)(p, { icon: s.j96, iconAlignment: "bar" === t ? "right" : "center" }),
            ],
        }),
    });
}
function x(e) {
    let { variant: t, onClick: l, accessibleLabel: n, children: o, showOverlay: s, deleteButtonConfig: u } = e;
    return (0, a.jsxs)("div", {
        className: c.tileWrapper,
        children: [
            (0, a.jsxs)(i.DUT, {
                "aria-label": n,
                className: r()(c.base, c[t]),
                onClick: l,
                children: [(0, a.jsx)("div", { className: c.content, children: o }), s && (0, a.jsx)(d, {})],
            }),
            null != u && (0, a.jsx)("div", { className: c.deleteButtonWrapper, children: (0, a.jsx)(m, { ...u }) }),
        ],
    });
}
