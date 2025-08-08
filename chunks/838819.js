n.r(t), n.d(t, { default: () => D }), n(388685);
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(772848),
    s = n(399606),
    c = n(952265),
    u = n(481060),
    d = n(150063),
    p = n(211266),
    g = n(906732),
    f = n(977395),
    b = n(214852),
    h = n(238359),
    m = n(511050),
    _ = n(819640),
    v = n(594174),
    C = n(381585),
    O = n(597688),
    E = n(780475),
    S = n(223143),
    y = n(298228),
    x = n(309956),
    j = n(501431),
    T = n(98535),
    P = n(426171),
    L = n(963102),
    I = n(508498),
    k = n(991589),
    N = n(681435),
    A = n(215023),
    w = n(981631),
    B = n(420212),
    R = n(484920);
let Z = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            a = (0, c.f9)();
        return (
            l.useEffect(() => {
                if (!n || a) return;
                let e = (e) => {
                    e.key === B.mR.Escape && r();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [n, a, r]),
            t
        );
    },
    D = function (e) {
        let { isFullScreen: t = !0, tab: n = A.AW.HOME } = e;
        (0, b.z)(f.f);
        let a = (0, p.Z)((0, o.Z)()),
            c = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
            { closeIntroToOrbsClaimedCoachmark: B } = (0, m.Z)({ location: "CollectiblesShop" });
        l.useEffect(
            () => () => {
                B();
            },
            [a, B],
        );
        let { onClose: D } = (0, I.Db)(),
            { currentTab: F, hasFilters: M } = (0, j.S)(),
            H = l.useMemo(() => (n === A.AW.HOME && F && M() ? F : n), [n, F, M]),
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
            en = l.useRef(null),
            er = l.useRef(null);
        (0, u.Tbt)(en);
        let { setFullScreenOpen: el, fullScreenOpen: ea } = (0, j.S)();
        l.useEffect(() => {
            if (t) return el(!0), () => el(!1);
            if (!t) {
                var e;
                null == (e = er.current) || e.focus();
            }
        }, [t, el]);
        let { analyticsLocations: ei } = (0, E.MV)(J);
        return ea && !t
            ? null
            : (0, r.jsx)(k.r, {
                  children: (0, r.jsx)(g.Gt, {
                      value: ei,
                      children: (0, r.jsx)(C.k0, {
                          newValue: {
                              sessionId: a,
                              pageCategory: q,
                              pageSize: A.kN,
                          },
                          children: (0, r.jsx)(Z, {
                              onClose: D,
                              shouldAddEventListener: t && !et,
                              children: (0, r.jsxs)("div", {
                                  className: R.shop,
                                  ref: t ? en : er,
                                  tabIndex: -1,
                                  children: [
                                      (0, r.jsx)(L.I, {
                                          isFullScreen: t,
                                          isLayer: et,
                                          onClose: D,
                                          handleTransition: $,
                                          selectedTab: J,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: i()(R.shopViewWrapper, {
                                              [R.visible]: Q === A.f7.VISIBLE,
                                              [R.in]: Q === A.f7.IN,
                                              [R.out]: Q === A.f7.OUT,
                                          }),
                                          children: (0, r.jsx)(T.Z, {
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
