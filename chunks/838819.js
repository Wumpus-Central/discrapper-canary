n.r(t), n.d(t, { default: () => X }), n(388685), n(539854);
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
    b = n(150063),
    f = n(211266),
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
    k = n(951904),
    T = n(139668),
    I = n(780475),
    L = n(223143),
    B = n(298228),
    w = n(309956),
    N = n(193227),
    A = n(426171),
    R = n(752053),
    Z = n(963102),
    F = n(508498),
    D = n(373113),
    H = n(849217),
    M = n(81136),
    W = n(566564),
    V = n(763891),
    U = n(921120),
    G = n(215023),
    z = n(981631),
    q = n(420212),
    K = n(484920);
let Y = (e) => {
        let { isFullScreen: t, tab: n } = e;
        return !t && (n === G.AW.HOME || n === G.AW.ORBS);
    },
    $ = (e) => {
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
    X = function (e) {
        var t;
        let { isFullScreen: n = !0, tab: a = G.AW.HOME } = e;
        (0, _.z)(m.f);
        let u = (0, f.Z)((0, o.Z)()),
            q = (0, c.e7)([x.default], () => x.default.getCurrentUser()),
            X = (0, T.R)('CollectiblesShop'),
            J = l.useRef(null),
            { selectedTab: Q, transitionState: ee, transitionToTab: et } = (0, w.B)(J, a, n),
            { handleScroll: en, numVisibleItems: er, scrollerAtBottom: el } = (0, h.z)(J, u, Q, X),
            [ea, ei] = l.useState(),
            [eo, es] = l.useState(),
            { noCache: ec, includeUnpublished: eu } = (0, M.Z)(),
            { closeIntroToOrbsClaimedCoachmark: ed } = (0, v.Z)({ location: 'CollectiblesShop' });
        l.useEffect(
            () => () => {
                ed();
            },
            [u, ed]
        );
        let ep = (0, c.e7)([O.Z], () => O.Z.getLayers().includes(z.S9g.COLLECTIBLES_SHOP)),
            { onClose: eb } = (0, F.Db)(),
            {
                categories: ef,
                isFetchingCategories: eg,
                fetchCategoriesError: eh,
                fetchPurchasesError: em,
                claimError: e_,
                refreshCategories: eC
            } = (0, L.ZP)(
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
            ev = null != (t = null != eh ? eh : em) ? t : e_;
        (0, C.P)();
        let eO = (0, B.O)(ef),
            ex = l.useRef(null),
            [eS, eE] = l.useState(!1);
        (0, A.Kp)({
            isFetchingCategories: eg,
            isLayer: ep,
            initialItemCardRef: ex
        }),
            (0, I.q3)(u, Q, ea, ee, eo),
            (0, I.EB)(Q, q),
            (0, H.Z)(),
            l.useEffect(() => {
                n || (0, b.Y)(z.Z5c.COLLECTIBLES_SHOP);
            }, [n]);
        let ey = l.useCallback(() => {
                eC();
            }, [eC]),
            { setCategoryRef: ej, handleScrollToCategory: eP } = (0, A.xV)(J.current),
            { reducedMotion: ek } = l.useContext(p.Sfi),
            eT = l.useRef(null),
            eI = l.useRef(null);
        (0, p.Tbt)(eT),
            l.useEffect(() => {
                if (!n) {
                    var e;
                    null == (e = eI.current) || e.focus();
                }
            }, [n]);
        let [eL, eB] = l.useState(1),
            { isPaginationEnabled: ew, categoriesPerPage: eN } = (0, k.a)('CollectiblesShop'),
            eA = l.useCallback(
                (e) => {
                    if (!ew || eN <= 0) return 1;
                    let t = eO.findIndex((t) => t.skuId === e);
                    return -1 === t ? 1 : Math.floor(t / eN) + 1;
                },
                [eO, ew, eN]
            ),
            eR = l.useCallback(
                async (e, t, r) => {
                    let l = r && !n && !ek.enabled;
                    if ((es(e), ei(t), t === s.T.ORB)) await et(G.AW.ORBS, r);
                    else if ((await et(G.AW.CATALOG, l), t)) {
                        if (ew && eN > 0) {
                            let e = eA(t);
                            e !== eL && eB(e);
                        }
                        eP(t);
                    }
                },
                [eP, n, ek.enabled, et, ew, eN, eA, eL, eB]
            ),
            eZ = (0, P.b)('Collectibles Shop Button'),
            eF = l.useMemo(() => {
                if (!ew) return eO;
                let e = (eL - 1) * eN;
                return eO.slice(e, e + eN);
            }, [eO, ew, eN, eL]),
            eD = l.useRef(null),
            eH = l.useCallback(
                (e) => {
                    eB(e), null != J.current && null != eD.current ? J.current.scrollTo({ to: eD.current.getBoundingClientRect().top }) : null != J.current && J.current.scrollTo({ to: 0 });
                },
                [J, eB]
            ),
            eM = (0, c.e7)([j.Z], () => {
                var e;
                return null == (e = j.Z.getCategory(ea)) ? void 0 : e.name;
            }),
            { analyticsLocations: eW } = (0, I.MV)(Q);
        return (0, r.jsx)(g.Gt, {
            value: eW,
            children: (0, r.jsx)(y.k0, {
                newValue: {
                    sessionId: u,
                    pageCategory: eM,
                    pageIndex: eL,
                    pageSize: eN
                },
                children: (0, r.jsxs)($, {
                    onClose: eb,
                    shouldAddEventListener: n && !ep,
                    children: [
                        (0, r.jsx)('div', {
                            className: K.shop,
                            ref: n ? eT : eI,
                            tabIndex: -1,
                            children: (0, r.jsx)(p.Den, {
                                className: K.shopScroll,
                                ref: J,
                                onScroll: en,
                                children: (0, r.jsxs)('div', {
                                    className: i()(K.shopViewWrapper, {
                                        [K.visible]: ee === G.f7.VISIBLE,
                                        [K.in]: ee === G.f7.IN,
                                        [K.out]: ee === G.f7.OUT
                                    }),
                                    children: [
                                        (0, r.jsx)(Z.I, {
                                            isFullScreen: n,
                                            isLayer: ep,
                                            onClose: eb,
                                            handleTransition: et,
                                            selectedTab: Q
                                        }),
                                        (function (e) {
                                            if (null != ev) {
                                                var t, l;
                                                let e = [];
                                                return (
                                                    null != eh ? e.push('shop load fetch categories error: '.concat(ev.message)) : null != em ? e.push('shop load fetch purchase error: '.concat(ev.message)) : e.push('shop load claim error: '.concat(ev.message)),
                                                    E.Z.captureMessage(e.join('\n'), {
                                                        tags: {
                                                            isStaff: null != (l = null == q || null == (t = q.isStaff()) ? void 0 : t.toString()) ? l : 'unknown',
                                                            preloadEnabled: eZ.toString(),
                                                            disableCache: ec.toString(),
                                                            includeUnpublished: eu.toString()
                                                        }
                                                    }),
                                                    (0, r.jsx)(R.Z, {
                                                        onRetry: ey,
                                                        errorOrigin: R.i.SHOP_PAGE,
                                                        errorMessage: null == eh ? void 0 : eh.message
                                                    })
                                                );
                                            }
                                            switch (e) {
                                                case G.AW.HOME:
                                                case G.AW.ORBS:
                                                    return (0, r.jsx)(W.Z, {
                                                        isFullScreen: n,
                                                        handleTransition: eR,
                                                        numVisibleItems: er,
                                                        tab: e,
                                                        isFetchingCategories: eg
                                                    });
                                                case G.AW.AVATAR_DECORATIONS:
                                                case G.AW.PROFILE_EFFECTS:
                                                case G.AW.NAMEPLATES:
                                                case G.AW.BUNDLES:
                                                    return (0, r.jsx)('div', {
                                                        className: K.pageWrapper,
                                                        children: (0, r.jsx)('main', {
                                                            className: i()(K.page, K.pageWithPagination, { [K.pageFullscreen]: n }),
                                                            children: (0, r.jsx)(
                                                                V.Z,
                                                                {
                                                                    isFetchingCategories: eg,
                                                                    isFullScreen: n,
                                                                    scrollerRef: J,
                                                                    tab: e
                                                                },
                                                                e
                                                            )
                                                        })
                                                    });
                                                case G.AW.CATALOG:
                                                    return (0, r.jsx)('div', {
                                                        className: K.pageWrapper,
                                                        children: (0, r.jsxs)('main', {
                                                            className: i()(K.page, {
                                                                [K.pageFullscreen]: n,
                                                                [K.pageWithPagination]: ew && (null == eO ? void 0 : eO.length) > eN
                                                            }),
                                                            children: [
                                                                (0, r.jsx)(N.Z, {
                                                                    isFetchingCategories: eg,
                                                                    sortedCategories: eF,
                                                                    setCategoryRef: ej,
                                                                    isPremiumUser: S.ZP.canUseCollectibles(q),
                                                                    initialItemCardRef: ex,
                                                                    setIsGiftEasterEggEnabled: eE,
                                                                    isGiftEasterEggEnabled: eS,
                                                                    isFullScreen: n
                                                                }),
                                                                ew &&
                                                                    eO.length > eN &&
                                                                    (0, r.jsx)('div', {
                                                                        className: K.paginationContainer,
                                                                        children: (0, r.jsx)('div', {
                                                                            children: (0, r.jsx)(d.D, {
                                                                                currentPage: eL,
                                                                                totalCount: eO.length,
                                                                                pageSize: eN,
                                                                                onPageChange: eH,
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
                                        })(Q)
                                    ]
                                })
                            })
                        }),
                        eS && (0, r.jsx)(D.Z, {}),
                        Y({
                            isFullScreen: n,
                            tab: Q
                        }) &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(U.Z, {
                                        peaking: el,
                                        transitioning: ee === G.f7.OUT
                                    }),
                                    (0, r.jsx)(U.Z, {
                                        style: { left: 1850 },
                                        peaking: el,
                                        transitioning: ee === G.f7.OUT
                                    })
                                ]
                            })
                    ]
                })
            })
        });
    };
