l.d(t, { NW: () => b, Yt: () => m, kL: () => x });
var a = l(627968);
l(64700);
var n = l(503698),
    r = l.n(n),
    i = l(158954),
    o = l(990078),
    s = l(985018),
    d = l(730499);
function c() {
    return (0, a.jsx)("div", { className: d.overlay });
}
function u(e) {
    let { icon: t, iconAlignment: l } = e;
    return (0, a.jsx)("div", {
        className: r()(d.iconContainer, { [d.iconAlignCenter]: "center" === l, [d.iconAlignRight]: "right" === l }),
        children: (0, a.jsx)(t, { size: "md", color: "white", "aria-hidden": !0, className: d.overlayIcon }),
    });
}
function p(e) {
    let { onClick: t, type: l, accessibleLabel: n } = e,
        r = "remove" === l ? s.intl.string(s.t.N86XcP) : s.intl.string(s.t.wgIPss);
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
    let { variant: t, children: l } = e;
    return (0, a.jsx)("div", { className: r()(d.tile, d[t]), children: l });
}
function h(e) {
    let {
        variant: t,
        onClick: l,
        accessibleLabel: n,
        children: r,
        showOverlay: o = !1,
        overlayIcon: s,
        overlayControls: p,
    } = e;
    return (0, a.jsxs)(m, {
        variant: t,
        children: [
            (0, a.jsxs)(i.DUT, {
                className: d.tileButton,
                "aria-label": n,
                onClick: l,
                children: [
                    (0, a.jsx)("div", { className: d.content, children: r }),
                    o && (0, a.jsx)(c, {}),
                    null != s && (0, a.jsx)(u, { icon: s, iconAlignment: "bar" === t ? "right" : "center" }),
                ],
            }),
            p,
        ],
    });
}
function x(e) {
    return (0, a.jsx)(h, { ...e, overlayIcon: i.TIR, showOverlay: !0 });
}
function b(e) {
    let { deleteButtonConfig: t, ...l } = e;
    return (0, a.jsx)(h, {
        ...l,
        overlayControls:
            null != t && (0, a.jsx)("div", { className: d.deleteButtonWrapper, children: (0, a.jsx)(p, { ...t }) }),
    });
}
