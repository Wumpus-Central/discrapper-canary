n.r(t), n.d(t, { default: () => er }), n(47120);
var l = n(200651),
    r = n(192379),
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
    B = n(335131),
    I = n(381585),
    y = n(597688),
    Z = n(328347),
    N = n(223143),
    F = n(298228),
    w = n(937510),
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
    let { products: t, handleShopCardMount: n, header: r, category: i, isPremiumUser: s, isGiftEasterEggEnabled: a } = e,
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
                              I.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, l.jsx)(
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
        s = (0, w.l)(t.products),
        a = (0, o.e7)([Z.Z], () => Z.Z.initialProductSkuId),
        d = r.useCallback(
            (e) => (t) => {
                var l;
                (e.skuId === a || (null === (l = e.variants) || void 0 === l ? void 0 : l.some((e) => e.skuId === a)) === !0) && (n.current = t.current);
            },
            [a, n]
        );
    return (0, l.jsx)(et, {
        products: s,
        handleShopCardMount: d,
        category: t,
        ...i
    });
}
function el(e) {
    let { category: t, isPremiumUser: n, initialItemCardRef: i, isGiftEasterEggEnabled: a, setIsGiftEasterEggEnabled: o, showEasterEggToggle: d, isFullScreen: c } = e,
        C = r.useRef(10 + 70 * Math.random()),
        [p, m] = r.useState(!1),
        f = (0, $.M7)(t.skuId),
        g = (0, h.O)(
            (e) => {
                m(e && null != f);
            },
            c ? 0.13 : 0.15
        );
    return (0, l.jsxs)('div', {
        className: ee.categoryWrapper,
        ref: g,
        children: [
            d &&
                (0, l.jsx)(u.P3F, {
                    className: s()(ee.hiddenWumpus, { [ee.hiddenWumpusEnabled]: a }),
                    onClick: () => o(!0),
                    style: { left: ''.concat(C.current, '%') },
                    children: (0, l.jsx)(v.Z, {
                        idleAnimationState: _.SR.IDLE,
                        giftStyle: Q.Cj.BOX
                    })
                }),
            (0, l.jsx)(R.Z, {
                category: t,
                hideLimitedTimeBadge: null != f
            }),
            (0, l.jsx)(en, {
                category: t,
                initialItemCardRef: i,
                isPremiumUser: n,
                isGiftEasterEggEnabled: a
            }),
            null != f &&
                null != t.unpublishedAt &&
                (0, l.jsx)(O.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: p,
                    displayOptions: f,
                    isFullScreen: c
                })
        ]
    });
}
let er = function (e) {
    var t;
    let { isFullScreen: n = !0, tab: i = K.AW.HOME } = e;
    (0, b.z)(x.f);
    let { analyticsSource: h, analyticsLocations: _ } = (0, o.cj)([Z.Z], () => Z.Z.getAnalytics()),
        { analyticsLocations: v } = (0, m.ZP)([..._, p.Z.COLLECTIBLES_SHOP]),
        { sessionId: w, scrollerRef: O, scrollHandler: R } = (0, f._)(J.rMx.COLLECTIBLES_SHOP_SCROLLED, h),
        { selectedTab: D, transitionState: $, transitionToTab: et } = (0, P.B)(O, i, n),
        [en, er] = r.useState(!1),
        [ei, es] = r.useState(K.IV),
        [ea, eo] = r.useState(),
        [ed, ec] = r.useState(),
        { openIntroToOrbsClaimedCoachmark: eu, closeIntroToOrbsClaimedCoachmark: eC } = (0, k.Z)({ location: 'CollectiblesShop' });
    r.useEffect(
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
        { categories: ex, isFetchingCategories: eb, fetchCategoriesError: e_, fetchPurchasesError: ev, claimError: ej, refreshCategories: ek } = (0, N.ZP)({ location: 'CollectiblesShop.web' }),
        eE = null !== (t = null != e_ ? e_ : ev) && void 0 !== t ? t : ej;
    (0, j.P)();
    let eL = (0, F.O)(ex),
        eS = r.useRef(null),
        [eT, eB] = r.useState(!1);
    (0, A.Kp)({
        isFetchingCategories: eb,
        isLayer: eh,
        initialItemCardRef: eS
    }),
        r.useEffect(() => {
            if ($ === K.f7.VISIBLE) {
                var e;
                let t;
                (t = D === K.AW.CATALOG ? ed : h),
                    S.default.track(J.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: v,
                        source: t,
                        page_session_id: w,
                        page_type: D === K.AW.HOME ? 'home' : 'full',
                        category: D === K.AW.HOME ? void 0 : null === (e = y.Z.getCategory(ea)) || void 0 === e ? void 0 : e.name
                    });
            }
            eg ||
                S.default.track(J.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: Q.cd.COLLECTIBLES_SHOP,
                    location_stack: v
                });
        }, [eg, v, h, w, ea, eo, ed, $, D]);
    let { dismissCollectiblesShopTabNewBadge: eI } = (0, G.Z)();
    r.useEffect(() => {
        eI(),
            !(0, g.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK) &&
                (0, g.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
                    dismissAction: X.L.AUTO_DISMISS,
                    forceTrack: !0
                });
    }, [eI]),
        r.useEffect(() => {
            n || (0, C.Y)(J.Z5c.COLLECTIBLES_SHOP);
        }, [n]),
        r.useEffect(
            () => () => {
                (0, B.K$)({
                    categories: [...ex.values()],
                    itemTypes: [a.Z.AVATAR_DECORATION, a.Z.PROFILE_EFFECT]
                });
            },
            [ex]
        ),
        r.useEffect(() => {
            if (!n || eh || ep) return;
            let e = (e) => {
                e.key === Y.mR.Escape && em();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [n, eh, ep, em]);
    let ey = r.useCallback(() => {
            ek();
        }, [ek]),
        { setCategoryRef: eZ, handleScrollToCategory: eN } = (0, A.xV)(O.current),
        { reducedMotion: eF } = r.useContext(u.Sfi),
        ew = r.useRef(null),
        eP = r.useRef(null);
    (0, u.Tbt)(ew),
        r.useEffect(() => {
            if (!n) {
                var e;
                null === (e = eP.current) || void 0 === e || e.focus();
            }
        }, [n]);
    let eO = r.useCallback(
            async (e, t, l) => {
                let r = l && !n && !eF.enabled;
                ec(e), eo(t), await et(K.AW.CATALOG, r), t && eN(t);
            },
            [eN, n, eF.enabled, et]
        ),
        eA = (0, o.e7)([y.Z], () => {
            var e;
            return null === (e = y.Z.getCategory(ea)) || void 0 === e ? void 0 : e.name;
        });
    return (0, l.jsx)(m.Gt, {
        value: v,
        children: (0, l.jsxs)(I.k0, {
            newValue: {
                sessionId: w,
                pageCategory: eA
            },
            children: [
                (0, l.jsx)('div', {
                    className: ee.shop,
                    ref: n ? ew : eP,
                    tabIndex: -1,
                    children: (0, l.jsx)(u.Den, {
                        className: ee.shopScroll,
                        ref: O,
                        onScroll: () => {
                            if ((R(), null != O.current)) {
                                let e = O.current.getDistanceFromBottom();
                                ei >= K.iA ? er(e < 20) : e <= 200 && es(ei + K.IV);
                            }
                        },
                        children: (0, l.jsxs)('div', {
                            className: s()(ee.shopViewWrapper, {
                                [ee.visible]: $ === K.f7.VISIBLE,
                                [ee.in]: $ === K.f7.IN,
                                [ee.out]: $ === K.f7.OUT
                            }),
                            children: [
                                (0, l.jsx)(M.I, {
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
                                                    className: s()(ee.page, { [ee.pageFullscreen]: n }),
                                                    children: eb
                                                        ? (0, l.jsx)(W.Z, {})
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
                                                                                children: (0, l.jsx)(I.k0, {
                                                                                    newValue: { categoryPosition: t },
                                                                                    children: (0, l.jsx)(el, {
                                                                                        isPremiumUser: eg,
                                                                                        category: e,
                                                                                        initialItemCardRef: eS,
                                                                                        setIsGiftEasterEggEnabled: eB,
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
                eT && (0, l.jsx)(U.Z, {}),
                !n &&
                    D === K.AW.HOME &&
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
