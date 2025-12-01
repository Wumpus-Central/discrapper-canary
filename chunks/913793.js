n.d(t, {
    V2: () => m,
    pJ: () => v,
});
var r = n(23893),
    l = n(595707),
    i = n(484944),
    o = n(984940),
    a = n(882069),
    s = n(752689),
    c = n(880016),
    u = n(158821),
    d = n(401522),
    f = n(473749);
let p = (0, f.createContext)(null),
    b = (0, f.createContext)(null),
    y = (0, f.createContext)(null),
    g = (0, f.createContext)(null),
    v = (0, f.forwardRef)(function (e, t) {
        [e, t] = (0, l.pE)(e, t, b);
        let n = (0, f.useContext)(p),
            { id: d, ...v } = e,
            m = (0, s.Me)();
        d || (d = m);
        let h = n ? n.expandedKeys.has(d) : e.isExpanded,
            x = (0, a.b)({
                ...e,
                isExpanded: h,
                onExpandedChange(t) {
                    var r;
                    n && n.toggleKey(d), null == (r = e.onExpandedChange) || r.call(e, t);
                },
            }),
            j = f.useRef(null),
            O = e.isDisabled || (null == n ? void 0 : n.isDisabled) || !1,
            { buttonProps: C, panelProps: P } = (0, i.q)(
                {
                    ...e,
                    isExpanded: h,
                    isDisabled: O,
                },
                x,
                j,
            ),
            { isFocusVisible: S, focusProps: _ } = (0, o.F)({ within: !0 }),
            E = (0, l.aX)({
                ...e,
                id: void 0,
                defaultClassName: "react-aria-Disclosure",
                values: {
                    isExpanded: x.isExpanded,
                    isDisabled: O,
                    isFocusVisibleWithin: S,
                    state: x,
                },
            }),
            w = (0, c.z)(v, { global: !0 });
        return f.createElement(
            l.zt,
            {
                values: [
                    [
                        r.b,
                        {
                            slots: {
                                [l.hO]: {},
                                trigger: C,
                            },
                        },
                    ],
                    [
                        g,
                        {
                            panelProps: P,
                            panelRef: j,
                        },
                    ],
                    [y, x],
                ],
            },
            f.createElement(
                "div",
                {
                    ...(0, u.d)(w, E, _),
                    ref: t,
                    "data-expanded": x.isExpanded || void 0,
                    "data-disabled": O || void 0,
                    "data-focus-visible-within": S || void 0,
                },
                E.children,
            ),
        );
    }),
    m = (0, f.forwardRef)(function (e, t) {
        let { role: n = "group" } = e,
            { panelProps: i, panelRef: a } = (0, f.useContext)(g),
            { isFocusVisible: s, focusProps: p } = (0, o.F)({ within: !0 }),
            b = (0, l.aX)({
                ...e,
                defaultClassName: "react-aria-DisclosurePanel",
                values: { isFocusVisibleWithin: s },
            }),
            y = (0, c.z)(e, { global: !0 });
        return f.createElement(
            "div",
            {
                ...(0, u.d)(y, b, i, p),
                ref: (0, d.l)(t, a),
                role: n,
                "data-focus-visible-within": s || void 0,
            },
            f.createElement(
                l.zt,
                {
                    values: [[r.b, null]],
                },
                e.children,
            ),
        );
    });
