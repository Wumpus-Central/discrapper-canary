"use strict";
n.d(t, { $Q: () => N, Sc: () => v });
var r = n(257537),
    i = n(825913),
    s = n(162376),
    a = n(461212),
    o = n(129844),
    l = n(193523),
    u = n(376546),
    c = n(803082),
    d = n(476311),
    _ = n(360881),
    f = n(498430),
    p = n(967158),
    h = n(126031),
    E = n(559077),
    m = n(823807),
    g = n(290424),
    A = n(533715),
    I = n(561514),
    T = n(64700);
let S = (0, T.createContext)(null),
    y = (0, T.createContext)(null),
    N = (0, T.forwardRef)(function (e, t) {
        var n, r;
        [e, t] = (0, i.JT)(e, t, S);
        let { validationBehavior: d } = (0, i.CC)(a.c) || {},
            _ = null != (r = null != (n = e.validationBehavior) ? n : d) ? r : "native",
            f = (0, E.h)({ ...e, validationBehavior: _ }),
            [p, h] = (0, i._E)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                groupProps: m,
                labelProps: A,
                descriptionProps: I,
                errorMessageProps: N,
                ...v
            } = (0, u.M)({ ...e, label: h, validationBehavior: _ }, f),
            C = (0, i.Sl)({
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
            O = (0, g.$)(e, { global: !0 });
        return T.createElement(
            "div",
            {
                ...(0, c.v)(O, C, m),
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
                        [y, f],
                        [o.I, { ...A, ref: p, elementType: "span" }],
                        [l.h, { slots: { description: I, errorMessage: N } }],
                        [s.C, v],
                    ],
                },
                C.children,
            ),
        );
    }),
    v = (0, T.forwardRef)(function (e, t) {
        var n, s;
        let { inputRef: o = null, ...l } = e;
        [e, t] = (0, i.JT)(l, t, r.BP);
        let { validationBehavior: u } = (0, i.CC)(a.c) || {},
            E = null != (s = null != (n = e.validationBehavior) ? n : u) ? s : "native",
            S = (0, T.useContext)(y),
            N = (0, A.U)((0, T.useMemo)(() => (0, I.P)(o, void 0 !== e.inputRef ? e.inputRef : null), [o, e.inputRef])),
            {
                labelProps: v,
                inputProps: C,
                isSelected: O,
                isDisabled: R,
                isReadOnly: b,
                isPressed: D,
                isInvalid: L,
            } = S
                ? (0, d.B)(
                      { ...(0, i.SK)(e), value: e.value, children: "function" == typeof e.children || e.children },
                      S,
                      N,
                  )
                : (0, _.v)(
                      {
                          ...(0, i.SK)(e),
                          children: "function" == typeof e.children || e.children,
                          validationBehavior: E,
                      },
                      (0, m.H)(e),
                      N,
                  ),
            { isFocused: w, isFocusVisible: M, focusProps: P } = (0, f.o)(),
            x = R || b,
            { hoverProps: k, isHovered: U } = (0, p.M)({ ...e, isDisabled: x }),
            G = (0, i.Sl)({
                ...e,
                defaultClassName: "react-aria-Checkbox",
                values: {
                    isSelected: O,
                    isIndeterminate: e.isIndeterminate || !1,
                    isPressed: D,
                    isHovered: U,
                    isFocused: w,
                    isFocusVisible: M,
                    isDisabled: R,
                    isReadOnly: b,
                    isInvalid: L,
                    isRequired: e.isRequired || !1,
                },
            }),
            F = (0, g.$)(e, { global: !0 });
        return (
            delete F.id,
            delete F.onClick,
            T.createElement(
                "label",
                {
                    ...(0, c.v)(F, v, k, G),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-selected": O || void 0,
                    "data-indeterminate": e.isIndeterminate || void 0,
                    "data-pressed": D || void 0,
                    "data-hovered": U || void 0,
                    "data-focused": w || void 0,
                    "data-focus-visible": M || void 0,
                    "data-disabled": R || void 0,
                    "data-readonly": b || void 0,
                    "data-invalid": L || void 0,
                    "data-required": e.isRequired || void 0,
                },
                T.createElement(h.s, { elementType: "span" }, T.createElement("input", { ...(0, c.v)(C, P), ref: N })),
                G.children,
            )
        );
    });
