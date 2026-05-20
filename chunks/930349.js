a.d(l, { V: () => A, Y: () => k });
var i = a(627968),
    n = a(64700),
    r = a(503698),
    t = a.n(r),
    s = a(408278),
    d = a(241326),
    u = a(417270),
    c = a(939249),
    o = a(245604),
    v = a(661531),
    g = a(990078),
    f = a(713517),
    h = a(375708),
    b = a(889536);
function p() {
    return (0, i.jsx)("div", { className: b.overlay });
}
function m(e) {
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
    let { variant: a, disabled: n = !1, isInteracting: r = !1, children: s } = e;
    return (0, i.jsx)("div", {
        ref: l,
        className: t()(b.tile, b[a], { [b.disabled]: n, [b.isInteracting]: r }),
        children: s,
    });
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
            buttonRef: A,
            affordance: I,
            ...C
        } = e,
        x = "add" !== I ? I : void 0,
        y = n.useRef(null),
        { isHoveringOrFocusing: j } = (0, f.A)(y),
        w = j && !g,
        N = n.useRef(null),
        P = A ?? N;
    return (0, i.jsxs)(k, {
        ref: y,
        variant: l,
        disabled: g,
        isInteracting: w,
        children: [
            (0, i.jsxs)(c.D, {
                innerRef: P,
                className: b.tileButton,
                "aria-label": null != s ? h.intl.formatToPlainString(h.t["E+mIJ+"], { label: r, value: s }) : r,
                onClick: g ? void 0 : a,
                "aria-disabled": g,
                tabIndex: g ? -1 : 0,
                ...C,
                children: [
                    (0, i.jsx)("div", { className: b.content, children: d(w) }),
                    u && !g && (0, i.jsx)(p, {}),
                    "add" === I &&
                        (0, i.jsx)("div", {
                            className: t()(b.iconContainer, {
                                [b.iconAlignCenter]: "square" === l || "full-height-bar" === l,
                                [b.iconAlignRight]: "bar" === l,
                            }),
                            children: (0, i.jsx)(o.U, {
                                size: "md",
                                color: v.A.colors.ICON_STRONG,
                                secondaryColor: v.A.colors.ICON_INVERT,
                                className: b.overlayIcon,
                            }),
                        }),
                ],
            }),
            !g &&
                null != x &&
                (0, i.jsx)("div", {
                    className: t()(b.deleteButtonWrapper, { [b.resetButton]: "reset" === x.type }),
                    children: (0, i.jsx)(m, {
                        ...x,
                        onClick: () => {
                            x?.onClick(), P.current?.focus();
                        },
                    }),
                }),
        ],
    });
}
