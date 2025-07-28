(r.d(t, { Z: () => S }), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    o = r.n(i),
    a = r(481060),
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
    C = r(215023),
    v = r(388032),
    E = r(95368);
function S(e) {
    let { isFullScreen: t, tab: r, sortedCategories: i, initialCategoryId: c, onUnmount: p } = e;
    (0, d.A)();
    let f = (0, u.FF)('CollectiblesBrowse'),
        h = l.useRef(null),
        { handleScroll: m } = (0, s.z)(h, r),
        { setCategoryRef: _, handleScrollToCategory: O } = (0, g.xV)(h.current),
        [C, v] = l.useState(f),
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
            f || v(!1);
        }, [f, v]),
        (0, n.jsx)('div', {
            className: o()(E.pageWrapper, { [E.pageWrapperFilter]: f }),
            children: (0, n.jsxs)('main', {
                className: o()(E.page, { [E.pageFilter]: f }),
                children: [
                    (0, n.jsx)(a.yWw, {
                        className: E.shopScroll,
                        ref: h,
                        onScroll: m,
                        children: (0, n.jsx)(y, {
                            isFullScreen: t,
                            isSmallScreen: S,
                            filterBarOpen: C,
                            setFilterBarOpen: v,
                            tab: r,
                            scrollerRef: h,
                            sortedCategories: i,
                            setCategoryRef: _
                        })
                    }),
                    C && !S && (0, n.jsx)('div', { className: E.divider }),
                    C &&
                        !S &&
                        (0, n.jsx)(a.Ttm, {
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
        T = l.useRef(null),
        P = (0, d.S)((e) => e.hasDefaultFilters()),
        { handlePageChange: L, currentPage: k } = (0, m.h)({
            scrollerRef: S,
            sortedCategories: y
        }),
        I = l.useRef(null);
    return (
        l.useEffect(() => {
            if (!r || !i) return;
            let e = (e) => {
                let t = e.target;
                null === T.current || null === I.current || T.current.contains(t) || I.current.contains(t) || s(!1);
            };
            return (document.addEventListener('mousedown', e), () => document.removeEventListener('mousedown', e));
        }, [r, i, s]),
        (0, n.jsx)('div', {
            className: E.inventoryWrapper,
            children: (0, n.jsxs)('div', {
                className: o()(E.inventory, {
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
                                    className: o()(E.controlsRightSide, { [E.controlsRightSideResponsive]: r }),
                                    children: [
                                        (0, n.jsxs)('div', {
                                            className: E.sortBy,
                                            children: [
                                                (0, n.jsx)(a.Text, {
                                                    variant: 'text-md/semibold',
                                                    children: v.intl.string(v.t.uaX709)
                                                }),
                                                (0, n.jsx)(h.Z, {})
                                            ]
                                        }),
                                        (0, n.jsx)('div', {
                                            ref: I,
                                            children: (0, n.jsx)(a.zxk, {
                                                onClick: () => s((e) => !e),
                                                variant: 'secondary',
                                                text: v.intl.string(i ? v.t.fYtm6e : v.t.TeTYEx),
                                                icon: a.gXV,
                                                iconPosition: 'end'
                                            })
                                        })
                                    ]
                                }),
                                i &&
                                    r &&
                                    (0, n.jsx)('div', {
                                        className: E.filterOverlay,
                                        ref: T,
                                        children: (0, n.jsx)(a.Den, {
                                            className: E.filterOverlayContent,
                                            children: (0, n.jsx)(b.Z, {})
                                        })
                                    })
                            ]
                        }),
                    j && !P
                        ? (0, n.jsx)(
                              _.Z,
                              {
                                  isFullScreen: t,
                                  scrollerRef: S,
                                  tab: g
                              },
                              g
                          )
                        : (0, C.RE)(g)
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
                                newValue: { pageIndex: k },
                                children: (0, n.jsx)(f.Z, {
                                    isFullScreen: t,
                                    sortedCategories: y,
                                    setCategoryRef: x,
                                    currentPage: k,
                                    handlePageChange: L
                                })
                            })
                ]
            })
        })
    );
};
