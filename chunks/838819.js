r.r(t), r.d(t, { default: () => D }), r(388685);
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
    f = r(906732),
    g = r(977395),
    b = r(214852),
    h = r(238359),
    m = r(511050),
    _ = r(819640),
    v = r(594174),
    C = r(381585),
    O = r(597688),
    E = r(780475),
    S = r(223143),
    y = r(298228),
    x = r(309956),
    j = r(501431),
    T = r(98535),
    P = r(426171),
    L = r(963102),
    k = r(508498),
    I = r(991589),
    N = r(681435),
    A = r(215023),
    w = r(981631),
    B = r(420212),
    R = r(484920);
let Z = (e) => {
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
    D = function (e) {
        let { isFullScreen: t = !0, tab: r = A.AW.HOME } = e;
        (0, b.z)(g.f);
        let a = (0, p.Z)((0, o.Z)()),
            c = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
            { closeIntroToOrbsClaimedCoachmark: B } = (0, m.Z)({ location: "CollectiblesShop" });
        l.useEffect(
            () => () => {
                B();
            },
            [a, B],
        );
        let { onClose: D } = (0, k.Db)(),
            { currentTab: F, hasFilters: M } = (0, j.S)(),
            H = l.useMemo(() => (r === A.AW.HOME && F && M() ? F : r), [r, F, M]),
            { categories: W, refreshCategories: V } = (0, S.ZP)(
                {
                    location: "CollectiblesShop.web",
                    logPerf: !0,
                },
                {
                    sessionId: a,
                    tab: H,
                    isFullScreen: t,
                },
            );
        (0, h.D)();
        let U = (0, y.O)(W),
            [z, G] = l.useState(),
            q = (0, s.e7)([O.Z], () => {
                var e;
                return null == (e = O.Z.getCategory(z)) ? void 0 : e.name;
            }),
            [K, Y] = l.useState();
        (0, P.Kp)();
        let X = l.useCallback((e, t) => {
                Y(e), G(t);
            }, []),
            { selectedTab: J, transitionState: Q, transitionToTab: $ } = (0, x.B)(H, t);
        (0, E.q3)(a, J, q, Q, K), (0, E.EB)(J, c);
        let { dismissShopButtonDC: ee } = (0, N.Z)();
        l.useEffect(() => {
            ee();
        }, [ee]),
            l.useEffect(() => {
                t || (0, d.Y)(w.Z5c.COLLECTIBLES_SHOP);
            }, [t]);
        let et = (0, s.e7)([_.Z], () => _.Z.getLayers().includes(w.S9g.COLLECTIBLES_SHOP)),
            er = l.useRef(null),
            en = l.useRef(null);
        (0, u.Tbt)(er);
        let { setFullScreenOpen: el, fullScreenOpen: ea } = (0, j.S)();
        l.useEffect(() => {
            if (t) return el(!0), () => el(!1);
            if (!t) {
                var e;
                null == (e = en.current) || e.focus();
            }
        }, [t, el]);
        let { analyticsLocations: ei } = (0, E.MV)(J);
        return ea && !t
            ? null
            : (0, n.jsx)(I.r, {
                  children: (0, n.jsx)(f.Gt, {
                      value: ei,
                      children: (0, n.jsx)(C.k0, {
                          newValue: {
                              sessionId: a,
                              pageCategory: q,
                              pageSize: A.kN,
                          },
                          children: (0, n.jsx)(Z, {
                              onClose: D,
                              shouldAddEventListener: t && !et,
                              children: (0, n.jsxs)("div", {
                                  className: R.shop,
                                  ref: t ? er : en,
                                  tabIndex: -1,
                                  children: [
                                      (0, n.jsx)(L.I, {
                                          isFullScreen: t,
                                          isLayer: et,
                                          onClose: D,
                                          handleTransition: $,
                                          selectedTab: J,
                                      }),
                                      (0, n.jsx)("div", {
                                          className: i()(R.shopViewWrapper, {
                                              [R.visible]: Q === A.f7.VISIBLE,
                                              [R.in]: Q === A.f7.IN,
                                              [R.out]: Q === A.f7.OUT,
                                          }),
                                          children: (0, n.jsx)(T.Z, {
                                              tab: J,
                                              isFullScreen: t,
                                              refreshCategories: V,
                                              transitionToTab: $,
                                              transitionState: Q,
                                              sortedCategories: U,
                                              updateAnalyticsState: X,
                                          }),
                                      }),
                                  ],
                              }),
                          }),
                      }),
                  }),
              });
    };
