n.r(t), n.d(t, { default: () => D }), n(388685);
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
    p = n(906732),
    f = n(977395),
    m = n(214852),
    _ = n(511050),
    h = n(819640),
    b = n(594174),
    C = n(381585),
    E = n(597688),
    S = n(780475),
    O = n(223143),
    v = n(298228),
    x = n(309956),
    y = n(908430),
    T = n(501431),
    L = n(98535),
    j = n(426171),
    k = n(963102),
    I = n(508498),
    B = n(681435),
    N = n(642909),
    P = n(215023),
    A = n(981631),
    R = n(420212),
    Z = n(887353),
    w = n(345213);
let F = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            a = (0, c.f9)();
        return (
            l.useEffect(() => {
                if (!n || a) return;
                let e = (e) => {
                    e.key === R.mR.Escape && r();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [n, a, r]),
            t
        );
    },
    D = function (e) {
        let { isFullScreen: t = !0, tab: n = P.AW.HOME } = e;
        (0, m.z)(f.f), (0, y.f)();
        let a = (0, g.Z)((0, i.Z)()),
            c = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
            R = (0, N.G)("CollectiblesShop"),
            { closeIntroToOrbsClaimedCoachmark: D } = (0, _.Z)({ location: "CollectiblesShop" });
        l.useEffect(
            () => () => {
                D();
            },
            [a, D],
        );
        let { onClose: M } = (0, I.Db)(),
            { currentTab: H, hasFilters: W } = (0, T.S)(),
            U = l.useMemo(() => (n === P.AW.HOME && H && W() ? H : n), [n, H, W]),
            { categories: V, refreshCategories: z } = (0, O.ZP)(
                { logPerf: !0 },
                {
                    sessionId: a,
                    tab: U,
                    isFullScreen: t,
                },
            ),
            G = (0, v.O)(V),
            [q, K] = l.useState(),
            Y = (0, o.e7)([E.Z], () => {
                var e;
                return null == (e = E.Z.getCategory(q)) ? void 0 : e.name;
            }),
            [X, Q] = l.useState();
        (0, j.Kp)();
        let J = l.useCallback((e, t) => {
                Q(e), K(t);
            }, []),
            { selectedTab: $, transitionState: ee, transitionToTab: et } = (0, x.B)(U, t);
        (0, S.q3)(a, $, Y, ee, X), (0, S.EB)($, c);
        let { dismissShopButtonDC: en } = (0, B.Z)();
        l.useEffect(() => {
            en();
        }, [en]),
            l.useEffect(() => {
                t || (0, d.Y)(A.Z5c.COLLECTIBLES_SHOP);
            }, [t]);
        let er = (0, o.e7)([h.Z], () => h.Z.getLayers().includes(A.S9g.COLLECTIBLES_SHOP)),
            el = l.useRef(null),
            ea = l.useRef(null);
        (0, u.Tbt)(el);
        let { setFullScreenOpen: es, fullScreenOpen: ei } = (0, T.S)();
        l.useEffect(() => {
            if (t) return es(!0), () => es(!1);
            if (!t) {
                var e;
                null == (e = ea.current) || e.focus();
            }
        }, [t, es]);
        let { analyticsLocations: eo } = (0, S.MV)($);
        return ei && !t
            ? null
            : (0, r.jsx)(p.Gt, {
                  value: eo,
                  children: (0, r.jsx)(C.k0, {
                      newValue: {
                          sessionId: a,
                          pageCategory: Y,
                          pageSize: P.kN,
                      },
                      children: (0, r.jsx)(F, {
                          onClose: M,
                          shouldAddEventListener: t && !er,
                          children: (0, r.jsxs)("div", {
                              className: s()(Z.shop, { [w.shopTakeOver]: R }),
                              ref: t ? el : ea,
                              tabIndex: -1,
                              children: [
                                  (0, r.jsx)(k.I, {
                                      isFullScreen: t,
                                      isLayer: er,
                                      onClose: M,
                                      handleTransition: et,
                                      selectedTab: $,
                                  }),
                                  (0, r.jsx)("div", {
                                      className: s()(Z.shopViewWrapper, {
                                          [Z.visible]: ee === P.f7.VISIBLE,
                                          [Z.in]: ee === P.f7.IN,
                                          [Z.out]: ee === P.f7.OUT,
                                      }),
                                      children: (0, r.jsx)(L.Z, {
                                          tab: $,
                                          isFullScreen: t,
                                          refreshCategories: z,
                                          transitionToTab: et,
                                          transitionState: ee,
                                          sortedCategories: G,
                                          updateAnalyticsState: J,
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  }),
              });
    };
