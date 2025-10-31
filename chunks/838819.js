n.r(t), n.d(t, { default: () => F }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(772848),
    o = n(399606),
    c = n(952265),
    u = n(481060),
    d = n(150063),
    p = n(211266),
    g = n(906732),
    f = n(977395),
    h = n(214852),
    C = n(621853),
    m = n(484459),
    _ = n(602733),
    b = n(594174),
    v = n(381585),
    E = n(597688),
    x = n(994587),
    O = n(780475),
    S = n(223143),
    y = n(298228),
    j = n(908430),
    k = n(99767),
    I = n(501431),
    T = n(98535),
    L = n(426171),
    B = n(963102),
    P = n(508498),
    A = n(681435),
    N = n(811847),
    R = n(215023),
    Z = n(981631),
    w = n(295907),
    H = n(887353),
    D = n(219588);
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
        (0, h.z)(f.f), (0, j.f)();
        let n = (0, p.Z)((0, a.Z)()),
            i = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
            { userProfile: c, wishlistId: w } = (0, o.cj)(
                [C.Z],
                () => ({
                    userProfile: null != i ? C.Z.getUserProfile(i.id) : null,
                    wishlistId: null != i ? C.Z.getFirstWishlistId(i.id) : null,
                }),
                [i],
            );
        l.useEffect(() => {
            null != i && null == c && (0, m.Z)(i.id, i.getAvatarURL(null, 80));
        }, [i, c]),
            (0, _.kZ)(w, null == i ? void 0 : i.id);
        let F = (0, N.B)("CollectiblesShop"),
            { onClose: W } = (0, P.Db)(),
            { currentTab: V, hasFilters: U } = (0, I.S)(),
            z = l.useMemo(() => (t === R.AW.HOME && V && U() ? V : t), [t, V, U]),
            { categories: G, refreshCategories: K } = (0, S.ZP)(
                { logPerf: !0 },
                {
                    sessionId: n,
                    tab: z,
                },
            ),
            Y = (0, y.O)(G),
            [q, J] = l.useState(),
            Q = (0, o.e7)([E.Z], () => {
                var e;
                return null == (e = E.Z.getCategory(q)) ? void 0 : e.name;
            }),
            [X, $] = l.useState();
        (0, L.Kp)();
        let ee = l.useCallback((e, t) => {
                $(e), J(t);
            }, []),
            { selectedTab: et, transitionState: en, transitionToTab: er } = (0, k.B)(z);
        (0, O.q3)(n, et, Q, en, X), (0, O.EB)(et, i);
        let { dismissShopButtonDC: el } = (0, A.Z)();
        l.useEffect(() => {
            el();
        }, [el]),
            l.useEffect(() => {
                (0, d.Y)(Z.Z5c.COLLECTIBLES_SHOP);
            }, []);
        let ei = l.useRef(null),
            es = l.useRef(null);
        (0, u.Tbt)(ei),
            l.useEffect(() => {
                var e;
                null == (e = es.current) || e.focus();
            }, []);
        let { analyticsLocations: ea } = (0, O.MV)(et);
        return (0, r.jsx)(g.Gt, {
            value: ea,
            children: (0, r.jsx)(v.k0, {
                newValue: {
                    sessionId: n,
                    pageCategory: Q,
                    pageSize: R.kN,
                },
                children: (0, r.jsx)(x.ni, {
                    tab: et,
                    children: (0, r.jsx)(M, {
                        onClose: W,
                        shouldAddEventListener: !1,
                        children: (0, r.jsxs)("div", {
                            className: s()(H.shop, { [D.customCursors]: F }),
                            ref: es,
                            tabIndex: -1,
                            children: [
                                (0, r.jsx)(B.I, {
                                    handleTransition: er,
                                    selectedTab: et,
                                }),
                                (0, r.jsx)("div", {
                                    className: s()(H.shopViewWrapper, {
                                        [H.visible]: en === R.f7.VISIBLE,
                                        [H.in]: en === R.f7.IN,
                                        [H.out]: en === R.f7.OUT,
                                    }),
                                    children: (0, r.jsx)(T.Z, {
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
