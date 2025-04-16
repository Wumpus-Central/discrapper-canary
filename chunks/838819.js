n.r(t), n.d(t, { default: () => X }), n(388685), n(539854);
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
    E = n(597688),
    P = n(328347),
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
    X = function (e) {
        var t;
        let { isFullScreen: n = !0, tab: a = U.AW.HOME } = e;
        (0, _.z)(m.f);
        let { analyticsSource: X, analyticsLocations: J } = (0, s.cj)([P.Z], () => P.Z.getAnalytics()),
            Q = l.useMemo(() => {
                switch (a) {
                    case U.AW.ORBS:
                        return p.Z.COLLECTIBLES_SHOP_ORBS_TAB;
                    case U.AW.HOME:
                        return p.Z.COLLECTIBLES_SHOP_HOME_SCREEN;
                    case U.AW.CATALOG:
                        return p.Z.COLLECTIBLES_SHOP_FULLSCREEN;
                }
            }, [a]),
            { analyticsLocations: ee, newestAnalyticsLocation: et } = (0, f.ZP)([...J, p.Z.COLLECTIBLES_SHOP, Q]),
            { sessionId: en, scrollerRef: er, scrollHandler: el } = (0, g._)(G.rMx.COLLECTIBLES_SHOP_SCROLLED, X),
            { selectedTab: ea, transitionState: eo, transitionToTab: ei } = (0, N.B)(er, a, n),
            [es, ec] = l.useState(!1),
            eu = (0, B.R)('CollectiblesShop'),
            [ed, eb] = l.useState(U.IV),
            [ep, ef] = l.useState(),
            [eg, eh] = l.useState(),
            { noCache: em, includeUnpublished: e_ } = (0, D.Z)(),
            { closeIntroToOrbsClaimedCoachmark: eC } = (0, v.Z)({ location: 'CollectiblesShop' });
        l.useEffect(
            () => () => {
                eC();
            },
            [X, eC]
        );
        let ev = (0, s.e7)([x.Z], () => x.Z.getLayers().includes(G.S9g.COLLECTIBLES_SHOP)),
            ex = (0, u.f9)(),
            { onClose: eO } = (0, F.Db)(),
            ej = (0, s.e7)([O.default], () => O.default.getCurrentUser()),
            ey = y.ZP.canUseCollectibles(ej),
            { categories: eS, isFetchingCategories: ek, fetchCategoriesError: eE, fetchPurchasesError: eP, claimError: ew, refreshCategories: eB } = (0, I.ZP)({ location: 'CollectiblesShop.web' }),
            eI = null != (t = null != eE ? eE : eP) ? t : ew;
        (0, C.P)();
        let eT = (0, T.O)(eS),
            eN = l.useRef(null),
            [eL, eA] = l.useState(!1);
        (0, A.Kp)({
            isFetchingCategories: ek,
            isLayer: ev,
            initialItemCardRef: eN
        }),
            l.useEffect(() => {
                if (eo === U.f7.VISIBLE && et === Q) {
                    var e;
                    let t;
                    (t = ea === U.AW.CATALOG ? eg : X),
                        j.default.track(G.rMx.COLLECTIBLES_SHOP_VIEWED, {
                            location_stack: ee,
                            source: t,
                            page_session_id: en,
                            page_type: ea === U.AW.CATALOG ? 'full' : ea,
                            category: ea === U.AW.HOME || null == (e = E.Z.getCategory(ep)) ? void 0 : e.name
                        });
                }
            }, [ee, X, en, ep, ef, eg, eo, ea, Q, et]),
            l.useEffect(() => {
                null == ej ||
                    ey ||
                    j.default.track(G.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: Y.cd.COLLECTIBLES_SHOP,
                        location_stack: ee
                    });
            }, [ey, ee, ej]);
        let { dismissShopButtonDC: eZ } = (0, H.Z)();
        l.useEffect(() => {
            eZ(),
                (0, h.un)(c.z.COLLECTIBLES_GIFTING_COACHMARK) ||
                    (0, h.EW)(c.z.COLLECTIBLES_GIFTING_COACHMARK, {
                        dismissAction: z.L.AUTO_DISMISS,
                        forceTrack: !0
                    });
        }, [eZ]),
            l.useEffect(() => {
                n || (0, b.Y)(G.Z5c.COLLECTIBLES_SHOP);
            }, [n]),
            l.useEffect(() => {
                if (!n || ev || ex) return;
                let e = (e) => {
                    e.key === q.mR.Escape && eO();
                };
                return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
            }, [n, ev, ex, eO]);
        let eR = l.useCallback(() => {
                eB();
            }, [eB]),
            { setCategoryRef: eF, handleScrollToCategory: eW } = (0, A.xV)(er.current),
            { reducedMotion: eH } = l.useContext(d.Sfi),
            eD = l.useRef(null),
            eM = l.useRef(null);
        (0, d.Tbt)(eD),
            l.useEffect(() => {
                if (!n) {
                    var e;
                    null == (e = eM.current) || e.focus();
                }
            }, [n]);
        let eV = l.useCallback(
                async (e, t, r) => {
                    let l = r && !n && !eH.enabled;
                    eh(e), ef(t), t === i.T.ORB ? await ei(U.AW.ORBS, r) : (await ei(U.AW.CATALOG, l), t && eW(t));
                },
                [eW, n, eH.enabled, ei]
            ),
            eU = (0, w.b)('Collectibles Shop Button'),
            eG = (0, s.e7)([E.Z], () => {
                var e;
                return null == (e = E.Z.getCategory(ep)) ? void 0 : e.name;
            });
        return (0, r.jsx)(f.Gt, {
            value: ee,
            children: (0, r.jsxs)(k.k0, {
                newValue: {
                    sessionId: en,
                    pageCategory: eG
                },
                children: [
                    (0, r.jsx)('div', {
                        className: $.shop,
                        ref: n ? eD : eM,
                        tabIndex: -1,
                        children: (0, r.jsx)(d.Den, {
                            className: $.shopScroll,
                            ref: er,
                            onScroll: () => {
                                if ((el(), null != er.current)) {
                                    let e = er.current.getDistanceFromBottom();
                                    ed >= eu ? ec(e < 20) : e <= 200 && eb(ed + U.IV);
                                }
                            },
                            children: (0, r.jsxs)('div', {
                                className: o()($.shopViewWrapper, {
                                    [$.visible]: eo === U.f7.VISIBLE,
                                    [$.in]: eo === U.f7.IN,
                                    [$.out]: eo === U.f7.OUT
                                }),
                                children: [
                                    (0, r.jsx)(R.I, {
                                        isFullScreen: n,
                                        isLayer: ev,
                                        onClose: eO,
                                        handleTransition: ei,
                                        selectedTab: ea
                                    }),
                                    (function (e) {
                                        if (null != eI) {
                                            var t, l;
                                            let e = [];
                                            return (
                                                null != eE ? e.push('shop load fetch categories error: '.concat(eI.message)) : null != eP ? e.push('shop load fetch purchase error: '.concat(eI.message)) : e.push('shop load claim error: '.concat(eI.message)),
                                                S.Z.captureMessage(e.join('\n'), {
                                                    tags: {
                                                        isStaff: null != (l = null == ej || null == (t = ej.isStaff()) ? void 0 : t.toString()) ? l : 'unknown',
                                                        preloadEnabled: eU.toString(),
                                                        disableCache: em.toString(),
                                                        includeUnpublished: e_.toString()
                                                    }
                                                }),
                                                (0, r.jsx)(Z.Z, {
                                                    onRetry: eR,
                                                    errorOrigin: Z.i.SHOP_PAGE,
                                                    errorMessage: null == eE ? void 0 : eE.message
                                                })
                                            );
                                        }
                                        switch (e) {
                                            case U.AW.HOME:
                                            case U.AW.ORBS:
                                                return (0, r.jsx)(M.Z, {
                                                    isFullScreen: n,
                                                    handleTransition: eV,
                                                    numVisibleItems: ed,
                                                    tab: e,
                                                    isFetchingCategories: ek
                                                });
                                            case U.AW.CATALOG:
                                                return (0, r.jsx)('div', {
                                                    className: $.pageWrapper,
                                                    children: (0, r.jsx)('main', {
                                                        className: o()($.page, { [$.pageFullscreen]: n }),
                                                        children: (0, r.jsx)(L.Z, {
                                                            isFetchingCategories: ek,
                                                            sortedCategories: eT,
                                                            setCategoryRef: eF,
                                                            isPremiumUser: ey,
                                                            initialItemCardRef: eN,
                                                            setIsGiftEasterEggEnabled: eA,
                                                            isGiftEasterEggEnabled: eL,
                                                            isFullScreen: n
                                                        })
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
                    eL && (0, r.jsx)(W.Z, {}),
                    K({
                        isFullScreen: n,
                        tab: a
                    }) &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(V.Z, {
                                    peaking: es,
                                    transitioning: eo === U.f7.OUT
                                }),
                                (0, r.jsx)(V.Z, {
                                    style: { left: 1850 },
                                    peaking: es,
                                    transitioning: eo === U.f7.OUT
                                })
                            ]
                        })
                ]
            })
        });
    };
