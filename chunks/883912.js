(t.r(l), t.d(l, { SocialLayerStorefrontInnerWrapper: () => ev, default: () => em }));
var n = t(477900),
    s = t(582128),
    a = t(503698),
    i = t.n(a),
    r = t(132500),
    o = t(17928),
    d = t(638495),
    c = t(289873),
    u = t(297264),
    p = t(834730),
    g = t(444927),
    f = t(220839),
    I = t(793574),
    x = t(688810),
    h = t(976860),
    m = t(435658),
    _ = t(594832),
    v = t(280450),
    A = t(696451),
    S = t(71393),
    j = t(67480),
    b = t(927813),
    E = t(449054),
    N = t(871123),
    k = t(733391),
    M = t(439303),
    y = t(353281),
    L = t(832163),
    R = t(877624),
    C = t(554146),
    T = t(308588),
    O = t(826673),
    G = t(501419),
    P = t(549996),
    D = t(49999),
    H = t(171616),
    w = t(317560),
    Y = t(62617);
function $(e) {
    let { alt: l, ariaLabel: t, ariaHidden: a, role: i, width: r, height: o, className: d, style: c } = e,
        u = s.useMemo(
            () => (0, Y.H)({ width: r, height: o, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [r, o, c],
        );
    return (0, n.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/0ebc111b10e8d33bd2e363de426d3214a0efde115bc844528d489277e592c316.svg",
        className: (0, Y.Z)(d),
        alt: l,
        "aria-label": t,
        "aria-hidden": a,
        role: i ?? "img",
    });
}
var F = t(28863),
    U = t(188275),
    V = t(206285),
    B = t(105292),
    K = t(771442);
function W() {
    return (0, n.jsxs)("div", {
        className: K.p,
        children: [
            (0, n.jsx)("div", {
                className: K.b,
                children: (0, n.jsx)($, { alt: "", ariaHidden: !0, role: "presentation" }),
            }),
            (0, n.jsx)(u.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: B.intl.string(V.default["0XMNl5"]),
            }),
            (0, n.jsxs)(p.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: [B.intl.string(V.default.NZbasC), (0, n.jsx)("br", {}), B.intl.string(V.default.Tc8sxG)],
            }),
            (0, n.jsx)(p.E, {
                variant: "text-md/medium",
                children: (0, n.jsx)(F.Anchor, { href: U.uy, children: B.intl.string(V.default.KPCFC9) }),
            }),
        ],
    });
}
var Z = t(883399),
    J = t(689175),
    X = t(765671),
    q = t(174459);
let Q = (0, t(945810).mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var z = t(467884),
    ee = t(352749);
function el(e) {
    let { leaderboard: l, skuId: t, analyticsLocations: a, analyticsSectionId: i } = e,
        r = s.useMemo(() => ({ pageSection: i }), [i]);
    return null == l
        ? null
        : (0, n.jsx)(M.E9, {
              newValue: r,
              children: (0, n.jsxs)("div", {
                  className: ee.kL,
                  children: [
                      (0, n.jsxs)("div", {
                          className: ee.FS,
                          children: [
                              (0, n.jsx)(u.D, { variant: "display-lg", color: "text-strong", children: l.title }),
                              (0, n.jsx)(p.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: l.description,
                              }),
                          ],
                      }),
                      null != t &&
                          (0, n.jsx)("div", {
                              className: ee.Ui,
                              children: (0, n.jsx)(z.Ay, {
                                  positionInSection: 0,
                                  skuId: t,
                                  variant: z.s6.MEDIUM,
                                  analyticsLocations: a,
                              }),
                          }),
                  ],
              }),
          });
}
var et = t(371794),
    en = t(199023);
function es(e) {
    let { applicationId: l, backgroundImageAssetId: t } = e,
        s = null != t ? (0, et.YE)(l, t, 1024, N.pV) : null;
    return (0, n.jsx)("div", {
        className: en._,
        children: null != s ? (0, n.jsx)("div", { className: en.i, style: { backgroundImage: `url(${s})` } }) : null,
    });
}
var ea = t(962299),
    ei = t(504082);
function er(e) {
    let { className: l, skuIds: t, variant: s = z.s6.SMALL, analyticsLocations: a } = e;
    return null == t || 0 === t.length
        ? null
        : (0, n.jsx)("div", {
              className: i()(l, ei.kL, ei.$2, { [ei.Wc]: s === z.s6.MEDIUM }),
              children: t.map((e, l) =>
                  (0, n.jsx)(z.Ay, { positionInSection: l, skuId: e, variant: s, analyticsLocations: a }, `${e}-${l}`),
              ),
          });
}
var eo = t(534125);
function ed(e) {
    let { analyticsSectionId: l, sectionTitle: t, skuIds: a, variant: i = z.s6.SMALL } = e,
        r = s.useMemo(() => ({ pageSection: l, pageSectionTitle: t }), [l, t]);
    if (null == a || 0 === a.length) return null;
    let o = null != t && t.length > 0;
    return (0, n.jsx)(M.E9, {
        newValue: r,
        children: (0, n.jsxs)("div", {
            className: eo.hd,
            children: [
                o &&
                    (0, n.jsx)(u.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        className: eo.Gf,
                        children: t,
                    }),
                (0, n.jsx)(er, { className: o ? eo.EM : void 0, skuIds: a, variant: i }),
            ],
        }),
    });
}
var ec = t(59520),
    eu = t(652215);
function ep(e, l, t, n) {
    let { scrollTop: s = 0, scrollOffset: a = 0, scrollHeight: i = 0, scrollWidth: r = 0 } = n;
    if (i > 0) {
        let n = (s + a) / i;
        if (n > 0) {
            let {
                sessionId: s,
                guildId: a,
                applicationId: o,
                pageIndex: d,
                pageTitle: c,
                isUserGuildMember: u,
                pageHasLeaderboard: p,
            } = l;
            q.default.track(e, {
                slayer_storefront_session_id: s,
                guild_id: a,
                application_id: o,
                page_index: d,
                page_title: c,
                is_user_guild_member: u,
                page_has_leaderboard: p,
                scroll_visible_percent: n,
                page_height: Math.round(i),
                page_width: Math.round(r),
                location_stack: t,
            });
        }
    }
}
var eg = t(167551);
function ef(e) {
    let l,
        t,
        { applicationId: a, page: r, scrollerClassName: o, promotionBannerClassName: d } = e,
        { ref: c, width: u } = (0, X.Ay)(),
        p = (0, M.jM)(),
        { analyticsLocations: g } = (0, x.Ay)(),
        f = s.useRef(null),
        { handleScroll: I } =
            ((l = s.useRef(p)),
            s.useEffect(() => {
                l.current = p;
            }, [p]),
            (t = (0, ec.I)(ep, 5e3, [], { trailing: !0 })),
            {
                handleScroll: s.useCallback(() => {
                    if (null != f.current) {
                        let e = f.current.getScrollerNode(),
                            n = l.current;
                        null != e &&
                            t(eu.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, n, g, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [t, g, f]),
            });
    s.useLayoutEffect(() => {
        f.current?.getScrollerNode()?.scrollTo({ top: 0, behavior: "instant" });
    }, [a, p.pageIndex]);
    let h = (function (e) {
            let { location: l } = e;
            return Q.useConfig({ location: l }).enabled;
        })({ location: "SocialLayerStorefrontPage" }),
        [m, _] = s.useMemo(() => {
            if (r?.skuIds == null || 0 === r.skuIds.length) return [[], []];
            let e = Math.round(u ?? 0);
            return r?.leaderboard == null || null == e || e < 564
                ? [[], r.skuIds]
                : e < 1104
                  ? r.skuIds.length >= 2
                      ? [[], r.skuIds]
                      : [r.skuIds.slice(0, 1), r.skuIds.slice(1)]
                  : [r.skuIds.slice(0, 2), r.skuIds.slice(2)];
        }, [r, u]),
        v = 1 === m.length && null != u && u >= 834 && !h;
    return (s.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: n, isUserGuildMember: s, pageHasLeaderboard: i } = p;
        q.default.track(eu.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            application_id: a,
            page_index: t,
            page_title: n,
            is_user_guild_member: s,
            page_has_leaderboard: i,
            location_stack: g,
        });
    }, [p, a, g]),
    null == r)
        ? null
        : (0, n.jsx)(J.Ch, {
              ref: f,
              onScroll: I,
              className: o,
              children: (0, n.jsxs)("div", {
                  className: eg.Qs,
                  children: [
                      (0, n.jsx)(es, {
                          applicationId: a,
                          backgroundImageAssetId: r.leaderboard?.backgroundImageAssetId,
                      }),
                      (0, n.jsx)("div", {
                          className: i()(eg.rb, d),
                          children: (0, n.jsx)(ea.M, { applicationId: a, analyticsLocations: g }),
                      }),
                      (0, n.jsxs)("section", {
                          ref: c,
                          className: eg.kL,
                          children: [
                              !h &&
                                  (0, n.jsx)(el, {
                                      analyticsSectionId: "leaderboard",
                                      leaderboard: r.leaderboard,
                                      skuId: v ? m[0] : void 0,
                                      analyticsLocations: g,
                                  }),
                              (0, n.jsx)(ed, {
                                  analyticsSectionId: "featured-top-section",
                                  skuIds: v ? void 0 : m,
                                  variant: z.s6.MEDIUM,
                              }),
                              (0, n.jsx)(ed, { analyticsSectionId: "non-featured-top-section", skuIds: _ }),
                              r.sections?.map((e, l) =>
                                  (0, n.jsx)(
                                      ed,
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
              }),
          });
}
var eI = t(537067);
let ex = 10 * b.A.Millis.SECOND;
function eh(e) {
    let {
            className: l,
            scrollerClassName: t,
            promotionBannerClassName: a,
            storefront: i,
            guildId: r,
            selectedPageIndex: o,
            selectedSku: c,
            renderHeader: u,
            getSocialLayerStorefrontLink: p,
        } = e,
        g = (0, d.k)(),
        f = (0, M.jM)(),
        x = s.useRef(f);
    s.useEffect(() => {
        x.current = f;
    }, [f]);
    let m = s.useCallback(() => {
            null != p && (0, h.bG)(p(0));
        }, [p]),
        _ = c?.id;
    return (
        s.useEffect(() => {
            if (null != _)
                return (
                    (0, w.R)({
                        customNavigateToSocialLayerStorefront: m,
                        skuId: _,
                        applicationId: i.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [I.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: x.current,
                        contextKey: g,
                        onClose: () => {
                            let { pathname: e, search: l } = (0, h.JK)().location;
                            (0, N.rG)(e, l, i.applicationId, r) && null != p && (0, h.bG)(p(o));
                        },
                    }),
                    () => {
                        (0, w.j)(g);
                    }
                );
        }, [r, o, _, i.applicationId, p, m, g]),
        (0, n.jsxs)("div", {
            className: l,
            children: [
                u?.(o, i),
                (0, n.jsx)(ef, {
                    applicationId: i.applicationId,
                    page: i.pages[o],
                    scrollerClassName: t,
                    promotionBannerClassName: a,
                }),
            ],
        })
    );
}
function em(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: a, gameShopSkuId: i } = l.params,
        r = (0, o.bG)([v.default], () => v.default.getSessionId(), []),
        d = s.useCallback((e, l, n) => eu.BVt.CHANNELS_GAME_SHOP(t, e ?? 0, l, n), [t]),
        c = (0, N.nY)(t),
        u = s.useCallback((e, l) => (0, n.jsx)(Z.A, { storefront: l, selectedPageIndex: e }), []);
    return (
        s.useEffect(() => {
            null == t || null == r || (null == S.A.getGuild(t) && (0, E.Z2)(t, {}, { shouldNavigate: !1 }));
        }, [t, r]),
        (0, n.jsx)(ev, {
            applicationId: c,
            guildId: t,
            skuId: i,
            pageIndex: null != a ? parseInt(a, 10) : void 0,
            analyticsPlacement: M.Ye.SLAYER_SERVER_SHOP,
            renderHeader: u,
            getSocialLayerStorefrontLink: d,
        })
    );
}
function e_(e) {
    let { className: l } = e,
        [t, a] = s.useState(!1);
    return ((0, f.A)(() => a(!0), ex), t)
        ? (0, n.jsx)("div", { className: l, children: (0, n.jsx)(W, {}) })
        : (0, n.jsx)("div", { className: i()(eI.u1, l), children: (0, n.jsx)(c.y, {}) });
}
function ev(e) {
    var l;
    let t,
        a,
        f,
        {
            applicationId: S,
            guildId: b,
            skuId: E,
            pageIndex: N = 0,
            analyticsLocation: Y = I.A.SOCIAL_LAYER_STOREFRONT,
            analyticsPlacement: $,
            className: F = eI.gI,
            scrollerClassName: U,
            promotionBannerClassName: K,
            renderHeader: W,
            getSocialLayerStorefrontLink: Z,
        } = e,
        J = (0, d.k)(),
        X = i()(eI.kL, F),
        { analyticsLocations: q } = (0, x.Ay)(Y),
        { storefront: Q, storefrontState: z, isTestMode: ee } = (0, H.A)({ applicationId: S, guildId: b }),
        el = (0, o.bG)([j.A], () => j.A.get(E), [E]);
    ((0, _.pE)(),
        (0, m.x)({ applicationId: Q?.applicationId }),
        (l = Q?.applicationId),
        (t = (0, P.c)(R.C.NAGBAR)),
        (a = t?.properties.properties.oneofKind === "nagbar" ? t.properties.properties.nagbar : null),
        (f = t?.promotionId),
        (0, s.useEffect)(() => {
            null == f ||
                null == a ||
                a.ctaAction !== T.d.OPEN_SOCIAL_LAYER_STOREFRONT ||
                a.navigableStorefrontApplicationId?.value == null ||
                a.navigableStorefrontApplicationId.value !== l ||
                (0, O.u$)(C.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, f).isDismissed ||
                (0, G.qr)(C.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, f, {
                    dismissAction: D.i.INDIRECT_ACTION,
                    forceTrack: !0,
                });
        }, [a, f, l]));
    let et = (0, o.bG)([L.A], () => b ?? L.A.getGuildIdFromApplicationId(S), [b, S]),
        en = (0, g.A)(() => (0, r.A)()),
        es = (0, o.bG)([A.Ay, v.default], () => A.Ay.isMember(et, v.default.getId()), [et]),
        ea = s.useMemo(() => (null == N || isNaN(N) || (null != Q && N >= Q.pages.length) ? 0 : N), [N, Q]),
        ei = Q?.pages[ea]?.title ?? null,
        er = Q?.pages[ea]?.leaderboard != null,
        eo = s.useMemo(
            () => ({
                placement: $,
                sessionId: en,
                guildId: et,
                applicationId: S,
                pageIndex: ea,
                pageTitle: ei,
                isUserGuildMember: es,
                pageHasLeaderboard: er,
            }),
            [$, en, et, S, ea, ei, es, er],
        );
    s.useEffect(() => {
        null != S && (0, k.SP)(S, ea, null != E ? E : null);
    }, [S, ea, E]);
    let ed = s.useMemo(() => {
            if (null != Z) return (e) => (0, h.pX)(Z(e));
        }, [Z]),
        ec = s.useCallback(
            (e, l, t) => {
                null != Z
                    ? (0, h.bG)(Z(ea, e, t))
                    : (0, w.R)({
                          skuId: e,
                          applicationId: l,
                          isStorefront: !0,
                          analyticsLocations: q,
                          analyticsContext: eo,
                          contextKey: J,
                      });
            },
            [Z, ea, q, eo, J],
        );
    return null == S || null == Q
        ? null != z && "loading" !== z
            ? (0, n.jsxs)("div", {
                  className: i()(eI.p$, X),
                  children: [
                      (0, n.jsx)(u.D, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: B.intl.string(V.default.OvBwPV),
                      }),
                      (0, n.jsx)(p.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: B.intl.string(V.default["Sy7D+/"]),
                      }),
                  ],
              })
            : ee
              ? (0, n.jsx)(e_, { className: X }, S)
              : (0, n.jsx)("div", { className: i()(eI.u1, X), children: (0, n.jsx)(c.y, {}) })
        : (0, n.jsx)(x.f5, {
              value: q,
              children: (0, n.jsx)(y.J, {
                  navigateToStorefrontPage: ed,
                  viewProductDetails: ec,
                  children: (0, n.jsx)(M.E9, {
                      newValue: eo,
                      children: (0, n.jsx)(eh, {
                          className: X,
                          scrollerClassName: U,
                          promotionBannerClassName: K,
                          storefront: Q,
                          guildId: et,
                          selectedPageIndex: ea,
                          selectedSku: el,
                          renderHeader: W,
                          getSocialLayerStorefrontLink: Z,
                      }),
                  }),
              }),
          });
}
