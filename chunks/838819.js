(n.r(t), n.d(t, { default: () => Z }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(772848),
    s = n(399606),
    c = n(952265),
    u = n(481060),
    d = n(150063),
    p = n(211266),
    g = n(906732),
    f = n(702486),
    h = n(977395),
    b = n(214852),
    m = n(290026),
    _ = n(511050),
    C = n(819640),
    O = n(594174),
    v = n(381585),
    E = n(597688),
    S = n(780475),
    x = n(223143),
    y = n(298228),
    j = n(309956),
    T = n(501431),
    P = n(98535),
    L = n(963102),
    I = n(508498),
    k = n(849217),
    N = n(215023),
    B = n(981631),
    A = n(420212),
    R = n(484920);
let w = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            o = (0, c.f9)();
        return (
            l.useEffect(() => {
                if (!n || o) return;
                let e = (e) => {
                    e.key === A.mR.Escape && r();
                };
                return (window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e));
            }, [n, o, r]),
            t
        );
    },
    Z = function (e) {
        let { isFullScreen: t = !0, tab: n = N.AW.HOME } = e;
        (0, b.z)(h.f);
        let o = (0, p.Z)((0, i.Z)()),
            c = (0, s.e7)([O.default], () => O.default.getCurrentUser()),
            A = l.useRef(null),
            { closeIntroToOrbsClaimedCoachmark: Z } = (0, _.Z)({ location: 'CollectiblesShop' });
        l.useEffect(
            () => () => {
                Z();
            },
            [o, Z]
        );
        let { onClose: F } = (0, I.Db)(),
            { categories: D, refreshCategories: M } = (0, x.ZP)(
                {
                    location: 'CollectiblesShop.web',
                    logPerf: !0
                },
                {
                    sessionId: o,
                    tab: n,
                    isFullScreen: t
                }
            );
        (0, m.P)();
        let H = (0, y.O)(D),
            [W, V] = l.useState(),
            U = (0, s.e7)([E.Z], () => {
                var e;
                return null == (e = E.Z.getCategory(W)) ? void 0 : e.name;
            }),
            [G, z] = l.useState(),
            q = l.useCallback((e, t) => {
                (z(e), V(t));
            }, []),
            { selectedTab: Y, transitionState: K, transitionToTab: X } = (0, j.B)(A, n, t),
            { handleScroll: Q } = (0, f.z)(A, o, Y);
        ((0, S.q3)(o, Y, U, K, G),
            (0, S.EB)(Y, c),
            (0, k.Z)(),
            l.useEffect(() => {
                t || (0, d.Y)(B.Z5c.COLLECTIBLES_SHOP);
            }, [t]));
        let J = (0, s.e7)([C.Z], () => C.Z.getLayers().includes(B.S9g.COLLECTIBLES_SHOP)),
            $ = l.useRef(null),
            ee = l.useRef(null);
        (0, u.Tbt)($);
        let { setFullScreenOpen: et, fullScreenOpen: en } = (0, T.S)();
        l.useEffect(() => {
            if (t) return (et(!0), () => et(!1));
            if (!t) {
                var e;
                null == (e = ee.current) || e.focus();
            }
        }, [t, et]);
        let { analyticsLocations: er } = (0, S.MV)(Y);
        return en && !t
            ? null
            : (0, r.jsx)(g.Gt, {
                  value: er,
                  children: (0, r.jsx)(v.k0, {
                      newValue: {
                          sessionId: o,
                          pageCategory: U,
                          pageSize: N.kN
                      },
                      children: (0, r.jsx)(w, {
                          onClose: F,
                          shouldAddEventListener: t && !J,
                          children: (0, r.jsx)('div', {
                              className: R.shop,
                              ref: t ? $ : ee,
                              tabIndex: -1,
                              children: (0, r.jsx)(u.Den, {
                                  className: R.shopScroll,
                                  ref: A,
                                  onScroll: Q,
                                  children: (0, r.jsxs)('div', {
                                      className: a()(R.shopViewWrapper, {
                                          [R.visible]: K === N.f7.VISIBLE,
                                          [R.in]: K === N.f7.IN,
                                          [R.out]: K === N.f7.OUT
                                      }),
                                      children: [
                                          (0, r.jsx)(L.I, {
                                              isFullScreen: t,
                                              isLayer: J,
                                              onClose: F,
                                              handleTransition: X,
                                              selectedTab: Y
                                          }),
                                          (0, r.jsx)(P.Z, {
                                              tab: Y,
                                              isFullScreen: t,
                                              scrollerRef: A,
                                              refreshCategories: M,
                                              transitionToTab: X,
                                              transitionState: K,
                                              sortedCategories: H,
                                              updateAnalyticsState: q
                                          })
                                      ]
                                  })
                              })
                          })
                      })
                  })
              });
    };
