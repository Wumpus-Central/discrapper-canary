a.d(t, { A: () => f });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(3666),
    o = a(827734),
    c = a(265872),
    d = a(761508),
    u = a(834730),
    h = a(900797),
    m = a(847374),
    p = a(770178),
    _ = a(346970),
    g = a(985018),
    x = a(948999);
function A(e) {
    let { onTabSelect: t, tabs: a, selectedTab: i } = e,
        r = l.useMemo(
            () =>
                null !=
                a.find((e) => {
                    let { id: t } = e;
                    return t === i;
                }),
            [i, a],
        ),
        [p, A] = l.useState(!1),
        f = (function (e) {
            let { selected: t, isHovered: a } = e;
            return a ? "text-strong" : t ? "text-brand" : "text-default";
        })({ selected: r, isHovered: p }),
        C = (function (e) {
            let { selected: t, isHovered: a } = e;
            return a ? o.A.colors.TEXT_STRONG : t ? o.A.colors.TEXT_BRAND : o.A.colors.INTERACTIVE_TEXT_DEFAULT;
        })({ selected: r, isHovered: p }),
        v = l.useCallback(() => A(!0), []),
        b = l.useCallback(() => A(!1), []),
        j = l.useRef(null);
    return (0, n.jsx)(c.Y, {
        targetElementRef: j,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, n.jsx)(_.A, { selectedTab: i, onClose: l, tabs: a, onTabSelect: t });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: a } = t;
            return (0, n.jsx)(d.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                selectedItem: r ? "more" : void 0,
                className: s()(x.Mf, { [x.wH]: !1 }),
                clickableRef: (e) => {
                    null != e && null != e.ref && (j.current = e.ref);
                },
                "aria-label": g.intl.string(g.t["UKOtz+"]),
                children: (0, n.jsxs)("div", {
                    className: x.OS,
                    onMouseEnter: v,
                    onMouseLeave: b,
                    children: [
                        (0, n.jsx)(u.E, {
                            variant: "text-sm/semibold",
                            color: f,
                            children: g.intl.string(g.t["UKOtz+"]),
                        }),
                        a ? (0, n.jsx)(h.t, { size: "xs", color: C }) : (0, n.jsx)(m.a, { size: "xs", color: C }),
                    ],
                }),
            });
        },
    });
}
function f(e) {
    let { className: t, selectedTab: a, tabs: i, onTabSelect: o, onAvailableWidthChange: c } = e,
        [h, m] = l.useState(0),
        _ = l.useRef(h),
        {
            lastVisibleIndex: g,
            onItemLayout: f,
            overflowItemsRef: C,
            itemWidthsRef: v,
        } = (0, r.Wv)({ items: i, itemGapPx: 20, maxLines: 1, containerWidth: h }),
        b = l.useMemo(() => i.slice(0, g + 1), [g, i]),
        j = l.useMemo(() => i.slice(g + 1), [g, i]),
        I = l.useRef(null),
        E = l.useCallback(
            (e) => {
                let t = e.contentRect.width;
                if (null == t || _.current === t) return;
                m(t), (_.current = t);
                let a = t - v.current.reduce((e, t, a) => e + t + 20 * (0 !== a));
                c?.(a);
            },
            [v, c],
        );
    (0, p.g)(I, E);
    let N = 0 !== h;
    return (0, n.jsxs)("div", {
        className: s()(x.kL, t),
        ref: I,
        children: [
            (0, n.jsxs)("div", {
                className: x.Kk,
                children: [
                    i.map((e, t) =>
                        (0, n.jsx)(
                            r.Ae,
                            {
                                index: t,
                                onItemLayout: f,
                                children: (0, n.jsx)(d.V.Item, {
                                    id: e.id,
                                    "aria-label": e.label,
                                    className: x.Mf,
                                    children: (0, n.jsx)(u.E, { variant: "text-md/medium", children: e.label }),
                                }),
                            },
                            e.id,
                        ),
                    ),
                    (0, n.jsx)("div", { ref: C, children: (0, n.jsx)(A, { tabs: j, onTabSelect: o, selectedTab: a }) }),
                ],
            }),
            N &&
                (0, n.jsxs)(d.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: a,
                    onItemSelect: o,
                    className: x.vR,
                    children: [
                        b.map((e) =>
                            (0, n.jsx)(
                                d.V.Item,
                                { id: e.id, look: "brand", "aria-label": e.label, className: x.Mf, children: e.label },
                                e.id,
                            ),
                        ),
                        0 !== j.length ? (0, n.jsx)(A, { tabs: j, onTabSelect: o, selectedTab: a }) : null,
                    ],
                }),
        ],
    });
}
