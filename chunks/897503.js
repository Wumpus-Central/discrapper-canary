(t.r(l), t.d(l, { SocialLayerStorefrontInnerWrapper: () => e_, default: () => eh }));
var s = t(477900),
    n = t(582128),
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
    m = t(688810),
    h = t(976860),
    x = t(435658),
    _ = t(561794),
    A = t(280450),
    S = t(696451),
    b = t(71393),
    k = t(67480),
    v = t(927813),
    j = t(449054),
    N = t(871123),
    E = t(733391),
    L = t(439303),
    M = t(353281),
    y = t(832163),
    R = t(877624),
    C = t(554146),
    T = t(308588),
    O = t(826673),
    G = t(501419),
    P = t(549996),
    H = t(49999),
    D = t(171616),
    w = t(317560),
    F = t(62617);
function $(e) {
    let { alt: l, ariaLabel: t, ariaHidden: a, role: i, width: r, height: o, className: d, style: c } = e,
        u = n.useMemo(
            () => (0, F.H)({ width: r, height: o, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [r, o, c],
        );
    return (0, s.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/0ebc111b10e8d33bd2e363de426d3214a0efde115bc844528d489277e592c316.svg",
        className: (0, F.Z)(d),
        alt: l,
        "aria-label": t,
        "aria-hidden": a,
        role: i ?? "img",
    });
}
var Y = t(28863),
    U = t(188275),
    W = t(206285),
    B = t(105292),
    K = t(771442);
function V() {
    return (0, s.jsxs)("div", {
        className: K.p,
        children: [
            (0, s.jsx)("div", {
                className: K.b,
                children: (0, s.jsx)($, { alt: "", ariaHidden: !0, role: "presentation" }),
            }),
            (0, s.jsx)(u.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: B.intl.string(W.default["0XMNl5"]),
            }),
            (0, s.jsxs)(p.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: [B.intl.string(W.default.NZbasC), (0, s.jsx)("br", {}), B.intl.string(W.default.Tc8sxG)],
            }),
            (0, s.jsx)(p.E, {
                variant: "text-md/medium",
                children: (0, s.jsx)(Y.Anchor, { href: U.uy, children: B.intl.string(W.default.KPCFC9) }),
            }),
        ],
    });
}
var Z = t(647899),
    J = t(689175),
    Q = t(765671),
    X = t(174459);
let q = (0, t(945810).mj)({
    name: "2026-10-slayer-storefront-single-sku-wide-header",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var z = t(898523),
    ee = t(467884),
    el = t(371794),
    et = t(199023);
function es(e) {
    let { applicationId: l, backgroundImageAssetId: t, isHero: n = !1 } = e,
        a = null != t ? (0, el.YE)(l, t, 1024, N.pV) : null;
    return (0, s.jsx)("div", {
        className: i()(et._Q, { [et.gv]: n }),
        children:
            null != a
                ? (0, s.jsx)("div", { className: i()(et.iL, { [et.C$]: n }), style: { backgroundImage: `url(${a})` } })
                : null,
    });
}
var en = t(962299),
    ea = t(504082);
function ei(e) {
    let { className: l, skuIds: t, variant: n = ee.s6.SMALL, analyticsLocations: a } = e;
    return null == t || 0 === t.length
        ? null
        : (0, s.jsx)("div", {
              className: i()(l, ea.kL, ea.$2, { [ea.Wc]: n === ee.s6.MEDIUM, [ea.ST]: n === ee.s6.FULL_WIDTH }),
              children: t.map((e, l) =>
                  (0, s.jsx)(ee.Ay, { positionInSection: l, skuId: e, variant: n, analyticsLocations: a }, `${e}-${l}`),
              ),
          });
}
var er = t(534125);
function eo(e) {
    let { analyticsSectionId: l, sectionTitle: t, skuIds: a, variant: r = ee.s6.SMALL, hasTopMargin: o = !0 } = e,
        d = n.useMemo(() => ({ pageSection: l, pageSectionTitle: t }), [l, t]);
    if (null == a || 0 === a.length) return null;
    let c = null != t && t.length > 0;
    return (0, s.jsx)(L.E9, {
        newValue: d,
        children: (0, s.jsxs)("div", {
            className: er.hd,
            children: [
                c &&
                    (0, s.jsx)(u.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        className: er.Gf,
                        children: t,
                    }),
                (0, s.jsx)(ei, { className: i()({ [er.EM]: c, [er.Nt]: !o }), skuIds: a, variant: r }),
            ],
        }),
    });
}
var ed = t(59520),
    ec = t(652215);
function eu(e, l, t, s) {
    let { scrollTop: n = 0, scrollOffset: a = 0, scrollHeight: i = 0, scrollWidth: r = 0 } = s;
    if (i > 0) {
        let s = (n + a) / i;
        if (s > 0) {
            let {
                sessionId: n,
                guildId: a,
                applicationId: o,
                pageIndex: d,
                pageTitle: c,
                isUserGuildMember: u,
                pageHasLeaderboard: p,
            } = l;
            X.default.track(e, {
                slayer_storefront_session_id: n,
                guild_id: a,
                application_id: o,
                page_index: d,
                page_title: c,
                is_user_guild_member: u,
                page_has_leaderboard: p,
                scroll_visible_percent: s,
                page_height: Math.round(i),
                page_width: Math.round(r),
                location_stack: t,
            });
        }
    }
}
var ep = t(167551);
function eg(e) {
    let l,
        t,
        { applicationId: a, page: r, scrollerClassName: o, promotionBannerClassName: d } = e,
        c = q.useConfig({ location: "SocialLayerStorefrontPage.singleSkuHeader" }).enabled,
        { ref: u, width: p } = (0, Q.Ay)(),
        g = c && r?.skuIds.length === 1,
        f = (0, L.jM)(),
        { analyticsLocations: I } = (0, m.Ay)(),
        h = n.useRef(null),
        { handleScroll: x } =
            ((l = n.useRef(f)),
            n.useEffect(() => {
                l.current = f;
            }, [f]),
            (t = (0, ed.I)(eu, 5e3, [], { trailing: !0 })),
            {
                handleScroll: n.useCallback(() => {
                    if (null != h.current) {
                        let e = h.current.getScrollerNode(),
                            s = l.current;
                        null != e &&
                            t(ec.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, s, I, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [t, I, h]),
            });
    n.useLayoutEffect(() => {
        h.current?.getScrollerNode()?.scrollTo({ top: 0, behavior: "instant" });
    }, [a, f.pageIndex]);
    let [_, A] = n.useMemo(() => {
        if (r?.skuIds == null || 0 === r.skuIds.length) return [[], []];
        let e = Math.round(p ?? 0);
        return r?.leaderboard == null || null == e || e < 564
            ? [[], r.skuIds]
            : e < 1104
              ? r.skuIds.length >= 2
                  ? [[], r.skuIds]
                  : [r.skuIds.slice(0, 1), r.skuIds.slice(1)]
              : [r.skuIds.slice(0, 2), r.skuIds.slice(2)];
    }, [r, p]);
    return (n.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: s, isUserGuildMember: n, pageHasLeaderboard: i } = f;
        X.default.track(ec.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            application_id: a,
            active_storefront_promotion_ids: (0, z.I)(a),
            page_index: t,
            page_title: s,
            is_user_guild_member: n,
            page_has_leaderboard: i,
            location_stack: I,
        });
    }, [f, a, I]),
    null == r)
        ? null
        : (0, s.jsx)(J.Ch, {
              ref: h,
              onScroll: x,
              className: o,
              children: (0, s.jsxs)("div", {
                  className: ep.Qs,
                  children: [
                      (0, s.jsx)(es, {
                          applicationId: a,
                          backgroundImageAssetId: r.leaderboard?.backgroundImageAssetId,
                          isHero: g && r.leaderboard?.backgroundImageAssetId != null,
                      }),
                      (0, s.jsx)("div", {
                          className: i()(ep.rb, d),
                          children: (0, s.jsx)(en.M, { applicationId: a, analyticsLocations: I }),
                      }),
                      (0, s.jsxs)("section", {
                          ref: u,
                          className: ep.kL,
                          children: [
                              g
                                  ? (0, s.jsx)(eo, {
                                        analyticsSectionId: "featured-top-section",
                                        skuIds: r.skuIds,
                                        variant: ee.s6.FULL_WIDTH,
                                        hasTopMargin: !1,
                                    })
                                  : (0, s.jsxs)(s.Fragment, {
                                        children: [
                                            (0, s.jsx)(eo, {
                                                analyticsSectionId: "featured-top-section",
                                                skuIds: _,
                                                variant: ee.s6.MEDIUM,
                                            }),
                                            (0, s.jsx)(eo, {
                                                analyticsSectionId: "non-featured-top-section",
                                                skuIds: A,
                                            }),
                                        ],
                                    }),
                              r.sections?.map((e, l) =>
                                  (0, s.jsx)(
                                      eo,
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
var ef = t(537067);
let eI = 10 * v.A.Millis.SECOND;
function em(e) {
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
        f = (0, L.jM)(),
        m = n.useRef(f);
    n.useEffect(() => {
        m.current = f;
    }, [f]);
    let x = n.useCallback(() => {
            null != p && (0, h.bG)(p(0));
        }, [p]),
        _ = c?.id;
    return (
        n.useEffect(() => {
            if (null != _)
                return (
                    (0, w.R)({
                        customNavigateToSocialLayerStorefront: x,
                        skuId: _,
                        applicationId: i.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [I.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: m.current,
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
        }, [r, o, _, i.applicationId, p, x, g]),
        (0, s.jsxs)("div", {
            className: l,
            children: [
                u?.(o, i),
                (0, s.jsx)(eg, {
                    applicationId: i.applicationId,
                    page: i.pages[o],
                    scrollerClassName: t,
                    promotionBannerClassName: a,
                }),
            ],
        })
    );
}
function eh(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: a, gameShopSkuId: i } = l.params,
        r = (0, o.bG)([A.default], () => A.default.getSessionId(), []),
        d = n.useCallback((e, l, s) => ec.BVt.CHANNELS_GAME_SHOP(t, e ?? 0, l, s), [t]),
        c = (0, N.nY)(t),
        u = n.useCallback((e, l) => (0, s.jsx)(Z.A, { storefront: l, selectedPageIndex: e }), []);
    return (
        n.useEffect(() => {
            null == t || null == r || (null == b.A.getGuild(t) && (0, j.Z2)(t, {}, { shouldNavigate: !1 }));
        }, [t, r]),
        (0, s.jsx)(e_, {
            applicationId: c,
            guildId: t,
            skuId: i,
            pageIndex: null != a ? parseInt(a, 10) : void 0,
            analyticsPlacement: L.Ye.SLAYER_SERVER_SHOP,
            renderHeader: u,
            getSocialLayerStorefrontLink: d,
        })
    );
}
function ex(e) {
    let { className: l } = e,
        [t, a] = n.useState(!1);
    return ((0, f.A)(() => a(!0), eI), t)
        ? (0, s.jsx)("div", { className: l, children: (0, s.jsx)(V, {}) })
        : (0, s.jsx)("div", { className: i()(ef.u1, l), children: (0, s.jsx)(c.y, {}) });
}
function e_(e) {
    var l;
    let t,
        a,
        f,
        {
            applicationId: b,
            guildId: v,
            skuId: j,
            pageIndex: N = 0,
            analyticsLocation: F = I.A.SOCIAL_LAYER_STOREFRONT,
            analyticsPlacement: $,
            className: Y = ef.gI,
            scrollerClassName: U,
            promotionBannerClassName: K,
            renderHeader: V,
            getSocialLayerStorefrontLink: Z,
        } = e,
        J = (0, d.k)(),
        Q = i()(ef.kL, Y),
        { analyticsLocations: X } = (0, m.Ay)(F),
        { storefront: q, storefrontState: z, isTestMode: ee } = (0, D.A)({ applicationId: b, guildId: v }),
        el = (0, o.bG)([k.A], () => k.A.get(j), [j]);
    ((0, _.pE)(),
        (0, x.x)({ applicationId: q?.applicationId }),
        (l = q?.applicationId),
        (t = (0, P.c)(R.C.NAGBAR)),
        (a = t?.properties.properties.oneofKind === "nagbar" ? t.properties.properties.nagbar : null),
        (f = t?.promotionId),
        (0, n.useEffect)(() => {
            null == f ||
                null == a ||
                a.ctaAction !== T.d.OPEN_SOCIAL_LAYER_STOREFRONT ||
                a.navigableStorefrontApplicationId?.value == null ||
                a.navigableStorefrontApplicationId.value !== l ||
                (0, O.u$)(C.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, f).isDismissed ||
                (0, G.qr)(C.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, f, {
                    dismissAction: H.i.INDIRECT_ACTION,
                    forceTrack: !0,
                });
        }, [a, f, l]));
    let et = (0, o.bG)([y.A], () => v ?? y.A.getGuildIdFromApplicationId(b), [v, b]),
        es = (0, g.A)(() => (0, r.A)()),
        en = (0, o.bG)([S.Ay, A.default], () => S.Ay.isMember(et, A.default.getId()), [et]),
        ea = n.useMemo(() => (null == N || isNaN(N) || (null != q && N >= q.pages.length) ? 0 : N), [N, q]),
        ei = q?.pages[ea]?.title ?? null,
        er = q?.pages[ea]?.leaderboard != null,
        eo = n.useMemo(
            () => ({
                placement: $,
                sessionId: es,
                guildId: et,
                applicationId: b,
                pageIndex: ea,
                pageTitle: ei,
                isUserGuildMember: en,
                pageHasLeaderboard: er,
            }),
            [$, es, et, b, ea, ei, en, er],
        );
    n.useEffect(() => {
        null != b && (0, E.SP)(b, ea, null != j ? j : null);
    }, [b, ea, j]);
    let ed = n.useMemo(() => {
            if (null != Z) return (e) => (0, h.pX)(Z(e));
        }, [Z]),
        ec = n.useCallback(
            (e, l, t) => {
                null != Z
                    ? (0, h.bG)(Z(ea, e, t))
                    : (0, w.R)({
                          skuId: e,
                          applicationId: l,
                          isStorefront: !0,
                          analyticsLocations: X,
                          analyticsContext: eo,
                          contextKey: J,
                      });
            },
            [Z, ea, X, eo, J],
        );
    return null == b || null == q
        ? null != z && "loading" !== z
            ? (0, s.jsxs)("div", {
                  className: i()(ef.p$, Q),
                  children: [
                      (0, s.jsx)(u.D, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: B.intl.string(W.default.OvBwPV),
                      }),
                      (0, s.jsx)(p.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: B.intl.string(W.default["Sy7D+/"]),
                      }),
                  ],
              })
            : ee
              ? (0, s.jsx)(ex, { className: Q }, b)
              : (0, s.jsx)("div", { className: i()(ef.u1, Q), children: (0, s.jsx)(c.y, {}) })
        : (0, s.jsx)(m.f5, {
              value: X,
              children: (0, s.jsx)(M.J, {
                  navigateToStorefrontPage: ed,
                  viewProductDetails: ec,
                  children: (0, s.jsx)(L.E9, {
                      newValue: eo,
                      children: (0, s.jsx)(em, {
                          className: Q,
                          scrollerClassName: U,
                          promotionBannerClassName: K,
                          storefront: q,
                          guildId: et,
                          selectedPageIndex: ea,
                          selectedSku: el,
                          renderHeader: V,
                          getSocialLayerStorefrontLink: Z,
                      }),
                  }),
              }),
          });
}
