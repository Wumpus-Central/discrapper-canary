r.d(n, {
    Qs: function () {
        return b;
    },
    Uf: function () {
        return y;
    },
    VO: function () {
        return I;
    },
    Xs: function () {
        return v;
    },
    ep: function () {
        return E;
    },
    t$: function () {
        return S;
    },
    yi: function () {
        return T;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(192379),
    s = r(392711),
    l = r.n(s),
    u = r(536895),
    c = r(566064),
    d = r(611144),
    f = r(468194),
    p = r(477690),
    h = r(691251),
    _ = r(981631);
let m = (0, f.Mg)(p.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    g = 8,
    E = (e) => {
        let { gridWrapperRef: n, containerWidth: r, showingEmptyState: i, listPaddingLeft: a = m, listScrollbarWidth: s = g } = e,
            [u, c] = o.useState(void 0),
            d = o.useCallback(() => {
                if (null == n.current) return null;
                c(n.current.offsetWidth - a - s);
            }, [n, a, s]);
        return (
            o.useLayoutEffect(() => {
                d();
            }, [r, d, i]),
            o.useEffect(() => {
                let e = l().debounce(d, 250);
                return window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
            }, [d]),
            u
        );
    },
    v = (e) => {
        let { activeCategoryIndex: n, listRef: r, searchQuery: i } = e,
            a = o.useRef(i),
            s = o.useRef(!0);
        o.useLayoutEffect(() => {
            if ('' === i && '' !== a.current) {
                var e;
                null === (e = r.current) || void 0 === e || e.scrollToSectionTop(n);
            }
            a.current = i;
        }, [i, n, r]),
            o.useLayoutEffect(() => {
                if (s.current) {
                    var e;
                    null === (e = r.current) || void 0 === e || e.scrollToSectionTop(n), (s.current = !1);
                }
            }, [n, r]),
            o.useEffect(() => {
                a.current = i;
            }, [i]);
    },
    y = (e) => {
        let { listRef: n, searchQuery: r, nitroLockedSectionStates: i, setShowUpsell: a, setUpsellGlowOpacity: s } = e,
            l = o.useCallback(
                (e) => {
                    if ('' !== r) {
                        null == s || s(0);
                        return;
                    }
                    if (null == n.current) return;
                    let a = i.findIndex((e) => e.isNitroLocked);
                    if (-1 === a) {
                        null == s || s(0);
                        return;
                    }
                    let o = n.current.getSectionDescriptors();
                    if (null == o || 0 === o.length || o.length !== i.length) return;
                    let l = o[a],
                        u = e + n.current.getListDimensions().height - 250,
                        c = 250,
                        d = Math.min(Math.max((l.offset.top - u) / c, 0), 1);
                    null == s || s(d);
                },
                [r, n, i, s]
            ),
            u = o.useCallback(
                (e) => {
                    if ('' !== r) {
                        null == a || a(!1);
                        return;
                    }
                    if (null == n.current) return;
                    let o = n.current.getSectionDescriptors();
                    if (null == o || 0 === o.length || o.length !== i.length) return;
                    let s = n.current.getListDimensions().height,
                        l = e + 0.7 * s,
                        u = e + 0.85 * s,
                        c = !1,
                        d = !1;
                    i.forEach((e, n) => {
                        if (!e.isNitroLocked) return;
                        let r = o[n];
                        r.offset.top <= u && r.offset.bottom >= u && (d = !0), r.offset.top <= l && r.offset.bottom >= l && (c = !0);
                    }),
                        null == a || a(d && c);
                },
                [r, n, i, a]
            );
        return o.useCallback(
            (e) => {
                u(e), l(e);
            },
            [u, l]
        );
    },
    b = (e) => {
        let { activeCategoryIndex: n, listRef: r, isScrolling: i, searchQuery: a, scrollOffset: s = 0, onActiveCategoryIndexChange: u, disableForSearch: c = !0 } = e,
            d = o.useRef(_.xAR),
            f = o.useMemo(
                () =>
                    l().debounce(() => {
                        i.current = !1;
                    }, 250),
                [i]
            ),
            p = o.useMemo(
                () =>
                    l().debounce((e) => {
                        ('' === a || !c) &&
                            (window.cancelAnimationFrame(d.current),
                            (d.current = window.requestAnimationFrame(() => {
                                var i;
                                let a = null === (i = r.current) || void 0 === i ? void 0 : i.getSectionDescriptors();
                                if (null == a) return;
                                let o = a.findIndex((n, r) => {
                                        let i = a[r + 1],
                                            o = e + s >= n.offset.top,
                                            l = null != i && e + s < i.offset.top;
                                        return (null != i && !o && !l) || (o && l) || (o && null == i);
                                    }),
                                    l = -1 === o ? 0 : o;
                                n !== l && u(l);
                            })));
                    }, 0),
                [a, r, n, s, u, c]
            );
        return o.useCallback(
            (e) => {
                (i.current = !0), f(), p(e);
            },
            [i, f, p]
        );
    },
    I = (e) => {
        let { columnCounts: n, gridNavigatorId: r, itemGrid: i, itemList: a, onGridNavigatorItemSelect: s, onGridNavigatorPositionChange: l } = e,
            d = o.useRef(!1),
            f = o.useCallback(
                (e, n) => {
                    let r = i[n];
                    if (null != r) return r[e];
                },
                [i]
            ),
            p = o.useCallback(
                (e) => {
                    let { focusedX: n, focusedY: r } = e;
                    d.current = !0;
                    let i = f(n, r);
                    if (null == i) return;
                    let { visibleRowIndex: o, columnIndex: s } = i;
                    l(s, o), null != a.current && a.current.scrollRowIntoView(r);
                },
                [f, a, l]
            ),
            h = o.useCallback(
                (e, n, r) => {
                    switch (r.type) {
                        case u.Us.NAVIGATE_UP:
                        case u.Us.NAVIGATE_DOWN:
                        case u.Us.NAVIGATE_RIGHT:
                        case u.Us.NAVIGATE_LEFT:
                        case u.Us.NAVIGATE_INLINE_START:
                        case u.Us.NAVIGATE_INLINE_END:
                        case u.Us.NAVIGATE_START:
                        case u.Us.NAVIGATE_END:
                        case u.Us.NAVIGATE_CROSSLINE_START:
                        case u.Us.NAVIGATE_CROSSLINE_END:
                            p(n);
                    }
                },
                [p]
            ),
            _ = o.useCallback(
                (e, n, r) => {
                    let i = f(e, n);
                    null != i && s(i, r);
                },
                [f, s]
            ),
            {
                dispatch: m,
                getItemProps: g,
                getRowProps: E,
                getContainerProps: v
            } = (0, c.Z)({
                navId: r,
                columnCounts: n,
                onDispatch: h,
                onSelect: _,
                autoFocusElement: !1,
                useVirtualFocus: !0
            }),
            { gridContainerProps: y, handleGridContainerKeyDown: b } = o.useMemo(() => {
                let e = v();
                return {
                    gridContainerProps: e,
                    handleGridContainerKeyDown: e.onKeyDown
                };
            }, [v]);
        return (
            o.useEffect(() => {
                let e = () => {
                    d.current = !1;
                };
                return window.addEventListener('mousemove', e), () => window.removeEventListener('mousemove', e);
            }, []),
            {
                gridDispatch: m,
                getItemProps: g,
                getRowProps: E,
                gridContainerProps: y,
                handleGridContainerKeyDown: b,
                isUsingKeyboardNavigation: d
            }
        );
    };
function T(e) {
    let { categories: n, collapsedCategories: r, gridWidth: i = 0, listPaddingRight: a = 0, itemNodeWidth: s, itemNodeMargin: l = 0 } = e;
    return o.useMemo(() => {
        let e = Math.max(1, Math.floor((i - a + l) / (s + l))),
            o = Math.floor(Math.max(l, (i - a - s * e) / (e - 1))),
            u = [],
            c = [],
            d = [],
            f = 0,
            p = 0,
            h = 0;
        if (0 !== i) {
            let i = function (n, r) {
                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = Math.ceil(n.length / e);
                c[p] = i ? 0 : a;
                for (let o = 0; o < a; o++) {
                    let a = o * e,
                        s = a + e,
                        l = n.slice(a, s).map((e, n) => ({
                            item: e,
                            gridSectionIndex: p,
                            rowIndex: f,
                            columnIndex: n,
                            visibleRowIndex: h,
                            category: r
                        }));
                    !i && (h++, d.push(l), u.push(l.length)), f++;
                }
                p++;
            };
            for (let e of n)
                if (e.items.length > 0) {
                    var _;
                    i(e.items, e.categoryInfo.type, null !== (_ = null == r ? void 0 : r.has(''.concat(e.key))) && void 0 !== _ && _);
                }
        }
        return {
            expressionsGrid: d,
            rowCount: f,
            rowCountBySection: c,
            columnCounts: u,
            gutterWidth: o
        };
    }, [n, r, i, l, s, a]);
}
function S(e) {
    let { columnCounts: n, expressionsGrid: r, expressionsListRef: i, store: a, gridNavigatorId: s, onSelectItem: l } = e,
        {
            gridDispatch: u,
            getItemProps: c,
            getRowProps: f,
            gridContainerProps: p,
            handleGridContainerKeyDown: _,
            isUsingKeyboardNavigation: m
        } = I({
            columnCounts: n,
            gridNavigatorId: s,
            itemGrid: r,
            itemList: i,
            onGridNavigatorItemSelect: l,
            onGridNavigatorPositionChange: a.setInspectedExpressionPosition
        });
    return (
        o.useEffect(
            () =>
                a.subscribe(
                    (e) => e.inspectedExpressionPosition,
                    (e) => {
                        if (null == e) return;
                        let { columnIndex: n, rowIndex: r, source: i } = e;
                        i !== h.u.GRID_NAVIGATOR_EVENT &&
                            u({
                                type: d.s.SET_FOCUSED_POSITION,
                                x: n,
                                y: r
                            });
                    }
                ),
            [u, a]
        ),
        {
            getItemProps: c,
            getRowProps: f,
            gridContainerProps: p,
            handleGridContainerKeyDown: _,
            isUsingKeyboardNavigation: m
        }
    );
}
