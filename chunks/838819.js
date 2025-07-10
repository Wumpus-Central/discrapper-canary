(n.r(t), n.d(t, { default: () => F }), n(388685));
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
    L = n(426171),
    I = n(963102),
    k = n(508498),
    N = n(849217),
    B = n(215023),
    A = n(981631),
    R = n(420212),
    w = n(484920);
let Z = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            o = (0, c.f9)();
        return (
            l.useEffect(() => {
                if (!n || o) return;
                let e = (e) => {
                    e.key === R.mR.Escape && r();
                };
                return (window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e));
            }, [n, o, r]),
            t
        );
    },
    F = function (e) {
        let { isFullScreen: t = !0, tab: n = B.AW.HOME } = e;
        (0, b.z)(h.f);
        let o = (0, p.Z)((0, i.Z)()),
            c = (0, s.e7)([O.default], () => O.default.getCurrentUser()),
            R = l.useRef(null),
            { closeIntroToOrbsClaimedCoachmark: F } = (0, _.Z)({ location: 'CollectiblesShop' });
        l.useEffect(
            () => () => {
                F();
            },
            [o, F]
        );
        let { onClose: D } = (0, k.Db)(),
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
            G = (0, s.e7)([E.Z], () => {
                var e;
                return null == (e = E.Z.getCategory(V)) ? void 0 : e.name;
            }),
            [z, q] = l.useState();
        (0, L.Kp)();
        let Y = l.useCallback((e, t) => {
                (q(e), U(t));
            }, []),
            { selectedTab: K, transitionState: X, transitionToTab: Q } = (0, j.B)(R, n, t),
            { handleScroll: J } = (0, f.z)(R, o, K);
        ((0, S.q3)(o, K, G, X, z),
            (0, S.EB)(K, c),
            (0, N.Z)(),
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
                          pageCategory: G,
                          pageSize: B.kN
                      },
                      children: (0, r.jsx)(Z, {
                          onClose: D,
                          shouldAddEventListener: t && !$,
                          children: (0, r.jsx)('div', {
                              className: w.shop,
                              ref: t ? ee : et,
                              tabIndex: -1,
                              children: (0, r.jsx)(u.Den, {
                                  className: w.shopScroll,
                                  ref: R,
                                  onScroll: J,
                                  children: (0, r.jsxs)('div', {
                                      className: a()(w.shopViewWrapper, {
                                          [w.visible]: X === B.f7.VISIBLE,
                                          [w.in]: X === B.f7.IN,
                                          [w.out]: X === B.f7.OUT
                                      }),
                                      children: [
                                          (0, r.jsx)(I.I, {
                                              isFullScreen: t,
                                              isLayer: $,
                                              onClose: D,
                                              handleTransition: Q,
                                              selectedTab: K
                                          }),
                                          (0, r.jsx)(P.Z, {
                                              tab: K,
                                              isFullScreen: t,
                                              scrollerRef: R,
                                              refreshCategories: H,
                                              transitionToTab: Q,
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
