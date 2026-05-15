a.d(l, { V: () => A, Y: () => k });
var i = a(627968),
    n = a(64700),
    r = a(503698),
    t = a.n(r),
    s = a(408278),
    d = a(241326),
    u = a(417270),
    o = a(939249),
    c = a(245604),
    v = a(661531),
    g = a(990078),
    h = a(713517),
    f = a(375708),
    b = a(889536);
function m() {
    return (0, i.jsx)("div", { className: b.overlay });
}
function p(e) {
    let { onClick: l, type: a, accessibleLabel: n } = e,
        r = "remove" === a ? f.intl.string(f.t.N86XcP) : f.intl.string(f.t.wgIPss);
    return (0, i.jsx)(g.m, {
        text: r,
        ariaHidden: !0,
        children: (0, i.jsx)(s.K, {
            "aria-label": n,
            icon: "remove" === a ? d.u : u.m,
            size: "sm",
            variant: "overlay-secondary",
            onClick: l,
        }),
    });
}
let k = n.forwardRef(function (e, l) {
    let { variant: a, disabled: n = !1, children: r } = e;
    return (0, i.jsx)("div", { ref: l, className: t()(b.tile, b[a], { [b.disabled]: n }), children: r });
});
function A(e) {
    let {
            variant: l,
            onClick: a,
            accessibleLabel: r,
            renderPreview: s,
            showOverlayOnHover: d = !1,
            disabled: u = !1,
            dimContent: g = !1,
            buttonRef: f,
            affordance: A,
            ...C
        } = e,
        I = "add" !== A ? A : void 0,
        x = n.useRef(null),
        { isHoveringOrFocusing: y } = (0, h.A)(x),
        j = y && !u,
        w = n.useRef(null),
        N = f ?? w;
    return (0, i.jsxs)(k, {
        ref: x,
        variant: l,
        disabled: u,
        children: [
            (0, i.jsxs)(o.D, {
                innerRef: N,
                className: b.tileButton,
                "aria-label": r,
                onClick: u ? void 0 : a,
                "aria-disabled": u,
                tabIndex: u ? -1 : 0,
                ...C,
                children: [
                    (0, i.jsx)("div", { className: t()(b.content, { [b.dimmed]: g }), children: s(j) }),
                    d && !u && (0, i.jsx)(m, {}),
                    "add" === A &&
                        (0, i.jsx)("div", {
                            className: t()(b.iconContainer, {
                                [b.iconAlignCenter]: "square" === l || "full-height-bar" === l,
                                [b.iconAlignRight]: "bar" === l,
                            }),
                            children: (0, i.jsx)(c.U, {
                                size: "md",
                                color: v.A.colors.ICON_STRONG,
                                secondaryColor: v.A.colors.ICON_INVERT,
                                className: b.overlayIcon,
                            }),
                        }),
                ],
            }),
            !u &&
                null != I &&
                (0, i.jsx)("div", {
                    className: b.deleteButtonWrapper,
                    children: (0, i.jsx)(p, {
                        ...I,
                        onClick: () => {
                            I?.onClick(), N.current?.focus();
                        },
                    }),
                }),
        ],
    });
}
