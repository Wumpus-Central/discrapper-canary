n.d(t, {
    FV: () => m,
    Ff: () => b,
    Fk: () => E,
    JZ: () => O,
    ci: () => g,
    oV: () => h,
    se: () => y,
}),
    n(896048),
    n(321073);
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(741918),
    o = n(118057),
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
                listPaddingLeft: s = p,
                listScrollbarWidth: o = _,
            } = e,
            [l, c] = r.useState(void 0),
            u = r.useCallback(() => {
                if (null == t.current) return null;
                c(t.current.offsetWidth - s - o);
            }, [t, s, o]);
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
            s = r.useRef(!0);
        r.useLayoutEffect(() => {
            if ("" === i && "" !== a.current) {
                var e;
                null == (e = n.current) || e.scrollToSectionTop(t);
            }
            a.current = i;
        }, [i, t, n]),
            r.useLayoutEffect(() => {
                if (s.current) {
                    var e;
                    null == (e = n.current) || e.scrollToSectionTop(t), (s.current = !1);
                }
            }, [t, n]),
            r.useEffect(() => {
                a.current = i;
            }, [i]);
    },
    g = (e) => {
        let { listRef: t, searchQuery: n, nitroLockedSectionStates: i, setUpsellGlowOpacity: a } = e,
            s = r.useCallback(
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
                    let s = t.current.getSectionDescriptors();
                    if (null == s || 0 === s.length || s.length !== i.length) return;
                    let o = s[r],
                        l = e + t.current.getListDimensions().height - 250,
                        c = 250,
                        u = Math.min(Math.max((o.offset.top - l) / c, 0), 1);
                    null == a || a(u);
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
                disableForSearch: c = !0,
            } = e,
            u = r.useRef(f.An1),
            d = r.useMemo(
                () =>
                    a().debounce(() => {
                        i.current = !1;
                    }, 250),
                [i],
            ),
            p = r.useMemo(
                () =>
                    a().debounce((e) => {
                        ("" !== s && c) ||
                            (window.cancelAnimationFrame(u.current),
                            (u.current = window.requestAnimationFrame(() => {
                                var r;
                                let i = null == (r = n.current) ? void 0 : r.getSectionDescriptors();
                                if (null == i) return;
                                let a = i.findIndex((t, n) => {
                                        let r = i[n + 1],
                                            a = e + o >= t.offset.top,
                                            s = null != r && e + o < r.offset.top;
                                        return (null != r && !a && !s) || (a && s) || (a && null == r);
                                    }),
                                    s = -1 === a ? 0 : a;
                                t !== s && l(s);
                            })));
                    }, 0),
                [s, n, t, o, l, c],
            );
        return r.useCallback(
            (e) => {
                (i.current = !0), d(), p(e);
            },
            [i, d, p],
        );
    },
    b = (e) => {
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
                    let { visibleRowIndex: i, columnIndex: s } = r;
                    c(s, i), null != a.current && a.current.scrollRowIntoView(n);
                },
                [d, a, c],
            ),
            p = r.useCallback(
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
            } = (0, o.A)({
                navId: n,
                columnCounts: t,
                onDispatch: p,
                onSelect: _,
                autoFocusElement: !1,
                useVirtualFocus: !0,
            }),
            { gridContainerProps: b, handleGridContainerKeyDown: y } = r.useMemo(() => {
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
                gridContainerProps: b,
                handleGridContainerKeyDown: y,
                isUsingKeyboardNavigation: u,
            }
        );
    };
function y(e) {
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
                        s = i + e,
                        o = t.slice(i, s).map((e, t) => ({
                            item: e,
                            gridSectionIndex: f,
                            rowIndex: d,
                            columnIndex: t,
                            visibleRowIndex: p,
                            category: n,
                        }));
                    r || (p++, u.push(o), l.push(o.length)), d++;
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
    }, [t, n, i, o, s, a]);
}
function O(e) {
    let {
            columnCounts: t,
            expressionsGrid: n,
            expressionsListRef: i,
            store: a,
            gridNavigatorId: s,
            onSelectItem: o,
        } = e,
        {
            gridDispatch: c,
            getItemProps: u,
            getRowProps: f,
            gridContainerProps: p,
            handleGridContainerKeyDown: _,
            isUsingKeyboardNavigation: h,
        } = b({
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
