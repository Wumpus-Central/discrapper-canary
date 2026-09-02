l.r(t), l.d(t, { SocialLayerStorefrontInnerWrapper: () => eZ, default: () => eU });
var n = l(477900),
    i = l(582128),
    a = l(503698),
    s = l.n(a),
    r = l(132500),
    o = l(17928),
    c = l(297264),
    d = l(834730),
    u = l(289873),
    f = l(444927),
    p = l(793574),
    g = l(688810),
    m = l(976860),
    x = l(435658),
    h = l(594832),
    I = l(280450),
    A = l(696451),
    S = l(71393),
    j = l(67480),
    v = l(449054),
    k = l(871123),
    b = l(733391),
    E = l(439303),
    _ = l(353281),
    L = l(429635),
    C = l(977445),
    N = l(832163);
let y = [];
function R(e) {
    let t = (0, C.uS)(e ?? void 0),
        l = (0, o.bG)(
            [N.A],
            () => (null == e ? null : (N.A.getStorefrontDataForApplicationId(e)?.storefront ?? null)),
            [e],
        ),
        n = (0, o.bG)([N.A], () => (null != e ? N.A.getStorefrontEntries(e) : void 0), [e]),
        i = (0, o.bG)([N.A], () => (null != e ? N.A.getPreviewStorefrontId(e) : null), [e]),
        a = l?.id ?? null;
    return t
        ? {
              isTestMode: t,
              entries: n?.state === "fetched" ? n.entries : y,
              selectedStorefrontId: i ?? a,
              liveStorefrontId: a,
              liveStorefront: l,
          }
        : { isTestMode: !1, entries: y, selectedStorefrontId: a, liveStorefrontId: a, liveStorefront: l };
}
var T = l(317560),
    M = l(696292),
    O = l(939249),
    D = l(366010),
    w = l(926268),
    P = l(736653),
    G = l(742589),
    Y = l(617986),
    H = l(402860),
    F = l(70926),
    V = l(287809),
    B = l(174459),
    $ = l(975571),
    W = l(371794),
    U = l(995393),
    Z = l(652215),
    X = l(518477),
    z = l(375708),
    J = l(859425);
function K(e) {
    let { content: t, onClick: l, ariaLabel: i, className: a } = e;
    return (0, n.jsx)(O.D, { className: s()(J.gb, a), onClick: l, "aria-label": i, children: t });
}
function q() {
    let e = i.useCallback(() => {
        (0, Y.mA)({ fromContent: M.u.ORBS_BALANCE_MENU });
    }, []);
    return (0, n.jsx)(F.SS, {
        cardAlignment: F.SS.CardAlignment.END,
        ctaText: z.intl.string(z.t.VC4Mq0),
        ctaOnClick: e,
    });
}
function Q(e) {
    let { storefront: t, selectedPageIndex: l } = e,
        a = (0, D.M)((0, P.Ay)()),
        r = (0, o.bG)([V.default], () => V.default.getCurrentUser()),
        c = (0, E.jM)(),
        { analyticsLocations: u } = (0, g.Ay)(),
        { getSocialLayerStorefrontLink: f } = (0, _.H)(),
        x = i.useCallback(() => {
            r?.id != null &&
                (0, H.openUserProfileModal)({
                    userId: r.id,
                    tabSection: X.RP.WISHLIST,
                    sourceAnalyticsLocations: [p.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [r]),
        h = i.useCallback(() => {
            B.default.track(Z.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: c?.sessionId,
                cta_type: U.ST.LEARN_MORE,
                location_stack: u,
            }),
                window.open($.A.getArticleURL(Z.MVz.SOCIAL_LAYER_STOREFRONT));
        }, [c, u]),
        I = i.useCallback(() => {
            null != f && (0, m.pX)(f(0));
        }, [f]);
    if (null == t) return null;
    let A = null != t.logoAssetId ? (0, W.YE)(t.applicationId, t.logoAssetId, 128) : null,
        S = null != t.lightThemeLogoAssetId ? (0, W.YE)(t.applicationId, t.lightThemeLogoAssetId, 128) : null,
        j = null;
    return (
        (j = a ? (A ?? S) : (S ?? A)),
        (0, n.jsxs)(G.A, {
            disableDoubleClick: !0,
            className: J.N1,
            children: [
                (0, n.jsxs)(O.D, {
                    onClick: I,
                    className: J.gn,
                    children: [
                        null != j && (0, n.jsx)("img", { className: J.wm, src: j, alt: t.title }),
                        (0, n.jsx)(G.A.Title, { children: t.title }),
                    ],
                }),
                t.pages.length > 1 &&
                    (0, n.jsx)("div", {
                        className: J.YC,
                        children: t.pages.map((e, t) =>
                            (0, n.jsx)(
                                G.A.Title,
                                {
                                    onClick: () => {
                                        null != f && (0, m.pX)(f(t));
                                    },
                                    wrapperClassName: J.oB,
                                    className: s()(J.xT, { [J.ys]: l === t }),
                                    children: (0, n.jsx)(d.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${t}`,
                            ),
                        ),
                    }),
                (0, n.jsxs)("div", {
                    className: J.sZ,
                    children: [
                        (0, n.jsx)(K, {
                            content: (0, n.jsx)(w.HeartIcon, { size: "xs", color: "currentColor" }),
                            onClick: x,
                            ariaLabel: z.intl.string(z.t["7lZ31J"]),
                            className: J.ij,
                        }),
                        (0, n.jsx)(q, {}),
                        (0, n.jsx)(K, {
                            onClick: h,
                            ariaLabel: z.intl.string(z.t.hvVgAZ),
                            content: (0, n.jsx)(d.E, {
                                variant: "text-sm/medium",
                                children: z.intl.string(z.t.hvVgAZ),
                            }),
                            className: J.AJ,
                        }),
                    ],
                }),
            ],
        })
    );
}
var ee = l(689175),
    et = l(765671),
    el = l(945810);
let en = (0, el.mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ei = l(517907),
    ea = l(467884),
    es = l(352749);
function er(e) {
    let { leaderboard: t, skuId: l, analyticsLocations: a, analyticsSectionId: s } = e,
        r = i.useMemo(() => ({ pageSection: s }), [s]);
    return null == t
        ? null
        : (0, n.jsx)(E.E9, {
              newValue: r,
              children: (0, n.jsxs)("div", {
                  className: es.kL,
                  children: [
                      (0, n.jsxs)("div", {
                          className: es.FS,
                          children: [
                              (0, n.jsx)(c.D, { variant: "display-lg", color: "text-strong", children: t.title }),
                              (0, n.jsx)(d.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: t.description,
                              }),
                          ],
                      }),
                      null != l &&
                          (0, n.jsx)("div", {
                              className: es.Ui,
                              children: (0, n.jsx)(ea.A, {
                                  positionInSection: 0,
                                  skuId: l,
                                  variant: ea.s.MEDIUM,
                                  analyticsLocations: a,
                              }),
                          }),
                  ],
              }),
          });
}
var eo = l(199023);
function ec(e) {
    let { applicationId: t, backgroundImageAssetId: l } = e,
        i = null != l ? (0, W.YE)(t, l, 1024, k.pV) : null;
    return (0, n.jsx)("div", {
        className: eo._,
        children: null != i ? (0, n.jsx)("div", { className: eo.i, style: { backgroundImage: `url(${i})` } }) : null,
    });
}
var ed = l(962299),
    eu = l(504082);
function ef(e) {
    let { className: t, skuIds: l, variant: i = ea.s.SMALL, analyticsLocations: a } = e;
    return null == l || 0 === l.length
        ? null
        : (0, n.jsx)("div", {
              className: s()(t, eu.kL, eu.$2, { [eu.Wc]: i === ea.s.MEDIUM }),
              children: l.map((e, t) =>
                  (0, n.jsx)(ea.A, { positionInSection: t, skuId: e, variant: i, analyticsLocations: a }, `${e}-${t}`),
              ),
          });
}
var ep = l(534125);
function eg(e) {
    let { analyticsSectionId: t, sectionTitle: l, skuIds: a, variant: s = ea.s.SMALL } = e,
        r = i.useMemo(() => ({ pageSection: t, pageSectionTitle: l }), [t, l]);
    if (null == a || 0 === a.length) return null;
    let o = null != l && l.length > 0;
    return (0, n.jsx)(E.E9, {
        newValue: r,
        children: (0, n.jsxs)("div", {
            className: ep.hd,
            children: [
                o &&
                    (0, n.jsx)(c.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        className: ep.Gf,
                        children: l,
                    }),
                (0, n.jsx)(ef, { className: o ? ep.EM : void 0, skuIds: a, variant: s }),
            ],
        }),
    });
}
var em = l(508770),
    ex = l(821609),
    eh = l(403581),
    eI = l(587895),
    eA = l(532794);
let eS = (0, el.mj)({
    name: "2026-07-social-layer-storefront-spend-orbs-banner-copy",
    kind: "user",
    defaultConfig: { whileSuppliesLast: !1 },
    variations: { 0: { whileSuppliesLast: !1 }, 1: { whileSuppliesLast: !0 } },
});
var ej = l(69236),
    ev = l(647474),
    ek = l(202541),
    eb = l(206285),
    eE = l(684794);
function e_(e) {
    let { applicationId: t, analyticsLocations: l } = e,
        a = (0, ej.W8)(),
        s = (0, o.bG)([eI.A], () => eI.A.getApplication(t)),
        r = (0, o.bG)([N.A], () => N.A.getConfigForApplicationId(t)),
        { whileSuppliesLast: c } = eS.useConfig({ location: "SocialLayerStorefrontSpendOrbsOfferBanner" }),
        u = i.useCallback(() => {
            (0, eA.A)({ subscriptionTier: ek.pe.TIER_2, analyticsLocations: l, applicationId: t });
        }, [l, t]),
        f =
            r?.promotionEndDatetime != null
                ? new Intl.DateTimeFormat(z.intl.currentLocale, { month: "long", day: "numeric" }).format(
                      r?.promotionEndDatetime,
                  )
                : "",
        p = (0, n.jsxs)("div", {
            className: eE.FS,
            children: [
                (0, n.jsx)("div", {
                    className: eE.fC,
                    children: (0, n.jsx)(em.E, { type: "beta", variant: "expressive" }),
                }),
                (0, n.jsxs)(d.E, {
                    variant: "text-sm/normal",
                    color: "currentColor",
                    children: [
                        z.intl.format(c ? eb.default.hxYr9D : eb.default.iFXcjn, {
                            applicationName: s?.name,
                            endDate: f,
                        }),
                        " ",
                        z.intl.format(z.t.BPDKoA, {
                            helpdeskArticle: $.A.getArticleURL(Z.MVz.SOCIAL_LAYER_SPEND_ORBS_LEARN_MORE),
                        }),
                    ],
                }),
            ],
        });
    return a
        ? (0, n.jsx)(ev.e, { sticky: !0, color: "nitro-pink", children: p, endDatetime: r?.promotionEndDatetime })
        : (0, n.jsx)(ev.A, {
              color: "nitro-pink",
              sticky: !0,
              children: (0, n.jsxs)("div", {
                  className: eE.kL,
                  children: [
                      p,
                      (0, n.jsx)(ex.$, {
                          variant: "expressive",
                          size: "sm",
                          icon: eh.t,
                          text: z.intl.string(z.t.pj0XBN),
                          onClick: u,
                      }),
                  ],
              }),
          });
}
var eL = l(59520);
function eC(e, t, l, n) {
    let { scrollTop: i = 0, scrollOffset: a = 0, scrollHeight: s = 0, scrollWidth: r = 0 } = n;
    if (s > 0) {
        let n = (i + a) / s;
        if (n > 0) {
            let {
                sessionId: i,
                guildId: a,
                applicationId: o,
                pageIndex: c,
                pageTitle: d,
                isUserGuildMember: u,
                pageHasLeaderboard: f,
            } = t;
            B.default.track(e, {
                slayer_storefront_session_id: i,
                guild_id: a,
                application_id: o,
                page_index: c,
                page_title: d,
                is_user_guild_member: u,
                page_has_leaderboard: f,
                scroll_visible_percent: n,
                page_height: Math.round(s),
                page_width: Math.round(r),
                location_stack: l,
            });
        }
    }
}
var eN = l(167551);
function ey(e) {
    let t,
        l,
        { applicationId: a, page: s } = e,
        { ref: r, width: o } = (0, et.Ay)(),
        c = (0, E.jM)(),
        { analyticsLocations: d } = (0, g.Ay)(),
        u = i.useRef(null),
        { handleScroll: f } =
            ((t = i.useRef(c)),
            i.useEffect(() => {
                t.current = c;
            }, [c]),
            (l = (0, eL.I)(eC, 5e3, [], { trailing: !0 })),
            {
                handleScroll: i.useCallback(() => {
                    if (null != u.current) {
                        let e = u.current.getScrollerNode(),
                            n = t.current;
                        null != e &&
                            l(Z.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, n, d, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [l, d, u]),
            }),
        p = (function (e) {
            let { location: t } = e;
            return en.useConfig({ location: t }).enabled;
        })({ location: "SocialLayerStorefrontPage" }),
        m = (0, ei.A)({ applicationId: a, location: "SocialLayerStorefrontPage" }),
        [x, h] = i.useMemo(() => {
            if (s?.skuIds == null || 0 === s.skuIds.length) return [[], []];
            let e = Math.round(o ?? 0);
            return s?.leaderboard == null || null == e || e < 564
                ? [[], s.skuIds]
                : e < 1104
                  ? s.skuIds.length >= 2
                      ? [[], s.skuIds]
                      : [s.skuIds.slice(0, 1), s.skuIds.slice(1)]
                  : [s.skuIds.slice(0, 2), s.skuIds.slice(2)];
        }, [s, o]),
        I = 1 === x.length && null != o && o >= 834 && !p;
    return (i.useEffect(() => {
        let { sessionId: e, guildId: t, pageIndex: l, pageTitle: n, isUserGuildMember: i, pageHasLeaderboard: s } = c;
        B.default.track(Z.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: t,
            application_id: a,
            page_index: l,
            page_title: n,
            is_user_guild_member: i,
            page_has_leaderboard: s,
            location_stack: d,
        });
    }, [c, a, d]),
    null == s)
        ? null
        : (0, n.jsxs)(ee.Ch, {
              ref: u,
              onScroll: f,
              children: [
                  m
                      ? (0, n.jsx)(e_, { applicationId: a, analyticsLocations: d })
                      : (0, n.jsx)(ed.M, { applicationId: a, analyticsLocations: d }),
                  (0, n.jsxs)("section", {
                      ref: r,
                      className: eN.k,
                      children: [
                          (0, n.jsx)(ec, {
                              applicationId: a,
                              backgroundImageAssetId: s.leaderboard?.backgroundImageAssetId,
                          }),
                          !p &&
                              (0, n.jsx)(er, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: s.leaderboard,
                                  skuId: I ? x[0] : void 0,
                                  analyticsLocations: d,
                              }),
                          (0, n.jsx)(eg, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: I ? void 0 : x,
                              variant: ea.s.MEDIUM,
                          }),
                          (0, n.jsx)(eg, { analyticsSectionId: "non-featured-top-section", skuIds: h }),
                          s.sections?.map((e, t) =>
                              (0, n.jsx)(
                                  eg,
                                  {
                                      analyticsSectionId: `index:${t}`,
                                      sectionTitle: e.title ?? void 0,
                                      skuIds: e.skuIds,
                                  },
                                  `${e.title}-${t}`,
                              ),
                          ),
                      ],
                  }),
              ],
          });
}
var eR = l(785562),
    eT = l(379418),
    eM = l(847374),
    eO = l(980707),
    eD = l(477782),
    ew = l(922016),
    eP = l(741412);
function eG(e) {
    let { entries: t, selectedStorefrontId: l, liveStorefrontId: i, onSelect: a, onClose: s } = e;
    return (0, n.jsx)(eO.W, {
        navId: "social-layer-storefront-entry",
        "aria-label": z.intl.string(eb.default.c2I5Ti),
        onClose: s,
        onSelect: s,
        children: (0, n.jsx)(eD.rX, {
            children: t.map((e) => {
                var t;
                let r;
                return (0, n.jsx)(
                    eD.iD,
                    {
                        id: e.id,
                        group: "social-layer-storefront-entry",
                        checked: e.id === l,
                        action: () => {
                            a(e.id), s();
                        },
                        label:
                            ((t = e.id === i),
                            (r = "" !== e.title ? e.title : z.intl.string(eb.default.OvBwPV)),
                            t
                                ? z.intl.formatToPlainString(eb.default.eF1VJh, { title: r })
                                : null == e.publishedAt
                                  ? z.intl.formatToPlainString(eb.default.dX2mQt, { title: r })
                                  : r),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function eY(e) {
    let { triggerRef: t, isOpen: l, onToggle: i, children: a } = e;
    return (0, n.jsx)("div", {
        className: eP.I,
        ref: t,
        children: (0, n.jsxs)(O.D, {
            className: eP.h,
            onClick: i,
            "aria-expanded": l,
            "aria-haspopup": "menu",
            children: [a, (0, n.jsx)(eM.a, { size: "xs", color: "currentColor" })],
        }),
    });
}
function eH(e) {
    let { applicationId: t, children: l } = e,
        { entries: a, selectedStorefrontId: s, liveStorefrontId: r } = R(t),
        [o, c] = i.useState(!1),
        d = i.useRef(null),
        u = i.useCallback(() => c(!1), []),
        f = i.useCallback(() => c((e) => !e), []),
        p = i.useCallback((e) => (0, b.ZR)(t, e === r ? null : e), [t, r]);
    return (0, n.jsx)(ew.Y, {
        targetElementRef: d,
        shouldShow: o,
        animation: ew.Y.Animation.FADE,
        position: "bottom",
        align: "center",
        spacing: 8,
        onRequestClose: u,
        renderPopout: () =>
            (0, n.jsx)(eG, { entries: a, selectedStorefrontId: s, liveStorefrontId: r, onSelect: p, onClose: u }),
        children: () => (0, n.jsx)(eY, { triggerRef: d, isOpen: o, onToggle: f, children: l }),
    });
}
var eF = l(664267);
function eV(e) {
    let t = (0, eT.WA)({ timestamp: String(Math.floor(e.getTime() / 1e3)), format: "R" });
    return null != t ? (0, n.jsx)(eR.A, { node: t }) : null;
}
function eB(e) {
    let t,
        { storefront: l, isLive: a } = e,
        { publishedAt: s, applicationId: r } = l,
        { entries: o } = R(r),
        [c] = i.useState(() => Date.now());
    t =
        null == s
            ? z.intl.string(eb.default.Id33AH)
            : s.getTime() > c
              ? z.intl.format(eb.default.WOZod0, { timestamp: eV(s) })
              : a
                ? z.intl.format(eb.default.QsHYzr, { timestamp: eV(s) })
                : z.intl.format(eb.default["3x/M9Z"], { timestamp: eV(s) });
    let u = (0, n.jsx)(d.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: t });
    return (0, n.jsx)("div", {
        className: eF.v,
        children: o.length > 1 ? (0, n.jsx)(eH, { applicationId: r, children: u }) : u,
    });
}
var e$ = l(537067);
function eW(e) {
    let { storefront: t, guildId: l, selectedPageIndex: a, selectedSku: s, isTestMode: r, isLive: o } = e,
        c = (0, E.jM)(),
        { renderHeader: d, getSocialLayerStorefrontLink: u } = (0, _.H)(),
        f = i.useRef(c);
    i.useEffect(() => {
        f.current = c;
    }, [c]);
    let g = i.useCallback(() => {
            null != u && (0, m.bG)(u(0));
        }, [u]),
        x = s?.id;
    return (
        i.useEffect(() => {
            if (null != x)
                return (
                    (0, T.R)({
                        customNavigateToSocialLayerStorefront: g,
                        skuId: x,
                        applicationId: t.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [p.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: f.current,
                        onClose: () => {
                            let { pathname: e, search: n } = (0, m.JK)().location;
                            (0, k.rG)(e, n, t.applicationId, l) && null != u && (0, m.bG)(u(a));
                        },
                    }),
                    () => {
                        (0, T.j)();
                    }
                );
        }, [l, a, x, t.applicationId, u, g]),
        (0, n.jsxs)("div", {
            className: e$.kL,
            children: [
                d?.(a, t),
                r && (0, n.jsx)(eB, { storefront: t, isLive: o }),
                (0, n.jsx)(ey, { applicationId: t.applicationId, page: t.pages[a] }),
            ],
        })
    );
}
function eU(e) {
    let { match: t } = e,
        { guildId: l, gameShopPageIndex: a, gameShopSkuId: s } = t.params,
        r = (0, o.bG)([I.default], () => I.default.getSessionId(), []),
        c = i.useCallback((e, t, n) => Z.BVt.CHANNELS_GAME_SHOP(l, e ?? 0, t, n), [l]),
        d = (0, k.nY)(l),
        u = i.useCallback((e, t) => (0, n.jsx)(Q, { storefront: t, selectedPageIndex: e }), []);
    return (
        i.useEffect(() => {
            null == l || null == r || (null == S.A.getGuild(l) && (0, v.Z2)(l, {}, { shouldNavigate: !1 }));
        }, [l, r]),
        (0, n.jsx)(eZ, {
            applicationId: d,
            guildId: l,
            skuId: s,
            pageIndex: null != a ? parseInt(a, 10) : void 0,
            renderHeader: u,
            getSocialLayerStorefrontLink: c,
        })
    );
}
function eZ(e) {
    let {
            applicationId: t,
            guildId: l,
            skuId: a,
            pageIndex: m = 0,
            renderHeader: S,
            getSocialLayerStorefrontLink: v,
        } = e,
        { analyticsLocations: k } = (0, g.Ay)(p.A.SOCIAL_LAYER_STOREFRONT),
        C = (0, L.A)({ applicationId: t }),
        y = C?.storefront ?? null,
        T = (function (e) {
            let { applicationId: t } = e,
                { isTestMode: l, selectedStorefrontId: n, liveStorefrontId: a, liveStorefront: s } = R(t),
                r = l && null != n && n !== a;
            i.useEffect(() => {
                l && null != t && (0, b.JX)(t);
            }, [l, t]),
                i.useEffect(() => {
                    r && null != t && null != n && (0, b.d8)(t, n);
                }, [r, t, n]);
            let c = (0, o.bG)([N.A], () => (r && null != n ? N.A.getStorefrontById(n) : void 0), [r, n]);
            return {
                isTestMode: l,
                selectedStorefrontId: n,
                liveStorefrontId: a,
                effectiveStorefront: r ? (c?.storefront ?? null) : s,
            };
        })({ applicationId: t }),
        M = T.effectiveStorefront ?? y,
        O = null != M && M.id === T.liveStorefrontId,
        D = (0, o.bG)([j.A], () => j.A.get(a), [a]);
    (0, h.pE)(), (0, x.x)({ applicationId: C?.storefront?.applicationId });
    let w = (0, f.A)((0, r.A)()),
        P = (0, o.bG)([A.Ay, I.default], () => A.Ay.isMember(l, I.default.getId())),
        G = i.useMemo(() => (null == m || isNaN(m) || (null != M && m >= M.pages.length) ? 0 : m), [m, M]),
        Y = M?.pages[G]?.title ?? null,
        H = M?.pages[G]?.leaderboard != null,
        F = i.useMemo(
            () => ({
                sessionId: w,
                guildId: l,
                applicationId: t,
                pageIndex: G,
                pageTitle: Y,
                isUserGuildMember: P,
                pageHasLeaderboard: H,
            }),
            [w, l, t, G, Y, P, H],
        );
    return (i.useEffect(() => {
        null != t && (0, b.SP)(t, G, null != a ? a : null);
    }, [t, G, a]),
    null == t || C?.storefront == null)
        ? null != C && "loading" !== C.state
            ? (0, n.jsxs)("div", {
                  className: s()(e$.p$, e$.kL),
                  children: [
                      (0, n.jsx)(c.D, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: z.intl.string(eb.default.OvBwPV),
                      }),
                      (0, n.jsx)(d.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: z.intl.string(eb.default["Sy7D+/"]),
                      }),
                  ],
              })
            : (0, n.jsx)("div", { className: s()(e$.u1, e$.kL), children: (0, n.jsx)(u.y, {}) })
        : (0, n.jsx)(g.f5, {
              value: k,
              children: (0, n.jsx)(_.J, {
                  renderHeader: S,
                  getSocialLayerStorefrontLink: v,
                  children: (0, n.jsx)(E.E9, {
                      newValue: F,
                      children: (0, n.jsx)(eW, {
                          storefront: M ?? C.storefront,
                          guildId: l,
                          selectedPageIndex: G,
                          selectedSku: D,
                          isTestMode: T.isTestMode,
                          isLive: O,
                      }),
                  }),
              }),
          });
}
