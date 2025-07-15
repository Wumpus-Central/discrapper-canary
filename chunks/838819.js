(r.r(t), r.d(t, { default: () => D }), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    o = r.n(i),
    a = r(772848),
    s = r(399606),
    c = r(952265),
    u = r(481060),
    d = r(150063),
    p = r(211266),
    f = r(906732),
    g = r(702486),
    h = r(977395),
    b = r(214852),
    m = r(290026),
    _ = r(511050),
    O = r(819640),
    C = r(594174),
    v = r(381585),
    E = r(597688),
    S = r(780475),
    y = r(223143),
    x = r(298228),
    j = r(309956),
    T = r(501431),
    P = r(98535),
    L = r(426171),
    I = r(963102),
    k = r(508498),
    B = r(849217),
    N = r(215023),
    A = r(981631),
    w = r(420212),
    R = r(484920);
let Z = [N.AW.HOME, N.AW.ORBS],
    F = (e) => {
        let { children: t, shouldAddEventListener: r, onClose: n } = e,
            i = (0, c.f9)();
        return (
            l.useEffect(() => {
                if (!r || i) return;
                let e = (e) => {
                    e.key === w.mR.Escape && n();
                };
                return (window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e));
            }, [r, i, n]),
            t
        );
    },
    D = function (e) {
        let { isFullScreen: t = !0, tab: r = N.AW.HOME } = e;
        (0, b.z)(h.f);
        let i = (0, p.Z)((0, a.Z)()),
            c = (0, s.e7)([C.default], () => C.default.getCurrentUser()),
            w = l.useRef(null),
            { closeIntroToOrbsClaimedCoachmark: D } = (0, _.Z)({ location: 'CollectiblesShop' });
        l.useEffect(
            () => () => {
                D();
            },
            [i, D]
        );
        let { onClose: M } = (0, k.Db)(),
            { currentTab: H, hasFilters: W } = (0, T.S)(),
            V = l.useMemo(() => (r === N.AW.HOME && H && W() ? H : r), [r, H, W]),
            { categories: U, refreshCategories: z } = (0, y.ZP)(
                {
                    location: 'CollectiblesShop.web',
                    logPerf: !0
                },
                {
                    sessionId: i,
                    tab: V,
                    isFullScreen: t
                }
            );
        (0, m.P)();
        let G = (0, x.O)(U),
            [q, Y] = l.useState(),
            K = (0, s.e7)([E.Z], () => {
                var e;
                return null == (e = E.Z.getCategory(q)) ? void 0 : e.name;
            }),
            [X, J] = l.useState();
        (0, L.Kp)();
        let Q = l.useCallback((e, t) => {
                (J(e), Y(t));
            }, []),
            { selectedTab: $, transitionState: ee, transitionToTab: et } = (0, j.B)(w, V, t),
            { handleScroll: er } = (0, g.z)(w, i, $);
        ((0, S.q3)(i, $, K, ee, X),
            (0, S.EB)($, c),
            (0, B.Z)(),
            l.useEffect(() => {
                t || (0, d.Y)(A.Z5c.COLLECTIBLES_SHOP);
            }, [t]));
        let en = (0, s.e7)([O.Z], () => O.Z.getLayers().includes(A.S9g.COLLECTIBLES_SHOP)),
            el = l.useRef(null),
            ei = l.useRef(null);
        (0, u.Tbt)(el);
        let { setFullScreenOpen: eo, fullScreenOpen: ea } = (0, T.S)();
        l.useEffect(() => {
            if (t) return (eo(!0), () => eo(!1));
            if (!t) {
                var e;
                null == (e = ei.current) || e.focus();
            }
        }, [t, eo]);
        let { analyticsLocations: es } = (0, S.MV)($);
        return ea && !t
            ? null
            : (0, n.jsx)(f.Gt, {
                  value: es,
                  children: (0, n.jsx)(v.k0, {
                      newValue: {
                          sessionId: i,
                          pageCategory: K,
                          pageSize: N.kN
                      },
                      children: (0, n.jsx)(F, {
                          onClose: M,
                          shouldAddEventListener: t && !en,
                          children: (0, n.jsx)('div', {
                              className: R.shop,
                              ref: t ? el : ei,
                              tabIndex: -1,
                              children: (0, n.jsxs)('div', {
                                  className: o()(R.shopViewWrapper, {
                                      [R.visible]: ee === N.f7.VISIBLE,
                                      [R.in]: ee === N.f7.IN,
                                      [R.out]: ee === N.f7.OUT
                                  }),
                                  children: [
                                      (0, n.jsx)(I.I, {
                                          isFullScreen: t,
                                          isLayer: en,
                                          onClose: M,
                                          handleTransition: et,
                                          selectedTab: $
                                      }),
                                      Z.includes($)
                                          ? (0, n.jsx)(u.Den, {
                                                className: R.shopScroll,
                                                ref: w,
                                                onScroll: er,
                                                children: (0, n.jsx)(P.Z, {
                                                    tab: $,
                                                    isFullScreen: t,
                                                    scrollerRef: w,
                                                    refreshCategories: z,
                                                    transitionToTab: et,
                                                    transitionState: ee,
                                                    sortedCategories: G,
                                                    updateAnalyticsState: Q
                                                })
                                            })
                                          : (0, n.jsx)(P.Z, {
                                                tab: $,
                                                isFullScreen: t,
                                                scrollerRef: w,
                                                refreshCategories: z,
                                                transitionToTab: et,
                                                transitionState: ee,
                                                sortedCategories: G,
                                                updateAnalyticsState: Q,
                                                advancedScroller: (e) =>
                                                    (0, n.jsx)(u.yWw, {
                                                        className: R.shopScroll,
                                                        ref: w,
                                                        onScroll: er,
                                                        children: e
                                                    })
                                            })
                                  ]
                              })
                          })
                      })
                  })
              });
    };
