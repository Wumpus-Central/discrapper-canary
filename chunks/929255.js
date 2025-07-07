(n.d(t, { Z: () => E }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(381585),
    c = n(870289),
    u = n(501431),
    d = n(888302),
    p = n(193227),
    f = n(845796),
    g = n(841875),
    h = n(312030),
    b = n(795343),
    m = n(763891),
    _ = n(215023),
    C = n(388032),
    O = n(484920);
function E(e) {
    let { isFullScreen: t, scrollerRef: n, tab: i, sortedCategories: E, setCategoryRef: v } = e,
        { handlePageChange: S, currentPage: x } = (0, h.h)({
            scrollerRef: n,
            sortedCategories: E
        });
    (0, u.A)();
    let y = (0, c.F)('CollectiblesBrowse'),
        [j, T] = l.useState(y);
    l.useEffect(() => {
        y || T(!1);
    }, [y, T]);
    let P = (0, u.S)((e) => e.hasFilters());
    return (0, r.jsx)('div', {
        className: o()(O.pageWrapper, { [O.pageWrapperFilter]: y }),
        children: (0, r.jsxs)('main', {
            className: o()(O.page, { [O.pageFilter]: y }),
            children: [
                (0, r.jsxs)('div', {
                    className: o()(O.inventory, {
                        [O.inventoryNoFilter]: !y,
                        [O.pageFullscreen]: t
                    }),
                    children: [
                        y &&
                            (0, r.jsxs)('div', {
                                className: O.controls,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: O.controlsLeftSide,
                                        children: (0, r.jsx)(d.Z, { sortedCategories: E })
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: O.controlsRightSide,
                                        children: [
                                            (0, r.jsx)(f.ZP, {}),
                                            (0, r.jsx)(a.zxk, {
                                                onClick: () => T((e) => !e),
                                                look: a.iLD.OUTLINED,
                                                color: a.Ttl.PRIMARY,
                                                children: (0, r.jsxs)('div', {
                                                    className: O.filterButton,
                                                    children: [
                                                        C.intl.string(j ? C.t.fYtm6e : C.t.TeTYEx),
                                                        (0, r.jsx)(a.gXV, {
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
                        y && P
                            ? (0, r.jsx)(
                                  b.Z,
                                  {
                                      isFullScreen: t,
                                      scrollerRef: n,
                                      tab: i
                                  },
                                  i
                              )
                            : (0, _.RE)(i)
                              ? (0, r.jsx)(
                                    m.Z,
                                    {
                                        isFullScreen: t,
                                        scrollerRef: n,
                                        tab: i
                                    },
                                    i
                                )
                              : (0, r.jsx)(s.k0, {
                                    newValue: { pageIndex: x },
                                    children: (0, r.jsx)(p.Z, {
                                        isFullScreen: t,
                                        sortedCategories: E,
                                        setCategoryRef: v,
                                        currentPage: x,
                                        handlePageChange: S
                                    })
                                })
                    ]
                }),
                j &&
                    (0, r.jsx)('aside', {
                        className: O.filterBar,
                        children: (0, r.jsx)(g.Z, {})
                    })
            ]
        })
    });
}
