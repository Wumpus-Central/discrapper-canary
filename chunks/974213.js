"use strict";
n.d(t, { $Q: () => v, Sc: () => C });
var r = n(257537),
    i = n(825913),
    a = n(162376),
    s = n(461212),
    o = n(129844),
    l = n(193523),
    u = n(376546),
    c = n(803082),
    d = n(476311),
    _ = n(360881),
    f = n(498430),
    p = n(967158),
    h = n(126031),
    m = n(559077),
    g = n(823807),
    E = n(290424),
    A = n(533715),
    I = n(561514),
    T = n(64700);
let y = (0, T.createContext)(null),
    S = (0, T.createContext)(null),
    v = (0, T.forwardRef)(function (e, t) {
        var n, r;
        [e, t] = (0, i.JT)(e, t, y);
        let { validationBehavior: d } = (0, i.CC)(s.c) || {},
            _ = null != (r = null != (n = e.validationBehavior) ? n : d) ? r : "native",
            f = (0, m.h)({ ...e, validationBehavior: _ }),
            [p, h] = (0, i._E)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                groupProps: g,
                labelProps: A,
                descriptionProps: I,
                errorMessageProps: v,
                ...C
            } = (0, u.M)({ ...e, label: h, validationBehavior: _ }, f),
            b = (0, i.Sl)({
                ...e,
                values: {
                    isDisabled: f.isDisabled,
                    isReadOnly: f.isReadOnly,
                    isRequired: e.isRequired || !1,
                    isInvalid: f.isInvalid,
                    state: f,
                },
                defaultClassName: "react-aria-CheckboxGroup",
            }),
            N = (0, E.$)(e, { global: !0 });
        return T.createElement(
            "div",
            {
                ...(0, c.v)(N, b, g),
                ref: t,
                slot: e.slot || void 0,
                "data-readonly": f.isReadOnly || void 0,
                "data-required": e.isRequired || void 0,
                "data-invalid": f.isInvalid || void 0,
                "data-disabled": e.isDisabled || void 0,
            },
            T.createElement(
                i.Kq,
                {
                    values: [
                        [S, f],
                        [o.I, { ...A, ref: p, elementType: "span" }],
                        [l.h, { slots: { description: I, errorMessage: v } }],
                        [a.C, C],
                    ],
                },
                b.children,
            ),
        );
    }),
    C = (0, T.forwardRef)(function (e, t) {
        var n, a;
        let { inputRef: o = null, ...l } = e;
        [e, t] = (0, i.JT)(l, t, r.BP);
        let { validationBehavior: u } = (0, i.CC)(s.c) || {},
            m = null != (a = null != (n = e.validationBehavior) ? n : u) ? a : "native",
            y = (0, T.useContext)(S),
            v = (0, A.U)((0, T.useMemo)(() => (0, I.P)(o, void 0 !== e.inputRef ? e.inputRef : null), [o, e.inputRef])),
            {
                labelProps: C,
                inputProps: b,
                isSelected: N,
                isDisabled: R,
                isReadOnly: O,
                isPressed: D,
                isInvalid: L,
            } = y
                ? (0, d.B)(
                      { ...(0, i.SK)(e), value: e.value, children: "function" == typeof e.children || e.children },
                      y,
                      v,
                  )
                : (0, _.v)(
                      {
                          ...(0, i.SK)(e),
                          children: "function" == typeof e.children || e.children,
                          validationBehavior: m,
                      },
                      (0, g.H)(e),
                      v,
                  ),
            { isFocused: w, isFocusVisible: x, focusProps: P } = (0, f.o)(),
            M = R || O,
            { hoverProps: k, isHovered: U } = (0, p.M)({ ...e, isDisabled: M }),
            G = (0, i.Sl)({
                ...e,
                defaultClassName: "react-aria-Checkbox",
                values: {
                    isSelected: N,
                    isIndeterminate: e.isIndeterminate || !1,
                    isPressed: D,
                    isHovered: U,
                    isFocused: w,
                    isFocusVisible: x,
                    isDisabled: R,
                    isReadOnly: O,
                    isInvalid: L,
                    isRequired: e.isRequired || !1,
                },
            }),
            V = (0, E.$)(e, { global: !0 });
        return (
            delete V.id,
            delete V.onClick,
            T.createElement(
                "label",
                {
                    ...(0, c.v)(V, C, k, G),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-selected": N || void 0,
                    "data-indeterminate": e.isIndeterminate || void 0,
                    "data-pressed": D || void 0,
                    "data-hovered": U || void 0,
                    "data-focused": w || void 0,
                    "data-focus-visible": x || void 0,
                    "data-disabled": R || void 0,
                    "data-readonly": O || void 0,
                    "data-invalid": L || void 0,
                    "data-required": e.isRequired || void 0,
                },
                T.createElement(h.s, { elementType: "span" }, T.createElement("input", { ...(0, c.v)(b, P), ref: v })),
                G.children,
            )
        );
    });
