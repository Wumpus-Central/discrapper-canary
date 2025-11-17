n.d(t, {
    V2: () => v,
    pJ: () => b,
});
var u = n(23893),
    r = n(595707),
    i = n(484944),
    o = n(984940),
    a = n(882069),
    s = n(752689),
    d = n(880016),
    f = n(158821),
    l = n(401522),
    c = n(473749);
let p = (0, c.createContext)(null),
    x = (0, c.createContext)(null),
    h = (0, c.createContext)(null),
    g = (0, c.createContext)(null),
    b = (0, c.forwardRef)(function (e, t) {
        [e, t] = (0, r.pE)(e, t, x);
        let n = (0, c.useContext)(p),
            { id: l, ...b } = e,
            v = (0, s.Me)();
        l || (l = v);
        let E = n ? n.expandedKeys.has(l) : e.isExpanded,
            m = (0, a.b)({
                ...e,
                isExpanded: E,
                onExpandedChange(t) {
                    var u;
                    n && n.toggleKey(l), null == (u = e.onExpandedChange) || u.call(e, t);
                },
            }),
            y = c.useRef(null),
            A = e.isDisabled || (null == n ? void 0 : n.isDisabled) || !1,
            { buttonProps: C, panelProps: P } = (0, i.q)(
                {
                    ...e,
                    isExpanded: E,
                    isDisabled: A,
                },
                m,
                y,
            ),
            { isFocusVisible: w, focusProps: R } = (0, o.F)({ within: !0 }),
            S = (0, r.aX)({
                ...e,
                id: void 0,
                defaultClassName: "react-aria-Disclosure",
                values: {
                    isExpanded: m.isExpanded,
                    isDisabled: A,
                    isFocusVisibleWithin: w,
                    state: m,
                },
            }),
            z = (0, d.z)(b, { global: !0 });
        return c.createElement(
            r.zt,
            {
                values: [
                    [
                        u.b,
                        {
                            slots: {
                                [r.hO]: {},
                                trigger: C,
                            },
                        },
                    ],
                    [
                        g,
                        {
                            panelProps: P,
                            panelRef: y,
                        },
                    ],
                    [h, m],
                ],
            },
            c.createElement(
                "div",
                {
                    ...(0, f.d)(z, S, R),
                    ref: t,
                    "data-expanded": m.isExpanded || void 0,
                    "data-disabled": A || void 0,
                    "data-focus-visible-within": w || void 0,
                },
                S.children,
            ),
        );
    }),
    v = (0, c.forwardRef)(function (e, t) {
        let { role: n = "group" } = e,
            { panelProps: i, panelRef: a } = (0, c.useContext)(g),
            { isFocusVisible: s, focusProps: p } = (0, o.F)({ within: !0 }),
            x = (0, r.aX)({
                ...e,
                defaultClassName: "react-aria-DisclosurePanel",
                values: { isFocusVisibleWithin: s },
            }),
            h = (0, d.z)(e, { global: !0 });
        return c.createElement(
            "div",
            {
                ...(0, f.d)(h, x, i, p),
                ref: (0, l.l)(t, a),
                role: n,
                "data-focus-visible-within": s || void 0,
            },
            c.createElement(
                r.zt,
                {
                    values: [[u.b, null]],
                },
                e.children,
            ),
        );
    });
