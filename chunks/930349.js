var t = l(477900),
    i = l(582128),
    a = l(503698),
    r = l.n(a),
    s = l(140735),
    u = l(866665),
    d = l(408278),
    o = l(241326),
    c = l(417270),
    g = l(939249),
    v = l(245604),
    f = l(713517),
    p = l(792996),
    h = l(779447);
function A() {
    return (0, t.jsx)("div", { className: h.overlay });
}
function b(e) {
    let {
            fieldA11yLabel: n,
            variant: l,
            disabled: i = !1,
            isInteracting: a = !1,
            children: g,
            deleteButton: v,
            hasError: f = !1,
            ref: A,
        } = e,
        b = v?.type === "remove" ? p.intl.string(p.t.N86XcP) : p.intl.string(p.t.wgIPss);
    return (0, t.jsxs)("fieldset", {
        ref: A,
        className: r()(h.tile, h[l], { [h.disabled]: i, [h.isInteracting]: a, [h.hasError]: f }),
        children: [
            (0, t.jsx)(s.A, { tag: "legend", children: n }),
            g,
            !i &&
                null != v &&
                (0, t.jsx)("div", {
                    className: r()(h.deleteButtonWrapper, { [h.resetButton]: "reset" === v.type }),
                    children: (0, t.jsx)(u.m, {
                        text: b,
                        ariaHidden: !0,
                        children: (0, t.jsx)(d.K, {
                            "aria-label": v.accessibleLabel,
                            icon: "remove" === v.type ? o.TrashIcon : c.RetryIcon,
                            size: "sm",
                            variant: "overlay-secondary",
                            onClick: v.onClick,
                        }),
                    }),
                }),
        ],
    });
}
l.d(
    n,
    {},
    {
        A: function (e) {
            let {
                    variant: n,
                    onClick: l,
                    fieldA11yLabel: a,
                    editButtonA11yLabel: u,
                    currentValueA11yLabel: d,
                    renderPreview: o,
                    showOverlayOnHover: c = !1,
                    disabled: m = !1,
                    buttonRef: I,
                    affordance: y,
                    errorMessageId: k,
                    ...C
                } = e,
                P = "add" === y,
                x = i.useRef(null),
                { isHoveringOrFocusing: N } = (0, f.A)(x),
                j = N && !m,
                R = i.useRef(null),
                w = I ?? R,
                S = i.useId(),
                L = null != k ? `${S} ${k}` : S,
                z =
                    null != y && "add" !== y
                        ? {
                              ...y,
                              onClick: () => {
                                  (y.onClick(), w.current?.focus());
                              },
                          }
                        : void 0;
            return (0, t.jsx)(b, {
                ref: x,
                fieldA11yLabel: a,
                variant: n,
                disabled: m,
                isInteracting: j,
                deleteButton: z,
                hasError: null != k,
                children: (0, t.jsxs)("div", {
                    className: h.tileInner,
                    children: [
                        (0, t.jsx)(s.A, { id: S, children: p.intl.formatToPlainString(p.t.kzUdSh, { value: d }) }),
                        (0, t.jsx)("div", { className: h.content, children: o(j) }),
                        (0, t.jsx)(g.D, {
                            innerRef: w,
                            className: h.tileButton,
                            "aria-label": u,
                            onClick: m ? void 0 : l,
                            "aria-disabled": m,
                            "aria-invalid": null != k || void 0,
                            "aria-describedby": L,
                            "aria-errormessage": k,
                            tabIndex: m ? -1 : 0,
                            ...C,
                        }),
                        c && !m && (0, t.jsx)(A, {}),
                        P &&
                            (0, t.jsx)("div", {
                                className: r()(h.iconContainer, {
                                    [h.iconAlignCenter]: "square" === n || "full-height-bar" === n,
                                    [h.iconAlignRight]: "bar" === n,
                                }),
                                children: (0, t.jsx)(v.CirclePlusIcon, {
                                    size: "md",
                                    className: h.overlayIcon,
                                    colorClass: h.overlayIconPrimaryColor,
                                    secondaryColorClass: h.overlayIconSecondaryColor,
                                }),
                            }),
                    ],
                }),
            });
        },
        Y: b,
    },
);
