l.d(n, { V: () => I, Y: () => b });
var t = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(408278),
    u = l(241326),
    o = l(417270),
    d = l(939249),
    c = l(245604),
    g = l(661531),
    v = l(866665),
    h = l(713517),
    f = l(375708),
    p = l(582120);
function m() {
    return (0, t.jsx)("div", { className: p.overlay });
}
let b = a.forwardRef(function (e, n) {
    let { variant: l, disabled: a = !1, isInteracting: r = !1, children: d, deleteButton: c, hasError: g = !1 } = e,
        h = c?.type === "remove" ? f.intl.string(f.t.N86XcP) : f.intl.string(f.t.wgIPss);
    return (0, t.jsxs)("div", {
        ref: n,
        className: i()(p.tile, p[l], { [p.disabled]: a, [p.isInteracting]: r, [p.hasError]: g }),
        children: [
            d,
            !a &&
                null != c &&
                (0, t.jsx)("div", {
                    className: i()(p.deleteButtonWrapper, { [p.resetButton]: "reset" === c.type }),
                    children: (0, t.jsx)(v.m, {
                        text: h,
                        ariaHidden: !0,
                        children: (0, t.jsx)(s.K, {
                            "aria-label": c.accessibleLabel,
                            icon: "remove" === c.type ? u.u : o.m,
                            size: "sm",
                            variant: "overlay-secondary",
                            onClick: c.onClick,
                        }),
                    }),
                }),
        ],
    });
});
function I(e) {
    let {
            variant: n,
            onClick: l,
            accessibleLabel: r,
            accessibleValue: s,
            renderPreview: u,
            showOverlayOnHover: o = !1,
            disabled: v = !1,
            buttonRef: I,
            affordance: A,
            errorMessageId: x,
            ...C
        } = e,
        k = "add" === A,
        y = a.useRef(null),
        { isHoveringOrFocusing: N } = (0, h.A)(y),
        j = N && !v,
        E = a.useRef(null),
        w = I ?? E,
        P =
            null != A && "add" !== A
                ? {
                      ...A,
                      onClick: () => {
                          A.onClick(), w.current?.focus();
                      },
                  }
                : void 0;
    return (0, t.jsx)(b, {
        ref: y,
        variant: n,
        disabled: v,
        isInteracting: j,
        deleteButton: P,
        hasError: null != x,
        children: (0, t.jsxs)(d.D, {
            innerRef: w,
            className: p.tileButton,
            "aria-label": f.intl.formatToPlainString(f.t["E+mIJ+"], { label: r, value: s }),
            onClick: v ? void 0 : l,
            "aria-disabled": v,
            "aria-invalid": null != x || void 0,
            "aria-describedby": x,
            "aria-errormessage": x,
            tabIndex: v ? -1 : 0,
            ...C,
            children: [
                (0, t.jsx)("div", { className: p.content, children: u(j) }),
                o && !v && (0, t.jsx)(m, {}),
                k &&
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
