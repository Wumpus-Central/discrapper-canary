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
    O = n(594174),
    v = n(381585),
    E = n(597688),
    S = n(780475),
    x = n(223143),
    y = n(298228),
    T = n(309956),
    j = n(98535),
    L = n(963102),
    P = n(508498),
    k = n(849217),
    I = n(215023),
    B = n(981631),
    N = n(420212),
    A = n(484920);
let w = (e) => {
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
        let { isFullScreen: t = !0, tab: n = I.AW.HOME } = e;
        (0, b.z)(h.f);
        let i = (0, p.Z)((0, o.Z)()),
            c = (0, s.e7)([O.default], () => O.default.getCurrentUser()),
            N = l.useRef(null),
            { closeIntroToOrbsClaimedCoachmark: R } = (0, _.Z)({ location: 'CollectiblesShop' });
        l.useEffect(
            () => () => {
                R();
            },
            [i, R]
        );
        let { onClose: Z } = (0, P.Db)(),
            { categories: M, refreshCategories: H } = (0, x.ZP)(
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
        let D = (0, y.O)(M),
            [F, W] = l.useState(),
            V = (0, s.e7)([E.Z], () => {
                var e;
                return null == (e = E.Z.getCategory(F)) ? void 0 : e.name;
            }),
            [U, G] = l.useState(),
            z = l.useCallback((e, t) => {
                (G(e), W(t));
            }, []),
            { selectedTab: Y, transitionState: K, transitionToTab: q } = (0, T.B)(N, n, t),
            { handleScroll: X } = (0, f.z)(N, i, Y);
        ((0, S.q3)(i, Y, V, K, U),
            (0, S.EB)(Y, c),
            (0, k.Z)(),
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
        let { analyticsLocations: ee } = (0, S.MV)(Y);
        return (0, r.jsx)(g.Gt, {
            value: ee,
            children: (0, r.jsx)(v.k0, {
                newValue: {
                    sessionId: i,
                    pageCategory: V,
                    pageSize: I.kN
                },
                children: (0, r.jsx)(w, {
                    onClose: Z,
                    shouldAddEventListener: t && !$,
                    children: (0, r.jsx)('div', {
                        className: A.shop,
                        ref: t ? Q : J,
                        tabIndex: -1,
                        children: (0, r.jsx)(u.Den, {
                            className: A.shopScroll,
                            ref: N,
                            onScroll: X,
                            children: (0, r.jsxs)('div', {
                                className: a()(A.shopViewWrapper, {
                                    [A.visible]: K === I.f7.VISIBLE,
                                    [A.in]: K === I.f7.IN,
                                    [A.out]: K === I.f7.OUT
                                }),
                                children: [
                                    (0, r.jsx)(L.I, {
                                        isFullScreen: t,
                                        isLayer: $,
                                        onClose: Z,
                                        handleTransition: q,
                                        selectedTab: Y
                                    }),
                                    (0, r.jsx)(j.Z, {
                                        tab: Y,
                                        isFullScreen: t,
                                        scrollerRef: N,
                                        refreshCategories: H,
                                        transitionToTab: q,
                                        transitionState: K,
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
