n.d(t, { FV: () => p, Ff: () => x, Fk: () => g, JZ: () => E, oV: () => f, se: () => A }), n(321073);
var l = n(582128),
    i = n(435558),
    s = n.n(i),
    r = n(741918),
    a = n(118057),
    o = n(788413),
    u = n(23339),
    c = n(319060),
    d = n(60587),
    h = n(652215);
let m = (0, u.xI)(c.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function f(e) {
    let {
            gridWrapperRef: t,
            containerWidth: n,
            showingEmptyState: i,
            listPaddingLeft: r = m,
            listScrollbarWidth: a = 8,
        } = e,
        [o, u] = l.useState(void 0),
        c = l.useCallback(() => {
            if (null == t.current) return null;
            u(t.current.offsetWidth - r - a);
        }, [t, r, a]);
    return (
        l.useLayoutEffect(() => {
            c();
        }, [n, c, i]),
        l.useEffect(() => {
            let e = s().debounce(c, 250);
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, [c]),
        o
    );
}
function p(e) {
    let { activeCategoryIndex: t, listRef: n, searchQuery: i } = e,
        s = l.useRef(i),
        r = l.useRef(!0);
    l.useLayoutEffect(() => {
        "" === i && "" !== s.current && n.current?.scrollToSectionTop(t), (s.current = i);
    }, [i, t, n]),
        l.useLayoutEffect(() => {
            r.current && (n.current?.scrollToSectionTop(t), (r.current = !1));
        }, [t, n]),
        l.useEffect(() => {
            s.current = i;
        }, [i]);
}
let g = (e) => {
    let {
            activeCategoryIndex: t,
            listRef: n,
            isScrolling: i,
            searchQuery: r,
            scrollOffset: a = 0,
            onActiveCategoryIndexChange: o,
            disableForSearch: u = !0,
        } = e,
        c = l.useRef(h.An1),
        d = l.useRef(t);
    d.current = t;
    let m = l.useMemo(
            () =>
                s().debounce(() => {
                    i.current = !1;
                }, 250),
            [i],
        ),
        f = l.useMemo(
            () =>
                s().debounce((e) => {
                    ("" !== r && u) ||
                        (window.cancelAnimationFrame(c.current),
                        (c.current = window.requestAnimationFrame(() => {
                            let t = n.current?.getSectionDescriptors();
                            if (null == t) return;
                            let l = t.findIndex((n, l) => {
                                    let i = t[l + 1],
                                        s = e + a >= n.offset.top,
                                        r = null != i && e + a < i.offset.top;
                                    return (null != i && !s && !r) || (s && r) || (s && null == i);
                                }),
                                i = -1 === l ? 0 : l;
                            d.current !== i && o(i);
                        })));
                }, 0),
            [r, n, a, o, u],
        );
    return l.useCallback(
        (e) => {
            (i.current = !0), m(), f(e);
        },
        [i, m, f],
    );
};
function x(e) {
    let {
            columnCounts: t,
            gridNavigatorId: n,
            itemGrid: i,
            itemList: s,
            onGridNavigatorItemSelect: o,
            onGridNavigatorPositionChange: u,
        } = e,
        c = l.useRef(!1),
        d = l.useCallback(
            (e, t) => {
                let n = i[t];
                if (null != n) return n[e];
            },
            [i],
        ),
        h = l.useCallback(
            (e) => {
                let { focusedX: t, focusedY: n } = e;
                c.current = !0;
                let l = d(t, n);
                if (null == l) return;
                let { visibleRowIndex: i, columnIndex: r } = l;
                u(r, i), null != s.current && s.current.scrollRowIntoView(n);
            },
            [d, s, u],
        ),
        m = l.useCallback(
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
        f = l.useCallback(
            (e, t, n) => {
                let l = d(e, t);
                null != l && o(l, n);
            },
            [d, o],
        ),
        {
            dispatch: p,
            getItemProps: g,
            getRowProps: x,
            getContainerProps: A,
        } = (0, a.A)({
            navId: n,
            columnCounts: t,
            onDispatch: m,
            onSelect: f,
            autoFocusElement: !1,
            useVirtualFocus: !0,
        }),
        { gridContainerProps: E, handleGridContainerKeyDown: C } = l.useMemo(() => {
            let e = A();
            return { gridContainerProps: e, handleGridContainerKeyDown: e.onKeyDown };
        }, [A]);
    return (
        l.useEffect(() => {
            function e() {
                c.current = !1;
            }
            return window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e);
        }, []),
        {
            gridDispatch: p,
            getItemProps: g,
            getRowProps: x,
            gridContainerProps: E,
            handleGridContainerKeyDown: C,
            isUsingKeyboardNavigation: c,
        }
    );
}
function A(e) {
    let {
        categories: t,
        collapsedCategories: n,
        gridWidth: i = 0,
        listPaddingRight: s = 0,
        itemNodeWidth: r,
        itemNodeMargin: a = 0,
    } = e;
    return l.useMemo(() => {
        let e = Math.max(1, Math.floor((i - s + a) / (r + a))),
            l = Math.floor(Math.max(a, (i - s - r * e) / (e - 1))),
            o = [],
            u = [],
            c = [],
            d = 0,
            h = 0,
            m = 0;
        if (0 !== i)
            for (let l of t)
                l.items.length > 0 &&
                    (function (t, n) {
                        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            i = Math.ceil(t.length / e);
                        u[h] = l ? 0 : i;
                        for (let s = 0; s < i; s++) {
                            let i = s * e,
                                r = i + e,
                                a = t
                                    .slice(i, r)
                                    .map((e, t) => ({
                                        item: e,
                                        gridSectionIndex: h,
                                        rowIndex: d,
                                        columnIndex: t,
                                        visibleRowIndex: m,
                                        category: n,
                                    }));
                            l || (m++, c.push(a), o.push(a.length)), d++;
                        }
                        h++;
                    })(l.items, l.categoryInfo.type, n?.has(`${l.key}`) ?? !1);
        return { expressionsGrid: c, rowCount: d, rowCountBySection: u, columnCounts: o, gutterWidth: l };
    }, [t, n, i, a, r, s]);
}
function E(e) {
    let {
            columnCounts: t,
            expressionsGrid: n,
            expressionsListRef: i,
            store: s,
            gridNavigatorId: r,
            onSelectItem: a,
        } = e,
        {
            gridDispatch: u,
            getItemProps: c,
            getRowProps: h,
            gridContainerProps: m,
            handleGridContainerKeyDown: f,
            isUsingKeyboardNavigation: p,
        } = x({
            columnCounts: t,
            gridNavigatorId: r,
            itemGrid: n,
            itemList: i,
            onGridNavigatorItemSelect: a,
            onGridNavigatorPositionChange: s.setInspectedExpressionPosition,
        });
    return (
        l.useEffect(
            () =>
                s.subscribe(
                    (e) => e.inspectedExpressionPosition,
                    (e) => {
                        if (null == e) return;
                        let { columnIndex: t, rowIndex: n, source: l } = e;
                        l !== d.t.GRID_NAVIGATOR_EVENT && u({ type: o.n.SET_FOCUSED_POSITION, x: t, y: n });
                    },
                ),
            [u, s],
        ),
        {
            getItemProps: c,
            getRowProps: h,
            gridContainerProps: m,
            handleGridContainerKeyDown: f,
            isUsingKeyboardNavigation: p,
        }
    );
}
