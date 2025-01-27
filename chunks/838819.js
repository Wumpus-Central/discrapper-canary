n.r(t), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(979554),
    o = n(399606),
    c = n(704215),
    d = n(952265),
    u = n(481060),
    C = n(150063),
    h = n(434650),
    p = n(100527),
    f = n(906732),
    m = n(702486),
    g = n(605236),
    b = n(977395),
    x = n(214852),
    v = n(479446),
    _ = n(981632),
    k = n(290026),
    j = n(819640),
    E = n(594174),
    L = n(626135),
    I = n(74538),
    S = n(335131),
    B = n(381585),
    T = n(597688),
    y = n(328347),
    Z = n(307043),
    N = n(223143),
    F = n(298228),
    P = n(937510),
    w = n(309956),
    A = n(853748),
    O = n(426171),
    R = n(823941),
    H = n(752053),
    M = n(963102),
    D = n(508498),
    V = n(38900),
    W = n(709999),
    U = n(373113),
    G = n(141594),
    z = n(566564),
    $ = n(531864),
    K = n(302800),
    q = n(215023),
    J = n(981631),
    Y = n(921944),
    Q = n(420212),
    X = n(474936),
    ee = n(697526);
function et(e) {
    let { products: t, handleShopCardMount: n, header: i, category: l, isPremiumUser: a, isGiftEasterEggEnabled: s } = e,
        c = (0, o.e7)([E.default], () => E.default.getCurrentUser());
    return null == c || 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  null != i
                      ? (0, r.jsx)(u.Text, {
                            className: ee.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: i
                        })
                      : (0, r.jsx)(u.Spacer, { size: 24 }),
                  (0, r.jsx)('div', {
                      className: ee.cardsContainer,
                      children: t.map((e, t) =>
                          (0, r.jsx)(
                              B.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, r.jsx)(
                                      W.Z,
                                      {
                                          onMount: n(e),
                                          isPremiumUser: a,
                                          category: l,
                                          product: e,
                                          user: c,
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
    let { category: t, initialItemCardRef: n, ...l } = e,
        a = (0, P.l)(t.products),
        s = (0, o.e7)([y.Z], () => y.Z.initialProductSkuId),
        c = i.useCallback(
            (e) => (t) => {
                var r;
                (e.skuId === s || (null === (r = e.variants) || void 0 === r ? void 0 : r.some((e) => e.skuId === s)) === !0) && (n.current = t.current);
            },
            [s, n]
        );
    return (0, r.jsx)(et, {
        products: a,
        handleShopCardMount: c,
        category: t,
        ...l
    });
}
function er(e) {
    let { category: t, isPremiumUser: n, initialItemCardRef: l, isGiftEasterEggEnabled: s, setIsGiftEasterEggEnabled: o, showEasterEggToggle: c, isFullScreen: d } = e,
        C = i.useRef(10 + 70 * Math.random()),
        [p, f] = i.useState(!1),
        m = (0, K.M7)(t.skuId),
        g = (0, h.O)(
            (e) => {
                f(e && null != m);
            },
            d ? 0.13 : 0.15
        );
    return (0, r.jsxs)('div', {
        className: ee.categoryWrapper,
        ref: g,
        children: [
            c &&
                (0, r.jsx)(u.Clickable, {
                    className: a()(ee.hiddenWumpus, { [ee.hiddenWumpusEnabled]: s }),
                    onClick: () => o(!0),
                    style: { left: ''.concat(C.current, '%') },
                    children: (0, r.jsx)(_.Z, {
                        idleAnimationState: v.SR.IDLE,
                        giftStyle: X.Cj.BOX
                    })
                }),
            (0, r.jsx)(R.Z, {
                category: t,
                hideLimitedTimeBadge: null != m
            }),
            (0, r.jsx)(en, {
                category: t,
                initialItemCardRef: l,
                isPremiumUser: n,
                isGiftEasterEggEnabled: s
            }),
            null != m &&
                null != t.unpublishedAt &&
                (0, r.jsx)(A.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: p,
                    displayOptions: m,
                    isFullScreen: d
                })
        ]
    });
}
t.default = function (e) {
    var t;
    let { isFullScreen: n = !0 } = e;
    (0, x.z)(b.f);
    let l = (0, Z.u)('CollectiblesShop'),
        { analyticsSource: h, analyticsLocations: v } = (0, o.cj)([y.Z], () => y.Z.getAnalytics()),
        { analyticsLocations: _ } = (0, f.ZP)([...v, p.Z.COLLECTIBLES_SHOP]),
        { sessionId: P, scrollerRef: A, scrollHandler: R } = (0, m._)(J.rMx.COLLECTIBLES_SHOP_SCROLLED, h),
        { feedState: W, catalogState: K, transitionToCatalog: et, transitionToFeed: en } = (0, w.B)(l, A),
        [ei, el] = i.useState(!1),
        [ea, es] = i.useState(q.IV),
        [eo, ec] = i.useState(),
        [ed, eu] = i.useState(),
        eC = (0, o.e7)([j.Z], () => j.Z.getLayers().includes(J.S9g.COLLECTIBLES_SHOP)),
        eh = (0, d.f9)(),
        { onClose: ep } = (0, D.Db)(),
        ef = (0, o.e7)([E.default], () => E.default.getCurrentUser()),
        em = I.ZP.canUseCollectibles(ef),
        { categories: eg, isFetchingCategories: eb, fetchCategoriesError: ex, fetchPurchasesError: ev, claimError: e_, refreshCategories: ek } = (0, N.ZP)({ location: 'CollectiblesShop.web' }),
        ej = null !== (t = null != ex ? ex : ev) && void 0 !== t ? t : e_;
    (0, k.P)();
    let eE = (0, F.O)(eg),
        eL = i.useRef(null),
        [eI, eS] = i.useState(!1);
    (0, O.Kp)({
        isFetchingCategories: eb,
        isLayer: eC,
        initialItemCardRef: eL
    }),
        i.useEffect(() => {
            if (W === q.f7.VISIBLE || K === q.f7.VISIBLE) {
                var e;
                let t;
                (t = l ? (K === q.f7.VISIBLE ? ed : h) : h),
                    L.default.track(J.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: _,
                        source: t,
                        page_session_id: P,
                        page_type: W === q.f7.VISIBLE ? 'home' : 'full',
                        category: W === q.f7.VISIBLE ? void 0 : null === (e = T.Z.getCategory(eo)) || void 0 === e ? void 0 : e.name
                    });
            }
            !em &&
                L.default.track(J.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: X.cd.COLLECTIBLES_SHOP,
                    location_stack: _
                });
        }, [l, em, _, h, P, W, K, eo, ec, ed]);
    let { dismissCollectiblesShopTabNewBadge: eB } = (0, G.Z)();
    i.useEffect(() => {
        if ((eB(), !(0, g.un)(c.z.COLLECTIBLES_GIFTING_COACHMARK)))
            (0, g.EW)(c.z.COLLECTIBLES_GIFTING_COACHMARK, {
                dismissAction: Y.L.AUTO_DISMISS,
                forceTrack: !0
            });
    }, [eB]),
        i.useEffect(() => {
            !n && (0, C.Y)(J.Z5c.COLLECTIBLES_SHOP);
        }, [n]),
        i.useEffect(
            () => () => {
                (0, S.K$)({
                    categories: [...eg.values()],
                    itemTypes: [s.Z.AVATAR_DECORATION, s.Z.PROFILE_EFFECT]
                });
            },
            [eg]
        ),
        i.useEffect(() => {
            if (!n || eC || eh) return;
            let e = (e) => {
                if (e.key === Q.mR.Escape) ep();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [n, eC, eh, ep]);
    let eT = i.useCallback(() => {
            ek();
        }, [ek]),
        { setCategoryRef: ey, handleScrollToCategory: eZ } = (0, O.xV)(A.current),
        { reducedMotion: eN } = i.useContext(u.AccessibilityPreferencesContext),
        eF = i.useRef(null),
        eP = i.useRef(null);
    (0, u.useFocusLock)(eF),
        i.useEffect(() => {
            if (!n) {
                var e;
                null === (e = eP.current) || void 0 === e || e.focus();
            }
        }, [n]);
    let ew = i.useCallback(
            async (e, t, r) => {
                let i = r && !n && !eN.enabled;
                eu(e), ec(t), await et(i), t && eZ(t);
            },
            [et, eZ, n, eN]
        ),
        eA = (0, o.e7)([T.Z], () => {
            var e;
            return null === (e = T.Z.getCategory(eo)) || void 0 === e ? void 0 : e.name;
        });
    return (0, r.jsx)(f.Gt, {
        value: _,
        children: (0, r.jsxs)(B.k0, {
            newValue: {
                sessionId: P,
                pageCategory: eA
            },
            children: [
                (0, r.jsx)('div', {
                    className: ee.shop,
                    ref: n ? eF : eP,
                    tabIndex: -1,
                    children: (0, r.jsxs)(u.AdvancedScroller, {
                        className: ee.shopScroll,
                        ref: A,
                        onScroll: () => {
                            if ((R(), null != A.current)) {
                                let e = A.current.getDistanceFromBottom();
                                ea >= q.iA ? el(e < 20) : e <= 200 && es(ea + q.IV);
                            }
                        },
                        children: [
                            W !== q.f7.HIDDEN &&
                                (0, r.jsxs)('div', {
                                    className: a()(ee.shopViewWrapper, {
                                        [ee.visible]: W === q.f7.VISIBLE,
                                        [ee.in]: W === q.f7.IN,
                                        [ee.out]: W === q.f7.OUT
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
                                            numVisibleItems: ea
                                        })
                                    ]
                                }),
                            K !== q.f7.HIDDEN &&
                                (0, r.jsxs)('div', {
                                    className: a()(ee.shopViewWrapper, {
                                        [ee.visible]: K === q.f7.VISIBLE,
                                        [ee.in]: K === q.f7.IN,
                                        [ee.out]: K === q.f7.OUT
                                    }),
                                    children: [
                                        (0, r.jsx)(M.I, {
                                            isFullScreen: n,
                                            isLayer: eC,
                                            onClose: ep,
                                            isCatalogView: l,
                                            transparent: l,
                                            handleTransition: en
                                        }),
                                        (0, r.jsx)('div', {
                                            className: ee.pageWrapper,
                                            children: (0, r.jsx)('main', {
                                                className: a()(ee.page, { [ee.pageFullscreen]: n }),
                                                children: eb
                                                    ? (0, r.jsx)(V.Z, {})
                                                    : null != ej
                                                      ? (0, r.jsx)(H.Z, {
                                                            onRetry: eT,
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
                                                                            children: (0, r.jsx)(B.k0, {
                                                                                newValue: { categoryPosition: t },
                                                                                children: (0, r.jsx)(er, {
                                                                                    isPremiumUser: em,
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
                    K !== q.f7.VISIBLE &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)($.Z, {
                                peaking: ei,
                                transitioning: W === q.f7.OUT
                            }),
                            (0, r.jsx)($.Z, {
                                style: { left: 1850 },
                                peaking: ei,
                                transitioning: W === q.f7.OUT
                            })
                        ]
                    })
            ]
        })
    });
};
