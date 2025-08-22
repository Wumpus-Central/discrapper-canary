n.r(t), n.d(t, { default: () => M }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    i = n(772848),
    o = n(399606),
    c = n(952265),
    u = n(481060),
    d = n(150063),
    g = n(211266),
    f = n(906732),
    p = n(977395),
    m = n(214852),
    _ = n(238359),
    h = n(511050),
    b = n(819640),
    C = n(594174),
    E = n(381585),
    S = n(597688),
    O = n(780475),
    v = n(223143),
    x = n(298228),
    y = n(309956),
    T = n(908430),
    L = n(501431),
    j = n(98535),
    k = n(426171),
    I = n(963102),
    B = n(508498),
    N = n(681435),
    P = n(642909),
    A = n(215023),
    R = n(981631),
    Z = n(420212),
    w = n(887353),
    F = n(345213);
let D = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            a = (0, c.f9)();
        return (
            l.useEffect(() => {
                if (!n || a) return;
                let e = (e) => {
                    e.key === Z.mR.Escape && r();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [n, a, r]),
            t
        );
    },
    M = function (e) {
        let { isFullScreen: t = !0, tab: n = A.AW.HOME } = e;
        (0, m.z)(p.f), (0, T.f)();
        let a = (0, g.Z)((0, i.Z)()),
            c = (0, o.e7)([C.default], () => C.default.getCurrentUser()),
            Z = (0, P.G)("CollectiblesShop"),
            { closeIntroToOrbsClaimedCoachmark: M } = (0, h.Z)({ location: "CollectiblesShop" });
        l.useEffect(
            () => () => {
                M();
            },
            [a, M],
        );
        let { onClose: H } = (0, B.Db)(),
            { currentTab: W, hasFilters: U } = (0, L.S)(),
            V = l.useMemo(() => (n === A.AW.HOME && W && U() ? W : n), [n, W, U]),
            { categories: z, refreshCategories: G } = (0, v.ZP)(
                { logPerf: !0 },
                {
                    sessionId: a,
                    tab: V,
                    isFullScreen: t,
                },
            );
        (0, _.D)();
        let q = (0, x.O)(z),
            [K, Y] = l.useState(),
            X = (0, o.e7)([S.Z], () => {
                var e;
                return null == (e = S.Z.getCategory(K)) ? void 0 : e.name;
            }),
            [Q, J] = l.useState();
        (0, k.Kp)();
        let $ = l.useCallback((e, t) => {
                J(e), Y(t);
            }, []),
            { selectedTab: ee, transitionState: et, transitionToTab: en } = (0, y.B)(V, t);
        (0, O.q3)(a, ee, X, et, Q), (0, O.EB)(ee, c);
        let { dismissShopButtonDC: er } = (0, N.Z)();
        l.useEffect(() => {
            er();
        }, [er]),
            l.useEffect(() => {
                t || (0, d.Y)(R.Z5c.COLLECTIBLES_SHOP);
            }, [t]);
        let el = (0, o.e7)([b.Z], () => b.Z.getLayers().includes(R.S9g.COLLECTIBLES_SHOP)),
            ea = l.useRef(null),
            es = l.useRef(null);
        (0, u.Tbt)(ea);
        let { setFullScreenOpen: ei, fullScreenOpen: eo } = (0, L.S)();
        l.useEffect(() => {
            if (t) return ei(!0), () => ei(!1);
            if (!t) {
                var e;
                null == (e = es.current) || e.focus();
            }
        }, [t, ei]);
        let { analyticsLocations: ec } = (0, O.MV)(ee);
        return eo && !t
            ? null
            : (0, r.jsx)(f.Gt, {
                  value: ec,
                  children: (0, r.jsx)(E.k0, {
                      newValue: {
                          sessionId: a,
                          pageCategory: X,
                          pageSize: A.kN,
                      },
                      children: (0, r.jsx)(D, {
                          onClose: H,
                          shouldAddEventListener: t && !el,
                          children: (0, r.jsxs)("div", {
                              className: s()(w.shop, { [F.shopTakeOver]: Z }),
                              ref: t ? ea : es,
                              tabIndex: -1,
                              children: [
                                  (0, r.jsx)(I.I, {
                                      isFullScreen: t,
                                      isLayer: el,
                                      onClose: H,
                                      handleTransition: en,
                                      selectedTab: ee,
                                  }),
                                  (0, r.jsx)("div", {
                                      className: s()(w.shopViewWrapper, {
                                          [w.visible]: et === A.f7.VISIBLE,
                                          [w.in]: et === A.f7.IN,
                                          [w.out]: et === A.f7.OUT,
                                      }),
                                      children: (0, r.jsx)(j.Z, {
                                          tab: ee,
                                          isFullScreen: t,
                                          refreshCategories: G,
                                          transitionToTab: en,
                                          transitionState: et,
                                          sortedCategories: q,
                                          updateAnalyticsState: $,
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  }),
              });
    };
