"use strict";
n.d(t, { $l: () => T, Ev: () => A, M8: () => I, Pw: () => O, Te: () => R, lS: () => y });
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
    p = n(194498),
    h = n(138101),
    m = n(985018),
    g = n(511630);
function E(e) {
    let { value: t, onChange: n, serialize: r = (e) => String(e) } = e;
    return { select: (e) => n(e), isSelected: (e) => e === t, clear: () => n(null), serialize: r };
}
function A(e) {
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
function I(e, t) {
    let n = new Set(t);
    return n.has(e) ? n.delete(e) : n.add(e), { newValues: n, updated: !0 };
}
function T(e, t) {
    return t.has(e) ? { newValues: new Set(), updated: !0 } : { newValues: new Set([e]), updated: !0 };
}
function y(e, t) {
    return t.has(e) ? { newValues: t, updated: !1 } : { newValues: new Set([e]), updated: !0 };
}
function S(e) {
    return e?.label;
}
function v(e) {
    return e.map((e) => S(e)).join(", ");
}
function C(e) {
    let {
            options: t,
            placeholder: n = m.intl.string(m.t.XqMe3N),
            className: a,
            isDisabled: o = !1,
            maxVisibleItems: l = 7,
            autoFocus: p = !1,
            popoutWidth: h,
            clearable: E = !1,
            size: A = "md",
            variant: I = "filled",
            onClose: T,
            onOpen: y,
            renderOptionLabel: C = S,
            renderOptionValue: N = v,
            popoutClassName: R,
            popoutPosition: O = "bottom",
            popoutLayerContext: D,
            optionClassName: L,
            closeOnSelect: w,
            select: x,
            isSelected: P,
            serialize: M,
            clear: k,
            hideIcon: U = !1,
            isProcessing: G = !1,
            "aria-label": V,
            "aria-labelledby": F,
            label: B,
            description: j,
            helperText: H,
            errorMessage: Y,
            successMessage: W,
            layout: K = "vertical",
        } = e,
        [z, $] = i.useState(!1),
        { ref: q, width: Z, height: Q } = (0, f.Ay)();
    i.useLayoutEffect(() => {
        o && $(!1);
    }, [o]);
    let X = i.useCallback(
            (e) => {
                z === e || o || ($(e), e ? y?.() : T?.());
            },
            [o, T, y, z],
        ),
        J = i.useCallback(
            (e) => {
                z && !e && X(!1);
            },
            [X, z],
        ),
        ee = (0, u.K)(J),
        et = i.useCallback(
            (e) => {
                x(e), w && q.current?.focus();
            },
            [x, w, q],
        ),
        en = i.useCallback(
            (e) => {
                e.stopPropagation(), k?.();
            },
            [k],
        ),
        er = t.filter((e) => P(e.value));
    return (
        i.useLayoutEffect(() => {
            p && q.current?.focus();
        }, [p, q]),
        (0, r.jsx)(d.Y, {
            targetElementRef: q,
            spacing: 0,
            animation: d.Y.Animation.NONE,
            shouldShow: z,
            onRequestOpen: () => {
                X(!0);
            },
            onRequestClose: () => {
                X(!1);
            },
            renderPopout: (e) => {
                let { closePopout: n, position: i, updatePosition: a } = e;
                return (0, r.jsx)(b, {
                    className: R,
                    closeOnSelect: w,
                    maxVisibleItems: l,
                    width: "auto" === h ? void 0 : (h ?? Z),
                    isSelected: P,
                    closePopout: n,
                    buttonHeight: Q ?? 0,
                    onSelect: et,
                    options: t,
                    serialize: M,
                    renderOptionLabel: C,
                    optionClassName: L,
                    updatePosition: a,
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
                    label: B,
                    description: j,
                    helperText: H,
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
                                      i(e), X(!z);
                                  },
                            onKeyDown: (e) => {
                                "ArrowDown" === e.key ? X(!0) : "Escape" === e.key && d && (e.stopPropagation(), X(!1)),
                                    l(e);
                            },
                            ...u,
                            containerClassName: s()(g.kL, a),
                            "data-size": A,
                            "data-variant": I,
                            className: g.Lt,
                            "aria-haspopup": "listbox",
                            "aria-expanded": d,
                            "aria-label": V,
                            "aria-labelledby": F,
                            children: [
                                er.length > 0
                                    ? (0, r.jsx)(_.Text, {
                                          className: g.Uq,
                                          variant: "text-md/medium",
                                          children: N(er),
                                      })
                                    : (0, r.jsx)("span", { className: g.qf, children: n }),
                                (0, r.jsx)("div", {
                                    className: g.Pt,
                                    children: G
                                        ? (0, r.jsx)(_.nvX, { dotRadius: 3.5, themed: !0 })
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  E
                                                      ? (0, r.jsx)(_.DUT, {
                                                            role: "button",
                                                            "aria-disabled": o,
                                                            onClick: en,
                                                            "aria-label": m.intl.string(m.t.VkKicb),
                                                            children: (0, r.jsx)(_.PGe, {
                                                                size: "xs",
                                                                color: "currentColor",
                                                                className: g.IU,
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
function b(e) {
    let {
            className: t,
            onSelect: n,
            closePopout: a,
            closeOnSelect: u = !0,
            isSelected: d,
            options: _,
            width: f,
            maxVisibleItems: h,
            renderOptionLabel: m,
            serialize: E,
            optionClassName: A,
            buttonHeight: I,
            updatePosition: T,
            popoutPosition: y,
        } = e,
        [S, v] = i.useState(0),
        C = i.useRef(null),
        b = i.useId(),
        R = (0, o.Ay)({ id: b, async scrollToEnd() {}, async scrollToStart() {}, isEnabled: !0, wrap: !0 }),
        O = i.useRef(null);
    (0, c.tjt)(O),
        i.useLayoutEffect(() => {
            O.current?.focus();
        }, []),
        i.useEffect(() => {
            I > 0 && T();
        }, [I, T]),
        (0, p.A)(T),
        i.useLayoutEffect(() => {
            let e = C.current?.getBoundingClientRect()?.height;
            null != e && v(e);
        }, [h, _.length]),
        i.useEffect(() => {
            T();
        }, [T, S]);
    let D = i.useCallback(
            (e, t) => {
                n(e), u && !t && a();
            },
            [a, n, u],
        ),
        L = i.useMemo(
            () =>
                _.map((e, t) =>
                    (0, r.jsx)(
                        N,
                        {
                            isSelected: d(e.value),
                            value: e.value,
                            label: m(e),
                            onSelect: D,
                            className: A,
                            isDisabled: e.disabled,
                            preventCloseOnSelect: e.preventCloseOnSelect,
                            serialize: E,
                        },
                        e.key ?? t,
                    ),
                ),
            [D, d, A, _, m, E],
        ),
        w = _.length <= h ? c.zCo : c.ChK;
    return (0, r.jsx)(l.hD, {
        navigator: R,
        children: (0, r.jsx)(l.PR, {
            children: (e) => {
                let { ref: n, ...i } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(w, {
                            className: s()(g.SW, t, { [g.O3]: "top" === y }),
                            style: { width: f, maxHeight: S },
                            ref: (e) => {
                                let t = e?.getScrollerNode() ?? null;
                                (n.current = t), (O.current = t);
                            },
                            ...i,
                            role: "listbox",
                            children: L,
                        }),
                        (0, r.jsx)("div", { "aria-hidden": !0, ref: C, className: g.PG, children: L.slice(0, h) }),
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
            onSelect: a,
            isSelected: o,
            isDisabled: u,
            preventCloseOnSelect: c,
            serialize: d,
        } = e,
        f = (0, l.rm)(d(n));
    return (0, r.jsxs)(_.DUT, {
        focusProps: { enabled: !1 },
        className: s()(g.uK, t, { [g.IZ]: u }),
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
                    className: g.Dt,
                    width: 20,
                    height: 20,
                }),
        ],
    });
}
function R(e) {
    let { renderLeading: t, renderTrailing: n, value: i, onChange: a, ...s } = e,
        o = (0, h.w)("SingleSelect"),
        l = E({ value: i, onChange: a }),
        {
            id: u,
            options: d,
            autoFocus: _,
            required: f,
            isDisabled: p,
            isProcessing: m,
            clearable: A,
            closeOnSelect: I = !0,
            maxVisibleItems: T,
            "aria-label": y,
            placeholder: S,
            variant: v,
            renderOptionLabel: b,
        } = s,
        { fieldProps: N } = (0, c.ndh)(s),
        R = "text-only" === v || null != b;
    if (o && !R) {
        let e = null == N.label && null != y;
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
            disabled: p,
            loading: m,
            clearable: A,
            closeOnSelect: I,
            maxOptionsVisible: T,
            placeholder: S,
            ...N,
            label: e ? y : N.label,
            hideLabel: !0 === N.hideLabel || e,
        });
    }
    function O() {
        if (null != t || null != n)
            return (e) => (0, r.jsxs)("div", { className: g.G$, children: [t?.(e), e.label, n?.(e)] });
    }
    return (0, r.jsx)(C, { ...s, ...l, renderOptionLabel: b ?? O() });
}
function O(e) {
    let { renderLeading: t, renderTrailing: n, ...i } = e,
        a = (0, h.w)("Select"),
        {
            id: s,
            serialize: o,
            options: l,
            select: u,
            autoFocus: d,
            required: _,
            isDisabled: f,
            isProcessing: p,
            clearable: m,
            closeOnSelect: E,
            maxVisibleItems: A,
            placeholder: I,
            "aria-label": T,
            variant: y,
            isSelected: S,
            renderOptionLabel: v,
        } = i,
        { fieldProps: b } = (0, c.ndh)(i),
        N = "text-only" === y || null != v;
    if (a && !N) {
        let e = null == b.label && null != T;
        return (0, r.jsx)(c.l6P, {
            id: s,
            selectionMode: "single",
            onSelectionChange: (e) => {
                u(e);
            },
            value: l?.find((e) => S?.(e.value))?.value ?? void 0,
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
            loading: p,
            clearable: m,
            closeOnSelect: E,
            maxOptionsVisible: A,
            placeholder: I,
            ...b,
            label: e ? T : b.label,
            hideLabel: !0 === b.hideLabel || e,
        });
    }
    function R() {
        if (null != t || null != n)
            return (e) => (0, r.jsxs)("div", { className: g.G$, children: [t?.(e), e.label, n?.(e)] });
    }
    return (0, r.jsx)(C, { ...i, renderOptionLabel: v ?? R() });
}
