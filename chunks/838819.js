n.r(t), n.d(t, { default: () => F }), n(388685);
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(772848),
    s = n(399606),
    c = n(952265),
    u = n(481060),
    d = n(150063),
    p = n(211266),
    g = n(906732),
    f = n(977395),
    b = n(214852),
    h = n(238359),
    m = n(511050),
    _ = n(819640),
    v = n(594174),
    O = n(381585),
    C = n(597688),
    E = n(675997),
    S = n(780475),
    y = n(223143),
    x = n(298228),
    j = n(309956),
    T = n(501431),
    P = n(98535),
    L = n(426171),
    k = n(963102),
    I = n(508498),
    N = n(681435),
    w = n(215023),
    A = n(981631),
    B = n(420212),
    R = n(484920),
    Z = n(306414);
let D = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            a = (0, c.f9)();
        return (
            l.useEffect(() => {
                if (!n || a) return;
                let e = (e) => {
                    e.key === B.mR.Escape && r();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [n, a, r]),
            t
        );
    },
    F = function (e) {
        let { isFullScreen: t = !0, tab: n = w.AW.HOME } = e;
        (0, b.z)(f.f);
        let a = (0, p.Z)((0, o.Z)()),
            c = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
            { enableShopTakeOver: B } = E.Z.useConfig({ location: "CollectiblesShop" }),
            { closeIntroToOrbsClaimedCoachmark: F } = (0, m.Z)({ location: "CollectiblesShop" });
        l.useEffect(
            () => () => {
                F();
            },
            [a, F],
        );
        let { onClose: M } = (0, I.Db)(),
            { currentTab: H, hasFilters: W } = (0, T.S)(),
            V = l.useMemo(() => (n === w.AW.HOME && H && W() ? H : n), [n, H, W]),
            { categories: U, refreshCategories: z } = (0, y.ZP)(
                {
                    location: "CollectiblesShop.web",
                    logPerf: !0,
                },
                {
                    sessionId: a,
                    tab: V,
                    isFullScreen: t,
                },
            );
        (0, h.D)();
        let G = (0, x.O)(U),
            [q, K] = l.useState(),
            Y = (0, s.e7)([C.Z], () => {
                var e;
                return null == (e = C.Z.getCategory(q)) ? void 0 : e.name;
            }),
            [X, J] = l.useState();
        (0, L.Kp)();
        let Q = l.useCallback((e, t) => {
                J(e), K(t);
            }, []),
            { selectedTab: $, transitionState: ee, transitionToTab: et } = (0, j.B)(V, t);
        (0, S.q3)(a, $, Y, ee, X), (0, S.EB)($, c);
        let { dismissShopButtonDC: en } = (0, N.Z)();
        l.useEffect(() => {
            en();
        }, [en]),
            l.useEffect(() => {
                t || (0, d.Y)(A.Z5c.COLLECTIBLES_SHOP);
            }, [t]);
        let er = (0, s.e7)([_.Z], () => _.Z.getLayers().includes(A.S9g.COLLECTIBLES_SHOP)),
            el = l.useRef(null),
            ea = l.useRef(null);
        (0, u.Tbt)(el);
        let { setFullScreenOpen: ei, fullScreenOpen: eo } = (0, T.S)();
        l.useEffect(() => {
            if (t) return ei(!0), () => ei(!1);
            if (!t) {
                var e;
                null == (e = ea.current) || e.focus();
            }
        }, [t, ei]);
        let { analyticsLocations: es } = (0, S.MV)($);
        return eo && !t
            ? null
            : (0, r.jsx)(g.Gt, {
                  value: es,
                  children: (0, r.jsx)(O.k0, {
                      newValue: {
                          sessionId: a,
                          pageCategory: Y,
                          pageSize: w.kN,
                      },
                      children: (0, r.jsx)(D, {
                          onClose: M,
                          shouldAddEventListener: t && !er,
                          children: (0, r.jsxs)("div", {
                              className: i()(R.shop, { [Z.shopTakeOver]: B }),
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
                                      className: i()(R.shopViewWrapper, {
                                          [R.visible]: ee === w.f7.VISIBLE,
                                          [R.in]: ee === w.f7.IN,
                                          [R.out]: ee === w.f7.OUT,
                                      }),
                                      children: (0, r.jsx)(P.Z, {
                                          tab: $,
                                          isFullScreen: t,
                                          refreshCategories: z,
                                          transitionToTab: et,
                                          transitionState: ee,
                                          sortedCategories: G,
                                          updateAnalyticsState: Q,
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  }),
              });
    };
