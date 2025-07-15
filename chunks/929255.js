(r.d(t, { Z: () => E }), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    o = r.n(i),
    a = r(755721),
    s = r(481060),
    c = r(381585),
    u = r(870289),
    d = r(501431),
    p = r(888302),
    f = r(193227),
    g = r(845796),
    h = r(841875),
    b = r(312030),
    m = r(795343),
    _ = r(763891),
    O = r(215023),
    C = r(388032),
    v = r(95368);
function E(e) {
    let { isFullScreen: t, scrollerRef: r, tab: i, sortedCategories: a, setCategoryRef: c, advancedScroller: p } = e;
    (0, d.A)();
    let f = (0, u.F)('CollectiblesBrowse'),
        [g, b] = l.useState(f),
        [m, _] = l.useState(!1);
    return (
        l.useEffect(() => {
            let e = () => {
                _(window.innerWidth < 1400);
            };
            return (e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e));
        }, []),
        l.useEffect(() => {
            f || b(!1);
        }, [f, b]),
        (0, n.jsx)('div', {
            className: o()(v.pageWrapper, { [v.pageWrapperFilter]: f }),
            children: (0, n.jsxs)('main', {
                className: o()(v.page, { [v.pageFilter]: f }),
                children: [
                    null != p
                        ? p(
                              (0, n.jsx)(S, {
                                  isFullScreen: t,
                                  isSmallScreen: m,
                                  filterBarOpen: g,
                                  setFilterBarOpen: b,
                                  tab: i,
                                  scrollerRef: r,
                                  sortedCategories: a,
                                  setCategoryRef: c
                              })
                          )
                        : (0, n.jsx)(S, {
                              isFullScreen: t,
                              isSmallScreen: m,
                              filterBarOpen: g,
                              setFilterBarOpen: b,
                              tab: i,
                              scrollerRef: r,
                              sortedCategories: a,
                              setCategoryRef: c
                          }),
                    g &&
                        !m &&
                        (0, n.jsx)(s.Ttm, {
                            className: v.filterBar,
                            children: (0, n.jsx)(h.Z, {})
                        })
                ]
            })
        })
    );
}
let S = (e) => {
    let { isFullScreen: t, isSmallScreen: r, filterBarOpen: i, setFilterBarOpen: E, tab: S, scrollerRef: y, sortedCategories: x, setCategoryRef: j } = e,
        T = (0, u.F)('CollectiblesBrowse'),
        P = l.useRef(null),
        L = (0, d.S)((e) => e.hasDefaultFilters()),
        { handlePageChange: I, currentPage: k } = (0, b.h)({
            scrollerRef: y,
            sortedCategories: x
        }),
        B = l.useRef(null);
    return (
        l.useEffect(() => {
            if (!r || !i) return;
            let e = (e) => {
                let t = e.target;
                null === P.current || null === B.current || P.current.contains(t) || B.current.contains(t) || E(!1);
            };
            return (document.addEventListener('mousedown', e), () => document.removeEventListener('mousedown', e));
        }, [r, i, E]),
        (0, n.jsxs)('div', {
            className: v.inventoryWrapper,
            children: [
                (0, n.jsxs)('div', {
                    className: o()(v.inventory, {
                        [v.inventoryFilter]: T,
                        [v.pageFullscreen]: t
                    }),
                    children: [
                        T &&
                            (0, n.jsxs)('div', {
                                className: v.controls,
                                children: [
                                    (0, n.jsx)('div', {
                                        className: v.controlsLeftSide,
                                        children: (0, n.jsx)(p.Z, {})
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: o()(v.controlsRightSide, { [v.controlsRightSideResponsive]: r }),
                                        children: [
                                            (0, n.jsxs)('div', {
                                                className: v.sortBy,
                                                children: [
                                                    (0, n.jsx)(s.Text, {
                                                        variant: 'text-md/semibold',
                                                        children: C.intl.string(C.t.uaX709)
                                                    }),
                                                    (0, n.jsx)(g.Z, {})
                                                ]
                                            }),
                                            (0, n.jsx)('div', {
                                                ref: B,
                                                children: (0, n.jsx)(a.zx, {
                                                    onClick: () => E((e) => !e),
                                                    look: a.iL.OUTLINED,
                                                    color: a.Tt.PRIMARY,
                                                    className: o()({
                                                        [v.responsiveFilterButton]: r,
                                                        [v.filterButtonActive]: i
                                                    }),
                                                    children: (0, n.jsxs)('div', {
                                                        className: v.filterButton,
                                                        children: [
                                                            C.intl.string(i ? C.t.fYtm6e : C.t.TeTYEx),
                                                            (0, n.jsx)(s.gXV, {
                                                                size: 'xs',
                                                                color: 'var(--button-outline-primary-text)'
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    i &&
                                        r &&
                                        (0, n.jsx)('div', {
                                            className: v.filterOverlay,
                                            ref: P,
                                            children: (0, n.jsx)(s.Den, {
                                                className: v.filterOverlayContent,
                                                children: (0, n.jsx)(h.Z, {})
                                            })
                                        })
                                ]
                            }),
                        T && !L
                            ? (0, n.jsx)(
                                  m.Z,
                                  {
                                      isFullScreen: t,
                                      scrollerRef: y,
                                      tab: S
                                  },
                                  S
                              )
                            : (0, O.RE)(S)
                              ? (0, n.jsx)(
                                    _.Z,
                                    {
                                        isFullScreen: t,
                                        scrollerRef: y,
                                        tab: S
                                    },
                                    S
                                )
                              : (0, n.jsx)(c.k0, {
                                    newValue: { pageIndex: k },
                                    children: (0, n.jsx)(f.Z, {
                                        isFullScreen: t,
                                        sortedCategories: x,
                                        setCategoryRef: j,
                                        currentPage: k,
                                        handlePageChange: I
                                    })
                                })
                    ]
                }),
                i && !r && (0, n.jsx)('div', { className: v.divider })
            ]
        })
    );
};
