t.d(l, { $l: () => P, Ev: () => D, M8: () => L, Pw: () => A, Te: () => K, lS: () => R });
var a = t(477900),
    n = t(582128),
    i = t(503698),
    s = t.n(i),
    r = t(461771),
    o = t(887129),
    u = t(837381),
    d = t(602034),
    c = t(172218),
    b = t(900797),
    p = t(847374),
    h = t(452027),
    f = t(862301),
    m = t(939249),
    x = t(834730),
    g = t(789645),
    v = t(315710),
    S = t(689175),
    j = t(628284),
    y = t(691885),
    C = t(863610),
    w = t(922016),
    N = t(765671),
    k = t(194498),
    O = t(375708),
    E = t(980148);
function D(e) {
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
}
function L(e, l) {
    let t = new Set(l);
    return t.has(e) ? t.delete(e) : t.add(e), { newValues: t, updated: !0 };
}
function P(e, l) {
    return l.has(e) ? { newValues: new Set(), updated: !0 } : { newValues: new Set([e]), updated: !0 };
}
function R(e, l) {
    return l.has(e) ? { newValues: l, updated: !1 } : { newValues: new Set([e]), updated: !0 };
}
function z(e) {
    return e?.label;
}
function M(e) {
    return e.map((e) => z(e)).join(", ");
}
function I(e) {
    let {
            options: l,
            placeholder: t = O.intl.string(O.t.XqMe3N),
            className: i,
            isDisabled: r = !1,
            maxVisibleItems: o = 7,
            autoFocus: u = !1,
            popoutWidth: d,
            clearable: v = !1,
            size: S = "md",
            variant: j = "filled",
            onClose: y,
            onOpen: k,
            renderOptionLabel: D = z,
            renderOptionValue: L = M,
            popoutClassName: P,
            popoutPosition: R = "bottom",
            popoutLayerContext: I,
            optionClassName: q,
            closeOnSelect: K,
            select: A,
            isSelected: F,
            serialize: T,
            clear: W,
            hideIcon: $ = !1,
            isProcessing: G = !1,
            "aria-label": B,
            "aria-labelledby": H,
            label: U,
            description: Y,
            helperText: _,
            errorMessage: X,
            successMessage: Z,
            layout: J = "vertical",
        } = e,
        [Q, ee] = n.useState(!1),
        { ref: el, width: et, height: ea } = (0, N.Ay)();
    n.useLayoutEffect(() => {
        r && ee(!1);
    }, [r]);
    let en = n.useCallback(
            (e) => {
                Q === e || r || (ee(e), e ? k?.() : y?.());
            },
            [r, y, k, Q],
        ),
        ei = n.useCallback(
            (e) => {
                Q && !e && en(!1);
            },
            [en, Q],
        ),
        es = (0, c.K)(ei),
        er = n.useCallback(
            (e) => {
                A(e), K && el.current?.focus();
            },
            [A, K, el],
        ),
        eo = n.useCallback(
            (e) => {
                e.stopPropagation(), W?.();
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
                return (0, a.jsx)(V, {
                    className: P,
                    closeOnSelect: K,
                    maxVisibleItems: o,
                    width: "auto" === d ? void 0 : (d ?? et),
                    isSelected: F,
                    closePopout: t,
                    buttonHeight: ea ?? 0,
                    buttonRef: el,
                    onSelect: er,
                    options: l,
                    serialize: T,
                    renderOptionLabel: D,
                    optionClassName: q,
                    updatePosition: i,
                    popoutPosition: n,
                });
            },
            position: R,
            layerContext: I,
            children: (e, l) => {
                let { onClick: n, onKeyDown: o, ...u } = e,
                    { isShown: d } = l,
                    c = d ? b.t : p.a;
                return (0, a.jsx)(h.D, {
                    label: U,
                    description: Y,
                    helperText: _,
                    errorMessage: X,
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
                                (el.current = e), (es.current = e);
                            },
                            onClick: r
                                ? void 0
                                : (e) => {
                                      n(e), en(!Q);
                                  },
                            onKeyDown: (e) => {
                                "ArrowDown" === e.key
                                    ? en(!0)
                                    : "Escape" === e.key && d && (e.stopPropagation(), en(!1)),
                                    o(e);
                            },
                            ...u,
                            containerClassName: s()(E.kL, i),
                            "data-size": S,
                            "data-variant": j,
                            className: E.Lt,
                            "aria-haspopup": "listbox",
                            "aria-expanded": d,
                            "aria-label": B,
                            "aria-labelledby": H,
                            children: [
                                eu.length > 0
                                    ? (0, a.jsx)(x.E, { className: E.Uq, variant: "text-md/medium", children: L(eu) })
                                    : (0, a.jsx)("span", { className: E.qf, children: t }),
                                (0, a.jsx)("div", {
                                    className: E.Pt,
                                    children: G
                                        ? (0, a.jsx)(C.n, { dotRadius: 3.5, themed: !0 })
                                        : (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  v
                                                      ? (0, a.jsx)(m.D, {
                                                            role: "button",
                                                            "aria-disabled": r,
                                                            onClick: eo,
                                                            "aria-label": O.intl.string(O.t.VkKicb),
                                                            children: (0, a.jsx)(g.P, {
                                                                size: "xs",
                                                                color: "currentColor",
                                                                className: E.IU,
                                                            }),
                                                        })
                                                      : null,
                                                  $ ? null : (0, a.jsx)(c, { color: "currentColor", size: "sm" }),
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
function V(e) {
    let {
            className: l,
            onSelect: t,
            closePopout: i,
            closeOnSelect: c = !0,
            isSelected: b,
            options: p,
            width: h,
            maxVisibleItems: f,
            renderOptionLabel: m,
            serialize: x,
            optionClassName: g,
            buttonHeight: j,
            buttonRef: y,
            updatePosition: C,
            popoutPosition: w,
        } = e,
        [N, O] = n.useState(0),
        D = n.useRef(null),
        L = n.useId(),
        P = (0, o.Ay)({ id: L, async scrollToEnd() {}, async scrollToStart() {}, isEnabled: !0, wrap: !0 }),
        [R, z] = n.useState(null);
    n.useEffect(
        () =>
            (0, r.e)(L, (e) => {
                z(e);
            }),
        [L],
    );
    let M = n.useRef(null);
    (0, v.tj)(M, { returnRef: y }),
        n.useLayoutEffect(() => {
            M.current?.focus();
        }, []),
        n.useEffect(() => {
            j > 0 && C();
        }, [j, C]),
        (0, k.A)(C),
        n.useLayoutEffect(() => {
            let e = D.current?.getBoundingClientRect()?.height;
            null != e && O(e);
        }, [f, p.length]),
        n.useEffect(() => {
            C();
        }, [C, N]);
    let I = n.useCallback(
            (e, l) => {
                t(e), c && !l && i();
            },
            [i, t, c],
        ),
        V = n.useMemo(
            () =>
                p.map((e, l) =>
                    (0, a.jsx)(
                        q,
                        {
                            isSelected: b(e.value),
                            value: e.value,
                            label: m(e),
                            onSelect: I,
                            className: g,
                            isDisabled: e.disabled,
                            preventCloseOnSelect: e.preventCloseOnSelect,
                            serialize: x,
                        },
                        e.key ?? l,
                    ),
                ),
            [I, b, g, p, m, x],
        ),
        K = n.useMemo(
            () =>
                p
                    .slice(0, f)
                    .map((e, l) =>
                        (0, a.jsx)(
                            q,
                            {
                                isSelected: b(e.value),
                                value: e.value,
                                label: m(e),
                                onSelect: I,
                                className: g,
                                isDisabled: e.disabled,
                                preventCloseOnSelect: e.preventCloseOnSelect,
                                serialize: x,
                                omitId: !0,
                            },
                            e.key ?? l,
                        ),
                    ),
            [I, b, f, g, p, m, x],
        ),
        A = p.length <= f ? S.zC : S.Ch;
    return (0, a.jsx)(u.hD, {
        navigator: P,
        children: (0, a.jsx)(u.PR, {
            children: (e) => {
                let { ref: t, onKeyDown: n, ...r } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(A, {
                            className: s()(E.SW, l, { [E.O3]: "top" === w }),
                            style: { width: h, maxHeight: N },
                            ref: (e) => {
                                let l = e?.getScrollerNode() ?? null;
                                (t.current = l), (M.current = l);
                            },
                            ...r,
                            onKeyDown: (e) => {
                                if ("Escape" === e.key) {
                                    e.stopPropagation(), e.preventDefault(), i();
                                    return;
                                }
                                n(e);
                            },
                            "aria-activedescendant": null != R ? (0, d.t$)(L, R) : void 0,
                            role: "listbox",
                            children: V,
                        }),
                        (0, a.jsx)("div", { "aria-hidden": !0, ref: D, className: E.PG, children: K }),
                    ],
                });
            },
        }),
    });
}
function q(e) {
    let {
            className: l,
            value: t,
            label: n,
            onSelect: i,
            isSelected: r,
            isDisabled: o,
            preventCloseOnSelect: d,
            serialize: c,
            omitId: b = !1,
        } = e,
        p = (0, u.rm)(c(t));
    return (0, a.jsxs)(m.D, {
        focusProps: { enabled: !1 },
        className: s()(E.uK, l, { [E.IZ]: o }),
        onClick: () => !o && i(t, d),
        ...p,
        id: b ? void 0 : p["data-list-item-id"],
        "aria-selected": r,
        "aria-disabled": o,
        role: "option",
        children: [
            n,
            r &&
                (0, a.jsx)(j.y, {
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
function K(e) {
    let { renderLeading: l, renderTrailing: t, value: n, onChange: i, ...s } = e,
        r = (function (e) {
            let { value: l, onChange: t, serialize: a = (e) => String(e) } = e;
            return { select: (e) => t(e), isSelected: (e) => e === l, clear: () => t(null), serialize: a };
        })({ value: n, onChange: i }),
        {
            id: o,
            options: u,
            autoFocus: d,
            required: c,
            isDisabled: b,
            isProcessing: p,
            clearable: f,
            closeOnSelect: m = !0,
            maxVisibleItems: x,
            "aria-label": g,
            placeholder: v,
            variant: S,
            renderOptionLabel: j,
        } = s,
        { fieldProps: C } = (0, h.n)(s);
    if ("text-only" !== S && null == j) {
        let e = null == C.label && null != g;
        return (0, a.jsx)(y.l, {
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
            autoFocus: d,
            required: c,
            disabled: b,
            loading: p,
            clearable: f,
            closeOnSelect: m,
            maxOptionsVisible: x,
            placeholder: v,
            ...C,
            label: e ? g : C.label,
            hideLabel: !0 === C.hideLabel || e,
        });
    }
    return (0, a.jsx)(I, {
        ...s,
        ...r,
        renderOptionLabel:
            j ??
            (function () {
                if (null != l || null != t)
                    return (e) => (0, a.jsxs)("div", { className: E.G$, children: [l?.(e), e.label, t?.(e)] });
            })(),
    });
}
function A(e) {
    let { renderLeading: l, renderTrailing: t, ...n } = e,
        {
            id: i,
            serialize: s,
            options: r,
            select: o,
            autoFocus: u,
            required: d,
            isDisabled: c,
            isProcessing: b,
            clearable: p,
            closeOnSelect: f,
            maxVisibleItems: m,
            placeholder: x,
            "aria-label": g,
            variant: v,
            isSelected: S,
            renderOptionLabel: j,
        } = n,
        { fieldProps: C } = (0, h.n)(n);
    if ("text-only" !== v && null == j) {
        let e = null == C.label && null != g;
        return (0, a.jsx)(y.l, {
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
            required: d,
            disabled: c,
            loading: b,
            clearable: p,
            closeOnSelect: f,
            maxOptionsVisible: m,
            placeholder: x,
            ...C,
            label: e ? g : C.label,
            hideLabel: !0 === C.hideLabel || e,
        });
    }
    return (0, a.jsx)(I, {
        ...n,
        renderOptionLabel:
            j ??
            (function () {
                if (null != l || null != t)
                    return (e) => (0, a.jsxs)("div", { className: E.G$, children: [l?.(e), e.label, t?.(e)] });
            })(),
    });
}
