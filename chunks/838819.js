(n.r(t), n.d(t, { default: () => R }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(772848),
    s = n(399606),
    c = n(952265),
    u = n(481060),
    d = n(150063),
    p = n(211266),
    g = n(906732),
    f = n(702486),
    h = n(977395),
    b = n(214852),
    m = n(290026),
    _ = n(511050),
    C = n(819640),
    v = n(594174),
    O = n(381585),
    S = n(597688),
    x = n(780475),
    E = n(223143),
    j = n(298228),
    y = n(309956),
    T = n(98535),
    P = n(963102),
    k = n(508498),
    I = n(849217),
    L = n(215023),
    B = n(981631),
    N = n(420212),
    w = n(484920);
let A = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            i = (0, c.f9)();
        return (
            l.useEffect(() => {
                if (!n || i) return;
                let e = (e) => {
                    e.key === N.mR.Escape && r();
                };
                return (window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e));
            }, [n, i, r]),
            t
        );
    },
    R = function (e) {
        let { isFullScreen: t = !0, tab: n = L.AW.HOME } = e;
        (0, b.z)(h.f);
        let i = (0, p.Z)((0, o.Z)()),
            c = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
            N = l.useRef(null),
            { closeIntroToOrbsClaimedCoachmark: R } = (0, _.Z)({ location: 'CollectiblesShop' });
        l.useEffect(
            () => () => {
                R();
            },
            [i, R]
        );
        let { onClose: Z } = (0, k.Db)(),
            { categories: H, refreshCategories: M } = (0, E.ZP)(
                {
                    location: 'CollectiblesShop.web',
                    logPerf: !0
                },
                {
                    sessionId: i,
                    tab: n,
                    isFullScreen: t
                }
            );
        (0, m.P)();
        let D = (0, j.O)(H),
            [F, W] = l.useState(),
            V = (0, s.e7)([S.Z], () => {
                var e;
                return null == (e = S.Z.getCategory(F)) ? void 0 : e.name;
            }),
            [U, G] = l.useState(),
            z = l.useCallback((e, t) => {
                (G(e), W(t));
            }, []),
            { selectedTab: Y, transitionState: q, transitionToTab: K } = (0, y.B)(N, n, t),
            { handleScroll: X } = (0, f.z)(N, i, Y);
        ((0, x.q3)(i, Y, V, q, U),
            (0, x.EB)(Y, c),
            (0, I.Z)(),
            l.useEffect(() => {
                t || (0, d.Y)(B.Z5c.COLLECTIBLES_SHOP);
            }, [t]));
        let $ = (0, s.e7)([C.Z], () => C.Z.getLayers().includes(B.S9g.COLLECTIBLES_SHOP)),
            Q = l.useRef(null),
            J = l.useRef(null);
        ((0, u.Tbt)(Q),
            l.useEffect(() => {
                if (!t) {
                    var e;
                    null == (e = J.current) || e.focus();
                }
            }, [t]));
        let { analyticsLocations: ee } = (0, x.MV)(Y);
        return (0, r.jsx)(g.Gt, {
            value: ee,
            children: (0, r.jsx)(O.k0, {
                newValue: {
                    sessionId: i,
                    pageCategory: V,
                    pageSize: L.kN
                },
                children: (0, r.jsx)(A, {
                    onClose: Z,
                    shouldAddEventListener: t && !$,
                    children: (0, r.jsx)('div', {
                        className: w.shop,
                        ref: t ? Q : J,
                        tabIndex: -1,
                        children: (0, r.jsx)(u.Den, {
                            className: w.shopScroll,
                            ref: N,
                            onScroll: X,
                            children: (0, r.jsxs)('div', {
                                className: a()(w.shopViewWrapper, {
                                    [w.visible]: q === L.f7.VISIBLE,
                                    [w.in]: q === L.f7.IN,
                                    [w.out]: q === L.f7.OUT
                                }),
                                children: [
                                    (0, r.jsx)(P.I, {
                                        isFullScreen: t,
                                        isLayer: $,
                                        onClose: Z,
                                        handleTransition: K,
                                        selectedTab: Y
                                    }),
                                    (0, r.jsx)(T.Z, {
                                        tab: Y,
                                        isFullScreen: t,
                                        scrollerRef: N,
                                        refreshCategories: M,
                                        transitionToTab: K,
                                        transitionState: q,
                                        sortedCategories: D,
                                        updateAnalyticsState: z
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        });
    };
