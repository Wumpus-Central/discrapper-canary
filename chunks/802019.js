"use strict";
n.d(t, { A: () => d });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(962125),
    o = n(151271),
    u = n(652215),
    c = n(14753);
let d = function (e) {
    let {
            categoryListRef: t,
            expressionsListRef: n,
            categories: s,
            store: d,
            children: h,
            className: m,
            listPadding: f,
            rowCount: p,
            getScrollOffsetForIndex: g,
            categoryHeight: x,
            onScroll: A,
            renderCategoryListItem: E,
            rowCountBySection: C,
            renderSection: I,
        } = e,
        y = d.useStore((e) => e.activeCategoryIndex);
    !(function (e) {
        let { activeIndex: t, categoryListRef: n, getScrollOffsetForIndex: l } = e,
            s = i.useRef(u.An1),
            r = i.useRef(t);
        i.useEffect(() => {
            null != t &&
                t !== r.current &&
                (s.current !== u.An1 && window.cancelAnimationFrame(s.current),
                (s.current = window.requestAnimationFrame(() => {
                    if (null == n.current) return;
                    let e = t > (r.current ?? -1),
                        i = null != l ? l(t, e) : 0;
                    n.current.scrollRowIntoView(t, { animate: !0, offset: i }), (s.current = u.An1), (r.current = t);
                })));
        }, [t, n, l]);
    })({ activeIndex: y, categoryListRef: t, getScrollOffsetForIndex: g });
    let S = i.useCallback(
            (e) => {
                let { searchQuery: t } = o.RQ.getState();
                d.setActiveCategoryIndex(e), "" !== t ? (0, o.Ri)("") : n.current?.scrollToSectionTop(e);
            },
            [n, d],
        ),
        v = i.useCallback((e) => E(s[e], e, () => S(e), y === e), [y, s, S, E]),
        _ = i.useMemo(() => ("function" == typeof x ? (e) => x(s[e], e) : x), [s, x]);
    return (0, l.jsxs)("div", {
        className: r()(c.i, m),
        children: [
            (0, l.jsx)(a.A, {
                listPadding: f,
                onScroll: A,
                ref: t,
                renderRow: v,
                rowCount: p,
                rowHeight: _,
                hideScrollbar: !0,
                rowCountBySection: C,
                renderSection: I,
            }),
            h?.(S),
        ],
    });
};
