s.r(l), s.d(l, { default: () => _ });
var t = s(627968),
    a = s(64700),
    n = s(503698),
    d = s.n(n),
    c = s(364522),
    r = s(785330),
    i = s(475073),
    u = s(611924),
    o = s(976860),
    p = s(594832),
    h = s(621653),
    x = s(983545),
    b = s(630330),
    C = s(146919),
    E = s(758836),
    I = s(652215),
    j = s(647685),
    L = s(941734);
let _ = (e) => {
    let { collectionId: l } = e,
        s = a.useRef(null);
    (0, u.P)(i.a), (0, h.g)();
    let n = (0, C.yB)("CollectiblesShopIndexPage");
    (0, C.gB)();
    let { selectedTab: _, transitionToTab: f } = (0, x.o)(E.G2.COLLECTION_INDEX),
        k = a.useCallback(() => {
            (0, o.pX)(I.BVt.COLLECTIBLES_SHOP);
        }, []);
    return ((0, p.pE)(),
    a.useEffect(() => {
        null == l && k();
    }, [l, k]),
    null == l)
        ? null
        : (0, t.jsxs)("div", {
              className: d()(j.bx, { [C.jP]: n }),
              ref: s,
              tabIndex: -1,
              children: [
                  (0, t.jsx)(b.G, { handleTransition: f, selectedTab: _ }),
                  (0, t.jsx)(c.Ip, {
                      children: (0, t.jsx)("div", {
                          className: d()(L.GS, L.rb),
                          children: (0, t.jsx)(r.Z_, {
                              tenantId: I.FYj,
                              templateId: "collection-index",
                              requestParams: { collection_id: l },
                              onError: k,
                              onEmptyLayout: k,
                          }),
                      }),
                  }),
              ],
          });
};
