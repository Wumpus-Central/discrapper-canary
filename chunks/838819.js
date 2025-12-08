n.r(t), n.d(t, { default: () => D }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    s = n.n(i),
    o = n(772848),
    a = n(399606),
    c = n(952265),
    u = n(481060),
    d = n(150063),
    g = n(211266),
    f = n(906732),
    p = n(977395),
    m = n(214852),
    C = n(602733),
    h = n(594174),
    _ = n(381585),
    b = n(597688),
    E = n(994587),
    v = n(780475),
    S = n(223143),
    O = n(298228),
    x = n(908430),
    y = n(99767),
    k = n(501431),
    T = n(98535),
    j = n(426171),
    I = n(963102),
    L = n(508498),
    B = n(681435),
    N = n(811847),
    A = n(215023),
    P = n(981631),
    R = n(295907),
    Z = n(887353),
    w = n(219588);
let H = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            i = (0, c.useHasAnyModalOpen)();
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
    D = function (e) {
        let { tab: t = A.AW.HOME } = e;
        (0, m.z)(p.f), (0, x.f)();
        let n = (0, g.Z)((0, o.Z)()),
            i = (0, a.e7)([h.default], () => h.default.getCurrentUser());
        (0, C.p2)();
        let c = (0, N.B)("CollectiblesShop"),
            { onClose: R } = (0, L.Db)(),
            { currentTab: D, hasFilters: M } = (0, k.S)(),
            F = l.useMemo(() => (t === A.AW.HOME && D && M() ? D : t), [t, D, M]),
            { categories: W, refreshCategories: U } = (0, S.ZP)(
                { logPerf: !0 },
                {
                    sessionId: n,
                    tab: F,
                },
            ),
            V = (0, O.O)(W),
            [z, G] = l.useState(),
            K = (0, a.e7)([b.Z], () => {
                var e;
                return null == (e = b.Z.getCategory(z)) ? void 0 : e.name;
            }),
            [Y, q] = l.useState();
        (0, j.Kp)();
        let Q = l.useCallback((e, t) => {
                q(e), G(t);
            }, []),
            { selectedTab: J, transitionState: X, transitionToTab: $ } = (0, y.B)(F);
        (0, v.q3)(n, J, K, X, Y), (0, v.EB)(J, i);
        let { dismissShopButtonDC: ee } = (0, B.Z)();
        l.useEffect(() => {
            ee();
        }, [ee]),
            l.useEffect(() => {
                (0, d.Y)(P.Z5c.COLLECTIBLES_SHOP);
            }, []);
        let et = l.useRef(null),
            en = l.useRef(null);
        (0, u.Tbt)(et),
            l.useEffect(() => {
                var e;
                null == (e = en.current) || e.focus();
            }, []);
        let { analyticsLocations: er } = (0, v.MV)(J);
        return (0, r.jsx)(f.Gt, {
            value: er,
            children: (0, r.jsx)(_.k0, {
                newValue: {
                    sessionId: n,
                    pageCategory: K,
                    pageSize: A.kN,
                },
                children: (0, r.jsx)(E.ni, {
                    tab: J,
                    children: (0, r.jsx)(H, {
                        onClose: R,
                        shouldAddEventListener: !1,
                        children: (0, r.jsxs)("div", {
                            className: s()(Z.shop, { [w.customCursors]: c }),
                            ref: en,
                            tabIndex: -1,
                            children: [
                                (0, r.jsx)(I.I, {
                                    handleTransition: $,
                                    selectedTab: J,
                                }),
                                (0, r.jsx)("div", {
                                    className: s()(Z.shopViewWrapper, {
                                        [Z.visible]: X === A.f7.VISIBLE,
                                        [Z.in]: X === A.f7.IN,
                                        [Z.out]: X === A.f7.OUT,
                                    }),
                                    children: (0, r.jsx)(T.Z, {
                                        tab: J,
                                        refreshCategories: U,
                                        transitionToTab: $,
                                        transitionState: X,
                                        sortedCategories: V,
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
