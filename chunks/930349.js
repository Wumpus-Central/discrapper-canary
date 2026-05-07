n.d(l, { NW: () => A, Yt: () => m, kL: () => C });
var i = n(627968);
n(64700);
var a = n(503698),
    t = n.n(a),
    r = n(408278),
    s = n(241326),
    d = n(417270),
    u = n(939249),
    c = n(245604),
    o = n(661531),
    v = n(990078),
    g = n(375708),
    b = n(889536);
function h() {
    return (0, i.jsx)("div", { className: b.overlay });
}
function f(e) {
    let { onClick: l, type: n, accessibleLabel: a } = e,
        t = "remove" === n ? g.intl.string(g.t.N86XcP) : g.intl.string(g.t.wgIPss);
    return (0, i.jsx)(v.m, {
        text: t,
        ariaHidden: !0,
        children: (0, i.jsx)(r.K, {
            "aria-label": a,
            icon: "remove" === n ? s.u : d.m,
            size: "sm",
            variant: "overlay-secondary",
            onClick: l,
        }),
    });
}
function m(e) {
    let { variant: l, disabled: n = !1, children: a, innerRef: r } = e;
    return (0, i.jsx)("div", { ref: r, className: t()(b.tile, b[l], { [b.disabled]: n }), children: a });
}
function k(e) {
    let {
        variant: l,
        onClick: n,
        accessibleLabel: a,
        children: r,
        showOverlayOnHover: s = !1,
        overlayIcon: d,
        overlayControls: c,
        disabled: o = !1,
        dimContent: v = !1,
        buttonRef: g,
        ...f
    } = e;
    return (0, i.jsxs)(m, {
        variant: l,
        disabled: o,
        innerRef: g,
        children: [
            (0, i.jsxs)(u.D, {
                className: b.tileButton,
                "aria-label": a,
                onClick: o ? void 0 : n,
                "aria-disabled": o,
                tabIndex: o ? -1 : 0,
                ...f,
                children: [
                    (0, i.jsx)("div", { className: t()(b.content, { [b.dimmed]: v }), children: r }),
                    s && !o && (0, i.jsx)(h, {}),
                    null != d &&
                        (0, i.jsx)("div", {
                            className: t()(b.iconContainer, {
                                [b.iconAlignCenter]: "square" === l || "full-height-bar" === l,
                                [b.iconAlignRight]: "bar" === l,
                            }),
                            children: d,
                        }),
                ],
            }),
            !o && c,
        ],
    });
}
function C(e) {
    return (0, i.jsx)(k, {
        ...e,
        overlayIcon: (0, i.jsx)(c.U, {
            size: "md",
            color: o.A.colors.ICON_STRONG,
            secondaryColor: o.A.colors.ICON_INVERT,
            className: b.overlayIcon,
        }),
    });
}
function A(e) {
    let { deleteButtonConfig: l, ...n } = e;
    return (0, i.jsx)(k, {
        ...n,
        overlayControls:
            null != l && (0, i.jsx)("div", { className: b.deleteButtonWrapper, children: (0, i.jsx)(f, { ...l }) }),
    });
}
