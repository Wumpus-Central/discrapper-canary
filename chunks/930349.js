l.d(n, { A: () => b, Y: () => m });
var t = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(408278),
    u = l(241326),
    o = l(417270),
    d = l(939249),
    c = l(245604),
    g = l(866665),
    v = l(713517),
    f = l(375708),
    h = l(779447);
function p() {
    return (0, t.jsx)("div", { className: h.overlay });
}
let m = a.forwardRef(function (e, n) {
    let { variant: l, disabled: a = !1, isInteracting: r = !1, children: d, deleteButton: c, hasError: v = !1 } = e,
        p = c?.type === "remove" ? f.intl.string(f.t.N86XcP) : f.intl.string(f.t.wgIPss);
    return (0, t.jsxs)("div", {
        ref: n,
        className: i()(h.tile, h[l], { [h.disabled]: a, [h.isInteracting]: r, [h.hasError]: v }),
        children: [
            d,
            !a &&
                null != c &&
                (0, t.jsx)("div", {
                    className: i()(h.deleteButtonWrapper, { [h.resetButton]: "reset" === c.type }),
                    children: (0, t.jsx)(g.m, {
                        text: p,
                        ariaHidden: !0,
                        children: (0, t.jsx)(s.K, {
                            "aria-label": c.accessibleLabel,
                            icon: "remove" === c.type ? u.TrashIcon : o.RetryIcon,
                            size: "sm",
                            variant: "overlay-secondary",
                            onClick: c.onClick,
                        }),
                    }),
                }),
        ],
    });
});
function b(e) {
    let {
            variant: n,
            onClick: l,
            accessibleLabel: r,
            accessibleValue: s,
            renderPreview: u,
            showOverlayOnHover: o = !1,
            disabled: g = !1,
            buttonRef: b,
            affordance: A,
            errorMessageId: I,
            ...C
        } = e,
        x = "add" === A,
        y = a.useRef(null),
        { isHoveringOrFocusing: k } = (0, v.A)(y),
        N = k && !g,
        j = a.useRef(null),
        E = b ?? j,
        P =
            null != A && "add" !== A
                ? {
                      ...A,
                      onClick: () => {
                          A.onClick(), E.current?.focus();
                      },
                  }
                : void 0;
    return (0, t.jsx)(m, {
        ref: y,
        variant: n,
        disabled: g,
        isInteracting: N,
        deleteButton: P,
        hasError: null != I,
        children: (0, t.jsxs)(d.D, {
            innerRef: E,
            className: h.tileButton,
            "aria-label": f.intl.formatToPlainString(f.t["E+mIJ+"], { label: r, value: s }),
            onClick: g ? void 0 : l,
            "aria-disabled": g,
            "aria-invalid": null != I || void 0,
            "aria-describedby": I,
            "aria-errormessage": I,
            tabIndex: g ? -1 : 0,
            ...C,
            children: [
                (0, t.jsx)("div", { className: h.content, children: u(N) }),
                o && !g && (0, t.jsx)(p, {}),
                x &&
                    (0, t.jsx)("div", {
                        className: i()(h.iconContainer, {
                            [h.iconAlignCenter]: "square" === n || "full-height-bar" === n,
                            [h.iconAlignRight]: "bar" === n,
                        }),
                        children: (0, t.jsx)(c.U, {
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
