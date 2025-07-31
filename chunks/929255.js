(r.d(t, { Z: () => S }), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    a = r.n(i),
    o = r(481060),
    s = r(702486),
    c = r(381585),
    u = r(870289),
    d = r(501431),
    p = r(888302),
    f = r(193227),
    g = r(426171),
    h = r(845796),
    b = r(841875),
    m = r(312030),
    _ = r(795343),
    O = r(763891),
    v = r(215023),
    C = r(388032),
    E = r(95368);
function S(e) {
    let { isFullScreen: t, tab: r, sortedCategories: i, initialCategoryId: c, onUnmount: p } = e;
    (0, d.A)();
    let f = (0, u.FF)('CollectiblesBrowse'),
        h = l.useRef(null),
        { handleScroll: m } = (0, s.z)(h, r),
        { setCategoryRef: _, handleScrollToCategory: O } = (0, g.xV)(h.current),
        [v, C] = l.useState(f),
        [S, x] = l.useState(!1);
    return (
        l.useEffect(() => {
            null != c && O(c);
        }, [c, O]),
        l.useEffect(
            () => () => {
                null != p && p();
            },
            []
        ),
        l.useEffect(() => {
            let e = () => {
                x(window.innerWidth < 1400);
            };
            return (e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e));
        }, []),
        l.useEffect(() => {
            f || C(!1);
        }, [f, C]),
        (0, n.jsx)('div', {
            className: a()(E.pageWrapper, { [E.pageWrapperFilter]: f }),
            children: (0, n.jsxs)('main', {
                className: a()(E.page, { [E.pageFilter]: f }),
                children: [
                    (0, n.jsx)(o.yWw, {
                        className: E.shopScroll,
                        ref: h,
                        onScroll: m,
                        children: (0, n.jsx)(y, {
                            isFullScreen: t,
                            isSmallScreen: S,
                            filterBarOpen: v,
                            setFilterBarOpen: C,
                            tab: r,
                            scrollerRef: h,
                            sortedCategories: i,
                            setCategoryRef: _
                        })
                    }),
                    v && !S && (0, n.jsx)('div', { className: E.divider }),
                    v &&
                        !S &&
                        (0, n.jsx)(o.Ttm, {
                            className: E.filterBar,
                            children: (0, n.jsx)(b.Z, {})
                        })
                ]
            })
        })
    );
}
let y = (e) => {
    let { isFullScreen: t, isSmallScreen: r, filterBarOpen: i, setFilterBarOpen: s, tab: g, scrollerRef: S, sortedCategories: y, setCategoryRef: x } = e,
        j = (0, u.FF)('CollectiblesBrowse'),
        P = l.useRef(null),
        T = (0, d.S)((e) => e.hasDefaultFilters()),
        { handlePageChange: L, currentPage: I } = (0, m.h)({
            scrollerRef: S,
            sortedCategories: y
        }),
        k = l.useRef(null);
    return (
        l.useEffect(() => {
            if (!r || !i) return;
            let e = (e) => {
                let t = e.target;
                null === P.current || null === k.current || P.current.contains(t) || k.current.contains(t) || s(!1);
            };
            return (document.addEventListener('mousedown', e), () => document.removeEventListener('mousedown', e));
        }, [r, i, s]),
        (0, n.jsx)('div', {
            className: E.inventoryWrapper,
            children: (0, n.jsxs)('div', {
                className: a()(E.inventory, {
                    [E.inventoryFilter]: j,
                    [E.pageFullscreen]: t
                }),
                children: [
                    j &&
                        (0, n.jsxs)('div', {
                            className: E.controls,
                            children: [
                                (0, n.jsx)('div', {
                                    className: E.controlsLeftSide,
                                    children: (0, n.jsx)(p.Z, {})
                                }),
                                (0, n.jsxs)('div', {
                                    className: a()(E.controlsRightSide, { [E.controlsRightSideResponsive]: r }),
                                    children: [
                                        (0, n.jsxs)('div', {
                                            className: E.sortBy,
                                            children: [
                                                (0, n.jsx)(o.Text, {
                                                    variant: 'text-md/semibold',
                                                    children: C.intl.string(C.t.uaX709)
                                                }),
                                                (0, n.jsx)(h.Z, {})
                                            ]
                                        }),
                                        (0, n.jsx)('div', {
                                            ref: k,
                                            children: (0, n.jsx)(o.zxk, {
                                                onClick: () => s((e) => !e),
                                                variant: 'secondary',
                                                text: C.intl.string(i ? C.t.fYtm6e : C.t.TeTYEx),
                                                icon: o.gXV,
                                                iconPosition: 'end'
                                            })
                                        })
                                    ]
                                }),
                                i &&
                                    r &&
                                    (0, n.jsx)('div', {
                                        className: E.filterOverlay,
                                        ref: P,
                                        children: (0, n.jsx)(o.Den, {
                                            className: E.filterOverlayContent,
                                            children: (0, n.jsx)(b.Z, {})
                                        })
                                    })
                            ]
                        }),
                    j && !T
                        ? (0, n.jsx)(
                              _.Z,
                              {
                                  isFullScreen: t,
                                  scrollerRef: S,
                                  tab: g
                              },
                              g
                          )
                        : (0, v.RE)(g)
                          ? (0, n.jsx)(
                                O.Z,
                                {
                                    isFullScreen: t,
                                    scrollerRef: S,
                                    tab: g
                                },
                                g
                            )
                          : (0, n.jsx)(c.k0, {
                                newValue: { pageIndex: I },
                                children: (0, n.jsx)(f.Z, {
                                    isFullScreen: t,
                                    sortedCategories: y,
                                    setCategoryRef: x,
                                    currentPage: I,
                                    handlePageChange: L
                                })
                            })
                ]
            })
        })
    );
};
