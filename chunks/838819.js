n.r(t), n.d(t, { default: () => $ }), n(388685), n(539854);
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(772848),
    s = n(180650),
    c = n(399606),
    u = n(952265),
    d = n(4738),
    p = n(481060),
    f = n(150063),
    b = n(211266),
    g = n(906732),
    h = n(702486),
    m = n(977395),
    _ = n(214852),
    C = n(290026),
    v = n(511050),
    O = n(819640),
    x = n(594174),
    S = n(74538),
    E = n(960048),
    y = n(381585),
    j = n(597688),
    P = n(744112),
    k = n(139668),
    T = n(780475),
    I = n(223143),
    L = n(298228),
    B = n(309956),
    w = n(193227),
    N = n(426171),
    A = n(752053),
    R = n(963102),
    Z = n(508498),
    F = n(373113),
    D = n(849217),
    H = n(81136),
    M = n(566564),
    W = n(763891),
    V = n(921120),
    U = n(215023),
    G = n(981631),
    z = n(420212),
    q = n(484920);
let Y = (e) => {
        let { isFullScreen: t, tab: n } = e;
        return !t && (n === U.AW.HOME || n === U.AW.ORBS);
    },
    K = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            a = (0, u.f9)();
        return (
            l.useEffect(() => {
                if (!n || a) return;
                let e = (e) => {
                    e.key === z.mR.Escape && r();
                };
                return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
            }, [n, a, r]),
            t
        );
    },
    $ = function (e) {
        var t;
        let { isFullScreen: n = !0, tab: a = U.AW.HOME } = e;
        (0, _.z)(m.f);
        let u = (0, b.Z)((0, o.Z)()),
            z = (0, c.e7)([x.default], () => x.default.getCurrentUser()),
            $ = (0, k.R)('CollectiblesShop'),
            X = l.useRef(null),
            { selectedTab: J, transitionState: Q, transitionToTab: ee } = (0, B.B)(X, a, n),
            { handleScroll: et, numVisibleItems: en, scrollerAtBottom: er } = (0, h.z)(X, u, J, $),
            [el, ea] = l.useState(),
            [ei, eo] = l.useState(),
            { noCache: es, includeUnpublished: ec } = (0, H.Z)(),
            { closeIntroToOrbsClaimedCoachmark: eu } = (0, v.Z)({ location: 'CollectiblesShop' });
        l.useEffect(
            () => () => {
                eu();
            },
            [u, eu]
        );
        let ed = (0, c.e7)([O.Z], () => O.Z.getLayers().includes(G.S9g.COLLECTIBLES_SHOP)),
            { onClose: ep } = (0, Z.Db)(),
            {
                categories: ef,
                isFetchingCategories: eb,
                fetchCategoriesError: eg,
                fetchPurchasesError: eh,
                claimError: em,
                refreshCategories: e_
            } = (0, I.ZP)(
                {
                    location: 'CollectiblesShop.web',
                    logPerf: !0
                },
                {
                    sessionId: u,
                    tab: a,
                    isFullScreen: n
                }
            ),
            eC = null != (t = null != eg ? eg : eh) ? t : em;
        (0, C.P)();
        let ev = (0, L.O)(ef),
            eO = l.useRef(null),
            [ex, eS] = l.useState(!1);
        (0, N.Kp)({
            isFetchingCategories: eb,
            isLayer: ed,
            initialItemCardRef: eO
        }),
            (0, T.q3)(u, J, el, Q, ei),
            (0, T.EB)(J, z),
            (0, D.Z)(),
            l.useEffect(() => {
                n || (0, f.Y)(G.Z5c.COLLECTIBLES_SHOP);
            }, [n]);
        let eE = l.useCallback(() => {
                e_();
            }, [e_]),
            { setCategoryRef: ey, handleScrollToCategory: ej } = (0, N.xV)(X.current),
            { reducedMotion: eP } = l.useContext(p.Sfi),
            ek = l.useRef(null),
            eT = l.useRef(null);
        (0, p.Tbt)(ek),
            l.useEffect(() => {
                if (!n) {
                    var e;
                    null == (e = eT.current) || e.focus();
                }
            }, [n]);
        let [eI, eL] = l.useState(1),
            eB = l.useCallback(
                (e) => {
                    let t = ev.findIndex((t) => t.skuId === e);
                    return -1 === t ? 1 : Math.floor(t / U.kN) + 1;
                },
                [ev]
            ),
            ew = l.useCallback(
                async (e, t, r) => {
                    let l = r && !n && !eP.enabled;
                    if ((eo(e), ea(t), t === s.T.ORB)) await ee(U.AW.ORBS, r);
                    else if ((await ee(U.AW.CATALOG, l), t)) {
                        let e = eB(t);
                        e !== eI && eL(e), ej(t);
                    }
                },
                [ej, n, eP.enabled, ee, eB, eI, eL]
            ),
            eN = (0, P.b)('Collectibles Shop Button'),
            eA = l.useMemo(() => {
                let e = (eI - 1) * U.kN;
                return ev.slice(e, e + U.kN);
            }, [ev, eI]),
            eR = l.useRef(null),
            eZ = l.useCallback(
                (e) => {
                    eL(e), null != X.current && null != eR.current ? X.current.scrollTo({ to: eR.current.getBoundingClientRect().top }) : null != X.current && X.current.scrollTo({ to: 0 });
                },
                [X, eL]
            ),
            eF = (0, c.e7)([j.Z], () => {
                var e;
                return null == (e = j.Z.getCategory(el)) ? void 0 : e.name;
            }),
            { analyticsLocations: eD } = (0, T.MV)(J);
        return (0, r.jsx)(g.Gt, {
            value: eD,
            children: (0, r.jsx)(y.k0, {
                newValue: {
                    sessionId: u,
                    pageCategory: eF,
                    pageIndex: eI,
                    pageSize: U.kN
                },
                children: (0, r.jsxs)(K, {
                    onClose: ep,
                    shouldAddEventListener: n && !ed,
                    children: [
                        (0, r.jsx)('div', {
                            className: q.shop,
                            ref: n ? ek : eT,
                            tabIndex: -1,
                            children: (0, r.jsx)(p.Den, {
                                className: q.shopScroll,
                                ref: X,
                                onScroll: et,
                                children: (0, r.jsxs)('div', {
                                    className: i()(q.shopViewWrapper, {
                                        [q.visible]: Q === U.f7.VISIBLE,
                                        [q.in]: Q === U.f7.IN,
                                        [q.out]: Q === U.f7.OUT
                                    }),
                                    children: [
                                        (0, r.jsx)(R.I, {
                                            isFullScreen: n,
                                            isLayer: ed,
                                            onClose: ep,
                                            handleTransition: ee,
                                            selectedTab: J
                                        }),
                                        (function (e) {
                                            if (null != eC) {
                                                var t, l;
                                                let e = [];
                                                return (
                                                    null != eg ? e.push('shop load fetch categories error: '.concat(eC.message)) : null != eh ? e.push('shop load fetch purchase error: '.concat(eC.message)) : e.push('shop load claim error: '.concat(eC.message)),
                                                    E.Z.captureMessage(e.join('\n'), {
                                                        tags: {
                                                            isStaff: null != (l = null == z || null == (t = z.isStaff()) ? void 0 : t.toString()) ? l : 'unknown',
                                                            preloadEnabled: eN.toString(),
                                                            disableCache: es.toString(),
                                                            includeUnpublished: ec.toString()
                                                        }
                                                    }),
                                                    (0, r.jsx)(A.Z, {
                                                        onRetry: eE,
                                                        errorOrigin: A.i.SHOP_PAGE,
                                                        errorMessage: null == eg ? void 0 : eg.message
                                                    })
                                                );
                                            }
                                            switch (e) {
                                                case U.AW.HOME:
                                                case U.AW.ORBS:
                                                    return (0, r.jsx)(M.Z, {
                                                        isFullScreen: n,
                                                        handleTransition: ew,
                                                        numVisibleItems: en,
                                                        tab: e,
                                                        isFetchingCategories: eb
                                                    });
                                                case U.AW.AVATAR_DECORATIONS:
                                                case U.AW.PROFILE_EFFECTS:
                                                case U.AW.NAMEPLATES:
                                                case U.AW.BUNDLES:
                                                    return (0, r.jsx)('div', {
                                                        className: q.pageWrapper,
                                                        children: (0, r.jsx)('main', {
                                                            className: i()(q.page, q.pageWithPagination, { [q.pageFullscreen]: n }),
                                                            children: (0, r.jsx)(
                                                                W.Z,
                                                                {
                                                                    isFetchingCategories: eb,
                                                                    isFullScreen: n,
                                                                    scrollerRef: X,
                                                                    tab: e
                                                                },
                                                                e
                                                            )
                                                        })
                                                    });
                                                case U.AW.CATALOG:
                                                    return (0, r.jsx)('div', {
                                                        className: q.pageWrapper,
                                                        children: (0, r.jsxs)('main', {
                                                            className: i()(q.page, q.pageWithPagination, { [q.pageFullscreen]: n }),
                                                            children: [
                                                                (0, r.jsx)(w.Z, {
                                                                    isFetchingCategories: eb,
                                                                    sortedCategories: eA,
                                                                    setCategoryRef: ey,
                                                                    isPremiumUser: S.ZP.canUseCollectibles(z),
                                                                    initialItemCardRef: eO,
                                                                    setIsGiftEasterEggEnabled: eS,
                                                                    isGiftEasterEggEnabled: ex,
                                                                    isFullScreen: n
                                                                }),
                                                                (0, r.jsx)('div', {
                                                                    className: q.paginationContainer,
                                                                    children: (0, r.jsx)('div', {
                                                                        children: (0, r.jsx)(d.D, {
                                                                            currentPage: eI,
                                                                            totalCount: ev.length,
                                                                            pageSize: U.kN,
                                                                            onPageChange: eZ,
                                                                            disablePaginationGap: !0
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    });
                                                default:
                                                    return null;
                                            }
                                        })(J)
                                    ]
                                })
                            })
                        }),
                        ex && (0, r.jsx)(F.Z, {}),
                        Y({
                            isFullScreen: n,
                            tab: J
                        }) &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(V.Z, {
                                        peaking: er,
                                        transitioning: Q === U.f7.OUT
                                    }),
                                    (0, r.jsx)(V.Z, {
                                        style: { left: 1850 },
                                        peaking: er,
                                        transitioning: Q === U.f7.OUT
                                    })
                                ]
                            })
                    ]
                })
            })
        });
    };
