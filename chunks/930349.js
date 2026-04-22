l.d(t, { NW: () => f, Yt: () => y, kL: () => g });
var a = l(627968);
l(64700);
var n = l(503698),
    r = l.n(n),
    i = l(408278),
    o = l(241326),
    s = l(417270),
    d = l(939249),
    c = l(499373),
    u = l(990078),
    p = l(985018),
    m = l(889536);
function b() {
    return (0, a.jsx)("div", { className: m.overlay });
}
function h(e) {
    let { icon: t, iconAlignment: l } = e;
    return (0, a.jsx)("div", {
        className: r()(m.iconContainer, { [m.iconAlignCenter]: "center" === l, [m.iconAlignRight]: "right" === l }),
        children: (0, a.jsx)(t, { size: "md", color: "white", "aria-hidden": !0, className: m.overlayIcon }),
    });
}
function x(e) {
    let { onClick: t, type: l, accessibleLabel: n } = e,
        r = "remove" === l ? p.intl.string(p.t.N86XcP) : p.intl.string(p.t.wgIPss);
    return (0, a.jsx)(u.m, {
        text: r,
        ariaHidden: !0,
        children: (0, a.jsx)(i.K, {
            "aria-label": n,
            icon: "remove" === l ? o.u : s.m,
            size: "sm",
            variant: "overlay-secondary",
            onClick: t,
        }),
    });
}
function y(e) {
    let { variant: t, disabled: l = !1, children: n, innerRef: i } = e;
    return (0, a.jsx)("div", { ref: i, className: r()(m.tile, m[t], { [m.disabled]: l }), children: n });
}
function v(e) {
    let {
        variant: t,
        onClick: l,
        accessibleLabel: n,
        children: r,
        showOverlay: i = !1,
        overlayIcon: o,
        overlayControls: s,
        disabled: c = !1,
        buttonRef: u,
        ...p
    } = e;
    return (0, a.jsxs)(y, {
        variant: t,
        disabled: c,
        innerRef: u,
        children: [
            (0, a.jsxs)(d.D, {
                className: m.tileButton,
                "aria-label": n,
                onClick: c ? void 0 : l,
                "aria-disabled": c,
                tabIndex: c ? -1 : 0,
                ...p,
                children: [
                    (0, a.jsx)("div", { className: m.content, children: r }),
                    i && !c && (0, a.jsx)(b, {}),
                    null != o && (0, a.jsx)(h, { icon: o, iconAlignment: "bar" === t ? "right" : "center" }),
                ],
            }),
            !c && s,
        ],
    });
}
function g(e) {
    return (0, a.jsx)(v, { ...e, overlayIcon: c.T, showOverlay: !0 });
}
function f(e) {
    let { deleteButtonConfig: t, ...l } = e;
    return (0, a.jsx)(v, {
        ...l,
        overlayControls:
            null != t && (0, a.jsx)("div", { className: m.deleteButtonWrapper, children: (0, a.jsx)(x, { ...t }) }),
    });
}
