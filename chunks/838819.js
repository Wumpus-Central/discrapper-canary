n.r(t), n.d(t, { default: () => W }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    o = n(772848),
    a = n(399606),
    c = n(952265),
    u = n(481060),
    d = n(150063),
    g = n(211266),
    f = n(906732),
    p = n(977395),
    C = n(214852),
    h = n(621853),
    _ = n(484459),
    m = n(602733),
    b = n(819640),
    E = n(594174),
    v = n(381585),
    S = n(597688),
    O = n(994587),
    x = n(780475),
    y = n(223143),
    T = n(298228),
    j = n(908430),
    L = n(99767),
    k = n(501431),
    I = n(98535),
    B = n(426171),
    N = n(963102),
    P = n(508498),
    A = n(681435),
    R = n(642909),
    Z = n(215023),
    w = n(981631),
    H = n(295907),
    F = n(887353),
    D = n(345213);
let M = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            i = (0, c.f9)();
        return (
            l.useEffect(() => {
                if (!n || i) return;
                let e = (e) => {
                    e.key === H.mR.Escape && r();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [n, i, r]),
            t
        );
    },
    W = function (e) {
        let { isFullScreen: t = !0, tab: n = Z.AW.HOME } = e;
        (0, C.z)(p.f), (0, j.f)();
        let i = (0, g.Z)((0, o.Z)()),
            c = (0, a.e7)([E.default], () => E.default.getCurrentUser()),
            { userProfile: H, wishlistId: W } = (0, a.cj)(
                [h.Z],
                () => ({
                    userProfile: null != c ? h.Z.getUserProfile(c.id) : null,
                    wishlistId: null != c ? h.Z.getFirstWishlistId(c.id) : null,
                }),
                [c],
            );
        l.useEffect(() => {
            null != c && null == H && (0, _.Z)(c.id, c.getAvatarURL(null, 80));
        }, [c, H]),
            (0, m.kZ)(W, null == c ? void 0 : c.id);
        let U = (0, R.G)("CollectiblesShop"),
            { onClose: V } = (0, P.Db)(),
            { currentTab: G, hasFilters: z } = (0, k.S)(),
            K = l.useMemo(() => (n === Z.AW.HOME && G && z() ? G : n), [n, G, z]),
            { categories: Y, refreshCategories: q } = (0, y.ZP)(
                { logPerf: !0 },
                {
                    sessionId: i,
                    tab: K,
                    isFullScreen: t,
                },
            ),
            Q = (0, T.O)(Y),
            [J, X] = l.useState(),
            $ = (0, a.e7)([S.Z], () => {
                var e;
                return null == (e = S.Z.getCategory(J)) ? void 0 : e.name;
            }),
            [ee, et] = l.useState();
        (0, B.Kp)();
        let en = l.useCallback((e, t) => {
                et(e), X(t);
            }, []),
            { selectedTab: er, transitionState: el, transitionToTab: ei } = (0, L.B)(K, t);
        (0, x.q3)(i, er, $, el, ee), (0, x.EB)(er, c);
        let { dismissShopButtonDC: es } = (0, A.Z)();
        l.useEffect(() => {
            es();
        }, [es]),
            l.useEffect(() => {
                t || (0, d.Y)(w.Z5c.COLLECTIBLES_SHOP);
            }, [t]);
        let eo = (0, a.e7)([b.Z], () => b.Z.getLayers().includes(w.S9g.COLLECTIBLES_SHOP)),
            ea = l.useRef(null),
            ec = l.useRef(null);
        (0, u.Tbt)(ea);
        let { setFullScreenOpen: eu, fullScreenOpen: ed } = (0, k.S)();
        l.useEffect(() => {
            if (t) return eu(!0), () => eu(!1);
            if (!t) {
                var e;
                null == (e = ec.current) || e.focus();
            }
        }, [t, eu]);
        let { analyticsLocations: eg } = (0, x.MV)(er);
        return ed && !t
            ? null
            : (0, r.jsx)(f.Gt, {
                  value: eg,
                  children: (0, r.jsx)(v.k0, {
                      newValue: {
                          sessionId: i,
                          pageCategory: $,
                          pageSize: Z.kN,
                      },
                      children: (0, r.jsx)(O.ni, {
                          tab: er,
                          children: (0, r.jsx)(M, {
                              onClose: V,
                              shouldAddEventListener: t && !eo,
                              children: (0, r.jsxs)("div", {
                                  className: s()(F.shop, { [D.shopTakeOver]: U }),
                                  ref: t ? ea : ec,
                                  tabIndex: -1,
                                  children: [
                                      (0, r.jsx)(N.I, {
                                          isFullScreen: t,
                                          isLayer: eo,
                                          onClose: V,
                                          handleTransition: ei,
                                          selectedTab: er,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: s()(F.shopViewWrapper, {
                                              [F.visible]: el === Z.f7.VISIBLE,
                                              [F.in]: el === Z.f7.IN,
                                              [F.out]: el === Z.f7.OUT,
                                          }),
                                          children: (0, r.jsx)(I.Z, {
                                              tab: er,
                                              isFullScreen: t,
                                              refreshCategories: q,
                                              transitionToTab: ei,
                                              transitionState: el,
                                              sortedCategories: Q,
                                              updateAnalyticsState: en,
                                          }),
                                      }),
                                  ],
                              }),
                          }),
                      }),
                  }),
              });
    };
