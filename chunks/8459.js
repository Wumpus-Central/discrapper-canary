l.r(t), l.d(t, { SocialLayerStorefrontInnerWrapper: () => eW, default: () => eB });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
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
    h = l(561794),
    I = l(280450),
    A = l(696451),
    S = l(71393),
    j = l(67480),
    k = l(385648),
    v = l(871123),
    E = l(733391),
    _ = l(439303),
    b = l(353281),
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
        s = l?.id ?? null;
    return t
        ? {
              isTestMode: t,
              entries: n?.state === "fetched" ? n.entries : y,
              selectedStorefrontId: i ?? s,
              liveStorefrontId: s,
              liveStorefront: l,
          }
        : { isTestMode: !1, entries: y, selectedStorefrontId: s, liveStorefrontId: s, liveStorefront: l };
}
var T = l(317560),
    M = l(696292),
    O = l(939249),
    D = l(366010),
    w = l(926268),
    P = l(736653),
    G = l(742589),
    Y = l(617986),
    F = l(975732),
    H = l(70926),
    V = l(287809),
    $ = l(174459),
    B = l(975571),
    W = l(371794),
    U = l(995393),
    Z = l(652215),
    X = l(518477),
    z = l(375708),
    J = l(718356);
function K(e) {
    let { content: t, onClick: l, ariaLabel: i, className: s } = e;
    return (0, n.jsx)(O.D, { className: a()(J.gb, s), onClick: l, "aria-label": i, children: t });
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
    let { storefront: t, selectedPageIndex: l } = e,
        s = (0, D.M)((0, P.Ay)()),
        r = (0, o.bG)([V.default], () => V.default.getCurrentUser()),
        c = (0, _.jM)(),
        { analyticsLocations: u } = (0, g.Ay)(),
        { getSocialLayerStorefrontLink: f } = (0, b.H)(),
        x = i.useCallback(() => {
            r?.id != null &&
                (0, F.openUserProfileModal)({
                    userId: r.id,
                    tabSection: X.RP.WISHLIST,
                    sourceAnalyticsLocations: [p.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [r]),
        h = i.useCallback(() => {
            $.default.track(Z.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: c?.sessionId,
                cta_type: U.ST.LEARN_MORE,
                location_stack: u,
            }),
                window.open(B.A.getArticleURL(Z.MVz.SOCIAL_LAYER_STOREFRONT));
        }, [c, u]),
        I = i.useCallback(() => {
            null != f && (0, m.pX)(f(0));
        }, [f]);
    if (null == t) return null;
    let A = null != t.logoAssetId ? (0, W.YE)(t.applicationId, t.logoAssetId, 128) : null,
        S = null != t.lightThemeLogoAssetId ? (0, W.YE)(t.applicationId, t.lightThemeLogoAssetId, 128) : null,
        j = null;
    return (
        (j = s ? (A ?? S) : (S ?? A)),
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
                                    className: a()(J.xT, { [J.ys]: l === t }),
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
                            content: (0, n.jsx)(w.C, { size: "xs", color: "currentColor" }),
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
    et = l(765671);
let el = (0, l(945810).mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var en = l(517907),
    ei = l(467884),
    es = l(514270);
function ea(e) {
    let { leaderboard: t, skuId: l, analyticsLocations: s, analyticsSectionId: a } = e,
        r = i.useMemo(() => ({ pageSection: a }), [a]);
    return null == t
        ? null
        : (0, n.jsx)(_.E9, {
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
                              children: (0, n.jsx)(ei.A, {
                                  positionInSection: 0,
                                  skuId: l,
                                  variant: ei.s.MEDIUM,
                                  analyticsLocations: s,
                              }),
                          }),
                  ],
              }),
          });
}
var er = l(500102);
function eo(e) {
    let { applicationId: t, backgroundImageAssetId: l } = e,
        i = null != l ? (0, W.YE)(t, l, 1024, v.pV) : null;
    return (0, n.jsx)("div", {
        className: er._,
        children: null != i ? (0, n.jsx)("div", { className: er.i, style: { backgroundImage: `url(${i})` } }) : null,
    });
}
var ec = l(962299),
    ed = l(198647);
function eu(e) {
    let { className: t, skuIds: l, variant: i = ei.s.SMALL, analyticsLocations: s } = e;
    return null == l || 0 === l.length
        ? null
        : (0, n.jsx)("div", {
              className: a()(t, ed.kL, ed.$2, { [ed.Wc]: i === ei.s.MEDIUM }),
              children: l.map((e, t) =>
                  (0, n.jsx)(ei.A, { positionInSection: t, skuId: e, variant: i, analyticsLocations: s }, `${e}-${t}`),
              ),
          });
}
var ef = l(259238);
function ep(e) {
    let { analyticsSectionId: t, sectionTitle: l, skuIds: s, variant: a = ei.s.SMALL } = e,
        r = i.useMemo(() => ({ pageSection: t, pageSectionTitle: l }), [t, l]);
    if (null == s || 0 === s.length) return null;
    let o = null != l && l.length > 0;
    return (0, n.jsx)(_.E9, {
        newValue: r,
        children: (0, n.jsxs)("div", {
            className: ef.hd,
            children: [
                o &&
                    (0, n.jsx)(c.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        className: ef.Gf,
                        children: l,
                    }),
                (0, n.jsx)(eu, { className: o ? ef.EM : void 0, skuIds: s, variant: a }),
            ],
        }),
    });
}
var eg = l(508770),
    em = l(821609),
    ex = l(403581),
    eh = l(587895),
    eI = l(532794),
    eA = l(69236),
    eS = l(647474),
    ej = l(202541),
    ek = l(430825),
    ev = l(201483);
function eE(e) {
    let { applicationId: t, analyticsLocations: l } = e,
        s = (0, eA.W8)(),
        a = (0, o.bG)([eh.A], () => eh.A.getApplication(t)),
        r = (0, o.bG)([N.A], () => N.A.getConfigForApplicationId(t)),
        c = i.useCallback(() => {
            (0, eI.A)({ subscriptionTier: ej.pe.TIER_2, analyticsLocations: l, applicationId: t });
        }, [l, t]),
        u =
            r?.promotionEndDatetime != null
                ? new Intl.DateTimeFormat(z.intl.currentLocale, { month: "long", day: "numeric" }).format(
                      r?.promotionEndDatetime,
                  )
                : "",
        f = (0, n.jsxs)("div", {
            className: ev.F,
            children: [
                (0, n.jsx)(eg.E, { type: "beta", variant: "expressive" }),
                (0, n.jsxs)(d.E, {
                    variant: "text-sm/normal",
                    color: "currentColor",
                    children: [
                        z.intl.format(ek.default.iFXcjn, { applicationName: a?.name, endDate: u }),
                        " ",
                        z.intl.format(z.t.BPDKoA, {
                            helpdeskArticle: B.A.getArticleURL(Z.MVz.SOCIAL_LAYER_SPEND_ORBS_LEARN_MORE),
                        }),
                    ],
                }),
            ],
        });
    return s
        ? (0, n.jsx)(eS.e, { sticky: !0, color: "nitro-pink", children: f, endDatetime: r?.promotionEndDatetime })
        : (0, n.jsx)(eS.A, {
              color: "nitro-pink",
              sticky: !0,
              children: (0, n.jsxs)("div", {
                  className: ev.k,
                  children: [
                      f,
                      (0, n.jsx)(em.$, {
                          variant: "expressive",
                          size: "sm",
                          icon: ex.t,
                          text: z.intl.string(z.t.pj0XBN),
                          onClick: c,
                      }),
                  ],
              }),
          });
}
var e_ = l(59520);
function eb(e, t, l, n) {
    let { scrollTop: i = 0, scrollOffset: s = 0, scrollHeight: a = 0, scrollWidth: r = 0 } = n;
    if (a > 0) {
        let n = (i + s) / a;
        if (n > 0) {
            let {
                sessionId: i,
                guildId: s,
                applicationId: o,
                pageIndex: c,
                pageTitle: d,
                isUserGuildMember: u,
                pageHasLeaderboard: f,
            } = t;
            $.default.track(e, {
                slayer_storefront_session_id: i,
                guild_id: s,
                application_id: o,
                page_index: c,
                page_title: d,
                is_user_guild_member: u,
                page_has_leaderboard: f,
                scroll_visible_percent: n,
                page_height: Math.round(a),
                page_width: Math.round(r),
                location_stack: l,
            });
        }
    }
}
var eL = l(384274);
function eC(e) {
    let t,
        l,
        { applicationId: s, page: a } = e,
        { ref: r, width: o } = (0, et.Ay)(),
        c = (0, _.jM)(),
        { analyticsLocations: d } = (0, g.Ay)(),
        u = i.useRef(null),
        { handleScroll: f } =
            ((t = i.useRef(c)),
            i.useEffect(() => {
                t.current = c;
            }, [c]),
            (l = (0, e_.I)(eb, 5e3, [], { trailing: !0 })),
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
            return el.useConfig({ location: t }).enabled;
        })({ location: "SocialLayerStorefrontPage" }),
        m = (0, en.A)({ applicationId: s, location: "SocialLayerStorefrontPage" }),
        [x, h] = i.useMemo(() => {
            if (a?.skuIds == null || 0 === a.skuIds.length) return [[], []];
            let e = Math.round(o ?? 0);
            return a?.leaderboard == null || null == e || e < 564
                ? [[], a.skuIds]
                : e < 1104
                  ? a.skuIds.length >= 2
                      ? [[], a.skuIds]
                      : [a.skuIds.slice(0, 1), a.skuIds.slice(1)]
                  : [a.skuIds.slice(0, 2), a.skuIds.slice(2)];
        }, [a, o]),
        I = 1 === x.length && null != o && o >= 834 && !p;
    return (i.useEffect(() => {
        let { sessionId: e, guildId: t, pageIndex: l, pageTitle: n, isUserGuildMember: i, pageHasLeaderboard: a } = c;
        $.default.track(Z.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: t,
            application_id: s,
            page_index: l,
            page_title: n,
            is_user_guild_member: i,
            page_has_leaderboard: a,
            location_stack: d,
        });
    }, [c, s, d]),
    null == a)
        ? null
        : (0, n.jsxs)(ee.Ch, {
              ref: u,
              onScroll: f,
              children: [
                  m
                      ? (0, n.jsx)(eE, { applicationId: s, analyticsLocations: d })
                      : (0, n.jsx)(ec.M, { applicationId: s, analyticsLocations: d }),
                  (0, n.jsxs)("section", {
                      ref: r,
                      className: eL.k,
                      children: [
                          (0, n.jsx)(eo, {
                              applicationId: s,
                              backgroundImageAssetId: a.leaderboard?.backgroundImageAssetId,
                          }),
                          !p &&
                              (0, n.jsx)(ea, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: a.leaderboard,
                                  skuId: I ? x[0] : void 0,
                                  analyticsLocations: d,
                              }),
                          (0, n.jsx)(ep, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: I ? void 0 : x,
                              variant: ei.s.MEDIUM,
                          }),
                          (0, n.jsx)(ep, { analyticsSectionId: "non-featured-top-section", skuIds: h }),
                          a.sections?.map((e, t) =>
                              (0, n.jsx)(
                                  ep,
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
var eN = l(785562),
    ey = l(379418),
    eR = l(847374),
    eT = l(980707),
    eM = l(477782),
    eO = l(922016),
    eD = l(488705);
function ew(e) {
    let { entries: t, selectedStorefrontId: l, liveStorefrontId: i, onSelect: s, onClose: a } = e;
    return (0, n.jsx)(eT.W, {
        navId: "social-layer-storefront-entry",
        "aria-label": z.intl.string(ek.default.c2I5Ti),
        onClose: a,
        onSelect: a,
        children: (0, n.jsx)(eM.rX, {
            children: t.map((e) => {
                var t;
                let r;
                return (0, n.jsx)(
                    eM.iD,
                    {
                        id: e.id,
                        group: "social-layer-storefront-entry",
                        checked: e.id === l,
                        action: () => {
                            s(e.id), a();
                        },
                        label:
                            ((t = e.id === i),
                            (r = "" !== e.title ? e.title : z.intl.string(ek.default.OvBwPV)),
                            t
                                ? z.intl.formatToPlainString(ek.default.eF1VJh, { title: r })
                                : null == e.publishedAt
                                  ? z.intl.formatToPlainString(ek.default.dX2mQt, { title: r })
                                  : r),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function eP(e) {
    let { triggerRef: t, isOpen: l, onToggle: i, children: s } = e;
    return (0, n.jsx)("div", {
        className: eD.I,
        ref: t,
        children: (0, n.jsxs)(O.D, {
            className: eD.h,
            onClick: i,
            "aria-expanded": l,
            "aria-haspopup": "menu",
            children: [s, (0, n.jsx)(eR.a, { size: "xs", color: "currentColor" })],
        }),
    });
}
function eG(e) {
    let { applicationId: t, children: l } = e,
        { entries: s, selectedStorefrontId: a, liveStorefrontId: r } = R(t),
        [o, c] = i.useState(!1),
        d = i.useRef(null),
        u = i.useCallback(() => c(!1), []),
        f = i.useCallback(() => c((e) => !e), []),
        p = i.useCallback((e) => (0, E.ZR)(t, e === r ? null : e), [t, r]);
    return (0, n.jsx)(eO.Y, {
        targetElementRef: d,
        shouldShow: o,
        animation: eO.Y.Animation.FADE,
        position: "bottom",
        align: "center",
        spacing: 8,
        onRequestClose: u,
        renderPopout: () =>
            (0, n.jsx)(ew, { entries: s, selectedStorefrontId: a, liveStorefrontId: r, onSelect: p, onClose: u }),
        children: () => (0, n.jsx)(eP, { triggerRef: d, isOpen: o, onToggle: f, children: l }),
    });
}
var eY = l(662686);
function eF(e) {
    let t = (0, ey.WA)({ timestamp: String(Math.floor(e.getTime() / 1e3)), format: "R" });
    return null != t ? (0, n.jsx)(eN.A, { node: t }) : null;
}
function eH(e) {
    let t,
        { storefront: l, isLive: s } = e,
        { publishedAt: a, applicationId: r } = l,
        { entries: o } = R(r),
        [c] = i.useState(() => Date.now());
    t =
        null == a
            ? z.intl.string(ek.default.Id33AH)
            : a.getTime() > c
              ? z.intl.format(ek.default.WOZod0, { timestamp: eF(a) })
              : s
                ? z.intl.format(ek.default.QsHYzr, { timestamp: eF(a) })
                : z.intl.format(ek.default["3x/M9Z"], { timestamp: eF(a) });
    let u = (0, n.jsx)(d.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: t });
    return (0, n.jsx)("div", {
        className: eY.v,
        children: o.length > 1 ? (0, n.jsx)(eG, { applicationId: r, children: u }) : u,
    });
}
var eV = l(253004);
function e$(e) {
    let { storefront: t, guildId: l, selectedPageIndex: s, selectedSku: a, isTestMode: r, isLive: o } = e,
        c = (0, _.jM)(),
        { renderHeader: d, getSocialLayerStorefrontLink: u } = (0, b.H)(),
        f = i.useRef(c);
    i.useEffect(() => {
        f.current = c;
    }, [c]);
    let g = i.useCallback(() => {
            null != u && (0, m.bG)(u(0));
        }, [u]),
        x = a?.id;
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
                            (0, v.rG)(e, n, t.applicationId, l) && null != u && (0, m.bG)(u(s));
                        },
                    }),
                    () => {
                        (0, T.j)();
                    }
                );
        }, [l, s, x, t.applicationId, u, g]),
        (0, n.jsxs)("div", {
            className: eV.kL,
            children: [
                d?.(s, t),
                r && (0, n.jsx)(eH, { storefront: t, isLive: o }),
                (0, n.jsx)(eC, { applicationId: t.applicationId, page: t.pages[s] }),
            ],
        })
    );
}
function eB(e) {
    let { match: t } = e,
        { guildId: l, gameShopPageIndex: s, gameShopSkuId: a } = t.params,
        r = (0, o.bG)([I.default], () => I.default.getSessionId(), []),
        c = i.useCallback((e, t, n) => Z.BVt.CHANNELS_GAME_SHOP(l, e ?? 0, t, n), [l]),
        d = (0, v.nY)(l),
        u = i.useCallback((e, t) => (0, n.jsx)(Q, { storefront: t, selectedPageIndex: e }), []);
    return (
        i.useEffect(() => {
            null == l || null == r || (null == S.A.getGuild(l) && (0, k.Z2)(l, {}, { shouldNavigate: !1 }));
        }, [l, r]),
        (0, n.jsx)(eW, {
            applicationId: d,
            guildId: l,
            skuId: a,
            pageIndex: null != s ? parseInt(s, 10) : void 0,
            renderHeader: u,
            getSocialLayerStorefrontLink: c,
        })
    );
}
function eW(e) {
    let {
            applicationId: t,
            guildId: l,
            skuId: s,
            pageIndex: m = 0,
            renderHeader: S,
            getSocialLayerStorefrontLink: k,
        } = e,
        { analyticsLocations: v } = (0, g.Ay)(p.A.SOCIAL_LAYER_STOREFRONT),
        C = (0, L.A)({ applicationId: t }),
        y = C?.storefront ?? null,
        T = (function (e) {
            let { applicationId: t } = e,
                { isTestMode: l, selectedStorefrontId: n, liveStorefrontId: s, liveStorefront: a } = R(t),
                r = l && null != n && n !== s;
            i.useEffect(() => {
                l && null != t && (0, E.JX)(t);
            }, [l, t]),
                i.useEffect(() => {
                    r && null != t && null != n && (0, E.d8)(t, n);
                }, [r, t, n]);
            let c = (0, o.bG)([N.A], () => (r && null != n ? N.A.getStorefrontById(n) : void 0), [r, n]);
            return {
                isTestMode: l,
                selectedStorefrontId: n,
                liveStorefrontId: s,
                effectiveStorefront: r ? (c?.storefront ?? null) : a,
            };
        })({ applicationId: t }),
        M = T.effectiveStorefront ?? y,
        O = null != M && M.id === T.liveStorefrontId,
        D = (0, o.bG)([j.A], () => j.A.get(s), [s]);
    (0, h.pE)(), (0, x.x)({ applicationId: C?.storefront?.applicationId });
    let w = (0, f.A)((0, r.A)()),
        P = (0, o.bG)([A.Ay, I.default], () => A.Ay.isMember(l, I.default.getId())),
        G = i.useMemo(() => (null == m || isNaN(m) || (null != M && m >= M.pages.length) ? 0 : m), [m, M]),
        Y = M?.pages[G]?.title ?? null,
        F = M?.pages[G]?.leaderboard != null,
        H = i.useMemo(
            () => ({
                sessionId: w,
                guildId: l,
                applicationId: t,
                pageIndex: G,
                pageTitle: Y,
                isUserGuildMember: P,
                pageHasLeaderboard: F,
            }),
            [w, l, t, G, Y, P, F],
        );
    return (i.useEffect(() => {
        null != t && (0, E.SP)(t, G, null != s ? s : null);
    }, [t, G, s]),
    null == t || C?.storefront == null)
        ? null != C && "loading" !== C.state
            ? (0, n.jsxs)("div", {
                  className: a()(eV.p$, eV.kL),
                  children: [
                      (0, n.jsx)(c.D, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: z.intl.string(ek.default.OvBwPV),
                      }),
                      (0, n.jsx)(d.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: z.intl.string(ek.default["Sy7D+/"]),
                      }),
                  ],
              })
            : (0, n.jsx)("div", { className: a()(eV.u1, eV.kL), children: (0, n.jsx)(u.y, {}) })
        : (0, n.jsx)(g.f5, {
              value: v,
              children: (0, n.jsx)(b.J, {
                  renderHeader: S,
                  getSocialLayerStorefrontLink: k,
                  children: (0, n.jsx)(_.E9, {
                      newValue: H,
                      children: (0, n.jsx)(e$, {
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
