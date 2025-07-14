(r.d(t, { Z: () => E }), r(388685));
var n = r(255367),
    l = r(73800),
    o = r(120356),
    i = r.n(o),
    a = r(755721),
    s = r(481060),
    c = r(381585),
    u = r(870289),
    d = r(501431),
    p = r(888302),
    g = r(193227),
    f = r(845796),
    h = r(841875),
    b = r(312030),
    m = r(795343),
    _ = r(763891),
    C = r(215023),
    O = r(388032),
    v = r(484920);
function E(e) {
    let { isFullScreen: t, scrollerRef: r, tab: o, sortedCategories: E, setCategoryRef: S } = e,
        { handlePageChange: y, currentPage: x } = (0, b.h)({
            scrollerRef: r,
            sortedCategories: E
        });
    (0, d.A)();
    let j = (0, u.F)('CollectiblesBrowse'),
        [T, P] = l.useState(j);
    l.useEffect(() => {
        j || P(!1);
    }, [j, P]);
    let L = (0, d.S)((e) => e.hasDefaultFilters());
    return (0, n.jsx)('div', {
        className: i()(v.pageWrapper, { [v.pageWrapperFilter]: j }),
        children: (0, n.jsxs)('main', {
            className: i()(v.page, { [v.pageFilter]: j }),
            children: [
                (0, n.jsx)('div', {
                    className: v.inventoryWrapper,
                    children: (0, n.jsxs)('div', {
                        className: i()(v.inventory, {
                            [v.inventoryFilter]: j,
                            [v.pageFullscreen]: t
                        }),
                        children: [
                            j &&
                                (0, n.jsxs)('div', {
                                    className: v.controls,
                                    children: [
                                        (0, n.jsx)('div', {
                                            className: v.controlsLeftSide,
                                            children: (0, n.jsx)(p.Z, {})
                                        }),
                                        (0, n.jsxs)('div', {
                                            className: v.controlsRightSide,
                                            children: [
                                                (0, n.jsxs)('div', {
                                                    className: v.sortBy,
                                                    children: [
                                                        (0, n.jsx)(s.Text, {
                                                            variant: 'text-md/semibold',
                                                            children: O.intl.string(O.t.uaX709)
                                                        }),
                                                        (0, n.jsx)(f.Z, {})
                                                    ]
                                                }),
                                                (0, n.jsx)(a.zx, {
                                                    onClick: () => P((e) => !e),
                                                    look: a.iL.OUTLINED,
                                                    color: a.Tt.PRIMARY,
                                                    children: (0, n.jsxs)('div', {
                                                        className: v.filterButton,
                                                        children: [
                                                            O.intl.string(T ? O.t.fYtm6e : O.t.TeTYEx),
                                                            (0, n.jsx)(s.gXV, {
                                                                size: 'xs',
                                                                color: 'var(--button-outline-primary-text)'
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                            j && !L
                                ? (0, n.jsx)(
                                      m.Z,
                                      {
                                          isFullScreen: t,
                                          scrollerRef: r,
                                          tab: o
                                      },
                                      o
                                  )
                                : (0, C.RE)(o)
                                  ? (0, n.jsx)(
                                        _.Z,
                                        {
                                            isFullScreen: t,
                                            scrollerRef: r,
                                            tab: o
                                        },
                                        o
                                    )
                                  : (0, n.jsx)(c.k0, {
                                        newValue: { pageIndex: x },
                                        children: (0, n.jsx)(g.Z, {
                                            isFullScreen: t,
                                            sortedCategories: E,
                                            setCategoryRef: S,
                                            currentPage: x,
                                            handlePageChange: y
                                        })
                                    })
                        ]
                    })
                }),
                T &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)('div', { className: v.divider }),
                            (0, n.jsx)(s.Ttm, {
                                className: v.filterBar,
                                children: (0, n.jsx)(h.Z, {})
                            })
                        ]
                    })
            ]
        })
    });
}
