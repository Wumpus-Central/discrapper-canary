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
    b = n(214852),
    _ = n(479446),
    v = n(981632),
    j = n(290026),
    k = n(511050),
    E = n(819640),
    L = n(594174),
    S = n(626135),
    T = n(74538),
    I = n(335131),
    y = n(381585),
    B = n(597688),
    Z = n(328347),
    w = n(223143),
    N = n(298228),
    F = n(937510),
    P = n(309956),
    O = n(853748),
    A = n(426171),
    R = n(823941),
    H = n(752053),
    M = n(963102),
    V = n(508498),
    W = n(38900),
    D = n(709999),
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
    let { products: t, handleShopCardMount: n, header: l, category: i, isPremiumUser: s, isGiftEasterEggEnabled: a } = e,
        d = (0, o.e7)([L.default], () => L.default.getCurrentUser());
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
                              y.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, r.jsx)(
                                      D.Z,
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
        s = (0, F.l)(t.products),
        a = (0, o.e7)([Z.Z], () => Z.Z.initialProductSkuId),
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
                    children: (0, r.jsx)(v.Z, {
                        idleAnimationState: _.SR.IDLE,
                        giftStyle: Q.Cj.BOX
                    })
                }),
            (0, r.jsx)(R.Z, {
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
    let { isFullScreen: n = !0, tab: i = K.AW.HOME } = e;
    (0, b.z)(x.f);
    let { analyticsSource: h, analyticsLocations: _ } = (0, o.cj)([Z.Z], () => Z.Z.getAnalytics()),
        { analyticsLocations: v } = (0, m.ZP)([..._, p.Z.COLLECTIBLES_SHOP]),
        { sessionId: F, scrollerRef: O, scrollHandler: R } = (0, f._)(J.rMx.COLLECTIBLES_SHOP_SCROLLED, h),
        { selectedTab: D, transitionState: $, transitionToTab: et } = (0, P.B)(O, i, n),
        [en, el] = l.useState(!1),
        [ei, es] = l.useState(K.IV),
        [ea, eo] = l.useState(),
        [ed, ec] = l.useState(),
        { openIntroToOrbsClaimedCoachmark: eu, closeIntroToOrbsClaimedCoachmark: eC } = (0, k.Z)({ location: 'CollectiblesShop' });
    l.useEffect(
        () => (
            h === p.Z.INTRO_TO_ORBS_QUEST && eu(),
            () => {
                eC();
            }
        ),
        [h, eu, eC]
    );
    let eh = (0, o.e7)([E.Z], () => E.Z.getLayers().includes(J.S9g.COLLECTIBLES_SHOP)),
        ep = (0, c.f9)(),
        { onClose: em } = (0, V.Db)(),
        ef = (0, o.e7)([L.default], () => L.default.getCurrentUser()),
        eg = T.ZP.canUseCollectibles(ef),
        { categories: ex, isFetchingCategories: eb, fetchCategoriesError: e_, fetchPurchasesError: ev, claimError: ej, refreshCategories: ek } = (0, w.ZP)({ location: 'CollectiblesShop.web' }),
        eE = null !== (t = null != e_ ? e_ : ev) && void 0 !== t ? t : ej;
    (0, j.P)();
    let eL = (0, N.O)(ex),
        eS = l.useRef(null),
        [eT, eI] = l.useState(!1);
    (0, A.Kp)({
        isFetchingCategories: eb,
        isLayer: eh,
        initialItemCardRef: eS
    }),
        l.useEffect(() => {
            if ($ === K.f7.VISIBLE) {
                var e;
                let t;
                (t = D === K.AW.CATALOG ? ed : h),
                    S.default.track(J.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: v,
                        source: t,
                        page_session_id: F,
                        page_type: D === K.AW.HOME ? 'home' : 'full',
                        category: D === K.AW.HOME ? void 0 : null === (e = B.Z.getCategory(ea)) || void 0 === e ? void 0 : e.name
                    });
            }
            eg ||
                S.default.track(J.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: Q.cd.COLLECTIBLES_SHOP,
                    location_stack: v
                });
        }, [eg, v, h, F, ea, eo, ed, $, D]);
    let { dismissCollectiblesShopTabNewBadge: ey } = (0, G.Z)();
    l.useEffect(() => {
        ey(),
            !(0, g.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK) &&
                (0, g.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
                    dismissAction: X.L.AUTO_DISMISS,
                    forceTrack: !0
                });
    }, [ey]),
        l.useEffect(() => {
            n || (0, C.Y)(J.Z5c.COLLECTIBLES_SHOP);
        }, [n]),
        l.useEffect(
            () => () => {
                (0, I.K$)({
                    categories: [...ex.values()],
                    itemTypes: [a.Z.AVATAR_DECORATION, a.Z.PROFILE_EFFECT]
                });
            },
            [ex]
        ),
        l.useEffect(() => {
            if (!n || eh || ep) return;
            let e = (e) => {
                e.key === Y.mR.Escape && em();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [n, eh, ep, em]);
    let eB = l.useCallback(() => {
            ek();
        }, [ek]),
        { setCategoryRef: eZ, handleScrollToCategory: ew } = (0, A.xV)(O.current),
        { reducedMotion: eN } = l.useContext(u.Sfi),
        eF = l.useRef(null),
        eP = l.useRef(null);
    (0, u.Tbt)(eF),
        l.useEffect(() => {
            if (!n) {
                var e;
                null === (e = eP.current) || void 0 === e || e.focus();
            }
        }, [n]);
    let eO = l.useCallback(
            async (e, t, r) => {
                let l = r && !n && !eN.enabled;
                ec(e), eo(t), await et(K.AW.CATALOG, l), t && ew(t);
            },
            [ew, n, eN.enabled, et]
        ),
        eA = (0, o.e7)([B.Z], () => {
            var e;
            return null === (e = B.Z.getCategory(ea)) || void 0 === e ? void 0 : e.name;
        });
    return (0, r.jsx)(m.Gt, {
        value: v,
        children: (0, r.jsxs)(y.k0, {
            newValue: {
                sessionId: F,
                pageCategory: eA
            },
            children: [
                (0, r.jsx)('div', {
                    className: ee.shop,
                    ref: n ? eF : eP,
                    tabIndex: -1,
                    children: (0, r.jsx)(u.Den, {
                        className: ee.shopScroll,
                        ref: O,
                        onScroll: () => {
                            if ((R(), null != O.current)) {
                                let e = O.current.getDistanceFromBottom();
                                ei >= K.iA ? el(e < 20) : e <= 200 && es(ei + K.IV);
                            }
                        },
                        children: (0, r.jsxs)('div', {
                            className: s()(ee.shopViewWrapper, {
                                [ee.visible]: $ === K.f7.VISIBLE,
                                [ee.in]: $ === K.f7.IN,
                                [ee.out]: $ === K.f7.OUT
                            }),
                            children: [
                                (0, r.jsx)(M.I, {
                                    isFullScreen: n,
                                    isLayer: eh,
                                    onClose: em,
                                    handleTransition: et,
                                    selectedTab: D
                                }),
                                (function (e) {
                                    switch (e) {
                                        case K.AW.HOME:
                                        case K.AW.ORBS:
                                            return (0, r.jsx)(z.Z, {
                                                isFullScreen: n,
                                                handleTransition: eO,
                                                numVisibleItems: ei,
                                                tab: e
                                            });
                                        case K.AW.CATALOG:
                                            return (0, r.jsx)('div', {
                                                className: ee.pageWrapper,
                                                children: (0, r.jsx)('main', {
                                                    className: s()(ee.page, { [ee.pageFullscreen]: n }),
                                                    children: eb
                                                        ? (0, r.jsx)(W.Z, {})
                                                        : null != eE
                                                          ? (0, r.jsx)(H.Z, {
                                                                onRetry: eB,
                                                                errorOrigin: H.i.SHOP_PAGE
                                                            })
                                                          : (0, r.jsx)('div', {
                                                                className: ee.categories,
                                                                children: eL
                                                                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                                                                    .filter((e) => {
                                                                        let { products: t } = e;
                                                                        return t.length > 0;
                                                                    })
                                                                    .map((e, t) =>
                                                                        (0, r.jsx)(
                                                                            'div',
                                                                            {
                                                                                ref: (t) => eZ(e.skuId, t),
                                                                                children: (0, r.jsx)(y.k0, {
                                                                                    newValue: { categoryPosition: t },
                                                                                    children: (0, r.jsx)(er, {
                                                                                        isPremiumUser: eg,
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
                                })(D)
                            ]
                        })
                    })
                }),
                eT && (0, r.jsx)(U.Z, {}),
                !n &&
                    D === K.AW.HOME &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(q.Z, {
                                peaking: en,
                                transitioning: $ === K.f7.OUT
                            }),
                            (0, r.jsx)(q.Z, {
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
