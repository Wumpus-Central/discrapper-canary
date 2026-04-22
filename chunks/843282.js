t.d(l, { $l: () => L, Ev: () => O, M8: () => E, Pw: () => V, Te: () => R, lS: () => P });
var n = t(627968),
    a = t(64700),
    i = t(503698),
    r = t.n(i),
    s = t(884362),
    o = t(837381),
    u = t(172218),
    c = t(452027),
    d = t(862301),
    b = t(315710),
    h = t(599319),
    p = t(691885),
    f = t(265872),
    m = t(900797),
    x = t(847374),
    g = t(939249),
    v = t(834730),
    j = t(863610),
    S = t(789645),
    y = t(628284),
    C = t(765671),
    w = t(194498),
    N = t(985018),
    k = t(384267);
function O(e) {
    let { value: l, onChange: t, onSelectInteraction: n, serialize: a = (e) => String(e) } = e;
    return {
        select: (e) => {
            let { newValues: a, updated: i } = n(e, l);
            i && t(a);
        },
        isSelected: (e) => l?.has(e) ?? !1,
        clear: () => t(new Set()),
        serialize: a,
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
function A(e) {
    return e?.label;
}
function q(e) {
    return e.map((e) => A(e)).join(", ");
}
function z(e) {
    let {
            options: l,
            placeholder: t = N.intl.string(N.t.XqMe3N),
            className: i,
            isDisabled: s = !1,
            maxVisibleItems: o = 7,
            autoFocus: b = !1,
            popoutWidth: h,
            clearable: p = !1,
            size: y = "md",
            variant: w = "filled",
            onClose: O,
            onOpen: E,
            renderOptionLabel: L = A,
            renderOptionValue: P = q,
            popoutClassName: z,
            popoutPosition: M = "bottom",
            popoutLayerContext: R,
            optionClassName: V,
            closeOnSelect: F,
            select: I,
            isSelected: K,
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
        [Q, ee] = a.useState(!1),
        { ref: el, width: et, height: en } = (0, C.Ay)();
    a.useLayoutEffect(() => {
        s && ee(!1);
    }, [s]);
    let ea = a.useCallback(
            (e) => {
                Q === e || s || (ee(e), e ? E?.() : O?.());
            },
            [s, O, E, Q],
        ),
        ei = a.useCallback(
            (e) => {
                Q && !e && ea(!1);
            },
            [ea, Q],
        ),
        er = (0, u.K)(ei),
        es = a.useCallback(
            (e) => {
                I(e), F && el.current?.focus();
            },
            [I, F, el],
        ),
        eo = a.useCallback(
            (e) => {
                e.stopPropagation(), W?.();
            },
            [W],
        ),
        eu = l.filter((e) => K(e.value));
    return (
        a.useLayoutEffect(() => {
            b && el.current?.focus();
        }, [b, el]),
        (0, n.jsx)(f.Y, {
            targetElementRef: el,
            spacing: 0,
            animation: f.Y.Animation.NONE,
            shouldShow: Q,
            onRequestOpen: () => {
                ea(!0);
            },
            onRequestClose: () => {
                ea(!1);
            },
            renderPopout: (e) => {
                let { closePopout: t, position: a, updatePosition: i } = e;
                return (0, n.jsx)(D, {
                    className: z,
                    closeOnSelect: F,
                    maxVisibleItems: o,
                    width: "auto" === h ? void 0 : (h ?? et),
                    isSelected: K,
                    closePopout: t,
                    buttonHeight: en ?? 0,
                    onSelect: es,
                    options: l,
                    serialize: T,
                    renderOptionLabel: L,
                    optionClassName: V,
                    updatePosition: i,
                    popoutPosition: a,
                });
            },
            position: M,
            layerContext: R,
            children: (e, l) => {
                let { onClick: a, onKeyDown: o, ...u } = e,
                    { isShown: b } = l,
                    h = b ? m.t : x.a;
                return (0, n.jsx)(c.D, {
                    label: U,
                    description: Y,
                    helperText: _,
                    errorMessage: X,
                    successMessage: Z,
                    layout: J,
                    children: (e) =>
                        (0, n.jsxs)(d.F, {
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
                                      a(e), ea(!Q);
                                  },
                            onKeyDown: (e) => {
                                "ArrowDown" === e.key
                                    ? ea(!0)
                                    : "Escape" === e.key && b && (e.stopPropagation(), ea(!1)),
                                    o(e);
                            },
                            ...u,
                            containerClassName: r()(k.kL, i),
                            "data-size": y,
                            "data-variant": w,
                            className: k.Lt,
                            "aria-haspopup": "listbox",
                            "aria-expanded": b,
                            "aria-label": B,
                            "aria-labelledby": H,
                            children: [
                                eu.length > 0
                                    ? (0, n.jsx)(v.E, { className: k.Uq, variant: "text-md/medium", children: P(eu) })
                                    : (0, n.jsx)("span", { className: k.qf, children: t }),
                                (0, n.jsx)("div", {
                                    className: k.Pt,
                                    children: $
                                        ? (0, n.jsx)(j.n, { dotRadius: 3.5, themed: !0 })
                                        : (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  p
                                                      ? (0, n.jsx)(g.D, {
                                                            role: "button",
                                                            "aria-disabled": s,
                                                            onClick: eo,
                                                            "aria-label": N.intl.string(N.t.VkKicb),
                                                            children: (0, n.jsx)(S.P, {
                                                                size: "xs",
                                                                color: "currentColor",
                                                                className: k.IU,
                                                            }),
                                                        })
                                                      : null,
                                                  G ? null : (0, n.jsx)(h, { color: "currentColor", size: "sm" }),
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
function D(e) {
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
            popoutPosition: S,
        } = e,
        [y, C] = a.useState(0),
        N = a.useRef(null),
        O = a.useId(),
        E = (0, s.Ay)({ id: O, async scrollToEnd() {}, async scrollToStart() {}, isEnabled: !0, wrap: !0 }),
        L = a.useRef(null);
    (0, b.t)(L),
        a.useLayoutEffect(() => {
            L.current?.focus();
        }, []),
        a.useEffect(() => {
            v > 0 && j();
        }, [v, j]),
        (0, w.A)(j),
        a.useLayoutEffect(() => {
            let e = N.current?.getBoundingClientRect()?.height;
            null != e && C(e);
        }, [f, d.length]),
        a.useEffect(() => {
            j();
        }, [j, y]);
    let P = a.useCallback(
            (e, l) => {
                t(e), u && !l && i();
            },
            [i, t, u],
        ),
        A = a.useMemo(
            () =>
                d.map((e, l) =>
                    (0, n.jsx)(
                        M,
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
        q = d.length <= f ? h.zC : h.Ch;
    return (0, n.jsx)(o.hD, {
        navigator: E,
        children: (0, n.jsx)(o.PR, {
            children: (e) => {
                let { ref: t, ...a } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(q, {
                            className: r()(k.SW, l, { [k.O3]: "top" === S }),
                            style: { width: p, maxHeight: y },
                            ref: (e) => {
                                let l = e?.getScrollerNode() ?? null;
                                (t.current = l), (L.current = l);
                            },
                            ...a,
                            role: "listbox",
                            children: A,
                        }),
                        (0, n.jsx)("div", { "aria-hidden": !0, ref: N, className: k.PG, children: A.slice(0, f) }),
                    ],
                });
            },
        }),
    });
}
function M(e) {
    let {
            className: l,
            value: t,
            label: a,
            onSelect: i,
            isSelected: s,
            isDisabled: u,
            preventCloseOnSelect: c,
            serialize: d,
        } = e,
        b = (0, o.rm)(d(t));
    return (0, n.jsxs)(g.D, {
        focusProps: { enabled: !1 },
        className: r()(k.uK, l, { [k.IZ]: u }),
        onClick: () => !u && i(t, c),
        ...b,
        "aria-selected": s,
        "aria-disabled": u,
        role: "option",
        children: [
            a,
            s &&
                (0, n.jsx)(y.y, {
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
function R(e) {
    let { renderLeading: l, renderTrailing: t, value: a, onChange: i, ...r } = e,
        s = (function (e) {
            let { value: l, onChange: t, serialize: n = (e) => String(e) } = e;
            return { select: (e) => t(e), isSelected: (e) => e === l, clear: () => t(null), serialize: n };
        })({ value: a, onChange: i }),
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
            variant: S,
            renderOptionLabel: y,
        } = r,
        { fieldProps: C } = (0, c.n)(r);
    if ("text-only" !== S && null == y) {
        let e = null == C.label && null != v;
        return (0, n.jsx)(p.l, {
            id: o,
            selectionMode: "single",
            onSelectionChange: (e) => {
                i(e);
            },
            options: u,
            formatOption: (e) => {
                let { key: n, value: a, label: i, disabled: r } = e;
                return {
                    id: n ?? s.serialize(a),
                    value: a,
                    label: i,
                    disabled: r,
                    leading: null != l ? l(e) : void 0,
                    trailing: null != t ? t(e) : void 0,
                };
            },
            value: a,
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
    return (0, n.jsx)(z, {
        ...r,
        ...s,
        renderOptionLabel:
            y ??
            (function () {
                if (null != l || null != t)
                    return (e) => (0, n.jsxs)("div", { className: k.G$, children: [l?.(e), e.label, t?.(e)] });
            })(),
    });
}
function V(e) {
    let { renderLeading: l, renderTrailing: t, ...a } = e,
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
            isSelected: S,
            renderOptionLabel: y,
        } = a,
        { fieldProps: C } = (0, c.n)(a);
    if ("text-only" !== j && null == y) {
        let e = null == C.label && null != v;
        return (0, n.jsx)(p.l, {
            id: i,
            selectionMode: "single",
            onSelectionChange: (e) => {
                o(e);
            },
            value: s?.find((e) => S?.(e.value))?.value ?? void 0,
            options: s,
            formatOption: (e) => {
                let { key: n, value: a, label: i, disabled: s } = e;
                return {
                    id: n ?? r(a),
                    value: a,
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
    return (0, n.jsx)(z, {
        ...a,
        renderOptionLabel:
            y ??
            (function () {
                if (null != l || null != t)
                    return (e) => (0, n.jsxs)("div", { className: k.G$, children: [l?.(e), e.label, t?.(e)] });
            })(),
    });
}
