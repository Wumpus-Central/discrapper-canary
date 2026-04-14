"use strict";
n.d(t, { $l: () => I, Ev: () => g, M8: () => A, Pw: () => b, Te: () => R, lS: () => T });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(884362),
    l = n(837381),
    u = n(172218),
    c = n(158954),
    d = n(265872),
    _ = n(397927),
    f = n(765671),
    h = n(194498),
    p = n(985018),
    m = n(231547);
function E(e) {
    let { value: t, onChange: n, serialize: r = (e) => String(e) } = e;
    return { select: (e) => n(e), isSelected: (e) => e === t, clear: () => n(null), serialize: r };
}
function g(e) {
    let { value: t, onChange: n, onSelectInteraction: r, serialize: i = (e) => String(e) } = e;
    return {
        select: (e) => {
            let { newValues: i, updated: s } = r(e, t);
            s && n(i);
        },
        isSelected: (e) => t?.has(e) ?? !1,
        clear: () => n(new Set()),
        serialize: i,
    };
}
function A(e, t) {
    let n = new Set(t);
    return n.has(e) ? n.delete(e) : n.add(e), { newValues: n, updated: !0 };
}
function I(e, t) {
    return t.has(e) ? { newValues: new Set(), updated: !0 } : { newValues: new Set([e]), updated: !0 };
}
function T(e, t) {
    return t.has(e) ? { newValues: t, updated: !1 } : { newValues: new Set([e]), updated: !0 };
}
function S(e) {
    return e?.label;
}
function y(e) {
    return e.map((e) => S(e)).join(", ");
}
function v(e) {
    let {
            options: t,
            placeholder: n = p.intl.string(p.t.XqMe3N),
            className: s,
            isDisabled: o = !1,
            maxVisibleItems: l = 7,
            autoFocus: h = !1,
            popoutWidth: E,
            clearable: g = !1,
            size: A = "md",
            variant: I = "filled",
            onClose: T,
            onOpen: v,
            renderOptionLabel: N = S,
            renderOptionValue: R = y,
            popoutClassName: b,
            popoutPosition: O = "bottom",
            popoutLayerContext: D,
            optionClassName: L,
            closeOnSelect: w,
            select: M,
            isSelected: x,
            serialize: P,
            clear: k,
            hideIcon: U = !1,
            isProcessing: G = !1,
            "aria-label": F,
            "aria-labelledby": B,
            label: V,
            description: H,
            helperText: j,
            errorMessage: Y,
            successMessage: W,
            layout: K = "vertical",
        } = e,
        [$, z] = i.useState(!1),
        { ref: q, width: Z, height: X } = (0, f.Ay)();
    i.useLayoutEffect(() => {
        o && z(!1);
    }, [o]);
    let Q = i.useCallback(
            (e) => {
                $ === e || o || (z(e), e ? v?.() : T?.());
            },
            [o, T, v, $],
        ),
        J = i.useCallback(
            (e) => {
                $ && !e && Q(!1);
            },
            [Q, $],
        ),
        ee = (0, u.K)(J),
        et = i.useCallback(
            (e) => {
                M(e), w && q.current?.focus();
            },
            [M, w, q],
        ),
        en = i.useCallback(
            (e) => {
                e.stopPropagation(), k?.();
            },
            [k],
        ),
        er = t.filter((e) => x(e.value));
    return (
        i.useLayoutEffect(() => {
            h && q.current?.focus();
        }, [h, q]),
        (0, r.jsx)(d.Y, {
            targetElementRef: q,
            spacing: 0,
            animation: d.Y.Animation.NONE,
            shouldShow: $,
            onRequestOpen: () => {
                Q(!0);
            },
            onRequestClose: () => {
                Q(!1);
            },
            renderPopout: (e) => {
                let { closePopout: n, position: i, updatePosition: s } = e;
                return (0, r.jsx)(C, {
                    className: b,
                    closeOnSelect: w,
                    maxVisibleItems: l,
                    width: "auto" === E ? void 0 : (E ?? Z),
                    isSelected: x,
                    closePopout: n,
                    buttonHeight: X ?? 0,
                    onSelect: et,
                    options: t,
                    serialize: P,
                    renderOptionLabel: N,
                    optionClassName: L,
                    updatePosition: s,
                    popoutPosition: i,
                });
            },
            position: O,
            layerContext: D,
            children: (e, t) => {
                let { onClick: i, onKeyDown: l, ...u } = e,
                    { isShown: d } = t,
                    f = d ? _.tN5 : _.abt;
                return (0, r.jsx)(c.D0$, {
                    label: V,
                    description: H,
                    helperText: j,
                    errorMessage: Y,
                    successMessage: W,
                    layout: K,
                    children: (e) =>
                        (0, r.jsxs)(c.FON, {
                            as: _.DUT,
                            tag: "div",
                            role: "button",
                            id: e?.controlId,
                            "aria-describedby": e?.describedById,
                            "aria-errormessage": e?.errorMessageId,
                            "aria-invalid": e?.errorMessageId != null,
                            disabled: o,
                            "aria-busy": G,
                            "aria-disabled": o,
                            fullWidth: "horizontal" === K,
                            innerRef: (e) => {
                                (q.current = e), (ee.current = e);
                            },
                            onClick: o
                                ? void 0
                                : (e) => {
                                      i(e), Q(!$);
                                  },
                            onKeyDown: (e) => {
                                "ArrowDown" === e.key ? Q(!0) : "Escape" === e.key && d && (e.stopPropagation(), Q(!1)),
                                    l(e);
                            },
                            ...u,
                            containerClassName: a()(m.kL, s),
                            "data-size": A,
                            "data-variant": I,
                            className: m.Lt,
                            "aria-haspopup": "listbox",
                            "aria-expanded": d,
                            "aria-label": F,
                            "aria-labelledby": B,
                            children: [
                                er.length > 0
                                    ? (0, r.jsx)(_.Text, {
                                          className: m.Uq,
                                          variant: "text-md/medium",
                                          children: R(er),
                                      })
                                    : (0, r.jsx)("span", { className: m.qf, children: n }),
                                (0, r.jsx)("div", {
                                    className: m.Pt,
                                    children: G
                                        ? (0, r.jsx)(_.nvX, { dotRadius: 3.5, themed: !0 })
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  g
                                                      ? (0, r.jsx)(_.DUT, {
                                                            role: "button",
                                                            "aria-disabled": o,
                                                            onClick: en,
                                                            "aria-label": p.intl.string(p.t.VkKicb),
                                                            children: (0, r.jsx)(_.PGe, {
                                                                size: "xs",
                                                                color: "currentColor",
                                                                className: m.IU,
                                                            }),
                                                        })
                                                      : null,
                                                  U ? null : (0, r.jsx)(f, { color: "currentColor", size: "sm" }),
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
function C(e) {
    let {
            className: t,
            onSelect: n,
            closePopout: s,
            closeOnSelect: u = !0,
            isSelected: d,
            options: _,
            width: f,
            maxVisibleItems: p,
            renderOptionLabel: E,
            serialize: g,
            optionClassName: A,
            buttonHeight: I,
            updatePosition: T,
            popoutPosition: S,
        } = e,
        [y, v] = i.useState(0),
        C = i.useRef(null),
        R = i.useId(),
        b = (0, o.Ay)({ id: R, async scrollToEnd() {}, async scrollToStart() {}, isEnabled: !0, wrap: !0 }),
        O = i.useRef(null);
    (0, c.tjt)(O),
        i.useLayoutEffect(() => {
            O.current?.focus();
        }, []),
        i.useEffect(() => {
            I > 0 && T();
        }, [I, T]),
        (0, h.A)(T),
        i.useLayoutEffect(() => {
            let e = C.current?.getBoundingClientRect()?.height;
            null != e && v(e);
        }, [p, _.length]),
        i.useEffect(() => {
            T();
        }, [T, y]);
    let D = i.useCallback(
            (e, t) => {
                n(e), u && !t && s();
            },
            [s, n, u],
        ),
        L = i.useMemo(
            () =>
                _.map((e, t) =>
                    (0, r.jsx)(
                        N,
                        {
                            isSelected: d(e.value),
                            value: e.value,
                            label: E(e),
                            onSelect: D,
                            className: A,
                            isDisabled: e.disabled,
                            preventCloseOnSelect: e.preventCloseOnSelect,
                            serialize: g,
                        },
                        e.key ?? t,
                    ),
                ),
            [D, d, A, _, E, g],
        ),
        w = _.length <= p ? c.zCo : c.ChK;
    return (0, r.jsx)(l.hD, {
        navigator: b,
        children: (0, r.jsx)(l.PR, {
            children: (e) => {
                let { ref: n, ...i } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(w, {
                            className: a()(m.SW, t, { [m.O3]: "top" === S }),
                            style: { width: f, maxHeight: y },
                            ref: (e) => {
                                let t = e?.getScrollerNode() ?? null;
                                (n.current = t), (O.current = t);
                            },
                            ...i,
                            role: "listbox",
                            children: L,
                        }),
                        (0, r.jsx)("div", { "aria-hidden": !0, ref: C, className: m.PG, children: L.slice(0, p) }),
                    ],
                });
            },
        }),
    });
}
function N(e) {
    let {
            className: t,
            value: n,
            label: i,
            onSelect: s,
            isSelected: o,
            isDisabled: u,
            preventCloseOnSelect: c,
            serialize: d,
        } = e,
        f = (0, l.rm)(d(n));
    return (0, r.jsxs)(_.DUT, {
        focusProps: { enabled: !1 },
        className: a()(m.uK, t, { [m.IZ]: u }),
        onClick: () => !u && s(n, c),
        ...f,
        "aria-selected": o,
        "aria-disabled": u,
        role: "option",
        children: [
            i,
            o &&
                (0, r.jsx)(_.yr3, {
                    size: "custom",
                    color: "currentColor",
                    secondaryColor: "white",
                    className: m.Dt,
                    width: 20,
                    height: 20,
                }),
        ],
    });
}
function R(e) {
    let { renderLeading: t, renderTrailing: n, value: i, onChange: s, ...a } = e,
        o = E({ value: i, onChange: s }),
        {
            id: l,
            options: u,
            autoFocus: d,
            required: _,
            isDisabled: f,
            isProcessing: h,
            clearable: p,
            closeOnSelect: g = !0,
            maxVisibleItems: A,
            "aria-label": I,
            placeholder: T,
            variant: S,
            renderOptionLabel: y,
        } = a,
        { fieldProps: C } = (0, c.ndh)(a);
    if ("text-only" !== S && null == y) {
        let e = null == C.label && null != I;
        return (0, r.jsx)(c.l6P, {
            id: l,
            selectionMode: "single",
            onSelectionChange: (e) => {
                s(e);
            },
            options: u,
            formatOption: (e) => {
                let { key: r, value: i, label: s, disabled: a } = e;
                return {
                    id: r ?? o.serialize(i),
                    value: i,
                    label: s,
                    disabled: a,
                    leading: null != t ? t(e) : void 0,
                    trailing: null != n ? n(e) : void 0,
                };
            },
            value: i,
            fullWidth: !0,
            autoFocus: d,
            required: _,
            disabled: f,
            loading: h,
            clearable: p,
            closeOnSelect: g,
            maxOptionsVisible: A,
            placeholder: T,
            ...C,
            label: e ? I : C.label,
            hideLabel: !0 === C.hideLabel || e,
        });
    }
    function N() {
        if (null != t || null != n)
            return (e) => (0, r.jsxs)("div", { className: m.G$, children: [t?.(e), e.label, n?.(e)] });
    }
    return (0, r.jsx)(v, { ...a, ...o, renderOptionLabel: y ?? N() });
}
function b(e) {
    let { renderLeading: t, renderTrailing: n, ...i } = e,
        {
            id: s,
            serialize: a,
            options: o,
            select: l,
            autoFocus: u,
            required: d,
            isDisabled: _,
            isProcessing: f,
            clearable: h,
            closeOnSelect: p,
            maxVisibleItems: E,
            placeholder: g,
            "aria-label": A,
            variant: I,
            isSelected: T,
            renderOptionLabel: S,
        } = i,
        { fieldProps: y } = (0, c.ndh)(i);
    if ("text-only" !== I && null == S) {
        let e = null == y.label && null != A;
        return (0, r.jsx)(c.l6P, {
            id: s,
            selectionMode: "single",
            onSelectionChange: (e) => {
                l(e);
            },
            value: o?.find((e) => T?.(e.value))?.value ?? void 0,
            options: o,
            formatOption: (e) => {
                let { key: r, value: i, label: s, disabled: o } = e;
                return {
                    id: r ?? a(i),
                    value: i,
                    label: s,
                    disabled: o,
                    leading: null != t ? t(e) : void 0,
                    trailing: null != n ? n(e) : void 0,
                };
            },
            fullWidth: !0,
            autoFocus: u,
            required: d,
            disabled: _,
            loading: f,
            clearable: h,
            closeOnSelect: p,
            maxOptionsVisible: E,
            placeholder: g,
            ...y,
            label: e ? A : y.label,
            hideLabel: !0 === y.hideLabel || e,
        });
    }
    function C() {
        if (null != t || null != n)
            return (e) => (0, r.jsxs)("div", { className: m.G$, children: [t?.(e), e.label, n?.(e)] });
    }
    return (0, r.jsx)(v, { ...i, renderOptionLabel: S ?? C() });
}
