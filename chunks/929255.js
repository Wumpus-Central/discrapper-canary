(n.d(t, { Z: () => C }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(381585),
    c = n(870289),
    u = n(501431),
    d = n(193227),
    p = n(841875),
    g = n(312030),
    f = n(795343),
    h = n(763891),
    b = n(215023),
    m = n(388032),
    _ = n(484920);
function C(e) {
    let { isFullScreen: t, scrollerRef: n, tab: i, sortedCategories: C, setCategoryRef: O } = e,
        { handlePageChange: v, currentPage: E } = (0, g.h)({
            scrollerRef: n,
            sortedCategories: C
        });
    (0, u.Ab)();
    let S = (0, c.F)('CollectiblesBrowse'),
        [x, y] = l.useState(S);
    l.useEffect(() => {
        S || y(!1);
    }, [S, y]);
    let T = (0, u.S0)((e) => e.hasFilters());
    return (0, r.jsx)('div', {
        className: a()(_.pageWrapper, { [_.pageWrapperFilter]: S }),
        children: (0, r.jsxs)('main', {
            className: a()(_.page, { [_.pageFilter]: S }),
            children: [
                (0, r.jsxs)('div', {
                    className: a()(_.inventory, {
                        [_.inventoryNoFilter]: !S,
                        [_.pageFullscreen]: t
                    }),
                    children: [
                        S &&
                            (0, r.jsx)('div', {
                                className: _.controls,
                                children: (0, r.jsx)(o.zxk, {
                                    onClick: () => y((e) => !e),
                                    look: o.iLD.OUTLINED,
                                    color: o.Ttl.TRANSPARENT,
                                    children: (0, r.jsxs)('div', {
                                        className: _.filterButton,
                                        children: [
                                            m.intl.string(x ? m.t.fYtm6e : m.t.TeTYEx),
                                            (0, r.jsx)(o.gXV, {
                                                size: 'xs',
                                                color: 'var(--button-outline-primary-text)'
                                            })
                                        ]
                                    })
                                })
                            }),
                        S && T
                            ? (0, r.jsx)(
                                  f.Z,
                                  {
                                      isFullScreen: t,
                                      scrollerRef: n,
                                      tab: i
                                  },
                                  i
                              )
                            : (0, b.RE)(i)
                              ? (0, r.jsx)(
                                    h.Z,
                                    {
                                        isFullScreen: t,
                                        scrollerRef: n,
                                        tab: i
                                    },
                                    i
                                )
                              : (0, r.jsx)(s.k0, {
                                    newValue: { pageIndex: E },
                                    children: (0, r.jsx)(d.Z, {
                                        isFullScreen: t,
                                        sortedCategories: C,
                                        setCategoryRef: O,
                                        currentPage: E,
                                        handlePageChange: v
                                    })
                                })
                    ]
                }),
                x &&
                    (0, r.jsx)('aside', {
                        className: _.filterBar,
                        children: (0, r.jsx)(p.Z, {})
                    })
            ]
        })
    });
}
