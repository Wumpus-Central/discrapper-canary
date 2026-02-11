"use strict";
n.d(t, { $l: () => y, Ev: () => I, M8: () => T, Pw: () => D, Te: () => O, lS: () => S });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(884362),
    l = n(837381),
    u = n(172218),
    c = n(158954),
    d = n(265872),
    _ = n(397927),
    f = n(765671),
    h = n(194498),
    p = n(138101),
    g = n(985018),
    E = n(511630);
function A(e) {
    let { value: t, onChange: n, serialize: r = (e) => String(e) } = e;
    return { select: (e) => n(e), isSelected: (e) => e === t, clear: () => n(null), serialize: r };
}
function I(e) {
    let { value: t, onChange: n, onSelectInteraction: r, serialize: i = (e) => String(e) } = e;
    return {
        select: (e) => {
            let { newValues: i, updated: a } = r(e, t);
            a && n(i);
        },
        isSelected: (e) => t?.has(e) ?? !1,
        clear: () => n(new Set()),
        serialize: i,
    };
}
function T(e, t) {
    let n = new Set(t);
    return n.has(e) ? n.delete(e) : n.add(e), { newValues: n, updated: !0 };
}
function y(e, t) {
    return t.has(e) ? { newValues: new Set(), updated: !0 } : { newValues: new Set([e]), updated: !0 };
}
function S(e, t) {
    return t.has(e) ? { newValues: t, updated: !1 } : { newValues: new Set([e]), updated: !0 };
}
function v(e) {
    return e?.label;
}
function C(e) {
    return e.map((e) => v(e)).join(", ");
}
function b(e) {
    let {
            options: t,
            placeholder: n = g.intl.string(g.t.XqMe3N),
            className: a,
            isDisabled: o = !1,
            maxVisibleItems: l = 7,
            autoFocus: h = !1,
            popoutWidth: p,
            clearable: A = !1,
            size: I = "md",
            variant: T = "filled",
            onClose: y,
            onOpen: S,
            renderOptionLabel: b = v,
            renderOptionValue: R = C,
            popoutClassName: O,
            popoutPosition: D = "bottom",
            popoutLayerContext: L,
            optionClassName: w,
            closeOnSelect: x,
            select: P,
            isSelected: M,
            serialize: k,
            clear: U,
            hideIcon: G = !1,
            isProcessing: F = !1,
            "aria-label": V,
            "aria-labelledby": B,
            label: j,
            description: H,
            helperText: Y,
            errorMessage: W,
            successMessage: K,
            layout: $ = "vertical",
        } = e,
        [z, q] = i.useState(!1),
        { ref: X, width: Z, height: Q } = (0, f.Ay)();
    i.useLayoutEffect(() => {
        o && q(!1);
    }, [o]);
    let J = i.useCallback(
            (e) => {
                z === e || o || (q(e), e ? S?.() : y?.());
            },
            [o, y, S, z],
        ),
        ee = i.useCallback(
            (e) => {
                z && !e && J(!1);
            },
            [J, z],
        ),
        et = (0, u.K)(ee),
        en = i.useCallback(
            (e) => {
                P(e), x && X.current?.focus();
            },
            [P, x, X],
        ),
        er = i.useCallback(
            (e) => {
                e.stopPropagation(), U?.();
            },
            [U],
        ),
        ei = t.filter((e) => M(e.value));
    return (
        i.useLayoutEffect(() => {
            h && X.current?.focus();
        }, [h, X]),
        (0, r.jsx)(d.Y, {
            targetElementRef: X,
            spacing: 0,
            animation: d.Y.Animation.NONE,
            shouldShow: z,
            onRequestOpen: () => {
                J(!0);
            },
            onRequestClose: () => {
                J(!1);
            },
            renderPopout: (e) => {
                let { closePopout: n, position: i, updatePosition: a } = e;
                return (0, r.jsx)(N, {
                    className: O,
                    closeOnSelect: x,
                    maxVisibleItems: l,
                    width: "auto" === p ? void 0 : (p ?? Z),
                    isSelected: M,
                    closePopout: n,
                    buttonHeight: Q ?? 0,
                    onSelect: en,
                    options: t,
                    serialize: k,
                    renderOptionLabel: b,
                    optionClassName: w,
                    updatePosition: a,
                    popoutPosition: i,
                });
            },
            position: D,
            layerContext: L,
            children: (e, t) => {
                let { onClick: i, onKeyDown: l, ...u } = e,
                    { isShown: d } = t,
                    f = d ? _.tN5 : _.abt;
                return (0, r.jsx)(c.D0$, {
                    label: j,
                    description: H,
                    helperText: Y,
                    errorMessage: W,
                    successMessage: K,
                    layout: $,
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
                            "aria-busy": F,
                            "aria-disabled": o,
                            fullWidth: "horizontal" === $,
                            innerRef: (e) => {
                                (X.current = e), (et.current = e);
                            },
                            onClick: o
                                ? void 0
                                : (e) => {
                                      i(e), J(!z);
                                  },
                            onKeyDown: (e) => {
                                "ArrowDown" === e.key ? J(!0) : "Escape" === e.key && d && (e.stopPropagation(), J(!1)),
                                    l(e);
                            },
                            ...u,
                            containerClassName: s()(E.kL, a),
                            "data-size": I,
                            "data-variant": T,
                            className: E.Lt,
                            "aria-haspopup": "listbox",
                            "aria-expanded": d,
                            "aria-label": V,
                            "aria-labelledby": B,
                            children: [
                                ei.length > 0
                                    ? (0, r.jsx)(_.Text, {
                                          className: E.Uq,
                                          variant: "text-md/medium",
                                          children: R(ei),
                                      })
                                    : (0, r.jsx)("span", { className: E.qf, children: n }),
                                (0, r.jsx)("div", {
                                    className: E.Pt,
                                    children: F
                                        ? (0, r.jsx)(_.nvX, { dotRadius: 3.5, themed: !0 })
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  A
                                                      ? (0, r.jsx)(_.DUT, {
                                                            role: "button",
                                                            "aria-disabled": o,
                                                            onClick: er,
                                                            "aria-label": g.intl.string(g.t.VkKicb),
                                                            children: (0, r.jsx)(_.PGe, {
                                                                size: "xs",
                                                                color: "currentColor",
                                                                className: E.IU,
                                                            }),
                                                        })
                                                      : null,
                                                  G ? null : (0, r.jsx)(f, { color: "currentColor", size: "sm" }),
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
function N(e) {
    let {
            className: t,
            onSelect: n,
            closePopout: a,
            closeOnSelect: u = !0,
            isSelected: d,
            options: _,
            width: f,
            maxVisibleItems: p,
            renderOptionLabel: g,
            serialize: A,
            optionClassName: I,
            buttonHeight: T,
            updatePosition: y,
            popoutPosition: S,
        } = e,
        [v, C] = i.useState(0),
        b = i.useRef(null),
        N = i.useId(),
        O = (0, o.Ay)({ id: N, async scrollToEnd() {}, async scrollToStart() {}, isEnabled: !0, wrap: !0 }),
        D = i.useRef(null);
    (0, c.tjt)(D),
        i.useLayoutEffect(() => {
            D.current?.focus();
        }, []),
        i.useEffect(() => {
            T > 0 && y();
        }, [T, y]),
        (0, h.A)(y),
        i.useLayoutEffect(() => {
            let e = b.current?.getBoundingClientRect()?.height;
            null != e && C(e);
        }, [p, _.length]),
        i.useEffect(() => {
            y();
        }, [y, v]);
    let L = i.useCallback(
            (e, t) => {
                n(e), u && !t && a();
            },
            [a, n, u],
        ),
        w = i.useMemo(
            () =>
                _.map((e, t) =>
                    (0, r.jsx)(
                        R,
                        {
                            isSelected: d(e.value),
                            value: e.value,
                            label: g(e),
                            onSelect: L,
                            className: I,
                            isDisabled: e.disabled,
                            preventCloseOnSelect: e.preventCloseOnSelect,
                            serialize: A,
                        },
                        e.key ?? t,
                    ),
                ),
            [L, d, I, _, g, A],
        ),
        x = _.length <= p ? c.zCo : c.ChK;
    return (0, r.jsx)(l.hD, {
        navigator: O,
        children: (0, r.jsx)(l.PR, {
            children: (e) => {
                let { ref: n, ...i } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(x, {
                            className: s()(E.SW, t, { [E.O3]: "top" === S }),
                            style: { width: f, maxHeight: v },
                            ref: (e) => {
                                let t = e?.getScrollerNode() ?? null;
                                (n.current = t), (D.current = t);
                            },
                            ...i,
                            role: "listbox",
                            children: w,
                        }),
                        (0, r.jsx)("div", { "aria-hidden": !0, ref: b, className: E.PG, children: w.slice(0, p) }),
                    ],
                });
            },
        }),
    });
}
function R(e) {
    let {
            className: t,
            value: n,
            label: i,
            onSelect: a,
            isSelected: o,
            isDisabled: u,
            preventCloseOnSelect: c,
            serialize: d,
        } = e,
        f = (0, l.rm)(d(n));
    return (0, r.jsxs)(_.DUT, {
        focusProps: { enabled: !1 },
        className: s()(E.uK, t, { [E.IZ]: u }),
        onClick: () => !u && a(n, c),
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
                    className: E.Dt,
                    width: 20,
                    height: 20,
                }),
        ],
    });
}
function O(e) {
    let { renderLeading: t, renderTrailing: n, value: i, onChange: a, ...s } = e,
        o = (0, p.w)("SingleSelect"),
        l = A({ value: i, onChange: a }),
        {
            id: u,
            options: d,
            autoFocus: _,
            required: f,
            isDisabled: h,
            isProcessing: g,
            clearable: I,
            closeOnSelect: T = !0,
            maxVisibleItems: y,
            "aria-label": S,
            placeholder: v,
            variant: C,
            renderOptionLabel: N,
        } = s,
        { fieldProps: R } = (0, c.ndh)(s),
        O = "text-only" === C || null != N;
    if (o && !O) {
        let e = null == R.label && null != S;
        return (0, r.jsx)(c.l6P, {
            id: u,
            selectionMode: "single",
            onSelectionChange: (e) => {
                a(e);
            },
            options: d,
            formatOption: (e) => {
                let { key: r, value: i, label: a, disabled: s } = e;
                return {
                    id: r ?? l.serialize(i),
                    value: i,
                    label: a,
                    disabled: s,
                    leading: null != t ? t(e) : void 0,
                    trailing: null != n ? n(e) : void 0,
                };
            },
            value: i,
            fullWidth: !0,
            autoFocus: _,
            required: f,
            disabled: h,
            loading: g,
            clearable: I,
            closeOnSelect: T,
            maxOptionsVisible: y,
            placeholder: v,
            ...R,
            label: e ? S : R.label,
            hideLabel: !0 === R.hideLabel || e,
        });
    }
    function D() {
        if (null != t || null != n)
            return (e) => (0, r.jsxs)("div", { className: E.G$, children: [t?.(e), e.label, n?.(e)] });
    }
    return (0, r.jsx)(b, { ...s, ...l, renderOptionLabel: N ?? D() });
}
function D(e) {
    let { renderLeading: t, renderTrailing: n, ...i } = e,
        a = (0, p.w)("Select"),
        {
            id: s,
            serialize: o,
            options: l,
            select: u,
            autoFocus: d,
            required: _,
            isDisabled: f,
            isProcessing: h,
            clearable: g,
            closeOnSelect: A,
            maxVisibleItems: I,
            placeholder: T,
            "aria-label": y,
            variant: S,
            isSelected: v,
            renderOptionLabel: C,
        } = i,
        { fieldProps: N } = (0, c.ndh)(i),
        R = "text-only" === S || null != C;
    if (a && !R) {
        let e = null == N.label && null != y;
        return (0, r.jsx)(c.l6P, {
            id: s,
            selectionMode: "single",
            onSelectionChange: (e) => {
                u(e);
            },
            value: l?.find((e) => v?.(e.value))?.value ?? void 0,
            options: l,
            formatOption: (e) => {
                let { key: r, value: i, label: a, disabled: s } = e;
                return {
                    id: r ?? o(i),
                    value: i,
                    label: a,
                    disabled: s,
                    leading: null != t ? t(e) : void 0,
                    trailing: null != n ? n(e) : void 0,
                };
            },
            fullWidth: !0,
            autoFocus: d,
            required: _,
            disabled: f,
            loading: h,
            clearable: g,
            closeOnSelect: A,
            maxOptionsVisible: I,
            placeholder: T,
            ...N,
            label: e ? y : N.label,
            hideLabel: !0 === N.hideLabel || e,
        });
    }
    function O() {
        if (null != t || null != n)
            return (e) => (0, r.jsxs)("div", { className: E.G$, children: [t?.(e), e.label, n?.(e)] });
    }
    return (0, r.jsx)(b, { ...i, renderOptionLabel: C ?? O() });
}
