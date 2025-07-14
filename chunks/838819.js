(r.r(t), r.d(t, { default: () => D }), r(388685));
var n = r(255367),
    l = r(73800),
    o = r(120356),
    i = r.n(o),
    a = r(772848),
    s = r(399606),
    c = r(952265),
    u = r(481060),
    d = r(150063),
    p = r(211266),
    g = r(906732),
    f = r(702486),
    h = r(977395),
    b = r(214852),
    m = r(290026),
    _ = r(511050),
    C = r(819640),
    O = r(594174),
    v = r(381585),
    E = r(597688),
    S = r(780475),
    y = r(223143),
    x = r(298228),
    j = r(309956),
    T = r(501431),
    P = r(98535),
    L = r(426171),
    k = r(963102),
    I = r(508498),
    B = r(849217),
    N = r(215023),
    A = r(981631),
    w = r(420212),
    R = r(484920);
let Z = (e) => {
        let { children: t, shouldAddEventListener: r, onClose: n } = e,
            o = (0, c.f9)();
        return (
            l.useEffect(() => {
                if (!r || o) return;
                let e = (e) => {
                    e.key === w.mR.Escape && n();
                };
                return (window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e));
            }, [r, o, n]),
            t
        );
    },
    D = function (e) {
        let { isFullScreen: t = !0, tab: r = N.AW.HOME } = e;
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
            { categories: M, refreshCategories: H } = (0, y.ZP)(
                {
                    location: 'CollectiblesShop.web',
                    logPerf: !0
                },
                {
                    sessionId: o,
                    tab: r,
                    isFullScreen: t
                }
            );
        (0, m.P)();
        let W = (0, x.O)(M),
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
            { selectedTab: K, transitionState: X, transitionToTab: J } = (0, j.B)(w, r, t),
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
        let { setFullScreenOpen: er, fullScreenOpen: en } = (0, T.S)();
        l.useEffect(() => {
            if (t) return (er(!0), () => er(!1));
            if (!t) {
                var e;
                null == (e = et.current) || e.focus();
            }
        }, [t, er]);
        let { analyticsLocations: el } = (0, S.MV)(K);
        return en && !t
            ? null
            : (0, n.jsx)(g.Gt, {
                  value: el,
                  children: (0, n.jsx)(v.k0, {
                      newValue: {
                          sessionId: o,
                          pageCategory: z,
                          pageSize: N.kN
                      },
                      children: (0, n.jsx)(Z, {
                          onClose: F,
                          shouldAddEventListener: t && !$,
                          children: (0, n.jsx)('div', {
                              className: R.shop,
                              ref: t ? ee : et,
                              tabIndex: -1,
                              children: (0, n.jsx)(u.Den, {
                                  className: R.shopScroll,
                                  ref: w,
                                  onScroll: Q,
                                  children: (0, n.jsxs)('div', {
                                      className: i()(R.shopViewWrapper, {
                                          [R.visible]: X === N.f7.VISIBLE,
                                          [R.in]: X === N.f7.IN,
                                          [R.out]: X === N.f7.OUT
                                      }),
                                      children: [
                                          (0, n.jsx)(k.I, {
                                              isFullScreen: t,
                                              isLayer: $,
                                              onClose: F,
                                              handleTransition: J,
                                              selectedTab: K
                                          }),
                                          (0, n.jsx)(P.Z, {
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
