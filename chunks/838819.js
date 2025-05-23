n.r(t), n.d(t, { default: () => et }), n(388685), n(539854);
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(180650),
    s = n(399606),
    c = n(704215),
    u = n(952265),
    d = n(4738),
    p = n(481060),
    b = n(150063),
    f = n(100527),
    g = n(906732),
    h = n(702486),
    m = n(605236),
    _ = n(977395),
    C = n(214852),
    v = n(290026),
    O = n(511050),
    x = n(819640),
    S = n(594174),
    E = n(626135),
    j = n(74538),
    P = n(960048),
    y = n(381585),
    k = n(597688),
    T = n(328347),
    I = n(744112),
    L = n(951904),
    B = n(139668),
    w = n(223143),
    N = n(298228),
    A = n(309956),
    R = n(193227),
    Z = n(426171),
    F = n(752053),
    D = n(963102),
    H = n(508498),
    M = n(373113),
    W = n(681435),
    V = n(81136),
    U = n(566564),
    G = n(763891),
    z = n(531864),
    q = n(215023),
    Y = n(981631),
    $ = n(921944),
    K = n(420212),
    X = n(474936),
    J = n(842817);
let Q = (e) => {
        let { isFullScreen: t, tab: n } = e;
        return !t && (n === q.AW.HOME || n === q.AW.ORBS);
    },
    ee = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            a = (0, u.f9)();
        return (
            l.useEffect(() => {
                if (!n || a) return;
                let e = (e) => {
                    e.key === K.mR.Escape && r();
                };
                return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
            }, [n, a, r]),
            t
        );
    },
    et = function (e) {
        var t;
        let { isFullScreen: n = !0, tab: a = q.AW.HOME } = e;
        (0, C.z)(_.f);
        let { analyticsSource: u, analyticsLocations: K } = (0, s.cj)([T.Z], () => T.Z.getAnalytics()),
            et = l.useMemo(() => {
                switch (a) {
                    case q.AW.ORBS:
                        return f.Z.COLLECTIBLES_SHOP_ORBS_TAB;
                    case q.AW.HOME:
                        return f.Z.COLLECTIBLES_SHOP_HOME_SCREEN;
                    case q.AW.BUNDLES:
                        return f.Z.COLLECTIBLES_SHOP_BUNDLES_TAB;
                    case q.AW.AVATAR_DECORATIONS:
                        return f.Z.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
                    case q.AW.PROFILE_EFFECTS:
                        return f.Z.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
                    case q.AW.NAMEPLATES:
                        return f.Z.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
                    case q.AW.CATALOG:
                        return f.Z.COLLECTIBLES_SHOP_FULLSCREEN;
                }
            }, [a]),
            { analyticsLocations: en, newestAnalyticsLocation: er } = (0, g.ZP)([...K, f.Z.COLLECTIBLES_SHOP, et]),
            { sessionId: el, scrollerRef: ea, scrollHandler: ei } = (0, h._)(Y.rMx.COLLECTIBLES_SHOP_SCROLLED, u),
            { selectedTab: eo, transitionState: es, transitionToTab: ec } = (0, A.B)(ea, a, n),
            [eu, ed] = l.useState(!1),
            ep = (0, B.R)('CollectiblesShop'),
            [eb, ef] = l.useState(q.IV),
            [eg, eh] = l.useState(),
            [em, e_] = l.useState(),
            { noCache: eC, includeUnpublished: ev } = (0, V.Z)(),
            { closeIntroToOrbsClaimedCoachmark: eO } = (0, O.Z)({ location: 'CollectiblesShop' });
        l.useEffect(
            () => () => {
                eO();
            },
            [u, eO]
        );
        let ex = (0, s.e7)([x.Z], () => x.Z.getLayers().includes(Y.S9g.COLLECTIBLES_SHOP)),
            { onClose: eS } = (0, H.Db)(),
            eE = (0, s.e7)([S.default], () => S.default.getCurrentUser()),
            ej = j.ZP.canUseCollectibles(eE),
            {
                categories: eP,
                isFetchingCategories: ey,
                fetchCategoriesError: ek,
                fetchPurchasesError: eT,
                claimError: eI,
                refreshCategories: eL
            } = (0, w.ZP)(
                {
                    location: 'CollectiblesShop.web',
                    logPerf: !0
                },
                {
                    sessionId: el,
                    tab: a,
                    isFullScreen: n
                }
            ),
            eB = null != (t = null != ek ? ek : eT) ? t : eI;
        (0, v.P)();
        let ew = (0, N.O)(eP),
            eN = l.useRef(null),
            [eA, eR] = l.useState(!1);
        (0, Z.Kp)({
            isFetchingCategories: ey,
            isLayer: ex,
            initialItemCardRef: eN
        }),
            l.useEffect(() => {
                if (es === q.f7.VISIBLE && er === et) {
                    var e;
                    let t;
                    (t = eo === q.AW.CATALOG ? em : u),
                        E.default.track(Y.rMx.COLLECTIBLES_SHOP_VIEWED, {
                            location_stack: en,
                            source: t,
                            page_session_id: el,
                            page_type: eo === q.AW.CATALOG ? 'full' : eo,
                            category: eo === q.AW.HOME || null == (e = k.Z.getCategory(eg)) ? void 0 : e.name
                        });
                }
            }, [en, u, el, eg, eh, em, es, eo, et, er]),
            l.useEffect(() => {
                null == eE ||
                    ej ||
                    E.default.track(Y.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: X.cd.COLLECTIBLES_SHOP,
                        location_stack: en
                    });
            }, [ej, en, eE]);
        let { dismissShopButtonDC: eZ } = (0, W.Z)();
        l.useEffect(() => {
            eZ(),
                (0, m.un)(c.z.COLLECTIBLES_GIFTING_COACHMARK) ||
                    (0, m.EW)(c.z.COLLECTIBLES_GIFTING_COACHMARK, {
                        dismissAction: $.L.AUTO_DISMISS,
                        forceTrack: !0
                    });
        }, [eZ]),
            l.useEffect(() => {
                n || (0, b.Y)(Y.Z5c.COLLECTIBLES_SHOP);
            }, [n]);
        let eF = l.useCallback(() => {
                eL();
            }, [eL]),
            { setCategoryRef: eD, handleScrollToCategory: eH } = (0, Z.xV)(ea.current),
            { reducedMotion: eM } = l.useContext(p.Sfi),
            eW = l.useRef(null),
            eV = l.useRef(null);
        (0, p.Tbt)(eW),
            l.useEffect(() => {
                if (!n) {
                    var e;
                    null == (e = eV.current) || e.focus();
                }
            }, [n]);
        let [eU, eG] = l.useState(1),
            { isPaginationEnabled: ez, categoriesPerPage: eq } = (0, L.a)('CollectiblesShop'),
            eY = l.useCallback(
                (e) => {
                    if (!ez || eq <= 0) return 1;
                    let t = ew.findIndex((t) => t.skuId === e);
                    return -1 === t ? 1 : Math.floor(t / eq) + 1;
                },
                [ew, ez, eq]
            ),
            e$ = l.useCallback(
                async (e, t, r) => {
                    let l = r && !n && !eM.enabled;
                    if ((e_(e), eh(t), t === o.T.ORB)) await ec(q.AW.ORBS, r);
                    else if ((await ec(q.AW.CATALOG, l), t)) {
                        if (ez && eq > 0) {
                            let e = eY(t);
                            e !== eU && eG(e);
                        }
                        eH(t);
                    }
                },
                [eH, n, eM.enabled, ec, ez, eq, eY, eU, eG]
            ),
            eK = (0, I.b)('Collectibles Shop Button'),
            eX = l.useMemo(() => {
                if (!ez) return ew;
                let e = (eU - 1) * eq;
                return ew.slice(e, e + eq);
            }, [ew, ez, eq, eU]),
            eJ = l.useRef(null),
            eQ = l.useCallback(
                (e) => {
                    eG(e), null != ea.current && null != eJ.current ? ea.current.scrollTo({ to: eJ.current.getBoundingClientRect().top }) : null != ea.current && ea.current.scrollTo({ to: 0 });
                },
                [ea, eG]
            ),
            e0 = (0, s.e7)([k.Z], () => {
                var e;
                return null == (e = k.Z.getCategory(eg)) ? void 0 : e.name;
            });
        return (0, r.jsx)(g.Gt, {
            value: en,
            children: (0, r.jsx)(y.k0, {
                newValue: {
                    sessionId: el,
                    pageCategory: e0
                },
                children: (0, r.jsxs)(ee, {
                    onClose: eS,
                    shouldAddEventListener: n && !ex,
                    children: [
                        (0, r.jsx)('div', {
                            className: J.shop,
                            ref: n ? eW : eV,
                            tabIndex: -1,
                            children: (0, r.jsx)(p.Den, {
                                className: J.shopScroll,
                                ref: ea,
                                onScroll: () => {
                                    if ((ei(), null != ea.current)) {
                                        let e = ea.current.getDistanceFromBottom();
                                        eb >= ep ? ed(e < 20) : e <= 200 && ef(eb + q.IV);
                                    }
                                },
                                children: (0, r.jsxs)('div', {
                                    className: i()(J.shopViewWrapper, {
                                        [J.visible]: es === q.f7.VISIBLE,
                                        [J.in]: es === q.f7.IN,
                                        [J.out]: es === q.f7.OUT
                                    }),
                                    children: [
                                        (0, r.jsx)(D.I, {
                                            isFullScreen: n,
                                            isLayer: ex,
                                            onClose: eS,
                                            handleTransition: ec,
                                            selectedTab: eo
                                        }),
                                        (function (e) {
                                            if (null != eB) {
                                                var t, l;
                                                let e = [];
                                                return (
                                                    null != ek ? e.push('shop load fetch categories error: '.concat(eB.message)) : null != eT ? e.push('shop load fetch purchase error: '.concat(eB.message)) : e.push('shop load claim error: '.concat(eB.message)),
                                                    P.Z.captureMessage(e.join('\n'), {
                                                        tags: {
                                                            isStaff: null != (l = null == eE || null == (t = eE.isStaff()) ? void 0 : t.toString()) ? l : 'unknown',
                                                            preloadEnabled: eK.toString(),
                                                            disableCache: eC.toString(),
                                                            includeUnpublished: ev.toString()
                                                        }
                                                    }),
                                                    (0, r.jsx)(F.Z, {
                                                        onRetry: eF,
                                                        errorOrigin: F.i.SHOP_PAGE,
                                                        errorMessage: null == ek ? void 0 : ek.message
                                                    })
                                                );
                                            }
                                            switch (e) {
                                                case q.AW.HOME:
                                                case q.AW.ORBS:
                                                    return (0, r.jsx)(U.Z, {
                                                        isFullScreen: n,
                                                        handleTransition: e$,
                                                        numVisibleItems: eb,
                                                        tab: e,
                                                        isFetchingCategories: ey
                                                    });
                                                case q.AW.AVATAR_DECORATIONS:
                                                case q.AW.PROFILE_EFFECTS:
                                                case q.AW.NAMEPLATES:
                                                case q.AW.BUNDLES:
                                                    return (0, r.jsx)('div', {
                                                        className: J.pageWrapper,
                                                        children: (0, r.jsx)('main', {
                                                            className: i()(J.page, J.pageWithPagination, { [J.pageFullscreen]: n }),
                                                            children: (0, r.jsx)(
                                                                G.Z,
                                                                {
                                                                    isFetchingCategories: ey,
                                                                    isFullScreen: n,
                                                                    scrollerRef: ea,
                                                                    tab: e
                                                                },
                                                                e
                                                            )
                                                        })
                                                    });
                                                case q.AW.CATALOG:
                                                    return (0, r.jsx)('div', {
                                                        className: J.pageWrapper,
                                                        children: (0, r.jsxs)('main', {
                                                            className: i()(J.page, {
                                                                [J.pageFullscreen]: n,
                                                                [J.pageWithPagination]: ez && (null == ew ? void 0 : ew.length) > eq
                                                            }),
                                                            children: [
                                                                (0, r.jsx)(R.Z, {
                                                                    isFetchingCategories: ey,
                                                                    sortedCategories: eX,
                                                                    setCategoryRef: eD,
                                                                    isPremiumUser: ej,
                                                                    initialItemCardRef: eN,
                                                                    setIsGiftEasterEggEnabled: eR,
                                                                    isGiftEasterEggEnabled: eA,
                                                                    isFullScreen: n
                                                                }),
                                                                ez &&
                                                                    ew.length > eq &&
                                                                    (0, r.jsx)('div', {
                                                                        className: J.paginationContainer,
                                                                        children: (0, r.jsx)('div', {
                                                                            children: (0, r.jsx)(d.D, {
                                                                                currentPage: eU,
                                                                                totalCount: ew.length,
                                                                                pageSize: eq,
                                                                                onPageChange: eQ,
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
                                        })(eo)
                                    ]
                                })
                            })
                        }),
                        eA && (0, r.jsx)(M.Z, {}),
                        Q({
                            isFullScreen: n,
                            tab: a
                        }) &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(z.Z, {
                                        peaking: eu,
                                        transitioning: es === q.f7.OUT
                                    }),
                                    (0, r.jsx)(z.Z, {
                                        style: { left: 1850 },
                                        peaking: eu,
                                        transitioning: es === q.f7.OUT
                                    })
                                ]
                            })
                    ]
                })
            })
        });
    };
