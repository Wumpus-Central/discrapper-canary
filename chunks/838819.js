n.r(t), n.d(t, { default: () => F }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    i = n(772848),
    o = n(399606),
    c = n(952265),
    u = n(481060),
    d = n(150063),
    g = n(211266),
    p = n(906732),
    f = n(977395),
    m = n(214852),
    _ = n(819640),
    h = n(594174),
    b = n(381585),
    C = n(597688),
    E = n(780475),
    S = n(223143),
    O = n(298228),
    v = n(309956),
    x = n(908430),
    y = n(501431),
    T = n(98535),
    L = n(426171),
    j = n(963102),
    k = n(508498),
    I = n(681435),
    B = n(642909),
    N = n(215023),
    P = n(981631),
    A = n(420212),
    R = n(887353),
    Z = n(345213);
let w = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            a = (0, c.f9)();
        return (
            l.useEffect(() => {
                if (!n || a) return;
                let e = (e) => {
                    e.key === A.mR.Escape && r();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [n, a, r]),
            t
        );
    },
    F = function (e) {
        let { isFullScreen: t = !0, tab: n = N.AW.HOME } = e;
        (0, m.z)(f.f), (0, x.f)();
        let a = (0, g.Z)((0, i.Z)()),
            c = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
            A = (0, B.G)("CollectiblesShop"),
            { onClose: F } = (0, k.Db)(),
            { currentTab: M, hasFilters: D } = (0, y.S)(),
            H = l.useMemo(() => (n === N.AW.HOME && M && D() ? M : n), [n, M, D]),
            { categories: W, refreshCategories: U } = (0, S.ZP)(
                { logPerf: !0 },
                {
                    sessionId: a,
                    tab: H,
                    isFullScreen: t,
                },
            ),
            V = (0, O.O)(W),
            [z, G] = l.useState(),
            q = (0, o.e7)([C.Z], () => {
                var e;
                return null == (e = C.Z.getCategory(z)) ? void 0 : e.name;
            }),
            [K, Y] = l.useState();
        (0, L.Kp)();
        let X = l.useCallback((e, t) => {
                Y(e), G(t);
            }, []),
            { selectedTab: Q, transitionState: J, transitionToTab: $ } = (0, v.B)(H, t);
        (0, E.q3)(a, Q, q, J, K), (0, E.EB)(Q, c);
        let { dismissShopButtonDC: ee } = (0, I.Z)();
        l.useEffect(() => {
            ee();
        }, [ee]),
            l.useEffect(() => {
                t || (0, d.Y)(P.Z5c.COLLECTIBLES_SHOP);
            }, [t]);
        let et = (0, o.e7)([_.Z], () => _.Z.getLayers().includes(P.S9g.COLLECTIBLES_SHOP)),
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
            : (0, r.jsx)(p.Gt, {
                  value: es,
                  children: (0, r.jsx)(b.k0, {
                      newValue: {
                          sessionId: a,
                          pageCategory: q,
                          pageSize: N.kN,
                      },
                      children: (0, r.jsx)(w, {
                          onClose: F,
                          shouldAddEventListener: t && !et,
                          children: (0, r.jsxs)("div", {
                              className: s()(R.shop, { [Z.shopTakeOver]: A }),
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
