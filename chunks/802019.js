"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(962125),
    l = n(151271),
    u = n(652215),
    c = n(654360);
let d = function (e) {
    let {
            categoryListRef: t,
            expressionsListRef: n,
            categories: s,
            store: d,
            children: _,
            className: h,
            listPadding: f,
            rowCount: p,
            getScrollOffsetForIndex: E,
            categoryHeight: m,
            onScroll: g,
            renderCategoryListItem: A,
            rowCountBySection: I,
            renderSection: T,
        } = e,
        S = d.useStore((e) => e.activeCategoryIndex);
    ((e) => {
        let { activeIndex: t, categoryListRef: n, getScrollOffsetForIndex: i } = e,
            s = r.useRef(u.An1),
            a = r.useRef(t);
        return r.useEffect(() => {
            null != t &&
                t !== a.current &&
                (s.current !== u.An1 && window.cancelAnimationFrame(s.current),
                (s.current = window.requestAnimationFrame(() => {
                    if (null == n.current) return;
                    let e = t > (a.current ?? -1),
                        r = null != i ? i(t, e) : 0;
                    n.current.scrollRowIntoView(t, { animate: !0, offset: r }), (s.current = u.An1), (a.current = t);
                })));
        }, [t, n, i]);
    })({ activeIndex: S, categoryListRef: t, getScrollOffsetForIndex: E });
    let y = r.useCallback(
            (e) => {
                let { searchQuery: t } = l.RQ.getState();
                d.setActiveCategoryIndex(e), "" !== t ? (0, l.Ri)("") : n.current?.scrollToSectionTop(e);
            },
            [n, d],
        ),
        C = r.useCallback((e) => A(s[e], e, () => y(e), S === e), [S, s, y, A]),
        N = r.useMemo(() => ("function" == typeof m ? (e) => m(s[e], e) : m), [s, m]);
    return (0, i.jsxs)("div", {
        className: a()(c.i, h),
        children: [
            (0, i.jsx)(o.A, {
                listPadding: f,
                onScroll: g,
                ref: t,
                renderRow: C,
                rowCount: p,
                rowHeight: N,
                hideScrollbar: !0,
                rowCountBySection: I,
                renderSection: T,
            }),
            _?.(y),
        ],
    });
};
