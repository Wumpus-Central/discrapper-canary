(s.r(l), s.d(l, { default: () => K }));
var t = s(477900),
    n = s(582128),
    c = s(503698),
    r = s.n(c),
    o = s(115560),
    i = s(192308),
    u = s(944791),
    d = s(444927),
    a = s(840251),
    h = s(688151);
let E = new a.E([], h.$G.COLLECTIBLES_SHOP_OPEN, { location: "collectibles shop open" });
var j = s(611924),
    C = s(744082),
    I = s(634110),
    f = s(371794),
    x = s(857512),
    L = s(313217),
    p = s(662829),
    O = s(724874),
    _ = s(821816),
    b = s(806163),
    S = s(95362),
    T = s(516521),
    A = s(688810),
    B = s(354328),
    v = s(790297),
    P = s(706113),
    g = s(841702),
    N = s(983545),
    G = s(685491),
    R = s(235939),
    F = s(316108),
    m = s(415926),
    H = s(758836),
    X = s(652215);
function k(e) {
    let { scrollerRef: l, children: s } = e,
        { handleScroll: n } = (0, m.r)(l, H.G2.COLLECTION_INDEX);
    return (0, t.jsx)(T.Ch, { ref: l, onScroll: n, children: s });
}
let w = function (e) {
    let { collectionId: l, sessionId: s } = e,
        c = n.useRef(null),
        { selectedTab: r, transitionToTab: o, transitionState: i } = (0, N.oI)(H.G2.COLLECTION_INDEX);
    (0, g.Wg)(!0);
    let u = (0, B.A)("shop_include_unpublished"),
        { category: d, state: a } = (0, P.A)(l, { includeUnpublished: u, includePricing: !0 }),
        h = d ?? void 0,
        { analyticsLocations: E } = (0, v.lC)(H.G2.COLLECTION_INDEX);
    return ((0, v.uS)(s, r, h?.name, i, { enabled: null != h }),
    n.useEffect(() => {
        c.current?.scrollTo({ to: 0 });
    }, [l]),
    "loading" !== a && null == h)
        ? (0, t.jsx)(b.rd, { to: X.BVt.COLLECTIBLES_SHOP })
        : h?.isOrbsExclusive === !0
          ? (0, t.jsx)(b.rd, { to: X.BVt.COLLECTIBLES_SHOP_WITH_TAB(H.G2.ORBS) })
          : (0, t.jsxs)(A.f5, {
                value: E,
                children: [
                    (0, t.jsx)(G.G, { handleTransition: o, selectedTab: r, selectedCollectionId: l }),
                    null == h
                        ? (0, t.jsx)(S.Ip, { children: (0, t.jsx)(F.rK, {}) })
                        : (0, t.jsxs)(t.Fragment, {
                              children: [
                                  (0, t.jsx)(R.A, { tab: r, handleTransition: o }),
                                  (0, t.jsx)(k, { scrollerRef: c, children: (0, t.jsx)(F.Ay, { collectionId: l }) }),
                              ],
                          }),
                ],
            });
};
var V = s(164636),
    Y = s(918467),
    y = s(407408),
    D = s(532603),
    W = s(170522);
let K = (e) => {
    var l;
    let s,
        { tab: c, collectionId: a } = e;
    (0, j.P)(E);
    let h = (0, d.A)(() => (0, o.A)()),
        b = (0, D.yB)("CollectiblesShop");
    ((0, D.gB)(b),
        (0, I.pE)(),
        (0, p.X_)(),
        (0, C.A)(X.FYj),
        (l = (0, L.s)("collectibles_shop_root")),
        (s = (0, V.bG)([Y.A], () =>
            l && "success" === Y.A.getFetchState(X.FYj) ? Y.A.getPromotionsForApplication(X.FYj) : null,
        )),
        n.useEffect(() => {
            null != s && (0, y.X)();
        }, [s]),
        n.useEffect(() => {
            (0, f.rW)();
        }, []),
        n.useEffect(() => {
            (0, u.I)(X.BVt.COLLECTIBLES_SHOP);
        }, []));
    let S = n.useMemo(() => ({ sessionId: h }), [h]),
        T = n.useRef(null),
        A = (0, i.Rv)();
    return (0, t.jsx)(x.R9, {
        newValue: S,
        children: (0, t.jsx)("div", {
            className: r()(W.bx, { [D.jP]: b }),
            ref: T,
            inert: A,
            tabIndex: -1,
            children: (0, t.jsx)(O.Y, {
                children:
                    null != a && "" !== a
                        ? (0, t.jsx)(w, { collectionId: a, sessionId: h })
                        : (0, t.jsx)(_.default, { tab: c, sessionId: h, containerRef: T }),
            }),
        }),
    });
};
