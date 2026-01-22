n.d(t, {
    $Q: () => S,
    Sc: () => I,
});
var r = n(257537),
    i = n(825913),
    a = n(162376),
    s = n(461212),
    o = n(129844),
    l = n(193523),
    c = n(376546),
    u = n(803082),
    d = n(476311),
    f = n(360881),
    p = n(498430),
    _ = n(967158),
    h = n(126031),
    m = n(559077),
    g = n(823807),
    E = n(290424),
    b = n(533715),
    y = n(561514),
    O = n(64700);
let A = (0, O.createContext)(null),
    v = (0, O.createContext)(null),
    S = (0, O.forwardRef)(function (e, t) {
        var n, r;
        [e, t] = (0, i.JT)(e, t, A);
        let { validationBehavior: d } = (0, i.CC)(s.c) || {},
            f = null != (r = null != (n = e.validationBehavior) ? n : d) ? r : "native",
            p = (0, m.h)({
                ...e,
                validationBehavior: f,
            }),
            [_, h] = (0, i._E)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                groupProps: g,
                labelProps: b,
                descriptionProps: y,
                errorMessageProps: S,
                ...I
            } = (0, c.M)(
                {
                    ...e,
                    label: h,
                    validationBehavior: f,
                },
                p,
            ),
            T = (0, i.Sl)({
                ...e,
                values: {
                    isDisabled: p.isDisabled,
                    isReadOnly: p.isReadOnly,
                    isRequired: e.isRequired || !1,
                    isInvalid: p.isInvalid,
                    state: p,
                },
                defaultClassName: "react-aria-CheckboxGroup",
            }),
            C = (0, E.$)(e, { global: !0 });
        return O.createElement(
            "div",
            {
                ...(0, u.v)(C, T, g),
                ref: t,
                slot: e.slot || void 0,
                "data-readonly": p.isReadOnly || void 0,
                "data-required": e.isRequired || void 0,
                "data-invalid": p.isInvalid || void 0,
                "data-disabled": e.isDisabled || void 0,
            },
            O.createElement(
                i.Kq,
                {
                    values: [
                        [v, p],
                        [
                            o.I,
                            {
                                ...b,
                                ref: _,
                                elementType: "span",
                            },
                        ],
                        [
                            l.h,
                            {
                                slots: {
                                    description: y,
                                    errorMessage: S,
                                },
                            },
                        ],
                        [a.C, I],
                    ],
                },
                T.children,
            ),
        );
    }),
    I = (0, O.forwardRef)(function (e, t) {
        var n, a;
        let { inputRef: o = null, ...l } = e;
        [e, t] = (0, i.JT)(l, t, r.BP);
        let { validationBehavior: c } = (0, i.CC)(s.c) || {},
            m = null != (a = null != (n = e.validationBehavior) ? n : c) ? a : "native",
            A = (0, O.useContext)(v),
            S = (0, b.U)((0, O.useMemo)(() => (0, y.P)(o, void 0 !== e.inputRef ? e.inputRef : null), [o, e.inputRef])),
            {
                labelProps: I,
                inputProps: T,
                isSelected: C,
                isDisabled: N,
                isReadOnly: R,
                isPressed: w,
                isInvalid: P,
            } = A
                ? (0, d.B)(
                      {
                          ...(0, i.SK)(e),
                          value: e.value,
                          children: "function" == typeof e.children || e.children,
                      },
                      A,
                      S,
                  )
                : (0, f.v)(
                      {
                          ...(0, i.SK)(e),
                          children: "function" == typeof e.children || e.children,
                          validationBehavior: m,
                      },
                      (0, g.H)(e),
                      S,
                  ),
            { isFocused: D, isFocusVisible: x, focusProps: L } = (0, p.o)(),
            j = N || R,
            { hoverProps: M, isHovered: k } = (0, _.M)({
                ...e,
                isDisabled: j,
            }),
            U = (0, i.Sl)({
                ...e,
                defaultClassName: "react-aria-Checkbox",
                values: {
                    isSelected: C,
                    isIndeterminate: e.isIndeterminate || !1,
                    isPressed: w,
                    isHovered: k,
                    isFocused: D,
                    isFocusVisible: x,
                    isDisabled: N,
                    isReadOnly: R,
                    isInvalid: P,
                    isRequired: e.isRequired || !1,
                },
            }),
            G = (0, E.$)(e, { global: !0 });
        return (
            delete G.id,
            delete G.onClick,
            O.createElement(
                "label",
                {
                    ...(0, u.v)(G, I, M, U),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-selected": C || void 0,
                    "data-indeterminate": e.isIndeterminate || void 0,
                    "data-pressed": w || void 0,
                    "data-hovered": k || void 0,
                    "data-focused": D || void 0,
                    "data-focus-visible": x || void 0,
                    "data-disabled": N || void 0,
                    "data-readonly": R || void 0,
                    "data-invalid": P || void 0,
                    "data-required": e.isRequired || void 0,
                },
                O.createElement(
                    h.s,
                    { elementType: "span" },
                    O.createElement("input", {
                        ...(0, u.v)(T, L),
                        ref: S,
                    }),
                ),
                U.children,
            )
        );
    });
