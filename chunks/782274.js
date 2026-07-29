t.r(l), t.d(l, { SocialLayerStorefrontInnerWrapper: () => eZ, default: () => eU });
var n = t(477900),
    i = t(582128),
    a = t(503698),
    s = t.n(a),
    r = t(132500),
    o = t(17928),
    d = t(297264),
    c = t(834730),
    u = t(289873),
    f = t(444927),
    p = t(793574),
    g = t(688810),
    m = t(976860),
    x = t(435658),
    h = t(561794),
    I = t(280450),
    A = t(696451),
    S = t(71393),
    j = t(67480),
    v = t(385648),
    k = t(871123),
    b = t(733391),
    E = t(439303),
    _ = t(353281),
    L = t(429635),
    C = t(977445),
    N = t(832163);
let y = [];
function R(e) {
    let l = (0, C.uS)(e ?? void 0),
        t = (0, o.bG)(
            [N.A],
            () => (null == e ? null : (N.A.getStorefrontDataForApplicationId(e)?.storefront ?? null)),
            [e],
        ),
        n = (0, o.bG)([N.A], () => (null != e ? N.A.getStorefrontEntries(e) : void 0), [e]),
        i = (0, o.bG)([N.A], () => (null != e ? N.A.getPreviewStorefrontId(e) : null), [e]),
        a = t?.id ?? null;
    return l
        ? {
              isTestMode: l,
              entries: n?.state === "fetched" ? n.entries : y,
              selectedStorefrontId: i ?? a,
              liveStorefrontId: a,
              liveStorefront: t,
          }
        : { isTestMode: !1, entries: y, selectedStorefrontId: a, liveStorefrontId: a, liveStorefront: t };
}
var T = t(317560),
    M = t(696292),
    O = t(939249),
    D = t(366010),
    w = t(926268),
    P = t(736653),
    G = t(742589),
    Y = t(617986),
    F = t(975732),
    H = t(70926),
    V = t(287809),
    B = t(174459),
    $ = t(975571),
    W = t(371794),
    U = t(995393),
    Z = t(652215),
    X = t(518477),
    z = t(375708),
    J = t(588044);
function K(e) {
    let { content: l, onClick: t, ariaLabel: i, className: a } = e;
    return (0, n.jsx)(O.D, { className: s()(J.gb, a), onClick: t, "aria-label": i, children: l });
}
function q() {
    let e = i.useCallback(() => {
        (0, Y.mA)({ fromContent: M.u.ORBS_BALANCE_MENU });
    }, []);
    return (0, n.jsx)(H.SS, {
        cardAlignment: H.SS.CardAlignment.END,
        ctaText: z.intl.string(z.t.VC4Mq0),
        ctaOnClick: e,
    });
}
function Q(e) {
    let { storefront: l, selectedPageIndex: t } = e,
        a = (0, D.M)((0, P.Ay)()),
        r = (0, o.bG)([V.default], () => V.default.getCurrentUser()),
        d = (0, E.jM)(),
        { analyticsLocations: u } = (0, g.Ay)(),
        { getSocialLayerStorefrontLink: f } = (0, _.H)(),
        x = i.useCallback(() => {
            r?.id != null &&
                (0, F.openUserProfileModal)({
                    userId: r.id,
                    tabSection: X.RP.WISHLIST,
                    sourceAnalyticsLocations: [p.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [r]),
        h = i.useCallback(() => {
            B.default.track(Z.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: d?.sessionId,
                cta_type: U.ST.LEARN_MORE,
                location_stack: u,
            }),
                window.open($.A.getArticleURL(Z.MVz.SOCIAL_LAYER_STOREFRONT));
        }, [d, u]),
        I = i.useCallback(() => {
            null != f && (0, m.pX)(f(0));
        }, [f]);
    if (null == l) return null;
    let A = null != l.logoAssetId ? (0, W.YE)(l.applicationId, l.logoAssetId, 128) : null,
        S = null != l.lightThemeLogoAssetId ? (0, W.YE)(l.applicationId, l.lightThemeLogoAssetId, 128) : null,
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
                        null != j && (0, n.jsx)("img", { className: J.wm, src: j, alt: l.title }),
                        (0, n.jsx)(G.A.Title, { children: l.title }),
                    ],
                }),
                l.pages.length > 1 &&
                    (0, n.jsx)("div", {
                        className: J.YC,
                        children: l.pages.map((e, l) =>
                            (0, n.jsx)(
                                G.A.Title,
                                {
                                    onClick: () => {
                                        null != f && (0, m.pX)(f(l));
                                    },
                                    wrapperClassName: J.oB,
                                    className: s()(J.xT, { [J.ys]: t === l }),
                                    children: (0, n.jsx)(c.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${l}`,
                            ),
                        ),
                    }),
                (0, n.jsxs)("div", {
                    className: J.sZ,
                    children: [
                        (0, n.jsx)(K, {
                            content: (0, n.jsx)(w.C, { size: "xs", color: "currentColor" }),
                            onClick: x,
                            ariaLabel: z.intl.string(z.t["7lZ31J"]),
                            className: J.ij,
                        }),
                        (0, n.jsx)(q, {}),
                        (0, n.jsx)(K, {
                            onClick: h,
                            ariaLabel: z.intl.string(z.t.hvVgAZ),
                            content: (0, n.jsx)(c.E, {
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
var ee = t(689175),
    el = t(765671),
    et = t(945810);
let en = (0, et.mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ei = t(517907),
    ea = t(467884),
    es = t(663478);
function er(e) {
    let { leaderboard: l, skuId: t, analyticsLocations: a, analyticsSectionId: s } = e,
        r = i.useMemo(() => ({ pageSection: s }), [s]);
    return null == l
        ? null
        : (0, n.jsx)(E.E9, {
              newValue: r,
              children: (0, n.jsxs)("div", {
                  className: es.kL,
                  children: [
                      (0, n.jsxs)("div", {
                          className: es.FS,
                          children: [
                              (0, n.jsx)(d.D, { variant: "display-lg", color: "text-strong", children: l.title }),
                              (0, n.jsx)(c.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: l.description,
                              }),
                          ],
                      }),
                      null != t &&
                          (0, n.jsx)("div", {
                              className: es.Ui,
                              children: (0, n.jsx)(ea.A, {
                                  positionInSection: 0,
                                  skuId: t,
                                  variant: ea.s.MEDIUM,
                                  analyticsLocations: a,
                              }),
                          }),
                  ],
              }),
          });
}
var eo = t(768286);
function ed(e) {
    let { applicationId: l, backgroundImageAssetId: t } = e,
        i = null != t ? (0, W.YE)(l, t, 1024, k.pV) : null;
    return (0, n.jsx)("div", {
        className: eo._,
        children: null != i ? (0, n.jsx)("div", { className: eo.i, style: { backgroundImage: `url(${i})` } }) : null,
    });
}
var ec = t(962299),
    eu = t(854191);
function ef(e) {
    let { className: l, skuIds: t, variant: i = ea.s.SMALL, analyticsLocations: a } = e;
    return null == t || 0 === t.length
        ? null
        : (0, n.jsx)("div", {
              className: s()(l, eu.kL, eu.$2, { [eu.Wc]: i === ea.s.MEDIUM }),
              children: t.map((e, l) =>
                  (0, n.jsx)(ea.A, { positionInSection: l, skuId: e, variant: i, analyticsLocations: a }, `${e}-${l}`),
              ),
          });
}
var ep = t(64590);
function eg(e) {
    let { analyticsSectionId: l, sectionTitle: t, skuIds: a, variant: s = ea.s.SMALL } = e,
        r = i.useMemo(() => ({ pageSection: l, pageSectionTitle: t }), [l, t]);
    if (null == a || 0 === a.length) return null;
    let o = null != t && t.length > 0;
    return (0, n.jsx)(E.E9, {
        newValue: r,
        children: (0, n.jsxs)("div", {
            className: ep.hd,
            children: [
                o &&
                    (0, n.jsx)(d.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        className: ep.Gf,
                        children: t,
                    }),
                (0, n.jsx)(ef, { className: o ? ep.EM : void 0, skuIds: a, variant: s }),
            ],
        }),
    });
}
var em = t(508770),
    ex = t(821609),
    eh = t(403581),
    eI = t(587895),
    eA = t(532794);
let eS = (0, et.mj)({
    name: "2026-07-social-layer-storefront-spend-orbs-banner-copy",
    kind: "user",
    defaultConfig: { whileSuppliesLast: !1 },
    variations: { 0: { whileSuppliesLast: !1 }, 1: { whileSuppliesLast: !0 } },
});
var ej = t(69236),
    ev = t(647474),
    ek = t(202541),
    eb = t(430825),
    eE = t(926915);
function e_(e) {
    let { applicationId: l, analyticsLocations: t } = e,
        a = (0, ej.W8)(),
        s = (0, o.bG)([eI.A], () => eI.A.getApplication(l)),
        r = (0, o.bG)([N.A], () => N.A.getConfigForApplicationId(l)),
        { whileSuppliesLast: d } = eS.useConfig({ location: "SocialLayerStorefrontSpendOrbsOfferBanner" }),
        u = i.useCallback(() => {
            (0, eA.A)({ subscriptionTier: ek.pe.TIER_2, analyticsLocations: t, applicationId: l });
        }, [t, l]),
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
                (0, n.jsxs)(c.E, {
                    variant: "text-sm/normal",
                    color: "currentColor",
                    children: [
                        z.intl.format(d ? eb.default.hxYr9D : eb.default.iFXcjn, {
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
var eL = t(59520);
function eC(e, l, t, n) {
    let { scrollTop: i = 0, scrollOffset: a = 0, scrollHeight: s = 0, scrollWidth: r = 0 } = n;
    if (s > 0) {
        let n = (i + a) / s;
        if (n > 0) {
            let {
                sessionId: i,
                guildId: a,
                applicationId: o,
                pageIndex: d,
                pageTitle: c,
                isUserGuildMember: u,
                pageHasLeaderboard: f,
            } = l;
            B.default.track(e, {
                slayer_storefront_session_id: i,
                guild_id: a,
                application_id: o,
                page_index: d,
                page_title: c,
                is_user_guild_member: u,
                page_has_leaderboard: f,
                scroll_visible_percent: n,
                page_height: Math.round(s),
                page_width: Math.round(r),
                location_stack: t,
            });
        }
    }
}
var eN = t(756250);
function ey(e) {
    let l,
        t,
        { applicationId: a, page: s } = e,
        { ref: r, width: o } = (0, el.Ay)(),
        d = (0, E.jM)(),
        { analyticsLocations: c } = (0, g.Ay)(),
        u = i.useRef(null),
        { handleScroll: f } =
            ((l = i.useRef(d)),
            i.useEffect(() => {
                l.current = d;
            }, [d]),
            (t = (0, eL.I)(eC, 5e3, [], { trailing: !0 })),
            {
                handleScroll: i.useCallback(() => {
                    if (null != u.current) {
                        let e = u.current.getScrollerNode(),
                            n = l.current;
                        null != e &&
                            t(Z.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, n, c, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [t, c, u]),
            }),
        p = (function (e) {
            let { location: l } = e;
            return en.useConfig({ location: l }).enabled;
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
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: n, isUserGuildMember: i, pageHasLeaderboard: s } = d;
        B.default.track(Z.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            application_id: a,
            page_index: t,
            page_title: n,
            is_user_guild_member: i,
            page_has_leaderboard: s,
            location_stack: c,
        });
    }, [d, a, c]),
    null == s)
        ? null
        : (0, n.jsxs)(ee.Ch, {
              ref: u,
              onScroll: f,
              children: [
                  m
                      ? (0, n.jsx)(e_, { applicationId: a, analyticsLocations: c })
                      : (0, n.jsx)(ec.M, { applicationId: a, analyticsLocations: c }),
                  (0, n.jsxs)("section", {
                      ref: r,
                      className: eN.k,
                      children: [
                          (0, n.jsx)(ed, {
                              applicationId: a,
                              backgroundImageAssetId: s.leaderboard?.backgroundImageAssetId,
                          }),
                          !p &&
                              (0, n.jsx)(er, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: s.leaderboard,
                                  skuId: I ? x[0] : void 0,
                                  analyticsLocations: c,
                              }),
                          (0, n.jsx)(eg, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: I ? void 0 : x,
                              variant: ea.s.MEDIUM,
                          }),
                          (0, n.jsx)(eg, { analyticsSectionId: "non-featured-top-section", skuIds: h }),
                          s.sections?.map((e, l) =>
                              (0, n.jsx)(
                                  eg,
                                  {
                                      analyticsSectionId: `index:${l}`,
                                      sectionTitle: e.title ?? void 0,
                                      skuIds: e.skuIds,
                                  },
                                  `${e.title}-${l}`,
                              ),
                          ),
                      ],
                  }),
              ],
          });
}
var eR = t(785562),
    eT = t(379418),
    eM = t(847374),
    eO = t(980707),
    eD = t(477782),
    ew = t(922016),
    eP = t(149305);
function eG(e) {
    let { entries: l, selectedStorefrontId: t, liveStorefrontId: i, onSelect: a, onClose: s } = e;
    return (0, n.jsx)(eO.W, {
        navId: "social-layer-storefront-entry",
        "aria-label": z.intl.string(eb.default.c2I5Ti),
        onClose: s,
        onSelect: s,
        children: (0, n.jsx)(eD.rX, {
            children: l.map((e) => {
                var l;
                let r;
                return (0, n.jsx)(
                    eD.iD,
                    {
                        id: e.id,
                        group: "social-layer-storefront-entry",
                        checked: e.id === t,
                        action: () => {
                            a(e.id), s();
                        },
                        label:
                            ((l = e.id === i),
                            (r = "" !== e.title ? e.title : z.intl.string(eb.default.OvBwPV)),
                            l
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
    let { triggerRef: l, isOpen: t, onToggle: i, children: a } = e;
    return (0, n.jsx)("div", {
        className: eP.I,
        ref: l,
        children: (0, n.jsxs)(O.D, {
            className: eP.h,
            onClick: i,
            "aria-expanded": t,
            "aria-haspopup": "menu",
            children: [a, (0, n.jsx)(eM.a, { size: "xs", color: "currentColor" })],
        }),
    });
}
function eF(e) {
    let { applicationId: l, children: t } = e,
        { entries: a, selectedStorefrontId: s, liveStorefrontId: r } = R(l),
        [o, d] = i.useState(!1),
        c = i.useRef(null),
        u = i.useCallback(() => d(!1), []),
        f = i.useCallback(() => d((e) => !e), []),
        p = i.useCallback((e) => (0, b.ZR)(l, e === r ? null : e), [l, r]);
    return (0, n.jsx)(ew.Y, {
        targetElementRef: c,
        shouldShow: o,
        animation: ew.Y.Animation.FADE,
        position: "bottom",
        align: "center",
        spacing: 8,
        onRequestClose: u,
        renderPopout: () =>
            (0, n.jsx)(eG, { entries: a, selectedStorefrontId: s, liveStorefrontId: r, onSelect: p, onClose: u }),
        children: () => (0, n.jsx)(eY, { triggerRef: c, isOpen: o, onToggle: f, children: t }),
    });
}
var eH = t(884614);
function eV(e) {
    let l = (0, eT.WA)({ timestamp: String(Math.floor(e.getTime() / 1e3)), format: "R" });
    return null != l ? (0, n.jsx)(eR.A, { node: l }) : null;
}
function eB(e) {
    let l,
        { storefront: t, isLive: a } = e,
        { publishedAt: s, applicationId: r } = t,
        { entries: o } = R(r),
        [d] = i.useState(() => Date.now());
    l =
        null == s
            ? z.intl.string(eb.default.Id33AH)
            : s.getTime() > d
              ? z.intl.format(eb.default.WOZod0, { timestamp: eV(s) })
              : a
                ? z.intl.format(eb.default.QsHYzr, { timestamp: eV(s) })
                : z.intl.format(eb.default["3x/M9Z"], { timestamp: eV(s) });
    let u = (0, n.jsx)(c.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: l });
    return (0, n.jsx)("div", {
        className: eH.v,
        children: o.length > 1 ? (0, n.jsx)(eF, { applicationId: r, children: u }) : u,
    });
}
var e$ = t(741444);
function eW(e) {
    let { storefront: l, guildId: t, selectedPageIndex: a, selectedSku: s, isTestMode: r, isLive: o } = e,
        d = (0, E.jM)(),
        { renderHeader: c, getSocialLayerStorefrontLink: u } = (0, _.H)(),
        f = i.useRef(d);
    i.useEffect(() => {
        f.current = d;
    }, [d]);
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
                        applicationId: l.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [p.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: f.current,
                        onClose: () => {
                            let { pathname: e, search: n } = (0, m.JK)().location;
                            (0, k.rG)(e, n, l.applicationId, t) && null != u && (0, m.bG)(u(a));
                        },
                    }),
                    () => {
                        (0, T.j)();
                    }
                );
        }, [t, a, x, l.applicationId, u, g]),
        (0, n.jsxs)("div", {
            className: e$.kL,
            children: [
                c?.(a, l),
                r && (0, n.jsx)(eB, { storefront: l, isLive: o }),
                (0, n.jsx)(ey, { applicationId: l.applicationId, page: l.pages[a] }),
            ],
        })
    );
}
function eU(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: a, gameShopSkuId: s } = l.params,
        r = (0, o.bG)([I.default], () => I.default.getSessionId(), []),
        d = i.useCallback((e, l, n) => Z.BVt.CHANNELS_GAME_SHOP(t, e ?? 0, l, n), [t]),
        c = (0, k.nY)(t),
        u = i.useCallback((e, l) => (0, n.jsx)(Q, { storefront: l, selectedPageIndex: e }), []);
    return (
        i.useEffect(() => {
            null == t || null == r || (null == S.A.getGuild(t) && (0, v.Z2)(t, {}, { shouldNavigate: !1 }));
        }, [t, r]),
        (0, n.jsx)(eZ, {
            applicationId: c,
            guildId: t,
            skuId: s,
            pageIndex: null != a ? parseInt(a, 10) : void 0,
            renderHeader: u,
            getSocialLayerStorefrontLink: d,
        })
    );
}
function eZ(e) {
    let {
            applicationId: l,
            guildId: t,
            skuId: a,
            pageIndex: m = 0,
            renderHeader: S,
            getSocialLayerStorefrontLink: v,
        } = e,
        { analyticsLocations: k } = (0, g.Ay)(p.A.SOCIAL_LAYER_STOREFRONT),
        C = (0, L.A)({ applicationId: l }),
        y = C?.storefront ?? null,
        T = (function (e) {
            let { applicationId: l } = e,
                { isTestMode: t, selectedStorefrontId: n, liveStorefrontId: a, liveStorefront: s } = R(l),
                r = t && null != n && n !== a;
            i.useEffect(() => {
                t && null != l && (0, b.JX)(l);
            }, [t, l]),
                i.useEffect(() => {
                    r && null != l && null != n && (0, b.d8)(l, n);
                }, [r, l, n]);
            let d = (0, o.bG)([N.A], () => (r && null != n ? N.A.getStorefrontById(n) : void 0), [r, n]);
            return {
                isTestMode: t,
                selectedStorefrontId: n,
                liveStorefrontId: a,
                effectiveStorefront: r ? (d?.storefront ?? null) : s,
            };
        })({ applicationId: l }),
        M = T.effectiveStorefront ?? y,
        O = null != M && M.id === T.liveStorefrontId,
        D = (0, o.bG)([j.A], () => j.A.get(a), [a]);
    (0, h.pE)(), (0, x.x)({ applicationId: C?.storefront?.applicationId });
    let w = (0, f.A)((0, r.A)()),
        P = (0, o.bG)([A.Ay, I.default], () => A.Ay.isMember(t, I.default.getId())),
        G = i.useMemo(() => (null == m || isNaN(m) || (null != M && m >= M.pages.length) ? 0 : m), [m, M]),
        Y = M?.pages[G]?.title ?? null,
        F = M?.pages[G]?.leaderboard != null,
        H = i.useMemo(
            () => ({
                sessionId: w,
                guildId: t,
                applicationId: l,
                pageIndex: G,
                pageTitle: Y,
                isUserGuildMember: P,
                pageHasLeaderboard: F,
            }),
            [w, t, l, G, Y, P, F],
        );
    return (i.useEffect(() => {
        null != l && (0, b.SP)(l, G, null != a ? a : null);
    }, [l, G, a]),
    null == l || C?.storefront == null)
        ? null != C && "loading" !== C.state
            ? (0, n.jsxs)("div", {
                  className: s()(e$.p$, e$.kL),
                  children: [
                      (0, n.jsx)(d.D, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: z.intl.string(eb.default.OvBwPV),
                      }),
                      (0, n.jsx)(c.E, {
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
                      newValue: H,
                      children: (0, n.jsx)(eW, {
                          storefront: M ?? C.storefront,
                          guildId: t,
                          selectedPageIndex: G,
                          selectedSku: D,
                          isTestMode: T.isTestMode,
                          isLive: O,
                      }),
                  }),
              }),
          });
}
