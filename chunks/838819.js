n.r(t), n.d(t, { default: () => ei }), n(47120);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(180650),
    i = n(979554),
    d = n(399606),
    c = n(704215),
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
    x = n(479446),
    k = n(981632),
    j = n(290026),
    S = n(511050),
    y = n(819640),
    O = n(594174),
    E = n(626135),
    I = n(74538),
    B = n(335131),
    T = n(381585),
    L = n(597688),
    N = n(328347),
    P = n(139668),
    w = n(370039),
    Z = n(223143),
    A = n(298228),
    R = n(937510),
    W = n(309956),
    H = n(853748),
    F = n(426171),
    M = n(823941),
    V = n(752053),
    D = n(963102),
    U = n(508498),
    z = n(38900),
    G = n(709999),
    q = n(373113),
    $ = n(681435),
    Y = n(566564),
    K = n(531864),
    X = n(302800),
    Q = n(215023),
    J = n(981631),
    ee = n(921944),
    et = n(420212),
    en = n(474936),
    er = n(577852);
function el(e) {
    let { products: t, handleShopCardMount: n, header: l, category: a, isPremiumUser: o, isGiftEasterEggEnabled: s } = e,
        i = (0, d.e7)([O.default], () => O.default.getCurrentUser());
    return null == i || 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  null != l
                      ? (0, r.jsx)(g.Text, {
                            className: er.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: l
                        })
                      : (0, r.jsx)(g.LZC, { size: 24 }),
                  (0, r.jsx)('div', {
                      className: er.cardsContainer,
                      children: t.map((e, t) =>
                          (0, r.jsx)(
                              T.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, r.jsx)(
                                      G.Z,
                                      {
                                          onMount: n(e),
                                          isPremiumUser: o,
                                          category: a,
                                          product: e,
                                          user: i,
                                          isGiftEasterEggEnabled: s,
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
function ea(e) {
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
    let o = (0, R.l)(t.products),
        s = (0, w.a)()(o),
        i = (0, d.e7)([N.Z], () => N.Z.initialProductSkuId),
        c = l.useCallback(
            (e) => (t) => {
                var r;
                (e.skuId === i || (null === (r = e.variants) || void 0 === r ? void 0 : r.some((e) => e.skuId === i)) === !0) && (n.current = t.current);
            },
            [i, n]
        );
    return (0, r.jsx)(
        el,
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
                handleShopCardMount: c,
                category: t
            },
            a
        )
    );
}
let eo = (e) => {
    let { isFullScreen: t, tab: n } = e;
    return !t && n !== Q.AW.CATALOG;
};
function es(e) {
    let { category: t, isPremiumUser: n, initialItemCardRef: a, isGiftEasterEggEnabled: s, setIsGiftEasterEggEnabled: i, showEasterEggToggle: d, isFullScreen: c } = e,
        u = l.useRef(10 + 70 * Math.random()),
        [h, m] = l.useState(!1),
        p = (0, X.M7)(t.skuId),
        b = (0, f.O)(
            (e) => {
                m(e && null != p);
            },
            c ? 0.13 : 0.15
        );
    return (0, r.jsxs)('div', {
        className: er.categoryWrapper,
        ref: b,
        children: [
            d &&
                (0, r.jsx)(g.P3F, {
                    className: o()(er.hiddenWumpus, { [er.hiddenWumpusEnabled]: s }),
                    onClick: () => i(!0),
                    style: { left: ''.concat(u.current, '%') },
                    children: (0, r.jsx)(k.Z, {
                        idleAnimationState: x.SR.IDLE,
                        giftStyle: en.Cj.BOX
                    })
                }),
            (0, r.jsx)(M.Z, {
                category: t,
                hideLimitedTimeBadge: null != p
            }),
            (0, r.jsx)(ea, {
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
                    isFullScreen: c
                })
        ]
    });
}
let ei = function (e) {
    var t;
    let { isFullScreen: n = !0, tab: a = Q.AW.HOME } = e;
    (0, v.z)(_.f);
    let { analyticsSource: f, analyticsLocations: x } = (0, d.cj)([N.Z], () => N.Z.getAnalytics()),
        { analyticsLocations: k } = (0, p.ZP)([...x, m.Z.COLLECTIBLES_SHOP]),
        { sessionId: w, scrollerRef: R, scrollHandler: H } = (0, b._)(J.rMx.COLLECTIBLES_SHOP_SCROLLED, f),
        { selectedTab: M, transitionState: G, transitionToTab: X } = (0, W.B)(R, a, n),
        [el, ea] = l.useState(!1),
        ei = (0, P.R)('CollectiblesShop'),
        [ed, ec] = l.useState(Q.IV),
        [eu, eg] = l.useState(),
        [eh, ef] = l.useState(),
        { closeIntroToOrbsClaimedCoachmark: em } = (0, S.Z)({ location: 'CollectiblesShop' });
    l.useEffect(
        () => () => {
            em();
        },
        [f, em]
    );
    let ep = (0, d.e7)([y.Z], () => y.Z.getLayers().includes(J.S9g.COLLECTIBLES_SHOP)),
        eb = (0, u.f9)(),
        { onClose: eC } = (0, U.Db)(),
        e_ = (0, d.e7)([O.default], () => O.default.getCurrentUser()),
        ev = I.ZP.canUseCollectibles(e_),
        { categories: ex, isFetchingCategories: ek, fetchCategoriesError: ej, fetchPurchasesError: eS, claimError: ey, refreshCategories: eO } = (0, Z.ZP)({ location: 'CollectiblesShop.web' }),
        eE = null !== (t = null != ej ? ej : eS) && void 0 !== t ? t : ey;
    (0, j.P)();
    let eI = (0, A.O)(ex),
        eB = l.useRef(null),
        [eT, eL] = l.useState(!1);
    (0, F.Kp)({
        isFetchingCategories: ek,
        isLayer: ep,
        initialItemCardRef: eB
    }),
        l.useEffect(() => {
            if (G === Q.f7.VISIBLE) {
                var e;
                let t;
                (t = M === Q.AW.CATALOG ? eh : f),
                    E.default.track(J.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: k,
                        source: t,
                        page_session_id: w,
                        page_type: M === Q.AW.HOME ? 'home' : 'full',
                        category: M === Q.AW.HOME ? void 0 : null === (e = L.Z.getCategory(eu)) || void 0 === e ? void 0 : e.name
                    });
            }
            ev ||
                E.default.track(J.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: en.cd.COLLECTIBLES_SHOP,
                    location_stack: k
                });
        }, [ev, k, f, w, eu, eg, eh, G, M]);
    let { dismissShopButtonDC: eN } = (0, $.Z)();
    l.useEffect(() => {
        eN(),
            !(0, C.un)(c.z.COLLECTIBLES_GIFTING_COACHMARK) &&
                (0, C.EW)(c.z.COLLECTIBLES_GIFTING_COACHMARK, {
                    dismissAction: ee.L.AUTO_DISMISS,
                    forceTrack: !0
                });
    }, [eN]),
        l.useEffect(() => {
            n || (0, h.Y)(J.Z5c.COLLECTIBLES_SHOP);
        }, [n]),
        l.useEffect(
            () => () => {
                (0, B.K$)({
                    categories: [...ex.values()],
                    itemTypes: [i.Z.AVATAR_DECORATION, i.Z.PROFILE_EFFECT]
                });
            },
            [ex]
        ),
        l.useEffect(() => {
            if (!n || ep || eb) return;
            let e = (e) => {
                e.key === et.mR.Escape && eC();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [n, ep, eb, eC]);
    let eP = l.useCallback(() => {
            eO();
        }, [eO]),
        { setCategoryRef: ew, handleScrollToCategory: eZ } = (0, F.xV)(R.current),
        { reducedMotion: eA } = l.useContext(g.Sfi),
        eR = l.useRef(null),
        eW = l.useRef(null);
    (0, g.Tbt)(eR),
        l.useEffect(() => {
            if (!n) {
                var e;
                null === (e = eW.current) || void 0 === e || e.focus();
            }
        }, [n]);
    let eH = l.useCallback(
            async (e, t, r) => {
                let l = r && !n && !eA.enabled;
                ef(e), eg(t), t === s.T.ORB ? await X(Q.AW.ORBS, r) : (await X(Q.AW.CATALOG, l), t && eZ(t));
            },
            [eZ, n, eA.enabled, X]
        ),
        eF = (0, d.e7)([L.Z], () => {
            var e;
            return null === (e = L.Z.getCategory(eu)) || void 0 === e ? void 0 : e.name;
        });
    return (0, r.jsx)(p.Gt, {
        value: k,
        children: (0, r.jsxs)(T.k0, {
            newValue: {
                sessionId: w,
                pageCategory: eF
            },
            children: [
                (0, r.jsx)('div', {
                    className: er.shop,
                    ref: n ? eR : eW,
                    tabIndex: -1,
                    children: (0, r.jsx)(g.Den, {
                        className: er.shopScroll,
                        ref: R,
                        onScroll: () => {
                            if ((H(), null != R.current)) {
                                let e = R.current.getDistanceFromBottom();
                                ed >= ei ? ea(e < 20) : e <= 200 && ec(ed + Q.IV);
                            }
                        },
                        children: (0, r.jsxs)('div', {
                            className: o()(er.shopViewWrapper, {
                                [er.visible]: G === Q.f7.VISIBLE,
                                [er.in]: G === Q.f7.IN,
                                [er.out]: G === Q.f7.OUT
                            }),
                            children: [
                                (0, r.jsx)(D.I, {
                                    isFullScreen: n,
                                    isLayer: ep,
                                    onClose: eC,
                                    handleTransition: X,
                                    selectedTab: M
                                }),
                                (function (e) {
                                    switch (e) {
                                        case Q.AW.HOME:
                                        case Q.AW.ORBS:
                                            return (0, r.jsx)(Y.Z, {
                                                isFullScreen: n,
                                                handleTransition: eH,
                                                numVisibleItems: ed,
                                                tab: e
                                            });
                                        case Q.AW.CATALOG:
                                            return (0, r.jsx)('div', {
                                                className: er.pageWrapper,
                                                children: (0, r.jsx)('main', {
                                                    className: o()(er.page, { [er.pageFullscreen]: n }),
                                                    children: ek
                                                        ? (0, r.jsx)(z.Z, {})
                                                        : null != eE
                                                          ? (0, r.jsx)(V.Z, {
                                                                onRetry: eP,
                                                                errorOrigin: V.i.SHOP_PAGE
                                                            })
                                                          : (0, r.jsx)('div', {
                                                                className: er.categories,
                                                                children: eI
                                                                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                                                                    .filter((e) => {
                                                                        let { products: t } = e;
                                                                        return t.length > 0;
                                                                    })
                                                                    .map((e, t) =>
                                                                        (0, r.jsx)(
                                                                            'div',
                                                                            {
                                                                                ref: (t) => ew(e.skuId, t),
                                                                                children: (0, r.jsx)(T.k0, {
                                                                                    newValue: { categoryPosition: t },
                                                                                    children: (0, r.jsx)(es, {
                                                                                        isPremiumUser: ev,
                                                                                        category: e,
                                                                                        initialItemCardRef: eB,
                                                                                        setIsGiftEasterEggEnabled: eL,
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
                                })(M)
                            ]
                        })
                    })
                }),
                eT && (0, r.jsx)(q.Z, {}),
                eo({
                    isFullScreen: n,
                    tab: a
                }) &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(K.Z, {
                                peaking: el,
                                transitioning: G === Q.f7.OUT
                            }),
                            (0, r.jsx)(K.Z, {
                                style: { left: 1850 },
                                peaking: el,
                                transitioning: G === Q.f7.OUT
                            })
                        ]
                    })
            ]
        })
    });
};
