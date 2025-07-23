(r.r(t), r.d(t, { default: () => Z }), r(388685));
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
    g = r(977395),
    h = r(214852),
    b = r(290026),
    m = r(511050),
    _ = r(819640),
    C = r(594174),
    O = r(381585),
    v = r(597688),
    E = r(780475),
    S = r(223143),
    y = r(298228),
    x = r(309956),
    j = r(501431),
    T = r(98535),
    P = r(426171),
    L = r(963102),
    k = r(508498),
    I = r(849217),
    N = r(215023),
    A = r(981631),
    B = r(420212),
    w = r(484920);
let R = (e) => {
        let { children: t, shouldAddEventListener: r, onClose: n } = e,
            i = (0, c.f9)();
        return (
            l.useEffect(() => {
                if (!r || i) return;
                let e = (e) => {
                    e.key === B.mR.Escape && n();
                };
                return (window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e));
            }, [r, i, n]),
            t
        );
    },
    Z = function (e) {
        let { isFullScreen: t = !0, tab: r = N.AW.HOME } = e;
        (0, h.z)(g.f);
        let i = (0, p.Z)((0, a.Z)()),
            c = (0, s.e7)([C.default], () => C.default.getCurrentUser()),
            { closeIntroToOrbsClaimedCoachmark: B } = (0, m.Z)({ location: 'CollectiblesShop' });
        l.useEffect(
            () => () => {
                B();
            },
            [i, B]
        );
        let { onClose: Z } = (0, k.Db)(),
            { currentTab: F, hasFilters: D } = (0, j.S)(),
            M = l.useMemo(() => (r === N.AW.HOME && F && D() ? F : r), [r, F, D]),
            { categories: H, refreshCategories: W } = (0, S.ZP)(
                {
                    location: 'CollectiblesShop.web',
                    logPerf: !0
                },
                {
                    sessionId: i,
                    tab: M,
                    isFullScreen: t
                }
            );
        (0, b.P)();
        let V = (0, y.O)(H),
            [U, z] = l.useState(),
            G = (0, s.e7)([v.Z], () => {
                var e;
                return null == (e = v.Z.getCategory(U)) ? void 0 : e.name;
            }),
            [q, K] = l.useState();
        (0, P.Kp)();
        let Y = l.useCallback((e, t) => {
                (K(e), z(t));
            }, []),
            { selectedTab: X, transitionState: J, transitionToTab: Q } = (0, x.B)(M, t);
        ((0, E.q3)(i, X, G, J, q),
            (0, E.EB)(X, c),
            (0, I.Z)(),
            l.useEffect(() => {
                t || (0, d.Y)(A.Z5c.COLLECTIBLES_SHOP);
            }, [t]));
        let $ = (0, s.e7)([_.Z], () => _.Z.getLayers().includes(A.S9g.COLLECTIBLES_SHOP)),
            ee = l.useRef(null),
            et = l.useRef(null);
        (0, u.Tbt)(ee);
        let { setFullScreenOpen: er, fullScreenOpen: en } = (0, j.S)();
        l.useEffect(() => {
            if (t) return (er(!0), () => er(!1));
            if (!t) {
                var e;
                null == (e = et.current) || e.focus();
            }
        }, [t, er]);
        let { analyticsLocations: el } = (0, E.MV)(X);
        return en && !t
            ? null
            : (0, n.jsx)(f.Gt, {
                  value: el,
                  children: (0, n.jsx)(O.k0, {
                      newValue: {
                          sessionId: i,
                          pageCategory: G,
                          pageSize: N.kN
                      },
                      children: (0, n.jsx)(R, {
                          onClose: Z,
                          shouldAddEventListener: t && !$,
                          children: (0, n.jsx)('div', {
                              className: w.shop,
                              ref: t ? ee : et,
                              tabIndex: -1,
                              children: (0, n.jsxs)('div', {
                                  className: o()(w.shopViewWrapper, {
                                      [w.visible]: J === N.f7.VISIBLE,
                                      [w.in]: J === N.f7.IN,
                                      [w.out]: J === N.f7.OUT
                                  }),
                                  children: [
                                      (0, n.jsx)(L.I, {
                                          isFullScreen: t,
                                          isLayer: $,
                                          onClose: Z,
                                          handleTransition: Q,
                                          selectedTab: X
                                      }),
                                      (0, n.jsx)(T.Z, {
                                          tab: X,
                                          isFullScreen: t,
                                          refreshCategories: W,
                                          transitionToTab: Q,
                                          transitionState: J,
                                          sortedCategories: V,
                                          updateAnalyticsState: Y
                                      })
                                  ]
                              })
                          })
                      })
                  })
              });
    };
