n.d(t, {
    Qs: () => E,
    Uf: () => g,
    VO: () => b,
    Xs: () => m,
    ep: () => h,
    t$: () => O,
    yi: () => y
}),
    n(388685),
    n(539854);
var r = n(73800),
    i = n(392711),
    a = n.n(i),
    o = n(536895),
    s = n(566064),
    l = n(611144),
    c = n(468194),
    u = n(477690),
    d = n(691251),
    f = n(981631);
let _ = (0, c.Mg)(u.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    p = 8,
    h = (e) => {
        let { gridWrapperRef: t, containerWidth: n, showingEmptyState: i, listPaddingLeft: o = _, listScrollbarWidth: s = p } = e,
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
                return window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
            }, [u]),
            l
        );
    },
    m = (e) => {
        let { activeCategoryIndex: t, listRef: n, searchQuery: i } = e,
            a = r.useRef(i),
            o = r.useRef(!0);
        r.useLayoutEffect(() => {
            if ('' === i && '' !== a.current) {
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
        let { listRef: t, searchQuery: n, nitroLockedSectionStates: i, setShowUpsell: a, setUpsellGlowOpacity: o } = e,
            s = r.useCallback(
                (e) => {
                    if ('' !== n) {
                        null == o || o(0);
                        return;
                    }
                    if (null == t.current) return;
                    let r = i.findIndex((e) => e.isNitroLocked);
                    if (-1 === r) {
                        null == o || o(0);
                        return;
                    }
                    let a = t.current.getSectionDescriptors();
                    if (null == a || 0 === a.length || a.length !== i.length) return;
                    let s = a[r],
                        l = e + t.current.getListDimensions().height - 250,
                        c = 250,
                        u = Math.min(Math.max((s.offset.top - l) / c, 0), 1);
                    null == o || o(u);
                },
                [n, t, i, o]
            ),
            l = r.useCallback(
                (e) => {
                    if ('' !== n) {
                        null == a || a(!1);
                        return;
                    }
                    if (null == t.current) return;
                    let r = t.current.getSectionDescriptors();
                    if (null == r || 0 === r.length || r.length !== i.length) return;
                    let o = t.current.getListDimensions().height,
                        s = e + 0.7 * o,
                        l = e + 0.85 * o,
                        c = !1,
                        u = !1;
                    i.forEach((e, t) => {
                        if (!e.isNitroLocked) return;
                        let n = r[t];
                        n.offset.top <= l && n.offset.bottom >= l && (u = !0), n.offset.top <= s && n.offset.bottom >= s && (c = !0);
                    }),
                        null == a || a(u && c);
                },
                [n, t, i, a]
            );
        return r.useCallback(
            (e) => {
                l(e), s(e);
            },
            [l, s]
        );
    },
    E = (e) => {
        let { activeCategoryIndex: t, listRef: n, isScrolling: i, searchQuery: o, scrollOffset: s = 0, onActiveCategoryIndexChange: l, disableForSearch: c = !0 } = e,
            u = r.useRef(f.xAR),
            d = r.useMemo(
                () =>
                    a().debounce(() => {
                        i.current = !1;
                    }, 250),
                [i]
            ),
            _ = r.useMemo(
                () =>
                    a().debounce((e) => {
                        ('' !== o && c) ||
                            (window.cancelAnimationFrame(u.current),
                            (u.current = window.requestAnimationFrame(() => {
                                var r;
                                let i = null == (r = n.current) ? void 0 : r.getSectionDescriptors();
                                if (null == i) return;
                                let a = i.findIndex((t, n) => {
                                        let r = i[n + 1],
                                            a = e + s >= t.offset.top,
                                            o = null != r && e + s < r.offset.top;
                                        return (null != r && !a && !o) || (a && o) || (a && null == r);
                                    }),
                                    o = -1 === a ? 0 : a;
                                t !== o && l(o);
                            })));
                    }, 0),
                [o, n, t, s, l, c]
            );
        return r.useCallback(
            (e) => {
                (i.current = !0), d(), _(e);
            },
            [i, d, _]
        );
    },
    b = (e) => {
        let { columnCounts: t, gridNavigatorId: n, itemGrid: i, itemList: a, onGridNavigatorItemSelect: l, onGridNavigatorPositionChange: c } = e,
            u = r.useRef(!1),
            d = r.useCallback(
                (e, t) => {
                    let n = i[t];
                    if (null != n) return n[e];
                },
                [i]
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
                [d, a, c]
            ),
            _ = r.useCallback(
                (e, t, n) => {
                    switch (n.type) {
                        case o.Us.NAVIGATE_UP:
                        case o.Us.NAVIGATE_DOWN:
                        case o.Us.NAVIGATE_RIGHT:
                        case o.Us.NAVIGATE_LEFT:
                        case o.Us.NAVIGATE_INLINE_START:
                        case o.Us.NAVIGATE_INLINE_END:
                        case o.Us.NAVIGATE_START:
                        case o.Us.NAVIGATE_END:
                        case o.Us.NAVIGATE_CROSSLINE_START:
                        case o.Us.NAVIGATE_CROSSLINE_END:
                            f(t);
                    }
                },
                [f]
            ),
            p = r.useCallback(
                (e, t, n) => {
                    let r = d(e, t);
                    null != r && l(r, n);
                },
                [d, l]
            ),
            {
                dispatch: h,
                getItemProps: m,
                getRowProps: g,
                getContainerProps: E
            } = (0, s.Z)({
                navId: n,
                columnCounts: t,
                onDispatch: _,
                onSelect: p,
                autoFocusElement: !1,
                useVirtualFocus: !0
            }),
            { gridContainerProps: b, handleGridContainerKeyDown: y } = r.useMemo(() => {
                let e = E();
                return {
                    gridContainerProps: e,
                    handleGridContainerKeyDown: e.onKeyDown
                };
            }, [E]);
        return (
            r.useEffect(() => {
                let e = () => {
                    u.current = !1;
                };
                return window.addEventListener('mousemove', e), () => window.removeEventListener('mousemove', e);
            }, []),
            {
                gridDispatch: h,
                getItemProps: m,
                getRowProps: g,
                gridContainerProps: b,
                handleGridContainerKeyDown: y,
                isUsingKeyboardNavigation: u
            }
        );
    };
function y(e) {
    let { categories: t, collapsedCategories: n, gridWidth: i = 0, listPaddingRight: a = 0, itemNodeWidth: o, itemNodeMargin: s = 0 } = e;
    return r.useMemo(() => {
        let e = Math.max(1, Math.floor((i - a + s) / (o + s))),
            r = Math.floor(Math.max(s, (i - a - o * e) / (e - 1))),
            l = [],
            c = [],
            u = [],
            d = 0,
            f = 0,
            _ = 0;
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
                            visibleRowIndex: _,
                            category: n
                        }));
                    r || (_++, u.push(s), l.push(s.length)), d++;
                }
                f++;
            };
            for (let e of t)
                if (e.items.length > 0) {
                    var p;
                    r(e.items, e.categoryInfo.type, null != (p = null == n ? void 0 : n.has(''.concat(e.key))) && p);
                }
        }
        return {
            expressionsGrid: u,
            rowCount: d,
            rowCountBySection: c,
            columnCounts: l,
            gutterWidth: r
        };
    }, [t, n, i, s, o, a]);
}
function O(e) {
    let { columnCounts: t, expressionsGrid: n, expressionsListRef: i, store: a, gridNavigatorId: o, onSelectItem: s } = e,
        {
            gridDispatch: c,
            getItemProps: u,
            getRowProps: f,
            gridContainerProps: _,
            handleGridContainerKeyDown: p,
            isUsingKeyboardNavigation: h
        } = b({
            columnCounts: t,
            gridNavigatorId: o,
            itemGrid: n,
            itemList: i,
            onGridNavigatorItemSelect: s,
            onGridNavigatorPositionChange: a.setInspectedExpressionPosition
        });
    return (
        r.useEffect(
            () =>
                a.subscribe(
                    (e) => e.inspectedExpressionPosition,
                    (e) => {
                        if (null == e) return;
                        let { columnIndex: t, rowIndex: n, source: r } = e;
                        r !== d.u.GRID_NAVIGATOR_EVENT &&
                            c({
                                type: l.s.SET_FOCUSED_POSITION,
                                x: t,
                                y: n
                            });
                    }
                ),
            [c, a]
        ),
        {
            getItemProps: u,
            getRowProps: f,
            gridContainerProps: _,
            handleGridContainerKeyDown: p,
            isUsingKeyboardNavigation: h
        }
    );
}
