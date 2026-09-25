l.d(n, { A: () => m, Y: () => b });
var a = l(477900),
    t = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(866665),
    u = l(408278),
    o = l(241326),
    d = l(417270),
    c = l(939249),
    g = l(245604),
    v = l(713517),
    f = l(375708),
    h = l(779447);
function p() {
    return (0, a.jsx)("div", { className: h.overlay });
}
let b = t.forwardRef(function (e, n) {
    let { variant: l, disabled: t = !1, isInteracting: r = !1, children: c, deleteButton: g, hasError: v = !1 } = e,
        p = g?.type === "remove" ? f.intl.string(f.t.N86XcP) : f.intl.string(f.t.wgIPss);
    return (0, a.jsxs)("div", {
        ref: n,
        className: i()(h.tile, h[l], { [h.disabled]: t, [h.isInteracting]: r, [h.hasError]: v }),
        children: [
            c,
            !t &&
                null != g &&
                (0, a.jsx)("div", {
                    className: i()(h.deleteButtonWrapper, { [h.resetButton]: "reset" === g.type }),
                    children: (0, a.jsx)(s.m, {
                        text: p,
                        ariaHidden: !0,
                        children: (0, a.jsx)(u.K, {
                            "aria-label": g.accessibleLabel,
                            icon: "remove" === g.type ? o.TrashIcon : d.RetryIcon,
                            size: "sm",
                            variant: "overlay-secondary",
                            onClick: g.onClick,
                        }),
                    }),
                }),
        ],
    });
});
function m(e) {
    let {
            variant: n,
            onClick: l,
            accessibleLabel: r,
            accessibleValue: s,
            renderPreview: u,
            showOverlayOnHover: o = !1,
            disabled: d = !1,
            buttonRef: m,
            affordance: A,
            errorMessageId: I,
            ...C
        } = e,
        y = "add" === A,
        k = t.useRef(null),
        { isHoveringOrFocusing: x } = (0, v.A)(k),
        N = x && !d,
        j = t.useRef(null),
        P = m ?? j,
        E =
            null != A && "add" !== A
                ? {
                      ...A,
                      onClick: () => {
                          (A.onClick(), P.current?.focus());
                      },
                  }
                : void 0;
    return (0, a.jsx)(b, {
        ref: k,
        variant: n,
        disabled: d,
        isInteracting: N,
        deleteButton: E,
        hasError: null != I,
        children: (0, a.jsxs)(c.D, {
            innerRef: P,
            className: h.tileButton,
            "aria-label": f.intl.formatToPlainString(f.t["E+mIJ+"], { label: r, value: s }),
            onClick: d ? void 0 : l,
            "aria-disabled": d,
            "aria-invalid": null != I || void 0,
            "aria-describedby": I,
            "aria-errormessage": I,
            tabIndex: d ? -1 : 0,
            ...C,
            children: [
                (0, a.jsx)("div", { className: h.content, children: u(N) }),
                o && !d && (0, a.jsx)(p, {}),
                y &&
                    (0, a.jsx)("div", {
                        className: i()(h.iconContainer, {
                            [h.iconAlignCenter]: "square" === n || "full-height-bar" === n,
                            [h.iconAlignRight]: "bar" === n,
                        }),
                        children: (0, a.jsx)(g.U, {
                            size: "md",
                            className: h.overlayIcon,
                            colorClass: h.overlayIconPrimaryColor,
                            secondaryColorClass: h.overlayIconSecondaryColor,
                        }),
                    }),
            ],
        }),
    });
}
