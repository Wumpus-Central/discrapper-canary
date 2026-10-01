(n.d(t, { FV: () => I, Ff: () => h, Fk: () => g, JZ: () => _, oV: () => E, se: () => A }), n(321073));
var i = n(582128),
    s = n(435558),
    l = n.n(s),
    r = n(741918),
    a = n(118057),
    o = n(788413),
    c = n(23339),
    u = n(319060),
    d = n(60587),
    m = n(652215);
let f = (0, c.xI)(u.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function E(e) {
    let {
            gridWrapperRef: t,
            containerWidth: n,
            showingEmptyState: s,
            listPaddingLeft: r = f,
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
        }, [n, u, s]),
        i.useEffect(() => {
            let e = l().debounce(u, 250);
            return (window.addEventListener("resize", e), () => window.removeEventListener("resize", e));
        }, [u]),
        o
    );
}
function I(e) {
    let { activeCategoryIndex: t, listRef: n, searchQuery: s } = e,
        l = i.useRef(s),
        r = i.useRef(!0);
    (i.useLayoutEffect(() => {
        ("" === s && "" !== l.current && n.current?.scrollToSectionTop(t), (l.current = s));
    }, [s, t, n]),
        i.useLayoutEffect(() => {
            r.current && (n.current?.scrollToSectionTop(t), (r.current = !1));
        }, [t, n]),
        i.useEffect(() => {
            l.current = s;
        }, [s]));
}
let g = (e) => {
    let {
            activeCategoryIndex: t,
            listRef: n,
            isScrolling: s,
            searchQuery: r,
            scrollOffset: a = 0,
            onActiveCategoryIndexChange: o,
            disableForSearch: c = !0,
        } = e,
        u = i.useRef(m.An1),
        d = i.useRef(t);
    d.current = t;
    let f = i.useMemo(
            () =>
                l().debounce(() => {
                    s.current = !1;
                }, 250),
            [s],
        ),
        E = i.useMemo(
            () =>
                l().debounce((e) => {
                    ("" !== r && c) ||
                        (window.cancelAnimationFrame(u.current),
                        (u.current = window.requestAnimationFrame(() => {
                            let t = n.current?.getSectionDescriptors();
                            if (null == t) return;
                            let i = t.findIndex((n, i) => {
                                    let s = t[i + 1],
                                        l = e + a >= n.offset.top,
                                        r = null != s && e + a < s.offset.top;
                                    return (null != s && !l && !r) || (l && r) || (l && null == s);
                                }),
                                s = -1 === i ? 0 : i;
                            d.current !== s && o(s);
                        })));
                }, 0),
            [r, n, a, o, c],
        );
    return i.useCallback(
        (e) => {
            ((s.current = !0), f(), E(e));
        },
        [s, f, E],
    );
};
function h(e) {
    let {
            columnCounts: t,
            gridNavigatorId: n,
            itemGrid: s,
            itemList: l,
            onGridNavigatorItemSelect: o,
            onGridNavigatorPositionChange: c,
        } = e,
        u = i.useRef(!1),
        d = i.useCallback(
            (e, t) => {
                let n = s[t];
                if (null != n) return n[e];
            },
            [s],
        ),
        m = i.useCallback(
            (e) => {
                let { focusedX: t, focusedY: n } = e;
                u.current = !0;
                let i = d(t, n);
                if (null == i) return;
                let { visibleRowIndex: s, columnIndex: r } = i;
                (c(r, s), null != l.current && l.current.scrollRowIntoView(n));
            },
            [d, l, c],
        ),
        f = i.useCallback(
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
                        m(t);
                }
            },
            [m],
        ),
        E = i.useCallback(
            (e, t, n) => {
                let i = d(e, t);
                null != i && o(i, n);
            },
            [d, o],
        ),
        {
            dispatch: I,
            getItemProps: g,
            getRowProps: h,
            getContainerProps: A,
        } = (0, a.A)({
            navId: n,
            columnCounts: t,
            onDispatch: f,
            onSelect: E,
            autoFocusElement: !1,
            useVirtualFocus: !0,
        }),
        { gridContainerProps: _, handleGridContainerKeyDown: p } = i.useMemo(() => {
            let e = A();
            return { gridContainerProps: e, handleGridContainerKeyDown: e.onKeyDown };
        }, [A]);
    return (
        i.useEffect(() => {
            function e() {
                u.current = !1;
            }
            return (window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e));
        }, []),
        {
            gridDispatch: I,
            getItemProps: g,
            getRowProps: h,
            gridContainerProps: _,
            handleGridContainerKeyDown: p,
            isUsingKeyboardNavigation: u,
        }
    );
}
function A(e) {
    let {
        categories: t,
        collapsedCategories: n,
        gridWidth: s = 0,
        listPaddingRight: l = 0,
        itemNodeWidth: r,
        itemNodeMargin: a = 0,
    } = e;
    return i.useMemo(() => {
        let e = Math.max(1, Math.floor((s - l + a) / (r + a))),
            i = Math.floor(Math.max(a, (s - l - r * e) / (e - 1))),
            o = [],
            c = [],
            u = [],
            d = 0,
            m = 0,
            f = 0;
        if (0 !== s)
            for (let i of t)
                i.items.length > 0 &&
                    (function (t, n) {
                        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            s = Math.ceil(t.length / e);
                        c[m] = i ? 0 : s;
                        for (let l = 0; l < s; l++) {
                            let s = l * e,
                                r = s + e,
                                a = t
                                    .slice(s, r)
                                    .map((e, t) => ({
                                        item: e,
                                        gridSectionIndex: m,
                                        rowIndex: d,
                                        columnIndex: t,
                                        visibleRowIndex: f,
                                        category: n,
                                    }));
                            (i || (f++, u.push(a), o.push(a.length)), d++);
                        }
                        m++;
                    })(i.items, i.categoryInfo.type, n?.has(`${i.key}`) ?? !1);
        return { expressionsGrid: u, rowCount: d, rowCountBySection: c, columnCounts: o, gutterWidth: i };
    }, [t, n, s, a, r, l]);
}
function _(e) {
    let {
            columnCounts: t,
            expressionsGrid: n,
            expressionsListRef: s,
            store: l,
            gridNavigatorId: r,
            onSelectItem: a,
        } = e,
        {
            gridDispatch: c,
            getItemProps: u,
            getRowProps: m,
            gridContainerProps: f,
            handleGridContainerKeyDown: E,
            isUsingKeyboardNavigation: I,
        } = h({
            columnCounts: t,
            gridNavigatorId: r,
            itemGrid: n,
            itemList: s,
            onGridNavigatorItemSelect: a,
            onGridNavigatorPositionChange: l.setInspectedExpressionPosition,
        });
    return (
        i.useEffect(
            () =>
                l.subscribe(
                    (e) => e.inspectedExpressionPosition,
                    (e) => {
                        if (null == e) return;
                        let { columnIndex: t, rowIndex: n, source: i } = e;
                        i !== d.t.GRID_NAVIGATOR_EVENT && c({ type: o.n.SET_FOCUSED_POSITION, x: t, y: n });
                    },
                ),
            [c, l],
        ),
        {
            getItemProps: u,
            getRowProps: m,
            gridContainerProps: f,
            handleGridContainerKeyDown: E,
            isUsingKeyboardNavigation: I,
        }
    );
}
