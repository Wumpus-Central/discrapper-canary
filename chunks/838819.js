n.r(t), n.d(t, { default: () => Z }), n(388685);
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
    g = n(702486),
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
    y = n(298228),
    j = n(309956),
    P = n(98535),
    k = n(963102),
    T = n(508498),
    L = n(849217),
    I = n(215023),
    B = n(981631),
    N = n(420212),
    A = n(484920);
let w = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            a = (0, c.f9)();
        return (
            l.useEffect(() => {
                if (!n || a) return;
                let e = (e) => {
                    e.key === N.mR.Escape && r();
                };
                return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
            }, [n, a, r]),
            t
        );
    },
    Z = function (e) {
        let { isFullScreen: t = !0, tab: n = I.AW.HOME } = e;
        (0, b.z)(h.f);
        let a = (0, p.Z)((0, o.Z)()),
            c = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
            N = l.useRef(null),
            { closeIntroToOrbsClaimedCoachmark: Z } = (0, _.Z)({ location: 'CollectiblesShop' });
        l.useEffect(
            () => () => {
                Z();
            },
            [a, Z]
        );
        let { onClose: R } = (0, T.Db)(),
            { categories: H, refreshCategories: M } = (0, E.ZP)(
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
        let D = (0, y.O)(H),
            [F, W] = l.useState(),
            V = (0, s.e7)([S.Z], () => {
                var e;
                return null == (e = S.Z.getCategory(F)) ? void 0 : e.name;
            }),
            [U, G] = l.useState(),
            z = l.useCallback((e, t) => {
                G(e), W(t);
            }, []),
            { selectedTab: q, transitionState: Y, transitionToTab: K } = (0, j.B)(N, n, t),
            { handleScroll: $ } = (0, g.z)(N, a, q);
        (0, x.q3)(a, q, V, Y, U),
            (0, x.EB)(q, c),
            (0, L.Z)(),
            l.useEffect(() => {
                t || (0, d.Y)(B.Z5c.COLLECTIBLES_SHOP);
            }, [t]);
        let X = (0, s.e7)([C.Z], () => C.Z.getLayers().includes(B.S9g.COLLECTIBLES_SHOP)),
            J = l.useRef(null),
            Q = l.useRef(null);
        (0, u.Tbt)(J),
            l.useEffect(() => {
                if (!t) {
                    var e;
                    null == (e = Q.current) || e.focus();
                }
            }, [t]);
        let { analyticsLocations: ee } = (0, x.MV)(q);
        return (0, r.jsx)(f.Gt, {
            value: ee,
            children: (0, r.jsx)(O.k0, {
                newValue: {
                    sessionId: a,
                    pageCategory: V,
                    pageSize: I.kN
                },
                children: (0, r.jsx)(w, {
                    onClose: R,
                    shouldAddEventListener: t && !X,
                    children: (0, r.jsx)('div', {
                        className: A.shop,
                        ref: t ? J : Q,
                        tabIndex: -1,
                        children: (0, r.jsx)(u.Den, {
                            className: A.shopScroll,
                            ref: N,
                            onScroll: $,
                            children: (0, r.jsxs)('div', {
                                className: i()(A.shopViewWrapper, {
                                    [A.visible]: Y === I.f7.VISIBLE,
                                    [A.in]: Y === I.f7.IN,
                                    [A.out]: Y === I.f7.OUT
                                }),
                                children: [
                                    (0, r.jsx)(k.I, {
                                        isFullScreen: t,
                                        isLayer: X,
                                        onClose: R,
                                        handleTransition: K,
                                        selectedTab: q
                                    }),
                                    (0, r.jsx)(P.Z, {
                                        tab: q,
                                        isFullScreen: t,
                                        scrollerRef: N,
                                        refreshCategories: M,
                                        transitionToTab: K,
                                        transitionState: Y,
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
