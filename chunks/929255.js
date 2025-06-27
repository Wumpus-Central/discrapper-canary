n.d(t, { Z: () => f });
var r = n(255367),
    l = n(120356),
    a = n.n(l),
    i = n(381585),
    o = n(193227),
    s = n(312030),
    c = n(763891),
    u = n(215023),
    d = n(484920);
let p = [u.AW.AVATAR_DECORATIONS, u.AW.PROFILE_EFFECTS, u.AW.NAMEPLATES, u.AW.BUNDLES];
function f(e) {
    let { isFullScreen: t, scrollerRef: n, tab: l, sortedCategories: u, setCategoryRef: f } = e,
        { handlePageChange: g, currentPage: h } = (0, s.h)({
            scrollerRef: n,
            sortedCategories: u
        });
    return (0, r.jsx)('div', {
        className: d.pageWrapper,
        children: (0, r.jsx)('main', {
            className: a()(d.page, { [d.pageFullscreen]: t }),
            children: p.includes(l)
                ? (0, r.jsx)(
                      c.Z,
                      {
                          isFullScreen: t,
                          scrollerRef: n,
                          tab: l
                      },
                      l
                  )
                : (0, r.jsx)(i.k0, {
                      newValue: { pageIndex: h },
                      children: (0, r.jsx)(o.Z, {
                          isFullScreen: t,
                          sortedCategories: u,
                          setCategoryRef: f,
                          currentPage: h,
                          handlePageChange: g
                      })
                  })
        })
    });
}
