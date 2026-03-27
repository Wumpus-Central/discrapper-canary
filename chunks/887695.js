"use strict";
n.d(t, { FV: () => m, Ff: () => g, Fk: () => E, JZ: () => I, oV: () => h, se: () => A }), n(321073);
var r = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(741918),
    o = n(118057),
    l = n(788413),
    u = n(23339),
    c = n(319060),
    d = n(60587),
    _ = n(652215);
let f = (0, u.xI)(c.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    p = 8,
    h = (e) => {
        let {
                gridWrapperRef: t,
                containerWidth: n,
                showingEmptyState: i,
                listPaddingLeft: a = f,
                listScrollbarWidth: o = p,
            } = e,
            [l, u] = r.useState(void 0),
            c = r.useCallback(() => {
                if (null == t.current) return null;
                u(t.current.offsetWidth - a - o);
            }, [t, a, o]);
        return (
            r.useLayoutEffect(() => {
                c();
            }, [n, c, i]),
            r.useEffect(() => {
                let e = s().debounce(c, 250);
                return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
            }, [c]),
            l
        );
    },
    m = (e) => {
        let { activeCategoryIndex: t, listRef: n, searchQuery: i } = e,
            s = r.useRef(i),
            a = r.useRef(!0);
        r.useLayoutEffect(() => {
            "" === i && "" !== s.current && n.current?.scrollToSectionTop(t), (s.current = i);
        }, [i, t, n]),
            r.useLayoutEffect(() => {
                a.current && (n.current?.scrollToSectionTop(t), (a.current = !1));
            }, [t, n]),
            r.useEffect(() => {
                s.current = i;
            }, [i]);
    },
    E = (e) => {
        let {
                activeCategoryIndex: t,
                listRef: n,
                isScrolling: i,
                searchQuery: a,
                scrollOffset: o = 0,
                onActiveCategoryIndexChange: l,
                disableForSearch: u = !0,
            } = e,
            c = r.useRef(_.An1),
            d = r.useRef(t);
        d.current = t;
        let f = r.useMemo(
                () =>
                    s().debounce(() => {
                        i.current = !1;
                    }, 250),
                [i],
            ),
            p = r.useMemo(
                () =>
                    s().debounce((e) => {
                        ("" !== a && u) ||
                            (window.cancelAnimationFrame(c.current),
                            (c.current = window.requestAnimationFrame(() => {
                                let t = n.current?.getSectionDescriptors();
                                if (null == t) return;
                                let r = t.findIndex((n, r) => {
                                        let i = t[r + 1],
                                            s = e + o >= n.offset.top,
                                            a = null != i && e + o < i.offset.top;
                                        return (null != i && !s && !a) || (s && a) || (s && null == i);
                                    }),
                                    i = -1 === r ? 0 : r;
                                d.current !== i && l(i);
                            })));
                    }, 0),
                [a, n, o, l, u],
            );
        return r.useCallback(
            (e) => {
                (i.current = !0), f(), p(e);
            },
            [i, f, p],
        );
    },
    g = (e) => {
        let {
                columnCounts: t,
                gridNavigatorId: n,
                itemGrid: i,
                itemList: s,
                onGridNavigatorItemSelect: l,
                onGridNavigatorPositionChange: u,
            } = e,
            c = r.useRef(!1),
            d = r.useCallback(
                (e, t) => {
                    let n = i[t];
                    if (null != n) return n[e];
                },
                [i],
            ),
            _ = r.useCallback(
                (e) => {
                    let { focusedX: t, focusedY: n } = e;
                    c.current = !0;
                    let r = d(t, n);
                    if (null == r) return;
                    let { visibleRowIndex: i, columnIndex: a } = r;
                    u(a, i), null != s.current && s.current.scrollRowIntoView(n);
                },
                [d, s, u],
            ),
            f = r.useCallback(
                (e, t, n) => {
                    switch (n.type) {
                        case a.X2.NAVIGATE_UP:
                        case a.X2.NAVIGATE_DOWN:
                        case a.X2.NAVIGATE_RIGHT:
                        case a.X2.NAVIGATE_LEFT:
                        case a.X2.NAVIGATE_INLINE_START:
                        case a.X2.NAVIGATE_INLINE_END:
                        case a.X2.NAVIGATE_START:
                        case a.X2.NAVIGATE_END:
                        case a.X2.NAVIGATE_CROSSLINE_START:
                        case a.X2.NAVIGATE_CROSSLINE_END:
                            _(t);
                    }
                },
                [_],
            ),
            p = r.useCallback(
                (e, t, n) => {
                    let r = d(e, t);
                    null != r && l(r, n);
                },
                [d, l],
            ),
            {
                dispatch: h,
                getItemProps: m,
                getRowProps: E,
                getContainerProps: g,
            } = (0, o.A)({
                navId: n,
                columnCounts: t,
                onDispatch: f,
                onSelect: p,
                autoFocusElement: !1,
                useVirtualFocus: !0,
            }),
            { gridContainerProps: A, handleGridContainerKeyDown: I } = r.useMemo(() => {
                let e = g();
                return { gridContainerProps: e, handleGridContainerKeyDown: e.onKeyDown };
            }, [g]);
        return (
            r.useEffect(() => {
                let e = () => {
                    c.current = !1;
                };
                return window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e);
            }, []),
            {
                gridDispatch: h,
                getItemProps: m,
                getRowProps: E,
                gridContainerProps: A,
                handleGridContainerKeyDown: I,
                isUsingKeyboardNavigation: c,
            }
        );
    };
function A(e) {
    let {
        categories: t,
        collapsedCategories: n,
        gridWidth: i = 0,
        listPaddingRight: s = 0,
        itemNodeWidth: a,
        itemNodeMargin: o = 0,
    } = e;
    return r.useMemo(() => {
        let e = Math.max(1, Math.floor((i - s + o) / (a + o))),
            r = Math.floor(Math.max(o, (i - s - a * e) / (e - 1))),
            l = [],
            u = [],
            c = [],
            d = 0,
            _ = 0,
            f = 0;
        if (0 !== i) {
            let r = function (t, n) {
                let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = Math.ceil(t.length / e);
                u[_] = r ? 0 : i;
                for (let s = 0; s < i; s++) {
                    let i = s * e,
                        a = i + e,
                        o = t
                            .slice(i, a)
                            .map((e, t) => ({
                                item: e,
                                gridSectionIndex: _,
                                rowIndex: d,
                                columnIndex: t,
                                visibleRowIndex: f,
                                category: n,
                            }));
                    r || (f++, c.push(o), l.push(o.length)), d++;
                }
                _++;
            };
            for (let e of t) e.items.length > 0 && r(e.items, e.categoryInfo.type, n?.has(`${e.key}`) ?? !1);
        }
        return { expressionsGrid: c, rowCount: d, rowCountBySection: u, columnCounts: l, gutterWidth: r };
    }, [t, n, i, o, a, s]);
}
function I(e) {
    let {
            columnCounts: t,
            expressionsGrid: n,
            expressionsListRef: i,
            store: s,
            gridNavigatorId: a,
            onSelectItem: o,
        } = e,
        {
            gridDispatch: u,
            getItemProps: c,
            getRowProps: _,
            gridContainerProps: f,
            handleGridContainerKeyDown: p,
            isUsingKeyboardNavigation: h,
        } = g({
            columnCounts: t,
            gridNavigatorId: a,
            itemGrid: n,
            itemList: i,
            onGridNavigatorItemSelect: o,
            onGridNavigatorPositionChange: s.setInspectedExpressionPosition,
        });
    return (
        r.useEffect(
            () =>
                s.subscribe(
                    (e) => e.inspectedExpressionPosition,
                    (e) => {
                        if (null == e) return;
                        let { columnIndex: t, rowIndex: n, source: r } = e;
                        r !== d.t.GRID_NAVIGATOR_EVENT && u({ type: l.n.SET_FOCUSED_POSITION, x: t, y: n });
                    },
                ),
            [u, s],
        ),
        {
            getItemProps: c,
            getRowProps: _,
            gridContainerProps: f,
            handleGridContainerKeyDown: p,
            isUsingKeyboardNavigation: h,
        }
    );
}
