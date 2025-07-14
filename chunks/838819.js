(n.r(t), n.d(t, { default: () => D }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(772848),
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
    L = n(426171),
    k = n(963102),
    I = n(508498),
    B = n(849217),
    N = n(215023),
    A = n(981631),
    w = n(420212),
    R = n(484920);
let Z = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            o = (0, c.f9)();
        return (
            l.useEffect(() => {
                if (!n || o) return;
                let e = (e) => {
                    e.key === w.mR.Escape && r();
                };
                return (window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e));
            }, [n, o, r]),
            t
        );
    },
    D = function (e) {
        let { isFullScreen: t = !0, tab: n = N.AW.HOME } = e;
        (0, b.z)(h.f);
        let o = (0, p.Z)((0, a.Z)()),
            c = (0, s.e7)([O.default], () => O.default.getCurrentUser()),
            w = l.useRef(null),
            { closeIntroToOrbsClaimedCoachmark: D } = (0, _.Z)({ location: 'CollectiblesShop' });
        l.useEffect(
            () => () => {
                D();
            },
            [o, D]
        );
        let { onClose: F } = (0, I.Db)(),
            { categories: M, refreshCategories: H } = (0, x.ZP)(
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
        let W = (0, y.O)(M),
            [V, U] = l.useState(),
            z = (0, s.e7)([E.Z], () => {
                var e;
                return null == (e = E.Z.getCategory(V)) ? void 0 : e.name;
            }),
            [G, q] = l.useState();
        (0, L.Kp)();
        let Y = l.useCallback((e, t) => {
                (q(e), U(t));
            }, []),
            { selectedTab: K, transitionState: X, transitionToTab: J } = (0, j.B)(w, n, t),
            { handleScroll: Q } = (0, f.z)(w, o, K);
        ((0, S.q3)(o, K, z, X, G),
            (0, S.EB)(K, c),
            (0, B.Z)(),
            l.useEffect(() => {
                t || (0, d.Y)(A.Z5c.COLLECTIBLES_SHOP);
            }, [t]));
        let $ = (0, s.e7)([C.Z], () => C.Z.getLayers().includes(A.S9g.COLLECTIBLES_SHOP)),
            ee = l.useRef(null),
            et = l.useRef(null);
        (0, u.Tbt)(ee);
        let { setFullScreenOpen: en, fullScreenOpen: er } = (0, T.S)();
        l.useEffect(() => {
            if (t) return (en(!0), () => en(!1));
            if (!t) {
                var e;
                null == (e = et.current) || e.focus();
            }
        }, [t, en]);
        let { analyticsLocations: el } = (0, S.MV)(K);
        return er && !t
            ? null
            : (0, r.jsx)(g.Gt, {
                  value: el,
                  children: (0, r.jsx)(v.k0, {
                      newValue: {
                          sessionId: o,
                          pageCategory: z,
                          pageSize: N.kN
                      },
                      children: (0, r.jsx)(Z, {
                          onClose: F,
                          shouldAddEventListener: t && !$,
                          children: (0, r.jsx)('div', {
                              className: R.shop,
                              ref: t ? ee : et,
                              tabIndex: -1,
                              children: (0, r.jsx)(u.Den, {
                                  className: R.shopScroll,
                                  ref: w,
                                  onScroll: Q,
                                  children: (0, r.jsxs)('div', {
                                      className: i()(R.shopViewWrapper, {
                                          [R.visible]: X === N.f7.VISIBLE,
                                          [R.in]: X === N.f7.IN,
                                          [R.out]: X === N.f7.OUT
                                      }),
                                      children: [
                                          (0, r.jsx)(k.I, {
                                              isFullScreen: t,
                                              isLayer: $,
                                              onClose: F,
                                              handleTransition: J,
                                              selectedTab: K
                                          }),
                                          (0, r.jsx)(P.Z, {
                                              tab: K,
                                              isFullScreen: t,
                                              scrollerRef: w,
                                              refreshCategories: H,
                                              transitionToTab: J,
                                              transitionState: X,
                                              sortedCategories: W,
                                              updateAnalyticsState: Y
                                          })
                                      ]
                                  })
                              })
                          })
                      })
                  })
              });
    };
