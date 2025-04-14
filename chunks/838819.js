n.r(t), n.d(t, { default: () => ei }), n(388685);
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
    m = n(702486),
    h = n(605236),
    _ = n(977395),
    C = n(214852),
    v = n(479446),
    x = n(981632),
    O = n(290026),
    j = n(511050),
    y = n(819640),
    k = n(594174),
    S = n(626135),
    P = n(74538),
    E = n(381585),
    w = n(597688),
    B = n(328347),
    I = n(139668),
    T = n(370039),
    N = n(223143),
    L = n(298228),
    Z = n(937510),
    A = n(309956),
    R = n(853748),
    F = n(426171),
    W = n(823941),
    H = n(752053),
    D = n(963102),
    M = n(508498),
    V = n(38900),
    U = n(709999),
    G = n(373113),
    z = n(681435),
    q = n(619899),
    Y = n(566564),
    $ = n(531864),
    J = n(302800),
    K = n(215023),
    X = n(981631),
    Q = n(921944),
    ee = n(420212),
    et = n(474936),
    en = n(484920);
function er(e) {
    let { products: t, handleShopCardMount: n, header: l, category: a, isPremiumUser: o, isGiftEasterEggEnabled: i } = e,
        c = (0, s.e7)([k.default], () => k.default.getCurrentUser()),
        u = (0, q.St)(t);
    return null == c || 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  null != l
                      ? (0, r.jsx)(d.Text, {
                            className: en.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: l
                        })
                      : (0, r.jsx)(d.LZC, { size: 24 }),
                  (0, r.jsx)('div', {
                      className: en.cardsContainer,
                      children: u.map((e, t) =>
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
                                          tab: K.AW.CATALOG
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
    let o = (0, Z.l)(t.products),
        i = (0, T.a)()(o),
        c = (0, s.e7)([B.Z], () => B.Z.initialProductSkuId),
        u = l.useCallback(
            (e) => (t) => {
                var r;
                (e.skuId === c || (null == (r = e.variants) ? void 0 : r.some((e) => e.skuId === c)) === !0) && (n.current = t.current);
            },
            [c, n]
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
                products: i,
                handleShopCardMount: u,
                category: t
            },
            a
        )
    );
}
let ea = (e) => {
    let { isFullScreen: t, tab: n } = e;
    return !t && n !== K.AW.CATALOG;
};
function eo(e) {
    let { category: t, isPremiumUser: n, initialItemCardRef: a, isGiftEasterEggEnabled: i, setIsGiftEasterEggEnabled: s, showEasterEggToggle: c, isFullScreen: u } = e,
        b = l.useRef(10 + 70 * Math.random()),
        [f, g] = l.useState(!1),
        m = (0, J.M7)(t.skuId),
        h = (0, p.O)(
            (e) => {
                g(e && null != m);
            },
            u ? 0.13 : 0.15
        );
    return (0, r.jsxs)('div', {
        className: en.categoryWrapper,
        ref: h,
        children: [
            c &&
                (0, r.jsx)(d.P3F, {
                    className: o()(en.hiddenWumpus, { [en.hiddenWumpusEnabled]: i }),
                    onClick: () => s(!0),
                    style: { left: ''.concat(b.current, '%') },
                    children: (0, r.jsx)(x.Z, {
                        idleAnimationState: v.SR.IDLE,
                        giftStyle: et.Cj.BOX
                    })
                }),
            (0, r.jsx)(W.Z, {
                category: t,
                hideLimitedTimeBadge: null != m
            }),
            (0, r.jsx)(el, {
                category: t,
                initialItemCardRef: a,
                isPremiumUser: n,
                isGiftEasterEggEnabled: i
            }),
            null != m &&
                null != t.unpublishedAt &&
                (0, r.jsx)(R.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: f,
                    displayOptions: m,
                    isFullScreen: u
                })
        ]
    });
}
let ei = function (e) {
    var t;
    let { isFullScreen: n = !0, tab: a = K.AW.HOME } = e;
    (0, C.z)(_.f);
    let { analyticsSource: p, analyticsLocations: v } = (0, s.cj)([B.Z], () => B.Z.getAnalytics()),
        x = l.useMemo(() => {
            switch (a) {
                case K.AW.ORBS:
                    return f.Z.COLLECTIBLES_SHOP_ORBS_TAB;
                case K.AW.HOME:
                    return f.Z.COLLECTIBLES_SHOP_HOME_SCREEN;
                case K.AW.CATALOG:
                    return f.Z.COLLECTIBLES_SHOP_FULLSCREEN;
            }
        }, [a]),
        { analyticsLocations: T, newestAnalyticsLocation: Z } = (0, g.ZP)([...v, f.Z.COLLECTIBLES_SHOP, x]),
        { sessionId: R, scrollerRef: W, scrollHandler: U } = (0, m._)(X.rMx.COLLECTIBLES_SHOP_SCROLLED, p),
        { selectedTab: q, transitionState: J, transitionToTab: er } = (0, A.B)(W, a, n),
        [el, ei] = l.useState(!1),
        es = (0, I.R)('CollectiblesShop'),
        [ec, eu] = l.useState(K.IV),
        [ed, eb] = l.useState(),
        [ep, ef] = l.useState(),
        { closeIntroToOrbsClaimedCoachmark: eg } = (0, j.Z)({ location: 'CollectiblesShop' });
    l.useEffect(
        () => () => {
            eg();
        },
        [p, eg]
    );
    let em = (0, s.e7)([y.Z], () => y.Z.getLayers().includes(X.S9g.COLLECTIBLES_SHOP)),
        eh = (0, u.f9)(),
        { onClose: e_ } = (0, M.Db)(),
        eC = (0, s.e7)([k.default], () => k.default.getCurrentUser()),
        ev = P.ZP.canUseCollectibles(eC),
        { categories: ex, isFetchingCategories: eO, fetchCategoriesError: ej, fetchPurchasesError: ey, claimError: ek, refreshCategories: eS } = (0, N.ZP)({ location: 'CollectiblesShop.web' }),
        eP = null != (t = null != ej ? ej : ey) ? t : ek;
    (0, O.P)();
    let eE = (0, L.O)(ex),
        ew = l.useRef(null),
        [eB, eI] = l.useState(!1);
    (0, F.Kp)({
        isFetchingCategories: eO,
        isLayer: em,
        initialItemCardRef: ew
    }),
        l.useEffect(() => {
            if (J === K.f7.VISIBLE && Z === x) {
                var e;
                let t;
                (t = q === K.AW.CATALOG ? ep : p),
                    S.default.track(X.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: T,
                        source: t,
                        page_session_id: R,
                        page_type: q === K.AW.CATALOG ? 'full' : q,
                        category: q === K.AW.HOME || null == (e = w.Z.getCategory(ed)) ? void 0 : e.name
                    });
            }
        }, [T, p, R, ed, eb, ep, J, q, x, Z]),
        l.useEffect(() => {
            null == eC ||
                ev ||
                S.default.track(X.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: et.cd.COLLECTIBLES_SHOP,
                    location_stack: T
                });
        }, [ev, T, eC]);
    let { dismissShopButtonDC: eT } = (0, z.Z)();
    l.useEffect(() => {
        eT(),
            (0, h.un)(c.z.COLLECTIBLES_GIFTING_COACHMARK) ||
                (0, h.EW)(c.z.COLLECTIBLES_GIFTING_COACHMARK, {
                    dismissAction: Q.L.AUTO_DISMISS,
                    forceTrack: !0
                });
    }, [eT]),
        l.useEffect(() => {
            n || (0, b.Y)(X.Z5c.COLLECTIBLES_SHOP);
        }, [n]),
        l.useEffect(() => {
            if (!n || em || eh) return;
            let e = (e) => {
                e.key === ee.mR.Escape && e_();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [n, em, eh, e_]);
    let eN = l.useCallback(() => {
            eS();
        }, [eS]),
        { setCategoryRef: eL, handleScrollToCategory: eZ } = (0, F.xV)(W.current),
        { reducedMotion: eA } = l.useContext(d.Sfi),
        eR = l.useRef(null),
        eF = l.useRef(null);
    (0, d.Tbt)(eR),
        l.useEffect(() => {
            if (!n) {
                var e;
                null == (e = eF.current) || e.focus();
            }
        }, [n]);
    let eW = l.useCallback(
            async (e, t, r) => {
                let l = r && !n && !eA.enabled;
                ef(e), eb(t), t === i.T.ORB ? await er(K.AW.ORBS, r) : (await er(K.AW.CATALOG, l), t && eZ(t));
            },
            [eZ, n, eA.enabled, er]
        ),
        eH = (0, s.e7)([w.Z], () => {
            var e;
            return null == (e = w.Z.getCategory(ed)) ? void 0 : e.name;
        });
    return (0, r.jsx)(g.Gt, {
        value: T,
        children: (0, r.jsxs)(E.k0, {
            newValue: {
                sessionId: R,
                pageCategory: eH
            },
            children: [
                (0, r.jsx)('div', {
                    className: en.shop,
                    ref: n ? eR : eF,
                    tabIndex: -1,
                    children: (0, r.jsx)(d.Den, {
                        className: en.shopScroll,
                        ref: W,
                        onScroll: () => {
                            if ((U(), null != W.current)) {
                                let e = W.current.getDistanceFromBottom();
                                ec >= es ? ei(e < 20) : e <= 200 && eu(ec + K.IV);
                            }
                        },
                        children: (0, r.jsxs)('div', {
                            className: o()(en.shopViewWrapper, {
                                [en.visible]: J === K.f7.VISIBLE,
                                [en.in]: J === K.f7.IN,
                                [en.out]: J === K.f7.OUT
                            }),
                            children: [
                                (0, r.jsx)(D.I, {
                                    isFullScreen: n,
                                    isLayer: em,
                                    onClose: e_,
                                    handleTransition: er,
                                    selectedTab: q
                                }),
                                (function (e) {
                                    switch (e) {
                                        case K.AW.HOME:
                                        case K.AW.ORBS:
                                            return (0, r.jsx)(Y.Z, {
                                                isFullScreen: n,
                                                handleTransition: eW,
                                                numVisibleItems: ec,
                                                tab: e
                                            });
                                        case K.AW.CATALOG:
                                            return (0, r.jsx)('div', {
                                                className: en.pageWrapper,
                                                children: (0, r.jsx)('main', {
                                                    className: o()(en.page, { [en.pageFullscreen]: n }),
                                                    children: eO
                                                        ? (0, r.jsx)(V.Z, {})
                                                        : null != eP
                                                          ? (0, r.jsx)(H.Z, {
                                                                onRetry: eN,
                                                                errorOrigin: H.i.SHOP_PAGE
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
                                                                                ref: (t) => eL(e.skuId, t),
                                                                                children: (0, r.jsx)(E.k0, {
                                                                                    newValue: { categoryPosition: t },
                                                                                    children: (0, r.jsx)(eo, {
                                                                                        isPremiumUser: ev,
                                                                                        category: e,
                                                                                        initialItemCardRef: ew,
                                                                                        setIsGiftEasterEggEnabled: eI,
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
                                })(q)
                            ]
                        })
                    })
                }),
                eB && (0, r.jsx)(G.Z, {}),
                ea({
                    isFullScreen: n,
                    tab: a
                }) &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)($.Z, {
                                peaking: el,
                                transitioning: J === K.f7.OUT
                            }),
                            (0, r.jsx)($.Z, {
                                style: { left: 1850 },
                                peaking: el,
                                transitioning: J === K.f7.OUT
                            })
                        ]
                    })
            ]
        })
    });
};
