a.d(l, { V: () => k, Y: () => A });
var n = a(627968),
    i = a(64700),
    r = a(503698),
    t = a.n(r),
    s = a(408278),
    d = a(241326),
    u = a(417270),
    c = a(939249),
    o = a(245604),
    v = a(661531),
    g = a(990078),
    h = a(713517),
    f = a(375708),
    m = a(889536);
function b() {
    return (0, n.jsx)("div", { className: m.overlay });
}
function p(e) {
    let { onClick: l, type: a, accessibleLabel: i } = e,
        r = "remove" === a ? f.intl.string(f.t.N86XcP) : f.intl.string(f.t.wgIPss);
    return (0, n.jsx)(g.m, {
        text: r,
        ariaHidden: !0,
        children: (0, n.jsx)(s.K, {
            "aria-label": i,
            icon: "remove" === a ? d.u : u.m,
            size: "sm",
            variant: "overlay-secondary",
            onClick: l,
        }),
    });
}
let A = i.forwardRef(function (e, l) {
    let { variant: a, disabled: i = !1, children: r } = e;
    return (0, n.jsx)("div", { ref: l, className: t()(m.tile, m[a], { [m.disabled]: i }), children: r });
});
function k(e) {
    let {
            variant: l,
            onClick: a,
            accessibleLabel: r,
            renderPreview: s,
            showOverlayOnHover: d = !1,
            disabled: u = !1,
            dimContent: g = !1,
            buttonRef: f,
            affordance: k,
            ...C
        } = e,
        I = "add" !== k ? k : void 0,
        x = i.useRef(null),
        { isHoveringOrFocusing: y } = (0, h.A)(x),
        j = y && !u;
    return (0, n.jsxs)(A, {
        ref: x,
        variant: l,
        disabled: u,
        children: [
            (0, n.jsxs)(c.D, {
                innerRef: f,
                className: m.tileButton,
                "aria-label": r,
                onClick: u ? void 0 : a,
                "aria-disabled": u,
                tabIndex: u ? -1 : 0,
                ...C,
                children: [
                    (0, n.jsx)("div", { className: t()(m.content, { [m.dimmed]: g }), children: s(j) }),
                    d && !u && (0, n.jsx)(b, {}),
                    "add" === k &&
                        (0, n.jsx)("div", {
                            className: t()(m.iconContainer, {
                                [m.iconAlignCenter]: "square" === l || "full-height-bar" === l,
                                [m.iconAlignRight]: "bar" === l,
                            }),
                            children: (0, n.jsx)(o.U, {
                                size: "md",
                                color: v.A.colors.ICON_STRONG,
                                secondaryColor: v.A.colors.ICON_INVERT,
                                className: m.overlayIcon,
                            }),
                        }),
                ],
            }),
            !u &&
                null != I &&
                (0, n.jsx)("div", { className: m.deleteButtonWrapper, children: (0, n.jsx)(p, { ...I }) }),
        ],
    });
}
