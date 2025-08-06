r.r(t), r.d(t, { default: () => Z }), r(388685);
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
    h = r(214852),
    b = r(238359),
    _ = r(511050),
    m = r(819640),
    v = r(594174),
    C = r(381585),
    O = r(597688),
    E = r(780475),
    S = r(223143),
    y = r(298228),
    x = r(309956),
    j = r(501431),
    P = r(98535),
    T = r(426171),
    L = r(963102),
    I = r(508498),
    k = r(681435),
    N = r(215023),
    A = r(981631),
    w = r(420212),
    B = r(484920);
let R = (e) => {
        let { children: t, shouldAddEventListener: r, onClose: n } = e,
            a = (0, c.f9)();
        return (
            l.useEffect(() => {
                if (!r || a) return;
                let e = (e) => {
                    e.key === w.mR.Escape && n();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [r, a, n]),
            t
        );
    },
    Z = function (e) {
        let { isFullScreen: t = !0, tab: r = N.AW.HOME } = e;
        (0, h.z)(f.f);
        let a = (0, p.Z)((0, o.Z)()),
            c = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
            { closeIntroToOrbsClaimedCoachmark: w } = (0, _.Z)({ location: "CollectiblesShop" });
        l.useEffect(
            () => () => {
                w();
            },
            [a, w],
        );
        let { onClose: Z } = (0, I.Db)(),
            { currentTab: D, hasFilters: F } = (0, j.S)(),
            M = l.useMemo(() => (r === N.AW.HOME && D && F() ? D : r), [r, D, F]),
            { categories: H, refreshCategories: W } = (0, S.ZP)(
                {
                    location: "CollectiblesShop.web",
                    logPerf: !0,
                },
                {
                    sessionId: a,
                    tab: M,
                    isFullScreen: t,
                },
            );
        (0, b.D)();
        let V = (0, y.O)(H),
            [U, z] = l.useState(),
            G = (0, s.e7)([O.Z], () => {
                var e;
                return null == (e = O.Z.getCategory(U)) ? void 0 : e.name;
            }),
            [q, K] = l.useState();
        (0, T.Kp)();
        let Y = l.useCallback((e, t) => {
                K(e), z(t);
            }, []),
            { selectedTab: X, transitionState: J, transitionToTab: Q } = (0, x.B)(M, t);
        (0, E.q3)(a, X, G, J, q), (0, E.EB)(X, c);
        let { dismissShopButtonDC: $ } = (0, k.Z)();
        l.useEffect(() => {
            $();
        }, [$]),
            l.useEffect(() => {
                t || (0, d.Y)(A.Z5c.COLLECTIBLES_SHOP);
            }, [t]);
        let ee = (0, s.e7)([m.Z], () => m.Z.getLayers().includes(A.S9g.COLLECTIBLES_SHOP)),
            et = l.useRef(null),
            er = l.useRef(null);
        (0, u.Tbt)(et);
        let { setFullScreenOpen: en, fullScreenOpen: el } = (0, j.S)();
        l.useEffect(() => {
            if (t) return en(!0), () => en(!1);
            if (!t) {
                var e;
                null == (e = er.current) || e.focus();
            }
        }, [t, en]);
        let { analyticsLocations: ea } = (0, E.MV)(X);
        return el && !t
            ? null
            : (0, n.jsx)(g.Gt, {
                  value: ea,
                  children: (0, n.jsx)(C.k0, {
                      newValue: {
                          sessionId: a,
                          pageCategory: G,
                          pageSize: N.kN,
                      },
                      children: (0, n.jsx)(R, {
                          onClose: Z,
                          shouldAddEventListener: t && !ee,
                          children: (0, n.jsxs)("div", {
                              className: B.shop,
                              ref: t ? et : er,
                              tabIndex: -1,
                              children: [
                                  (0, n.jsx)(L.I, {
                                      isFullScreen: t,
                                      isLayer: ee,
                                      onClose: Z,
                                      handleTransition: Q,
                                      selectedTab: X,
                                  }),
                                  (0, n.jsx)("div", {
                                      className: i()(B.shopViewWrapper, {
                                          [B.visible]: J === N.f7.VISIBLE,
                                          [B.in]: J === N.f7.IN,
                                          [B.out]: J === N.f7.OUT,
                                      }),
                                      children: (0, n.jsx)(P.Z, {
                                          tab: X,
                                          isFullScreen: t,
                                          refreshCategories: W,
                                          transitionToTab: Q,
                                          transitionState: J,
                                          sortedCategories: V,
                                          updateAnalyticsState: Y,
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  }),
              });
    };
