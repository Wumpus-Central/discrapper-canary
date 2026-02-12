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
                listPadding: h,
                rowCount: p,
                getScrollOffsetForIndex: g,
                categoryHeight: E,
                onScroll: A,
                renderCategoryListItem: I,
                rowCountBySection: T,
                renderSection: y,
            } = e,
            S = u.useStore((e) => e.activeCategoryIndex);
        d({ activeIndex: S, categoryListRef: t, getScrollOffsetForIndex: g });
        let v = i.useCallback(
                (e) => {
                    let { searchQuery: t } = l.RQ.getState();
                    u.setActiveCategoryIndex(e), "" !== t ? (0, l.Ri)("") : n.current?.scrollToSectionTop(e);
                },
                [n, u],
            ),
            C = i.useCallback((e) => I(a[e], e, () => v(e), S === e), [S, a, v, I]),
            b = i.useMemo(() => ("function" == typeof E ? (e) => E(a[e], e) : E), [a, E]);
        return (0, r.jsxs)("div", {
            className: s()(c.i, f),
            children: [
                (0, r.jsx)(o.A, {
                    listPadding: h,
                    onScroll: A,
                    ref: t,
                    renderRow: C,
                    rowCount: p,
                    rowHeight: b,
                    hideScrollbar: !0,
                    rowCountBySection: T,
                    renderSection: y,
                }),
                _?.(v),
            ],
        });
    };
