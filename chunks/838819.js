n.r(t), n.d(t, { default: () => eu }), n(388685), n(539854);
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
    S = n(594174),
    k = n(626135),
    P = n(74538),
    E = n(960048),
    w = n(381585),
    B = n(597688),
    I = n(328347),
    T = n(744112),
    N = n(139668),
    L = n(370039),
    Z = n(223143),
    A = n(298228),
    R = n(937510),
    F = n(309956),
    W = n(853748),
    H = n(426171),
    D = n(823941),
    M = n(752053),
    V = n(963102),
    U = n(508498),
    G = n(38900),
    z = n(709999),
    q = n(373113),
    Y = n(681435),
    $ = n(81136),
    X = n(619899),
    J = n(566564),
    K = n(531864),
    Q = n(302800),
    ee = n(215023),
    et = n(981631),
    en = n(921944),
    er = n(420212),
    el = n(474936),
    ea = n(484920);
function eo(e) {
    let { products: t, handleShopCardMount: n, header: l, category: a, isPremiumUser: o, isGiftEasterEggEnabled: i } = e,
        c = (0, s.e7)([S.default], () => S.default.getCurrentUser()),
        u = (0, X.St)(t);
    return null == c || 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  null != l
                      ? (0, r.jsx)(d.Text, {
                            className: ea.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: l
                        })
                      : (0, r.jsx)(d.LZC, { size: 24 }),
                  (0, r.jsx)('div', {
                      className: ea.cardsContainer,
                      children: u.map((e, t) =>
                          (0, r.jsx)(
                              w.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: (0, r.jsx)(
                                      z.Z,
                                      {
                                          onMount: n(e),
                                          isPremiumUser: o,
                                          category: a,
                                          product: e,
                                          user: c,
                                          isGiftEasterEggEnabled: i,
                                          tab: ee.AW.CATALOG
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
function ei(e) {
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
        i = (0, L.a)()(o),
        c = (0, s.e7)([I.Z], () => I.Z.initialProductSkuId),
        u = l.useCallback(
            (e) => (t) => {
                var r;
                (e.skuId === c || (null == (r = e.variants) ? void 0 : r.some((e) => e.skuId === c)) === !0) && (n.current = t.current);
            },
            [c, n]
        );
    return (0, r.jsx)(
        eo,
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
let es = (e) => {
    let { isFullScreen: t, tab: n } = e;
    return !t && n !== ee.AW.CATALOG;
};
function ec(e) {
    let { category: t, isPremiumUser: n, initialItemCardRef: a, isGiftEasterEggEnabled: i, setIsGiftEasterEggEnabled: s, showEasterEggToggle: c, isFullScreen: u } = e,
        b = l.useRef(10 + 70 * Math.random()),
        [f, g] = l.useState(!1),
        m = (0, Q.M7)(t.skuId),
        h = (0, p.O)(
            (e) => {
                g(e && null != m);
            },
            u ? 0.13 : 0.15
        );
    return (0, r.jsxs)('div', {
        className: ea.categoryWrapper,
        ref: h,
        children: [
            c &&
                (0, r.jsx)(d.P3F, {
                    className: o()(ea.hiddenWumpus, { [ea.hiddenWumpusEnabled]: i }),
                    onClick: () => s(!0),
                    style: { left: ''.concat(b.current, '%') },
                    children: (0, r.jsx)(x.Z, {
                        idleAnimationState: v.SR.IDLE,
                        giftStyle: el.Cj.BOX
                    })
                }),
            (0, r.jsx)(D.Z, {
                category: t,
                hideLimitedTimeBadge: null != m
            }),
            (0, r.jsx)(ei, {
                category: t,
                initialItemCardRef: a,
                isPremiumUser: n,
                isGiftEasterEggEnabled: i
            }),
            null != m &&
                null != t.unpublishedAt &&
                (0, r.jsx)(W.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: f,
                    displayOptions: m,
                    isFullScreen: u
                })
        ]
    });
}
let eu = function (e) {
    var t;
    let { isFullScreen: n = !0, tab: a = ee.AW.HOME } = e;
    (0, C.z)(_.f);
    let { analyticsSource: p, analyticsLocations: v } = (0, s.cj)([I.Z], () => I.Z.getAnalytics()),
        x = l.useMemo(() => {
            switch (a) {
                case ee.AW.ORBS:
                    return f.Z.COLLECTIBLES_SHOP_ORBS_TAB;
                case ee.AW.HOME:
                    return f.Z.COLLECTIBLES_SHOP_HOME_SCREEN;
                case ee.AW.CATALOG:
                    return f.Z.COLLECTIBLES_SHOP_FULLSCREEN;
            }
        }, [a]),
        { analyticsLocations: L, newestAnalyticsLocation: R } = (0, g.ZP)([...v, f.Z.COLLECTIBLES_SHOP, x]),
        { sessionId: W, scrollerRef: D, scrollHandler: z } = (0, m._)(et.rMx.COLLECTIBLES_SHOP_SCROLLED, p),
        { selectedTab: X, transitionState: Q, transitionToTab: eo } = (0, F.B)(D, a, n),
        [ei, eu] = l.useState(!1),
        ed = (0, N.R)('CollectiblesShop'),
        [eb, ep] = l.useState(ee.IV),
        [ef, eg] = l.useState(),
        [em, eh] = l.useState(),
        { closeIntroToOrbsClaimedCoachmark: e_ } = (0, j.Z)({ location: 'CollectiblesShop' });
    l.useEffect(
        () => () => {
            e_();
        },
        [p, e_]
    );
    let eC = (0, s.e7)([y.Z], () => y.Z.getLayers().includes(et.S9g.COLLECTIBLES_SHOP)),
        ev = (0, u.f9)(),
        { onClose: ex } = (0, U.Db)(),
        eO = (0, s.e7)([S.default], () => S.default.getCurrentUser()),
        ej = P.ZP.canUseCollectibles(eO),
        { categories: ey, isFetchingCategories: eS, fetchCategoriesError: ek, fetchPurchasesError: eP, claimError: eE, refreshCategories: ew } = (0, Z.ZP)({ location: 'CollectiblesShop.web' }),
        eB = null != (t = null != ek ? ek : eP) ? t : eE;
    (0, O.P)();
    let eI = (0, A.O)(ey),
        eT = l.useRef(null),
        [eN, eL] = l.useState(!1);
    (0, H.Kp)({
        isFetchingCategories: eS,
        isLayer: eC,
        initialItemCardRef: eT
    }),
        l.useEffect(() => {
            if (Q === ee.f7.VISIBLE && R === x) {
                var e;
                let t;
                (t = X === ee.AW.CATALOG ? em : p),
                    k.default.track(et.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: L,
                        source: t,
                        page_session_id: W,
                        page_type: X === ee.AW.CATALOG ? 'full' : X,
                        category: X === ee.AW.HOME || null == (e = B.Z.getCategory(ef)) ? void 0 : e.name
                    });
            }
        }, [L, p, W, ef, eg, em, Q, X, x, R]),
        l.useEffect(() => {
            null == eO ||
                ej ||
                k.default.track(et.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: el.cd.COLLECTIBLES_SHOP,
                    location_stack: L
                });
        }, [ej, L, eO]);
    let { dismissShopButtonDC: eZ } = (0, Y.Z)();
    l.useEffect(() => {
        eZ(),
            (0, h.un)(c.z.COLLECTIBLES_GIFTING_COACHMARK) ||
                (0, h.EW)(c.z.COLLECTIBLES_GIFTING_COACHMARK, {
                    dismissAction: en.L.AUTO_DISMISS,
                    forceTrack: !0
                });
    }, [eZ]),
        l.useEffect(() => {
            n || (0, b.Y)(et.Z5c.COLLECTIBLES_SHOP);
        }, [n]),
        l.useEffect(() => {
            if (!n || eC || ev) return;
            let e = (e) => {
                e.key === er.mR.Escape && ex();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [n, eC, ev, ex]);
    let eA = l.useCallback(() => {
            ew();
        }, [ew]),
        { setCategoryRef: eR, handleScrollToCategory: eF } = (0, H.xV)(D.current),
        { reducedMotion: eW } = l.useContext(d.Sfi),
        eH = l.useRef(null),
        eD = l.useRef(null);
    (0, d.Tbt)(eH),
        l.useEffect(() => {
            if (!n) {
                var e;
                null == (e = eD.current) || e.focus();
            }
        }, [n]);
    let eM = l.useCallback(
            async (e, t, r) => {
                let l = r && !n && !eW.enabled;
                eh(e), eg(t), t === i.T.ORB ? await eo(ee.AW.ORBS, r) : (await eo(ee.AW.CATALOG, l), t && eF(t));
            },
            [eF, n, eW.enabled, eo]
        ),
        { noCache: eV, includeUnpublished: eU } = (0, $.Z)(),
        eG = (0, T.b)('Collectibles Shop Button'),
        ez = (0, s.e7)([B.Z], () => {
            var e;
            return null == (e = B.Z.getCategory(ef)) ? void 0 : e.name;
        });
    return (0, r.jsx)(g.Gt, {
        value: L,
        children: (0, r.jsxs)(w.k0, {
            newValue: {
                sessionId: W,
                pageCategory: ez
            },
            children: [
                (0, r.jsx)('div', {
                    className: ea.shop,
                    ref: n ? eH : eD,
                    tabIndex: -1,
                    children: (0, r.jsx)(d.Den, {
                        className: ea.shopScroll,
                        ref: D,
                        onScroll: () => {
                            if ((z(), null != D.current)) {
                                let e = D.current.getDistanceFromBottom();
                                eb >= ed ? eu(e < 20) : e <= 200 && ep(eb + ee.IV);
                            }
                        },
                        children: (0, r.jsxs)('div', {
                            className: o()(ea.shopViewWrapper, {
                                [ea.visible]: Q === ee.f7.VISIBLE,
                                [ea.in]: Q === ee.f7.IN,
                                [ea.out]: Q === ee.f7.OUT
                            }),
                            children: [
                                (0, r.jsx)(V.I, {
                                    isFullScreen: n,
                                    isLayer: eC,
                                    onClose: ex,
                                    handleTransition: eo,
                                    selectedTab: X
                                }),
                                (function (e) {
                                    if (null != eB) {
                                        var t, l;
                                        let e = [];
                                        return (
                                            null != ek ? e.push('shop load fetch categories error: '.concat(eB.message)) : null != eP ? e.push('shop load fetch purchase error: '.concat(eB.message)) : e.push('shop load claim error: '.concat(eB.message)),
                                            E.Z.captureMessage(e.join('\n'), {
                                                tags: {
                                                    isStaff: null != (l = null == eO || null == (t = eO.isStaff()) ? void 0 : t.toString()) ? l : 'unknown',
                                                    preloadEnabled: eG.toString(),
                                                    disableCache: eV.toString(),
                                                    includeUnpublished: eU.toString()
                                                }
                                            }),
                                            (0, r.jsx)(M.Z, {
                                                onRetry: eA,
                                                errorOrigin: M.i.SHOP_PAGE,
                                                errorMessage: null == ek ? void 0 : ek.message
                                            })
                                        );
                                    }
                                    switch (e) {
                                        case ee.AW.HOME:
                                        case ee.AW.ORBS:
                                            return (0, r.jsx)(J.Z, {
                                                isFullScreen: n,
                                                handleTransition: eM,
                                                numVisibleItems: eb,
                                                tab: e,
                                                isFetchingCategories: eS
                                            });
                                        case ee.AW.CATALOG:
                                            return (0, r.jsx)('div', {
                                                className: ea.pageWrapper,
                                                children: (0, r.jsx)('main', {
                                                    className: o()(ea.page, { [ea.pageFullscreen]: n }),
                                                    children: eS
                                                        ? (0, r.jsx)(G.Z, {})
                                                        : (0, r.jsx)('div', {
                                                              className: ea.categories,
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
                                                                              ref: (t) => eR(e.skuId, t),
                                                                              children: (0, r.jsx)(w.k0, {
                                                                                  newValue: { categoryPosition: t },
                                                                                  children: (0, r.jsx)(ec, {
                                                                                      isPremiumUser: ej,
                                                                                      category: e,
                                                                                      initialItemCardRef: eT,
                                                                                      setIsGiftEasterEggEnabled: eL,
                                                                                      isGiftEasterEggEnabled: eN,
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
                                })(X)
                            ]
                        })
                    })
                }),
                eN && (0, r.jsx)(q.Z, {}),
                es({
                    isFullScreen: n,
                    tab: a
                }) &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(K.Z, {
                                peaking: ei,
                                transitioning: Q === ee.f7.OUT
                            }),
                            (0, r.jsx)(K.Z, {
                                style: { left: 1850 },
                                peaking: ei,
                                transitioning: Q === ee.f7.OUT
                            })
                        ]
                    })
            ]
        })
    });
};
