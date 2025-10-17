n.r(t), n.d(t, { default: () => F }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(772848),
    s = n(399606),
    c = n(952265),
    u = n(481060),
    d = n(150063),
    g = n(211266),
    p = n(906732),
    f = n(977395),
    C = n(214852),
    h = n(621853),
    _ = n(484459),
    m = n(602733),
    b = n(594174),
    v = n(381585),
    E = n(597688),
    x = n(994587),
    O = n(780475),
    S = n(223143),
    y = n(298228),
    j = n(908430),
    k = n(99767),
    T = n(501431),
    L = n(98535),
    I = n(426171),
    B = n(963102),
    A = n(508498),
    N = n(681435),
    P = n(642909),
    R = n(215023),
    Z = n(981631),
    w = n(295907),
    H = n(887353),
    D = n(345213);
let M = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            i = (0, c.f9)();
        return (
            l.useEffect(() => {
                if (!n || i) return;
                let e = (e) => {
                    e.key === w.mR.Escape && r();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [n, i, r]),
            t
        );
    },
    F = function (e) {
        let { tab: t = R.AW.HOME } = e;
        (0, C.z)(f.f), (0, j.f)();
        let n = (0, g.Z)((0, o.Z)()),
            i = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
            { userProfile: c, wishlistId: w } = (0, s.cj)(
                [h.Z],
                () => ({
                    userProfile: null != i ? h.Z.getUserProfile(i.id) : null,
                    wishlistId: null != i ? h.Z.getFirstWishlistId(i.id) : null,
                }),
                [i],
            );
        l.useEffect(() => {
            null != i && null == c && (0, _.Z)(i.id, i.getAvatarURL(null, 80));
        }, [i, c]),
            (0, m.kZ)(w, null == i ? void 0 : i.id);
        let F = (0, P.G)("CollectiblesShop"),
            { onClose: W } = (0, A.Db)(),
            { currentTab: V, hasFilters: U } = (0, T.S)(),
            z = l.useMemo(() => (t === R.AW.HOME && V && U() ? V : t), [t, V, U]),
            { categories: G, refreshCategories: K } = (0, S.ZP)(
                { logPerf: !0 },
                {
                    sessionId: n,
                    tab: z,
                },
            ),
            Y = (0, y.O)(G),
            [q, Q] = l.useState(),
            J = (0, s.e7)([E.Z], () => {
                var e;
                return null == (e = E.Z.getCategory(q)) ? void 0 : e.name;
            }),
            [X, $] = l.useState();
        (0, I.Kp)();
        let ee = l.useCallback((e, t) => {
                $(e), Q(t);
            }, []),
            { selectedTab: et, transitionState: en, transitionToTab: er } = (0, k.B)(z);
        (0, O.q3)(n, et, J, en, X), (0, O.EB)(et, i);
        let { dismissShopButtonDC: el } = (0, N.Z)();
        l.useEffect(() => {
            el();
        }, [el]),
            l.useEffect(() => {
                (0, d.Y)(Z.Z5c.COLLECTIBLES_SHOP);
            }, []);
        let ei = l.useRef(null),
            ea = l.useRef(null);
        (0, u.Tbt)(ei),
            l.useEffect(() => {
                var e;
                null == (e = ea.current) || e.focus();
            }, []);
        let { analyticsLocations: eo } = (0, O.MV)(et);
        return (0, r.jsx)(p.Gt, {
            value: eo,
            children: (0, r.jsx)(v.k0, {
                newValue: {
                    sessionId: n,
                    pageCategory: J,
                    pageSize: R.kN,
                },
                children: (0, r.jsx)(x.ni, {
                    tab: et,
                    children: (0, r.jsx)(M, {
                        onClose: W,
                        shouldAddEventListener: !1,
                        children: (0, r.jsxs)("div", {
                            className: a()(H.shop, { [D.shopTakeOver]: F }),
                            ref: ea,
                            tabIndex: -1,
                            children: [
                                (0, r.jsx)(B.I, {
                                    handleTransition: er,
                                    selectedTab: et,
                                }),
                                (0, r.jsx)("div", {
                                    className: a()(H.shopViewWrapper, {
                                        [H.visible]: en === R.f7.VISIBLE,
                                        [H.in]: en === R.f7.IN,
                                        [H.out]: en === R.f7.OUT,
                                    }),
                                    children: (0, r.jsx)(L.Z, {
                                        tab: et,
                                        refreshCategories: K,
                                        transitionToTab: er,
                                        transitionState: en,
                                        sortedCategories: Y,
                                        updateAnalyticsState: ee,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
            }),
        });
    };
