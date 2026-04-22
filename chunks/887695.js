"use strict";
n.d(t, { FV: () => f, Ff: () => _, Fk: () => g, JZ: () => A, oV: () => p, se: () => x }), n(321073);
var i = n(64700),
    l = n(735438),
    s = n.n(l),
    r = n(741918),
    a = n(118057),
    o = n(788413),
    c = n(23339),
    u = n(319060),
    d = n(60587),
    h = n(652215);
let m = (0, c.xI)(u.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    p = (e) => {
        let {
                gridWrapperRef: t,
                containerWidth: n,
                showingEmptyState: l,
                listPaddingLeft: r = m,
                listScrollbarWidth: a = 8,
            } = e,
            [o, c] = i.useState(void 0),
            u = i.useCallback(() => {
                if (null == t.current) return null;
                c(t.current.offsetWidth - r - a);
            }, [t, r, a]);
        return (
            i.useLayoutEffect(() => {
                u();
            }, [n, u, l]),
            i.useEffect(() => {
                let e = s().debounce(u, 250);
                return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
            }, [u]),
            o
        );
    },
    f = (e) => {
        let { activeCategoryIndex: t, listRef: n, searchQuery: l } = e,
            s = i.useRef(l),
            r = i.useRef(!0);
        i.useLayoutEffect(() => {
            "" === l && "" !== s.current && n.current?.scrollToSectionTop(t), (s.current = l);
        }, [l, t, n]),
            i.useLayoutEffect(() => {
                r.current && (n.current?.scrollToSectionTop(t), (r.current = !1));
            }, [t, n]),
            i.useEffect(() => {
                s.current = l;
            }, [l]);
    },
    g = (e) => {
        let {
                activeCategoryIndex: t,
                listRef: n,
                isScrolling: l,
                searchQuery: r,
                scrollOffset: a = 0,
                onActiveCategoryIndexChange: o,
                disableForSearch: c = !0,
            } = e,
            u = i.useRef(h.An1),
            d = i.useRef(t);
        d.current = t;
        let m = i.useMemo(
                () =>
                    s().debounce(() => {
                        l.current = !1;
                    }, 250),
                [l],
            ),
            p = i.useMemo(
                () =>
                    s().debounce((e) => {
                        ("" !== r && c) ||
                            (window.cancelAnimationFrame(u.current),
                            (u.current = window.requestAnimationFrame(() => {
                                let t = n.current?.getSectionDescriptors();
                                if (null == t) return;
                                let i = t.findIndex((n, i) => {
                                        let l = t[i + 1],
                                            s = e + a >= n.offset.top,
                                            r = null != l && e + a < l.offset.top;
                                        return (null != l && !s && !r) || (s && r) || (s && null == l);
                                    }),
                                    l = -1 === i ? 0 : i;
                                d.current !== l && o(l);
                            })));
                    }, 0),
                [r, n, a, o, c],
            );
        return i.useCallback(
            (e) => {
                (l.current = !0), m(), p(e);
            },
            [l, m, p],
        );
    },
    _ = (e) => {
        let {
                columnCounts: t,
                gridNavigatorId: n,
                itemGrid: l,
                itemList: s,
                onGridNavigatorItemSelect: o,
                onGridNavigatorPositionChange: c,
            } = e,
            u = i.useRef(!1),
            d = i.useCallback(
                (e, t) => {
                    let n = l[t];
                    if (null != n) return n[e];
                },
                [l],
            ),
            h = i.useCallback(
                (e) => {
                    let { focusedX: t, focusedY: n } = e;
                    u.current = !0;
                    let i = d(t, n);
                    if (null == i) return;
                    let { visibleRowIndex: l, columnIndex: r } = i;
                    c(r, l), null != s.current && s.current.scrollRowIntoView(n);
                },
                [d, s, c],
            ),
            m = i.useCallback(
                (e, t, n) => {
                    switch (n.type) {
                        case r.X2.NAVIGATE_UP:
                        case r.X2.NAVIGATE_DOWN:
                        case r.X2.NAVIGATE_RIGHT:
                        case r.X2.NAVIGATE_LEFT:
                        case r.X2.NAVIGATE_INLINE_START:
                        case r.X2.NAVIGATE_INLINE_END:
                        case r.X2.NAVIGATE_START:
                        case r.X2.NAVIGATE_END:
                        case r.X2.NAVIGATE_CROSSLINE_START:
                        case r.X2.NAVIGATE_CROSSLINE_END:
                            h(t);
                    }
                },
                [h],
            ),
            p = i.useCallback(
                (e, t, n) => {
                    let i = d(e, t);
                    null != i && o(i, n);
                },
                [d, o],
            ),
            {
                dispatch: f,
                getItemProps: g,
                getRowProps: _,
                getContainerProps: x,
            } = (0, a.A)({
                navId: n,
                columnCounts: t,
                onDispatch: m,
                onSelect: p,
                autoFocusElement: !1,
                useVirtualFocus: !0,
            }),
            { gridContainerProps: A, handleGridContainerKeyDown: C } = i.useMemo(() => {
                let e = x();
                return { gridContainerProps: e, handleGridContainerKeyDown: e.onKeyDown };
            }, [x]);
        return (
            i.useEffect(() => {
                let e = () => {
                    u.current = !1;
                };
                return window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e);
            }, []),
            {
                gridDispatch: f,
                getItemProps: g,
                getRowProps: _,
                gridContainerProps: A,
                handleGridContainerKeyDown: C,
                isUsingKeyboardNavigation: u,
            }
        );
    };
function x(e) {
    let {
        categories: t,
        collapsedCategories: n,
        gridWidth: l = 0,
        listPaddingRight: s = 0,
        itemNodeWidth: r,
        itemNodeMargin: a = 0,
    } = e;
    return i.useMemo(() => {
        let e = Math.max(1, Math.floor((l - s + a) / (r + a))),
            i = Math.floor(Math.max(a, (l - s - r * e) / (e - 1))),
            o = [],
            c = [],
            u = [],
            d = 0,
            h = 0,
            m = 0;
        if (0 !== l) {
            let i = function (t, n) {
                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = Math.ceil(t.length / e);
                c[h] = i ? 0 : l;
                for (let s = 0; s < l; s++) {
                    let l = s * e,
                        r = l + e,
                        a = t
                            .slice(l, r)
                            .map((e, t) => ({
                                item: e,
                                gridSectionIndex: h,
                                rowIndex: d,
                                columnIndex: t,
                                visibleRowIndex: m,
                                category: n,
                            }));
                    i || (m++, u.push(a), o.push(a.length)), d++;
                }
                h++;
            };
            for (let e of t) e.items.length > 0 && i(e.items, e.categoryInfo.type, n?.has(`${e.key}`) ?? !1);
        }
        return { expressionsGrid: u, rowCount: d, rowCountBySection: c, columnCounts: o, gutterWidth: i };
    }, [t, n, l, a, r, s]);
}
function A(e) {
    let {
            columnCounts: t,
            expressionsGrid: n,
            expressionsListRef: l,
            store: s,
            gridNavigatorId: r,
            onSelectItem: a,
        } = e,
        {
            gridDispatch: c,
            getItemProps: u,
            getRowProps: h,
            gridContainerProps: m,
            handleGridContainerKeyDown: p,
            isUsingKeyboardNavigation: f,
        } = _({
            columnCounts: t,
            gridNavigatorId: r,
            itemGrid: n,
            itemList: l,
            onGridNavigatorItemSelect: a,
            onGridNavigatorPositionChange: s.setInspectedExpressionPosition,
        });
    return (
        i.useEffect(
            () =>
                s.subscribe(
                    (e) => e.inspectedExpressionPosition,
                    (e) => {
                        if (null == e) return;
                        let { columnIndex: t, rowIndex: n, source: i } = e;
                        i !== d.t.GRID_NAVIGATOR_EVENT && c({ type: o.n.SET_FOCUSED_POSITION, x: t, y: n });
                    },
                ),
            [c, s],
        ),
        {
            getItemProps: u,
            getRowProps: h,
            gridContainerProps: m,
            handleGridContainerKeyDown: p,
            isUsingKeyboardNavigation: f,
        }
    );
}
