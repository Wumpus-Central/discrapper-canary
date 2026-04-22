n.r(_), n.d(_, { default: () => x });
var o = n(627968),
    t = n(64700),
    r = n(503698),
    a = n.n(r),
    d = n(573613),
    l = n(785330),
    i = n(475073),
    c = n(611924),
    s = n(976860),
    u = n(594832),
    B = n(621653),
    C = n(983545),
    h = n(155486),
    b = n(938191),
    k = n(758836),
    f = n(652215),
    p = n(647685),
    g = n(941734);
let x = (e) => {
    let { collectionId: _ } = e,
        n = t.useRef(null);
    (0, c.P)(i.a), (0, B.g)();
    let r = (0, b.yB)("CollectiblesShopIndexPage");
    (0, b.gB)();
    let { selectedTab: x, transitionToTab: m } = (0, C.o)(k.G2.COLLECTION_INDEX),
        w = t.useCallback(() => {
            (0, s.pX)(f.BVt.COLLECTIBLES_SHOP);
        }, []);
    return ((0, u.pE)(),
    t.useEffect(() => {
        null == _ && w();
    }, [_, w]),
    null == _)
        ? null
        : (0, o.jsxs)("div", {
              className: a()(p.bx, { [b.jP]: r }),
              ref: n,
              tabIndex: -1,
              children: [
                  (0, o.jsx)(h.G, { handleTransition: m, selectedTab: x }),
                  (0, o.jsx)(d.Ip, {
                      children: (0, o.jsx)("div", {
                          className: a()(g.GS, g.rb, p.K6),
                          children: (0, o.jsx)(l.Z_, {
                              tenantId: f.FYj,
                              templateId: "collection-index",
                              requestParams: { collection_id: _ },
                              onError: w,
                              onEmptyLayout: w,
                          }),
                      }),
                  }),
              ],
          });
};
