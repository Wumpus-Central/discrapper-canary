"use strict";
n.d(t, { A: () => u });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(962125),
    o = n(151271),
    d = n(652215),
    c = n(549424);
let u = function (e) {
    let {
            categoryListRef: t,
            expressionsListRef: n,
            categories: a,
            store: u,
            children: _,
            className: E,
            listPadding: A,
            rowCount: h,
            getScrollOffsetForIndex: I,
            categoryHeight: f,
            onScroll: p,
            renderCategoryListItem: T,
            rowCountBySection: m,
            renderSection: g,
        } = e,
        S = u.useStore((e) => e.activeCategoryIndex);
    !(function (e) {
        let { activeIndex: t, categoryListRef: n, getScrollOffsetForIndex: i } = e,
            a = r.useRef(d.An1),
            s = r.useRef(t);
        r.useEffect(() => {
            null != t &&
                t !== s.current &&
                (a.current !== d.An1 && window.cancelAnimationFrame(a.current),
                (a.current = window.requestAnimationFrame(() => {
                    if (null == n.current) return;
                    let e = t > (s.current ?? -1),
                        r = null != i ? i(t, e) : 0;
                    n.current.scrollRowIntoView(t, { animate: !0, offset: r }), (a.current = d.An1), (s.current = t);
                })));
        }, [t, n, i]);
    })({ activeIndex: S, categoryListRef: t, getScrollOffsetForIndex: I });
    let N = r.useCallback(
            (e) => {
                let { searchQuery: t } = o.RQ.getState();
                u.setActiveCategoryIndex(e), "" !== t ? (0, o.Ri)("") : n.current?.scrollToSectionTop(e);
            },
            [n, u],
        ),
        C = r.useCallback((e) => T(a[e], e, () => N(e), S === e), [S, a, N, T]),
        O = r.useMemo(() => ("function" == typeof f ? (e) => f(a[e], e) : f), [a, f]);
    return (0, i.jsxs)("div", {
        className: s()(c.i, E),
        children: [
            (0, i.jsx)(l.A, {
                listPadding: A,
                onScroll: p,
                ref: t,
                renderRow: C,
                rowCount: h,
                rowHeight: O,
                hideScrollbar: !0,
                rowCountBySection: m,
                renderSection: g,
            }),
            _?.(N),
        ],
    });
};
