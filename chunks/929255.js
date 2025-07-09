(n.d(t, { Z: () => v }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(755721),
    s = n(481060),
    c = n(381585),
    u = n(870289),
    d = n(501431),
    p = n(888302),
    g = n(193227),
    f = n(845796),
    h = n(841875),
    b = n(312030),
    m = n(795343),
    _ = n(763891),
    C = n(215023),
    O = n(388032),
    E = n(484920);
function v(e) {
    let { isFullScreen: t, scrollerRef: n, tab: o, sortedCategories: v, setCategoryRef: S } = e,
        { handlePageChange: x, currentPage: y } = (0, b.h)({
            scrollerRef: n,
            sortedCategories: v
        });
    (0, d.A)();
    let j = (0, u.F)('CollectiblesBrowse'),
        [T, P] = l.useState(j);
    l.useEffect(() => {
        j || P(!1);
    }, [j, P]);
    let L = (0, d.S)((e) => e.hasFilters());
    return (0, r.jsx)('div', {
        className: i()(E.pageWrapper, { [E.pageWrapperFilter]: j }),
        children: (0, r.jsxs)('main', {
            className: i()(E.page, { [E.pageFilter]: j }),
            children: [
                (0, r.jsxs)('div', {
                    className: i()(E.inventory, {
                        [E.inventoryNoFilter]: !j,
                        [E.pageFullscreen]: t
                    }),
                    children: [
                        j &&
                            (0, r.jsxs)('div', {
                                className: E.controls,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: E.controlsLeftSide,
                                        children: (0, r.jsx)(p.Z, {})
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: E.controlsRightSide,
                                        children: [
                                            (0, r.jsx)(f.ZP, {}),
                                            (0, r.jsx)(a.zx, {
                                                onClick: () => P((e) => !e),
                                                look: a.iL.OUTLINED,
                                                color: a.Tt.PRIMARY,
                                                children: (0, r.jsxs)('div', {
                                                    className: E.filterButton,
                                                    children: [
                                                        O.intl.string(T ? O.t.fYtm6e : O.t.TeTYEx),
                                                        (0, r.jsx)(s.gXV, {
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
                        j && L
                            ? (0, r.jsx)(
                                  m.Z,
                                  {
                                      isFullScreen: t,
                                      scrollerRef: n,
                                      tab: o
                                  },
                                  o
                              )
                            : (0, C.RE)(o)
                              ? (0, r.jsx)(
                                    _.Z,
                                    {
                                        isFullScreen: t,
                                        scrollerRef: n,
                                        tab: o
                                    },
                                    o
                                )
                              : (0, r.jsx)(c.k0, {
                                    newValue: { pageIndex: y },
                                    children: (0, r.jsx)(g.Z, {
                                        isFullScreen: t,
                                        sortedCategories: v,
                                        setCategoryRef: S,
                                        currentPage: y,
                                        handlePageChange: x
                                    })
                                })
                    ]
                }),
                T &&
                    (0, r.jsx)(s.Ttm, {
                        className: E.filterBar,
                        children: (0, r.jsx)(h.Z, {})
                    })
            ]
        })
    });
}
