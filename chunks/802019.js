"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(962125),
    l = n(151271),
    u = n(652215),
    c = n(75421);
let d = (e) => {
        let { activeIndex: t, categoryListRef: n, getScrollOffsetForIndex: r } = e,
            s = i.useRef(u.An1),
            a = i.useRef(t);
        return (
            i.useEffect(() => {
                null != t &&
                    t !== a.current &&
                    (s.current !== u.An1 && window.cancelAnimationFrame(s.current),
                    (s.current = window.requestAnimationFrame(() => {
                        if (null == n.current) return;
                        let e = t > (a.current ?? -1),
                            i = null != r ? r(t, e) : 0;
                        n.current.scrollRowIntoView(t, { animate: !0, offset: i }),
                            (s.current = u.An1),
                            (a.current = t);
                    })));
            }, [t, n, r]),
            { categoryListRef: n }
        );
    },
    _ = function (e) {
        let {
                categoryListRef: t,
                expressionsListRef: n,
                categories: s,
                store: u,
                children: _,
                className: f,
                listPadding: p,
                rowCount: h,
                getScrollOffsetForIndex: m,
                categoryHeight: E,
                onScroll: g,
                renderCategoryListItem: A,
                rowCountBySection: I,
                renderSection: T,
            } = e,
            S = u.useStore((e) => e.activeCategoryIndex);
        d({ activeIndex: S, categoryListRef: t, getScrollOffsetForIndex: m });
        let y = i.useCallback(
                (e) => {
                    let { searchQuery: t } = l.RQ.getState();
                    u.setActiveCategoryIndex(e), "" !== t ? (0, l.Ri)("") : n.current?.scrollToSectionTop(e);
                },
                [n, u],
            ),
            v = i.useCallback((e) => A(s[e], e, () => y(e), S === e), [S, s, y, A]),
            N = i.useMemo(() => ("function" == typeof E ? (e) => E(s[e], e) : E), [s, E]);
        return (0, r.jsxs)("div", {
            className: a()(c.i, f),
            children: [
                (0, r.jsx)(o.A, {
                    listPadding: p,
                    onScroll: g,
                    ref: t,
                    renderRow: v,
                    rowCount: h,
                    rowHeight: N,
                    hideScrollbar: !0,
                    rowCountBySection: I,
                    renderSection: T,
                }),
                _?.(y),
            ],
        });
    };
