"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(962125),
    l = n(151271),
    u = n(652215),
    c = n(103551);
let d = (e) => {
        let { activeIndex: t, categoryListRef: n, getScrollOffsetForIndex: r } = e,
            a = i.useRef(u.An1),
            s = i.useRef(t);
        return (
            i.useEffect(() => {
                null != t &&
                    t !== s.current &&
                    (a.current !== u.An1 && window.cancelAnimationFrame(a.current),
                    (a.current = window.requestAnimationFrame(() => {
                        if (null == n.current) return;
                        let e = t > (s.current ?? -1),
                            i = null != r ? r(t, e) : 0;
                        n.current.scrollRowIntoView(t, { animate: !0, offset: i }),
                            (a.current = u.An1),
                            (s.current = t);
                    })));
            }, [t, n, r]),
            { categoryListRef: n }
        );
    },
    _ = function (e) {
        let {
                categoryListRef: t,
                expressionsListRef: n,
                categories: a,
                store: u,
                children: _,
                className: f,
                listPadding: p,
                rowCount: h,
                getScrollOffsetForIndex: m,
                categoryHeight: g,
                onScroll: E,
                renderCategoryListItem: A,
                rowCountBySection: I,
                renderSection: T,
            } = e,
            y = u.useStore((e) => e.activeCategoryIndex);
        d({ activeIndex: y, categoryListRef: t, getScrollOffsetForIndex: m });
        let S = i.useCallback(
                (e) => {
                    let { searchQuery: t } = l.RQ.getState();
                    u.setActiveCategoryIndex(e), "" !== t ? (0, l.Ri)("") : n.current?.scrollToSectionTop(e);
                },
                [n, u],
            ),
            v = i.useCallback((e) => A(a[e], e, () => S(e), y === e), [y, a, S, A]),
            C = i.useMemo(() => ("function" == typeof g ? (e) => g(a[e], e) : g), [a, g]);
        return (0, r.jsxs)("div", {
            className: s()(c.i, f),
            children: [
                (0, r.jsx)(o.A, {
                    listPadding: p,
                    onScroll: E,
                    ref: t,
                    renderRow: v,
                    rowCount: h,
                    rowHeight: C,
                    hideScrollbar: !0,
                    rowCountBySection: I,
                    renderSection: T,
                }),
                _?.(S),
            ],
        });
    };
