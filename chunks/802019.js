"use strict";
n.d(t, { A: () => d });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(962125),
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
            renderCategoryListItem: C,
            rowCountBySection: A,
            renderSection: E,
        } = e,
        I = d.useStore((e) => e.activeCategoryIndex);
    ((e) => {
        let { activeIndex: t, categoryListRef: n, getScrollOffsetForIndex: l } = e,
            s = i.useRef(c.An1),
            a = i.useRef(t);
        return i.useEffect(() => {
            null != t &&
                t !== a.current &&
                (s.current !== c.An1 && window.cancelAnimationFrame(s.current),
                (s.current = window.requestAnimationFrame(() => {
                    if (null == n.current) return;
                    let e = t > (a.current ?? -1),
                        i = null != l ? l(t, e) : 0;
                    n.current.scrollRowIntoView(t, { animate: !0, offset: i }), (s.current = c.An1), (a.current = t);
                })));
        }, [t, n, l]);
    })({ activeIndex: I, categoryListRef: t, getScrollOffsetForIndex: g });
    let v = i.useCallback(
            (e) => {
                let { searchQuery: t } = o.RQ.getState();
                d.setActiveCategoryIndex(e), "" !== t ? (0, o.Ri)("") : n.current?.scrollToSectionTop(e);
            },
            [n, d],
        ),
        y = i.useCallback((e) => C(s[e], e, () => v(e), I === e), [I, s, v, C]),
        b = i.useMemo(() => ("function" == typeof _ ? (e) => _(s[e], e) : _), [s, _]);
    return (0, l.jsxs)("div", {
        className: a()(u.i, m),
        children: [
            (0, l.jsx)(r.A, {
                listPadding: p,
                onScroll: x,
                ref: t,
                renderRow: y,
                rowCount: f,
                rowHeight: b,
                hideScrollbar: !0,
                rowCountBySection: A,
                renderSection: E,
            }),
            h?.(v),
        ],
    });
};
