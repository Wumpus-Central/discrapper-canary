n.r(_), n.d(_, { default: () => I });
var o = n(627968),
    r = n(64700),
    t = n(503698),
    d = n.n(t),
    a = n(397927),
    i = n(785330),
    l = n(475073),
    s = n(611924),
    c = n(976860),
    b = n(594832),
    m = n(621653),
    u = n(983545),
    g = n(155486),
    h = n(938191),
    p = n(758836),
    C = n(652215),
    f = n(647685),
    B = n(941734);
let I = (e) => {
    let { collectionId: _ } = e,
        n = r.useRef(null);
    (0, s.P)(l.a), (0, m.g)();
    let t = (0, h.yB)("CollectiblesShopIndexPage");
    (0, h.gB)();
    let { selectedTab: I, transitionToTab: w } = (0, u.o)(p.G2.COLLECTION_INDEX),
        x = r.useCallback(() => {
            (0, c.pX)(C.BVt.COLLECTIBLES_SHOP);
        }, []);
    return ((0, b.pE)(),
    r.useEffect(() => {
        null == _ && x();
    }, [_, x]),
    null == _)
        ? null
        : (0, o.jsxs)("div", {
              className: d()(f.bx, { [h.jP]: t }),
              ref: n,
              tabIndex: -1,
              children: [
                  (0, o.jsx)(g.G, { handleTransition: w, selectedTab: I }),
                  (0, o.jsx)(a.HOs, {
                      children: (0, o.jsx)("div", {
                          className: d()(B.GS, B.rb, f.K6),
                          children: (0, o.jsx)(i.Z_, {
                              tenantId: C.FYj,
                              templateId: "collection-index",
                              requestParams: { collection_id: _ },
                              onError: x,
                              onEmptyLayout: x,
                          }),
                      }),
                  }),
              ],
          });
};
