n.r(_), n.d(_, { default: () => f });
var o = n(627968),
    r = n(64700),
    t = n(503698),
    a = n.n(t),
    d = n(397927),
    i = n(785330),
    s = n(475073),
    l = n(611924),
    c = n(976860),
    b = n(594832),
    m = n(621653),
    u = n(983545),
    g = n(155486),
    h = n(938191),
    p = n(758836),
    C = n(652215),
    B = n(647685),
    I = n(941734);
let f = (e) => {
    let { collectionId: _ } = e,
        n = r.useRef(null);
    (0, l.P)(s.a), (0, m.g)();
    let t = (0, h.yB)("CollectiblesShopIndexPage");
    (0, h.gB)();
    let { selectedTab: f, transitionToTab: w } = (0, u.o)(p.G2.COLLECTION_INDEX),
        k = r.useCallback(() => {
            (0, c.pX)(C.BVt.COLLECTIBLES_SHOP);
        }, []);
    return ((0, b.pE)(),
    r.useEffect(() => {
        null == _ && k();
    }, [_, k]),
    null == _)
        ? null
        : (0, o.jsxs)("div", {
              className: a()(B.bx, { [h.jP]: t }),
              ref: n,
              tabIndex: -1,
              children: [
                  (0, o.jsx)(g.G, { handleTransition: w, selectedTab: f }),
                  (0, o.jsx)(d.HOs, {
                      children: (0, o.jsx)("div", {
                          className: a()(I.GS, I.rb),
                          children: (0, o.jsx)("div", {
                              className: I.YB,
                              children: (0, o.jsx)(i.Z_, {
                                  tenantId: C.FYj,
                                  templateId: "collection-index",
                                  requestParams: { collection_id: _ },
                                  onError: k,
                                  onEmptyLayout: k,
                              }),
                          }),
                      }),
                  }),
              ],
          });
};
