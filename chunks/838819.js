n.r(t), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(979554),
    o = n(399606),
    c = n(704215),
    d = n(952265),
    u = n(481060),
    m = n(150063),
    h = n(434650),
    g = n(100527),
    p = n(906732),
    f = n(702486),
    C = n(605236),
    b = n(977395),
    v = n(214852),
    x = n(479446),
    _ = n(981632),
    k = n(290026),
    I = n(819640),
    S = n(594174),
    E = n(626135),
    j = n(74538),
    T = n(335131),
    B = n(381585),
    N = n(597688),
    y = n(328347),
    L = n(307043),
    P = n(223143),
    Z = n(298228),
    O = n(937510),
    w = n(309956),
    A = n(853748),
    R = n(426171),
    F = n(823941),
    H = n(752053),
    D = n(963102),
    V = n(508498),
    M = n(38900),
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
    let { products: t, handleShopCardMount: n, header: a, category: i, isPremiumUser: l, isGiftEasterEggEnabled: s } = e,
        c = (0, o.e7)([S.default], () => S.default.getCurrentUser());
    return null == c || 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  null != a
                      ? (0, r.jsx)(u.Text, {
                            className: ee.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: a
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
                                          isPremiumUser: l,
                                          category: i,
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
    let { category: t, initialItemCardRef: n, ...i } = e,
        l = (0, O.l)(t.products),
        s = (0, o.e7)([y.Z], () => y.Z.initialProductSkuId),
        c = a.useCallback(
            (e) => (t) => {
                var r;
                (e.skuId === s || (null === (r = e.variants) || void 0 === r ? void 0 : r.some((e) => e.skuId === s)) === !0) && (n.current = t.current);
            },
            [s, n]
        );
    return (0, r.jsx)(et, {
        products: l,
        handleShopCardMount: c,
        category: t,
        ...i
    });
}
function er(e) {
    let { category: t, isPremiumUser: n, initialItemCardRef: i, isGiftEasterEggEnabled: s, setIsGiftEasterEggEnabled: o, showEasterEggToggle: c, isFullScreen: d } = e,
        m = a.useRef(10 + 70 * Math.random()),
        [g, p] = a.useState(!1),
        f = (0, K.M7)(t.skuId),
        C = (0, h.O)(
            (e) => {
                p(e && null != f);
            },
            d ? 0.13 : 0.15
        );
    return (0, r.jsxs)('div', {
        className: ee.categoryWrapper,
        ref: C,
        children: [
            c &&
                (0, r.jsx)(u.Clickable, {
                    className: l()(ee.hiddenWumpus, { [ee.hiddenWumpusEnabled]: s }),
                    onClick: () => o(!0),
                    style: { left: ''.concat(m.current, '%') },
                    children: (0, r.jsx)(_.Z, {
                        idleAnimationState: x.SR.IDLE,
                        giftStyle: X.Cj.BOX
                    })
                }),
            (0, r.jsx)(F.Z, {
                category: t,
                hideLimitedTimeBadge: null != f
            }),
            (0, r.jsx)(en, {
                category: t,
                initialItemCardRef: i,
                isPremiumUser: n,
                isGiftEasterEggEnabled: s
            }),
            null != f &&
                null != t.unpublishedAt &&
                (0, r.jsx)(A.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: g,
                    displayOptions: f,
                    isFullScreen: d
                })
        ]
    });
}
t.default = function (e) {
    var t;
    let { isFullScreen: n = !0 } = e;
    (0, v.z)(b.f);
    let i = (0, L.u)('CollectiblesShop'),
        { analyticsSource: h, analyticsLocations: x } = (0, o.cj)([y.Z], () => y.Z.getAnalytics()),
        { analyticsLocations: _ } = (0, p.ZP)([...x, g.Z.COLLECTIBLES_SHOP]),
        { sessionId: O, scrollerRef: A, scrollHandler: F } = (0, f._)(J.rMx.COLLECTIBLES_SHOP_SCROLLED, h),
        { feedState: W, catalogState: K, transitionToCatalog: et, transitionToFeed: en } = (0, w.B)(i, A),
        [ea, ei] = a.useState(!1),
        [el, es] = a.useState(q.IV),
        [eo, ec] = a.useState(),
        [ed, eu] = a.useState(),
        em = (0, o.e7)([I.Z], () => I.Z.getLayers().includes(J.S9g.COLLECTIBLES_SHOP)),
        eh = (0, d.f9)(),
        { onClose: eg } = (0, V.Db)(),
        ep = (0, o.e7)([S.default], () => S.default.getCurrentUser()),
        ef = j.ZP.canUseCollectibles(ep),
        { categories: eC, isFetchingCategories: eb, fetchCategoriesError: ev, fetchPurchasesError: ex, claimError: e_, refreshCategories: ek } = (0, P.ZP)({ location: 'CollectiblesShop.web' }),
        eI = null !== (t = null != ev ? ev : ex) && void 0 !== t ? t : e_;
    (0, k.P)();
    let eS = (0, Z.O)(eC),
        eE = a.useRef(null),
        [ej, eT] = a.useState(!1);
    (0, R.Kp)({
        isFetchingCategories: eb,
        isLayer: em,
        initialItemCardRef: eE
    }),
        a.useEffect(() => {
            if (W === q.f7.VISIBLE || K === q.f7.VISIBLE) {
                var e;
                let t;
                (t = i ? (K === q.f7.VISIBLE ? ed : h) : h),
                    E.default.track(J.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: _,
                        source: t,
                        page_session_id: O,
                        page_type: W === q.f7.VISIBLE ? 'home' : 'full',
                        category: W === q.f7.VISIBLE ? void 0 : null === (e = N.Z.getCategory(eo)) || void 0 === e ? void 0 : e.name
                    });
            }
            !ef &&
                E.default.track(J.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: X.cd.COLLECTIBLES_SHOP,
                    location_stack: _
                });
        }, [i, ef, _, h, O, W, K, eo, ec, ed]);
    let { dismissCollectiblesShopTabNewBadge: eB } = (0, G.Z)();
    a.useEffect(() => {
        if ((eB(), !(0, C.un)(c.z.COLLECTIBLES_GIFTING_COACHMARK)))
            (0, C.EW)(c.z.COLLECTIBLES_GIFTING_COACHMARK, {
                dismissAction: Y.L.AUTO_DISMISS,
                forceTrack: !0
            });
    }, [eB]),
        a.useEffect(() => {
            !n && (0, m.Y)(J.Z5c.COLLECTIBLES_SHOP);
        }, [n]),
        a.useEffect(
            () => () => {
                (0, T.K$)({
                    categories: [...eC.values()],
                    itemTypes: [s.Z.AVATAR_DECORATION, s.Z.PROFILE_EFFECT]
                });
            },
            [eC]
        ),
        a.useEffect(() => {
            if (!n || em || eh) return;
            let e = (e) => {
                if (e.key === Q.mR.Escape) eg();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [n, em, eh, eg]);
    let eN = a.useCallback(() => {
            ek();
        }, [ek]),
        { setCategoryRef: ey, handleScrollToCategory: eL } = (0, R.xV)(A.current),
        { reducedMotion: eP } = a.useContext(u.AccessibilityPreferencesContext),
        eZ = a.useRef(null),
        eO = a.useRef(null);
    (0, u.useFocusLock)(eZ),
        a.useEffect(() => {
            if (!n) {
                var e;
                null === (e = eO.current) || void 0 === e || e.focus();
            }
        }, [n]);
    let ew = a.useCallback(
            async (e, t, r) => {
                let a = r && !n && !eP.enabled;
                eu(e), ec(t), await et(a), t && eL(t);
            },
            [et, eL, n, eP]
        ),
        eA = (0, o.e7)([N.Z], () => {
            var e;
            return null === (e = N.Z.getCategory(eo)) || void 0 === e ? void 0 : e.name;
        });
    return (0, r.jsx)(p.Gt, {
        value: _,
        children: (0, r.jsxs)(B.k0, {
            newValue: {
                sessionId: O,
                pageCategory: eA
            },
            children: [
                (0, r.jsx)('div', {
                    className: ee.shop,
                    ref: n ? eZ : eO,
                    tabIndex: -1,
                    children: (0, r.jsxs)(u.AdvancedScroller, {
                        className: ee.shopScroll,
                        ref: A,
                        onScroll: () => {
                            if ((F(), null != A.current)) {
                                let e = A.current.getDistanceFromBottom();
                                el >= q.iA ? ei(e < 20) : e <= 200 && es(el + q.IV);
                            }
                        },
                        children: [
                            W !== q.f7.HIDDEN &&
                                (0, r.jsxs)('div', {
                                    className: l()(ee.shopViewWrapper, {
                                        [ee.visible]: W === q.f7.VISIBLE,
                                        [ee.in]: W === q.f7.IN,
                                        [ee.out]: W === q.f7.OUT
                                    }),
                                    children: [
                                        (0, r.jsx)(D.I, {
                                            isFullScreen: n,
                                            isLayer: em,
                                            onClose: eg,
                                            isCatalogView: !1,
                                            transparent: !0
                                        }),
                                        (0, r.jsx)(z.Z, {
                                            isFullScreen: n,
                                            handleTransition: ew,
                                            numVisibleItems: el
                                        })
                                    ]
                                }),
                            K !== q.f7.HIDDEN &&
                                (0, r.jsxs)('div', {
                                    className: l()(ee.shopViewWrapper, {
                                        [ee.visible]: K === q.f7.VISIBLE,
                                        [ee.in]: K === q.f7.IN,
                                        [ee.out]: K === q.f7.OUT
                                    }),
                                    children: [
                                        (0, r.jsx)(D.I, {
                                            isFullScreen: n,
                                            isLayer: em,
                                            onClose: eg,
                                            isCatalogView: i,
                                            transparent: i,
                                            handleTransition: en
                                        }),
                                        (0, r.jsx)('div', {
                                            className: ee.pageWrapper,
                                            children: (0, r.jsx)('main', {
                                                className: l()(ee.page, { [ee.pageFullscreen]: n }),
                                                children: eb
                                                    ? (0, r.jsx)(M.Z, {})
                                                    : null != eI
                                                      ? (0, r.jsx)(H.Z, {
                                                            onRetry: eN,
                                                            errorOrigin: H.i.SHOP_PAGE
                                                        })
                                                      : (0, r.jsx)('div', {
                                                            className: ee.categories,
                                                            children: eS
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
                                                                                    isPremiumUser: ef,
                                                                                    category: e,
                                                                                    initialItemCardRef: eE,
                                                                                    setIsGiftEasterEggEnabled: eT,
                                                                                    isGiftEasterEggEnabled: ej,
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
                ej && (0, r.jsx)(U.Z, {}),
                !n &&
                    K !== q.f7.VISIBLE &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)($.Z, {
                                peaking: ea,
                                transitioning: W === q.f7.OUT
                            }),
                            (0, r.jsx)($.Z, {
                                style: { left: 1850 },
                                peaking: ea,
                                transitioning: W === q.f7.OUT
                            })
                        ]
                    })
            ]
        })
    });
};
