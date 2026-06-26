l.d(t, { A: () => v });
var i = l(627968),
    s = l(64700),
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
    x = l(375708),
    A = l(33095);
function j(e) {
    let { onTabSelect: t, tabs: l, selectedTab: a } = e,
        r = s.useMemo(
            () =>
                null !=
                l.find((e) => {
                    let { id: t } = e;
                    return t === a;
                }),
            [a, l],
        ),
        [p, j] = s.useState(!1),
        v = (function (e) {
            let { selected: t, isHovered: l } = e;
            return l ? "text-strong" : t ? "text-brand" : "text-default";
        })({ selected: r, isHovered: p }),
        C = (function (e) {
            let { selected: t, isHovered: l } = e;
            return l ? o.A.colors.TEXT_STRONG : t ? o.A.colors.TEXT_BRAND : o.A.colors.INTERACTIVE_TEXT_DEFAULT;
        })({ selected: r, isHovered: p }),
        I = s.useCallback(() => j(!0), []),
        _ = s.useCallback(() => j(!1), []),
        E = s.useRef(null);
    return (0, i.jsx)(c.Y, {
        targetElementRef: E,
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, i.jsx)(g.A, { selectedTab: a, onClose: s, tabs: l, onTabSelect: t });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, i.jsx)(d.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                selectedItem: r ? "more" : void 0,
                className: n()(A.Mf, { [A.wH]: !1 }),
                clickableRef: (e) => {
                    null != e && null != e.ref && (E.current = e.ref);
                },
                "aria-label": x.intl.string(x.t["UKOtz+"]),
                children: (0, i.jsxs)("div", {
                    className: A.OS,
                    onMouseEnter: I,
                    onMouseLeave: _,
                    children: [
                        (0, i.jsx)(u.E, {
                            variant: "text-sm/semibold",
                            color: v,
                            children: x.intl.string(x.t["UKOtz+"]),
                        }),
                        l ? (0, i.jsx)(h.t, { size: "xs", color: C }) : (0, i.jsx)(m.a, { size: "xs", color: C }),
                    ],
                }),
            });
        },
    });
}
function v(e) {
    let { className: t, selectedTab: l, tabs: a, onTabSelect: o, onAvailableWidthChange: c } = e,
        [h, m] = s.useState(0),
        g = s.useRef(h),
        {
            lastVisibleIndex: x,
            onItemLayout: v,
            overflowItemsRef: C,
            itemWidthsRef: I,
        } = (0, r.Wv)({ items: a, itemGapPx: 20, maxLines: 1, containerWidth: h }),
        _ = s.useMemo(() => a.slice(0, x + 1), [x, a]),
        E = s.useMemo(() => a.slice(x + 1), [x, a]),
        f = s.useRef(null),
        N = s.useCallback(
            (e) => {
                let t = e.contentRect.width;
                if (null == t || g.current === t) return;
                m(t), (g.current = t);
                let l = t - I.current.reduce((e, t, l) => e + t + 20 * (0 !== l));
                c?.(l);
            },
            [I, c],
        );
    (0, p.g)(f, N);
    let S = 0 !== h;
    return (0, i.jsxs)("div", {
        className: n()(A.kL, t),
        ref: f,
        children: [
            (0, i.jsxs)("div", {
                className: A.Kk,
                children: [
                    a.map((e, t) =>
                        (0, i.jsx)(
                            r.Ae,
                            {
                                index: t,
                                onItemLayout: v,
                                children: (0, i.jsx)(d.V.Item, {
                                    id: e.id,
                                    "aria-label": e.label,
                                    className: A.Mf,
                                    children: (0, i.jsx)(u.E, { variant: "text-md/medium", children: e.label }),
                                }),
                            },
                            e.id,
                        ),
                    ),
                    (0, i.jsx)("div", { ref: C, children: (0, i.jsx)(j, { tabs: E, onTabSelect: o, selectedTab: l }) }),
                ],
            }),
            S &&
                (0, i.jsxs)(d.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: l,
                    onItemSelect: o,
                    className: A.vR,
                    children: [
                        _.map((e) =>
                            (0, i.jsx)(
                                d.V.Item,
                                { id: e.id, look: "brand", "aria-label": e.label, className: A.Mf, children: e.label },
                                e.id,
                            ),
                        ),
                        0 !== E.length ? (0, i.jsx)(j, { tabs: E, onTabSelect: o, selectedTab: l }) : null,
                    ],
                }),
        ],
    });
}
