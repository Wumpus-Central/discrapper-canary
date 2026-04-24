"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(3666),
    o = n(661531),
    c = n(922016),
    d = n(761508),
    u = n(834730),
    h = n(900797),
    p = n(847374),
    m = n(770178),
    _ = n(124589),
    g = n(985018),
    x = n(33095);
function f(e) {
    let { onTabSelect: t, tabs: n, selectedTab: s } = e,
        r = a.useMemo(
            () =>
                null !=
                n.find((e) => {
                    let { id: t } = e;
                    return t === s;
                }),
            [s, n],
        ),
        [m, f] = a.useState(!1),
        A = (function (e) {
            let { selected: t, isHovered: n } = e;
            return n ? "text-strong" : t ? "text-brand" : "text-default";
        })({ selected: r, isHovered: m }),
        C = (function (e) {
            let { selected: t, isHovered: n } = e;
            return n ? o.A.colors.TEXT_STRONG : t ? o.A.colors.TEXT_BRAND : o.A.colors.INTERACTIVE_TEXT_DEFAULT;
        })({ selected: r, isHovered: m }),
        b = a.useCallback(() => f(!0), []),
        v = a.useCallback(() => f(!1), []),
        I = a.useRef(null);
    return (0, i.jsx)(c.Y, {
        targetElementRef: I,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, i.jsx)(_.A, { selectedTab: s, onClose: a, tabs: n, onTabSelect: t });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(d.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                selectedItem: r ? "more" : void 0,
                className: l()(x.Mf, { [x.wH]: !1 }),
                clickableRef: (e) => {
                    null != e && null != e.ref && (I.current = e.ref);
                },
                "aria-label": g.intl.string(g.t["UKOtz+"]),
                children: (0, i.jsxs)("div", {
                    className: x.OS,
                    onMouseEnter: b,
                    onMouseLeave: v,
                    children: [
                        (0, i.jsx)(u.E, {
                            variant: "text-sm/semibold",
                            color: A,
                            children: g.intl.string(g.t["UKOtz+"]),
                        }),
                        n ? (0, i.jsx)(h.t, { size: "xs", color: C }) : (0, i.jsx)(p.a, { size: "xs", color: C }),
                    ],
                }),
            });
        },
    });
}
function A(e) {
    let { className: t, selectedTab: n, tabs: s, onTabSelect: o, onAvailableWidthChange: c } = e,
        [h, p] = a.useState(0),
        _ = a.useRef(h),
        {
            lastVisibleIndex: g,
            onItemLayout: A,
            overflowItemsRef: C,
            itemWidthsRef: b,
        } = (0, r.Wv)({ items: s, itemGapPx: 20, maxLines: 1, containerWidth: h }),
        v = a.useMemo(() => s.slice(0, g + 1), [g, s]),
        I = a.useMemo(() => s.slice(g + 1), [g, s]),
        E = a.useRef(null),
        S = a.useCallback(
            (e) => {
                let t = e.contentRect.width;
                if (null == t || _.current === t) return;
                p(t), (_.current = t);
                let n = t - b.current.reduce((e, t, n) => e + t + 20 * (0 !== n));
                c?.(n);
            },
            [b, c],
        );
    (0, m.g)(E, S);
    let N = 0 !== h;
    return (0, i.jsxs)("div", {
        className: l()(x.kL, t),
        ref: E,
        children: [
            (0, i.jsxs)("div", {
                className: x.Kk,
                children: [
                    s.map((e, t) =>
                        (0, i.jsx)(
                            r.Ae,
                            {
                                index: t,
                                onItemLayout: A,
                                children: (0, i.jsx)(d.V.Item, {
                                    id: e.id,
                                    "aria-label": e.label,
                                    className: x.Mf,
                                    children: (0, i.jsx)(u.E, { variant: "text-md/medium", children: e.label }),
                                }),
                            },
                            e.id,
                        ),
                    ),
                    (0, i.jsx)("div", { ref: C, children: (0, i.jsx)(f, { tabs: I, onTabSelect: o, selectedTab: n }) }),
                ],
            }),
            N &&
                (0, i.jsxs)(d.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: n,
                    onItemSelect: o,
                    className: x.vR,
                    children: [
                        v.map((e) =>
                            (0, i.jsx)(
                                d.V.Item,
                                { id: e.id, look: "brand", "aria-label": e.label, className: x.Mf, children: e.label },
                                e.id,
                            ),
                        ),
                        0 !== I.length ? (0, i.jsx)(f, { tabs: I, onTabSelect: o, selectedTab: n }) : null,
                    ],
                }),
        ],
    });
}
