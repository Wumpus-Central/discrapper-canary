n.r(t), n.d(t, { default: () => er }), n(47120);
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
    g = n(702486),
    f = n(605236),
    x = n(977395),
    _ = n(214852),
    v = n(479446),
    b = n(981632),
    k = n(290026),
    j = n(819640),
    L = n(594174),
    E = n(626135),
    S = n(74538),
    T = n(335131),
    I = n(381585),
    Z = n(597688),
    y = n(328347),
    B = n(223143),
    F = n(298228),
    N = n(937510),
    P = n(309956),
    A = n(853748),
    w = n(426171),
    O = n(823941),
    R = n(752053),
    H = n(963102),
    M = n(508498),
    V = n(38900),
    D = n(709999),
    W = n(373113),
    U = n(141594),
    G = n(566564),
    z = n(531864),
    q = n(302800),
    $ = n(215023),
    K = n(981631),
    Y = n(921944),
    J = n(420212),
    X = n(474936),
    Q = n(697526);
function ee(e) {
    let { products: t, handleShopCardMount: n, header: l, category: i, isPremiumUser: s, isGiftEasterEggEnabled: a } = e,
        d = (0, o.e7)([L.default], () => L.default.getCurrentUser());
    return null == d || 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  null != l
                      ? (0, r.jsx)(u.Text, {
                            className: Q.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: l
                        })
                      : (0, r.jsx)(u.LZC, { size: 24 }),
                  (0, r.jsx)('div', {
                      className: Q.cardsContainer,
                      children: t.map((e, t) =>
                          (0, r.jsx)(
                              I.k0,
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
function et(e) {
    let { category: t, initialItemCardRef: n, ...i } = e,
        s = (0, N.l)(t.products),
        a = (0, o.e7)([y.Z], () => y.Z.initialProductSkuId),
        d = l.useCallback(
            (e) => (t) => {
                var r;
                (e.skuId === a || (null === (r = e.variants) || void 0 === r ? void 0 : r.some((e) => e.skuId === a)) === !0) && (n.current = t.current);
            },
            [a, n]
        );
    return (0, r.jsx)(ee, {
        products: s,
        handleShopCardMount: d,
        category: t,
        ...i
    });
}
function en(e) {
    let { category: t, isPremiumUser: n, initialItemCardRef: i, isGiftEasterEggEnabled: a, setIsGiftEasterEggEnabled: o, showEasterEggToggle: d, isFullScreen: c } = e,
        C = l.useRef(10 + 70 * Math.random()),
        [p, m] = l.useState(!1),
        g = (0, q.M7)(t.skuId),
        f = (0, h.O)(
            (e) => {
                m(e && null != g);
            },
            c ? 0.13 : 0.15
        );
    return (0, r.jsxs)('div', {
        className: Q.categoryWrapper,
        ref: f,
        children: [
            d &&
                (0, r.jsx)(u.P3F, {
                    className: s()(Q.hiddenWumpus, { [Q.hiddenWumpusEnabled]: a }),
                    onClick: () => o(!0),
                    style: { left: ''.concat(C.current, '%') },
                    children: (0, r.jsx)(b.Z, {
                        idleAnimationState: v.SR.IDLE,
                        giftStyle: X.Cj.BOX
                    })
                }),
            (0, r.jsx)(O.Z, {
                category: t,
                hideLimitedTimeBadge: null != g
            }),
            (0, r.jsx)(et, {
                category: t,
                initialItemCardRef: i,
                isPremiumUser: n,
                isGiftEasterEggEnabled: a
            }),
            null != g &&
                null != t.unpublishedAt &&
                (0, r.jsx)(A.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: p,
                    displayOptions: g,
                    isFullScreen: c
                })
        ]
    });
}
let er = function (e) {
    var t;
    let { isFullScreen: n = !0, tab: i = $.AW.HOME } = e;
    (0, _.z)(x.f);
    let { analyticsSource: h, analyticsLocations: v } = (0, o.cj)([y.Z], () => y.Z.getAnalytics()),
        { analyticsLocations: b } = (0, m.ZP)([...v, p.Z.COLLECTIBLES_SHOP]),
        { sessionId: N, scrollerRef: A, scrollHandler: O } = (0, g._)(K.rMx.COLLECTIBLES_SHOP_SCROLLED, h),
        { selectedTab: D, transitionState: q, transitionToTab: ee } = (0, P.B)(A, i, n),
        [et, er] = l.useState(!1),
        [el, ei] = l.useState($.IV),
        [es, ea] = l.useState(),
        [eo, ed] = l.useState(),
        ec = (0, o.e7)([j.Z], () => j.Z.getLayers().includes(K.S9g.COLLECTIBLES_SHOP)),
        eu = (0, c.f9)(),
        { onClose: eC } = (0, M.Db)(),
        eh = (0, o.e7)([L.default], () => L.default.getCurrentUser()),
        ep = S.ZP.canUseCollectibles(eh),
        { categories: em, isFetchingCategories: eg, fetchCategoriesError: ef, fetchPurchasesError: ex, claimError: e_, refreshCategories: ev } = (0, B.ZP)({ location: 'CollectiblesShop.web' }),
        eb = null !== (t = null != ef ? ef : ex) && void 0 !== t ? t : e_;
    (0, k.P)();
    let ek = (0, F.O)(em),
        ej = l.useRef(null),
        [eL, eE] = l.useState(!1);
    (0, w.Kp)({
        isFetchingCategories: eg,
        isLayer: ec,
        initialItemCardRef: ej
    }),
        l.useEffect(() => {
            if (q === $.f7.VISIBLE) {
                var e;
                let t;
                (t = D === $.AW.CATALOG ? eo : h),
                    E.default.track(K.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: b,
                        source: t,
                        page_session_id: N,
                        page_type: D === $.AW.HOME ? 'home' : 'full',
                        category: D === $.AW.HOME ? void 0 : null === (e = Z.Z.getCategory(es)) || void 0 === e ? void 0 : e.name
                    });
            }
            ep ||
                E.default.track(K.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: X.cd.COLLECTIBLES_SHOP,
                    location_stack: b
                });
        }, [ep, b, h, N, es, ea, eo, q, D]);
    let { dismissCollectiblesShopTabNewBadge: eS } = (0, U.Z)();
    l.useEffect(() => {
        eS(),
            !(0, f.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK) &&
                (0, f.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
                    dismissAction: Y.L.AUTO_DISMISS,
                    forceTrack: !0
                });
    }, [eS]),
        l.useEffect(() => {
            n || (0, C.Y)(K.Z5c.COLLECTIBLES_SHOP);
        }, [n]),
        l.useEffect(
            () => () => {
                (0, T.K$)({
                    categories: [...em.values()],
                    itemTypes: [a.Z.AVATAR_DECORATION, a.Z.PROFILE_EFFECT]
                });
            },
            [em]
        ),
        l.useEffect(() => {
            if (!n || ec || eu) return;
            let e = (e) => {
                e.key === J.mR.Escape && eC();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [n, ec, eu, eC]);
    let eT = l.useCallback(() => {
            ev();
        }, [ev]),
        { setCategoryRef: eI, handleScrollToCategory: eZ } = (0, w.xV)(A.current),
        { reducedMotion: ey } = l.useContext(u.Sfi),
        eB = l.useRef(null),
        eF = l.useRef(null);
    (0, u.Tbt)(eB),
        l.useEffect(() => {
            if (!n) {
                var e;
                null === (e = eF.current) || void 0 === e || e.focus();
            }
        }, [n]);
    let eN = l.useCallback(
            async (e, t, r) => {
                let l = r && !n && !ey.enabled;
                ed(e), ea(t), await ee($.AW.CATALOG, l), t && eZ(t);
            },
            [eZ, n, ey.enabled, ee]
        ),
        eP = (0, o.e7)([Z.Z], () => {
            var e;
            return null === (e = Z.Z.getCategory(es)) || void 0 === e ? void 0 : e.name;
        });
    return (0, r.jsx)(m.Gt, {
        value: b,
        children: (0, r.jsxs)(I.k0, {
            newValue: {
                sessionId: N,
                pageCategory: eP
            },
            children: [
                (0, r.jsx)('div', {
                    className: Q.shop,
                    ref: n ? eB : eF,
                    tabIndex: -1,
                    children: (0, r.jsx)(u.Den, {
                        className: Q.shopScroll,
                        ref: A,
                        onScroll: () => {
                            if ((O(), null != A.current)) {
                                let e = A.current.getDistanceFromBottom();
                                el >= $.iA ? er(e < 20) : e <= 200 && ei(el + $.IV);
                            }
                        },
                        children: (0, r.jsxs)('div', {
                            className: s()(Q.shopViewWrapper, {
                                [Q.visible]: q === $.f7.VISIBLE,
                                [Q.in]: q === $.f7.IN,
                                [Q.out]: q === $.f7.OUT
                            }),
                            children: [
                                (0, r.jsx)(H.I, {
                                    isFullScreen: n,
                                    isLayer: ec,
                                    onClose: eC,
                                    handleTransition: ee,
                                    selectedTab: D,
                                    transparent: !0
                                }),
                                (function (e) {
                                    switch (e) {
                                        case $.AW.HOME:
                                            return (0, r.jsx)(G.Z, {
                                                isFullScreen: n,
                                                handleTransition: eN,
                                                numVisibleItems: el
                                            });
                                        case $.AW.CATALOG:
                                            return (0, r.jsx)('div', {
                                                className: Q.pageWrapper,
                                                children: (0, r.jsx)('main', {
                                                    className: s()(Q.page, { [Q.pageFullscreen]: n }),
                                                    children: eg
                                                        ? (0, r.jsx)(V.Z, {})
                                                        : null != eb
                                                          ? (0, r.jsx)(R.Z, {
                                                                onRetry: eT,
                                                                errorOrigin: R.i.SHOP_PAGE
                                                            })
                                                          : (0, r.jsx)('div', {
                                                                className: Q.categories,
                                                                children: ek
                                                                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                                                                    .filter((e) => {
                                                                        let { products: t } = e;
                                                                        return t.length > 0;
                                                                    })
                                                                    .map((e, t) =>
                                                                        (0, r.jsx)(
                                                                            'div',
                                                                            {
                                                                                ref: (t) => eI(e.skuId, t),
                                                                                children: (0, r.jsx)(I.k0, {
                                                                                    newValue: { categoryPosition: t },
                                                                                    children: (0, r.jsx)(en, {
                                                                                        isPremiumUser: ep,
                                                                                        category: e,
                                                                                        initialItemCardRef: ej,
                                                                                        setIsGiftEasterEggEnabled: eE,
                                                                                        isGiftEasterEggEnabled: eL,
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
                eL && (0, r.jsx)(W.Z, {}),
                !n &&
                    D === $.AW.HOME &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(z.Z, {
                                peaking: et,
                                transitioning: q === $.f7.OUT
                            }),
                            (0, r.jsx)(z.Z, {
                                style: { left: 1850 },
                                peaking: et,
                                transitioning: q === $.f7.OUT
                            })
                        ]
                    })
            ]
        })
    });
};
