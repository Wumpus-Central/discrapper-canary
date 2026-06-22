l.d(n, { V: () => I, Y: () => b });
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
    m = l(889536);
function p() {
    return (0, t.jsx)("div", { className: m.overlay });
}
let b = a.forwardRef(function (e, n) {
    let { variant: l, disabled: a = !1, isInteracting: r = !1, children: d, deleteButton: c, hasError: g = !1 } = e,
        h = c?.type === "remove" ? f.intl.string(f.t.N86XcP) : f.intl.string(f.t.wgIPss);
    return (0, t.jsxs)("div", {
        ref: n,
        className: i()(m.tile, m[l], { [m.disabled]: a, [m.isInteracting]: r, [m.hasError]: g }),
        children: [
            d,
            !a &&
                null != c &&
                (0, t.jsx)("div", {
                    className: i()(m.deleteButtonWrapper, { [m.resetButton]: "reset" === c.type }),
                    children: (0, t.jsx)(v.m, {
                        text: h,
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
function I(e) {
    let {
            variant: n,
            onClick: l,
            accessibleLabel: r,
            accessibleValue: s,
            renderPreview: o,
            showOverlayOnHover: u = !1,
            disabled: v = !1,
            buttonRef: I,
            affordance: x,
            errorMessageId: A,
            ...C
        } = e,
        k = "add" === x,
        y = a.useRef(null),
        { isHoveringOrFocusing: j } = (0, h.A)(y),
        N = j && !v,
        E = a.useRef(null),
        w = I ?? E,
        S =
            null != x && "add" !== x
                ? {
                      ...x,
                      onClick: () => {
                          x.onClick(), w.current?.focus();
                      },
                  }
                : void 0;
    return (0, t.jsx)(b, {
        ref: y,
        variant: n,
        disabled: v,
        isInteracting: N,
        deleteButton: S,
        hasError: null != A,
        children: (0, t.jsxs)(d.D, {
            innerRef: w,
            className: m.tileButton,
            "aria-label": f.intl.formatToPlainString(f.t["E+mIJ+"], { label: r, value: s }),
            onClick: v ? void 0 : l,
            "aria-disabled": v,
            "aria-invalid": null != A || void 0,
            "aria-describedby": A,
            "aria-errormessage": A,
            tabIndex: v ? -1 : 0,
            ...C,
            children: [
                (0, t.jsx)("div", { className: m.content, children: o(N) }),
                u && !v && (0, t.jsx)(p, {}),
                k &&
                    (0, t.jsx)("div", {
                        className: i()(m.iconContainer, {
                            [m.iconAlignCenter]: "square" === n || "full-height-bar" === n,
                            [m.iconAlignRight]: "bar" === n,
                        }),
                        children: (0, t.jsx)(c.U, {
                            size: "md",
                            color: g.A.colors.ICON_STRONG,
                            secondaryColor: g.A.colors.ICON_INVERT,
                            className: m.overlayIcon,
                        }),
                    }),
            ],
        }),
    });
}
