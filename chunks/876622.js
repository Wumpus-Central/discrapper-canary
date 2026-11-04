var s = l(477900),
    i = l(582128),
    n = l(503698),
    a = l.n(n),
    r = l(646514),
    o = l(265872),
    c = l(761508),
    d = l(834730),
    u = l(900797),
    m = l(847374),
    h = l(3666),
    p = l(770178),
    g = l(124589),
    x = l(792996),
    j = l(129066);
function v(e) {
    let { onTabSelect: t, tabs: l, selectedTab: n } = e,
        h = i.useMemo(
            () =>
                null !=
                l.find((e) => {
                    let { id: t } = e;
                    return t === n;
                }),
            [n, l],
        ),
        [p, v] = i.useState(!1),
        A = (function (e) {
            let { selected: t, isHovered: l } = e;
            return l ? "text-strong" : t ? "text-brand" : "text-default";
        })({ selected: h, isHovered: p }),
        C = (function (e) {
            let { selected: t, isHovered: l } = e;
            return l ? r.A.colors.TEXT_STRONG : t ? r.A.colors.TEXT_BRAND : r.A.colors.INTERACTIVE_TEXT_DEFAULT;
        })({ selected: h, isHovered: p }),
        f = i.useCallback(() => v(!0), []),
        I = i.useCallback(() => v(!1), []),
        N = i.useRef(null);
    return (0, s.jsx)(o.Y, {
        targetElementRef: N,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, s.jsx)(g.A, { selectedTab: n, onClose: i, tabs: l, onTabSelect: t });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, s.jsx)(c.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                selectedItem: h ? "more" : void 0,
                className: a()(j.Mf, { [j.wH]: !1 }),
                clickableRef: (e) => {
                    null != e && null != e.ref && (N.current = e.ref);
                },
                "aria-label": x.intl.string(x.t["UKOtz+"]),
                children: (0, s.jsxs)("div", {
                    className: j.OS,
                    onMouseEnter: f,
                    onMouseLeave: I,
                    children: [
                        (0, s.jsx)(d.E, {
                            variant: "body-sm/semibold",
                            color: A,
                            children: x.intl.string(x.t["UKOtz+"]),
                        }),
                        l ? (0, s.jsx)(u.t, { size: "xs", color: C }) : (0, s.jsx)(m.a, { size: "xs", color: C }),
                    ],
                }),
            });
        },
    });
}
l.d(
    t,
    {},
    {
        A: function (e) {
            let { className: t, selectedTab: l, tabs: n, onTabSelect: r, onAvailableWidthChange: o } = e,
                [u, m] = i.useState(0),
                g = i.useRef(u),
                {
                    lastVisibleIndex: x,
                    onItemLayout: A,
                    overflowItemsRef: C,
                    itemWidthsRef: f,
                } = (0, h.Wv)({ items: n, itemGapPx: 20, maxLines: 1, containerWidth: u }),
                I = i.useMemo(() => n.slice(0, x + 1), [x, n]),
                N = i.useMemo(() => n.slice(x + 1), [x, n]),
                y = i.useRef(null),
                b = i.useCallback(
                    (e) => {
                        let t = e.contentRect.width;
                        if (null == t || g.current === t) return;
                        (m(t), (g.current = t));
                        let l = t - f.current.reduce((e, t, l) => e + t + 20 * (0 !== l));
                        o?.(l);
                    },
                    [f, o],
                );
            (0, p.g)(y, b);
            let _ = 0 !== u;
            return (0, s.jsxs)("div", {
                className: a()(j.kL, t),
                ref: y,
                children: [
                    (0, s.jsxs)("div", {
                        className: j.Kk,
                        children: [
                            n.map((e, t) =>
                                (0, s.jsx)(
                                    h.Ae,
                                    {
                                        index: t,
                                        onItemLayout: A,
                                        children: (0, s.jsx)(c.V.Item, {
                                            id: e.id,
                                            "aria-label": e.label,
                                            className: j.Mf,
                                            children: (0, s.jsx)(d.E, { variant: "body-md/medium", children: e.label }),
                                        }),
                                    },
                                    e.id,
                                ),
                            ),
                            (0, s.jsx)("div", {
                                ref: C,
                                children: (0, s.jsx)(v, { tabs: N, onTabSelect: r, selectedTab: l }),
                            }),
                        ],
                    }),
                    _ &&
                        (0, s.jsxs)(c.V, {
                            type: "top",
                            look: "brand",
                            selectedItem: l,
                            onItemSelect: r,
                            className: j.vR,
                            children: [
                                I.map((e) =>
                                    (0, s.jsx)(
                                        c.V.Item,
                                        {
                                            id: e.id,
                                            look: "brand",
                                            "aria-label": e.label,
                                            className: j.Mf,
                                            children: e.label,
                                        },
                                        e.id,
                                    ),
                                ),
                                0 !== N.length ? (0, s.jsx)(v, { tabs: N, onTabSelect: r, selectedTab: l }) : null,
                            ],
                        }),
                ],
            });
        },
    },
);
