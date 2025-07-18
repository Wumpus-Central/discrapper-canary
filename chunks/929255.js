(r.d(t, { Z: () => v }), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    o = r.n(i),
    a = r(481060),
    s = r(381585),
    c = r(870289),
    u = r(501431),
    d = r(888302),
    p = r(193227),
    f = r(845796),
    g = r(841875),
    h = r(312030),
    b = r(795343),
    m = r(763891),
    _ = r(215023),
    C = r(388032),
    O = r(95368);
function v(e) {
    let { isFullScreen: t, scrollerRef: r, tab: i, sortedCategories: s, setCategoryRef: d, advancedScroller: p } = e;
    (0, u.A)();
    let f = (0, c.FF)('CollectiblesBrowse'),
        [h, b] = l.useState(f),
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
            className: o()(O.pageWrapper, { [O.pageWrapperFilter]: f }),
            children: (0, n.jsxs)('main', {
                className: o()(O.page, { [O.pageFilter]: f }),
                children: [
                    null != p
                        ? p(
                              (0, n.jsx)(E, {
                                  isFullScreen: t,
                                  isSmallScreen: m,
                                  filterBarOpen: h,
                                  setFilterBarOpen: b,
                                  tab: i,
                                  scrollerRef: r,
                                  sortedCategories: s,
                                  setCategoryRef: d
                              })
                          )
                        : (0, n.jsx)(E, {
                              isFullScreen: t,
                              isSmallScreen: m,
                              filterBarOpen: h,
                              setFilterBarOpen: b,
                              tab: i,
                              scrollerRef: r,
                              sortedCategories: s,
                              setCategoryRef: d
                          }),
                    h && !m && (0, n.jsx)('div', { className: O.divider }),
                    h &&
                        !m &&
                        (0, n.jsx)(a.Ttm, {
                            className: O.filterBar,
                            children: (0, n.jsx)(g.Z, {})
                        })
                ]
            })
        })
    );
}
let E = (e) => {
    let { isFullScreen: t, isSmallScreen: r, filterBarOpen: i, setFilterBarOpen: v, tab: E, scrollerRef: S, sortedCategories: y, setCategoryRef: x } = e,
        j = (0, c.FF)('CollectiblesBrowse'),
        T = l.useRef(null),
        P = (0, u.S)((e) => e.hasDefaultFilters()),
        { handlePageChange: L, currentPage: k } = (0, h.h)({
            scrollerRef: S,
            sortedCategories: y
        }),
        I = l.useRef(null);
    return (
        l.useEffect(() => {
            if (!r || !i) return;
            let e = (e) => {
                let t = e.target;
                null === T.current || null === I.current || T.current.contains(t) || I.current.contains(t) || v(!1);
            };
            return (document.addEventListener('mousedown', e), () => document.removeEventListener('mousedown', e));
        }, [r, i, v]),
        (0, n.jsx)('div', {
            className: O.inventoryWrapper,
            children: (0, n.jsxs)('div', {
                className: o()(O.inventory, {
                    [O.inventoryFilter]: j,
                    [O.pageFullscreen]: t
                }),
                children: [
                    j &&
                        (0, n.jsxs)('div', {
                            className: O.controls,
                            children: [
                                (0, n.jsx)('div', {
                                    className: O.controlsLeftSide,
                                    children: (0, n.jsx)(d.Z, {})
                                }),
                                (0, n.jsxs)('div', {
                                    className: o()(O.controlsRightSide, { [O.controlsRightSideResponsive]: r }),
                                    children: [
                                        (0, n.jsxs)('div', {
                                            className: O.sortBy,
                                            children: [
                                                (0, n.jsx)(a.Text, {
                                                    variant: 'text-md/semibold',
                                                    children: C.intl.string(C.t.uaX709)
                                                }),
                                                (0, n.jsx)(f.Z, {})
                                            ]
                                        }),
                                        (0, n.jsx)('div', {
                                            ref: I,
                                            children: (0, n.jsx)(a.zxk, {
                                                onClick: () => v((e) => !e),
                                                variant: 'secondary',
                                                text: C.intl.string(i ? C.t.fYtm6e : C.t.TeTYEx),
                                                icon: a.gXV,
                                                iconPosition: 'end'
                                            })
                                        })
                                    ]
                                }),
                                i &&
                                    r &&
                                    (0, n.jsx)('div', {
                                        className: O.filterOverlay,
                                        ref: T,
                                        children: (0, n.jsx)(a.Den, {
                                            className: O.filterOverlayContent,
                                            children: (0, n.jsx)(g.Z, {})
                                        })
                                    })
                            ]
                        }),
                    j && !P
                        ? (0, n.jsx)(
                              b.Z,
                              {
                                  isFullScreen: t,
                                  scrollerRef: S,
                                  tab: E
                              },
                              E
                          )
                        : (0, _.RE)(E)
                          ? (0, n.jsx)(
                                m.Z,
                                {
                                    isFullScreen: t,
                                    scrollerRef: S,
                                    tab: E
                                },
                                E
                            )
                          : (0, n.jsx)(s.k0, {
                                newValue: { pageIndex: k },
                                children: (0, n.jsx)(p.Z, {
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
