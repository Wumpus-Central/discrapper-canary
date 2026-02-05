"use strict";
n.d(t, { FV: () => m, Ff: () => A, Fk: () => E, JZ: () => T, ci: () => g, oV: () => h, se: () => I }), n(321073);
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(741918),
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
                listPaddingLeft: s = f,
                listScrollbarWidth: o = p,
            } = e,
            [l, u] = r.useState(void 0),
            c = r.useCallback(() => {
                if (null == t.current) return null;
                u(t.current.offsetWidth - s - o);
            }, [t, s, o]);
        return (
            r.useLayoutEffect(() => {
                c();
            }, [n, c, i]),
            r.useEffect(() => {
                let e = a().debounce(c, 250);
                return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
            }, [c]),
            l
        );
    },
    m = (e) => {
        let { activeCategoryIndex: t, listRef: n, searchQuery: i } = e,
            a = r.useRef(i),
            s = r.useRef(!0);
        r.useLayoutEffect(() => {
            "" === i && "" !== a.current && n.current?.scrollToSectionTop(t), (a.current = i);
        }, [i, t, n]),
            r.useLayoutEffect(() => {
                s.current && (n.current?.scrollToSectionTop(t), (s.current = !1));
            }, [t, n]),
            r.useEffect(() => {
                a.current = i;
            }, [i]);
    },
    g = (e) => {
        let { listRef: t, searchQuery: n, nitroLockedSectionStates: i, setUpsellGlowOpacity: a } = e,
            s = r.useCallback(
                (e) => {
                    if ("" !== n) return void a?.(0);
                    if (null == t.current) return;
                    let r = i.findIndex((e) => e.isNitroLocked);
                    if (-1 === r) return void a?.(0);
                    let s = t.current.getSectionDescriptors();
                    if (null == s || 0 === s.length || s.length !== i.length) return;
                    let o = s[r],
                        l = e + t.current.getListDimensions().height - 250,
                        u = 250,
                        c = Math.min(Math.max((o.offset.top - l) / u, 0), 1);
                    a?.(c);
                },
                [n, t, i, a],
            );
        return r.useCallback(
            (e) => {
                s(e);
            },
            [s],
        );
    },
    E = (e) => {
        let {
                activeCategoryIndex: t,
                listRef: n,
                isScrolling: i,
                searchQuery: s,
                scrollOffset: o = 0,
                onActiveCategoryIndexChange: l,
                disableForSearch: u = !0,
            } = e,
            c = r.useRef(_.An1),
            d = r.useRef(t);
        d.current = t;
        let f = r.useMemo(
                () =>
                    a().debounce(() => {
                        i.current = !1;
                    }, 250),
                [i],
            ),
            p = r.useMemo(
                () =>
                    a().debounce((e) => {
                        ("" !== s && u) ||
                            (window.cancelAnimationFrame(c.current),
                            (c.current = window.requestAnimationFrame(() => {
                                let t = n.current?.getSectionDescriptors();
                                if (null == t) return;
                                let r = t.findIndex((n, r) => {
                                        let i = t[r + 1],
                                            a = e + o >= n.offset.top,
                                            s = null != i && e + o < i.offset.top;
                                        return (null != i && !a && !s) || (a && s) || (a && null == i);
                                    }),
                                    i = -1 === r ? 0 : r;
                                d.current !== i && l(i);
                            })));
                    }, 0),
                [s, n, o, l, u],
            );
        return r.useCallback(
            (e) => {
                (i.current = !0), f(), p(e);
            },
            [i, f, p],
        );
    },
    A = (e) => {
        let {
                columnCounts: t,
                gridNavigatorId: n,
                itemGrid: i,
                itemList: a,
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
                    let { visibleRowIndex: i, columnIndex: s } = r;
                    u(s, i), null != a.current && a.current.scrollRowIntoView(n);
                },
                [d, a, u],
            ),
            f = r.useCallback(
                (e, t, n) => {
                    switch (n.type) {
                        case s.X2.NAVIGATE_UP:
                        case s.X2.NAVIGATE_DOWN:
                        case s.X2.NAVIGATE_RIGHT:
                        case s.X2.NAVIGATE_LEFT:
                        case s.X2.NAVIGATE_INLINE_START:
                        case s.X2.NAVIGATE_INLINE_END:
                        case s.X2.NAVIGATE_START:
                        case s.X2.NAVIGATE_END:
                        case s.X2.NAVIGATE_CROSSLINE_START:
                        case s.X2.NAVIGATE_CROSSLINE_END:
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
                getRowProps: g,
                getContainerProps: E,
            } = (0, o.A)({
                navId: n,
                columnCounts: t,
                onDispatch: f,
                onSelect: p,
                autoFocusElement: !1,
                useVirtualFocus: !0,
            }),
            { gridContainerProps: A, handleGridContainerKeyDown: I } = r.useMemo(() => {
                let e = E();
                return { gridContainerProps: e, handleGridContainerKeyDown: e.onKeyDown };
            }, [E]);
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
                getRowProps: g,
                gridContainerProps: A,
                handleGridContainerKeyDown: I,
                isUsingKeyboardNavigation: c,
            }
        );
    };
function I(e) {
    let {
        categories: t,
        collapsedCategories: n,
        gridWidth: i = 0,
        listPaddingRight: a = 0,
        itemNodeWidth: s,
        itemNodeMargin: o = 0,
    } = e;
    return r.useMemo(() => {
        let e = Math.max(1, Math.floor((i - a + o) / (s + o))),
            r = Math.floor(Math.max(o, (i - a - s * e) / (e - 1))),
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
                for (let a = 0; a < i; a++) {
                    let i = a * e,
                        s = i + e,
                        o = t
                            .slice(i, s)
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
    }, [t, n, i, o, s, a]);
}
function T(e) {
    let {
            columnCounts: t,
            expressionsGrid: n,
            expressionsListRef: i,
            store: a,
            gridNavigatorId: s,
            onSelectItem: o,
        } = e,
        {
            gridDispatch: u,
            getItemProps: c,
            getRowProps: _,
            gridContainerProps: f,
            handleGridContainerKeyDown: p,
            isUsingKeyboardNavigation: h,
        } = A({
            columnCounts: t,
            gridNavigatorId: s,
            itemGrid: n,
            itemList: i,
            onGridNavigatorItemSelect: o,
            onGridNavigatorPositionChange: a.setInspectedExpressionPosition,
        });
    return (
        r.useEffect(
            () =>
                a.subscribe(
                    (e) => e.inspectedExpressionPosition,
                    (e) => {
                        if (null == e) return;
                        let { columnIndex: t, rowIndex: n, source: r } = e;
                        r !== d.t.GRID_NAVIGATOR_EVENT && u({ type: l.n.SET_FOCUSED_POSITION, x: t, y: n });
                    },
                ),
            [u, a],
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
