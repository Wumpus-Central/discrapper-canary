n.r(t), n.d(t, { default: () => ea }), n(47120);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(979554),
    i = n(399606),
    d = n(704215),
    c = n(952265),
    u = n(481060),
    g = n(150063),
    f = n(434650),
    h = n(100527),
    m = n(906732),
    p = n(702486),
    b = n(605236),
    C = n(977395),
    _ = n(214852),
    v = n(479446),
    x = n(981632),
    k = n(290026),
    j = n(511050),
    S = n(819640),
    y = n(594174),
    O = n(626135),
    E = n(74538),
    I = n(335131),
    B = n(381585),
    T = n(597688),
    w = n(328347),
    L = n(139668),
    P = n(223143),
    N = n(298228),
    Z = n(937510),
    A = n(309956),
    H = n(853748),
    W = n(426171),
    R = n(823941),
    F = n(752053),
    M = n(963102),
    V = n(508498),
    D = n(38900),
    z = n(709999),
    U = n(373113),
    G = n(681435),
    q = n(566564),
    $ = n(531864),
    K = n(302800),
    Q = n(215023),
    X = n(981631),
    Y = n(921944),
    J = n(420212),
    ee = n(474936),
    et = n(577852);
function en(e) {
    let { products: t, handleShopCardMount: n, header: l, category: a, isPremiumUser: s, isGiftEasterEggEnabled: o } = e,
        d = (0, i.e7)([y.default], () => y.default.getCurrentUser());
    return null == d || 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  null != l
                      ? (0, r.jsx)(u.Text, {
                            className: et.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: l
                        })
                      : (0, r.jsx)(u.LZC, { size: 24 }),
                  (0, r.jsx)('div', {
                      className: et.cardsContainer,
                      children: t.map((e, t) =>
                          (0, r.jsx)(
                              B.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, r.jsx)(
                                      z.Z,
                                      {
                                          onMount: n(e),
                                          isPremiumUser: s,
                                          category: a,
                                          product: e,
                                          user: d,
                                          isGiftEasterEggEnabled: o,
                                          tab: Q.AW.CATALOG
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
    var { category: t, initialItemCardRef: n } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['category', 'initialItemCardRef']);
    let s = (0, Z.l)(t.products),
        o = (0, i.e7)([w.Z], () => w.Z.initialProductSkuId),
        d = l.useCallback(
            (e) => (t) => {
                var r;
                (e.skuId === o || (null === (r = e.variants) || void 0 === r ? void 0 : r.some((e) => e.skuId === o)) === !0) && (n.current = t.current);
            },
            [o, n]
        );
    return (0, r.jsx)(
        en,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                products: s,
                handleShopCardMount: d,
                category: t
            },
            a
        )
    );
}
function el(e) {
    let { category: t, isPremiumUser: n, initialItemCardRef: a, isGiftEasterEggEnabled: o, setIsGiftEasterEggEnabled: i, showEasterEggToggle: d, isFullScreen: c } = e,
        g = l.useRef(10 + 70 * Math.random()),
        [h, m] = l.useState(!1),
        p = (0, K.M7)(t.skuId),
        b = (0, f.O)(
            (e) => {
                m(e && null != p);
            },
            c ? 0.13 : 0.15
        );
    return (0, r.jsxs)('div', {
        className: et.categoryWrapper,
        ref: b,
        children: [
            d &&
                (0, r.jsx)(u.P3F, {
                    className: s()(et.hiddenWumpus, { [et.hiddenWumpusEnabled]: o }),
                    onClick: () => i(!0),
                    style: { left: ''.concat(g.current, '%') },
                    children: (0, r.jsx)(x.Z, {
                        idleAnimationState: v.SR.IDLE,
                        giftStyle: ee.Cj.BOX
                    })
                }),
            (0, r.jsx)(R.Z, {
                category: t,
                hideLimitedTimeBadge: null != p
            }),
            (0, r.jsx)(er, {
                category: t,
                initialItemCardRef: a,
                isPremiumUser: n,
                isGiftEasterEggEnabled: o
            }),
            null != p &&
                null != t.unpublishedAt &&
                (0, r.jsx)(H.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: h,
                    displayOptions: p,
                    isFullScreen: c
                })
        ]
    });
}
let ea = function (e) {
    var t;
    let { isFullScreen: n = !0, tab: a = Q.AW.HOME } = e;
    (0, _.z)(C.f);
    let { analyticsSource: f, analyticsLocations: v } = (0, i.cj)([w.Z], () => w.Z.getAnalytics()),
        { analyticsLocations: x } = (0, m.ZP)([...v, h.Z.COLLECTIBLES_SHOP]),
        { sessionId: Z, scrollerRef: H, scrollHandler: R } = (0, p._)(X.rMx.COLLECTIBLES_SHOP_SCROLLED, f),
        { selectedTab: z, transitionState: K, transitionToTab: en } = (0, A.B)(H, a, n),
        [er, ea] = l.useState(!1),
        es = (0, L.R)('CollectiblesShop'),
        [eo, ei] = l.useState(Q.IV),
        [ed, ec] = l.useState(),
        [eu, eg] = l.useState(),
        { closeIntroToOrbsClaimedCoachmark: ef } = (0, j.Z)({ location: 'CollectiblesShop' });
    l.useEffect(
        () => () => {
            ef();
        },
        [f, ef]
    );
    let eh = (0, i.e7)([S.Z], () => S.Z.getLayers().includes(X.S9g.COLLECTIBLES_SHOP)),
        em = (0, c.f9)(),
        { onClose: ep } = (0, V.Db)(),
        eb = (0, i.e7)([y.default], () => y.default.getCurrentUser()),
        eC = E.ZP.canUseCollectibles(eb),
        { categories: e_, isFetchingCategories: ev, fetchCategoriesError: ex, fetchPurchasesError: ek, claimError: ej, refreshCategories: eS } = (0, P.ZP)({ location: 'CollectiblesShop.web' }),
        ey = null !== (t = null != ex ? ex : ek) && void 0 !== t ? t : ej;
    (0, k.P)();
    let eO = (0, N.O)(e_),
        eE = l.useRef(null),
        [eI, eB] = l.useState(!1);
    (0, W.Kp)({
        isFetchingCategories: ev,
        isLayer: eh,
        initialItemCardRef: eE
    }),
        l.useEffect(() => {
            if (K === Q.f7.VISIBLE) {
                var e;
                let t;
                (t = z === Q.AW.CATALOG ? eu : f),
                    O.default.track(X.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: x,
                        source: t,
                        page_session_id: Z,
                        page_type: z === Q.AW.HOME ? 'home' : 'full',
                        category: z === Q.AW.HOME ? void 0 : null === (e = T.Z.getCategory(ed)) || void 0 === e ? void 0 : e.name
                    });
            }
            eC ||
                O.default.track(X.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: ee.cd.COLLECTIBLES_SHOP,
                    location_stack: x
                });
        }, [eC, x, f, Z, ed, ec, eu, K, z]);
    let { dismissShopButtonDC: eT } = (0, G.Z)();
    l.useEffect(() => {
        eT(),
            !(0, b.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK) &&
                (0, b.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
                    dismissAction: Y.L.AUTO_DISMISS,
                    forceTrack: !0
                });
    }, [eT]),
        l.useEffect(() => {
            n || (0, g.Y)(X.Z5c.COLLECTIBLES_SHOP);
        }, [n]),
        l.useEffect(
            () => () => {
                (0, I.K$)({
                    categories: [...e_.values()],
                    itemTypes: [o.Z.AVATAR_DECORATION, o.Z.PROFILE_EFFECT]
                });
            },
            [e_]
        ),
        l.useEffect(() => {
            if (!n || eh || em) return;
            let e = (e) => {
                e.key === J.mR.Escape && ep();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [n, eh, em, ep]);
    let ew = l.useCallback(() => {
            eS();
        }, [eS]),
        { setCategoryRef: eL, handleScrollToCategory: eP } = (0, W.xV)(H.current),
        { reducedMotion: eN } = l.useContext(u.Sfi),
        eZ = l.useRef(null),
        eA = l.useRef(null);
    (0, u.Tbt)(eZ),
        l.useEffect(() => {
            if (!n) {
                var e;
                null === (e = eA.current) || void 0 === e || e.focus();
            }
        }, [n]);
    let eH = l.useCallback(
            async (e, t, r) => {
                let l = r && !n && !eN.enabled;
                eg(e), ec(t), await en(Q.AW.CATALOG, l), t && eP(t);
            },
            [eP, n, eN.enabled, en]
        ),
        eW = (0, i.e7)([T.Z], () => {
            var e;
            return null === (e = T.Z.getCategory(ed)) || void 0 === e ? void 0 : e.name;
        });
    return (0, r.jsx)(m.Gt, {
        value: x,
        children: (0, r.jsxs)(B.k0, {
            newValue: {
                sessionId: Z,
                pageCategory: eW
            },
            children: [
                (0, r.jsx)('div', {
                    className: et.shop,
                    ref: n ? eZ : eA,
                    tabIndex: -1,
                    children: (0, r.jsx)(u.Den, {
                        className: et.shopScroll,
                        ref: H,
                        onScroll: () => {
                            if ((R(), null != H.current)) {
                                let e = H.current.getDistanceFromBottom();
                                eo >= es ? ea(e < 20) : e <= 200 && ei(eo + Q.IV);
                            }
                        },
                        children: (0, r.jsxs)('div', {
                            className: s()(et.shopViewWrapper, {
                                [et.visible]: K === Q.f7.VISIBLE,
                                [et.in]: K === Q.f7.IN,
                                [et.out]: K === Q.f7.OUT
                            }),
                            children: [
                                (0, r.jsx)(M.I, {
                                    isFullScreen: n,
                                    isLayer: eh,
                                    onClose: ep,
                                    handleTransition: en,
                                    selectedTab: z
                                }),
                                (function (e) {
                                    switch (e) {
                                        case Q.AW.HOME:
                                        case Q.AW.ORBS:
                                            return (0, r.jsx)(q.Z, {
                                                isFullScreen: n,
                                                handleTransition: eH,
                                                numVisibleItems: eo,
                                                tab: e
                                            });
                                        case Q.AW.CATALOG:
                                            return (0, r.jsx)('div', {
                                                className: et.pageWrapper,
                                                children: (0, r.jsx)('main', {
                                                    className: s()(et.page, { [et.pageFullscreen]: n }),
                                                    children: ev
                                                        ? (0, r.jsx)(D.Z, {})
                                                        : null != ey
                                                          ? (0, r.jsx)(F.Z, {
                                                                onRetry: ew,
                                                                errorOrigin: F.i.SHOP_PAGE
                                                            })
                                                          : (0, r.jsx)('div', {
                                                                className: et.categories,
                                                                children: eO
                                                                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                                                                    .filter((e) => {
                                                                        let { products: t } = e;
                                                                        return t.length > 0;
                                                                    })
                                                                    .map((e, t) =>
                                                                        (0, r.jsx)(
                                                                            'div',
                                                                            {
                                                                                ref: (t) => eL(e.skuId, t),
                                                                                children: (0, r.jsx)(B.k0, {
                                                                                    newValue: { categoryPosition: t },
                                                                                    children: (0, r.jsx)(el, {
                                                                                        isPremiumUser: eC,
                                                                                        category: e,
                                                                                        initialItemCardRef: eE,
                                                                                        setIsGiftEasterEggEnabled: eB,
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
                                            });
                                        default:
                                            return null;
                                    }
                                })(z)
                            ]
                        })
                    })
                }),
                eI && (0, r.jsx)(U.Z, {}),
                !n &&
                    z === Q.AW.HOME &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)($.Z, {
                                peaking: er,
                                transitioning: K === Q.f7.OUT
                            }),
                            (0, r.jsx)($.Z, {
                                style: { left: 1850 },
                                peaking: er,
                                transitioning: K === Q.f7.OUT
                            })
                        ]
                    })
            ]
        })
    });
};
