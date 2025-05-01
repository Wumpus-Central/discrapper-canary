n.r(t), n.d(t, { default: () => ee }), n(388685), n(539854);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(180650),
    s = n(399606),
    c = n(704215),
    u = n(952265),
    d = n(4738),
    b = n(481060),
    p = n(150063),
    f = n(100527),
    g = n(906732),
    h = n(702486),
    m = n(605236),
    _ = n(977395),
    C = n(214852),
    v = n(290026),
    x = n(511050),
    O = n(819640),
    j = n(594174),
    y = n(626135),
    S = n(74538),
    k = n(960048),
    P = n(381585),
    E = n(597688),
    B = n(328347),
    w = n(744112),
    I = n(951904),
    T = n(139668),
    L = n(223143),
    N = n(298228),
    A = n(309956),
    Z = n(193227),
    R = n(426171),
    F = n(752053),
    H = n(963102),
    D = n(508498),
    M = n(373113),
    W = n(681435),
    V = n(81136),
    U = n(566564),
    G = n(531864),
    z = n(215023),
    q = n(981631),
    Y = n(921944),
    $ = n(420212),
    K = n(474936),
    X = n(484920);
let J = (e) => {
        let { isFullScreen: t, tab: n } = e;
        return !t && n !== z.AW.CATALOG;
    },
    Q = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            a = (0, u.f9)();
        return (
            l.useEffect(() => {
                if (!n || a) return;
                let e = (e) => {
                    e.key === $.mR.Escape && r();
                };
                return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
            }, [n, a, r]),
            t
        );
    },
    ee = function (e) {
        var t;
        let { isFullScreen: n = !0, tab: a = z.AW.HOME } = e;
        (0, C.z)(_.f);
        let { analyticsSource: u, analyticsLocations: $ } = (0, s.cj)([B.Z], () => B.Z.getAnalytics()),
            ee = l.useMemo(() => {
                switch (a) {
                    case z.AW.ORBS:
                        return f.Z.COLLECTIBLES_SHOP_ORBS_TAB;
                    case z.AW.HOME:
                        return f.Z.COLLECTIBLES_SHOP_HOME_SCREEN;
                    case z.AW.CATALOG:
                        return f.Z.COLLECTIBLES_SHOP_FULLSCREEN;
                }
            }, [a]),
            { analyticsLocations: et, newestAnalyticsLocation: en } = (0, g.ZP)([...$, f.Z.COLLECTIBLES_SHOP, ee]),
            { sessionId: er, scrollerRef: el, scrollHandler: ea } = (0, h._)(q.rMx.COLLECTIBLES_SHOP_SCROLLED, u),
            { selectedTab: ei, transitionState: eo, transitionToTab: es } = (0, A.B)(el, a, n),
            [ec, eu] = l.useState(!1),
            ed = (0, T.R)('CollectiblesShop'),
            [eb, ep] = l.useState(z.IV),
            [ef, eg] = l.useState(),
            [eh, em] = l.useState(),
            { noCache: e_, includeUnpublished: eC } = (0, V.Z)(),
            { closeIntroToOrbsClaimedCoachmark: ev } = (0, x.Z)({ location: 'CollectiblesShop' });
        l.useEffect(
            () => () => {
                ev();
            },
            [u, ev]
        );
        let ex = (0, s.e7)([O.Z], () => O.Z.getLayers().includes(q.S9g.COLLECTIBLES_SHOP)),
            { onClose: eO } = (0, D.Db)(),
            ej = (0, s.e7)([j.default], () => j.default.getCurrentUser()),
            ey = S.ZP.canUseCollectibles(ej),
            {
                categories: eS,
                isFetchingCategories: ek,
                fetchCategoriesError: eP,
                fetchPurchasesError: eE,
                claimError: eB,
                refreshCategories: ew
            } = (0, L.ZP)(
                {
                    location: 'CollectiblesShop.web',
                    logPerf: !0
                },
                {
                    sessionId: er,
                    tab: a,
                    isFullScreen: n
                }
            ),
            eI = null != (t = null != eP ? eP : eE) ? t : eB;
        (0, v.P)();
        let eT = (0, N.O)(eS),
            eL = l.useRef(null),
            [eN, eA] = l.useState(!1);
        (0, R.Kp)({
            isFetchingCategories: ek,
            isLayer: ex,
            initialItemCardRef: eL
        }),
            l.useEffect(() => {
                if (eo === z.f7.VISIBLE && en === ee) {
                    var e;
                    let t;
                    (t = ei === z.AW.CATALOG ? eh : u),
                        y.default.track(q.rMx.COLLECTIBLES_SHOP_VIEWED, {
                            location_stack: et,
                            source: t,
                            page_session_id: er,
                            page_type: ei === z.AW.CATALOG ? 'full' : ei,
                            category: ei === z.AW.HOME || null == (e = E.Z.getCategory(ef)) ? void 0 : e.name
                        });
                }
            }, [et, u, er, ef, eg, eh, eo, ei, ee, en]),
            l.useEffect(() => {
                null == ej ||
                    ey ||
                    y.default.track(q.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: K.cd.COLLECTIBLES_SHOP,
                        location_stack: et
                    });
            }, [ey, et, ej]);
        let { dismissShopButtonDC: eZ } = (0, W.Z)();
        l.useEffect(() => {
            eZ(),
                (0, m.un)(c.z.COLLECTIBLES_GIFTING_COACHMARK) ||
                    (0, m.EW)(c.z.COLLECTIBLES_GIFTING_COACHMARK, {
                        dismissAction: Y.L.AUTO_DISMISS,
                        forceTrack: !0
                    });
        }, [eZ]),
            l.useEffect(() => {
                n || (0, p.Y)(q.Z5c.COLLECTIBLES_SHOP);
            }, [n]);
        let eR = l.useCallback(() => {
                ew();
            }, [ew]),
            { setCategoryRef: eF, handleScrollToCategory: eH } = (0, R.xV)(el.current),
            { reducedMotion: eD } = l.useContext(b.Sfi),
            eM = l.useRef(null),
            eW = l.useRef(null);
        (0, b.Tbt)(eM),
            l.useEffect(() => {
                if (!n) {
                    var e;
                    null == (e = eW.current) || e.focus();
                }
            }, [n]);
        let [eV, eU] = l.useState(1),
            { isPaginationEnabled: eG, categoriesPerPage: ez } = (0, I.a)('CollectiblesShop'),
            eq = l.useCallback(
                (e) => {
                    if (!eG || ez <= 0) return 1;
                    let t = eT.findIndex((t) => t.skuId === e);
                    return -1 === t ? 1 : Math.floor(t / ez) + 1;
                },
                [eT, eG, ez]
            ),
            eY = l.useCallback(
                async (e, t, r) => {
                    let l = r && !n && !eD.enabled;
                    if ((em(e), eg(t), t === o.T.ORB)) await es(z.AW.ORBS, r);
                    else if ((await es(z.AW.CATALOG, l), t)) {
                        if (eG && ez > 0) {
                            let e = eq(t);
                            e !== eV && eU(e);
                        }
                        eH(t);
                    }
                },
                [eH, n, eD.enabled, es, eG, ez, eq, eV, eU]
            ),
            e$ = (0, w.b)('Collectibles Shop Button'),
            eK = l.useMemo(() => {
                if (!eG) return eT;
                let e = (eV - 1) * ez;
                return eT.slice(e, e + ez);
            }, [eT, eG, ez, eV]),
            eX = l.useRef(null),
            eJ = l.useCallback(
                (e) => {
                    eU(e), null != el.current && null != eX.current ? el.current.scrollTo({ to: eX.current.getBoundingClientRect().top }) : null != el.current && el.current.scrollTo({ to: 0 });
                },
                [el, eU]
            ),
            eQ = (0, s.e7)([E.Z], () => {
                var e;
                return null == (e = E.Z.getCategory(ef)) ? void 0 : e.name;
            });
        return (0, r.jsx)(g.Gt, {
            value: et,
            children: (0, r.jsx)(P.k0, {
                newValue: {
                    sessionId: er,
                    pageCategory: eQ
                },
                children: (0, r.jsxs)(Q, {
                    onClose: eO,
                    shouldAddEventListener: n && !ex,
                    children: [
                        (0, r.jsx)('div', {
                            className: X.shop,
                            ref: n ? eM : eW,
                            tabIndex: -1,
                            children: (0, r.jsx)(b.Den, {
                                className: X.shopScroll,
                                ref: el,
                                onScroll: () => {
                                    if ((ea(), null != el.current)) {
                                        let e = el.current.getDistanceFromBottom();
                                        eb >= ed ? eu(e < 20) : e <= 200 && ep(eb + z.IV);
                                    }
                                },
                                children: (0, r.jsxs)('div', {
                                    className: i()(X.shopViewWrapper, {
                                        [X.visible]: eo === z.f7.VISIBLE,
                                        [X.in]: eo === z.f7.IN,
                                        [X.out]: eo === z.f7.OUT
                                    }),
                                    children: [
                                        (0, r.jsx)(H.I, {
                                            isFullScreen: n,
                                            isLayer: ex,
                                            onClose: eO,
                                            handleTransition: es,
                                            selectedTab: ei
                                        }),
                                        (function (e) {
                                            if (null != eI) {
                                                var t, l;
                                                let e = [];
                                                return (
                                                    null != eP ? e.push('shop load fetch categories error: '.concat(eI.message)) : null != eE ? e.push('shop load fetch purchase error: '.concat(eI.message)) : e.push('shop load claim error: '.concat(eI.message)),
                                                    k.Z.captureMessage(e.join('\n'), {
                                                        tags: {
                                                            isStaff: null != (l = null == ej || null == (t = ej.isStaff()) ? void 0 : t.toString()) ? l : 'unknown',
                                                            preloadEnabled: e$.toString(),
                                                            disableCache: e_.toString(),
                                                            includeUnpublished: eC.toString()
                                                        }
                                                    }),
                                                    (0, r.jsx)(F.Z, {
                                                        onRetry: eR,
                                                        errorOrigin: F.i.SHOP_PAGE,
                                                        errorMessage: null == eP ? void 0 : eP.message
                                                    })
                                                );
                                            }
                                            switch (e) {
                                                case z.AW.HOME:
                                                case z.AW.ORBS:
                                                    return (0, r.jsx)(U.Z, {
                                                        isFullScreen: n,
                                                        handleTransition: eY,
                                                        numVisibleItems: eb,
                                                        tab: e,
                                                        isFetchingCategories: ek
                                                    });
                                                case z.AW.CATALOG:
                                                    return (0, r.jsx)('div', {
                                                        className: X.pageWrapper,
                                                        children: (0, r.jsxs)('main', {
                                                            className: i()(X.page, {
                                                                [X.pageFullscreen]: n,
                                                                [X.pageWithPagination]: eG && (null == eT ? void 0 : eT.length) > ez
                                                            }),
                                                            children: [
                                                                (0, r.jsx)(Z.Z, {
                                                                    isFetchingCategories: ek,
                                                                    sortedCategories: eK,
                                                                    setCategoryRef: eF,
                                                                    isPremiumUser: ey,
                                                                    initialItemCardRef: eL,
                                                                    setIsGiftEasterEggEnabled: eA,
                                                                    isGiftEasterEggEnabled: eN,
                                                                    isFullScreen: n
                                                                }),
                                                                eG &&
                                                                    eT.length > ez &&
                                                                    (0, r.jsx)('div', {
                                                                        className: X.paginationContainer,
                                                                        children: (0, r.jsx)('div', {
                                                                            children: (0, r.jsx)(d.D, {
                                                                                currentPage: eV,
                                                                                totalCount: eT.length,
                                                                                pageSize: ez,
                                                                                onPageChange: eJ,
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
                                        })(ei)
                                    ]
                                })
                            })
                        }),
                        eN && (0, r.jsx)(M.Z, {}),
                        J({
                            isFullScreen: n,
                            tab: a
                        }) &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(G.Z, {
                                        peaking: ec,
                                        transitioning: eo === z.f7.OUT
                                    }),
                                    (0, r.jsx)(G.Z, {
                                        style: { left: 1850 },
                                        peaking: ec,
                                        transitioning: eo === z.f7.OUT
                                    })
                                ]
                            })
                    ]
                })
            })
        });
    };
