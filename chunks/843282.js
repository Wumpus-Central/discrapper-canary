"use strict";
n.d(t, { $l: () => b, Ev: () => O, M8: () => R, Pw: () => U, Te: () => k, lS: () => D });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(884362),
    l = n(837381),
    u = n(172218),
    c = n(452027),
    d = n(862301),
    _ = n(315710),
    f = n(599319),
    p = n(691885),
    h = n(265872),
    E = n(900797),
    m = n(847374),
    g = n(939249),
    A = n(834730),
    I = n(863610),
    T = n(789645),
    S = n(628284),
    y = n(765671),
    N = n(194498),
    v = n(985018),
    C = n(384267);
function O(e) {
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
function R(e, t) {
    let n = new Set(t);
    return n.has(e) ? n.delete(e) : n.add(e), { newValues: n, updated: !0 };
}
function b(e, t) {
    return t.has(e) ? { newValues: new Set(), updated: !0 } : { newValues: new Set([e]), updated: !0 };
}
function D(e, t) {
    return t.has(e) ? { newValues: t, updated: !1 } : { newValues: new Set([e]), updated: !0 };
}
function L(e) {
    return e?.label;
}
function w(e) {
    return e.map((e) => L(e)).join(", ");
}
function M(e) {
    let {
            options: t,
            placeholder: n = v.intl.string(v.t.XqMe3N),
            className: s,
            isDisabled: o = !1,
            maxVisibleItems: l = 7,
            autoFocus: _ = !1,
            popoutWidth: f,
            clearable: p = !1,
            size: S = "md",
            variant: N = "filled",
            onClose: O,
            onOpen: R,
            renderOptionLabel: b = L,
            renderOptionValue: D = w,
            popoutClassName: M,
            popoutPosition: x = "bottom",
            popoutLayerContext: k,
            optionClassName: U,
            closeOnSelect: G,
            select: F,
            isSelected: V,
            serialize: B,
            clear: H,
            hideIcon: j = !1,
            isProcessing: Y = !1,
            "aria-label": W,
            "aria-labelledby": K,
            label: $,
            description: z,
            helperText: q,
            errorMessage: X,
            successMessage: Q,
            layout: Z = "vertical",
        } = e,
        [J, ee] = i.useState(!1),
        { ref: et, width: en, height: er } = (0, y.Ay)();
    i.useLayoutEffect(() => {
        o && ee(!1);
    }, [o]);
    let ei = i.useCallback(
            (e) => {
                J === e || o || (ee(e), e ? R?.() : O?.());
            },
            [o, O, R, J],
        ),
        es = i.useCallback(
            (e) => {
                J && !e && ei(!1);
            },
            [ei, J],
        ),
        ea = (0, u.K)(es),
        eo = i.useCallback(
            (e) => {
                F(e), G && et.current?.focus();
            },
            [F, G, et],
        ),
        el = i.useCallback(
            (e) => {
                e.stopPropagation(), H?.();
            },
            [H],
        ),
        eu = t.filter((e) => V(e.value));
    return (
        i.useLayoutEffect(() => {
            _ && et.current?.focus();
        }, [_, et]),
        (0, r.jsx)(h.Y, {
            targetElementRef: et,
            spacing: 0,
            animation: h.Y.Animation.NONE,
            shouldShow: J,
            onRequestOpen: () => {
                ei(!0);
            },
            onRequestClose: () => {
                ei(!1);
            },
            renderPopout: (e) => {
                let { closePopout: n, position: i, updatePosition: s } = e;
                return (0, r.jsx)(P, {
                    className: M,
                    closeOnSelect: G,
                    maxVisibleItems: l,
                    width: "auto" === f ? void 0 : (f ?? en),
                    isSelected: V,
                    closePopout: n,
                    buttonHeight: er ?? 0,
                    onSelect: eo,
                    options: t,
                    serialize: B,
                    renderOptionLabel: b,
                    optionClassName: U,
                    updatePosition: s,
                    popoutPosition: i,
                });
            },
            position: x,
            layerContext: k,
            children: (e, t) => {
                let { onClick: i, onKeyDown: l, ...u } = e,
                    { isShown: _ } = t,
                    f = _ ? E.t : m.a;
                return (0, r.jsx)(c.D, {
                    label: $,
                    description: z,
                    helperText: q,
                    errorMessage: X,
                    successMessage: Q,
                    layout: Z,
                    children: (e) =>
                        (0, r.jsxs)(d.F, {
                            as: g.D,
                            tag: "div",
                            role: "button",
                            id: e?.controlId,
                            "aria-describedby": e?.describedById,
                            "aria-errormessage": e?.errorMessageId,
                            "aria-invalid": e?.errorMessageId != null,
                            disabled: o,
                            "aria-busy": Y,
                            "aria-disabled": o,
                            fullWidth: "horizontal" === Z,
                            innerRef: (e) => {
                                (et.current = e), (ea.current = e);
                            },
                            onClick: o
                                ? void 0
                                : (e) => {
                                      i(e), ei(!J);
                                  },
                            onKeyDown: (e) => {
                                "ArrowDown" === e.key
                                    ? ei(!0)
                                    : "Escape" === e.key && _ && (e.stopPropagation(), ei(!1)),
                                    l(e);
                            },
                            ...u,
                            containerClassName: a()(C.kL, s),
                            "data-size": S,
                            "data-variant": N,
                            className: C.Lt,
                            "aria-haspopup": "listbox",
                            "aria-expanded": _,
                            "aria-label": W,
                            "aria-labelledby": K,
                            children: [
                                eu.length > 0
                                    ? (0, r.jsx)(A.E, { className: C.Uq, variant: "text-md/medium", children: D(eu) })
                                    : (0, r.jsx)("span", { className: C.qf, children: n }),
                                (0, r.jsx)("div", {
                                    className: C.Pt,
                                    children: Y
                                        ? (0, r.jsx)(I.n, { dotRadius: 3.5, themed: !0 })
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  p
                                                      ? (0, r.jsx)(g.D, {
                                                            role: "button",
                                                            "aria-disabled": o,
                                                            onClick: el,
                                                            "aria-label": v.intl.string(v.t.VkKicb),
                                                            children: (0, r.jsx)(T.P, {
                                                                size: "xs",
                                                                color: "currentColor",
                                                                className: C.IU,
                                                            }),
                                                        })
                                                      : null,
                                                  j ? null : (0, r.jsx)(f, { color: "currentColor", size: "sm" }),
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
            className: t,
            onSelect: n,
            closePopout: s,
            closeOnSelect: u = !0,
            isSelected: c,
            options: d,
            width: p,
            maxVisibleItems: h,
            renderOptionLabel: E,
            serialize: m,
            optionClassName: g,
            buttonHeight: A,
            updatePosition: I,
            popoutPosition: T,
        } = e,
        [S, y] = i.useState(0),
        v = i.useRef(null),
        O = i.useId(),
        R = (0, o.Ay)({ id: O, async scrollToEnd() {}, async scrollToStart() {}, isEnabled: !0, wrap: !0 }),
        b = i.useRef(null);
    (0, _.t)(b),
        i.useLayoutEffect(() => {
            b.current?.focus();
        }, []),
        i.useEffect(() => {
            A > 0 && I();
        }, [A, I]),
        (0, N.A)(I),
        i.useLayoutEffect(() => {
            let e = v.current?.getBoundingClientRect()?.height;
            null != e && y(e);
        }, [h, d.length]),
        i.useEffect(() => {
            I();
        }, [I, S]);
    let D = i.useCallback(
            (e, t) => {
                n(e), u && !t && s();
            },
            [s, n, u],
        ),
        L = i.useMemo(
            () =>
                d.map((e, t) =>
                    (0, r.jsx)(
                        x,
                        {
                            isSelected: c(e.value),
                            value: e.value,
                            label: E(e),
                            onSelect: D,
                            className: g,
                            isDisabled: e.disabled,
                            preventCloseOnSelect: e.preventCloseOnSelect,
                            serialize: m,
                        },
                        e.key ?? t,
                    ),
                ),
            [D, c, g, d, E, m],
        ),
        w = d.length <= h ? f.zC : f.Ch;
    return (0, r.jsx)(l.hD, {
        navigator: R,
        children: (0, r.jsx)(l.PR, {
            children: (e) => {
                let { ref: n, ...i } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(w, {
                            className: a()(C.SW, t, { [C.O3]: "top" === T }),
                            style: { width: p, maxHeight: S },
                            ref: (e) => {
                                let t = e?.getScrollerNode() ?? null;
                                (n.current = t), (b.current = t);
                            },
                            ...i,
                            role: "listbox",
                            children: L,
                        }),
                        (0, r.jsx)("div", { "aria-hidden": !0, ref: v, className: C.PG, children: L.slice(0, h) }),
                    ],
                });
            },
        }),
    });
}
function x(e) {
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
        _ = (0, l.rm)(d(n));
    return (0, r.jsxs)(g.D, {
        focusProps: { enabled: !1 },
        className: a()(C.uK, t, { [C.IZ]: u }),
        onClick: () => !u && s(n, c),
        ..._,
        "aria-selected": o,
        "aria-disabled": u,
        role: "option",
        children: [
            i,
            o &&
                (0, r.jsx)(S.y, {
                    size: "custom",
                    color: "currentColor",
                    secondaryColor: "white",
                    className: C.Dt,
                    width: 20,
                    height: 20,
                }),
        ],
    });
}
function k(e) {
    let { renderLeading: t, renderTrailing: n, value: i, onChange: s, ...a } = e,
        o = (function (e) {
            let { value: t, onChange: n, serialize: r = (e) => String(e) } = e;
            return { select: (e) => n(e), isSelected: (e) => e === t, clear: () => n(null), serialize: r };
        })({ value: i, onChange: s }),
        {
            id: l,
            options: u,
            autoFocus: d,
            required: _,
            isDisabled: f,
            isProcessing: h,
            clearable: E,
            closeOnSelect: m = !0,
            maxVisibleItems: g,
            "aria-label": A,
            placeholder: I,
            variant: T,
            renderOptionLabel: S,
        } = a,
        { fieldProps: y } = (0, c.n)(a);
    if ("text-only" !== T && null == S) {
        let e = null == y.label && null != A;
        return (0, r.jsx)(p.l, {
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
            clearable: E,
            closeOnSelect: m,
            maxOptionsVisible: g,
            placeholder: I,
            ...y,
            label: e ? A : y.label,
            hideLabel: !0 === y.hideLabel || e,
        });
    }
    return (0, r.jsx)(M, {
        ...a,
        ...o,
        renderOptionLabel:
            S ??
            (function () {
                if (null != t || null != n)
                    return (e) => (0, r.jsxs)("div", { className: C.G$, children: [t?.(e), e.label, n?.(e)] });
            })(),
    });
}
function U(e) {
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
            closeOnSelect: E,
            maxVisibleItems: m,
            placeholder: g,
            "aria-label": A,
            variant: I,
            isSelected: T,
            renderOptionLabel: S,
        } = i,
        { fieldProps: y } = (0, c.n)(i);
    if ("text-only" !== I && null == S) {
        let e = null == y.label && null != A;
        return (0, r.jsx)(p.l, {
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
            closeOnSelect: E,
            maxOptionsVisible: m,
            placeholder: g,
            ...y,
            label: e ? A : y.label,
            hideLabel: !0 === y.hideLabel || e,
        });
    }
    return (0, r.jsx)(M, {
        ...i,
        renderOptionLabel:
            S ??
            (function () {
                if (null != t || null != n)
                    return (e) => (0, r.jsxs)("div", { className: C.G$, children: [t?.(e), e.label, n?.(e)] });
            })(),
    });
}
