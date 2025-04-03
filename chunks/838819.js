n.r(t), n.d(t, { default: () => eo }), n(47120);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(180650),
    s = n(399606),
    c = n(704215),
    u = n(952265),
    d = n(481060),
    b = n(150063),
    p = n(434650),
    f = n(100527),
    g = n(906732),
    h = n(702486),
    m = n(605236),
    _ = n(977395),
    v = n(214852),
    C = n(479446),
    x = n(981632),
    O = n(290026),
    y = n(511050),
    j = n(819640),
    k = n(594174),
    S = n(626135),
    P = n(74538),
    E = n(381585),
    w = n(597688),
    I = n(328347),
    B = n(139668),
    N = n(370039),
    T = n(223143),
    L = n(298228),
    Z = n(937510),
    R = n(309956),
    A = n(853748),
    F = n(426171),
    W = n(823941),
    D = n(752053),
    H = n(963102),
    M = n(508498),
    V = n(38900),
    U = n(709999),
    G = n(373113),
    z = n(681435),
    q = n(566564),
    Y = n(531864),
    K = n(302800),
    $ = n(215023),
    J = n(981631),
    X = n(921944),
    Q = n(420212),
    ee = n(474936),
    et = n(484920);
function en(e) {
    let { products: t, handleShopCardMount: n, header: l, category: a, isPremiumUser: o, isGiftEasterEggEnabled: i } = e,
        c = (0, s.e7)([k.default], () => k.default.getCurrentUser());
    return null == c || 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  null != l
                      ? (0, r.jsx)(d.Text, {
                            className: et.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: l
                        })
                      : (0, r.jsx)(d.LZC, { size: 24 }),
                  (0, r.jsx)('div', {
                      className: et.cardsContainer,
                      children: t.map((e, t) =>
                          (0, r.jsx)(
                              E.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, r.jsx)(
                                      U.Z,
                                      {
                                          onMount: n(e),
                                          isPremiumUser: o,
                                          category: a,
                                          product: e,
                                          user: c,
                                          isGiftEasterEggEnabled: i,
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
    let o = (0, Z.l)(t.products),
        i = (0, N.a)()(o),
        c = (0, s.e7)([I.Z], () => I.Z.initialProductSkuId),
        u = l.useCallback(
            (e) => (t) => {
                var r;
                (e.skuId === c || (null == (r = e.variants) ? void 0 : r.some((e) => e.skuId === c)) === !0) && (n.current = t.current);
            },
            [c, n]
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
                products: i,
                handleShopCardMount: u,
                category: t
            },
            a
        )
    );
}
let el = (e) => {
    let { isFullScreen: t, tab: n } = e;
    return !t && n !== $.AW.CATALOG;
};
function ea(e) {
    let { category: t, isPremiumUser: n, initialItemCardRef: a, isGiftEasterEggEnabled: i, setIsGiftEasterEggEnabled: s, showEasterEggToggle: c, isFullScreen: u } = e,
        b = l.useRef(10 + 70 * Math.random()),
        [f, g] = l.useState(!1),
        h = (0, K.M7)(t.skuId),
        m = (0, p.O)(
            (e) => {
                g(e && null != h);
            },
            u ? 0.13 : 0.15
        );
    return (0, r.jsxs)('div', {
        className: et.categoryWrapper,
        ref: m,
        children: [
            c &&
                (0, r.jsx)(d.P3F, {
                    className: o()(et.hiddenWumpus, { [et.hiddenWumpusEnabled]: i }),
                    onClick: () => s(!0),
                    style: { left: ''.concat(b.current, '%') },
                    children: (0, r.jsx)(x.Z, {
                        idleAnimationState: C.SR.IDLE,
                        giftStyle: ee.Cj.BOX
                    })
                }),
            (0, r.jsx)(W.Z, {
                category: t,
                hideLimitedTimeBadge: null != h
            }),
            (0, r.jsx)(er, {
                category: t,
                initialItemCardRef: a,
                isPremiumUser: n,
                isGiftEasterEggEnabled: i
            }),
            null != h &&
                null != t.unpublishedAt &&
                (0, r.jsx)(A.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: f,
                    displayOptions: h,
                    isFullScreen: u
                })
        ]
    });
}
let eo = function (e) {
    var t;
    let { isFullScreen: n = !0, tab: a = $.AW.HOME } = e;
    (0, v.z)(_.f);
    let { analyticsSource: p, analyticsLocations: C } = (0, s.cj)([I.Z], () => I.Z.getAnalytics()),
        { analyticsLocations: x } = (0, g.ZP)([...C, f.Z.COLLECTIBLES_SHOP]),
        { sessionId: N, scrollerRef: Z, scrollHandler: A } = (0, h._)(J.rMx.COLLECTIBLES_SHOP_SCROLLED, p),
        { selectedTab: W, transitionState: U, transitionToTab: K } = (0, R.B)(Z, a, n),
        [en, er] = l.useState(!1),
        eo = (0, B.R)('CollectiblesShop'),
        [ei, es] = l.useState($.IV),
        [ec, eu] = l.useState(),
        [ed, eb] = l.useState(),
        { closeIntroToOrbsClaimedCoachmark: ep } = (0, y.Z)({ location: 'CollectiblesShop' });
    l.useEffect(
        () => () => {
            ep();
        },
        [p, ep]
    );
    let ef = (0, s.e7)([j.Z], () => j.Z.getLayers().includes(J.S9g.COLLECTIBLES_SHOP)),
        eg = (0, u.f9)(),
        { onClose: eh } = (0, M.Db)(),
        em = (0, s.e7)([k.default], () => k.default.getCurrentUser()),
        e_ = P.ZP.canUseCollectibles(em),
        { categories: ev, isFetchingCategories: eC, fetchCategoriesError: ex, fetchPurchasesError: eO, claimError: ey, refreshCategories: ej } = (0, T.ZP)({ location: 'CollectiblesShop.web' }),
        ek = null != (t = null != ex ? ex : eO) ? t : ey;
    (0, O.P)();
    let eS = (0, L.O)(ev),
        eP = l.useRef(null),
        [eE, ew] = l.useState(!1);
    (0, F.Kp)({
        isFetchingCategories: eC,
        isLayer: ef,
        initialItemCardRef: eP
    }),
        l.useEffect(() => {
            if (U === $.f7.VISIBLE) {
                var e;
                let t;
                (t = W === $.AW.CATALOG ? ed : p),
                    S.default.track(J.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: x,
                        source: t,
                        page_session_id: N,
                        page_type: W === $.AW.HOME ? 'home' : 'full',
                        category: W === $.AW.HOME || null == (e = w.Z.getCategory(ec)) ? void 0 : e.name
                    });
            }
            e_ ||
                S.default.track(J.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: ee.cd.COLLECTIBLES_SHOP,
                    location_stack: x
                });
        }, [e_, x, p, N, ec, eu, ed, U, W]);
    let { dismissShopButtonDC: eI } = (0, z.Z)();
    l.useEffect(() => {
        eI(),
            (0, m.un)(c.z.COLLECTIBLES_GIFTING_COACHMARK) ||
                (0, m.EW)(c.z.COLLECTIBLES_GIFTING_COACHMARK, {
                    dismissAction: X.L.AUTO_DISMISS,
                    forceTrack: !0
                });
    }, [eI]),
        l.useEffect(() => {
            n || (0, b.Y)(J.Z5c.COLLECTIBLES_SHOP);
        }, [n]),
        l.useEffect(() => {
            if (!n || ef || eg) return;
            let e = (e) => {
                e.key === Q.mR.Escape && eh();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [n, ef, eg, eh]);
    let eB = l.useCallback(() => {
            ej();
        }, [ej]),
        { setCategoryRef: eN, handleScrollToCategory: eT } = (0, F.xV)(Z.current),
        { reducedMotion: eL } = l.useContext(d.Sfi),
        eZ = l.useRef(null),
        eR = l.useRef(null);
    (0, d.Tbt)(eZ),
        l.useEffect(() => {
            if (!n) {
                var e;
                null == (e = eR.current) || e.focus();
            }
        }, [n]);
    let eA = l.useCallback(
            async (e, t, r) => {
                let l = r && !n && !eL.enabled;
                eb(e), eu(t), t === i.T.ORB ? await K($.AW.ORBS, r) : (await K($.AW.CATALOG, l), t && eT(t));
            },
            [eT, n, eL.enabled, K]
        ),
        eF = (0, s.e7)([w.Z], () => {
            var e;
            return null == (e = w.Z.getCategory(ec)) ? void 0 : e.name;
        });
    return (0, r.jsx)(g.Gt, {
        value: x,
        children: (0, r.jsxs)(E.k0, {
            newValue: {
                sessionId: N,
                pageCategory: eF
            },
            children: [
                (0, r.jsx)('div', {
                    className: et.shop,
                    ref: n ? eZ : eR,
                    tabIndex: -1,
                    children: (0, r.jsx)(d.Den, {
                        className: et.shopScroll,
                        ref: Z,
                        onScroll: () => {
                            if ((A(), null != Z.current)) {
                                let e = Z.current.getDistanceFromBottom();
                                ei >= eo ? er(e < 20) : e <= 200 && es(ei + $.IV);
                            }
                        },
                        children: (0, r.jsxs)('div', {
                            className: o()(et.shopViewWrapper, {
                                [et.visible]: U === $.f7.VISIBLE,
                                [et.in]: U === $.f7.IN,
                                [et.out]: U === $.f7.OUT
                            }),
                            children: [
                                (0, r.jsx)(H.I, {
                                    isFullScreen: n,
                                    isLayer: ef,
                                    onClose: eh,
                                    handleTransition: K,
                                    selectedTab: W
                                }),
                                (function (e) {
                                    switch (e) {
                                        case $.AW.HOME:
                                        case $.AW.ORBS:
                                            return (0, r.jsx)(q.Z, {
                                                isFullScreen: n,
                                                handleTransition: eA,
                                                numVisibleItems: ei,
                                                tab: e
                                            });
                                        case $.AW.CATALOG:
                                            return (0, r.jsx)('div', {
                                                className: et.pageWrapper,
                                                children: (0, r.jsx)('main', {
                                                    className: o()(et.page, { [et.pageFullscreen]: n }),
                                                    children: eC
                                                        ? (0, r.jsx)(V.Z, {})
                                                        : null != ek
                                                          ? (0, r.jsx)(D.Z, {
                                                                onRetry: eB,
                                                                errorOrigin: D.i.SHOP_PAGE
                                                            })
                                                          : (0, r.jsx)('div', {
                                                                className: et.categories,
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
                                                                                ref: (t) => eN(e.skuId, t),
                                                                                children: (0, r.jsx)(E.k0, {
                                                                                    newValue: { categoryPosition: t },
                                                                                    children: (0, r.jsx)(ea, {
                                                                                        isPremiumUser: e_,
                                                                                        category: e,
                                                                                        initialItemCardRef: eP,
                                                                                        setIsGiftEasterEggEnabled: ew,
                                                                                        isGiftEasterEggEnabled: eE,
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
                eE && (0, r.jsx)(G.Z, {}),
                el({
                    isFullScreen: n,
                    tab: a
                }) &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(Y.Z, {
                                peaking: en,
                                transitioning: U === $.f7.OUT
                            }),
                            (0, r.jsx)(Y.Z, {
                                style: { left: 1850 },
                                peaking: en,
                                transitioning: U === $.f7.OUT
                            })
                        ]
                    })
            ]
        })
    });
};
