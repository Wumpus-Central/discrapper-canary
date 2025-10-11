n.r(t), n.d(t, { default: () => W }), n(388685);
var r = n(951288),
    l = n(647438),
    s = n(120356),
    i = n.n(s),
    a = n(772848),
    o = n(399606),
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
    S = n(381585),
    v = n(597688),
    x = n(994587),
    O = n(780475),
    y = n(223143),
    j = n(298228),
    k = n(908430),
    T = n(99767),
    L = n(501431),
    I = n(98535),
    P = n(426171),
    N = n(963102),
    B = n(508498),
    A = n(681435),
    R = n(642909),
    Z = n(215023),
    w = n(981631),
    F = n(295907),
    H = n(887353),
    D = n(345213);
let M = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            s = (0, c.f9)();
        return (
            l.useEffect(() => {
                if (!n || s) return;
                let e = (e) => {
                    e.key === F.mR.Escape && r();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [n, s, r]),
            t
        );
    },
    W = function (e) {
        let { isFullScreen: t = !0, tab: n = Z.AW.HOME } = e;
        (0, C.z)(p.f), (0, k.f)();
        let s = (0, g.Z)((0, a.Z)()),
            c = (0, o.e7)([E.default], () => E.default.getCurrentUser()),
            { userProfile: F, wishlistId: W } = (0, o.cj)(
                [h.Z],
                () => ({
                    userProfile: null != c ? h.Z.getUserProfile(c.id) : null,
                    wishlistId: null != c ? h.Z.getFirstWishlistId(c.id) : null,
                }),
                [c],
            );
        l.useEffect(() => {
            null != c && null == F && (0, _.Z)(c.id, c.getAvatarURL(null, 80));
        }, [c, F]),
            (0, m.kZ)(W, null == c ? void 0 : c.id);
        let U = (0, R.G)("CollectiblesShop"),
            { onClose: V } = (0, B.Db)(),
            { currentTab: z, hasFilters: G } = (0, L.S)(),
            K = l.useMemo(() => (n === Z.AW.HOME && z && G() ? z : n), [n, z, G]),
            { categories: q, refreshCategories: Y } = (0, y.ZP)(
                { logPerf: !0 },
                {
                    sessionId: s,
                    tab: K,
                    isFullScreen: t,
                },
            ),
            Q = (0, j.O)(q),
            [X, J] = l.useState(),
            $ = (0, o.e7)([v.Z], () => {
                var e;
                return null == (e = v.Z.getCategory(X)) ? void 0 : e.name;
            }),
            [ee, et] = l.useState();
        (0, P.Kp)();
        let en = l.useCallback((e, t) => {
                et(e), J(t);
            }, []),
            { selectedTab: er, transitionState: el, transitionToTab: es } = (0, T.B)(K, t);
        (0, O.q3)(s, er, $, el, ee), (0, O.EB)(er, c);
        let { dismissShopButtonDC: ei } = (0, A.Z)();
        l.useEffect(() => {
            ei();
        }, [ei]),
            l.useEffect(() => {
                t || (0, d.Y)(w.Z5c.COLLECTIBLES_SHOP);
            }, [t]);
        let ea = (0, o.e7)([b.Z], () => b.Z.getLayers().includes(w.S9g.COLLECTIBLES_SHOP)),
            eo = l.useRef(null),
            ec = l.useRef(null);
        (0, u.Tbt)(eo);
        let { setFullScreenOpen: eu, fullScreenOpen: ed } = (0, L.S)();
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
            : (0, r.jsx)(f.Gt, {
                  value: eg,
                  children: (0, r.jsx)(S.k0, {
                      newValue: {
                          sessionId: s,
                          pageCategory: $,
                          pageSize: Z.kN,
                      },
                      children: (0, r.jsx)(x.ni, {
                          tab: er,
                          children: (0, r.jsx)(M, {
                              onClose: V,
                              shouldAddEventListener: t && !ea,
                              children: (0, r.jsxs)("div", {
                                  className: i()(H.shop, { [D.shopTakeOver]: U }),
                                  ref: t ? eo : ec,
                                  tabIndex: -1,
                                  children: [
                                      (0, r.jsx)(N.I, {
                                          isFullScreen: t,
                                          isLayer: ea,
                                          onClose: V,
                                          handleTransition: es,
                                          selectedTab: er,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: i()(H.shopViewWrapper, {
                                              [H.visible]: el === Z.f7.VISIBLE,
                                              [H.in]: el === Z.f7.IN,
                                              [H.out]: el === Z.f7.OUT,
                                          }),
                                          children: (0, r.jsx)(I.Z, {
                                              tab: er,
                                              isFullScreen: t,
                                              refreshCategories: Y,
                                              transitionToTab: es,
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
