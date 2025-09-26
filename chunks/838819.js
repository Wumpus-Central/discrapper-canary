n.r(t), n.d(t, { default: () => W }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(772848),
    o = n(399606),
    c = n(952265),
    u = n(481060),
    d = n(150063),
    g = n(211266),
    p = n(906732),
    f = n(977395),
    h = n(214852),
    C = n(621853),
    _ = n(484459),
    m = n(602733),
    b = n(819640),
    E = n(594174),
    S = n(381585),
    v = n(597688),
    x = n(994587),
    O = n(780475),
    T = n(223143),
    y = n(298228),
    L = n(908430),
    j = n(99767),
    k = n(501431),
    I = n(98535),
    P = n(426171),
    N = n(963102),
    A = n(508498),
    B = n(681435),
    R = n(642909),
    Z = n(215023),
    w = n(981631),
    F = n(295907),
    M = n(887353),
    H = n(345213);
let D = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            i = (0, c.f9)();
        return (
            l.useEffect(() => {
                if (!n || i) return;
                let e = (e) => {
                    e.key === F.mR.Escape && r();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [n, i, r]),
            t
        );
    },
    W = function (e) {
        let { isFullScreen: t = !0, tab: n = Z.AW.HOME } = e;
        (0, h.z)(f.f), (0, L.f)();
        let i = (0, g.Z)((0, s.Z)()),
            c = (0, o.e7)([E.default], () => E.default.getCurrentUser()),
            { userProfile: F, wishlistId: W } = (0, o.cj)(
                [C.Z],
                () => ({
                    userProfile: null != c ? C.Z.getUserProfile(c.id) : null,
                    wishlistId: null != c ? C.Z.getFirstWishlistId(c.id) : null,
                }),
                [c],
            );
        l.useEffect(() => {
            null != c && null == F && (0, _.Z)(c.id, c.getAvatarURL(null, 80));
        }, [c, F]),
            (0, m.k)(W);
        let U = (0, R.G)("CollectiblesShop"),
            { onClose: V } = (0, A.Db)(),
            { currentTab: z, hasFilters: G } = (0, k.S)(),
            q = l.useMemo(() => (n === Z.AW.HOME && z && G() ? z : n), [n, z, G]),
            { categories: K, refreshCategories: Y } = (0, T.ZP)(
                { logPerf: !0 },
                {
                    sessionId: i,
                    tab: q,
                    isFullScreen: t,
                },
            ),
            X = (0, y.O)(K),
            [Q, J] = l.useState(),
            $ = (0, o.e7)([v.Z], () => {
                var e;
                return null == (e = v.Z.getCategory(Q)) ? void 0 : e.name;
            }),
            [ee, et] = l.useState();
        (0, P.Kp)();
        let en = l.useCallback((e, t) => {
                et(e), J(t);
            }, []),
            { selectedTab: er, transitionState: el, transitionToTab: ei } = (0, j.B)(q, t);
        (0, O.q3)(i, er, $, el, ee), (0, O.EB)(er, c);
        let { dismissShopButtonDC: ea } = (0, B.Z)();
        l.useEffect(() => {
            ea();
        }, [ea]),
            l.useEffect(() => {
                t || (0, d.Y)(w.Z5c.COLLECTIBLES_SHOP);
            }, [t]);
        let es = (0, o.e7)([b.Z], () => b.Z.getLayers().includes(w.S9g.COLLECTIBLES_SHOP)),
            eo = l.useRef(null),
            ec = l.useRef(null);
        (0, u.Tbt)(eo);
        let { setFullScreenOpen: eu, fullScreenOpen: ed } = (0, k.S)();
        l.useEffect(() => {
            if (t) return eu(!0), () => eu(!1);
            if (!t) {
                var e;
                null == (e = ec.current) || e.focus();
            }
        }, [t, eu]);
        let { analyticsLocations: eg } = (0, O.MV)(er);
        return ed && !t
            ? null
            : (0, r.jsx)(p.Gt, {
                  value: eg,
                  children: (0, r.jsx)(S.k0, {
                      newValue: {
                          sessionId: i,
                          pageCategory: $,
                          pageSize: Z.kN,
                      },
                      children: (0, r.jsx)(x.ni, {
                          tab: er,
                          children: (0, r.jsx)(D, {
                              onClose: V,
                              shouldAddEventListener: t && !es,
                              children: (0, r.jsxs)("div", {
                                  className: a()(M.shop, { [H.shopTakeOver]: U }),
                                  ref: t ? eo : ec,
                                  tabIndex: -1,
                                  children: [
                                      (0, r.jsx)(N.I, {
                                          isFullScreen: t,
                                          isLayer: es,
                                          onClose: V,
                                          handleTransition: ei,
                                          selectedTab: er,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: a()(M.shopViewWrapper, {
                                              [M.visible]: el === Z.f7.VISIBLE,
                                              [M.in]: el === Z.f7.IN,
                                              [M.out]: el === Z.f7.OUT,
                                          }),
                                          children: (0, r.jsx)(I.Z, {
                                              tab: er,
                                              isFullScreen: t,
                                              refreshCategories: Y,
                                              transitionToTab: ei,
                                              transitionState: el,
                                              sortedCategories: X,
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
