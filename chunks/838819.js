r.r(t), r.d(t, { default: () => ei }), r(47120);
var n = r(200651),
    i = r(192379),
    l = r(120356),
    o = r.n(l),
    a = r(979554),
    s = r(399606),
    c = r(704215),
    d = r(952265),
    u = r(481060),
    p = r(150063),
    f = r(434650),
    h = r(100527),
    b = r(906732),
    C = r(702486),
    m = r(605236),
    g = r(977395),
    v = r(214852),
    x = r(479446),
    j = r(981632),
    _ = r(290026),
    y = r(511050),
    O = r(819640),
    k = r(594174),
    P = r(626135),
    S = r(74538),
    w = r(335131),
    E = r(381585),
    L = r(597688),
    I = r(328347),
    N = r(223143),
    T = r(298228),
    B = r(937510),
    Z = r(309956),
    F = r(853748),
    A = r(426171),
    R = r(823941),
    W = r(752053),
    D = r(963102),
    H = r(508498),
    M = r(38900),
    V = r(709999),
    U = r(373113),
    G = r(141594),
    z = r(566564),
    q = r(531864),
    K = r(302800),
    $ = r(215023),
    J = r(981631),
    X = r(921944),
    Y = r(420212),
    Q = r(474936),
    ee = r(800108);
function et(e) {
    let { products: t, handleShopCardMount: r, header: i, category: l, isPremiumUser: o, isGiftEasterEggEnabled: a } = e,
        c = (0, s.e7)([k.default], () => k.default.getCurrentUser());
    return null == c || 0 === t.length
        ? null
        : (0, n.jsxs)('div', {
              children: [
                  null != i
                      ? (0, n.jsx)(u.Text, {
                            className: ee.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: i
                        })
                      : (0, n.jsx)(u.LZC, { size: 24 }),
                  (0, n.jsx)('div', {
                      className: ee.cardsContainer,
                      children: t.map((e, t) =>
                          (0, n.jsx)(
                              E.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, n.jsx)(
                                      V.Z,
                                      {
                                          onMount: r(e),
                                          isPremiumUser: o,
                                          category: l,
                                          product: e,
                                          user: c,
                                          isGiftEasterEggEnabled: a,
                                          tab: $.AW.CATALOG
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
function er(e) {
    var { category: t, initialItemCardRef: r } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++) (r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ['category', 'initialItemCardRef']);
    let o = (0, B.l)(t.products),
        a = (0, s.e7)([I.Z], () => I.Z.initialProductSkuId),
        c = i.useCallback(
            (e) => (t) => {
                var n;
                (e.skuId === a || (null === (n = e.variants) || void 0 === n ? void 0 : n.some((e) => e.skuId === a)) === !0) && (r.current = t.current);
            },
            [a, r]
        );
    return (0, n.jsx)(
        et,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                products: o,
                handleShopCardMount: c,
                category: t
            },
            l
        )
    );
}
function en(e) {
    let { category: t, isPremiumUser: r, initialItemCardRef: l, isGiftEasterEggEnabled: a, setIsGiftEasterEggEnabled: s, showEasterEggToggle: c, isFullScreen: d } = e,
        p = i.useRef(10 + 70 * Math.random()),
        [h, b] = i.useState(!1),
        C = (0, K.M7)(t.skuId),
        m = (0, f.O)(
            (e) => {
                b(e && null != C);
            },
            d ? 0.13 : 0.15
        );
    return (0, n.jsxs)('div', {
        className: ee.categoryWrapper,
        ref: m,
        children: [
            c &&
                (0, n.jsx)(u.P3F, {
                    className: o()(ee.hiddenWumpus, { [ee.hiddenWumpusEnabled]: a }),
                    onClick: () => s(!0),
                    style: { left: ''.concat(p.current, '%') },
                    children: (0, n.jsx)(j.Z, {
                        idleAnimationState: x.SR.IDLE,
                        giftStyle: Q.Cj.BOX
                    })
                }),
            (0, n.jsx)(R.Z, {
                category: t,
                hideLimitedTimeBadge: null != C
            }),
            (0, n.jsx)(er, {
                category: t,
                initialItemCardRef: l,
                isPremiumUser: r,
                isGiftEasterEggEnabled: a
            }),
            null != C &&
                null != t.unpublishedAt &&
                (0, n.jsx)(F.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: h,
                    displayOptions: C,
                    isFullScreen: d
                })
        ]
    });
}
let ei = function (e) {
    var t;
    let { isFullScreen: r = !0, tab: l = $.AW.HOME } = e;
    (0, v.z)(g.f);
    let { analyticsSource: f, analyticsLocations: x } = (0, s.cj)([I.Z], () => I.Z.getAnalytics()),
        { analyticsLocations: j } = (0, b.ZP)([...x, h.Z.COLLECTIBLES_SHOP]),
        { sessionId: B, scrollerRef: F, scrollHandler: R } = (0, C._)(J.rMx.COLLECTIBLES_SHOP_SCROLLED, f),
        { selectedTab: V, transitionState: K, transitionToTab: et } = (0, Z.B)(F, l, r),
        [er, ei] = i.useState(!1),
        [el, eo] = i.useState($.IV),
        [ea, es] = i.useState(),
        [ec, ed] = i.useState(),
        { closeIntroToOrbsClaimedCoachmark: eu } = (0, y.Z)({ location: 'CollectiblesShop' });
    i.useEffect(
        () => () => {
            eu();
        },
        [f, eu]
    );
    let ep = (0, s.e7)([O.Z], () => O.Z.getLayers().includes(J.S9g.COLLECTIBLES_SHOP)),
        ef = (0, d.f9)(),
        { onClose: eh } = (0, H.Db)(),
        eb = (0, s.e7)([k.default], () => k.default.getCurrentUser()),
        eC = S.ZP.canUseCollectibles(eb),
        { categories: em, isFetchingCategories: eg, fetchCategoriesError: ev, fetchPurchasesError: ex, claimError: ej, refreshCategories: e_ } = (0, N.ZP)({ location: 'CollectiblesShop.web' }),
        ey = null !== (t = null != ev ? ev : ex) && void 0 !== t ? t : ej;
    (0, _.P)();
    let eO = (0, T.O)(em),
        ek = i.useRef(null),
        [eP, eS] = i.useState(!1);
    (0, A.Kp)({
        isFetchingCategories: eg,
        isLayer: ep,
        initialItemCardRef: ek
    }),
        i.useEffect(() => {
            if (K === $.f7.VISIBLE) {
                var e;
                let t;
                (t = V === $.AW.CATALOG ? ec : f),
                    P.default.track(J.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: j,
                        source: t,
                        page_session_id: B,
                        page_type: V === $.AW.HOME ? 'home' : 'full',
                        category: V === $.AW.HOME ? void 0 : null === (e = L.Z.getCategory(ea)) || void 0 === e ? void 0 : e.name
                    });
            }
            eC ||
                P.default.track(J.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: Q.cd.COLLECTIBLES_SHOP,
                    location_stack: j
                });
        }, [eC, j, f, B, ea, es, ec, K, V]);
    let { dismissCollectiblesShopTabNewBadge: ew } = (0, G.Z)();
    i.useEffect(() => {
        ew(),
            !(0, m.un)(c.z.COLLECTIBLES_GIFTING_COACHMARK) &&
                (0, m.EW)(c.z.COLLECTIBLES_GIFTING_COACHMARK, {
                    dismissAction: X.L.AUTO_DISMISS,
                    forceTrack: !0
                });
    }, [ew]),
        i.useEffect(() => {
            r || (0, p.Y)(J.Z5c.COLLECTIBLES_SHOP);
        }, [r]),
        i.useEffect(
            () => () => {
                (0, w.K$)({
                    categories: [...em.values()],
                    itemTypes: [a.Z.AVATAR_DECORATION, a.Z.PROFILE_EFFECT]
                });
            },
            [em]
        ),
        i.useEffect(() => {
            if (!r || ep || ef) return;
            let e = (e) => {
                e.key === Y.mR.Escape && eh();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [r, ep, ef, eh]);
    let eE = i.useCallback(() => {
            e_();
        }, [e_]),
        { setCategoryRef: eL, handleScrollToCategory: eI } = (0, A.xV)(F.current),
        { reducedMotion: eN } = i.useContext(u.Sfi),
        eT = i.useRef(null),
        eB = i.useRef(null);
    (0, u.Tbt)(eT),
        i.useEffect(() => {
            if (!r) {
                var e;
                null === (e = eB.current) || void 0 === e || e.focus();
            }
        }, [r]);
    let eZ = i.useCallback(
            async (e, t, n) => {
                let i = n && !r && !eN.enabled;
                ed(e), es(t), await et($.AW.CATALOG, i), t && eI(t);
            },
            [eI, r, eN.enabled, et]
        ),
        eF = (0, s.e7)([L.Z], () => {
            var e;
            return null === (e = L.Z.getCategory(ea)) || void 0 === e ? void 0 : e.name;
        });
    return (0, n.jsx)(b.Gt, {
        value: j,
        children: (0, n.jsxs)(E.k0, {
            newValue: {
                sessionId: B,
                pageCategory: eF
            },
            children: [
                (0, n.jsx)('div', {
                    className: ee.shop,
                    ref: r ? eT : eB,
                    tabIndex: -1,
                    children: (0, n.jsx)(u.Den, {
                        className: ee.shopScroll,
                        ref: F,
                        onScroll: () => {
                            if ((R(), null != F.current)) {
                                let e = F.current.getDistanceFromBottom();
                                el >= $.iA ? ei(e < 20) : e <= 200 && eo(el + $.IV);
                            }
                        },
                        children: (0, n.jsxs)('div', {
                            className: o()(ee.shopViewWrapper, {
                                [ee.visible]: K === $.f7.VISIBLE,
                                [ee.in]: K === $.f7.IN,
                                [ee.out]: K === $.f7.OUT
                            }),
                            children: [
                                (0, n.jsx)(D.I, {
                                    isFullScreen: r,
                                    isLayer: ep,
                                    onClose: eh,
                                    handleTransition: et,
                                    selectedTab: V
                                }),
                                (function (e) {
                                    switch (e) {
                                        case $.AW.HOME:
                                        case $.AW.ORBS:
                                            return (0, n.jsx)(z.Z, {
                                                isFullScreen: r,
                                                handleTransition: eZ,
                                                numVisibleItems: el,
                                                tab: e
                                            });
                                        case $.AW.CATALOG:
                                            return (0, n.jsx)('div', {
                                                className: ee.pageWrapper,
                                                children: (0, n.jsx)('main', {
                                                    className: o()(ee.page, { [ee.pageFullscreen]: r }),
                                                    children: eg
                                                        ? (0, n.jsx)(M.Z, {})
                                                        : null != ey
                                                          ? (0, n.jsx)(W.Z, {
                                                                onRetry: eE,
                                                                errorOrigin: W.i.SHOP_PAGE
                                                            })
                                                          : (0, n.jsx)('div', {
                                                                className: ee.categories,
                                                                children: eO
                                                                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                                                                    .filter((e) => {
                                                                        let { products: t } = e;
                                                                        return t.length > 0;
                                                                    })
                                                                    .map((e, t) =>
                                                                        (0, n.jsx)(
                                                                            'div',
                                                                            {
                                                                                ref: (t) => eL(e.skuId, t),
                                                                                children: (0, n.jsx)(E.k0, {
                                                                                    newValue: { categoryPosition: t },
                                                                                    children: (0, n.jsx)(en, {
                                                                                        isPremiumUser: eC,
                                                                                        category: e,
                                                                                        initialItemCardRef: ek,
                                                                                        setIsGiftEasterEggEnabled: eS,
                                                                                        isGiftEasterEggEnabled: eP,
                                                                                        isFullScreen: r
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
                                })(V)
                            ]
                        })
                    })
                }),
                eP && (0, n.jsx)(U.Z, {}),
                !r &&
                    V === $.AW.HOME &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(q.Z, {
                                peaking: er,
                                transitioning: K === $.f7.OUT
                            }),
                            (0, n.jsx)(q.Z, {
                                style: { left: 1850 },
                                peaking: er,
                                transitioning: K === $.f7.OUT
                            })
                        ]
                    })
            ]
        })
    });
};
