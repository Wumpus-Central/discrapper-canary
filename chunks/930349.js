l.d(n, { V: () => x, Y: () => b });
var t = l(627968),
    a = l(64700),
    r = l(503698),
    i = l.n(r),
    s = l(408278),
    o = l(241326),
    u = l(417270),
    d = l(939249),
    c = l(245604),
    g = l(661531),
    v = l(990078),
    h = l(713517),
    f = l(375708),
    p = l(889536);
function m() {
    return (0, t.jsx)("div", { className: p.overlay });
}
let b = a.forwardRef(function (e, n) {
    let { variant: l, disabled: a = !1, isInteracting: r = !1, children: d, deleteButton: c } = e,
        g = c?.type === "remove" ? f.intl.string(f.t.N86XcP) : f.intl.string(f.t.wgIPss);
    return (0, t.jsxs)("div", {
        ref: n,
        className: i()(p.tile, p[l], { [p.disabled]: a, [p.isInteracting]: r }),
        children: [
            d,
            !a &&
                null != c &&
                (0, t.jsx)("div", {
                    className: i()(p.deleteButtonWrapper, { [p.resetButton]: "reset" === c.type }),
                    children: (0, t.jsx)(v.m, {
                        text: g,
                        ariaHidden: !0,
                        children: (0, t.jsx)(s.K, {
                            "aria-label": c.accessibleLabel,
                            icon: "remove" === c.type ? o.u : u.m,
                            size: "sm",
                            variant: "overlay-secondary",
                            onClick: c.onClick,
                        }),
                    }),
                }),
        ],
    });
});
function x(e) {
    let {
            variant: n,
            onClick: l,
            accessibleLabel: r,
            accessibleValue: s,
            renderPreview: o,
            showOverlayOnHover: u = !1,
            disabled: v = !1,
            buttonRef: x,
            affordance: C,
            ...I
        } = e,
        A = "add" === C,
        k = a.useRef(null),
        { isHoveringOrFocusing: y } = (0, h.A)(k),
        j = y && !v,
        N = a.useRef(null),
        E = x ?? N,
        w =
            null != C && "add" !== C
                ? {
                      ...C,
                      onClick: () => {
                          C.onClick(), E.current?.focus();
                      },
                  }
                : void 0;
    return (0, t.jsx)(b, {
        ref: k,
        variant: n,
        disabled: v,
        isInteracting: j,
        deleteButton: w,
        children: (0, t.jsxs)(d.D, {
            innerRef: E,
            className: p.tileButton,
            "aria-label": null != s ? f.intl.formatToPlainString(f.t["E+mIJ+"], { label: r, value: s }) : r,
            onClick: v ? void 0 : l,
            "aria-disabled": v,
            tabIndex: v ? -1 : 0,
            ...I,
            children: [
                (0, t.jsx)("div", { className: p.content, children: o(j) }),
                u && !v && (0, t.jsx)(m, {}),
                A &&
                    (0, t.jsx)("div", {
                        className: i()(p.iconContainer, {
                            [p.iconAlignCenter]: "square" === n || "full-height-bar" === n,
                            [p.iconAlignRight]: "bar" === n,
                        }),
                        children: (0, t.jsx)(c.U, {
                            size: "md",
                            color: g.A.colors.ICON_STRONG,
                            secondaryColor: g.A.colors.ICON_INVERT,
                            className: p.overlayIcon,
                        }),
                    }),
            ],
        }),
    });
}
