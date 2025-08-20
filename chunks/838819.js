r.r(t), r.d(t, { default: () => F }), r(388685);
var n = r(951288),
    l = r(647438),
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
    m = r(214852),
    b = r(238359),
    h = r(511050),
    _ = r(819640),
    v = r(594174),
    O = r(381585),
    C = r(597688),
    E = r(780475),
    y = r(223143),
    S = r(298228),
    x = r(309956),
    j = r(908430),
    T = r(501431),
    P = r(98535),
    L = r(426171),
    k = r(963102),
    I = r(508498),
    N = r(681435),
    A = r(642909),
    w = r(215023),
    B = r(981631),
    R = r(420212),
    Z = r(887353),
    D = r(345213);
let M = (e) => {
        let { children: t, shouldAddEventListener: r, onClose: n } = e,
            a = (0, c.f9)();
        return (
            l.useEffect(() => {
                if (!r || a) return;
                let e = (e) => {
                    e.key === R.mR.Escape && n();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [r, a, n]),
            t
        );
    },
    F = function (e) {
        let { isFullScreen: t = !0, tab: r = w.AW.HOME } = e;
        (0, m.z)(f.f), (0, j.f)();
        let a = (0, p.Z)((0, o.Z)()),
            c = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
            R = (0, A.G)("CollectiblesShop"),
            { closeIntroToOrbsClaimedCoachmark: F } = (0, h.Z)({ location: "CollectiblesShop" });
        l.useEffect(
            () => () => {
                F();
            },
            [a, F],
        );
        let { onClose: H } = (0, I.Db)(),
            { currentTab: W, hasFilters: U } = (0, T.S)(),
            V = l.useMemo(() => (r === w.AW.HOME && W && U() ? W : r), [r, W, U]),
            { categories: z, refreshCategories: G } = (0, y.ZP)(
                { logPerf: !0 },
                {
                    sessionId: a,
                    tab: V,
                    isFullScreen: t,
                },
            );
        (0, b.D)();
        let q = (0, S.O)(z),
            [K, Y] = l.useState(),
            X = (0, s.e7)([C.Z], () => {
                var e;
                return null == (e = C.Z.getCategory(K)) ? void 0 : e.name;
            }),
            [Q, J] = l.useState();
        (0, L.Kp)();
        let $ = l.useCallback((e, t) => {
                J(e), Y(t);
            }, []),
            { selectedTab: ee, transitionState: et, transitionToTab: er } = (0, x.B)(V, t);
        (0, E.q3)(a, ee, X, et, Q), (0, E.EB)(ee, c);
        let { dismissShopButtonDC: en } = (0, N.Z)();
        l.useEffect(() => {
            en();
        }, [en]),
            l.useEffect(() => {
                t || (0, d.Y)(B.Z5c.COLLECTIBLES_SHOP);
            }, [t]);
        let el = (0, s.e7)([_.Z], () => _.Z.getLayers().includes(B.S9g.COLLECTIBLES_SHOP)),
            ea = l.useRef(null),
            ei = l.useRef(null);
        (0, u.Tbt)(ea);
        let { setFullScreenOpen: eo, fullScreenOpen: es } = (0, T.S)();
        l.useEffect(() => {
            if (t) return eo(!0), () => eo(!1);
            if (!t) {
                var e;
                null == (e = ei.current) || e.focus();
            }
        }, [t, eo]);
        let { analyticsLocations: ec } = (0, E.MV)(ee);
        return es && !t
            ? null
            : (0, n.jsx)(g.Gt, {
                  value: ec,
                  children: (0, n.jsx)(O.k0, {
                      newValue: {
                          sessionId: a,
                          pageCategory: X,
                          pageSize: w.kN,
                      },
                      children: (0, n.jsx)(M, {
                          onClose: H,
                          shouldAddEventListener: t && !el,
                          children: (0, n.jsxs)("div", {
                              className: i()(Z.shop, { [D.shopTakeOver]: R }),
                              ref: t ? ea : ei,
                              tabIndex: -1,
                              children: [
                                  (0, n.jsx)(k.I, {
                                      isFullScreen: t,
                                      isLayer: el,
                                      onClose: H,
                                      handleTransition: er,
                                      selectedTab: ee,
                                  }),
                                  (0, n.jsx)("div", {
                                      className: i()(Z.shopViewWrapper, {
                                          [Z.visible]: et === w.f7.VISIBLE,
                                          [Z.in]: et === w.f7.IN,
                                          [Z.out]: et === w.f7.OUT,
                                      }),
                                      children: (0, n.jsx)(P.Z, {
                                          tab: ee,
                                          isFullScreen: t,
                                          refreshCategories: G,
                                          transitionToTab: er,
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
