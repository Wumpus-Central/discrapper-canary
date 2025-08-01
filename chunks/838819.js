(r.r(t), r.d(t, { default: () => Z }), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    a = r.n(i),
    o = r(772848),
    s = r(399606),
    c = r(952265),
    u = r(481060),
    d = r(150063),
    p = r(211266),
    f = r(906732),
    g = r(977395),
    h = r(214852),
    b = r(238359),
    m = r(511050),
    _ = r(819640),
    O = r(594174),
    v = r(381585),
    C = r(597688),
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
    w = r(981631),
    A = r(420212),
    B = r(484920);
let R = (e) => {
        let { children: t, shouldAddEventListener: r, onClose: n } = e,
            i = (0, c.f9)();
        return (
            l.useEffect(() => {
                if (!r || i) return;
                let e = (e) => {
                    e.key === A.mR.Escape && n();
                };
                return (window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e));
            }, [r, i, n]),
            t
        );
    },
    Z = function (e) {
        let { isFullScreen: t = !0, tab: r = N.AW.HOME } = e;
        (0, h.z)(g.f);
        let i = (0, p.Z)((0, o.Z)()),
            c = (0, s.e7)([O.default], () => O.default.getCurrentUser()),
            { closeIntroToOrbsClaimedCoachmark: A } = (0, m.Z)({ location: 'CollectiblesShop' });
        l.useEffect(
            () => () => {
                A();
            },
            [i, A]
        );
        let { onClose: Z } = (0, I.Db)(),
            { currentTab: D, hasFilters: F } = (0, j.S)(),
            M = l.useMemo(() => (r === N.AW.HOME && D && F() ? D : r), [r, D, F]),
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
        (0, b.D)();
        let V = (0, y.O)(H),
            [U, G] = l.useState(),
            z = (0, s.e7)([C.Z], () => {
                var e;
                return null == (e = C.Z.getCategory(U)) ? void 0 : e.name;
            }),
            [q, K] = l.useState();
        (0, T.Kp)();
        let Y = l.useCallback((e, t) => {
                (K(e), G(t));
            }, []),
            { selectedTab: X, transitionState: J, transitionToTab: Q } = (0, x.B)(M, t);
        ((0, E.q3)(i, X, z, J, q), (0, E.EB)(X, c));
        let { dismissShopButtonDC: $ } = (0, k.Z)();
        (l.useEffect(() => {
            $();
        }, [$]),
            l.useEffect(() => {
                t || (0, d.Y)(w.Z5c.COLLECTIBLES_SHOP);
            }, [t]));
        let ee = (0, s.e7)([_.Z], () => _.Z.getLayers().includes(w.S9g.COLLECTIBLES_SHOP)),
            et = l.useRef(null),
            er = l.useRef(null);
        (0, u.Tbt)(et);
        let { setFullScreenOpen: en, fullScreenOpen: el } = (0, j.S)();
        l.useEffect(() => {
            if (t) return (en(!0), () => en(!1));
            if (!t) {
                var e;
                null == (e = er.current) || e.focus();
            }
        }, [t, en]);
        let { analyticsLocations: ei } = (0, E.MV)(X);
        return el && !t
            ? null
            : (0, n.jsx)(f.Gt, {
                  value: ei,
                  children: (0, n.jsx)(v.k0, {
                      newValue: {
                          sessionId: i,
                          pageCategory: z,
                          pageSize: N.kN
                      },
                      children: (0, n.jsx)(R, {
                          onClose: Z,
                          shouldAddEventListener: t && !ee,
                          children: (0, n.jsx)('div', {
                              className: B.shop,
                              ref: t ? et : er,
                              tabIndex: -1,
                              children: (0, n.jsxs)('div', {
                                  className: a()(B.shopViewWrapper, {
                                      [B.visible]: J === N.f7.VISIBLE,
                                      [B.in]: J === N.f7.IN,
                                      [B.out]: J === N.f7.OUT
                                  }),
                                  children: [
                                      (0, n.jsx)(L.I, {
                                          isFullScreen: t,
                                          isLayer: ee,
                                          onClose: Z,
                                          handleTransition: Q,
                                          selectedTab: X
                                      }),
                                      (0, n.jsx)(P.Z, {
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
