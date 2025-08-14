r.r(t), r.d(t, { default: () => M }), r(388685);
var n = r(255367),
    l = r(73800),
    a = r(120356),
    i = r.n(a),
    o = r(772848),
    s = r(399606),
    c = r(952265),
    u = r(481060),
    d = r(150063),
    p = r(211266),
    g = r(906732),
    f = r(977395),
    b = r(214852),
    h = r(238359),
    m = r(511050),
    _ = r(819640),
    v = r(594174),
    O = r(381585),
    C = r(597688),
    E = r(780475),
    S = r(223143),
    y = r(298228),
    x = r(309956),
    j = r(501431),
    T = r(98535),
    P = r(426171),
    L = r(963102),
    k = r(508498),
    I = r(681435),
    N = r(642909),
    A = r(215023),
    w = r(981631),
    B = r(420212),
    R = r(887353),
    Z = r(345213);
let D = (e) => {
        let { children: t, shouldAddEventListener: r, onClose: n } = e,
            a = (0, c.f9)();
        return (
            l.useEffect(() => {
                if (!r || a) return;
                let e = (e) => {
                    e.key === B.mR.Escape && n();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [r, a, n]),
            t
        );
    },
    M = function (e) {
        let { isFullScreen: t = !0, tab: r = A.AW.HOME } = e;
        (0, b.z)(f.f);
        let a = (0, p.Z)((0, o.Z)()),
            c = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
            B = (0, N.G)("CollectiblesShop"),
            { closeIntroToOrbsClaimedCoachmark: M } = (0, m.Z)({ location: "CollectiblesShop" });
        l.useEffect(
            () => () => {
                M();
            },
            [a, M],
        );
        let { onClose: F } = (0, k.Db)(),
            { currentTab: H, hasFilters: W } = (0, j.S)(),
            V = l.useMemo(() => (r === A.AW.HOME && H && W() ? H : r), [r, H, W]),
            { categories: U, refreshCategories: z } = (0, S.ZP)(
                { logPerf: !0 },
                {
                    sessionId: a,
                    tab: V,
                    isFullScreen: t,
                },
            );
        (0, h.D)();
        let G = (0, y.O)(U),
            [q, K] = l.useState(),
            Y = (0, s.e7)([C.Z], () => {
                var e;
                return null == (e = C.Z.getCategory(q)) ? void 0 : e.name;
            }),
            [X, J] = l.useState();
        (0, P.Kp)();
        let Q = l.useCallback((e, t) => {
                J(e), K(t);
            }, []),
            { selectedTab: $, transitionState: ee, transitionToTab: et } = (0, x.B)(V, t);
        (0, E.q3)(a, $, Y, ee, X), (0, E.EB)($, c);
        let { dismissShopButtonDC: er } = (0, I.Z)();
        l.useEffect(() => {
            er();
        }, [er]),
            l.useEffect(() => {
                t || (0, d.Y)(w.Z5c.COLLECTIBLES_SHOP);
            }, [t]);
        let en = (0, s.e7)([_.Z], () => _.Z.getLayers().includes(w.S9g.COLLECTIBLES_SHOP)),
            el = l.useRef(null),
            ea = l.useRef(null);
        (0, u.Tbt)(el);
        let { setFullScreenOpen: ei, fullScreenOpen: eo } = (0, j.S)();
        l.useEffect(() => {
            if (t) return ei(!0), () => ei(!1);
            if (!t) {
                var e;
                null == (e = ea.current) || e.focus();
            }
        }, [t, ei]);
        let { analyticsLocations: es } = (0, E.MV)($);
        return eo && !t
            ? null
            : (0, n.jsx)(g.Gt, {
                  value: es,
                  children: (0, n.jsx)(O.k0, {
                      newValue: {
                          sessionId: a,
                          pageCategory: Y,
                          pageSize: A.kN,
                      },
                      children: (0, n.jsx)(D, {
                          onClose: F,
                          shouldAddEventListener: t && !en,
                          children: (0, n.jsxs)("div", {
                              className: i()(R.shop, { [Z.shopTakeOver]: B }),
                              ref: t ? el : ea,
                              tabIndex: -1,
                              children: [
                                  (0, n.jsx)(L.I, {
                                      isFullScreen: t,
                                      isLayer: en,
                                      onClose: F,
                                      handleTransition: et,
                                      selectedTab: $,
                                  }),
                                  (0, n.jsx)("div", {
                                      className: i()(R.shopViewWrapper, {
                                          [R.visible]: ee === A.f7.VISIBLE,
                                          [R.in]: ee === A.f7.IN,
                                          [R.out]: ee === A.f7.OUT,
                                      }),
                                      children: (0, n.jsx)(T.Z, {
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
