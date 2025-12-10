n.d(t, {
    V2: () => E,
    pJ: () => g,
});
var r = n(23893),
    i = n(595707),
    a = n(484944),
    o = n(984940),
    s = n(882069),
    l = n(752689),
    c = n(880016),
    u = n(158821),
    d = n(401522),
    f = n(473749);
let p = (0, f.createContext)(null),
    _ = (0, f.createContext)(null),
    m = (0, f.createContext)(null),
    h = (0, f.createContext)(null),
    g = (0, f.forwardRef)(function (e, t) {
        [e, t] = (0, i.pE)(e, t, _);
        let n = (0, f.useContext)(p),
            { id: d, ...g } = e,
            E = (0, l.Me)();
        d || (d = E);
        let b = n ? n.expandedKeys.has(d) : e.isExpanded,
            y = (0, s.b)({
                ...e,
                isExpanded: b,
                onExpandedChange(t) {
                    var r;
                    n && n.toggleKey(d), null == (r = e.onExpandedChange) || r.call(e, t);
                },
            }),
            O = f.useRef(null),
            v = e.isDisabled || (null == n ? void 0 : n.isDisabled) || !1,
            { buttonProps: S, panelProps: I } = (0, a.q)(
                {
                    ...e,
                    isExpanded: b,
                    isDisabled: v,
                },
                y,
                O,
            ),
            { isFocusVisible: T, focusProps: C } = (0, o.F)({ within: !0 }),
            A = (0, i.aX)({
                ...e,
                id: void 0,
                defaultClassName: "react-aria-Disclosure",
                values: {
                    isExpanded: y.isExpanded,
                    isDisabled: v,
                    isFocusVisibleWithin: T,
                    state: y,
                },
            }),
            N = (0, c.z)(g, { global: !0 });
        return f.createElement(
            i.zt,
            {
                values: [
                    [
                        r.b,
                        {
                            slots: {
                                [i.hO]: {},
                                trigger: S,
                            },
                        },
                    ],
                    [
                        h,
                        {
                            panelProps: I,
                            panelRef: O,
                        },
                    ],
                    [m, y],
                ],
            },
            f.createElement(
                "div",
                {
                    ...(0, u.d)(N, A, C),
                    ref: t,
                    "data-expanded": y.isExpanded || void 0,
                    "data-disabled": v || void 0,
                    "data-focus-visible-within": T || void 0,
                },
                A.children,
            ),
        );
    }),
    E = (0, f.forwardRef)(function (e, t) {
        let { role: n = "group" } = e,
            { panelProps: a, panelRef: s } = (0, f.useContext)(h),
            { isFocusVisible: l, focusProps: p } = (0, o.F)({ within: !0 }),
            _ = (0, i.aX)({
                ...e,
                defaultClassName: "react-aria-DisclosurePanel",
                values: { isFocusVisibleWithin: l },
            }),
            m = (0, c.z)(e, { global: !0 });
        return f.createElement(
            "div",
            {
                ...(0, u.d)(m, _, a, p),
                ref: (0, d.l)(t, s),
                role: n,
                "data-focus-visible-within": l || void 0,
            },
            f.createElement(
                i.zt,
                {
                    values: [[r.b, null]],
                },
                e.children,
            ),
        );
    });
