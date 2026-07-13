"use strict";
n.d(t, { FV: () => h, Ff: () => f, Fk: () => I, JZ: () => T, oV: () => A, se: () => p }), n(321073);
var i = n(64700),
    r = n(735438),
    a = n.n(r),
    s = n(741918),
    l = n(118057),
    o = n(788413),
    d = n(23339),
    c = n(319060),
    u = n(60587),
    _ = n(652215);
let E = (0, d.xI)(c.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    A = (e) => {
        let {
                gridWrapperRef: t,
                containerWidth: n,
                showingEmptyState: r,
                listPaddingLeft: s = E,
                listScrollbarWidth: l = 8,
            } = e,
            [o, d] = i.useState(void 0),
            c = i.useCallback(() => {
                if (null == t.current) return null;
                d(t.current.offsetWidth - s - l);
            }, [t, s, l]);
        return (
            i.useLayoutEffect(() => {
                c();
            }, [n, c, r]),
            i.useEffect(() => {
                let e = a().debounce(c, 250);
                return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
            }, [c]),
            o
        );
    };
function h(e) {
    let { activeCategoryIndex: t, listRef: n, searchQuery: r } = e,
        a = i.useRef(r),
        s = i.useRef(!0);
    i.useLayoutEffect(() => {
        "" === r && "" !== a.current && n.current?.scrollToSectionTop(t), (a.current = r);
    }, [r, t, n]),
        i.useLayoutEffect(() => {
            s.current && (n.current?.scrollToSectionTop(t), (s.current = !1));
        }, [t, n]),
        i.useEffect(() => {
            a.current = r;
        }, [r]);
}
let I = (e) => {
    let {
            activeCategoryIndex: t,
            listRef: n,
            isScrolling: r,
            searchQuery: s,
            scrollOffset: l = 0,
            onActiveCategoryIndexChange: o,
            disableForSearch: d = !0,
        } = e,
        c = i.useRef(_.An1),
        u = i.useRef(t);
    u.current = t;
    let E = i.useMemo(
            () =>
                a().debounce(() => {
                    r.current = !1;
                }, 250),
            [r],
        ),
        A = i.useMemo(
            () =>
                a().debounce((e) => {
                    ("" !== s && d) ||
                        (window.cancelAnimationFrame(c.current),
                        (c.current = window.requestAnimationFrame(() => {
                            let t = n.current?.getSectionDescriptors();
                            if (null == t) return;
                            let i = t.findIndex((n, i) => {
                                    let r = t[i + 1],
                                        a = e + l >= n.offset.top,
                                        s = null != r && e + l < r.offset.top;
                                    return (null != r && !a && !s) || (a && s) || (a && null == r);
                                }),
                                r = -1 === i ? 0 : i;
                            u.current !== r && o(r);
                        })));
                }, 0),
            [s, n, l, o, d],
        );
    return i.useCallback(
        (e) => {
            (r.current = !0), E(), A(e);
        },
        [r, E, A],
    );
};
function f(e) {
    let {
            columnCounts: t,
            gridNavigatorId: n,
            itemGrid: r,
            itemList: a,
            onGridNavigatorItemSelect: o,
            onGridNavigatorPositionChange: d,
        } = e,
        c = i.useRef(!1),
        u = i.useCallback(
            (e, t) => {
                let n = r[t];
                if (null != n) return n[e];
            },
            [r],
        ),
        _ = i.useCallback(
            (e) => {
                let { focusedX: t, focusedY: n } = e;
                c.current = !0;
                let i = u(t, n);
                if (null == i) return;
                let { visibleRowIndex: r, columnIndex: s } = i;
                d(s, r), null != a.current && a.current.scrollRowIntoView(n);
            },
            [u, a, d],
        ),
        E = i.useCallback(
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
        A = i.useCallback(
            (e, t, n) => {
                let i = u(e, t);
                null != i && o(i, n);
            },
            [u, o],
        ),
        {
            dispatch: h,
            getItemProps: I,
            getRowProps: f,
            getContainerProps: p,
        } = (0, l.A)({
            navId: n,
            columnCounts: t,
            onDispatch: E,
            onSelect: A,
            autoFocusElement: !1,
            useVirtualFocus: !0,
        }),
        { gridContainerProps: T, handleGridContainerKeyDown: m } = i.useMemo(() => {
            let e = p();
            return { gridContainerProps: e, handleGridContainerKeyDown: e.onKeyDown };
        }, [p]);
    return (
        i.useEffect(() => {
            function e() {
                c.current = !1;
            }
            return window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e);
        }, []),
        {
            gridDispatch: h,
            getItemProps: I,
            getRowProps: f,
            gridContainerProps: T,
            handleGridContainerKeyDown: m,
            isUsingKeyboardNavigation: c,
        }
    );
}
function p(e) {
    let {
        categories: t,
        collapsedCategories: n,
        gridWidth: r = 0,
        listPaddingRight: a = 0,
        itemNodeWidth: s,
        itemNodeMargin: l = 0,
    } = e;
    return i.useMemo(() => {
        let e = Math.max(1, Math.floor((r - a + l) / (s + l))),
            i = Math.floor(Math.max(l, (r - a - s * e) / (e - 1))),
            o = [],
            d = [],
            c = [],
            u = 0,
            _ = 0,
            E = 0;
        if (0 !== r)
            for (let i of t)
                i.items.length > 0 &&
                    (function (t, n) {
                        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = Math.ceil(t.length / e);
                        d[_] = i ? 0 : r;
                        for (let a = 0; a < r; a++) {
                            let r = a * e,
                                s = r + e,
                                l = t
                                    .slice(r, s)
                                    .map((e, t) => ({
                                        item: e,
                                        gridSectionIndex: _,
                                        rowIndex: u,
                                        columnIndex: t,
                                        visibleRowIndex: E,
                                        category: n,
                                    }));
                            i || (E++, c.push(l), o.push(l.length)), u++;
                        }
                        _++;
                    })(i.items, i.categoryInfo.type, n?.has(`${i.key}`) ?? !1);
        return { expressionsGrid: c, rowCount: u, rowCountBySection: d, columnCounts: o, gutterWidth: i };
    }, [t, n, r, l, s, a]);
}
function T(e) {
    let {
            columnCounts: t,
            expressionsGrid: n,
            expressionsListRef: r,
            store: a,
            gridNavigatorId: s,
            onSelectItem: l,
        } = e,
        {
            gridDispatch: d,
            getItemProps: c,
            getRowProps: _,
            gridContainerProps: E,
            handleGridContainerKeyDown: A,
            isUsingKeyboardNavigation: h,
        } = f({
            columnCounts: t,
            gridNavigatorId: s,
            itemGrid: n,
            itemList: r,
            onGridNavigatorItemSelect: l,
            onGridNavigatorPositionChange: a.setInspectedExpressionPosition,
        });
    return (
        i.useEffect(
            () =>
                a.subscribe(
                    (e) => e.inspectedExpressionPosition,
                    (e) => {
                        if (null == e) return;
                        let { columnIndex: t, rowIndex: n, source: i } = e;
                        i !== u.t.GRID_NAVIGATOR_EVENT && d({ type: o.n.SET_FOCUSED_POSITION, x: t, y: n });
                    },
                ),
            [d, a],
        ),
        {
            getItemProps: c,
            getRowProps: _,
            gridContainerProps: E,
            handleGridContainerKeyDown: A,
            isUsingKeyboardNavigation: h,
        }
    );
}
