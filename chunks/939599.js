t.r(l), t.d(l, { SocialLayerStorefrontInnerWrapper: () => eo, default: () => er });
var s = t(627968),
    n = t(64700),
    a = t(503698),
    i = t.n(a),
    r = t(835245),
    o = t(17928),
    c = t(289873),
    d = t(444927),
    u = t(793574),
    g = t(688810),
    p = t(976860),
    f = t(530868),
    _ = t(561794),
    x = t(495544),
    h = t(696451),
    I = t(71393),
    A = t(67480),
    S = t(449054),
    m = t(871123),
    E = t(733391),
    j = t(439303),
    k = t(353281),
    R = t(429635),
    N = t(317560),
    b = t(964395),
    v = t(689175),
    L = t(765671),
    C = t(174459);
let M = (0, t(945810).mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var y = t(318254),
    O = t(834730),
    T = t(554146),
    G = t(417098),
    H = t(853735),
    D = t(131607),
    P = t(945942),
    w = t(652215),
    Y = t(49999),
    B = t(375708),
    U = t(922674);
function $(e) {
    let { location: l } = e,
        { shouldRender: t, limitedOfferTimeLeft: n } = (0, P.A)({ location: l }),
        [a, i] = (0, D.RF)(
            t ? T.M.GAME_SHOP_ORBS_REWARD_BANNER : null,
            (0, H.c)(T.M.GAME_SHOP_ORBS_REWARD_BANNER),
            void 0,
            !0,
        ),
        r = a !== T.M.GAME_SHOP_ORBS_REWARD_BANNER;
    return !t || r
        ? null
        : (0, s.jsxs)(G.$T, {
              className: U.U,
              color: G.Hv.BRAND,
              children: [
                  (0, s.jsx)(G.PM, {
                      noticeType: w.kqX.GAME_SHOP_ORBS_REWARD_BANNER,
                      onClick: () => i(Y.i.USER_DISMISS),
                  }),
                  (0, s.jsx)(y.C, { size: "xs", color: "currentColor" }),
                  (0, s.jsxs)("div", {
                      className: U.f,
                      children: [
                          (0, s.jsxs)(O.E, {
                              variant: "text-sm/bold",
                              color: "currentColor",
                              children: [B.intl.string(B.t.yYEZGi), null != n && ` (${n})`],
                          }),
                          (0, s.jsx)(O.E, { variant: "text-sm/bold", color: "currentColor", children: "\u2014" }),
                          (0, s.jsx)(O.E, {
                              variant: "text-sm/medium",
                              color: "currentColor",
                              children: B.intl.format(B.t.RUuXiA, { applicationName: B.intl.string(B.t.Uu8hke) }),
                          }),
                      ],
                  }),
              ],
          });
}
var W = t(328100),
    F = t(534514),
    V = t(514270);
function Z(e) {
    let { leaderboard: l, skuId: t, analyticsLocations: a, analyticsSectionId: i } = e,
        r = n.useMemo(() => ({ pageSection: i }), [i]);
    return null == l
        ? null
        : (0, s.jsx)(j.E9, {
              newValue: r,
              children: (0, s.jsxs)("div", {
                  className: V.kL,
                  children: [
                      (0, s.jsxs)("div", {
                          className: V.FS,
                          children: [
                              (0, s.jsx)(F.D, { variant: "display-lg", color: "text-strong", children: l.title }),
                              (0, s.jsx)(O.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: l.description,
                              }),
                          ],
                      }),
                      null != t &&
                          (0, s.jsx)("div", {
                              className: V.Ui,
                              children: (0, s.jsx)(W.A, {
                                  positionInSection: 0,
                                  skuId: t,
                                  variant: W.s.MEDIUM,
                                  analyticsLocations: a,
                              }),
                          }),
                  ],
              }),
          });
}
var J = t(371794),
    X = t(500102);
function z(e) {
    let { applicationId: l, backgroundImageAssetId: t } = e,
        n = null != t ? (0, J.YE)(l, t, 1024, m.pV) : null;
    return (0, s.jsx)("div", {
        className: X._,
        children: null != n ? (0, s.jsx)("div", { className: X.i, style: { backgroundImage: `url(${n})` } }) : null,
    });
}
var K = t(198647);
function q(e) {
    let { skuIds: l, variant: t = W.s.SMALL, analyticsLocations: n } = e;
    return null == l || 0 === l.length
        ? null
        : (0, s.jsx)("div", {
              className: i()(K.kL, K.$2, { [K.Wc]: t === W.s.MEDIUM }),
              children: l.map((e, l) =>
                  (0, s.jsx)(W.A, { positionInSection: l, skuId: e, variant: t, analyticsLocations: n }, `${e}-${l}`),
              ),
          });
}
var Q = t(259238);
function ee(e) {
    let { analyticsSectionId: l, sectionTitle: t, skuIds: a, variant: i = W.s.SMALL } = e,
        r = n.useMemo(() => ({ pageSection: l, pageSectionTitle: t }), [l, t]);
    return null == a || 0 === a.length
        ? null
        : (0, s.jsx)(j.E9, {
              newValue: r,
              children: (0, s.jsxs)("div", {
                  className: Q.h,
                  children: [
                      null != t &&
                          t.length > 0 &&
                          (0, s.jsx)(F.D, {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              lineClamp: 1,
                              className: Q.G,
                              children: t,
                          }),
                      (0, s.jsx)(q, { skuIds: a, variant: i }),
                  ],
              }),
          });
}
var el = t(59520);
function et(e, l, t, s) {
    let { scrollTop: n = 0, scrollOffset: a = 0, scrollHeight: i = 0, scrollWidth: r = 0 } = s;
    if (i > 0) {
        let s = (n + a) / i;
        if (s > 0) {
            let {
                sessionId: n,
                guildId: a,
                pageIndex: o,
                pageTitle: c,
                isUserGuildMember: d,
                pageHasLeaderboard: u,
            } = l;
            C.default.track(e, {
                slayer_storefront_session_id: n,
                guild_id: a,
                page_index: o,
                page_title: c,
                is_user_guild_member: d,
                page_has_leaderboard: u,
                scroll_visible_percent: s,
                page_height: Math.round(i),
                page_width: Math.round(r),
                location_stack: t,
            });
        }
    }
}
var es = t(384274);
function en(e) {
    let l,
        t,
        { applicationId: a, page: i } = e,
        { ref: r, width: o } = (0, L.Ay)(),
        c = (0, j.jM)(),
        { analyticsLocations: d } = (0, g.Ay)(),
        u = n.useRef(null),
        { handleScroll: p } =
            ((l = n.useRef(c)),
            n.useEffect(() => {
                l.current = c;
            }, [c]),
            (t = (0, el.I)(et, 5e3, [], { trailing: !0 })),
            {
                handleScroll: n.useCallback(() => {
                    if (null != u.current) {
                        let e = u.current.getScrollerNode(),
                            s = l.current;
                        null != e &&
                            t(w.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, s, d, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [t, d, u]),
            }),
        f = (function (e) {
            let { location: l } = e;
            return M.useConfig({ location: l }).enabled;
        })({ location: "SocialLayerStorefrontPage" }),
        [_, x] = n.useMemo(() => {
            if (i?.skuIds == null || 0 === i.skuIds.length) return [[], []];
            let e = Math.round(o ?? 0);
            return i?.leaderboard == null || null == e || e < 564
                ? [[], i.skuIds]
                : e < 1104
                  ? i.skuIds.length >= 2
                      ? [[], i.skuIds]
                      : [i.skuIds.slice(0, 1), i.skuIds.slice(1)]
                  : [i.skuIds.slice(0, 2), i.skuIds.slice(2)];
        }, [i, o]),
        h = 1 === _.length && null != o && o >= 834 && !f;
    return (n.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: s, isUserGuildMember: n, pageHasLeaderboard: a } = c;
        C.default.track(w.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            page_index: t,
            page_title: s,
            is_user_guild_member: n,
            page_has_leaderboard: a,
            location_stack: d,
        });
    }, [c, d]),
    null == i)
        ? null
        : (0, s.jsxs)(v.Ch, {
              ref: u,
              onScroll: p,
              children: [
                  (0, s.jsx)($, { location: "social_layer_storefront_page" }),
                  (0, s.jsxs)("section", {
                      ref: r,
                      className: es.k,
                      children: [
                          (0, s.jsx)(z, {
                              applicationId: a,
                              backgroundImageAssetId: i.leaderboard?.backgroundImageAssetId,
                          }),
                          !f &&
                              (0, s.jsx)(Z, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: i.leaderboard,
                                  skuId: h ? _[0] : void 0,
                                  analyticsLocations: d,
                              }),
                          (0, s.jsx)(ee, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: h ? void 0 : _,
                              variant: W.s.MEDIUM,
                          }),
                          (0, s.jsx)(ee, { analyticsSectionId: "non-featured-top-section", skuIds: x }),
                          i.sections?.map((e, l) =>
                              (0, s.jsx)(
                                  ee,
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
var ea = t(253004);
function ei(e) {
    let { storefront: l, guildId: t, selectedPageIndex: a, selectedSku: i } = e,
        r = (0, j.jM)(),
        { renderHeader: o, getSocialLayerStorefrontLink: c } = (0, k.H)(),
        d = n.useRef(r);
    n.useEffect(() => {
        d.current = r;
    }, [r]);
    let g = n.useCallback(() => {
            null != c && (0, p.bG)(c(0));
        }, [c]),
        f = i?.id;
    return (
        n.useEffect(() => {
            if (null != f)
                return (
                    (0, N.R)({
                        customNavigateToSocialLayerStorefront: g,
                        skuId: f,
                        applicationId: l.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [u.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: d.current,
                        onClose: () => {
                            let { pathname: e, search: s } = (0, p.JK)().location;
                            (0, m.rG)(e, s, l.applicationId, t) && null != c && (0, p.bG)(c(a));
                        },
                    }),
                    () => {
                        (0, N.j)();
                    }
                );
        }, [t, a, f, l.applicationId, c, g]),
        (0, s.jsxs)("div", {
            className: ea.k,
            children: [o?.(a, l), (0, s.jsx)(en, { applicationId: l.applicationId, page: l.pages[a] })],
        })
    );
}
function er(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: a, gameShopSkuId: i } = l.params,
        r = (0, o.bG)([x.default], () => x.default.getSessionId(), []),
        c = n.useCallback((e, l, s) => w.BVt.CHANNELS_GAME_SHOP(t, e ?? 0, l, s), [t]),
        d = n.useCallback((e, l) => (null == t ? null : (0, s.jsx)(b.A, { storefront: l, selectedPageIndex: e })), [t]);
    return (
        n.useEffect(() => {
            null == t || null == r || (null == I.A.getGuild(t) && (0, S.Z2)(t, {}, { shouldNavigate: !1 }));
        }, [t, r]),
        (0, s.jsx)(eo, {
            guildId: t,
            skuId: i,
            pageIndex: null != a ? parseInt(a, 10) : void 0,
            renderHeader: d,
            getSocialLayerStorefrontLink: c,
        })
    );
}
function eo(e) {
    let { guildId: l, skuId: t, pageIndex: a = 0, renderHeader: p, getSocialLayerStorefrontLink: I } = e,
        { analyticsLocations: S } = (0, g.Ay)(u.A.SOCIAL_LAYER_STOREFRONT),
        m = (0, R.A)({ guildId: l }),
        N = (0, o.bG)([A.A], () => A.A.get(t), [t]);
    (0, _.pE)(), (0, f.x)({ applicationId: m?.storefront?.applicationId, location: "SocialLayerStorefront" });
    let b = (0, d.A)((0, r.A)()),
        v = (0, o.bG)([h.Ay, x.default], () => h.Ay.isMember(l, x.default.getId())),
        L = n.useMemo(
            () =>
                null == a || isNaN(a) || (null != m && null != m.storefront && a >= m.storefront.pages.length) ? 0 : a,
            [a, m],
        ),
        C = m?.storefront?.pages[L]?.title ?? null,
        M = m?.storefront?.pages[L]?.leaderboard != null,
        y = n.useMemo(
            () => ({
                sessionId: b,
                guildId: l,
                pageIndex: L,
                pageTitle: C,
                isUserGuildMember: v,
                pageHasLeaderboard: M,
            }),
            [b, l, L, C, v, M],
        );
    return (n.useEffect(() => {
        null != l && (0, E.SP)(l, L, null != t ? t : null);
    }, [l, L, t]),
    null == l || m?.storefront == null)
        ? (0, s.jsx)("div", { className: i()(ea.u, ea.k), children: (0, s.jsx)(c.y, {}) })
        : (0, s.jsx)(g.f5, {
              value: S,
              children: (0, s.jsx)(k.J, {
                  renderHeader: p,
                  getSocialLayerStorefrontLink: I,
                  children: (0, s.jsx)(j.E9, {
                      newValue: y,
                      children: (0, s.jsx)(ei, {
                          storefront: m.storefront,
                          guildId: l,
                          selectedPageIndex: L,
                          selectedSku: N,
                      }),
                  }),
              }),
          });
}
