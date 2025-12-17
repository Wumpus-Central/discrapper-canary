n.r(t), n.d(t, { default: () => H }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(772848),
    i = n(399606),
    c = n(952265),
    u = n(481060),
    d = n(150063),
    f = n(211266),
    g = n(906732),
    b = n(977395),
    p = n(214852),
    m = n(602733),
    h = n(594174),
    C = n(381585),
    E = n(597688),
    v = n(994587),
    S = n(780475),
    _ = n(223143),
    x = n(298228),
    O = n(908430),
    y = n(99767),
    k = n(501431),
    T = n(98535),
    j = n(426171),
    L = n(963102),
    I = n(508498),
    A = n(681435),
    B = n(811847),
    N = n(215023),
    R = n(981631),
    P = n(295907),
    w = n(213875),
    Z = n(868090);
let D = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            a = (0, c.useHasAnyModalOpen)();
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
    H = function (e) {
        let { tab: t = N.AW.HOME } = e;
        (0, p.z)(b.f), (0, O.f)();
        let n = (0, f.Z)((0, o.Z)()),
            a = (0, i.e7)([h.default], () => h.default.getCurrentUser());
        (0, m.p2)();
        let c = (0, B.B)("CollectiblesShop"),
            { onClose: P } = (0, I.Db)(),
            { currentTab: H, hasFilters: M } = (0, k.S)(),
            F = l.useMemo(() => (t === N.AW.HOME && H && M() ? H : t), [t, H, M]),
            { categories: W, refreshCategories: U } = (0, _.ZP)(
                { logPerf: !0 },
                {
                    sessionId: n,
                    tab: F,
                },
            ),
            z = (0, x.O)(W),
            [V, G] = l.useState(),
            K = (0, i.e7)([E.Z], () => {
                var e;
                return null == (e = E.Z.getCategory(V)) ? void 0 : e.name;
            }),
            [Y, q] = l.useState();
        (0, j.Kp)();
        let Q = l.useCallback((e, t) => {
                q(e), G(t);
            }, []),
            { selectedTab: J, transitionState: X, transitionToTab: $ } = (0, y.B)(F);
        (0, S.q3)(n, J, K, X, Y), (0, S.EB)(J, a);
        let { dismissShopButtonDC: ee } = (0, A.Z)();
        l.useEffect(() => {
            ee();
        }, [ee]),
            l.useEffect(() => {
                (0, d.Y)(R.Z5c.COLLECTIBLES_SHOP);
            }, []);
        let et = l.useRef(null),
            en = l.useRef(null);
        (0, u.Tbt)(et),
            l.useEffect(() => {
                var e;
                null == (e = en.current) || e.focus();
            }, []);
        let { analyticsLocations: er } = (0, S.MV)(J);
        return (0, r.jsx)(g.Gt, {
            value: er,
            children: (0, r.jsx)(C.k0, {
                newValue: {
                    sessionId: n,
                    pageCategory: K,
                    pageSize: N.kN,
                },
                children: (0, r.jsx)(v.ni, {
                    tab: J,
                    children: (0, r.jsx)(D, {
                        onClose: P,
                        shouldAddEventListener: !1,
                        children: (0, r.jsxs)("div", {
                            className: s()(w.shop, { [Z.customCursors]: c }),
                            ref: en,
                            tabIndex: -1,
                            children: [
                                (0, r.jsx)(L.I, {
                                    handleTransition: $,
                                    selectedTab: J,
                                }),
                                (0, r.jsx)("div", {
                                    className: s()(w.shopViewWrapper, {
                                        [w.visible]: X === N.f7.VISIBLE,
                                        [w.in]: X === N.f7.IN,
                                        [w.out]: X === N.f7.OUT,
                                    }),
                                    children: (0, r.jsx)(T.Z, {
                                        tab: J,
                                        refreshCategories: U,
                                        transitionToTab: $,
                                        transitionState: X,
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
