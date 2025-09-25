n.r(t), n.d(t, { default: () => M }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(772848),
    o = n(399606),
    c = n(952265),
    u = n(481060),
    d = n(150063),
    g = n(211266),
    p = n(906732),
    f = n(977395),
    h = n(214852),
    C = n(819640),
    _ = n(594174),
    m = n(381585),
    b = n(597688),
    E = n(994587),
    S = n(780475),
    v = n(223143),
    x = n(298228),
    O = n(908430),
    T = n(99767),
    y = n(501431),
    L = n(98535),
    j = n(426171),
    k = n(963102),
    I = n(508498),
    P = n(681435),
    N = n(642909),
    A = n(215023),
    B = n(981631),
    R = n(295907),
    Z = n(887353),
    w = n(345213);
let F = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            i = (0, c.f9)();
        return (
            l.useEffect(() => {
                if (!n || i) return;
                let e = (e) => {
                    e.key === R.mR.Escape && r();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [n, i, r]),
            t
        );
    },
    M = function (e) {
        let { isFullScreen: t = !0, tab: n = A.AW.HOME } = e;
        (0, h.z)(f.f), (0, O.f)();
        let i = (0, g.Z)((0, s.Z)()),
            c = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
            R = (0, N.G)("CollectiblesShop"),
            { onClose: M } = (0, I.Db)(),
            { currentTab: H, hasFilters: D } = (0, y.S)(),
            W = l.useMemo(() => (n === A.AW.HOME && H && D() ? H : n), [n, H, D]),
            { categories: U, refreshCategories: V } = (0, v.ZP)(
                { logPerf: !0 },
                {
                    sessionId: i,
                    tab: W,
                    isFullScreen: t,
                },
            ),
            z = (0, x.O)(U),
            [G, q] = l.useState(),
            K = (0, o.e7)([b.Z], () => {
                var e;
                return null == (e = b.Z.getCategory(G)) ? void 0 : e.name;
            }),
            [Y, X] = l.useState();
        (0, j.Kp)();
        let Q = l.useCallback((e, t) => {
                X(e), q(t);
            }, []),
            { selectedTab: J, transitionState: $, transitionToTab: ee } = (0, T.B)(W, t);
        (0, S.q3)(i, J, K, $, Y), (0, S.EB)(J, c);
        let { dismissShopButtonDC: et } = (0, P.Z)();
        l.useEffect(() => {
            et();
        }, [et]),
            l.useEffect(() => {
                t || (0, d.Y)(B.Z5c.COLLECTIBLES_SHOP);
            }, [t]);
        let en = (0, o.e7)([C.Z], () => C.Z.getLayers().includes(B.S9g.COLLECTIBLES_SHOP)),
            er = l.useRef(null),
            el = l.useRef(null);
        (0, u.Tbt)(er);
        let { setFullScreenOpen: ei, fullScreenOpen: ea } = (0, y.S)();
        l.useEffect(() => {
            if (t) return ei(!0), () => ei(!1);
            if (!t) {
                var e;
                null == (e = el.current) || e.focus();
            }
        }, [t, ei]);
        let { analyticsLocations: es } = (0, S.MV)(J);
        return ea && !t
            ? null
            : (0, r.jsx)(p.Gt, {
                  value: es,
                  children: (0, r.jsx)(m.k0, {
                      newValue: {
                          sessionId: i,
                          pageCategory: K,
                          pageSize: A.kN,
                      },
                      children: (0, r.jsx)(E.ni, {
                          tab: J,
                          children: (0, r.jsx)(F, {
                              onClose: M,
                              shouldAddEventListener: t && !en,
                              children: (0, r.jsxs)("div", {
                                  className: a()(Z.shop, { [w.shopTakeOver]: R }),
                                  ref: t ? er : el,
                                  tabIndex: -1,
                                  children: [
                                      (0, r.jsx)(k.I, {
                                          isFullScreen: t,
                                          isLayer: en,
                                          onClose: M,
                                          handleTransition: ee,
                                          selectedTab: J,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: a()(Z.shopViewWrapper, {
                                              [Z.visible]: $ === A.f7.VISIBLE,
                                              [Z.in]: $ === A.f7.IN,
                                              [Z.out]: $ === A.f7.OUT,
                                          }),
                                          children: (0, r.jsx)(L.Z, {
                                              tab: J,
                                              isFullScreen: t,
                                              refreshCategories: V,
                                              transitionToTab: ee,
                                              transitionState: $,
                                              sortedCategories: z,
                                              updateAnalyticsState: Q,
                                          }),
                                      }),
                                  ],
                              }),
                          }),
                      }),
                  }),
              });
    };
