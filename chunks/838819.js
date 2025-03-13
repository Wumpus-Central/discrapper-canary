n.r(t), n.d(t, { default: () => eo }), n(47120);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(180650),
    i = n(979554),
    c = n(399606),
    d = n(704215),
    u = n(952265),
    g = n(481060),
    h = n(150063),
    f = n(434650),
    m = n(100527),
    p = n(906732),
    b = n(702486),
    C = n(605236),
    _ = n(977395),
    v = n(214852),
    k = n(479446),
    x = n(981632),
    j = n(290026),
    S = n(511050),
    y = n(819640),
    O = n(594174),
    E = n(626135),
    I = n(74538),
    B = n(335131),
    T = n(381585),
    L = n(597688),
    w = n(328347),
    P = n(139668),
    N = n(223143),
    Z = n(298228),
    A = n(937510),
    W = n(309956),
    H = n(853748),
    R = n(426171),
    F = n(823941),
    M = n(752053),
    V = n(963102),
    D = n(508498),
    z = n(38900),
    U = n(709999),
    G = n(373113),
    q = n(681435),
    $ = n(566564),
    K = n(531864),
    Y = n(302800),
    X = n(215023),
    Q = n(981631),
    J = n(921944),
    ee = n(420212),
    et = n(474936),
    en = n(577852);
function er(e) {
    let { products: t, handleShopCardMount: n, header: l, category: a, isPremiumUser: o, isGiftEasterEggEnabled: s } = e,
        i = (0, c.e7)([O.default], () => O.default.getCurrentUser());
    return null == i || 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  null != l
                      ? (0, r.jsx)(g.Text, {
                            className: en.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: l
                        })
                      : (0, r.jsx)(g.LZC, { size: 24 }),
                  (0, r.jsx)('div', {
                      className: en.cardsContainer,
                      children: t.map((e, t) =>
                          (0, r.jsx)(
                              T.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, r.jsx)(
                                      U.Z,
                                      {
                                          onMount: n(e),
                                          isPremiumUser: o,
                                          category: a,
                                          product: e,
                                          user: i,
                                          isGiftEasterEggEnabled: s,
                                          tab: X.AW.CATALOG
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
function el(e) {
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
    let o = (0, A.l)(t.products),
        s = (0, c.e7)([w.Z], () => w.Z.initialProductSkuId),
        i = l.useCallback(
            (e) => (t) => {
                var r;
                (e.skuId === s || (null === (r = e.variants) || void 0 === r ? void 0 : r.some((e) => e.skuId === s)) === !0) && (n.current = t.current);
            },
            [s, n]
        );
    return (0, r.jsx)(
        er,
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
                products: o,
                handleShopCardMount: i,
                category: t
            },
            a
        )
    );
}
function ea(e) {
    let { category: t, isPremiumUser: n, initialItemCardRef: a, isGiftEasterEggEnabled: s, setIsGiftEasterEggEnabled: i, showEasterEggToggle: c, isFullScreen: d } = e,
        u = l.useRef(10 + 70 * Math.random()),
        [h, m] = l.useState(!1),
        p = (0, Y.M7)(t.skuId),
        b = (0, f.O)(
            (e) => {
                m(e && null != p);
            },
            d ? 0.13 : 0.15
        );
    return (0, r.jsxs)('div', {
        className: en.categoryWrapper,
        ref: b,
        children: [
            c &&
                (0, r.jsx)(g.P3F, {
                    className: o()(en.hiddenWumpus, { [en.hiddenWumpusEnabled]: s }),
                    onClick: () => i(!0),
                    style: { left: ''.concat(u.current, '%') },
                    children: (0, r.jsx)(x.Z, {
                        idleAnimationState: k.SR.IDLE,
                        giftStyle: et.Cj.BOX
                    })
                }),
            (0, r.jsx)(F.Z, {
                category: t,
                hideLimitedTimeBadge: null != p
            }),
            (0, r.jsx)(el, {
                category: t,
                initialItemCardRef: a,
                isPremiumUser: n,
                isGiftEasterEggEnabled: s
            }),
            null != p &&
                null != t.unpublishedAt &&
                (0, r.jsx)(H.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: h,
                    displayOptions: p,
                    isFullScreen: d
                })
        ]
    });
}
let eo = function (e) {
    var t;
    let { isFullScreen: n = !0, tab: a = X.AW.HOME } = e;
    (0, v.z)(_.f);
    let { analyticsSource: f, analyticsLocations: k } = (0, c.cj)([w.Z], () => w.Z.getAnalytics()),
        { analyticsLocations: x } = (0, p.ZP)([...k, m.Z.COLLECTIBLES_SHOP]),
        { sessionId: A, scrollerRef: H, scrollHandler: F } = (0, b._)(Q.rMx.COLLECTIBLES_SHOP_SCROLLED, f),
        { selectedTab: U, transitionState: Y, transitionToTab: er } = (0, W.B)(H, a, n),
        [el, eo] = l.useState(!1),
        es = (0, P.R)('CollectiblesShop'),
        [ei, ec] = l.useState(X.IV),
        [ed, eu] = l.useState(),
        [eg, eh] = l.useState(),
        { closeIntroToOrbsClaimedCoachmark: ef } = (0, S.Z)({ location: 'CollectiblesShop' });
    l.useEffect(
        () => () => {
            ef();
        },
        [f, ef]
    );
    let em = (0, c.e7)([y.Z], () => y.Z.getLayers().includes(Q.S9g.COLLECTIBLES_SHOP)),
        ep = (0, u.f9)(),
        { onClose: eb } = (0, D.Db)(),
        eC = (0, c.e7)([O.default], () => O.default.getCurrentUser()),
        e_ = I.ZP.canUseCollectibles(eC),
        { categories: ev, isFetchingCategories: ek, fetchCategoriesError: ex, fetchPurchasesError: ej, claimError: eS, refreshCategories: ey } = (0, N.ZP)({ location: 'CollectiblesShop.web' }),
        eO = null !== (t = null != ex ? ex : ej) && void 0 !== t ? t : eS;
    (0, j.P)();
    let eE = (0, Z.O)(ev),
        eI = l.useRef(null),
        [eB, eT] = l.useState(!1);
    (0, R.Kp)({
        isFetchingCategories: ek,
        isLayer: em,
        initialItemCardRef: eI
    }),
        l.useEffect(() => {
            if (Y === X.f7.VISIBLE) {
                var e;
                let t;
                (t = U === X.AW.CATALOG ? eg : f),
                    E.default.track(Q.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: x,
                        source: t,
                        page_session_id: A,
                        page_type: U === X.AW.HOME ? 'home' : 'full',
                        category: U === X.AW.HOME ? void 0 : null === (e = L.Z.getCategory(ed)) || void 0 === e ? void 0 : e.name
                    });
            }
            e_ ||
                E.default.track(Q.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: et.cd.COLLECTIBLES_SHOP,
                    location_stack: x
                });
        }, [e_, x, f, A, ed, eu, eg, Y, U]);
    let { dismissShopButtonDC: eL } = (0, q.Z)();
    l.useEffect(() => {
        eL(),
            !(0, C.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK) &&
                (0, C.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
                    dismissAction: J.L.AUTO_DISMISS,
                    forceTrack: !0
                });
    }, [eL]),
        l.useEffect(() => {
            n || (0, h.Y)(Q.Z5c.COLLECTIBLES_SHOP);
        }, [n]),
        l.useEffect(
            () => () => {
                (0, B.K$)({
                    categories: [...ev.values()],
                    itemTypes: [i.Z.AVATAR_DECORATION, i.Z.PROFILE_EFFECT]
                });
            },
            [ev]
        ),
        l.useEffect(() => {
            if (!n || em || ep) return;
            let e = (e) => {
                e.key === ee.mR.Escape && eb();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [n, em, ep, eb]);
    let ew = l.useCallback(() => {
            ey();
        }, [ey]),
        { setCategoryRef: eP, handleScrollToCategory: eN } = (0, R.xV)(H.current),
        { reducedMotion: eZ } = l.useContext(g.Sfi),
        eA = l.useRef(null),
        eW = l.useRef(null);
    (0, g.Tbt)(eA),
        l.useEffect(() => {
            if (!n) {
                var e;
                null === (e = eW.current) || void 0 === e || e.focus();
            }
        }, [n]);
    let eH = l.useCallback(
            async (e, t, r) => {
                let l = r && !n && !eZ.enabled;
                eh(e), eu(t), t === s.T.ORB ? await er(X.AW.ORBS, r) : (await er(X.AW.CATALOG, l), t && eN(t));
            },
            [eN, n, eZ.enabled, er]
        ),
        eR = (0, c.e7)([L.Z], () => {
            var e;
            return null === (e = L.Z.getCategory(ed)) || void 0 === e ? void 0 : e.name;
        });
    return (0, r.jsx)(p.Gt, {
        value: x,
        children: (0, r.jsxs)(T.k0, {
            newValue: {
                sessionId: A,
                pageCategory: eR
            },
            children: [
                (0, r.jsx)('div', {
                    className: en.shop,
                    ref: n ? eA : eW,
                    tabIndex: -1,
                    children: (0, r.jsx)(g.Den, {
                        className: en.shopScroll,
                        ref: H,
                        onScroll: () => {
                            if ((F(), null != H.current)) {
                                let e = H.current.getDistanceFromBottom();
                                ei >= es ? eo(e < 20) : e <= 200 && ec(ei + X.IV);
                            }
                        },
                        children: (0, r.jsxs)('div', {
                            className: o()(en.shopViewWrapper, {
                                [en.visible]: Y === X.f7.VISIBLE,
                                [en.in]: Y === X.f7.IN,
                                [en.out]: Y === X.f7.OUT
                            }),
                            children: [
                                (0, r.jsx)(V.I, {
                                    isFullScreen: n,
                                    isLayer: em,
                                    onClose: eb,
                                    handleTransition: er,
                                    selectedTab: U
                                }),
                                (function (e) {
                                    switch (e) {
                                        case X.AW.HOME:
                                        case X.AW.ORBS:
                                            return (0, r.jsx)($.Z, {
                                                isFullScreen: n,
                                                handleTransition: eH,
                                                numVisibleItems: ei,
                                                tab: e
                                            });
                                        case X.AW.CATALOG:
                                            return (0, r.jsx)('div', {
                                                className: en.pageWrapper,
                                                children: (0, r.jsx)('main', {
                                                    className: o()(en.page, { [en.pageFullscreen]: n }),
                                                    children: ek
                                                        ? (0, r.jsx)(z.Z, {})
                                                        : null != eO
                                                          ? (0, r.jsx)(M.Z, {
                                                                onRetry: ew,
                                                                errorOrigin: M.i.SHOP_PAGE
                                                            })
                                                          : (0, r.jsx)('div', {
                                                                className: en.categories,
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
                                                                                ref: (t) => eP(e.skuId, t),
                                                                                children: (0, r.jsx)(T.k0, {
                                                                                    newValue: { categoryPosition: t },
                                                                                    children: (0, r.jsx)(ea, {
                                                                                        isPremiumUser: e_,
                                                                                        category: e,
                                                                                        initialItemCardRef: eI,
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
                                })(U)
                            ]
                        })
                    })
                }),
                eB && (0, r.jsx)(G.Z, {}),
                !n &&
                    U === X.AW.HOME &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(K.Z, {
                                peaking: el,
                                transitioning: Y === X.f7.OUT
                            }),
                            (0, r.jsx)(K.Z, {
                                style: { left: 1850 },
                                peaking: el,
                                transitioning: Y === X.f7.OUT
                            })
                        ]
                    })
            ]
        })
    });
};
