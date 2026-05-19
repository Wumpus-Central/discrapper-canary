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
    f = a(713517),
    h = a(375708),
    m = a(889536);
function b() {
    return (0, i.jsx)("div", { className: m.overlay });
}
function p(e) {
    let { onClick: l, type: a, accessibleLabel: n } = e,
        r = "remove" === a ? h.intl.string(h.t.N86XcP) : h.intl.string(h.t.wgIPss);
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
    return (0, i.jsx)("div", { ref: l, className: t()(m.tile, m[a], { [m.disabled]: n }), children: r });
});
function A(e) {
    let {
            variant: l,
            onClick: a,
            accessibleLabel: r,
            accessibleValue: s,
            renderPreview: d,
            showOverlayOnHover: u = !1,
            disabled: g = !1,
            dimContent: A = !1,
            buttonRef: C,
            affordance: I,
            ...x
        } = e,
        y = "add" !== I ? I : void 0,
        j = n.useRef(null),
        { isHoveringOrFocusing: w } = (0, f.A)(j),
        N = w && !g,
        P = n.useRef(null),
        V = C ?? P;
    return (0, i.jsxs)(k, {
        ref: j,
        variant: l,
        disabled: g,
        children: [
            (0, i.jsxs)(o.D, {
                innerRef: V,
                className: m.tileButton,
                "aria-label": null != s ? h.intl.formatToPlainString(h.t["E+mIJ+"], { label: r, value: s }) : r,
                onClick: g ? void 0 : a,
                "aria-disabled": g,
                tabIndex: g ? -1 : 0,
                ...x,
                children: [
                    (0, i.jsx)("div", { className: t()(m.content, { [m.dimmed]: A }), children: d(N) }),
                    u && !g && (0, i.jsx)(b, {}),
                    "add" === I &&
                        (0, i.jsx)("div", {
                            className: t()(m.iconContainer, {
                                [m.iconAlignCenter]: "square" === l || "full-height-bar" === l,
                                [m.iconAlignRight]: "bar" === l,
                            }),
                            children: (0, i.jsx)(c.U, {
                                size: "md",
                                color: v.A.colors.ICON_STRONG,
                                secondaryColor: v.A.colors.ICON_INVERT,
                                className: m.overlayIcon,
                            }),
                        }),
                ],
            }),
            !g &&
                null != y &&
                (0, i.jsx)("div", {
                    className: m.deleteButtonWrapper,
                    children: (0, i.jsx)(p, {
                        ...y,
                        onClick: () => {
                            y?.onClick(), V.current?.focus();
                        },
                    }),
                }),
        ],
    });
}
