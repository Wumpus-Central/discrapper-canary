a.d(t, { A: () => p });
var n = a(627968),
    i = a(64700),
    s = a(503698),
    l = a.n(s),
    r = a(3666),
    o = a(397927),
    c = a(770178),
    d = a(124589),
    u = a(985018),
    h = a(326046);
function m(e) {
    let { onTabSelect: t, tabs: a, selectedTab: s } = e,
        r = i.useMemo(
            () =>
                null !=
                a.find((e) => {
                    let { id: t } = e;
                    return t === s;
                }),
            [s, a],
        ),
        [c, m] = i.useState(!1),
        p = (function (e) {
            let { selected: t, isHovered: a } = e;
            return a ? "text-strong" : t ? "text-brand" : "text-default";
        })({ selected: r, isHovered: c }),
        _ = (function (e) {
            let { selected: t, isHovered: a } = e;
            return a ? o.LU0.colors.TEXT_STRONG : t ? o.LU0.colors.TEXT_BRAND : o.LU0.colors.INTERACTIVE_TEXT_DEFAULT;
        })({ selected: r, isHovered: c }),
        g = i.useCallback(() => m(!0), []),
        x = i.useCallback(() => m(!1), []),
        A = i.useRef(null);
    return (0, n.jsx)(o.YNO, {
        targetElementRef: A,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, n.jsx)(d.A, { selectedTab: s, onClose: i, tabs: a, onTabSelect: t });
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
                className: l()(h.Mf, { [h.wH]: !1 }),
                clickableRef: (e) => {
                    null != e && null != e.ref && (A.current = e.ref);
                },
                "aria-label": u.intl.string(u.t["UKOtz+"]),
                children: (0, n.jsxs)("div", {
                    className: h.OS,
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
    let { className: t, selectedTab: a, tabs: s, onTabSelect: d, onAvailableWidthChange: u } = e,
        [p, _] = i.useState(0),
        g = i.useRef(p),
        {
            lastVisibleIndex: x,
            onItemLayout: A,
            overflowItemsRef: C,
            itemWidthsRef: b,
        } = (0, r.Wv)({ items: s, itemGapPx: 20, maxLines: 1, containerWidth: p }),
        v = i.useMemo(() => s.slice(0, x + 1), [x, s]),
        f = i.useMemo(() => s.slice(x + 1), [x, s]),
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
    let E = 0 !== p;
    return (0, n.jsxs)("div", {
        className: l()(h.kL, t),
        ref: j,
        children: [
            (0, n.jsxs)("div", {
                className: h.Kk,
                children: [
                    s.map((e, t) =>
                        (0, n.jsx)(
                            r.Ae,
                            {
                                index: t,
                                onItemLayout: A,
                                children: (0, n.jsx)(o.VQ0.Item, {
                                    id: e.id,
                                    "aria-label": e.label,
                                    className: h.Mf,
                                    children: (0, n.jsx)(o.Text, { variant: "text-md/medium", children: e.label }),
                                }),
                            },
                            e.id,
                        ),
                    ),
                    (0, n.jsx)("div", { ref: C, children: (0, n.jsx)(m, { tabs: f, onTabSelect: d, selectedTab: a }) }),
                ],
            }),
            E &&
                (0, n.jsxs)(o.VQ0, {
                    type: "top",
                    look: "brand",
                    selectedItem: a,
                    onItemSelect: d,
                    className: h.vR,
                    children: [
                        v.map((e) =>
                            (0, n.jsx)(
                                o.VQ0.Item,
                                { id: e.id, look: "brand", "aria-label": e.label, className: h.Mf, children: e.label },
                                e.id,
                            ),
                        ),
                        0 !== f.length ? (0, n.jsx)(m, { tabs: f, onTabSelect: d, selectedTab: a }) : null,
                    ],
                }),
        ],
    });
}
