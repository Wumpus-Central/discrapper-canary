l.d(n, { A: () => A, Y: () => m });
var t = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(140735),
    u = l(866665),
    o = l(408278),
    d = l(241326),
    c = l(417270),
    g = l(939249),
    v = l(245604),
    f = l(713517),
    h = l(105292),
    p = l(779447);
function b() {
    return (0, t.jsx)("div", { className: p.overlay });
}
function m(e) {
    let {
            fieldA11yLabel: n,
            variant: l,
            disabled: a = !1,
            isInteracting: r = !1,
            children: g,
            deleteButton: v,
            hasError: f = !1,
            ref: b,
        } = e,
        m = v?.type === "remove" ? h.intl.string(h.t.N86XcP) : h.intl.string(h.t.wgIPss);
    return (0, t.jsxs)("fieldset", {
        ref: b,
        className: i()(p.tile, p[l], { [p.disabled]: a, [p.isInteracting]: r, [p.hasError]: f }),
        children: [
            (0, t.jsx)(s.A, { tag: "legend", children: n }),
            g,
            !a &&
                null != v &&
                (0, t.jsx)("div", {
                    className: i()(p.deleteButtonWrapper, { [p.resetButton]: "reset" === v.type }),
                    children: (0, t.jsx)(u.m, {
                        text: m,
                        ariaHidden: !0,
                        children: (0, t.jsx)(o.K, {
                            "aria-label": v.accessibleLabel,
                            icon: "remove" === v.type ? d.TrashIcon : c.RetryIcon,
                            size: "sm",
                            variant: "overlay-secondary",
                            onClick: v.onClick,
                        }),
                    }),
                }),
        ],
    });
}
function A(e) {
    let {
            variant: n,
            onClick: l,
            fieldA11yLabel: r,
            editButtonA11yLabel: u,
            currentValueA11yLabel: o,
            renderPreview: d,
            showOverlayOnHover: c = !1,
            disabled: A = !1,
            buttonRef: I,
            affordance: y,
            errorMessageId: C,
            ...k
        } = e,
        x = "add" === y,
        N = a.useRef(null),
        { isHoveringOrFocusing: j } = (0, f.A)(N),
        P = j && !A,
        E = a.useRef(null),
        w = I ?? E,
        R = a.useId(),
        S = null != C ? `${R} ${C}` : R,
        D =
            null != y && "add" !== y
                ? {
                      ...y,
                      onClick: () => {
                          (y.onClick(), w.current?.focus());
                      },
                  }
                : void 0;
    return (0, t.jsx)(m, {
        ref: N,
        fieldA11yLabel: r,
        variant: n,
        disabled: A,
        isInteracting: P,
        deleteButton: D,
        hasError: null != C,
        children: (0, t.jsxs)("div", {
            className: p.tileInner,
            children: [
                (0, t.jsx)(s.A, { id: R, children: h.intl.formatToPlainString(h.t.kzUdSh, { value: o }) }),
                (0, t.jsx)("div", { className: p.content, children: d(P) }),
                (0, t.jsx)(g.D, {
                    innerRef: w,
                    className: p.tileButton,
                    "aria-label": u,
                    onClick: A ? void 0 : l,
                    "aria-disabled": A,
                    "aria-invalid": null != C || void 0,
                    "aria-describedby": S,
                    "aria-errormessage": C,
                    tabIndex: A ? -1 : 0,
                    ...k,
                }),
                c && !A && (0, t.jsx)(b, {}),
                x &&
                    (0, t.jsx)("div", {
                        className: i()(p.iconContainer, {
                            [p.iconAlignCenter]: "square" === n || "full-height-bar" === n,
                            [p.iconAlignRight]: "bar" === n,
                        }),
                        children: (0, t.jsx)(v.U, {
                            size: "md",
                            className: p.overlayIcon,
                            colorClass: p.overlayIconPrimaryColor,
                            secondaryColorClass: p.overlayIconSecondaryColor,
                        }),
                    }),
            ],
        }),
    });
}
