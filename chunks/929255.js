(n.d(t, { Z: () => _ }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(381585),
    c = n(870289),
    u = n(193227),
    d = n(841875),
    p = n(312030),
    g = n(763891),
    f = n(215023),
    h = n(388032),
    b = n(484920);
let m = [f.AW.AVATAR_DECORATIONS, f.AW.PROFILE_EFFECTS, f.AW.NAMEPLATES, f.AW.BUNDLES];
function _(e) {
    let { isFullScreen: t, scrollerRef: n, tab: i, sortedCategories: f, setCategoryRef: _ } = e,
        { handlePageChange: C, currentPage: v } = (0, p.h)({
            scrollerRef: n,
            sortedCategories: f
        }),
        O = (0, c.F)('CollectiblesBrowse'),
        [S, x] = l.useState(O);
    return (
        l.useEffect(() => {
            O || x(!1);
        }, [O, x]),
        (0, r.jsx)('div', {
            className: a()(b.pageWrapper, { [b.pageWrapperFilter]: O }),
            children: (0, r.jsxs)('main', {
                className: a()(b.page, { [b.pageFilter]: O }),
                children: [
                    (0, r.jsxs)('div', {
                        className: a()(b.inventory, {
                            [b.inventoryNoFilter]: !O,
                            [b.pageFullscreen]: t
                        }),
                        children: [
                            O &&
                                (0, r.jsx)('div', {
                                    className: b.controls,
                                    children: (0, r.jsx)(o.zxk, {
                                        onClick: () => x((e) => !e),
                                        look: o.iLD.OUTLINED,
                                        color: o.Ttl.TRANSPARENT,
                                        children: (0, r.jsxs)('div', {
                                            className: b.filterButton,
                                            children: [
                                                h.intl.string(S ? h.t.fYtm6e : h.t.TeTYEx),
                                                (0, r.jsx)(o.gXV, {
                                                    size: 'xs',
                                                    color: 'var(--button-outline-primary-text)'
                                                })
                                            ]
                                        })
                                    })
                                }),
                            m.includes(i)
                                ? (0, r.jsx)(
                                      g.Z,
                                      {
                                          isFullScreen: t,
                                          scrollerRef: n,
                                          tab: i
                                      },
                                      i
                                  )
                                : (0, r.jsx)(s.k0, {
                                      newValue: { pageIndex: v },
                                      children: (0, r.jsx)(u.Z, {
                                          isFullScreen: t,
                                          sortedCategories: f,
                                          setCategoryRef: _,
                                          currentPage: v,
                                          handlePageChange: C
                                      })
                                  })
                        ]
                    }),
                    S &&
                        (0, r.jsx)('aside', {
                            className: b.filterBar,
                            children: (0, r.jsx)(d.Z, {})
                        })
                ]
            })
        })
    );
}
