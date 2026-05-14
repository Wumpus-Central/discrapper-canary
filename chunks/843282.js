t.d(l, { $l: () => L, Ev: () => O, M8: () => E, Pw: () => q, Te: () => I, lS: () => P });
var a = t(627968),
    n = t(64700),
    i = t(503698),
    r = t.n(i),
    s = t(887129),
    o = t(837381),
    u = t(172218),
    c = t(452027),
    d = t(862301),
    b = t(315710),
    h = t(689175),
    p = t(691885),
    f = t(922016),
    m = t(900797),
    x = t(847374),
    g = t(939249),
    v = t(834730),
    j = t(863610),
    y = t(789645),
    S = t(628284),
    C = t(765671),
    w = t(194498),
    N = t(375708),
    k = t(384267);
function O(e) {
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
function E(e, l) {
    let t = new Set(l);
    return t.has(e) ? t.delete(e) : t.add(e), { newValues: t, updated: !0 };
}
function L(e, l) {
    return l.has(e) ? { newValues: new Set(), updated: !0 } : { newValues: new Set([e]), updated: !0 };
}
function P(e, l) {
    return l.has(e) ? { newValues: l, updated: !1 } : { newValues: new Set([e]), updated: !0 };
}
function D(e) {
    return e?.label;
}
function z(e) {
    return e.map((e) => D(e)).join(", ");
}
function M(e) {
    let {
            options: l,
            placeholder: t = N.intl.string(N.t.XqMe3N),
            className: i,
            isDisabled: s = !1,
            maxVisibleItems: o = 7,
            autoFocus: b = !1,
            popoutWidth: h,
            clearable: p = !1,
            size: S = "md",
            variant: w = "filled",
            onClose: O,
            onOpen: E,
            renderOptionLabel: L = D,
            renderOptionValue: P = z,
            popoutClassName: M,
            popoutPosition: V = "bottom",
            popoutLayerContext: I,
            optionClassName: q,
            closeOnSelect: K,
            select: A,
            isSelected: F,
            serialize: T,
            clear: W,
            hideIcon: G = !1,
            isProcessing: $ = !1,
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
        { ref: el, width: et, height: ea } = (0, C.Ay)();
    n.useLayoutEffect(() => {
        s && ee(!1);
    }, [s]);
    let en = n.useCallback(
            (e) => {
                Q === e || s || (ee(e), e ? E?.() : O?.());
            },
            [s, O, E, Q],
        ),
        ei = n.useCallback(
            (e) => {
                Q && !e && en(!1);
            },
            [en, Q],
        ),
        er = (0, u.K)(ei),
        es = n.useCallback(
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
            b && el.current?.focus();
        }, [b, el]),
        (0, a.jsx)(f.Y, {
            targetElementRef: el,
            spacing: 0,
            animation: f.Y.Animation.NONE,
            shouldShow: Q,
            onRequestOpen: () => {
                en(!0);
            },
            onRequestClose: () => {
                en(!1);
            },
            renderPopout: (e) => {
                let { closePopout: t, position: n, updatePosition: i } = e;
                return (0, a.jsx)(R, {
                    className: M,
                    closeOnSelect: K,
                    maxVisibleItems: o,
                    width: "auto" === h ? void 0 : (h ?? et),
                    isSelected: F,
                    closePopout: t,
                    buttonHeight: ea ?? 0,
                    onSelect: es,
                    options: l,
                    serialize: T,
                    renderOptionLabel: L,
                    optionClassName: q,
                    updatePosition: i,
                    popoutPosition: n,
                });
            },
            position: V,
            layerContext: I,
            children: (e, l) => {
                let { onClick: n, onKeyDown: o, ...u } = e,
                    { isShown: b } = l,
                    h = b ? m.t : x.a;
                return (0, a.jsx)(c.D, {
                    label: U,
                    description: Y,
                    helperText: _,
                    errorMessage: X,
                    successMessage: Z,
                    layout: J,
                    children: (e) =>
                        (0, a.jsxs)(d.F, {
                            as: g.D,
                            tag: "div",
                            role: "button",
                            id: e?.controlId,
                            "aria-describedby": e?.describedById,
                            "aria-errormessage": e?.errorMessageId,
                            "aria-invalid": e?.errorMessageId != null,
                            disabled: s,
                            "aria-busy": $,
                            "aria-disabled": s,
                            fullWidth: "horizontal" === J,
                            innerRef: (e) => {
                                (el.current = e), (er.current = e);
                            },
                            onClick: s
                                ? void 0
                                : (e) => {
                                      n(e), en(!Q);
                                  },
                            onKeyDown: (e) => {
                                "ArrowDown" === e.key
                                    ? en(!0)
                                    : "Escape" === e.key && b && (e.stopPropagation(), en(!1)),
                                    o(e);
                            },
                            ...u,
                            containerClassName: r()(k.kL, i),
                            "data-size": S,
                            "data-variant": w,
                            className: k.Lt,
                            "aria-haspopup": "listbox",
                            "aria-expanded": b,
                            "aria-label": B,
                            "aria-labelledby": H,
                            children: [
                                eu.length > 0
                                    ? (0, a.jsx)(v.E, { className: k.Uq, variant: "text-md/medium", children: P(eu) })
                                    : (0, a.jsx)("span", { className: k.qf, children: t }),
                                (0, a.jsx)("div", {
                                    className: k.Pt,
                                    children: $
                                        ? (0, a.jsx)(j.n, { dotRadius: 3.5, themed: !0 })
                                        : (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  p
                                                      ? (0, a.jsx)(g.D, {
                                                            role: "button",
                                                            "aria-disabled": s,
                                                            onClick: eo,
                                                            "aria-label": N.intl.string(N.t.VkKicb),
                                                            children: (0, a.jsx)(y.P, {
                                                                size: "xs",
                                                                color: "currentColor",
                                                                className: k.IU,
                                                            }),
                                                        })
                                                      : null,
                                                  G ? null : (0, a.jsx)(h, { color: "currentColor", size: "sm" }),
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
function R(e) {
    let {
            className: l,
            onSelect: t,
            closePopout: i,
            closeOnSelect: u = !0,
            isSelected: c,
            options: d,
            width: p,
            maxVisibleItems: f,
            renderOptionLabel: m,
            serialize: x,
            optionClassName: g,
            buttonHeight: v,
            updatePosition: j,
            popoutPosition: y,
        } = e,
        [S, C] = n.useState(0),
        N = n.useRef(null),
        O = n.useId(),
        E = (0, s.Ay)({ id: O, async scrollToEnd() {}, async scrollToStart() {}, isEnabled: !0, wrap: !0 }),
        L = n.useRef(null);
    (0, b.t)(L),
        n.useLayoutEffect(() => {
            L.current?.focus();
        }, []),
        n.useEffect(() => {
            v > 0 && j();
        }, [v, j]),
        (0, w.A)(j),
        n.useLayoutEffect(() => {
            let e = N.current?.getBoundingClientRect()?.height;
            null != e && C(e);
        }, [f, d.length]),
        n.useEffect(() => {
            j();
        }, [j, S]);
    let P = n.useCallback(
            (e, l) => {
                t(e), u && !l && i();
            },
            [i, t, u],
        ),
        D = n.useMemo(
            () =>
                d.map((e, l) =>
                    (0, a.jsx)(
                        V,
                        {
                            isSelected: c(e.value),
                            value: e.value,
                            label: m(e),
                            onSelect: P,
                            className: g,
                            isDisabled: e.disabled,
                            preventCloseOnSelect: e.preventCloseOnSelect,
                            serialize: x,
                        },
                        e.key ?? l,
                    ),
                ),
            [P, c, g, d, m, x],
        ),
        z = d.length <= f ? h.zC : h.Ch;
    return (0, a.jsx)(o.hD, {
        navigator: E,
        children: (0, a.jsx)(o.PR, {
            children: (e) => {
                let { ref: t, onKeyDown: n, ...s } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(z, {
                            className: r()(k.SW, l, { [k.O3]: "top" === y }),
                            style: { width: p, maxHeight: S },
                            ref: (e) => {
                                let l = e?.getScrollerNode() ?? null;
                                (t.current = l), (L.current = l);
                            },
                            ...s,
                            onKeyDown: (e) => {
                                if ("Escape" === e.key) {
                                    e.stopPropagation(), e.preventDefault(), i();
                                    return;
                                }
                                n(e);
                            },
                            role: "listbox",
                            children: D,
                        }),
                        (0, a.jsx)("div", { "aria-hidden": !0, ref: N, className: k.PG, children: D.slice(0, f) }),
                    ],
                });
            },
        }),
    });
}
function V(e) {
    let {
            className: l,
            value: t,
            label: n,
            onSelect: i,
            isSelected: s,
            isDisabled: u,
            preventCloseOnSelect: c,
            serialize: d,
        } = e,
        b = (0, o.rm)(d(t));
    return (0, a.jsxs)(g.D, {
        focusProps: { enabled: !1 },
        className: r()(k.uK, l, { [k.IZ]: u }),
        onClick: () => !u && i(t, c),
        ...b,
        "aria-selected": s,
        "aria-disabled": u,
        role: "option",
        children: [
            n,
            s &&
                (0, a.jsx)(S.y, {
                    size: "custom",
                    color: "currentColor",
                    secondaryColor: "white",
                    className: k.Dt,
                    width: 20,
                    height: 20,
                }),
        ],
    });
}
function I(e) {
    let { renderLeading: l, renderTrailing: t, value: n, onChange: i, ...r } = e,
        s = (function (e) {
            let { value: l, onChange: t, serialize: a = (e) => String(e) } = e;
            return { select: (e) => t(e), isSelected: (e) => e === l, clear: () => t(null), serialize: a };
        })({ value: n, onChange: i }),
        {
            id: o,
            options: u,
            autoFocus: d,
            required: b,
            isDisabled: h,
            isProcessing: f,
            clearable: m,
            closeOnSelect: x = !0,
            maxVisibleItems: g,
            "aria-label": v,
            placeholder: j,
            variant: y,
            renderOptionLabel: S,
        } = r,
        { fieldProps: C } = (0, c.n)(r);
    if ("text-only" !== y && null == S) {
        let e = null == C.label && null != v;
        return (0, a.jsx)(p.l, {
            id: o,
            selectionMode: "single",
            onSelectionChange: (e) => {
                i(e);
            },
            options: u,
            formatOption: (e) => {
                let { key: a, value: n, label: i, disabled: r } = e;
                return {
                    id: a ?? s.serialize(n),
                    value: n,
                    label: i,
                    disabled: r,
                    leading: null != l ? l(e) : void 0,
                    trailing: null != t ? t(e) : void 0,
                };
            },
            value: n,
            fullWidth: !0,
            autoFocus: d,
            required: b,
            disabled: h,
            loading: f,
            clearable: m,
            closeOnSelect: x,
            maxOptionsVisible: g,
            placeholder: j,
            ...C,
            label: e ? v : C.label,
            hideLabel: !0 === C.hideLabel || e,
        });
    }
    return (0, a.jsx)(M, {
        ...r,
        ...s,
        renderOptionLabel:
            S ??
            (function () {
                if (null != l || null != t)
                    return (e) => (0, a.jsxs)("div", { className: k.G$, children: [l?.(e), e.label, t?.(e)] });
            })(),
    });
}
function q(e) {
    let { renderLeading: l, renderTrailing: t, ...n } = e,
        {
            id: i,
            serialize: r,
            options: s,
            select: o,
            autoFocus: u,
            required: d,
            isDisabled: b,
            isProcessing: h,
            clearable: f,
            closeOnSelect: m,
            maxVisibleItems: x,
            placeholder: g,
            "aria-label": v,
            variant: j,
            isSelected: y,
            renderOptionLabel: S,
        } = n,
        { fieldProps: C } = (0, c.n)(n);
    if ("text-only" !== j && null == S) {
        let e = null == C.label && null != v;
        return (0, a.jsx)(p.l, {
            id: i,
            selectionMode: "single",
            onSelectionChange: (e) => {
                o(e);
            },
            value: s?.find((e) => y?.(e.value))?.value ?? void 0,
            options: s,
            formatOption: (e) => {
                let { key: a, value: n, label: i, disabled: s } = e;
                return {
                    id: a ?? r(n),
                    value: n,
                    label: i,
                    disabled: s,
                    leading: null != l ? l(e) : void 0,
                    trailing: null != t ? t(e) : void 0,
                };
            },
            fullWidth: !0,
            autoFocus: u,
            required: d,
            disabled: b,
            loading: h,
            clearable: f,
            closeOnSelect: m,
            maxOptionsVisible: x,
            placeholder: g,
            ...C,
            label: e ? v : C.label,
            hideLabel: !0 === C.hideLabel || e,
        });
    }
    return (0, a.jsx)(M, {
        ...n,
        renderOptionLabel:
            S ??
            (function () {
                if (null != l || null != t)
                    return (e) => (0, a.jsxs)("div", { className: k.G$, children: [l?.(e), e.label, t?.(e)] });
            })(),
    });
}
