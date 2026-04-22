"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(962125),
    o = n(151271),
    c = n(652215),
    u = n(654360);
let d = function (e) {
    let {
            categoryListRef: t,
            expressionsListRef: n,
            categories: s,
            store: d,
            children: h,
            className: m,
            listPadding: p,
            rowCount: f,
            getScrollOffsetForIndex: g,
            categoryHeight: _,
            onScroll: x,
            renderCategoryListItem: A,
            rowCountBySection: C,
            renderSection: E,
        } = e,
        I = d.useStore((e) => e.activeCategoryIndex);
    ((e) => {
        let { activeIndex: t, categoryListRef: n, getScrollOffsetForIndex: i } = e,
            s = l.useRef(c.An1),
            r = l.useRef(t);
        return l.useEffect(() => {
            null != t &&
                t !== r.current &&
                (s.current !== c.An1 && window.cancelAnimationFrame(s.current),
                (s.current = window.requestAnimationFrame(() => {
                    if (null == n.current) return;
                    let e = t > (r.current ?? -1),
                        l = null != i ? i(t, e) : 0;
                    n.current.scrollRowIntoView(t, { animate: !0, offset: l }), (s.current = c.An1), (r.current = t);
                })));
        }, [t, n, i]);
    })({ activeIndex: I, categoryListRef: t, getScrollOffsetForIndex: g });
    let v = l.useCallback(
            (e) => {
                let { searchQuery: t } = o.RQ.getState();
                d.setActiveCategoryIndex(e), "" !== t ? (0, o.Ri)("") : n.current?.scrollToSectionTop(e);
            },
            [n, d],
        ),
        y = l.useCallback((e) => A(s[e], e, () => v(e), I === e), [I, s, v, A]),
        S = l.useMemo(() => ("function" == typeof _ ? (e) => _(s[e], e) : _), [s, _]);
    return (0, i.jsxs)("div", {
        className: r()(u.i, m),
        children: [
            (0, i.jsx)(a.A, {
                listPadding: p,
                onScroll: x,
                ref: t,
                renderRow: y,
                rowCount: f,
                rowHeight: S,
                hideScrollbar: !0,
                rowCountBySection: C,
                renderSection: E,
            }),
            h?.(v),
        ],
    });
};
