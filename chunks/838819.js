n.r(t), n.d(t, { default: () => F }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    o = n(772848),
    i = n(399606),
    c = n(952265),
    u = n(481060),
    d = n(150063),
    g = n(211266),
    f = n(906732),
    p = n(977395),
    m = n(214852),
    h = n(819640),
    _ = n(594174),
    C = n(381585),
    b = n(597688),
    E = n(780475),
    S = n(223143),
    O = n(298228),
    v = n(908430),
    x = n(99767),
    y = n(501431),
    T = n(98535),
    L = n(426171),
    j = n(963102),
    k = n(508498),
    B = n(681435),
    I = n(642909),
    N = n(215023),
    A = n(981631),
    P = n(420212),
    R = n(887353),
    Z = n(345213);
let w = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            a = (0, c.f9)();
        return (
            l.useEffect(() => {
                if (!n || a) return;
                let e = (e) => {
                    e.key === P.mR.Escape && r();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [n, a, r]),
            t
        );
    },
    F = function (e) {
        let { isFullScreen: t = !0, tab: n = N.AW.HOME } = e;
        (0, m.z)(p.f), (0, v.f)();
        let a = (0, g.Z)((0, o.Z)()),
            c = (0, i.e7)([_.default], () => _.default.getCurrentUser()),
            P = (0, I.G)("CollectiblesShop"),
            { onClose: F } = (0, k.Db)(),
            { currentTab: H, hasFilters: D } = (0, y.S)(),
            M = l.useMemo(() => (n === N.AW.HOME && H && D() ? H : n), [n, H, D]),
            { categories: W, refreshCategories: U } = (0, S.ZP)(
                { logPerf: !0 },
                {
                    sessionId: a,
                    tab: M,
                    isFullScreen: t,
                },
            ),
            V = (0, O.O)(W),
            [z, G] = l.useState(),
            q = (0, i.e7)([b.Z], () => {
                var e;
                return null == (e = b.Z.getCategory(z)) ? void 0 : e.name;
            }),
            [K, Y] = l.useState();
        (0, L.Kp)();
        let X = l.useCallback((e, t) => {
                Y(e), G(t);
            }, []),
            { selectedTab: Q, transitionState: J, transitionToTab: $ } = (0, x.B)(M, t);
        (0, E.q3)(a, Q, q, J, K), (0, E.EB)(Q, c);
        let { dismissShopButtonDC: ee } = (0, B.Z)();
        l.useEffect(() => {
            ee();
        }, [ee]),
            l.useEffect(() => {
                t || (0, d.Y)(A.Z5c.COLLECTIBLES_SHOP);
            }, [t]);
        let et = (0, i.e7)([h.Z], () => h.Z.getLayers().includes(A.S9g.COLLECTIBLES_SHOP)),
            en = l.useRef(null),
            er = l.useRef(null);
        (0, u.Tbt)(en);
        let { setFullScreenOpen: el, fullScreenOpen: ea } = (0, y.S)();
        l.useEffect(() => {
            if (t) return el(!0), () => el(!1);
            if (!t) {
                var e;
                null == (e = er.current) || e.focus();
            }
        }, [t, el]);
        let { analyticsLocations: es } = (0, E.MV)(Q);
        return ea && !t
            ? null
            : (0, r.jsx)(f.Gt, {
                  value: es,
                  children: (0, r.jsx)(C.k0, {
                      newValue: {
                          sessionId: a,
                          pageCategory: q,
                          pageSize: N.kN,
                      },
                      children: (0, r.jsx)(w, {
                          onClose: F,
                          shouldAddEventListener: t && !et,
                          children: (0, r.jsxs)("div", {
                              className: s()(R.shop, { [Z.shopTakeOver]: P }),
                              ref: t ? en : er,
                              tabIndex: -1,
                              children: [
                                  (0, r.jsx)(j.I, {
                                      isFullScreen: t,
                                      isLayer: et,
                                      onClose: F,
                                      handleTransition: $,
                                      selectedTab: Q,
                                  }),
                                  (0, r.jsx)("div", {
                                      className: s()(R.shopViewWrapper, {
                                          [R.visible]: J === N.f7.VISIBLE,
                                          [R.in]: J === N.f7.IN,
                                          [R.out]: J === N.f7.OUT,
                                      }),
                                      children: (0, r.jsx)(T.Z, {
                                          tab: Q,
                                          isFullScreen: t,
                                          refreshCategories: U,
                                          transitionToTab: $,
                                          transitionState: J,
                                          sortedCategories: V,
                                          updateAnalyticsState: X,
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  }),
              });
    };
