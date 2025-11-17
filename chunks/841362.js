n.d(t, {
    Ee: () => T,
    Y8: () => S,
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
    _ = n(69771),
    p = n(485853),
    h = n(880016),
    m = n(158821),
    g = n(413565),
    E = n(401522),
    b = n(228400),
    y = n(473749);
let O = (0, y.createContext)(null),
    v = (0, y.createContext)(null),
    I = (0, y.createContext)(null),
    T = (0, y.forwardRef)(function (e, t) {
        var n, s;
        [e, t] = (0, r.pE)(e, t, O);
        let { validationBehavior: d } = (0, r.jn)(a.q) || {},
            f = null != (s = null != (n = e.validationBehavior) ? n : d) ? s : "native",
            _ = (0, b.w)({
                ...e,
                validationBehavior: f,
            }),
            [p, g] = (0, r.xc)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                radioGroupProps: E,
                labelProps: v,
                descriptionProps: T,
                errorMessageProps: S,
                ...A
            } = (0, u.a)(
                {
                    ...e,
                    label: g,
                    validationBehavior: f,
                },
                _,
            ),
            C = (0, r.aX)({
                ...e,
                values: {
                    orientation: e.orientation || "vertical",
                    isDisabled: _.isDisabled,
                    isReadOnly: _.isReadOnly,
                    isRequired: _.isRequired,
                    isInvalid: _.isInvalid,
                    state: _,
                },
                defaultClassName: "react-aria-RadioGroup",
            }),
            N = (0, h.z)(e, { global: !0 });
        return y.createElement(
            "div",
            {
                ...(0, m.d)(N, C, E),
                ref: t,
                slot: e.slot || void 0,
                "data-orientation": e.orientation || "vertical",
                "data-invalid": _.isInvalid || void 0,
                "data-disabled": _.isDisabled || void 0,
                "data-readonly": _.isReadOnly || void 0,
                "data-required": _.isRequired || void 0,
            },
            y.createElement(
                r.zt,
                {
                    values: [
                        [I, _],
                        [
                            o.n,
                            {
                                ...v,
                                ref: p,
                                elementType: "span",
                            },
                        ],
                        [
                            c.j,
                            {
                                slots: {
                                    description: T,
                                    errorMessage: S,
                                },
                            },
                        ],
                        [i.E, A],
                    ],
                },
                y.createElement(l.y, null, C.children),
            ),
        );
    }),
    S = (0, y.forwardRef)(function (e, t) {
        let { inputRef: n = null, ...i } = e;
        [e, t] = (0, r.pE)(i, t, v);
        let a = y.useContext(I),
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
            { isFocused: T, isFocusVisible: S, focusProps: A } = (0, f.F)(),
            C = b || a.isReadOnly,
            { hoverProps: N, isHovered: R } = (0, _.X)({
                ...e,
                isDisabled: C,
            }),
            P = (0, r.aX)({
                ...e,
                defaultClassName: "react-aria-Radio",
                values: {
                    isSelected: u,
                    isPressed: O,
                    isHovered: R,
                    isFocused: T,
                    isFocusVisible: S,
                    isDisabled: b,
                    isReadOnly: a.isReadOnly,
                    isInvalid: a.isInvalid,
                    isRequired: a.isRequired,
                },
            }),
            D = (0, h.z)(e, { global: !0 });
        return (
            delete D.id,
            delete D.onClick,
            y.createElement(
                "label",
                {
                    ...(0, m.d)(D, l, N, P),
                    ref: t,
                    "data-selected": u || void 0,
                    "data-pressed": O || void 0,
                    "data-hovered": R || void 0,
                    "data-focused": T || void 0,
                    "data-focus-visible": S || void 0,
                    "data-disabled": b || void 0,
                    "data-readonly": a.isReadOnly || void 0,
                    "data-invalid": a.isInvalid || void 0,
                    "data-required": a.isRequired || void 0,
                },
                y.createElement(
                    p.T,
                    { elementType: "span" },
                    y.createElement("input", {
                        ...(0, m.d)(c, A),
                        ref: o,
                    }),
                ),
                y.createElement(s.p.Provider, { value: { isSelected: u } }, P.children),
            )
        );
    });
