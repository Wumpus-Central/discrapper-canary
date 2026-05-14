s.r(l), s.d(l, { default: () => N });
var t = s(627968),
    a = s(64700),
    n = s(503698),
    d = s.n(n),
    r = s(364522),
    c = s(475073),
    i = s(611924),
    u = s(356118),
    p = s(976860),
    o = s(561794),
    h = s(619835),
    C = s(621653),
    E = s(983545),
    I = s(630330),
    b = s(146919),
    x = s(758836),
    L = s(652215),
    j = s(647685),
    _ = s(941734);
let N = (e) => {
    let { collectionId: l } = e,
        s = a.useRef(null);
    (0, i.P)(c.a), (0, C.g)();
    let n = (0, b.yB)("CollectiblesShopIndexPage");
    (0, b.gB)();
    let { selectedTab: N, transitionToTab: O } = (0, E.o)(x.G2.COLLECTION_INDEX),
        f = a.useCallback(() => {
            (0, p.pX)(L.BVt.COLLECTIBLES_SHOP);
        }, []);
    return ((0, o.pE)(),
    a.useEffect(() => {
        null == l && f();
    }, [l, f]),
    null == l)
        ? null
        : (0, t.jsxs)("div", {
              className: d()(j.bx, { [b.jP]: n }),
              ref: s,
              tabIndex: -1,
              children: [
                  (0, t.jsx)(I.G, { handleTransition: O, selectedTab: N }),
                  (0, t.jsx)(r.Ip, {
                      children: (0, t.jsx)("div", {
                          className: d()(_.GS, _.rb),
                          children: (0, t.jsx)(u.Z_, {
                              tenantId: L.FYj,
                              templateId: h.b.COLLECTION_INDEX,
                              requestParams: { collection_id: l },
                              onError: f,
                              onEmptyLayout: f,
                          }),
                      }),
                  }),
              ],
          });
};
