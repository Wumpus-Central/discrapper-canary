var a = t(477900),
    n = t(582128),
    i = t(503698),
    s = t.n(i),
    r = t(461771),
    o = t(116903),
    u = t(837381),
    c = t(602034),
    d = t(172218),
    b = t(900797),
    p = t(847374),
    h = t(452027),
    f = t(862301),
    m = t(939249),
    v = t(834730),
    x = t(789645),
    g = t(315710),
    S = t(516521),
    C = t(628284),
    j = t(691885),
    y = t(863610),
    w = t(265872),
    k = t(765671),
    N = t(194498),
    O = t(792996),
    E = t(980148);
function D(e) {
    return e?.label;
}
function I(e) {
    return e.map((e) => D(e)).join(", ");
}
function L(e) {
    let {
            options: l,
            placeholder: t = O.intl.string(O.t.XqMe3N),
            className: i,
            isDisabled: r = !1,
            maxVisibleItems: o = 7,
            autoFocus: u = !1,
            popoutWidth: c,
            clearable: g = !1,
            size: S = "md",
            variant: C = "filled",
            onClose: j,
            onOpen: N,
            renderOptionLabel: L = D,
            renderOptionValue: R = I,
            popoutClassName: z,
            popoutPosition: M = "bottom",
            popoutLayerContext: V,
            optionClassName: q,
            closeOnSelect: K,
            select: A,
            isSelected: F,
            serialize: T,
            clear: W,
            hideIcon: $ = !1,
            isProcessing: G = !1,
            "aria-label": U,
            "aria-labelledby": B,
            label: H,
            description: X,
            helperText: Y,
            errorMessage: _,
            successMessage: Z,
            layout: J = "vertical",
        } = e,
        [Q, ee] = n.useState(!1),
        { ref: el, width: et, height: ea } = (0, k.Ay)();
    n.useLayoutEffect(() => {
        r && ee(!1);
    }, [r]);
    let en = n.useCallback(
            (e) => {
                Q === e || r || (ee(e), e ? N?.() : j?.());
            },
            [r, j, N, Q],
        ),
        ei = n.useCallback(
            (e) => {
                Q && !e && en(!1);
            },
            [en, Q],
        ),
        es = (0, d.K)(ei),
        er = n.useCallback(
            (e) => {
                (A(e), K && el.current?.focus());
            },
            [A, K, el],
        ),
        eo = n.useCallback(
            (e) => {
                (e.stopPropagation(), W?.());
            },
            [W],
        ),
        eu = l.filter((e) => F(e.value));
    return (
        n.useLayoutEffect(() => {
            u && el.current?.focus();
        }, [u, el]),
        (0, a.jsx)(w.Y, {
            targetElementRef: el,
            spacing: 0,
            animation: w.Y.Animation.NONE,
            shouldShow: Q,
            onRequestOpen: () => {
                en(!0);
            },
            onRequestClose: () => {
                en(!1);
            },
            renderPopout: (e) => {
                let { closePopout: t, position: n, updatePosition: i } = e;
                return (0, a.jsx)(P, {
                    className: z,
                    closeOnSelect: K,
                    maxVisibleItems: o,
                    width: "auto" === c ? void 0 : (c ?? et),
                    isSelected: F,
                    closePopout: t,
                    buttonHeight: ea ?? 0,
                    buttonRef: el,
                    onSelect: er,
                    options: l,
                    serialize: T,
                    renderOptionLabel: L,
                    optionClassName: q,
                    updatePosition: i,
                    popoutPosition: n,
                });
            },
            position: M,
            layerContext: V,
            children: (e, l) => {
                let { onClick: n, onKeyDown: o, ...u } = e,
                    { isShown: c } = l,
                    d = c ? b.ChevronSmallUpIcon : p.ChevronSmallDownIcon;
                return (0, a.jsx)(h.D, {
                    label: H,
                    description: X,
                    helperText: Y,
                    errorMessage: _,
                    successMessage: Z,
                    layout: J,
                    children: (e) =>
                        (0, a.jsxs)(f.F, {
                            as: m.D,
                            tag: "div",
                            role: "button",
                            id: e?.controlId,
                            "aria-describedby": e?.describedById,
                            "aria-errormessage": e?.errorMessageId,
                            "aria-invalid": e?.errorMessageId != null,
                            disabled: r,
                            "aria-busy": G,
                            "aria-disabled": r,
                            fullWidth: "horizontal" === J,
                            innerRef: (e) => {
                                ((el.current = e), (es.current = e));
                            },
                            onClick: r
                                ? void 0
                                : (e) => {
                                      (n(e), en(!Q));
                                  },
                            onKeyDown: (e) => {
                                ("ArrowDown" === e.key
                                    ? en(!0)
                                    : "Escape" === e.key && c && (e.stopPropagation(), en(!1)),
                                    o(e));
                            },
                            ...u,
                            containerClassName: s()(E.kL, i),
                            "data-size": S,
                            "data-variant": C,
                            className: E.Lt,
                            "aria-haspopup": "listbox",
                            "aria-expanded": c,
                            "aria-label": U,
                            "aria-labelledby": B,
                            children: [
                                eu.length > 0
                                    ? (0, a.jsx)(v.E, { className: E.Uq, variant: "body-md/medium", children: R(eu) })
                                    : (0, a.jsx)("span", { className: E.qf, children: t }),
                                (0, a.jsx)("div", {
                                    className: E.Pt,
                                    children: G
                                        ? (0, a.jsx)(y.n, { dotRadius: 3.5, themed: !0 })
                                        : (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  g
                                                      ? (0, a.jsx)(m.D, {
                                                            role: "button",
                                                            "aria-disabled": r,
                                                            onClick: eo,
                                                            "aria-label": O.intl.string(O.t.VkKicb),
                                                            children: (0, a.jsx)(x.XSmallIcon, {
                                                                size: "xs",
                                                                color: "currentColor",
                                                                className: E.IU,
                                                            }),
                                                        })
                                                      : null,
                                                  $ ? null : (0, a.jsx)(d, { color: "currentColor", size: "sm" }),
                                              ],
                                          }),
                                }),
                            ],
                        }),
                });
            },
        })
    );
}
function P(e) {
    let {
            className: l,
            onSelect: t,
            closePopout: i,
            closeOnSelect: d = !0,
            isSelected: b,
            options: p,
            width: h,
            maxVisibleItems: f,
            renderOptionLabel: m,
            serialize: v,
            optionClassName: x,
            buttonHeight: C,
            buttonRef: j,
            updatePosition: y,
            popoutPosition: w,
        } = e,
        [k, O] = n.useState(0),
        D = n.useRef(null),
        I = n.useId(),
        L = (0, o.Ay)({ id: I, async scrollToEnd() {}, async scrollToStart() {}, isEnabled: !0, wrap: !0 }),
        [P, z] = n.useState(null);
    n.useEffect(
        () =>
            (0, r.e)(I, (e) => {
                z(e);
            }),
        [I],
    );
    let M = n.useRef(null);
    ((0, g.tj)(M, { returnRef: j }),
        n.useLayoutEffect(() => {
            M.current?.focus();
        }, []),
        n.useEffect(() => {
            C > 0 && y();
        }, [C, y]),
        (0, N.A)(y),
        n.useLayoutEffect(() => {
            let e = D.current?.getBoundingClientRect()?.height;
            null != e && O(e);
        }, [f, p.length]),
        n.useEffect(() => {
            y();
        }, [y, k]));
    let V = n.useCallback(
            (e, l) => {
                (t(e), d && !l && i());
            },
            [i, t, d],
        ),
        q = n.useMemo(
            () =>
                p.map((e, l) =>
                    (0, a.jsx)(
                        R,
                        {
                            isSelected: b(e.value),
                            value: e.value,
                            label: m(e),
                            onSelect: V,
                            className: x,
                            isDisabled: e.disabled,
                            preventCloseOnSelect: e.preventCloseOnSelect,
                            serialize: v,
                        },
                        e.key ?? l,
                    ),
                ),
            [V, b, x, p, m, v],
        ),
        K = n.useMemo(
            () =>
                p
                    .slice(0, f)
                    .map((e, l) =>
                        (0, a.jsx)(
                            R,
                            {
                                isSelected: b(e.value),
                                value: e.value,
                                label: m(e),
                                onSelect: V,
                                className: x,
                                isDisabled: e.disabled,
                                preventCloseOnSelect: e.preventCloseOnSelect,
                                serialize: v,
                                omitId: !0,
                            },
                            e.key ?? l,
                        ),
                    ),
            [V, b, f, x, p, m, v],
        ),
        A = p.length <= f ? S.zC : S.Ch;
    return (0, a.jsx)(u.hD, {
        navigator: L,
        children: (0, a.jsx)(u.PR, {
            children: (e) => {
                let { ref: t, onKeyDown: n, ...r } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(A, {
                            className: s()(E.SW, l, { [E.O3]: "top" === w }),
                            style: { width: h, maxHeight: k },
                            ref: (e) => {
                                let l = e?.getScrollerNode() ?? null;
                                ((t.current = l), (M.current = l));
                            },
                            ...r,
                            onKeyDown: (e) => {
                                if ("Escape" === e.key) {
                                    (e.stopPropagation(), e.preventDefault(), i());
                                    return;
                                }
                                n(e);
                            },
                            "aria-activedescendant": null != P ? (0, c.t$)(I, P) : void 0,
                            role: "listbox",
                            children: q,
                        }),
                        (0, a.jsx)("div", { "aria-hidden": !0, ref: D, className: E.PG, children: K }),
                    ],
                });
            },
        }),
    });
}
function R(e) {
    let {
            className: l,
            value: t,
            label: n,
            onSelect: i,
            isSelected: r,
            isDisabled: o,
            preventCloseOnSelect: c,
            serialize: d,
            omitId: b = !1,
        } = e,
        p = (0, u.rm)(d(t));
    return (0, a.jsxs)(m.D, {
        focusProps: { enabled: !1 },
        className: s()(E.uK, l, { [E.IZ]: o }),
        onClick: () => !o && i(t, c),
        ...p,
        id: b ? void 0 : p["data-list-item-id"],
        "aria-selected": r,
        "aria-disabled": o,
        role: "option",
        children: [
            n,
            r &&
                (0, a.jsx)(C.CircleCheckIcon, {
                    size: "custom",
                    color: "currentColor",
                    secondaryColor: "white",
                    className: E.Dt,
                    width: 20,
                    height: 20,
                }),
        ],
    });
}
t.d(
    l,
    {},
    {
        $l: function (e, l) {
            return l.has(e) ? { newValues: new Set(), updated: !0 } : { newValues: new Set([e]), updated: !0 };
        },
        Ev: function (e) {
            let { value: l, onChange: t, onSelectInteraction: a, serialize: n = (e) => String(e) } = e;
            return {
                select: (e) => {
                    let { newValues: n, updated: i } = a(e, l);
                    i && t(n);
                },
                isSelected: (e) => l?.has(e) ?? !1,
                clear: () => t(new Set()),
                serialize: n,
            };
        },
        M8: function (e, l) {
            let t = new Set(l);
            return (t.has(e) ? t.delete(e) : t.add(e), { newValues: t, updated: !0 });
        },
        Pw: function (e) {
            let { renderLeading: l, renderTrailing: t, ...n } = e,
                {
                    id: i,
                    serialize: s,
                    options: r,
                    select: o,
                    autoFocus: u,
                    required: c,
                    isDisabled: d,
                    isProcessing: b,
                    clearable: p,
                    closeOnSelect: f,
                    maxVisibleItems: m,
                    placeholder: v,
                    "aria-label": x,
                    variant: g,
                    isSelected: S,
                    renderOptionLabel: C,
                } = n,
                { fieldProps: y } = (0, h.n)(n);
            if ("text-only" !== g && null == C) {
                let e = null == y.label && null != x;
                return (0, a.jsx)(j.l, {
                    id: i,
                    selectionMode: "single",
                    onSelectionChange: (e) => {
                        o(e);
                    },
                    value: r?.find((e) => S?.(e.value))?.value ?? void 0,
                    options: r,
                    formatOption: (e) => {
                        let { key: a, value: n, label: i, disabled: r } = e;
                        return {
                            id: a ?? s(n),
                            value: n,
                            label: i,
                            disabled: r,
                            leading: null != l ? l(e) : void 0,
                            trailing: null != t ? t(e) : void 0,
                        };
                    },
                    fullWidth: !0,
                    autoFocus: u,
                    required: c,
                    disabled: d,
                    loading: b,
                    clearable: p,
                    closeOnSelect: f,
                    maxOptionsVisible: m,
                    placeholder: v,
                    ...y,
                    label: e ? x : y.label,
                    hideLabel: !0 === y.hideLabel || e,
                });
            }
            return (0, a.jsx)(L, {
                ...n,
                renderOptionLabel:
                    C ??
                    (function () {
                        if (null != l || null != t)
                            return (e) => (0, a.jsxs)("div", { className: E.G$, children: [l?.(e), e.label, t?.(e)] });
                    })(),
            });
        },
        Te: function (e) {
            let { renderLeading: l, renderTrailing: t, value: n, onChange: i, ...s } = e,
                r = (function (e) {
                    let { value: l, onChange: t, serialize: a = (e) => String(e) } = e;
                    return { select: (e) => t(e), isSelected: (e) => e === l, clear: () => t(null), serialize: a };
                })({ value: n, onChange: i }),
                {
                    id: o,
                    options: u,
                    autoFocus: c,
                    required: d,
                    isDisabled: b,
                    isProcessing: p,
                    clearable: f,
                    closeOnSelect: m = !0,
                    maxVisibleItems: v,
                    "aria-label": x,
                    placeholder: g,
                    variant: S,
                    renderOptionLabel: C,
                } = s,
                { fieldProps: y } = (0, h.n)(s);
            if ("text-only" !== S && null == C) {
                let e = null == y.label && null != x;
                return (0, a.jsx)(j.l, {
                    id: o,
                    selectionMode: "single",
                    onSelectionChange: (e) => {
                        i(e);
                    },
                    options: u,
                    formatOption: (e) => {
                        let { key: a, value: n, label: i, disabled: s } = e;
                        return {
                            id: a ?? r.serialize(n),
                            value: n,
                            label: i,
                            disabled: s,
                            leading: null != l ? l(e) : void 0,
                            trailing: null != t ? t(e) : void 0,
                        };
                    },
                    value: n,
                    fullWidth: !0,
                    autoFocus: c,
                    required: d,
                    disabled: b,
                    loading: p,
                    clearable: f,
                    closeOnSelect: m,
                    maxOptionsVisible: v,
                    placeholder: g,
                    ...y,
                    label: e ? x : y.label,
                    hideLabel: !0 === y.hideLabel || e,
                });
            }
            return (0, a.jsx)(L, {
                ...s,
                ...r,
                renderOptionLabel:
                    C ??
                    (function () {
                        if (null != l || null != t)
                            return (e) => (0, a.jsxs)("div", { className: E.G$, children: [l?.(e), e.label, t?.(e)] });
                    })(),
            });
        },
        lS: function (e, l) {
            return l.has(e) ? { newValues: l, updated: !1 } : { newValues: new Set([e]), updated: !0 };
        },
    },
);
