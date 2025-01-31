n.r(t), n.d(t, { default: () => el }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(979554),
    o = n(399606),
    d = n(704215),
    c = n(952265),
    u = n(481060),
    C = n(150063),
    h = n(434650),
    p = n(100527),
    m = n(906732),
    f = n(702486),
    g = n(605236),
    x = n(977395),
    _ = n(214852),
    v = n(479446),
    b = n(981632),
    k = n(290026),
    j = n(819640),
    E = n(594174),
    L = n(626135),
    I = n(74538),
    S = n(335131),
    T = n(381585),
    Z = n(597688),
    y = n(328347),
    B = n(307043),
    F = n(223143),
    N = n(298228),
    P = n(937510),
    w = n(309956),
    O = n(853748),
    R = n(426171),
    A = n(823941),
    H = n(752053),
    M = n(963102),
    V = n(508498),
    D = n(38900),
    W = n(709999),
    U = n(373113),
    G = n(141594),
    z = n(566564),
    q = n(531864),
    $ = n(302800),
    K = n(215023),
    Y = n(981631),
    J = n(921944),
    X = n(420212),
    Q = n(474936),
    ee = n(697526);
function et(e) {
    let { products: t, handleShopCardMount: n, header: l, category: i, isPremiumUser: s, isGiftEasterEggEnabled: a } = e,
        d = (0, o.e7)([E.default], () => E.default.getCurrentUser());
    return null == d || 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  null != l
                      ? (0, r.jsx)(u.Text, {
                            className: ee.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: l
                        })
                      : (0, r.jsx)(u.LZC, { size: 24 }),
                  (0, r.jsx)('div', {
                      className: ee.cardsContainer,
                      children: t.map((e, t) =>
                          (0, r.jsx)(
                              T.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, r.jsx)(
                                      W.Z,
                                      {
                                          onMount: n(e),
                                          isPremiumUser: s,
                                          category: i,
                                          product: e,
                                          user: d,
                                          isGiftEasterEggEnabled: a
                                      },
                                      e.skuId
                                  )
                              },
                              e.skuId
                          )
                      )
                  })
              ]
          });
}
function en(e) {
    let { category: t, initialItemCardRef: n, ...i } = e,
        s = (0, P.l)(t.products),
        a = (0, o.e7)([y.Z], () => y.Z.initialProductSkuId),
        d = l.useCallback(
            (e) => (t) => {
                var r;
                (e.skuId === a || (null === (r = e.variants) || void 0 === r ? void 0 : r.some((e) => e.skuId === a)) === !0) && (n.current = t.current);
            },
            [a, n]
        );
    return (0, r.jsx)(et, {
        products: s,
        handleShopCardMount: d,
        category: t,
        ...i
    });
}
function er(e) {
    let { category: t, isPremiumUser: n, initialItemCardRef: i, isGiftEasterEggEnabled: a, setIsGiftEasterEggEnabled: o, showEasterEggToggle: d, isFullScreen: c } = e,
        C = l.useRef(10 + 70 * Math.random()),
        [p, m] = l.useState(!1),
        f = (0, $.M7)(t.skuId),
        g = (0, h.O)(
            (e) => {
                m(e && null != f);
            },
            c ? 0.13 : 0.15
        );
    return (0, r.jsxs)('div', {
        className: ee.categoryWrapper,
        ref: g,
        children: [
            d &&
                (0, r.jsx)(u.P3F, {
                    className: s()(ee.hiddenWumpus, { [ee.hiddenWumpusEnabled]: a }),
                    onClick: () => o(!0),
                    style: { left: ''.concat(C.current, '%') },
                    children: (0, r.jsx)(b.Z, {
                        idleAnimationState: v.SR.IDLE,
                        giftStyle: Q.Cj.BOX
                    })
                }),
            (0, r.jsx)(A.Z, {
                category: t,
                hideLimitedTimeBadge: null != f
            }),
            (0, r.jsx)(en, {
                category: t,
                initialItemCardRef: i,
                isPremiumUser: n,
                isGiftEasterEggEnabled: a
            }),
            null != f &&
                null != t.unpublishedAt &&
                (0, r.jsx)(O.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: p,
                    displayOptions: f,
                    isFullScreen: c
                })
        ]
    });
}
let el = function (e) {
    var t;
    let { isFullScreen: n = !0 } = e;
    (0, _.z)(x.f);
    let i = (0, B.u)('CollectiblesShop'),
        { analyticsSource: h, analyticsLocations: v } = (0, o.cj)([y.Z], () => y.Z.getAnalytics()),
        { analyticsLocations: b } = (0, m.ZP)([...v, p.Z.COLLECTIBLES_SHOP]),
        { sessionId: P, scrollerRef: O, scrollHandler: A } = (0, f._)(Y.rMx.COLLECTIBLES_SHOP_SCROLLED, h),
        { feedState: W, catalogState: $, transitionToCatalog: et, transitionToFeed: en } = (0, w.B)(i, O),
        [el, ei] = l.useState(!1),
        [es, ea] = l.useState(K.IV),
        [eo, ed] = l.useState(),
        [ec, eu] = l.useState(),
        eC = (0, o.e7)([j.Z], () => j.Z.getLayers().includes(Y.S9g.COLLECTIBLES_SHOP)),
        eh = (0, c.f9)(),
        { onClose: ep } = (0, V.Db)(),
        em = (0, o.e7)([E.default], () => E.default.getCurrentUser()),
        ef = I.ZP.canUseCollectibles(em),
        { categories: eg, isFetchingCategories: ex, fetchCategoriesError: e_, fetchPurchasesError: ev, claimError: eb, refreshCategories: ek } = (0, F.ZP)({ location: 'CollectiblesShop.web' }),
        ej = null !== (t = null != e_ ? e_ : ev) && void 0 !== t ? t : eb;
    (0, k.P)();
    let eE = (0, N.O)(eg),
        eL = l.useRef(null),
        [eI, eS] = l.useState(!1);
    (0, R.Kp)({
        isFetchingCategories: ex,
        isLayer: eC,
        initialItemCardRef: eL
    }),
        l.useEffect(() => {
            if (W === K.f7.VISIBLE || $ === K.f7.VISIBLE) {
                var e;
                let t;
                (t = i && $ === K.f7.VISIBLE ? ec : h),
                    L.default.track(Y.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: b,
                        source: t,
                        page_session_id: P,
                        page_type: W === K.f7.VISIBLE ? 'home' : 'full',
                        category: W === K.f7.VISIBLE ? void 0 : null === (e = Z.Z.getCategory(eo)) || void 0 === e ? void 0 : e.name
                    });
            }
            ef ||
                L.default.track(Y.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: Q.cd.COLLECTIBLES_SHOP,
                    location_stack: b
                });
        }, [i, ef, b, h, P, W, $, eo, ed, ec]);
    let { dismissCollectiblesShopTabNewBadge: eT } = (0, G.Z)();
    l.useEffect(() => {
        eT(),
            !(0, g.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK) &&
                (0, g.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
                    dismissAction: J.L.AUTO_DISMISS,
                    forceTrack: !0
                });
    }, [eT]),
        l.useEffect(() => {
            n || (0, C.Y)(Y.Z5c.COLLECTIBLES_SHOP);
        }, [n]),
        l.useEffect(
            () => () => {
                (0, S.K$)({
                    categories: [...eg.values()],
                    itemTypes: [a.Z.AVATAR_DECORATION, a.Z.PROFILE_EFFECT]
                });
            },
            [eg]
        ),
        l.useEffect(() => {
            if (!n || eC || eh) return;
            let e = (e) => {
                e.key === X.mR.Escape && ep();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [n, eC, eh, ep]);
    let eZ = l.useCallback(() => {
            ek();
        }, [ek]),
        { setCategoryRef: ey, handleScrollToCategory: eB } = (0, R.xV)(O.current),
        { reducedMotion: eF } = l.useContext(u.Sfi),
        eN = l.useRef(null),
        eP = l.useRef(null);
    (0, u.Tbt)(eN),
        l.useEffect(() => {
            if (!n) {
                var e;
                null === (e = eP.current) || void 0 === e || e.focus();
            }
        }, [n]);
    let ew = l.useCallback(
            async (e, t, r) => {
                let l = r && !n && !eF.enabled;
                eu(e), ed(t), await et(l), t && eB(t);
            },
            [et, eB, n, eF]
        ),
        eO = (0, o.e7)([Z.Z], () => {
            var e;
            return null === (e = Z.Z.getCategory(eo)) || void 0 === e ? void 0 : e.name;
        });
    return (0, r.jsx)(m.Gt, {
        value: b,
        children: (0, r.jsxs)(T.k0, {
            newValue: {
                sessionId: P,
                pageCategory: eO
            },
            children: [
                (0, r.jsx)('div', {
                    className: ee.shop,
                    ref: n ? eN : eP,
                    tabIndex: -1,
                    children: (0, r.jsxs)(u.Den, {
                        className: ee.shopScroll,
                        ref: O,
                        onScroll: () => {
                            if ((A(), null != O.current)) {
                                let e = O.current.getDistanceFromBottom();
                                es >= K.iA ? ei(e < 20) : e <= 200 && ea(es + K.IV);
                            }
                        },
                        children: [
                            W !== K.f7.HIDDEN &&
                                (0, r.jsxs)('div', {
                                    className: s()(ee.shopViewWrapper, {
                                        [ee.visible]: W === K.f7.VISIBLE,
                                        [ee.in]: W === K.f7.IN,
                                        [ee.out]: W === K.f7.OUT
                                    }),
                                    children: [
                                        (0, r.jsx)(M.I, {
                                            isFullScreen: n,
                                            isLayer: eC,
                                            onClose: ep,
                                            isCatalogView: !1,
                                            transparent: !0
                                        }),
                                        (0, r.jsx)(z.Z, {
                                            isFullScreen: n,
                                            handleTransition: ew,
                                            numVisibleItems: es
                                        })
                                    ]
                                }),
                            $ !== K.f7.HIDDEN &&
                                (0, r.jsxs)('div', {
                                    className: s()(ee.shopViewWrapper, {
                                        [ee.visible]: $ === K.f7.VISIBLE,
                                        [ee.in]: $ === K.f7.IN,
                                        [ee.out]: $ === K.f7.OUT
                                    }),
                                    children: [
                                        (0, r.jsx)(M.I, {
                                            isFullScreen: n,
                                            isLayer: eC,
                                            onClose: ep,
                                            isCatalogView: i,
                                            transparent: i,
                                            handleTransition: en
                                        }),
                                        (0, r.jsx)('div', {
                                            className: ee.pageWrapper,
                                            children: (0, r.jsx)('main', {
                                                className: s()(ee.page, { [ee.pageFullscreen]: n }),
                                                children: ex
                                                    ? (0, r.jsx)(D.Z, {})
                                                    : null != ej
                                                      ? (0, r.jsx)(H.Z, {
                                                            onRetry: eZ,
                                                            errorOrigin: H.i.SHOP_PAGE
                                                        })
                                                      : (0, r.jsx)('div', {
                                                            className: ee.categories,
                                                            children: eE
                                                                .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                                                                .filter((e) => {
                                                                    let { products: t } = e;
                                                                    return t.length > 0;
                                                                })
                                                                .map((e, t) =>
                                                                    (0, r.jsx)(
                                                                        'div',
                                                                        {
                                                                            ref: (t) => ey(e.skuId, t),
                                                                            children: (0, r.jsx)(T.k0, {
                                                                                newValue: { categoryPosition: t },
                                                                                children: (0, r.jsx)(er, {
                                                                                    isPremiumUser: ef,
                                                                                    category: e,
                                                                                    initialItemCardRef: eL,
                                                                                    setIsGiftEasterEggEnabled: eS,
                                                                                    isGiftEasterEggEnabled: eI,
                                                                                    isFullScreen: n
                                                                                })
                                                                            })
                                                                        },
                                                                        e.skuId
                                                                    )
                                                                )
                                                        })
                                            })
                                        })
                                    ]
                                })
                        ]
                    })
                }),
                eI && (0, r.jsx)(U.Z, {}),
                !n &&
                    $ !== K.f7.VISIBLE &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(q.Z, {
                                peaking: el,
                                transitioning: W === K.f7.OUT
                            }),
                            (0, r.jsx)(q.Z, {
                                style: { left: 1850 },
                                peaking: el,
                                transitioning: W === K.f7.OUT
                            })
                        ]
                    })
            ]
        })
    });
};
