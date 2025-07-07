(n.r(t), n.d(t, { default: () => w }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    o = n.n(i),
    a = n(772848),
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
    O = n(594174),
    E = n(381585),
    v = n(597688),
    S = n(780475),
    x = n(223143),
    y = n(298228),
    j = n(309956),
    T = n(98535),
    P = n(963102),
    L = n(508498),
    k = n(849217),
    I = n(215023),
    B = n(981631),
    N = n(420212),
    A = n(484920);
let R = (e) => {
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
    w = function (e) {
        let { isFullScreen: t = !0, tab: n = I.AW.HOME } = e;
        (0, b.z)(h.f);
        let i = (0, p.Z)((0, a.Z)()),
            c = (0, s.e7)([O.default], () => O.default.getCurrentUser()),
            N = l.useRef(null),
            { closeIntroToOrbsClaimedCoachmark: w } = (0, _.Z)({ location: 'CollectiblesShop' });
        l.useEffect(
            () => () => {
                w();
            },
            [i, w]
        );
        let { onClose: Z } = (0, L.Db)(),
            { categories: M, refreshCategories: D } = (0, x.ZP)(
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
        let F = (0, y.O)(M),
            [H, W] = l.useState(),
            V = (0, s.e7)([v.Z], () => {
                var e;
                return null == (e = v.Z.getCategory(H)) ? void 0 : e.name;
            }),
            [U, G] = l.useState(),
            z = l.useCallback((e, t) => {
                (G(e), W(t));
            }, []),
            { selectedTab: Y, transitionState: q, transitionToTab: K } = (0, j.B)(N, n, t),
            { handleScroll: X } = (0, g.z)(N, i, Y);
        ((0, S.q3)(i, Y, V, q, U),
            (0, S.EB)(Y, c),
            (0, k.Z)(),
            l.useEffect(() => {
                t || (0, d.Y)(B.Z5c.COLLECTIBLES_SHOP);
            }, [t]));
        let Q = (0, s.e7)([C.Z], () => C.Z.getLayers().includes(B.S9g.COLLECTIBLES_SHOP)),
            $ = l.useRef(null),
            J = l.useRef(null);
        ((0, u.Tbt)($),
            l.useEffect(() => {
                if (!t) {
                    var e;
                    null == (e = J.current) || e.focus();
                }
            }, [t]));
        let { analyticsLocations: ee } = (0, S.MV)(Y);
        return (0, r.jsx)(f.Gt, {
            value: ee,
            children: (0, r.jsx)(E.k0, {
                newValue: {
                    sessionId: i,
                    pageCategory: V,
                    pageSize: I.kN
                },
                children: (0, r.jsx)(R, {
                    onClose: Z,
                    shouldAddEventListener: t && !Q,
                    children: (0, r.jsx)('div', {
                        className: A.shop,
                        ref: t ? $ : J,
                        tabIndex: -1,
                        children: (0, r.jsx)(u.Den, {
                            className: A.shopScroll,
                            ref: N,
                            onScroll: X,
                            children: (0, r.jsxs)('div', {
                                className: o()(A.shopViewWrapper, {
                                    [A.visible]: q === I.f7.VISIBLE,
                                    [A.in]: q === I.f7.IN,
                                    [A.out]: q === I.f7.OUT
                                }),
                                children: [
                                    (0, r.jsx)(P.I, {
                                        isFullScreen: t,
                                        isLayer: Q,
                                        onClose: Z,
                                        handleTransition: K,
                                        selectedTab: Y
                                    }),
                                    (0, r.jsx)(T.Z, {
                                        tab: Y,
                                        isFullScreen: t,
                                        scrollerRef: N,
                                        refreshCategories: D,
                                        transitionToTab: K,
                                        transitionState: q,
                                        sortedCategories: F,
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
