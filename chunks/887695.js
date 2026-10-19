(n.d(t, { FV: () => I, Ff: () => h, Fk: () => g, JZ: () => A, oV: () => E, se: () => p }), n(321073));
var i = n(582128),
    s = n(435558),
    r = n.n(s),
    l = n(741918),
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
            listPaddingLeft: l = f,
            listScrollbarWidth: a = 8,
        } = e,
        [o, c] = i.useState(void 0),
        u = i.useCallback(() => {
            if (null == t.current) return null;
            c(t.current.offsetWidth - l - a);
        }, [t, l, a]);
    return (
        i.useLayoutEffect(() => {
            u();
        }, [n, u, s]),
        i.useEffect(() => {
            let e = r().debounce(u, 250);
            return (window.addEventListener("resize", e), () => window.removeEventListener("resize", e));
        }, [u]),
        o
    );
}
function I(e) {
    let { activeCategoryIndex: t, listRef: n, searchQuery: s } = e,
        r = i.useRef(s),
        l = i.useRef(!0);
    (i.useLayoutEffect(() => {
        ("" === s && "" !== r.current && n.current?.scrollToSectionTop(t), (r.current = s));
    }, [s, t, n]),
        i.useLayoutEffect(() => {
            l.current && (n.current?.scrollToSectionTop(t), (l.current = !1));
        }, [t, n]),
        i.useEffect(() => {
            r.current = s;
        }, [s]));
}
let g = (e) => {
    let {
            activeCategoryIndex: t,
            listRef: n,
            isScrolling: s,
            searchQuery: l,
            scrollOffset: a = 0,
            onActiveCategoryIndexChange: o,
            disableForSearch: c = !0,
        } = e,
        u = i.useRef(m.An1),
        d = i.useRef(t);
    d.current = t;
    let f = i.useMemo(
            () =>
                r().debounce(() => {
                    s.current = !1;
                }, 250),
            [s],
        ),
        E = i.useMemo(
            () =>
                r().debounce((e) => {
                    ("" !== l && c) ||
                        (window.cancelAnimationFrame(u.current),
                        (u.current = window.requestAnimationFrame(() => {
                            let t = n.current?.getSectionDescriptors();
                            if (null == t) return;
                            let i = t.findIndex((n, i) => {
                                    let s = t[i + 1],
                                        r = e + a >= n.offset.top,
                                        l = null != s && e + a < s.offset.top;
                                    return (null != s && !r && !l) || (r && l) || (r && null == s);
                                }),
                                s = -1 === i ? 0 : i;
                            d.current !== s && o(s);
                        })));
                }, 0),
            [l, n, a, o, c],
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
            itemList: r,
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
                let { visibleRowIndex: s, columnIndex: l } = i;
                (c(l, s), null != r.current && r.current.scrollRowIntoView(n));
            },
            [d, r, c],
        ),
        f = i.useCallback(
            (e, t, n) => {
                switch (n.type) {
                    case l.X2.NAVIGATE_UP:
                    case l.X2.NAVIGATE_DOWN:
                    case l.X2.NAVIGATE_RIGHT:
                    case l.X2.NAVIGATE_LEFT:
                    case l.X2.NAVIGATE_INLINE_START:
                    case l.X2.NAVIGATE_INLINE_END:
                    case l.X2.NAVIGATE_START:
                    case l.X2.NAVIGATE_END:
                    case l.X2.NAVIGATE_CROSSLINE_START:
                    case l.X2.NAVIGATE_CROSSLINE_END:
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
            getContainerProps: p,
        } = (0, a.A)({
            navId: n,
            columnCounts: t,
            onDispatch: f,
            onSelect: E,
            autoFocusElement: !1,
            useVirtualFocus: !0,
        }),
        { gridContainerProps: A, handleGridContainerKeyDown: _ } = i.useMemo(() => {
            let e = p();
            return { gridContainerProps: e, handleGridContainerKeyDown: e.onKeyDown };
        }, [p]);
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
            gridContainerProps: A,
            handleGridContainerKeyDown: _,
            isUsingKeyboardNavigation: u,
        }
    );
}
function p(e) {
    let {
        categories: t,
        collapsedCategories: n,
        gridWidth: s = 0,
        listPaddingRight: r = 0,
        itemNodeWidth: l,
        itemNodeMargin: a = 0,
    } = e;
    return i.useMemo(() => {
        let e = Math.max(1, Math.floor((s - r + a) / (l + a))),
            i = Math.floor(Math.max(a, (s - r - l * e) / (e - 1))),
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
                        for (let r = 0; r < s; r++) {
                            let s = r * e,
                                l = s + e,
                                a = t
                                    .slice(s, l)
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
    }, [t, n, s, a, l, r]);
}
function A(e) {
    let {
            columnCounts: t,
            expressionsGrid: n,
            expressionsListRef: s,
            store: r,
            gridNavigatorId: l,
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
            gridNavigatorId: l,
            itemGrid: n,
            itemList: s,
            onGridNavigatorItemSelect: a,
            onGridNavigatorPositionChange: r.setInspectedExpressionPosition,
        });
    return (
        i.useEffect(
            () =>
                r.subscribe(
                    (e) => e.inspectedExpressionPosition,
                    (e) => {
                        if (null == e) return;
                        let { columnIndex: t, rowIndex: n, source: i } = e;
                        i !== d.t.GRID_NAVIGATOR_EVENT && c({ type: o.n.SET_FOCUSED_POSITION, x: t, y: n });
                    },
                ),
            [c, r],
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
