n.r(t), n.d(t, { default: () => el }), n(47120);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    s = n(979554),
    o = n(399606),
    d = n(704215),
    c = n(952265),
    u = n(481060),
    C = n(150063),
    h = n(434650),
    p = n(100527),
    m = n(906732),
    g = n(702486),
    f = n(605236),
    x = n(977395),
    b = n(214852),
    _ = n(479446),
    v = n(981632),
    k = n(290026),
    j = n(511050),
    L = n(819640),
    E = n(594174),
    S = n(626135),
    B = n(74538),
    T = n(335131),
    I = n(381585),
    y = n(597688),
    Z = n(328347),
    F = n(223143),
    N = n(298228),
    w = n(937510),
    P = n(309956),
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
    ee = n(738177);
function et(e) {
    let { products: t, handleShopCardMount: n, header: l, category: a, isPremiumUser: i, isGiftEasterEggEnabled: s } = e,
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
                              I.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, r.jsx)(
                                      W.Z,
                                      {
                                          onMount: n(e),
                                          isPremiumUser: i,
                                          category: a,
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
    let { category: t, initialItemCardRef: n, ...a } = e,
        i = (0, w.l)(t.products),
        s = (0, o.e7)([Z.Z], () => Z.Z.initialProductSkuId),
        d = l.useCallback(
            (e) => (t) => {
                var r;
                (e.skuId === s || (null === (r = e.variants) || void 0 === r ? void 0 : r.some((e) => e.skuId === s)) === !0) && (n.current = t.current);
            },
            [s, n]
        );
    return (0, r.jsx)(et, {
        products: i,
        handleShopCardMount: d,
        category: t,
        ...a
    });
}
function er(e) {
    let { category: t, isPremiumUser: n, initialItemCardRef: a, isGiftEasterEggEnabled: s, setIsGiftEasterEggEnabled: o, showEasterEggToggle: d, isFullScreen: c } = e,
        C = l.useRef(10 + 70 * Math.random()),
        [p, m] = l.useState(!1),
        g = (0, $.M7)(t.skuId),
        f = (0, h.O)(
            (e) => {
                m(e && null != g);
            },
            c ? 0.13 : 0.15
        );
    return (0, r.jsxs)('div', {
        className: ee.categoryWrapper,
        ref: f,
        children: [
            d &&
                (0, r.jsx)(u.P3F, {
                    className: i()(ee.hiddenWumpus, { [ee.hiddenWumpusEnabled]: s }),
                    onClick: () => o(!0),
                    style: { left: ''.concat(C.current, '%') },
                    children: (0, r.jsx)(v.Z, {
                        idleAnimationState: _.SR.IDLE,
                        giftStyle: Q.Cj.BOX
                    })
                }),
            (0, r.jsx)(R.Z, {
                category: t,
                hideLimitedTimeBadge: null != g
            }),
            (0, r.jsx)(en, {
                category: t,
                initialItemCardRef: a,
                isPremiumUser: n,
                isGiftEasterEggEnabled: s
            }),
            null != g &&
                null != t.unpublishedAt &&
                (0, r.jsx)(O.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: p,
                    displayOptions: g,
                    isFullScreen: c
                })
        ]
    });
}
let el = function (e) {
    var t;
    let { isFullScreen: n = !0, tab: a = K.AW.HOME } = e;
    (0, b.z)(x.f);
    let { analyticsSource: h, analyticsLocations: _ } = (0, o.cj)([Z.Z], () => Z.Z.getAnalytics()),
        { analyticsLocations: v } = (0, m.ZP)([..._, p.Z.COLLECTIBLES_SHOP]),
        { sessionId: w, scrollerRef: O, scrollHandler: R } = (0, g._)(J.rMx.COLLECTIBLES_SHOP_SCROLLED, h),
        { selectedTab: W, transitionState: $, transitionToTab: et } = (0, P.B)(O, a, n),
        [en, el] = l.useState(!1),
        [ea, ei] = l.useState(K.IV),
        [es, eo] = l.useState(),
        [ed, ec] = l.useState(),
        { openIntroToOrbsClaimedCoachmark: eu, closeIntroToOrbsClaimedCoachmark: eC } = (0, j.Z)({ location: 'CollectiblesShop' });
    l.useEffect(
        () => (
            h === p.Z.INTRO_TO_ORBS_QUEST && eu(),
            () => {
                eC();
            }
        ),
        [h, eu, eC]
    );
    let eh = (0, o.e7)([L.Z], () => L.Z.getLayers().includes(J.S9g.COLLECTIBLES_SHOP)),
        ep = (0, c.f9)(),
        { onClose: em } = (0, V.Db)(),
        eg = (0, o.e7)([E.default], () => E.default.getCurrentUser()),
        ef = B.ZP.canUseCollectibles(eg),
        { categories: ex, isFetchingCategories: eb, fetchCategoriesError: e_, fetchPurchasesError: ev, claimError: ek, refreshCategories: ej } = (0, F.ZP)({ location: 'CollectiblesShop.web' }),
        eL = null !== (t = null != e_ ? e_ : ev) && void 0 !== t ? t : ek;
    (0, k.P)();
    let eE = (0, N.O)(ex),
        eS = l.useRef(null),
        [eB, eT] = l.useState(!1);
    (0, A.Kp)({
        isFetchingCategories: eb,
        isLayer: eh,
        initialItemCardRef: eS
    }),
        l.useEffect(() => {
            if ($ === K.f7.VISIBLE) {
                var e;
                let t;
                (t = W === K.AW.CATALOG ? ed : h),
                    S.default.track(J.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: v,
                        source: t,
                        page_session_id: w,
                        page_type: W === K.AW.HOME ? 'home' : 'full',
                        category: W === K.AW.HOME ? void 0 : null === (e = y.Z.getCategory(es)) || void 0 === e ? void 0 : e.name
                    });
            }
            ef ||
                S.default.track(J.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: Q.cd.COLLECTIBLES_SHOP,
                    location_stack: v
                });
        }, [ef, v, h, w, es, eo, ed, $, W]);
    let { dismissCollectiblesShopTabNewBadge: eI } = (0, G.Z)();
    l.useEffect(() => {
        eI(),
            !(0, f.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK) &&
                (0, f.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
                    dismissAction: X.L.AUTO_DISMISS,
                    forceTrack: !0
                });
    }, [eI]),
        l.useEffect(() => {
            n || (0, C.Y)(J.Z5c.COLLECTIBLES_SHOP);
        }, [n]),
        l.useEffect(
            () => () => {
                (0, T.K$)({
                    categories: [...ex.values()],
                    itemTypes: [s.Z.AVATAR_DECORATION, s.Z.PROFILE_EFFECT]
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
    let ey = l.useCallback(() => {
            ej();
        }, [ej]),
        { setCategoryRef: eZ, handleScrollToCategory: eF } = (0, A.xV)(O.current),
        { reducedMotion: eN } = l.useContext(u.Sfi),
        ew = l.useRef(null),
        eP = l.useRef(null);
    (0, u.Tbt)(ew),
        l.useEffect(() => {
            if (!n) {
                var e;
                null === (e = eP.current) || void 0 === e || e.focus();
            }
        }, [n]);
    let eO = l.useCallback(
            async (e, t, r) => {
                let l = r && !n && !eN.enabled;
                ec(e), eo(t), await et(K.AW.CATALOG, l), t && eF(t);
            },
            [eF, n, eN.enabled, et]
        ),
        eA = (0, o.e7)([y.Z], () => {
            var e;
            return null === (e = y.Z.getCategory(es)) || void 0 === e ? void 0 : e.name;
        });
    return (0, r.jsx)(m.Gt, {
        value: v,
        children: (0, r.jsxs)(I.k0, {
            newValue: {
                sessionId: w,
                pageCategory: eA
            },
            children: [
                (0, r.jsx)('div', {
                    className: ee.shop,
                    ref: n ? ew : eP,
                    tabIndex: -1,
                    children: (0, r.jsx)(u.Den, {
                        className: ee.shopScroll,
                        ref: O,
                        onScroll: () => {
                            if ((R(), null != O.current)) {
                                let e = O.current.getDistanceFromBottom();
                                ea >= K.iA ? el(e < 20) : e <= 200 && ei(ea + K.IV);
                            }
                        },
                        children: (0, r.jsxs)('div', {
                            className: i()(ee.shopViewWrapper, {
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
                                    selectedTab: W,
                                    transparent: !0
                                }),
                                (function (e) {
                                    switch (e) {
                                        case K.AW.HOME:
                                        case K.AW.ORBS:
                                            return (0, r.jsx)(z.Z, {
                                                isFullScreen: n,
                                                handleTransition: eO,
                                                numVisibleItems: ea,
                                                tab: e
                                            });
                                        case K.AW.CATALOG:
                                            return (0, r.jsx)('div', {
                                                className: ee.pageWrapper,
                                                children: (0, r.jsx)('main', {
                                                    className: i()(ee.page, { [ee.pageFullscreen]: n }),
                                                    children: eb
                                                        ? (0, r.jsx)(D.Z, {})
                                                        : null != eL
                                                          ? (0, r.jsx)(H.Z, {
                                                                onRetry: ey,
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
                                                                                ref: (t) => eZ(e.skuId, t),
                                                                                children: (0, r.jsx)(I.k0, {
                                                                                    newValue: { categoryPosition: t },
                                                                                    children: (0, r.jsx)(er, {
                                                                                        isPremiumUser: ef,
                                                                                        category: e,
                                                                                        initialItemCardRef: eS,
                                                                                        setIsGiftEasterEggEnabled: eT,
                                                                                        isGiftEasterEggEnabled: eB,
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
                eB && (0, r.jsx)(U.Z, {}),
                !n &&
                    W === K.AW.HOME &&
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
