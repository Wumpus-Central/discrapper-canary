n.d(t, {
    FV: () => m,
    Ff: () => y,
    Fk: () => E,
    JZ: () => O,
    ci: () => g,
    oV: () => h,
    se: () => b,
}),
    n(896048),
    n(321073);
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    o = n(741918),
    s = n(118057),
    l = n(788413),
    c = n(23339),
    u = n(319060),
    d = n(60587),
    f = n(652215);
let p = (0, c.xI)(u.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    _ = 8,
    h = (e) => {
        let {
                gridWrapperRef: t,
                containerWidth: n,
                showingEmptyState: i,
                listPaddingLeft: o = p,
                listScrollbarWidth: s = _,
            } = e,
            [l, c] = r.useState(void 0),
            u = r.useCallback(() => {
                if (null == t.current) return null;
                c(t.current.offsetWidth - o - s);
            }, [t, o, s]);
        return (
            r.useLayoutEffect(() => {
                u();
            }, [n, u, i]),
            r.useEffect(() => {
                let e = a().debounce(u, 250);
                return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
            }, [u]),
            l
        );
    },
    m = (e) => {
        let { activeCategoryIndex: t, listRef: n, searchQuery: i } = e,
            a = r.useRef(i),
            o = r.useRef(!0);
        r.useLayoutEffect(() => {
            if ("" === i && "" !== a.current) {
                var e;
                null == (e = n.current) || e.scrollToSectionTop(t);
            }
            a.current = i;
        }, [i, t, n]),
            r.useLayoutEffect(() => {
                if (o.current) {
                    var e;
                    null == (e = n.current) || e.scrollToSectionTop(t), (o.current = !1);
                }
            }, [t, n]),
            r.useEffect(() => {
                a.current = i;
            }, [i]);
    },
    g = (e) => {
        let { listRef: t, searchQuery: n, nitroLockedSectionStates: i, setUpsellGlowOpacity: a } = e,
            o = r.useCallback(
                (e) => {
                    if ("" !== n) {
                        null == a || a(0);
                        return;
                    }
                    if (null == t.current) return;
                    let r = i.findIndex((e) => e.isNitroLocked);
                    if (-1 === r) {
                        null == a || a(0);
                        return;
                    }
                    let o = t.current.getSectionDescriptors();
                    if (null == o || 0 === o.length || o.length !== i.length) return;
                    let s = o[r],
                        l = e + t.current.getListDimensions().height - 250,
                        c = 250,
                        u = Math.min(Math.max((s.offset.top - l) / c, 0), 1);
                    null == a || a(u);
                },
                [n, t, i, a],
            );
        return r.useCallback(
            (e) => {
                o(e);
            },
            [o],
        );
    },
    E = (e) => {
        let {
                activeCategoryIndex: t,
                listRef: n,
                isScrolling: i,
                searchQuery: o,
                scrollOffset: s = 0,
                onActiveCategoryIndexChange: l,
                disableForSearch: c = !0,
            } = e,
            u = r.useRef(f.An1),
            d = r.useRef(t);
        d.current = t;
        let p = r.useMemo(
                () =>
                    a().debounce(() => {
                        i.current = !1;
                    }, 250),
                [i],
            ),
            _ = r.useMemo(
                () =>
                    a().debounce((e) => {
                        ("" !== o && c) ||
                            (window.cancelAnimationFrame(u.current),
                            (u.current = window.requestAnimationFrame(() => {
                                var t;
                                let r = null == (t = n.current) ? void 0 : t.getSectionDescriptors();
                                if (null == r) return;
                                let i = r.findIndex((t, n) => {
                                        let i = r[n + 1],
                                            a = e + s >= t.offset.top,
                                            o = null != i && e + s < i.offset.top;
                                        return (null != i && !a && !o) || (a && o) || (a && null == i);
                                    }),
                                    a = -1 === i ? 0 : i;
                                d.current !== a && l(a);
                            })));
                    }, 0),
                [o, n, s, l, c],
            );
        return r.useCallback(
            (e) => {
                (i.current = !0), p(), _(e);
            },
            [i, p, _],
        );
    },
    y = (e) => {
        let {
                columnCounts: t,
                gridNavigatorId: n,
                itemGrid: i,
                itemList: a,
                onGridNavigatorItemSelect: l,
                onGridNavigatorPositionChange: c,
            } = e,
            u = r.useRef(!1),
            d = r.useCallback(
                (e, t) => {
                    let n = i[t];
                    if (null != n) return n[e];
                },
                [i],
            ),
            f = r.useCallback(
                (e) => {
                    let { focusedX: t, focusedY: n } = e;
                    u.current = !0;
                    let r = d(t, n);
                    if (null == r) return;
                    let { visibleRowIndex: i, columnIndex: o } = r;
                    c(o, i), null != a.current && a.current.scrollRowIntoView(n);
                },
                [d, a, c],
            ),
            p = r.useCallback(
                (e, t, n) => {
                    switch (n.type) {
                        case o.X2.NAVIGATE_UP:
                        case o.X2.NAVIGATE_DOWN:
                        case o.X2.NAVIGATE_RIGHT:
                        case o.X2.NAVIGATE_LEFT:
                        case o.X2.NAVIGATE_INLINE_START:
                        case o.X2.NAVIGATE_INLINE_END:
                        case o.X2.NAVIGATE_START:
                        case o.X2.NAVIGATE_END:
                        case o.X2.NAVIGATE_CROSSLINE_START:
                        case o.X2.NAVIGATE_CROSSLINE_END:
                            f(t);
                    }
                },
                [f],
            ),
            _ = r.useCallback(
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
            } = (0, s.A)({
                navId: n,
                columnCounts: t,
                onDispatch: p,
                onSelect: _,
                autoFocusElement: !1,
                useVirtualFocus: !0,
            }),
            { gridContainerProps: y, handleGridContainerKeyDown: b } = r.useMemo(() => {
                let e = E();
                return {
                    gridContainerProps: e,
                    handleGridContainerKeyDown: e.onKeyDown,
                };
            }, [E]);
        return (
            r.useEffect(() => {
                let e = () => {
                    u.current = !1;
                };
                return window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e);
            }, []),
            {
                gridDispatch: h,
                getItemProps: m,
                getRowProps: g,
                gridContainerProps: y,
                handleGridContainerKeyDown: b,
                isUsingKeyboardNavigation: u,
            }
        );
    };

function b(e) {
    let {
        categories: t,
        collapsedCategories: n,
        gridWidth: i = 0,
        listPaddingRight: a = 0,
        itemNodeWidth: o,
        itemNodeMargin: s = 0,
    } = e;
    return r.useMemo(() => {
        let e = Math.max(1, Math.floor((i - a + s) / (o + s))),
            r = Math.floor(Math.max(s, (i - a - o * e) / (e - 1))),
            l = [],
            c = [],
            u = [],
            d = 0,
            f = 0,
            p = 0;
        if (0 !== i) {
            let r = function (t, n) {
                let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = Math.ceil(t.length / e);
                c[f] = r ? 0 : i;
                for (let a = 0; a < i; a++) {
                    let i = a * e,
                        o = i + e,
                        s = t.slice(i, o).map((e, t) => ({
                            item: e,
                            gridSectionIndex: f,
                            rowIndex: d,
                            columnIndex: t,
                            visibleRowIndex: p,
                            category: n,
                        }));
                    r || (p++, u.push(s), l.push(s.length)), d++;
                }
                f++;
            };
            for (let e of t)
                if (e.items.length > 0) {
                    var _;
                    r(e.items, e.categoryInfo.type, null != (_ = null == n ? void 0 : n.has("".concat(e.key))) && _);
                }
        }
        return {
            expressionsGrid: u,
            rowCount: d,
            rowCountBySection: c,
            columnCounts: l,
            gutterWidth: r,
        };
    }, [t, n, i, s, o, a]);
}

function O(e) {
    let {
            columnCounts: t,
            expressionsGrid: n,
            expressionsListRef: i,
            store: a,
            gridNavigatorId: o,
            onSelectItem: s,
        } = e,
        {
            gridDispatch: c,
            getItemProps: u,
            getRowProps: f,
            gridContainerProps: p,
            handleGridContainerKeyDown: _,
            isUsingKeyboardNavigation: h,
        } = y({
            columnCounts: t,
            gridNavigatorId: o,
            itemGrid: n,
            itemList: i,
            onGridNavigatorItemSelect: s,
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
                        r !== d.t.GRID_NAVIGATOR_EVENT &&
                            c({
                                type: l.n.SET_FOCUSED_POSITION,
                                x: t,
                                y: n,
                            });
                    },
                ),
            [c, a],
        ),
        {
            getItemProps: u,
            getRowProps: f,
            gridContainerProps: p,
            handleGridContainerKeyDown: _,
            isUsingKeyboardNavigation: h,
        }
    );
}
