n.r(t), n.d(t, { default: () => er }), n(47120);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(979554),
    o = n(399606),
    d = n(704215),
    c = n(952265),
    u = n(481060),
    C = n(150063),
    h = n(434650),
    m = n(100527),
    p = n(906732),
    g = n(702486),
    f = n(605236),
    x = n(977395),
    b = n(214852),
    v = n(479446),
    _ = n(981632),
    j = n(290026),
    k = n(511050),
    E = n(819640),
    L = n(594174),
    S = n(626135),
    T = n(74538),
    I = n(335131),
    B = n(381585),
    y = n(597688),
    Z = n(328347),
    N = n(223143),
    w = n(298228),
    P = n(937510),
    F = n(309956),
    O = n(853748),
    A = n(426171),
    R = n(823941),
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
    J = n(981631),
    X = n(921944),
    Y = n(420212),
    Q = n(474936),
    ee = n(2613);
function et(e) {
    let { products: t, handleShopCardMount: n, header: r, category: i, isPremiumUser: a, isGiftEasterEggEnabled: s } = e,
        d = (0, o.e7)([L.default], () => L.default.getCurrentUser());
    return null == d || 0 === t.length
        ? null
        : (0, l.jsxs)('div', {
              children: [
                  null != r
                      ? (0, l.jsx)(u.Text, {
                            className: ee.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: r
                        })
                      : (0, l.jsx)(u.LZC, { size: 24 }),
                  (0, l.jsx)('div', {
                      className: ee.cardsContainer,
                      children: t.map((e, t) =>
                          (0, l.jsx)(
                              B.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, l.jsx)(
                                      W.Z,
                                      {
                                          onMount: n(e),
                                          isPremiumUser: a,
                                          category: i,
                                          product: e,
                                          user: d,
                                          isGiftEasterEggEnabled: s
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
        a = (0, P.l)(t.products),
        s = (0, o.e7)([Z.Z], () => Z.Z.initialProductSkuId),
        d = r.useCallback(
            (e) => (t) => {
                var l;
                (e.skuId === s || (null === (l = e.variants) || void 0 === l ? void 0 : l.some((e) => e.skuId === s)) === !0) && (n.current = t.current);
            },
            [s, n]
        );
    return (0, l.jsx)(et, {
        products: a,
        handleShopCardMount: d,
        category: t,
        ...i
    });
}
function el(e) {
    let { category: t, isPremiumUser: n, initialItemCardRef: i, isGiftEasterEggEnabled: s, setIsGiftEasterEggEnabled: o, showEasterEggToggle: d, isFullScreen: c } = e,
        C = r.useRef(10 + 70 * Math.random()),
        [m, p] = r.useState(!1),
        g = (0, $.M7)(t.skuId),
        f = (0, h.O)(
            (e) => {
                p(e && null != g);
            },
            c ? 0.13 : 0.15
        );
    return (0, l.jsxs)('div', {
        className: ee.categoryWrapper,
        ref: f,
        children: [
            d &&
                (0, l.jsx)(u.P3F, {
                    className: a()(ee.hiddenWumpus, { [ee.hiddenWumpusEnabled]: s }),
                    onClick: () => o(!0),
                    style: { left: ''.concat(C.current, '%') },
                    children: (0, l.jsx)(_.Z, {
                        idleAnimationState: v.SR.IDLE,
                        giftStyle: Q.Cj.BOX
                    })
                }),
            (0, l.jsx)(R.Z, {
                category: t,
                hideLimitedTimeBadge: null != g
            }),
            (0, l.jsx)(en, {
                category: t,
                initialItemCardRef: i,
                isPremiumUser: n,
                isGiftEasterEggEnabled: s
            }),
            null != g &&
                null != t.unpublishedAt &&
                (0, l.jsx)(O.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: m,
                    displayOptions: g,
                    isFullScreen: c
                })
        ]
    });
}
let er = function (e) {
    var t;
    let { isFullScreen: n = !0, tab: i = K.AW.HOME } = e;
    (0, b.z)(x.f);
    let { analyticsSource: h, analyticsLocations: v } = (0, o.cj)([Z.Z], () => Z.Z.getAnalytics()),
        { analyticsLocations: _ } = (0, p.ZP)([...v, m.Z.COLLECTIBLES_SHOP]),
        { sessionId: P, scrollerRef: O, scrollHandler: R } = (0, g._)(J.rMx.COLLECTIBLES_SHOP_SCROLLED, h),
        { selectedTab: W, transitionState: $, transitionToTab: et } = (0, F.B)(O, i, n),
        [en, er] = r.useState(!1),
        [ei, ea] = r.useState(K.IV),
        [es, eo] = r.useState(),
        [ed, ec] = r.useState(),
        { openIntroToOrbsClaimedCoachmark: eu, closeIntroToOrbsClaimedCoachmark: eC } = (0, k.Z)({ location: 'CollectiblesShop' });
    r.useEffect(
        () => (
            h === m.Z.INTRO_TO_ORBS_QUEST && eu(),
            () => {
                eC();
            }
        ),
        [h, eu, eC]
    );
    let eh = (0, o.e7)([E.Z], () => E.Z.getLayers().includes(J.S9g.COLLECTIBLES_SHOP)),
        em = (0, c.f9)(),
        { onClose: ep } = (0, V.Db)(),
        eg = (0, o.e7)([L.default], () => L.default.getCurrentUser()),
        ef = T.ZP.canUseCollectibles(eg),
        { categories: ex, isFetchingCategories: eb, fetchCategoriesError: ev, fetchPurchasesError: e_, claimError: ej, refreshCategories: ek } = (0, N.ZP)({ location: 'CollectiblesShop.web' }),
        eE = null !== (t = null != ev ? ev : e_) && void 0 !== t ? t : ej;
    (0, j.P)();
    let eL = (0, w.O)(ex),
        eS = r.useRef(null),
        [eT, eI] = r.useState(!1);
    (0, A.Kp)({
        isFetchingCategories: eb,
        isLayer: eh,
        initialItemCardRef: eS
    }),
        r.useEffect(() => {
            if ($ === K.f7.VISIBLE) {
                var e;
                let t;
                (t = W === K.AW.CATALOG ? ed : h),
                    S.default.track(J.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: _,
                        source: t,
                        page_session_id: P,
                        page_type: W === K.AW.HOME ? 'home' : 'full',
                        category: W === K.AW.HOME ? void 0 : null === (e = y.Z.getCategory(es)) || void 0 === e ? void 0 : e.name
                    });
            }
            ef ||
                S.default.track(J.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: Q.cd.COLLECTIBLES_SHOP,
                    location_stack: _
                });
        }, [ef, _, h, P, es, eo, ed, $, W]);
    let { dismissCollectiblesShopTabNewBadge: eB } = (0, G.Z)();
    r.useEffect(() => {
        eB(),
            !(0, f.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK) &&
                (0, f.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
                    dismissAction: X.L.AUTO_DISMISS,
                    forceTrack: !0
                });
    }, [eB]),
        r.useEffect(() => {
            n || (0, C.Y)(J.Z5c.COLLECTIBLES_SHOP);
        }, [n]),
        r.useEffect(
            () => () => {
                (0, I.K$)({
                    categories: [...ex.values()],
                    itemTypes: [s.Z.AVATAR_DECORATION, s.Z.PROFILE_EFFECT]
                });
            },
            [ex]
        ),
        r.useEffect(() => {
            if (!n || eh || em) return;
            let e = (e) => {
                e.key === Y.mR.Escape && ep();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [n, eh, em, ep]);
    let ey = r.useCallback(() => {
            ek();
        }, [ek]),
        { setCategoryRef: eZ, handleScrollToCategory: eN } = (0, A.xV)(O.current),
        { reducedMotion: ew } = r.useContext(u.Sfi),
        eP = r.useRef(null),
        eF = r.useRef(null);
    (0, u.Tbt)(eP),
        r.useEffect(() => {
            if (!n) {
                var e;
                null === (e = eF.current) || void 0 === e || e.focus();
            }
        }, [n]);
    let eO = r.useCallback(
            async (e, t, l) => {
                let r = l && !n && !ew.enabled;
                ec(e), eo(t), await et(K.AW.CATALOG, r), t && eN(t);
            },
            [eN, n, ew.enabled, et]
        ),
        eA = (0, o.e7)([y.Z], () => {
            var e;
            return null === (e = y.Z.getCategory(es)) || void 0 === e ? void 0 : e.name;
        });
    return (0, l.jsx)(p.Gt, {
        value: _,
        children: (0, l.jsxs)(B.k0, {
            newValue: {
                sessionId: P,
                pageCategory: eA
            },
            children: [
                (0, l.jsx)('div', {
                    className: ee.shop,
                    ref: n ? eP : eF,
                    tabIndex: -1,
                    children: (0, l.jsx)(u.Den, {
                        className: ee.shopScroll,
                        ref: O,
                        onScroll: () => {
                            if ((R(), null != O.current)) {
                                let e = O.current.getDistanceFromBottom();
                                ei >= K.iA ? er(e < 20) : e <= 200 && ea(ei + K.IV);
                            }
                        },
                        children: (0, l.jsxs)('div', {
                            className: a()(ee.shopViewWrapper, {
                                [ee.visible]: $ === K.f7.VISIBLE,
                                [ee.in]: $ === K.f7.IN,
                                [ee.out]: $ === K.f7.OUT
                            }),
                            children: [
                                (0, l.jsx)(M.I, {
                                    isFullScreen: n,
                                    isLayer: eh,
                                    onClose: ep,
                                    handleTransition: et,
                                    selectedTab: W
                                }),
                                (function (e) {
                                    switch (e) {
                                        case K.AW.HOME:
                                        case K.AW.ORBS:
                                            return (0, l.jsx)(z.Z, {
                                                isFullScreen: n,
                                                handleTransition: eO,
                                                numVisibleItems: ei,
                                                tab: e
                                            });
                                        case K.AW.CATALOG:
                                            return (0, l.jsx)('div', {
                                                className: ee.pageWrapper,
                                                children: (0, l.jsx)('main', {
                                                    className: a()(ee.page, { [ee.pageFullscreen]: n }),
                                                    children: eb
                                                        ? (0, l.jsx)(D.Z, {})
                                                        : null != eE
                                                          ? (0, l.jsx)(H.Z, {
                                                                onRetry: ey,
                                                                errorOrigin: H.i.SHOP_PAGE
                                                            })
                                                          : (0, l.jsx)('div', {
                                                                className: ee.categories,
                                                                children: eL
                                                                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                                                                    .filter((e) => {
                                                                        let { products: t } = e;
                                                                        return t.length > 0;
                                                                    })
                                                                    .map((e, t) =>
                                                                        (0, l.jsx)(
                                                                            'div',
                                                                            {
                                                                                ref: (t) => eZ(e.skuId, t),
                                                                                children: (0, l.jsx)(B.k0, {
                                                                                    newValue: { categoryPosition: t },
                                                                                    children: (0, l.jsx)(el, {
                                                                                        isPremiumUser: ef,
                                                                                        category: e,
                                                                                        initialItemCardRef: eS,
                                                                                        setIsGiftEasterEggEnabled: eI,
                                                                                        isGiftEasterEggEnabled: eT,
                                                                                        isFullScreen: n
                                                                                    })
                                                                                })
                                                                            },
                                                                            e.skuId
                                                                        )
                                                                    )
                                                            })
                                                })
                                            });
                                        default:
                                            return null;
                                    }
                                })(W)
                            ]
                        })
                    })
                }),
                eT && (0, l.jsx)(U.Z, {}),
                !n &&
                    W === K.AW.HOME &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(q.Z, {
                                peaking: en,
                                transitioning: $ === K.f7.OUT
                            }),
                            (0, l.jsx)(q.Z, {
                                style: { left: 1850 },
                                peaking: en,
                                transitioning: $ === K.f7.OUT
                            })
                        ]
                    })
            ]
        })
    });
};
