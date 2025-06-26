n.r(t), n.d(t, { default: () => R }), n(388685);
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
    f = n(906732),
    b = n(702486),
    g = n(977395),
    h = n(214852),
    m = n(290026),
    _ = n(511050),
    C = n(819640),
    v = n(594174),
    O = n(381585),
    E = n(597688),
    x = n(780475),
    S = n(223143),
    j = n(298228),
    y = n(309956),
    k = n(98535),
    P = n(963102),
    T = n(508498),
    I = n(373113),
    L = n(849217),
    B = n(215023),
    N = n(981631),
    A = n(420212),
    w = n(484920);
let Z = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            a = (0, c.f9)();
        return (
            l.useEffect(() => {
                if (!n || a) return;
                let e = (e) => {
                    e.key === A.mR.Escape && r();
                };
                return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
            }, [n, a, r]),
            t
        );
    },
    R = function (e) {
        let { isFullScreen: t = !0, tab: n = B.AW.HOME } = e;
        (0, h.z)(g.f);
        let a = (0, p.Z)((0, o.Z)()),
            c = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
            A = l.useRef(null),
            { closeIntroToOrbsClaimedCoachmark: R } = (0, _.Z)({ location: 'CollectiblesShop' });
        l.useEffect(
            () => () => {
                R();
            },
            [a, R]
        );
        let { onClose: F } = (0, T.Db)(),
            { categories: D, refreshCategories: H } = (0, S.ZP)(
                {
                    location: 'CollectiblesShop.web',
                    logPerf: !0
                },
                {
                    sessionId: a,
                    tab: n,
                    isFullScreen: t
                }
            );
        (0, m.P)();
        let M = (0, j.O)(D),
            [W, V] = l.useState(!1),
            [U, G] = l.useState(),
            z = (0, s.e7)([E.Z], () => {
                var e;
                return null == (e = E.Z.getCategory(U)) ? void 0 : e.name;
            }),
            [q, Y] = l.useState(),
            K = l.useCallback((e, t) => {
                Y(e), G(t);
            }, []),
            { selectedTab: X, transitionState: $, transitionToTab: J } = (0, y.B)(A, n, t),
            { handleScroll: Q } = (0, b.z)(A, a, X);
        (0, x.q3)(a, X, z, $, q),
            (0, x.EB)(X, c),
            (0, L.Z)(),
            l.useEffect(() => {
                t || (0, d.Y)(N.Z5c.COLLECTIBLES_SHOP);
            }, [t]);
        let ee = (0, s.e7)([C.Z], () => C.Z.getLayers().includes(N.S9g.COLLECTIBLES_SHOP)),
            et = l.useRef(null),
            en = l.useRef(null);
        (0, u.Tbt)(et),
            l.useEffect(() => {
                if (!t) {
                    var e;
                    null == (e = en.current) || e.focus();
                }
            }, [t]);
        let { analyticsLocations: er } = (0, x.MV)(X);
        return (0, r.jsx)(f.Gt, {
            value: er,
            children: (0, r.jsx)(O.k0, {
                newValue: {
                    sessionId: a,
                    pageCategory: z,
                    pageSize: B.kN
                },
                children: (0, r.jsxs)(Z, {
                    onClose: F,
                    shouldAddEventListener: t && !ee,
                    children: [
                        (0, r.jsx)('div', {
                            className: w.shop,
                            ref: t ? et : en,
                            tabIndex: -1,
                            children: (0, r.jsx)(u.Den, {
                                className: w.shopScroll,
                                ref: A,
                                onScroll: Q,
                                children: (0, r.jsxs)('div', {
                                    className: i()(w.shopViewWrapper, {
                                        [w.visible]: $ === B.f7.VISIBLE,
                                        [w.in]: $ === B.f7.IN,
                                        [w.out]: $ === B.f7.OUT
                                    }),
                                    children: [
                                        (0, r.jsx)(P.I, {
                                            isFullScreen: t,
                                            isLayer: ee,
                                            onClose: F,
                                            handleTransition: J,
                                            selectedTab: X
                                        }),
                                        (0, r.jsx)(k.Z, {
                                            tab: X,
                                            isFullScreen: t,
                                            scrollerRef: A,
                                            refreshCategories: H,
                                            transitionToTab: J,
                                            transitionState: $,
                                            sortedCategories: M,
                                            updateAnalyticsState: K,
                                            setIsGiftEasterEggEnabled: V,
                                            isGiftEasterEggEnabled: W
                                        })
                                    ]
                                })
                            })
                        }),
                        W && (0, r.jsx)(I.Z, {})
                    ]
                })
            })
        });
    };
