var i = l(477900),
    n = l(582128),
    s = l(503698),
    a = l.n(s),
    r = l(646514),
    o = l(265872),
    c = l(761508),
    d = l(834730),
    u = l(900797),
    h = l(847374),
    m = l(3666),
    p = l(770178),
    g = l(124589),
    x = l(792996),
    v = l(129066);
function j(e) {
    let { onTabSelect: t, tabs: l, selectedTab: s } = e,
        m = n.useMemo(
            () =>
                null !=
                l.find((e) => {
                    let { id: t } = e;
                    return t === s;
                }),
            [s, l],
        ),
        [p, j] = n.useState(!1),
        A = (function (e) {
            let { selected: t, isHovered: l } = e;
            return l ? "text-strong" : t ? "text-brand" : "text-default";
        })({ selected: m, isHovered: p }),
        C = (function (e) {
            let { selected: t, isHovered: l } = e;
            return l ? r.A.colors.TEXT_STRONG : t ? r.A.colors.TEXT_BRAND : r.A.colors.INTERACTIVE_TEXT_DEFAULT;
        })({ selected: m, isHovered: p }),
        I = n.useCallback(() => j(!0), []),
        f = n.useCallback(() => j(!1), []),
        N = n.useRef(null);
    return (0, i.jsx)(o.Y, {
        targetElementRef: N,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(g.A, { selectedTab: s, onClose: n, tabs: l, onTabSelect: t });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, i.jsx)(c.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                selectedItem: m ? "more" : void 0,
                className: a()(v.Mf, { [v.wH]: !1 }),
                clickableRef: (e) => {
                    null != e && null != e.ref && (N.current = e.ref);
                },
                "aria-label": x.intl.string(x.t["UKOtz+"]),
                children: (0, i.jsxs)("div", {
                    className: v.OS,
                    onMouseEnter: I,
                    onMouseLeave: f,
                    children: [
                        (0, i.jsx)(d.E, {
                            variant: "body-sm/semibold",
                            color: A,
                            children: x.intl.string(x.t["UKOtz+"]),
                        }),
                        l
                            ? (0, i.jsx)(u.ChevronSmallUpIcon, { size: "xs", color: C })
                            : (0, i.jsx)(h.ChevronSmallDownIcon, { size: "xs", color: C }),
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
            let { className: t, selectedTab: l, tabs: s, onTabSelect: r, onAvailableWidthChange: o } = e,
                [u, h] = n.useState(0),
                g = n.useRef(u),
                {
                    lastVisibleIndex: x,
                    onItemLayout: A,
                    overflowItemsRef: C,
                    itemWidthsRef: I,
                } = (0, m.Wv)({ items: s, itemGapPx: 20, maxLines: 1, containerWidth: u }),
                f = n.useMemo(() => s.slice(0, x + 1), [x, s]),
                N = n.useMemo(() => s.slice(x + 1), [x, s]),
                b = n.useRef(null),
                y = n.useCallback(
                    (e) => {
                        let t = e.contentRect.width;
                        if (null == t || g.current === t) return;
                        (h(t), (g.current = t));
                        let l = t - I.current.reduce((e, t, l) => e + t + 20 * (0 !== l));
                        o?.(l);
                    },
                    [I, o],
                );
            (0, p.g)(b, y);
            let E = 0 !== u;
            return (0, i.jsxs)("div", {
                className: a()(v.kL, t),
                ref: b,
                children: [
                    (0, i.jsxs)("div", {
                        className: v.Kk,
                        children: [
                            s.map((e, t) =>
                                (0, i.jsx)(
                                    m.Ae,
                                    {
                                        index: t,
                                        onItemLayout: A,
                                        children: (0, i.jsx)(c.V.Item, {
                                            id: e.id,
                                            "aria-label": e.label,
                                            className: v.Mf,
                                            children: (0, i.jsx)(d.E, { variant: "body-md/medium", children: e.label }),
                                        }),
                                    },
                                    e.id,
                                ),
                            ),
                            (0, i.jsx)("div", {
                                ref: C,
                                children: (0, i.jsx)(j, { tabs: N, onTabSelect: r, selectedTab: l }),
                            }),
                        ],
                    }),
                    E &&
                        (0, i.jsxs)(c.V, {
                            type: "top",
                            look: "brand",
                            selectedItem: l,
                            onItemSelect: r,
                            className: v.vR,
                            children: [
                                f.map((e) =>
                                    (0, i.jsx)(
                                        c.V.Item,
                                        {
                                            id: e.id,
                                            look: "brand",
                                            "aria-label": e.label,
                                            className: v.Mf,
                                            children: e.label,
                                        },
                                        e.id,
                                    ),
                                ),
                                0 !== N.length ? (0, i.jsx)(j, { tabs: N, onTabSelect: r, selectedTab: l }) : null,
                            ],
                        }),
                ],
            });
        },
    },
);
