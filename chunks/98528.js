n.d(t, {
    Qs: () => E,
    Uf: () => g,
    VO: () => v,
    Xs: () => m,
    ep: () => h,
    t$: () => I,
    yi: () => y
}),
    n(47120),
    n(653041);
var i = n(192379),
    r = n(392711),
    a = n.n(r),
    s = n(536895),
    o = n(566064),
    l = n(611144),
    u = n(468194),
    c = n(477690),
    d = n(691251),
    f = n(981631);
let _ = (0, u.Mg)(c.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    p = 8,
    h = (e) => {
        let { gridWrapperRef: t, containerWidth: n, showingEmptyState: r, listPaddingLeft: s = _, listScrollbarWidth: o = p } = e,
            [l, u] = i.useState(void 0),
            c = i.useCallback(() => {
                if (null == t.current) return null;
                u(t.current.offsetWidth - s - o);
            }, [t, s, o]);
        return (
            i.useLayoutEffect(() => {
                c();
            }, [n, c, r]),
            i.useEffect(() => {
                let e = a().debounce(c, 250);
                return window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
            }, [c]),
            l
        );
    },
    m = (e) => {
        let { activeCategoryIndex: t, listRef: n, searchQuery: r } = e,
            a = i.useRef(r),
            s = i.useRef(!0);
        i.useLayoutEffect(() => {
            if ('' === r && '' !== a.current) {
                var e;
                null === (e = n.current) || void 0 === e || e.scrollToSectionTop(t);
            }
            a.current = r;
        }, [r, t, n]),
            i.useLayoutEffect(() => {
                if (s.current) {
                    var e;
                    null === (e = n.current) || void 0 === e || e.scrollToSectionTop(t), (s.current = !1);
                }
            }, [t, n]),
            i.useEffect(() => {
                a.current = r;
            }, [r]);
    },
    g = (e) => {
        let { listRef: t, searchQuery: n, nitroLockedSectionStates: r, setShowUpsell: a, setUpsellGlowOpacity: s } = e,
            o = i.useCallback(
                (e) => {
                    if ('' !== n) {
                        null == s || s(0);
                        return;
                    }
                    if (null == t.current) return;
                    let i = r.findIndex((e) => e.isNitroLocked);
                    if (-1 === i) {
                        null == s || s(0);
                        return;
                    }
                    let a = t.current.getSectionDescriptors();
                    if (null == a || 0 === a.length || a.length !== r.length) return;
                    let o = a[i],
                        l = e + t.current.getListDimensions().height - 250,
                        u = 250,
                        c = Math.min(Math.max((o.offset.top - l) / u, 0), 1);
                    null == s || s(c);
                },
                [n, t, r, s]
            ),
            l = i.useCallback(
                (e) => {
                    if ('' !== n) {
                        null == a || a(!1);
                        return;
                    }
                    if (null == t.current) return;
                    let i = t.current.getSectionDescriptors();
                    if (null == i || 0 === i.length || i.length !== r.length) return;
                    let s = t.current.getListDimensions().height,
                        o = e + 0.7 * s,
                        l = e + 0.85 * s,
                        u = !1,
                        c = !1;
                    r.forEach((e, t) => {
                        if (!e.isNitroLocked) return;
                        let n = i[t];
                        n.offset.top <= l && n.offset.bottom >= l && (c = !0), n.offset.top <= o && n.offset.bottom >= o && (u = !0);
                    }),
                        null == a || a(c && u);
                },
                [n, t, r, a]
            );
        return i.useCallback(
            (e) => {
                l(e), o(e);
            },
            [l, o]
        );
    },
    E = (e) => {
        let { activeCategoryIndex: t, listRef: n, isScrolling: r, searchQuery: s, scrollOffset: o = 0, onActiveCategoryIndexChange: l, disableForSearch: u = !0 } = e,
            c = i.useRef(f.xAR),
            d = i.useMemo(
                () =>
                    a().debounce(() => {
                        r.current = !1;
                    }, 250),
                [r]
            ),
            _ = i.useMemo(
                () =>
                    a().debounce((e) => {
                        ('' !== s && u) ||
                            (window.cancelAnimationFrame(c.current),
                            (c.current = window.requestAnimationFrame(() => {
                                var i;
                                let r = null === (i = n.current) || void 0 === i ? void 0 : i.getSectionDescriptors();
                                if (null == r) return;
                                let a = r.findIndex((t, n) => {
                                        let i = r[n + 1],
                                            a = e + o >= t.offset.top,
                                            s = null != i && e + o < i.offset.top;
                                        return (null != i && !a && !s) || (a && s) || (a && null == i);
                                    }),
                                    s = -1 === a ? 0 : a;
                                t !== s && l(s);
                            })));
                    }, 0),
                [s, n, t, o, l, u]
            );
        return i.useCallback(
            (e) => {
                (r.current = !0), d(), _(e);
            },
            [r, d, _]
        );
    },
    v = (e) => {
        let { columnCounts: t, gridNavigatorId: n, itemGrid: r, itemList: a, onGridNavigatorItemSelect: l, onGridNavigatorPositionChange: u } = e,
            c = i.useRef(!1),
            d = i.useCallback(
                (e, t) => {
                    let n = r[t];
                    if (null != n) return n[e];
                },
                [r]
            ),
            f = i.useCallback(
                (e) => {
                    let { focusedX: t, focusedY: n } = e;
                    c.current = !0;
                    let i = d(t, n);
                    if (null == i) return;
                    let { visibleRowIndex: r, columnIndex: s } = i;
                    u(s, r), null != a.current && a.current.scrollRowIntoView(n);
                },
                [d, a, u]
            ),
            _ = i.useCallback(
                (e, t, n) => {
                    switch (n.type) {
                        case s.Us.NAVIGATE_UP:
                        case s.Us.NAVIGATE_DOWN:
                        case s.Us.NAVIGATE_RIGHT:
                        case s.Us.NAVIGATE_LEFT:
                        case s.Us.NAVIGATE_INLINE_START:
                        case s.Us.NAVIGATE_INLINE_END:
                        case s.Us.NAVIGATE_START:
                        case s.Us.NAVIGATE_END:
                        case s.Us.NAVIGATE_CROSSLINE_START:
                        case s.Us.NAVIGATE_CROSSLINE_END:
                            f(t);
                    }
                },
                [f]
            ),
            p = i.useCallback(
                (e, t, n) => {
                    let i = d(e, t);
                    null != i && l(i, n);
                },
                [d, l]
            ),
            {
                dispatch: h,
                getItemProps: m,
                getRowProps: g,
                getContainerProps: E
            } = (0, o.Z)({
                navId: n,
                columnCounts: t,
                onDispatch: _,
                onSelect: p,
                autoFocusElement: !1,
                useVirtualFocus: !0
            }),
            { gridContainerProps: v, handleGridContainerKeyDown: y } = i.useMemo(() => {
                let e = E();
                return {
                    gridContainerProps: e,
                    handleGridContainerKeyDown: e.onKeyDown
                };
            }, [E]);
        return (
            i.useEffect(() => {
                let e = () => {
                    c.current = !1;
                };
                return window.addEventListener('mousemove', e), () => window.removeEventListener('mousemove', e);
            }, []),
            {
                gridDispatch: h,
                getItemProps: m,
                getRowProps: g,
                gridContainerProps: v,
                handleGridContainerKeyDown: y,
                isUsingKeyboardNavigation: c
            }
        );
    };
function y(e) {
    let { categories: t, collapsedCategories: n, gridWidth: r = 0, listPaddingRight: a = 0, itemNodeWidth: s, itemNodeMargin: o = 0 } = e;
    return i.useMemo(() => {
        let e = Math.max(1, Math.floor((r - a + o) / (s + o))),
            i = Math.floor(Math.max(o, (r - a - s * e) / (e - 1))),
            l = [],
            u = [],
            c = [],
            d = 0,
            f = 0,
            _ = 0;
        if (0 !== r) {
            let i = function (t, n) {
                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = Math.ceil(t.length / e);
                u[f] = i ? 0 : r;
                for (let a = 0; a < r; a++) {
                    let r = a * e,
                        s = r + e,
                        o = t.slice(r, s).map((e, t) => ({
                            item: e,
                            gridSectionIndex: f,
                            rowIndex: d,
                            columnIndex: t,
                            visibleRowIndex: _,
                            category: n
                        }));
                    i || (_++, c.push(o), l.push(o.length)), d++;
                }
                f++;
            };
            for (let e of t)
                if (e.items.length > 0) {
                    var p;
                    i(e.items, e.categoryInfo.type, null !== (p = null == n ? void 0 : n.has(''.concat(e.key))) && void 0 !== p && p);
                }
        }
        return {
            expressionsGrid: c,
            rowCount: d,
            rowCountBySection: u,
            columnCounts: l,
            gutterWidth: i
        };
    }, [t, n, r, o, s, a]);
}
function I(e) {
    let { columnCounts: t, expressionsGrid: n, expressionsListRef: r, store: a, gridNavigatorId: s, onSelectItem: o } = e,
        {
            gridDispatch: u,
            getItemProps: c,
            getRowProps: f,
            gridContainerProps: _,
            handleGridContainerKeyDown: p,
            isUsingKeyboardNavigation: h
        } = v({
            columnCounts: t,
            gridNavigatorId: s,
            itemGrid: n,
            itemList: r,
            onGridNavigatorItemSelect: o,
            onGridNavigatorPositionChange: a.setInspectedExpressionPosition
        });
    return (
        i.useEffect(
            () =>
                a.subscribe(
                    (e) => e.inspectedExpressionPosition,
                    (e) => {
                        if (null == e) return;
                        let { columnIndex: t, rowIndex: n, source: i } = e;
                        i !== d.u.GRID_NAVIGATOR_EVENT &&
                            u({
                                type: l.s.SET_FOCUSED_POSITION,
                                x: t,
                                y: n
                            });
                    }
                ),
            [u, a]
        ),
        {
            getItemProps: c,
            getRowProps: f,
            gridContainerProps: _,
            handleGridContainerKeyDown: p,
            isUsingKeyboardNavigation: h
        }
    );
}
