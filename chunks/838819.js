n.r(t), n.d(t, { default: () => H }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(772848),
    s = n(399606),
    c = n(952265),
    u = n(481060),
    d = n(150063),
    f = n(211266),
    g = n(906732),
    p = n(977395),
    m = n(214852),
    h = n(602733),
    C = n(594174),
    _ = n(381585),
    b = n(597688),
    v = n(994587),
    x = n(780475),
    E = n(223143),
    O = n(298228),
    S = n(908430),
    y = n(99767),
    j = n(501431),
    k = n(98535),
    I = n(426171),
    T = n(963102),
    L = n(508498),
    P = n(681435),
    B = n(811847),
    N = n(215023),
    A = n(981631),
    R = n(295907),
    Z = n(887353),
    w = n(219588);
let D = (e) => {
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
    H = function (e) {
        let { tab: t = N.AW.HOME } = e;
        (0, m.z)(p.f), (0, S.f)();
        let n = (0, f.Z)((0, o.Z)()),
            i = (0, s.e7)([C.default], () => C.default.getCurrentUser());
        (0, h.p2)();
        let c = (0, B.B)("CollectiblesShop"),
            { onClose: R } = (0, L.Db)(),
            { currentTab: H, hasFilters: M } = (0, j.S)(),
            F = l.useMemo(() => (t === N.AW.HOME && H && M() ? H : t), [t, H, M]),
            { categories: W, refreshCategories: V } = (0, E.ZP)(
                { logPerf: !0 },
                {
                    sessionId: n,
                    tab: F,
                },
            ),
            U = (0, O.O)(W),
            [z, G] = l.useState(),
            K = (0, s.e7)([b.Z], () => {
                var e;
                return null == (e = b.Z.getCategory(z)) ? void 0 : e.name;
            }),
            [Y, q] = l.useState();
        (0, I.Kp)();
        let J = l.useCallback((e, t) => {
                q(e), G(t);
            }, []),
            { selectedTab: Q, transitionState: X, transitionToTab: $ } = (0, y.B)(F);
        (0, x.q3)(n, Q, K, X, Y), (0, x.EB)(Q, i);
        let { dismissShopButtonDC: ee } = (0, P.Z)();
        l.useEffect(() => {
            ee();
        }, [ee]),
            l.useEffect(() => {
                (0, d.Y)(A.Z5c.COLLECTIBLES_SHOP);
            }, []);
        let et = l.useRef(null),
            en = l.useRef(null);
        (0, u.Tbt)(et),
            l.useEffect(() => {
                var e;
                null == (e = en.current) || e.focus();
            }, []);
        let { analyticsLocations: er } = (0, x.MV)(Q);
        return (0, r.jsx)(g.Gt, {
            value: er,
            children: (0, r.jsx)(_.k0, {
                newValue: {
                    sessionId: n,
                    pageCategory: K,
                    pageSize: N.kN,
                },
                children: (0, r.jsx)(v.ni, {
                    tab: Q,
                    children: (0, r.jsx)(D, {
                        onClose: R,
                        shouldAddEventListener: !1,
                        children: (0, r.jsxs)("div", {
                            className: a()(Z.shop, { [w.customCursors]: c }),
                            ref: en,
                            tabIndex: -1,
                            children: [
                                (0, r.jsx)(T.I, {
                                    handleTransition: $,
                                    selectedTab: Q,
                                }),
                                (0, r.jsx)("div", {
                                    className: a()(Z.shopViewWrapper, {
                                        [Z.visible]: X === N.f7.VISIBLE,
                                        [Z.in]: X === N.f7.IN,
                                        [Z.out]: X === N.f7.OUT,
                                    }),
                                    children: (0, r.jsx)(k.Z, {
                                        tab: Q,
                                        refreshCategories: V,
                                        transitionToTab: $,
                                        transitionState: X,
                                        sortedCategories: U,
                                        updateAnalyticsState: J,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
            }),
        });
    };
