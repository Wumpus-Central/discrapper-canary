n.d(t, {
    Ee: () => I,
    Y8: () => T,
});
var r = n(595707),
    i = n(576418),
    a = n(995827),
    o = n(937397),
    s = n(913074),
    l = n(156748),
    c = n(819851),
    u = n(306373),
    d = n(33777),
    f = n(984940),
    p = n(69771),
    _ = n(485853),
    m = n(880016),
    h = n(158821),
    g = n(413565),
    E = n(401522),
    b = n(228400),
    y = n(473749);
let O = (0, y.createContext)(null),
    v = (0, y.createContext)(null),
    S = (0, y.createContext)(null),
    I = (0, y.forwardRef)(function (e, t) {
        var n, s;
        [e, t] = (0, r.pE)(e, t, O);
        let { validationBehavior: d } = (0, r.jn)(a.q) || {},
            f = null != (s = null != (n = e.validationBehavior) ? n : d) ? s : "native",
            p = (0, b.w)({
                ...e,
                validationBehavior: f,
            }),
            [_, g] = (0, r.xc)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                radioGroupProps: E,
                labelProps: v,
                descriptionProps: I,
                errorMessageProps: T,
                ...C
            } = (0, u.a)(
                {
                    ...e,
                    label: g,
                    validationBehavior: f,
                },
                p,
            ),
            A = (0, r.aX)({
                ...e,
                values: {
                    orientation: e.orientation || "vertical",
                    isDisabled: p.isDisabled,
                    isReadOnly: p.isReadOnly,
                    isRequired: p.isRequired,
                    isInvalid: p.isInvalid,
                    state: p,
                },
                defaultClassName: "react-aria-RadioGroup",
            }),
            N = (0, m.z)(e, { global: !0 });
        return y.createElement(
            "div",
            {
                ...(0, h.d)(N, A, E),
                ref: t,
                slot: e.slot || void 0,
                "data-orientation": e.orientation || "vertical",
                "data-invalid": p.isInvalid || void 0,
                "data-disabled": p.isDisabled || void 0,
                "data-readonly": p.isReadOnly || void 0,
                "data-required": p.isRequired || void 0,
            },
            y.createElement(
                r.zt,
                {
                    values: [
                        [S, p],
                        [
                            o.n,
                            {
                                ...v,
                                ref: _,
                                elementType: "span",
                            },
                        ],
                        [
                            c.j,
                            {
                                slots: {
                                    description: I,
                                    errorMessage: T,
                                },
                            },
                        ],
                        [i.E, C],
                    ],
                },
                y.createElement(l.y, null, A.children),
            ),
        );
    }),
    T = (0, y.forwardRef)(function (e, t) {
        let { inputRef: n = null, ...i } = e;
        [e, t] = (0, r.pE)(i, t, v);
        let a = y.useContext(S),
            o = (0, g.B)((0, y.useMemo)(() => (0, E.l)(n, void 0 !== e.inputRef ? e.inputRef : null), [n, e.inputRef])),
            {
                labelProps: l,
                inputProps: c,
                isSelected: u,
                isDisabled: b,
                isPressed: O,
            } = (0, d.x)(
                {
                    ...(0, r.vl)(e),
                    children: "function" == typeof e.children || e.children,
                },
                a,
                o,
            ),
            { isFocused: I, isFocusVisible: T, focusProps: C } = (0, f.F)(),
            A = b || a.isReadOnly,
            { hoverProps: N, isHovered: P } = (0, p.X)({
                ...e,
                isDisabled: A,
            }),
            R = (0, r.aX)({
                ...e,
                defaultClassName: "react-aria-Radio",
                values: {
                    isSelected: u,
                    isPressed: O,
                    isHovered: P,
                    isFocused: I,
                    isFocusVisible: T,
                    isDisabled: b,
                    isReadOnly: a.isReadOnly,
                    isInvalid: a.isInvalid,
                    isRequired: a.isRequired,
                },
            }),
            D = (0, m.z)(e, { global: !0 });
        return (
            delete D.id,
            delete D.onClick,
            y.createElement(
                "label",
                {
                    ...(0, h.d)(D, l, N, R),
                    ref: t,
                    "data-selected": u || void 0,
                    "data-pressed": O || void 0,
                    "data-hovered": P || void 0,
                    "data-focused": I || void 0,
                    "data-focus-visible": T || void 0,
                    "data-disabled": b || void 0,
                    "data-readonly": a.isReadOnly || void 0,
                    "data-invalid": a.isInvalid || void 0,
                    "data-required": a.isRequired || void 0,
                },
                y.createElement(
                    _.T,
                    { elementType: "span" },
                    y.createElement("input", {
                        ...(0, h.d)(c, C),
                        ref: o,
                    }),
                ),
                y.createElement(s.p.Provider, { value: { isSelected: u } }, R.children),
            )
        );
    });
