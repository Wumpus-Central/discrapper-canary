l.d(t, { A: () => A });
var s = l(477900),
    i = l(582128),
    a = l(503698),
    n = l.n(a),
    r = l(661531),
    o = l(922016),
    c = l(761508),
    d = l(834730),
    u = l(900797),
    h = l(847374),
    m = l(3666),
    p = l(770178),
    g = l(124589),
    x = l(375708),
    v = l(129066);
function j(e) {
    let { onTabSelect: t, tabs: l, selectedTab: a } = e,
        m = i.useMemo(
            () =>
                null !=
                l.find((e) => {
                    let { id: t } = e;
                    return t === a;
                }),
            [a, l],
        ),
        [p, j] = i.useState(!1),
        A = (function (e) {
            let { selected: t, isHovered: l } = e;
            return l ? "text-strong" : t ? "text-brand" : "text-default";
        })({ selected: m, isHovered: p }),
        C = (function (e) {
            let { selected: t, isHovered: l } = e;
            return l ? r.A.colors.TEXT_STRONG : t ? r.A.colors.TEXT_BRAND : r.A.colors.INTERACTIVE_TEXT_DEFAULT;
        })({ selected: m, isHovered: p }),
        I = i.useCallback(() => j(!0), []),
        _ = i.useCallback(() => j(!1), []),
        E = i.useRef(null);
    return (0, s.jsx)(o.Y, {
        targetElementRef: E,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, s.jsx)(g.A, { selectedTab: a, onClose: i, tabs: l, onTabSelect: t });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, s.jsx)(c.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                selectedItem: m ? "more" : void 0,
                className: n()(v.Mf, { [v.wH]: !1 }),
                clickableRef: (e) => {
                    null != e && null != e.ref && (E.current = e.ref);
                },
                "aria-label": x.intl.string(x.t["UKOtz+"]),
                children: (0, s.jsxs)("div", {
                    className: v.OS,
                    onMouseEnter: I,
                    onMouseLeave: _,
                    children: [
                        (0, s.jsx)(d.E, {
                            variant: "text-sm/semibold",
                            color: A,
                            children: x.intl.string(x.t["UKOtz+"]),
                        }),
                        l ? (0, s.jsx)(u.t, { size: "xs", color: C }) : (0, s.jsx)(h.a, { size: "xs", color: C }),
                    ],
                }),
            });
        },
    });
}
function A(e) {
    let { className: t, selectedTab: l, tabs: a, onTabSelect: r, onAvailableWidthChange: o } = e,
        [u, h] = i.useState(0),
        g = i.useRef(u),
        {
            lastVisibleIndex: x,
            onItemLayout: A,
            overflowItemsRef: C,
            itemWidthsRef: I,
        } = (0, m.Wv)({ items: a, itemGapPx: 20, maxLines: 1, containerWidth: u }),
        _ = i.useMemo(() => a.slice(0, x + 1), [x, a]),
        E = i.useMemo(() => a.slice(x + 1), [x, a]),
        f = i.useRef(null),
        N = i.useCallback(
            (e) => {
                let t = e.contentRect.width;
                if (null == t || g.current === t) return;
                (h(t), (g.current = t));
                let l = t - I.current.reduce((e, t, l) => e + t + 20 * (0 !== l));
                o?.(l);
            },
            [I, o],
        );
    (0, p.g)(f, N);
    let S = 0 !== u;
    return (0, s.jsxs)("div", {
        className: n()(v.kL, t),
        ref: f,
        children: [
            (0, s.jsxs)("div", {
                className: v.Kk,
                children: [
                    a.map((e, t) =>
                        (0, s.jsx)(
                            m.Ae,
                            {
                                index: t,
                                onItemLayout: A,
                                children: (0, s.jsx)(c.V.Item, {
                                    id: e.id,
                                    "aria-label": e.label,
                                    className: v.Mf,
                                    children: (0, s.jsx)(d.E, { variant: "text-md/medium", children: e.label }),
                                }),
                            },
                            e.id,
                        ),
                    ),
                    (0, s.jsx)("div", { ref: C, children: (0, s.jsx)(j, { tabs: E, onTabSelect: r, selectedTab: l }) }),
                ],
            }),
            S &&
                (0, s.jsxs)(c.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: l,
                    onItemSelect: r,
                    className: v.vR,
                    children: [
                        _.map((e) =>
                            (0, s.jsx)(
                                c.V.Item,
                                { id: e.id, look: "brand", "aria-label": e.label, className: v.Mf, children: e.label },
                                e.id,
                            ),
                        ),
                        0 !== E.length ? (0, s.jsx)(j, { tabs: E, onTabSelect: r, selectedTab: l }) : null,
                    ],
                }),
        ],
    });
}
