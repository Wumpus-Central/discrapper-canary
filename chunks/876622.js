a.d(t, { A: () => p });
var n = a(627968),
    i = a(64700),
    l = a(503698),
    s = a.n(l),
    r = a(3666),
    o = a(397927),
    c = a(770178),
    d = a(124589),
    u = a(985018),
    m = a(326046);
function h(e) {
    let { onTabSelect: t, tabs: a, selectedTab: l } = e,
        r = i.useMemo(
            () =>
                null !=
                a.find((e) => {
                    let { id: t } = e;
                    return t === l;
                }),
            [l, a],
        ),
        [c, h] = i.useState(!1),
        p = (function (e) {
            let { selected: t, isHovered: a } = e;
            return a ? "text-strong" : t ? "text-brand" : "text-default";
        })({ selected: r, isHovered: c }),
        _ = (function (e) {
            let { selected: t, isHovered: a } = e;
            return a ? o.LU0.colors.TEXT_STRONG : t ? o.LU0.colors.TEXT_BRAND : o.LU0.colors.INTERACTIVE_TEXT_DEFAULT;
        })({ selected: r, isHovered: c }),
        g = i.useCallback(() => h(!0), []),
        x = i.useCallback(() => h(!1), []),
        A = i.useRef(null);
    return (0, n.jsx)(o.YNO, {
        targetElementRef: A,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, n.jsx)(d.A, { selectedTab: l, onClose: i, tabs: a, onTabSelect: t });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: a } = t;
            return (0, n.jsx)(o.VQ0.Item, {
                ...e,
                id: "more",
                look: "brand",
                selectedItem: r ? "more" : void 0,
                className: s()(m.Mf, { [m.wH]: !1 }),
                clickableRef: (e) => {
                    null != e && null != e.ref && (A.current = e.ref);
                },
                "aria-label": u.intl.string(u.t["UKOtz+"]),
                children: (0, n.jsxs)("div", {
                    className: m.OS,
                    onMouseEnter: g,
                    onMouseLeave: x,
                    children: [
                        (0, n.jsx)(o.Text, {
                            variant: "text-sm/semibold",
                            color: p,
                            children: u.intl.string(u.t["UKOtz+"]),
                        }),
                        a ? (0, n.jsx)(o.tN5, { size: "xs", color: _ }) : (0, n.jsx)(o.abt, { size: "xs", color: _ }),
                    ],
                }),
            });
        },
    });
}
function p(e) {
    let { className: t, selectedTab: a, tabs: l, onTabSelect: d, onAvailableWidthChange: u } = e,
        [p, _] = i.useState(0),
        g = i.useRef(p),
        {
            lastVisibleIndex: x,
            onItemLayout: A,
            overflowItemsRef: f,
            itemWidthsRef: b,
        } = (0, r.Wv)({ items: l, itemGapPx: 20, maxLines: 1, containerWidth: p }),
        C = i.useMemo(() => l.slice(0, x + 1), [x, l]),
        v = i.useMemo(() => l.slice(x + 1), [x, l]),
        j = i.useRef(null),
        I = i.useCallback(
            (e) => {
                let t = e.contentRect.width;
                if (null == t || g.current === t) return;
                _(t), (g.current = t);
                let a = t - b.current.reduce((e, t, a) => e + t + 20 * (0 !== a));
                u?.(a);
            },
            [b, u],
        );
    (0, c.g)(j, I);
    let S = 0 !== p;
    return (0, n.jsxs)("div", {
        className: s()(m.kL, t),
        ref: j,
        children: [
            (0, n.jsxs)("div", {
                className: m.Kk,
                children: [
                    l.map((e, t) =>
                        (0, n.jsx)(
                            r.Ae,
                            {
                                index: t,
                                onItemLayout: A,
                                children: (0, n.jsx)(o.VQ0.Item, {
                                    id: e.id,
                                    "aria-label": e.label,
                                    className: m.Mf,
                                    children: (0, n.jsx)(o.Text, { variant: "text-md/medium", children: e.label }),
                                }),
                            },
                            e.id,
                        ),
                    ),
                    (0, n.jsx)("div", { ref: f, children: (0, n.jsx)(h, { tabs: v, onTabSelect: d, selectedTab: a }) }),
                ],
            }),
            S &&
                (0, n.jsxs)(o.VQ0, {
                    type: "top",
                    look: "brand",
                    selectedItem: a,
                    onItemSelect: d,
                    className: m.vR,
                    children: [
                        C.map((e) =>
                            (0, n.jsx)(
                                o.VQ0.Item,
                                { id: e.id, look: "brand", "aria-label": e.label, className: m.Mf, children: e.label },
                                e.id,
                            ),
                        ),
                        0 !== v.length ? (0, n.jsx)(h, { tabs: v, onTabSelect: d, selectedTab: a }) : null,
                    ],
                }),
        ],
    });
}
