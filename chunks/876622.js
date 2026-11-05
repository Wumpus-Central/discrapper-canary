var n = l(477900),
    s = l(582128),
    i = l(503698),
    a = l.n(i),
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
    v = l(129066);
function j(e) {
    let { onTabSelect: t, tabs: l, selectedTab: i } = e,
        h = s.useMemo(
            () =>
                null !=
                l.find((e) => {
                    let { id: t } = e;
                    return t === i;
                }),
            [i, l],
        ),
        [p, j] = s.useState(!1),
        C = (function (e) {
            let { selected: t, isHovered: l } = e;
            return l ? "text-strong" : t ? "text-brand" : "text-default";
        })({ selected: h, isHovered: p }),
        A = (function (e) {
            let { selected: t, isHovered: l } = e;
            return l ? r.A.colors.TEXT_STRONG : t ? r.A.colors.TEXT_BRAND : r.A.colors.INTERACTIVE_TEXT_DEFAULT;
        })({ selected: h, isHovered: p }),
        I = s.useCallback(() => j(!0), []),
        f = s.useCallback(() => j(!1), []),
        N = s.useRef(null);
    return (0, n.jsx)(o.Y, {
        targetElementRef: N,
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, n.jsx)(g.A, { selectedTab: i, onClose: s, tabs: l, onTabSelect: t });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, n.jsx)(c.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                selectedItem: h ? "more" : void 0,
                className: a()(v.Mf, { [v.wH]: !1 }),
                clickableRef: (e) => {
                    null != e && null != e.ref && (N.current = e.ref);
                },
                "aria-label": x.intl.string(x.t["UKOtz+"]),
                children: (0, n.jsxs)("div", {
                    className: v.OS,
                    onMouseEnter: I,
                    onMouseLeave: f,
                    children: [
                        (0, n.jsx)(d.E, {
                            variant: "body-sm/semibold",
                            color: C,
                            children: x.intl.string(x.t["UKOtz+"]),
                        }),
                        l
                            ? (0, n.jsx)(u.ChevronSmallUpIcon, { size: "xs", color: A })
                            : (0, n.jsx)(m.ChevronSmallDownIcon, { size: "xs", color: A }),
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
            let { className: t, selectedTab: l, tabs: i, onTabSelect: r, onAvailableWidthChange: o } = e,
                [u, m] = s.useState(0),
                g = s.useRef(u),
                {
                    lastVisibleIndex: x,
                    onItemLayout: C,
                    overflowItemsRef: A,
                    itemWidthsRef: I,
                } = (0, h.Wv)({ items: i, itemGapPx: 20, maxLines: 1, containerWidth: u }),
                f = s.useMemo(() => i.slice(0, x + 1), [x, i]),
                N = s.useMemo(() => i.slice(x + 1), [x, i]),
                b = s.useRef(null),
                y = s.useCallback(
                    (e) => {
                        let t = e.contentRect.width;
                        if (null == t || g.current === t) return;
                        (m(t), (g.current = t));
                        let l = t - I.current.reduce((e, t, l) => e + t + 20 * (0 !== l));
                        o?.(l);
                    },
                    [I, o],
                );
            (0, p.g)(b, y);
            let _ = 0 !== u;
            return (0, n.jsxs)("div", {
                className: a()(v.kL, t),
                ref: b,
                children: [
                    (0, n.jsxs)("div", {
                        className: v.Kk,
                        children: [
                            i.map((e, t) =>
                                (0, n.jsx)(
                                    h.Ae,
                                    {
                                        index: t,
                                        onItemLayout: C,
                                        children: (0, n.jsx)(c.V.Item, {
                                            id: e.id,
                                            "aria-label": e.label,
                                            className: v.Mf,
                                            children: (0, n.jsx)(d.E, { variant: "body-md/medium", children: e.label }),
                                        }),
                                    },
                                    e.id,
                                ),
                            ),
                            (0, n.jsx)("div", {
                                ref: A,
                                children: (0, n.jsx)(j, { tabs: N, onTabSelect: r, selectedTab: l }),
                            }),
                        ],
                    }),
                    _ &&
                        (0, n.jsxs)(c.V, {
                            type: "top",
                            look: "brand",
                            selectedItem: l,
                            onItemSelect: r,
                            className: v.vR,
                            children: [
                                f.map((e) =>
                                    (0, n.jsx)(
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
                                0 !== N.length ? (0, n.jsx)(j, { tabs: N, onTabSelect: r, selectedTab: l }) : null,
                            ],
                        }),
                ],
            });
        },
    },
);
