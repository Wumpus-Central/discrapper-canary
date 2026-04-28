l.d(t, { A: () => v });
var s = l(627968),
    i = l(64700),
    a = l(503698),
    n = l.n(a),
    r = l(3666),
    o = l(661531),
    c = l(922016),
    d = l(761508),
    u = l(834730),
    h = l(900797),
    m = l(847374),
    p = l(770178),
    g = l(124589),
    x = l(985018),
    A = l(33095);
function j(e) {
    let { onTabSelect: t, tabs: l, selectedTab: a } = e,
        r = i.useMemo(
            () =>
                null !=
                l.find((e) => {
                    let { id: t } = e;
                    return t === a;
                }),
            [a, l],
        ),
        [p, j] = i.useState(!1),
        v = (function (e) {
            let { selected: t, isHovered: l } = e;
            return l ? "text-strong" : t ? "text-brand" : "text-default";
        })({ selected: r, isHovered: p }),
        C = (function (e) {
            let { selected: t, isHovered: l } = e;
            return l ? o.A.colors.TEXT_STRONG : t ? o.A.colors.TEXT_BRAND : o.A.colors.INTERACTIVE_TEXT_DEFAULT;
        })({ selected: r, isHovered: p }),
        _ = i.useCallback(() => j(!0), []),
        I = i.useCallback(() => j(!1), []),
        E = i.useRef(null);
    return (0, s.jsx)(c.Y, {
        targetElementRef: E,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, s.jsx)(g.A, { selectedTab: a, onClose: i, tabs: l, onTabSelect: t });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, s.jsx)(d.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                selectedItem: r ? "more" : void 0,
                className: n()(A.Mf, { [A.wH]: !1 }),
                clickableRef: (e) => {
                    null != e && null != e.ref && (E.current = e.ref);
                },
                "aria-label": x.intl.string(x.t["UKOtz+"]),
                children: (0, s.jsxs)("div", {
                    className: A.OS,
                    onMouseEnter: _,
                    onMouseLeave: I,
                    children: [
                        (0, s.jsx)(u.E, {
                            variant: "text-sm/semibold",
                            color: v,
                            children: x.intl.string(x.t["UKOtz+"]),
                        }),
                        l ? (0, s.jsx)(h.t, { size: "xs", color: C }) : (0, s.jsx)(m.a, { size: "xs", color: C }),
                    ],
                }),
            });
        },
    });
}
function v(e) {
    let { className: t, selectedTab: l, tabs: a, onTabSelect: o, onAvailableWidthChange: c } = e,
        [h, m] = i.useState(0),
        g = i.useRef(h),
        {
            lastVisibleIndex: x,
            onItemLayout: v,
            overflowItemsRef: C,
            itemWidthsRef: _,
        } = (0, r.Wv)({ items: a, itemGapPx: 20, maxLines: 1, containerWidth: h }),
        I = i.useMemo(() => a.slice(0, x + 1), [x, a]),
        E = i.useMemo(() => a.slice(x + 1), [x, a]),
        N = i.useRef(null),
        S = i.useCallback(
            (e) => {
                let t = e.contentRect.width;
                if (null == t || g.current === t) return;
                m(t), (g.current = t);
                let l = t - _.current.reduce((e, t, l) => e + t + 20 * (0 !== l));
                c?.(l);
            },
            [_, c],
        );
    (0, p.g)(N, S);
    let f = 0 !== h;
    return (0, s.jsxs)("div", {
        className: n()(A.kL, t),
        ref: N,
        children: [
            (0, s.jsxs)("div", {
                className: A.Kk,
                children: [
                    a.map((e, t) =>
                        (0, s.jsx)(
                            r.Ae,
                            {
                                index: t,
                                onItemLayout: v,
                                children: (0, s.jsx)(d.V.Item, {
                                    id: e.id,
                                    "aria-label": e.label,
                                    className: A.Mf,
                                    children: (0, s.jsx)(u.E, { variant: "text-md/medium", children: e.label }),
                                }),
                            },
                            e.id,
                        ),
                    ),
                    (0, s.jsx)("div", { ref: C, children: (0, s.jsx)(j, { tabs: E, onTabSelect: o, selectedTab: l }) }),
                ],
            }),
            f &&
                (0, s.jsxs)(d.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: l,
                    onItemSelect: o,
                    className: A.vR,
                    children: [
                        I.map((e) =>
                            (0, s.jsx)(
                                d.V.Item,
                                { id: e.id, look: "brand", "aria-label": e.label, className: A.Mf, children: e.label },
                                e.id,
                            ),
                        ),
                        0 !== E.length ? (0, s.jsx)(j, { tabs: E, onTabSelect: o, selectedTab: l }) : null,
                    ],
                }),
        ],
    });
}
