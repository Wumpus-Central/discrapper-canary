r.r(t), r.d(t, { default: () => el }), r(47120);
var n = r(200651),
    l = r(192379),
    i = r(120356),
    a = r.n(i),
    o = r(979554),
    s = r(399606),
    c = r(704215),
    d = r(952265),
    u = r(481060),
    p = r(150063),
    f = r(434650),
    h = r(100527),
    C = r(906732),
    m = r(702486),
    b = r(605236),
    g = r(977395),
    v = r(214852),
    x = r(479446),
    _ = r(981632),
    j = r(290026),
    y = r(511050),
    O = r(819640),
    k = r(594174),
    P = r(626135),
    S = r(74538),
    E = r(335131),
    w = r(381585),
    L = r(597688),
    I = r(328347),
    T = r(223143),
    N = r(298228),
    B = r(937510),
    Z = r(309956),
    F = r(853748),
    A = r(426171),
    R = r(823941),
    W = r(752053),
    H = r(963102),
    D = r(508498),
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
    let { products: t, handleShopCardMount: r, header: l, category: i, isPremiumUser: a, isGiftEasterEggEnabled: o } = e,
        c = (0, s.e7)([k.default], () => k.default.getCurrentUser());
    return null == c || 0 === t.length
        ? null
        : (0, n.jsxs)('div', {
              children: [
                  null != l
                      ? (0, n.jsx)(u.Text, {
                            className: ee.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: l
                        })
                      : (0, n.jsx)(u.LZC, { size: 24 }),
                  (0, n.jsx)('div', {
                      className: ee.cardsContainer,
                      children: t.map((e, t) =>
                          (0, n.jsx)(
                              w.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, n.jsx)(
                                      V.Z,
                                      {
                                          onMount: r(e),
                                          isPremiumUser: a,
                                          category: i,
                                          product: e,
                                          user: c,
                                          isGiftEasterEggEnabled: o,
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
        i = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            }
            return l;
        })(e, ['category', 'initialItemCardRef']);
    let a = (0, B.l)(t.products),
        o = (0, s.e7)([I.Z], () => I.Z.initialProductSkuId),
        c = l.useCallback(
            (e) => (t) => {
                var n;
                (e.skuId === o || (null === (n = e.variants) || void 0 === n ? void 0 : n.some((e) => e.skuId === o)) === !0) && (r.current = t.current);
            },
            [o, r]
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
                products: a,
                handleShopCardMount: c,
                category: t
            },
            i
        )
    );
}
function en(e) {
    let { category: t, isPremiumUser: r, initialItemCardRef: i, isGiftEasterEggEnabled: o, setIsGiftEasterEggEnabled: s, showEasterEggToggle: c, isFullScreen: d } = e,
        p = l.useRef(10 + 70 * Math.random()),
        [h, C] = l.useState(!1),
        m = (0, K.M7)(t.skuId),
        b = (0, f.O)(
            (e) => {
                C(e && null != m);
            },
            d ? 0.13 : 0.15
        );
    return (0, n.jsxs)('div', {
        className: ee.categoryWrapper,
        ref: b,
        children: [
            c &&
                (0, n.jsx)(u.P3F, {
                    className: a()(ee.hiddenWumpus, { [ee.hiddenWumpusEnabled]: o }),
                    onClick: () => s(!0),
                    style: { left: ''.concat(p.current, '%') },
                    children: (0, n.jsx)(_.Z, {
                        idleAnimationState: x.SR.IDLE,
                        giftStyle: Q.Cj.BOX
                    })
                }),
            (0, n.jsx)(R.Z, {
                category: t,
                hideLimitedTimeBadge: null != m
            }),
            (0, n.jsx)(er, {
                category: t,
                initialItemCardRef: i,
                isPremiumUser: r,
                isGiftEasterEggEnabled: o
            }),
            null != m &&
                null != t.unpublishedAt &&
                (0, n.jsx)(F.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: h,
                    displayOptions: m,
                    isFullScreen: d
                })
        ]
    });
}
let el = function (e) {
    var t;
    let { isFullScreen: r = !0, tab: i = $.AW.HOME } = e;
    (0, v.z)(g.f);
    let { analyticsSource: f, analyticsLocations: x } = (0, s.cj)([I.Z], () => I.Z.getAnalytics()),
        { analyticsLocations: _ } = (0, C.ZP)([...x, h.Z.COLLECTIBLES_SHOP]),
        { sessionId: B, scrollerRef: F, scrollHandler: R } = (0, m._)(J.rMx.COLLECTIBLES_SHOP_SCROLLED, f),
        { selectedTab: V, transitionState: K, transitionToTab: et } = (0, Z.B)(F, i, r),
        [er, el] = l.useState(!1),
        [ei, ea] = l.useState($.IV),
        [eo, es] = l.useState(),
        [ec, ed] = l.useState(),
        { openIntroToOrbsClaimedCoachmark: eu, closeIntroToOrbsClaimedCoachmark: ep } = (0, y.Z)({ location: 'CollectiblesShop' });
    l.useEffect(
        () => (
            f === h.Z.INTRO_TO_ORBS_QUEST && eu(),
            () => {
                ep();
            }
        ),
        [f, eu, ep]
    );
    let ef = (0, s.e7)([O.Z], () => O.Z.getLayers().includes(J.S9g.COLLECTIBLES_SHOP)),
        eh = (0, d.f9)(),
        { onClose: eC } = (0, D.Db)(),
        em = (0, s.e7)([k.default], () => k.default.getCurrentUser()),
        eb = S.ZP.canUseCollectibles(em),
        { categories: eg, isFetchingCategories: ev, fetchCategoriesError: ex, fetchPurchasesError: e_, claimError: ej, refreshCategories: ey } = (0, T.ZP)({ location: 'CollectiblesShop.web' }),
        eO = null !== (t = null != ex ? ex : e_) && void 0 !== t ? t : ej;
    (0, j.P)();
    let ek = (0, N.O)(eg),
        eP = l.useRef(null),
        [eS, eE] = l.useState(!1);
    (0, A.Kp)({
        isFetchingCategories: ev,
        isLayer: ef,
        initialItemCardRef: eP
    }),
        l.useEffect(() => {
            if (K === $.f7.VISIBLE) {
                var e;
                let t;
                (t = V === $.AW.CATALOG ? ec : f),
                    P.default.track(J.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: _,
                        source: t,
                        page_session_id: B,
                        page_type: V === $.AW.HOME ? 'home' : 'full',
                        category: V === $.AW.HOME ? void 0 : null === (e = L.Z.getCategory(eo)) || void 0 === e ? void 0 : e.name
                    });
            }
            eb ||
                P.default.track(J.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: Q.cd.COLLECTIBLES_SHOP,
                    location_stack: _
                });
        }, [eb, _, f, B, eo, es, ec, K, V]);
    let { dismissCollectiblesShopTabNewBadge: ew } = (0, G.Z)();
    l.useEffect(() => {
        ew(),
            !(0, b.un)(c.z.COLLECTIBLES_GIFTING_COACHMARK) &&
                (0, b.EW)(c.z.COLLECTIBLES_GIFTING_COACHMARK, {
                    dismissAction: X.L.AUTO_DISMISS,
                    forceTrack: !0
                });
    }, [ew]),
        l.useEffect(() => {
            r || (0, p.Y)(J.Z5c.COLLECTIBLES_SHOP);
        }, [r]),
        l.useEffect(
            () => () => {
                (0, E.K$)({
                    categories: [...eg.values()],
                    itemTypes: [o.Z.AVATAR_DECORATION, o.Z.PROFILE_EFFECT]
                });
            },
            [eg]
        ),
        l.useEffect(() => {
            if (!r || ef || eh) return;
            let e = (e) => {
                e.key === Y.mR.Escape && eC();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [r, ef, eh, eC]);
    let eL = l.useCallback(() => {
            ey();
        }, [ey]),
        { setCategoryRef: eI, handleScrollToCategory: eT } = (0, A.xV)(F.current),
        { reducedMotion: eN } = l.useContext(u.Sfi),
        eB = l.useRef(null),
        eZ = l.useRef(null);
    (0, u.Tbt)(eB),
        l.useEffect(() => {
            if (!r) {
                var e;
                null === (e = eZ.current) || void 0 === e || e.focus();
            }
        }, [r]);
    let eF = l.useCallback(
            async (e, t, n) => {
                let l = n && !r && !eN.enabled;
                ed(e), es(t), await et($.AW.CATALOG, l), t && eT(t);
            },
            [eT, r, eN.enabled, et]
        ),
        eA = (0, s.e7)([L.Z], () => {
            var e;
            return null === (e = L.Z.getCategory(eo)) || void 0 === e ? void 0 : e.name;
        });
    return (0, n.jsx)(C.Gt, {
        value: _,
        children: (0, n.jsxs)(w.k0, {
            newValue: {
                sessionId: B,
                pageCategory: eA
            },
            children: [
                (0, n.jsx)('div', {
                    className: ee.shop,
                    ref: r ? eB : eZ,
                    tabIndex: -1,
                    children: (0, n.jsx)(u.Den, {
                        className: ee.shopScroll,
                        ref: F,
                        onScroll: () => {
                            if ((R(), null != F.current)) {
                                let e = F.current.getDistanceFromBottom();
                                ei >= $.iA ? el(e < 20) : e <= 200 && ea(ei + $.IV);
                            }
                        },
                        children: (0, n.jsxs)('div', {
                            className: a()(ee.shopViewWrapper, {
                                [ee.visible]: K === $.f7.VISIBLE,
                                [ee.in]: K === $.f7.IN,
                                [ee.out]: K === $.f7.OUT
                            }),
                            children: [
                                (0, n.jsx)(H.I, {
                                    isFullScreen: r,
                                    isLayer: ef,
                                    onClose: eC,
                                    handleTransition: et,
                                    selectedTab: V
                                }),
                                (function (e) {
                                    switch (e) {
                                        case $.AW.HOME:
                                        case $.AW.ORBS:
                                            return (0, n.jsx)(z.Z, {
                                                isFullScreen: r,
                                                handleTransition: eF,
                                                numVisibleItems: ei,
                                                tab: e
                                            });
                                        case $.AW.CATALOG:
                                            return (0, n.jsx)('div', {
                                                className: ee.pageWrapper,
                                                children: (0, n.jsx)('main', {
                                                    className: a()(ee.page, { [ee.pageFullscreen]: r }),
                                                    children: ev
                                                        ? (0, n.jsx)(M.Z, {})
                                                        : null != eO
                                                          ? (0, n.jsx)(W.Z, {
                                                                onRetry: eL,
                                                                errorOrigin: W.i.SHOP_PAGE
                                                            })
                                                          : (0, n.jsx)('div', {
                                                                className: ee.categories,
                                                                children: ek
                                                                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                                                                    .filter((e) => {
                                                                        let { products: t } = e;
                                                                        return t.length > 0;
                                                                    })
                                                                    .map((e, t) =>
                                                                        (0, n.jsx)(
                                                                            'div',
                                                                            {
                                                                                ref: (t) => eI(e.skuId, t),
                                                                                children: (0, n.jsx)(w.k0, {
                                                                                    newValue: { categoryPosition: t },
                                                                                    children: (0, n.jsx)(en, {
                                                                                        isPremiumUser: eb,
                                                                                        category: e,
                                                                                        initialItemCardRef: eP,
                                                                                        setIsGiftEasterEggEnabled: eE,
                                                                                        isGiftEasterEggEnabled: eS,
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
                eS && (0, n.jsx)(U.Z, {}),
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
