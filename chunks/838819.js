n.r(t), n.d(t, { default: () => ee }), n(388685), n(539854);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(180650),
    s = n(399606),
    c = n(704215),
    u = n(952265),
    d = n(4738),
    b = n(481060),
    f = n(150063),
    p = n(100527),
    g = n(906732),
    h = n(702486),
    m = n(605236),
    _ = n(977395),
    C = n(214852),
    v = n(290026),
    O = n(511050),
    x = n(819640),
    S = n(594174),
    j = n(626135),
    y = n(74538),
    P = n(960048),
    E = n(381585),
    k = n(597688),
    T = n(328347),
    w = n(744112),
    I = n(951904),
    B = n(139668),
    L = n(223143),
    N = n(298228),
    R = n(309956),
    A = n(193227),
    Z = n(426171),
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
    X = n(474936),
    K = n(484920);
let J = (e) => {
        let { isFullScreen: t, tab: n } = e;
        return !t && n !== z.AW.CATALOG;
    },
    Q = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            i = (0, u.f9)();
        return (
            l.useEffect(() => {
                if (!n || i) return;
                let e = (e) => {
                    e.key === $.mR.Escape && r();
                };
                return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
            }, [n, i, r]),
            t
        );
    },
    ee = function (e) {
        var t;
        let { isFullScreen: n = !0, tab: i = z.AW.HOME } = e;
        (0, C.z)(_.f);
        let { analyticsSource: u, analyticsLocations: $ } = (0, s.cj)([T.Z], () => T.Z.getAnalytics()),
            ee = l.useMemo(() => {
                switch (i) {
                    case z.AW.ORBS:
                        return p.Z.COLLECTIBLES_SHOP_ORBS_TAB;
                    case z.AW.HOME:
                        return p.Z.COLLECTIBLES_SHOP_HOME_SCREEN;
                    case z.AW.CATALOG:
                        return p.Z.COLLECTIBLES_SHOP_FULLSCREEN;
                }
            }, [i]),
            { analyticsLocations: et, newestAnalyticsLocation: en } = (0, g.ZP)([...$, p.Z.COLLECTIBLES_SHOP, ee]),
            { sessionId: er, scrollerRef: el, scrollHandler: ei } = (0, h._)(q.rMx.COLLECTIBLES_SHOP_SCROLLED, u),
            { selectedTab: ea, transitionState: eo, transitionToTab: es } = (0, R.B)(el, i, n),
            [ec, eu] = l.useState(!1),
            ed = (0, B.R)('CollectiblesShop'),
            [eb, ef] = l.useState(z.IV),
            [ep, eg] = l.useState(),
            [eh, em] = l.useState(),
            { noCache: e_, includeUnpublished: eC } = (0, V.Z)(),
            { closeIntroToOrbsClaimedCoachmark: ev } = (0, O.Z)({ location: 'CollectiblesShop' });
        l.useEffect(
            () => () => {
                ev();
            },
            [u, ev]
        );
        let eO = (0, s.e7)([x.Z], () => x.Z.getLayers().includes(q.S9g.COLLECTIBLES_SHOP)),
            { onClose: ex } = (0, D.Db)(),
            eS = (0, s.e7)([S.default], () => S.default.getCurrentUser()),
            ej = y.ZP.canUseCollectibles(eS),
            {
                categories: ey,
                isFetchingCategories: eP,
                fetchCategoriesError: eE,
                fetchPurchasesError: ek,
                claimError: eT,
                refreshCategories: ew
            } = (0, L.ZP)(
                {
                    location: 'CollectiblesShop.web',
                    logPerf: !0
                },
                {
                    sessionId: er,
                    tab: i,
                    isFullScreen: n
                }
            ),
            eI = null != (t = null != eE ? eE : ek) ? t : eT;
        (0, v.P)();
        let eB = (0, N.O)(ey),
            eL = l.useRef(null),
            [eN, eR] = l.useState(!1);
        (0, Z.Kp)({
            isFetchingCategories: eP,
            isLayer: eO,
            initialItemCardRef: eL
        }),
            l.useEffect(() => {
                if (eo === z.f7.VISIBLE && en === ee) {
                    var e;
                    let t;
                    (t = ea === z.AW.CATALOG ? eh : u),
                        j.default.track(q.rMx.COLLECTIBLES_SHOP_VIEWED, {
                            location_stack: et,
                            source: t,
                            page_session_id: er,
                            page_type: ea === z.AW.CATALOG ? 'full' : ea,
                            category: ea === z.AW.HOME || null == (e = k.Z.getCategory(ep)) ? void 0 : e.name
                        });
                }
            }, [et, u, er, ep, eg, eh, eo, ea, ee, en]),
            l.useEffect(() => {
                null == eS ||
                    ej ||
                    j.default.track(q.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: X.cd.COLLECTIBLES_SHOP,
                        location_stack: et
                    });
            }, [ej, et, eS]);
        let { dismissShopButtonDC: eA } = (0, W.Z)();
        l.useEffect(() => {
            eA(),
                (0, m.un)(c.z.COLLECTIBLES_GIFTING_COACHMARK) ||
                    (0, m.EW)(c.z.COLLECTIBLES_GIFTING_COACHMARK, {
                        dismissAction: Y.L.AUTO_DISMISS,
                        forceTrack: !0
                    });
        }, [eA]),
            l.useEffect(() => {
                n || (0, f.Y)(q.Z5c.COLLECTIBLES_SHOP);
            }, [n]);
        let eZ = l.useCallback(() => {
                ew();
            }, [ew]),
            { setCategoryRef: eF, handleScrollToCategory: eH } = (0, Z.xV)(el.current),
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
                    let t = eB.findIndex((t) => t.skuId === e);
                    return -1 === t ? 1 : Math.floor(t / ez) + 1;
                },
                [eB, eG, ez]
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
            eX = l.useMemo(() => {
                if (!eG) return eB;
                let e = (eV - 1) * ez;
                return eB.slice(e, e + ez);
            }, [eB, eG, ez, eV]),
            eK = l.useRef(null),
            eJ = l.useCallback(
                (e) => {
                    eU(e), null != el.current && null != eK.current ? el.current.scrollTo({ to: eK.current.getBoundingClientRect().top }) : null != el.current && el.current.scrollTo({ to: 0 });
                },
                [el, eU]
            ),
            eQ = (0, s.e7)([k.Z], () => {
                var e;
                return null == (e = k.Z.getCategory(ep)) ? void 0 : e.name;
            });
        return (0, r.jsx)(g.Gt, {
            value: et,
            children: (0, r.jsx)(E.k0, {
                newValue: {
                    sessionId: er,
                    pageCategory: eQ
                },
                children: (0, r.jsxs)(Q, {
                    onClose: ex,
                    shouldAddEventListener: n && !eO,
                    children: [
                        (0, r.jsx)('div', {
                            className: K.shop,
                            ref: n ? eM : eW,
                            tabIndex: -1,
                            children: (0, r.jsx)(b.Den, {
                                className: K.shopScroll,
                                ref: el,
                                onScroll: () => {
                                    if ((ei(), null != el.current)) {
                                        let e = el.current.getDistanceFromBottom();
                                        eb >= ed ? eu(e < 20) : e <= 200 && ef(eb + z.IV);
                                    }
                                },
                                children: (0, r.jsxs)('div', {
                                    className: a()(K.shopViewWrapper, {
                                        [K.visible]: eo === z.f7.VISIBLE,
                                        [K.in]: eo === z.f7.IN,
                                        [K.out]: eo === z.f7.OUT
                                    }),
                                    children: [
                                        (0, r.jsx)(H.I, {
                                            isFullScreen: n,
                                            isLayer: eO,
                                            onClose: ex,
                                            handleTransition: es,
                                            selectedTab: ea
                                        }),
                                        (function (e) {
                                            if (null != eI) {
                                                var t, l;
                                                let e = [];
                                                return (
                                                    null != eE ? e.push('shop load fetch categories error: '.concat(eI.message)) : null != ek ? e.push('shop load fetch purchase error: '.concat(eI.message)) : e.push('shop load claim error: '.concat(eI.message)),
                                                    P.Z.captureMessage(e.join('\n'), {
                                                        tags: {
                                                            isStaff: null != (l = null == eS || null == (t = eS.isStaff()) ? void 0 : t.toString()) ? l : 'unknown',
                                                            preloadEnabled: e$.toString(),
                                                            disableCache: e_.toString(),
                                                            includeUnpublished: eC.toString()
                                                        }
                                                    }),
                                                    (0, r.jsx)(F.Z, {
                                                        onRetry: eZ,
                                                        errorOrigin: F.i.SHOP_PAGE,
                                                        errorMessage: null == eE ? void 0 : eE.message
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
                                                        isFetchingCategories: eP
                                                    });
                                                case z.AW.CATALOG:
                                                    return (0, r.jsx)('div', {
                                                        className: K.pageWrapper,
                                                        children: (0, r.jsxs)('main', {
                                                            className: a()(K.page, {
                                                                [K.pageFullscreen]: n,
                                                                [K.pageWithPagination]: eG && (null == eB ? void 0 : eB.length) > ez
                                                            }),
                                                            children: [
                                                                (0, r.jsx)(A.Z, {
                                                                    isFetchingCategories: eP,
                                                                    sortedCategories: eX,
                                                                    setCategoryRef: eF,
                                                                    isPremiumUser: ej,
                                                                    initialItemCardRef: eL,
                                                                    setIsGiftEasterEggEnabled: eR,
                                                                    isGiftEasterEggEnabled: eN,
                                                                    isFullScreen: n
                                                                }),
                                                                eG &&
                                                                    eB.length > ez &&
                                                                    (0, r.jsx)('div', {
                                                                        className: K.paginationContainer,
                                                                        children: (0, r.jsx)('div', {
                                                                            children: (0, r.jsx)(d.D, {
                                                                                currentPage: eV,
                                                                                totalCount: eB.length,
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
                                        })(ea)
                                    ]
                                })
                            })
                        }),
                        eN && (0, r.jsx)(M.Z, {}),
                        J({
                            isFullScreen: n,
                            tab: i
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
