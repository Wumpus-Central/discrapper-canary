n.r(t), n.d(t, { default: () => J }), n(388685), n(539854);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(180650),
    s = n(399606),
    c = n(704215),
    u = n(952265),
    d = n(481060),
    b = n(150063),
    p = n(100527),
    f = n(906732),
    g = n(702486),
    h = n(605236),
    m = n(977395),
    _ = n(214852),
    C = n(290026),
    v = n(511050),
    x = n(819640),
    O = n(594174),
    j = n(626135),
    y = n(74538),
    S = n(960048),
    k = n(381585),
    P = n(597688),
    E = n(328347),
    w = n(744112),
    B = n(139668),
    I = n(223143),
    T = n(298228),
    N = n(309956),
    L = n(193227),
    A = n(426171),
    Z = n(752053),
    R = n(963102),
    F = n(508498),
    W = n(373113),
    H = n(681435),
    D = n(81136),
    M = n(566564),
    V = n(531864),
    U = n(215023),
    G = n(981631),
    z = n(921944),
    q = n(420212),
    Y = n(474936),
    $ = n(484920);
let K = (e) => {
        let { isFullScreen: t, tab: n } = e;
        return !t && n !== U.AW.CATALOG;
    },
    X = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            a = (0, u.f9)();
        return (
            l.useEffect(() => {
                if (!n || a) return;
                let e = (e) => {
                    e.key === q.mR.Escape && r();
                };
                return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
            }, [n, a, r]),
            t
        );
    },
    J = function (e) {
        var t;
        let { isFullScreen: n = !0, tab: a = U.AW.HOME } = e;
        (0, _.z)(m.f);
        let { analyticsSource: u, analyticsLocations: q } = (0, s.cj)([E.Z], () => E.Z.getAnalytics()),
            J = l.useMemo(() => {
                switch (a) {
                    case U.AW.ORBS:
                        return p.Z.COLLECTIBLES_SHOP_ORBS_TAB;
                    case U.AW.HOME:
                        return p.Z.COLLECTIBLES_SHOP_HOME_SCREEN;
                    case U.AW.CATALOG:
                        return p.Z.COLLECTIBLES_SHOP_FULLSCREEN;
                }
            }, [a]),
            { analyticsLocations: Q, newestAnalyticsLocation: ee } = (0, f.ZP)([...q, p.Z.COLLECTIBLES_SHOP, J]),
            { sessionId: et, scrollerRef: en, scrollHandler: er } = (0, g._)(G.rMx.COLLECTIBLES_SHOP_SCROLLED, u),
            { selectedTab: el, transitionState: ea, transitionToTab: eo } = (0, N.B)(en, a, n),
            [ei, es] = l.useState(!1),
            ec = (0, B.R)('CollectiblesShop'),
            [eu, ed] = l.useState(U.IV),
            [eb, ep] = l.useState(),
            [ef, eg] = l.useState(),
            { noCache: eh, includeUnpublished: em } = (0, D.Z)(),
            { closeIntroToOrbsClaimedCoachmark: e_ } = (0, v.Z)({ location: 'CollectiblesShop' });
        l.useEffect(
            () => () => {
                e_();
            },
            [u, e_]
        );
        let eC = (0, s.e7)([x.Z], () => x.Z.getLayers().includes(G.S9g.COLLECTIBLES_SHOP)),
            { onClose: ev } = (0, F.Db)(),
            ex = (0, s.e7)([O.default], () => O.default.getCurrentUser()),
            eO = y.ZP.canUseCollectibles(ex),
            { categories: ej, isFetchingCategories: ey, fetchCategoriesError: eS, fetchPurchasesError: ek, claimError: eP, refreshCategories: eE } = (0, I.ZP)({ location: 'CollectiblesShop.web' }),
            ew = null != (t = null != eS ? eS : ek) ? t : eP;
        (0, C.P)();
        let eB = (0, T.O)(ej),
            eI = l.useRef(null),
            [eT, eN] = l.useState(!1);
        (0, A.Kp)({
            isFetchingCategories: ey,
            isLayer: eC,
            initialItemCardRef: eI
        }),
            l.useEffect(() => {
                if (ea === U.f7.VISIBLE && ee === J) {
                    var e;
                    let t;
                    (t = el === U.AW.CATALOG ? ef : u),
                        j.default.track(G.rMx.COLLECTIBLES_SHOP_VIEWED, {
                            location_stack: Q,
                            source: t,
                            page_session_id: et,
                            page_type: el === U.AW.CATALOG ? 'full' : el,
                            category: el === U.AW.HOME || null == (e = P.Z.getCategory(eb)) ? void 0 : e.name
                        });
                }
            }, [Q, u, et, eb, ep, ef, ea, el, J, ee]),
            l.useEffect(() => {
                null == ex ||
                    eO ||
                    j.default.track(G.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: Y.cd.COLLECTIBLES_SHOP,
                        location_stack: Q
                    });
            }, [eO, Q, ex]);
        let { dismissShopButtonDC: eL } = (0, H.Z)();
        l.useEffect(() => {
            eL(),
                (0, h.un)(c.z.COLLECTIBLES_GIFTING_COACHMARK) ||
                    (0, h.EW)(c.z.COLLECTIBLES_GIFTING_COACHMARK, {
                        dismissAction: z.L.AUTO_DISMISS,
                        forceTrack: !0
                    });
        }, [eL]),
            l.useEffect(() => {
                n || (0, b.Y)(G.Z5c.COLLECTIBLES_SHOP);
            }, [n]);
        let eA = l.useCallback(() => {
                eE();
            }, [eE]),
            { setCategoryRef: eZ, handleScrollToCategory: eR } = (0, A.xV)(en.current),
            { reducedMotion: eF } = l.useContext(d.Sfi),
            eW = l.useRef(null),
            eH = l.useRef(null);
        (0, d.Tbt)(eW),
            l.useEffect(() => {
                if (!n) {
                    var e;
                    null == (e = eH.current) || e.focus();
                }
            }, [n]);
        let eD = l.useCallback(
                async (e, t, r) => {
                    let l = r && !n && !eF.enabled;
                    eg(e), ep(t), t === i.T.ORB ? await eo(U.AW.ORBS, r) : (await eo(U.AW.CATALOG, l), t && eR(t));
                },
                [eR, n, eF.enabled, eo]
            ),
            eM = (0, w.b)('Collectibles Shop Button'),
            eV = (0, s.e7)([P.Z], () => {
                var e;
                return null == (e = P.Z.getCategory(eb)) ? void 0 : e.name;
            });
        return (0, r.jsx)(f.Gt, {
            value: Q,
            children: (0, r.jsx)(k.k0, {
                newValue: {
                    sessionId: et,
                    pageCategory: eV
                },
                children: (0, r.jsxs)(X, {
                    onClose: ev,
                    shouldAddEventListener: n && !eC,
                    children: [
                        (0, r.jsx)('div', {
                            className: $.shop,
                            ref: n ? eW : eH,
                            tabIndex: -1,
                            children: (0, r.jsx)(d.Den, {
                                className: $.shopScroll,
                                ref: en,
                                onScroll: () => {
                                    if ((er(), null != en.current)) {
                                        let e = en.current.getDistanceFromBottom();
                                        eu >= ec ? es(e < 20) : e <= 200 && ed(eu + U.IV);
                                    }
                                },
                                children: (0, r.jsxs)('div', {
                                    className: o()($.shopViewWrapper, {
                                        [$.visible]: ea === U.f7.VISIBLE,
                                        [$.in]: ea === U.f7.IN,
                                        [$.out]: ea === U.f7.OUT
                                    }),
                                    children: [
                                        (0, r.jsx)(R.I, {
                                            isFullScreen: n,
                                            isLayer: eC,
                                            onClose: ev,
                                            handleTransition: eo,
                                            selectedTab: el
                                        }),
                                        (function (e) {
                                            if (null != ew) {
                                                var t, l;
                                                let e = [];
                                                return (
                                                    null != eS ? e.push('shop load fetch categories error: '.concat(ew.message)) : null != ek ? e.push('shop load fetch purchase error: '.concat(ew.message)) : e.push('shop load claim error: '.concat(ew.message)),
                                                    S.Z.captureMessage(e.join('\n'), {
                                                        tags: {
                                                            isStaff: null != (l = null == ex || null == (t = ex.isStaff()) ? void 0 : t.toString()) ? l : 'unknown',
                                                            preloadEnabled: eM.toString(),
                                                            disableCache: eh.toString(),
                                                            includeUnpublished: em.toString()
                                                        }
                                                    }),
                                                    (0, r.jsx)(Z.Z, {
                                                        onRetry: eA,
                                                        errorOrigin: Z.i.SHOP_PAGE,
                                                        errorMessage: null == eS ? void 0 : eS.message
                                                    })
                                                );
                                            }
                                            switch (e) {
                                                case U.AW.HOME:
                                                case U.AW.ORBS:
                                                    return (0, r.jsx)(M.Z, {
                                                        isFullScreen: n,
                                                        handleTransition: eD,
                                                        numVisibleItems: eu,
                                                        tab: e,
                                                        isFetchingCategories: ey
                                                    });
                                                case U.AW.CATALOG:
                                                    return (0, r.jsx)('div', {
                                                        className: $.pageWrapper,
                                                        children: (0, r.jsx)('main', {
                                                            className: o()($.page, { [$.pageFullscreen]: n }),
                                                            children: (0, r.jsx)(L.Z, {
                                                                isFetchingCategories: ey,
                                                                sortedCategories: eB,
                                                                setCategoryRef: eZ,
                                                                isPremiumUser: eO,
                                                                initialItemCardRef: eI,
                                                                setIsGiftEasterEggEnabled: eN,
                                                                isGiftEasterEggEnabled: eT,
                                                                isFullScreen: n
                                                            })
                                                        })
                                                    });
                                                default:
                                                    return null;
                                            }
                                        })(el)
                                    ]
                                })
                            })
                        }),
                        eT && (0, r.jsx)(W.Z, {}),
                        K({
                            isFullScreen: n,
                            tab: a
                        }) &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(V.Z, {
                                        peaking: ei,
                                        transitioning: ea === U.f7.OUT
                                    }),
                                    (0, r.jsx)(V.Z, {
                                        style: { left: 1850 },
                                        peaking: ei,
                                        transitioning: ea === U.f7.OUT
                                    })
                                ]
                            })
                    ]
                })
            })
        });
    };
