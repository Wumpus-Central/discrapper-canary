s.r(l), s.d(l, { SocialLayerStorefrontInnerWrapper: () => eo, default: () => er });
var t = s(627968),
    n = s(64700),
    a = s(503698),
    i = s.n(a),
    r = s(835245),
    o = s(17928),
    c = s(289873),
    d = s(444927),
    u = s(793574),
    g = s(688810),
    p = s(976860),
    f = s(470285),
    _ = s(561794),
    x = s(495544),
    h = s(696451),
    I = s(71393),
    A = s(67480),
    m = s(385648),
    E = s(871123),
    S = s(733391),
    j = s(439303),
    k = s(353281),
    R = s(429635),
    N = s(317560),
    b = s(964395),
    v = s(689175),
    C = s(765671),
    L = s(174459);
let M = (0, s(945810).mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var y = s(318254),
    O = s(834730),
    T = s(554146),
    G = s(417098),
    H = s(853735),
    D = s(131607),
    P = s(945942),
    w = s(652215),
    Y = s(49999),
    B = s(375708),
    U = s(922674);
function $(e) {
    let { location: l } = e,
        { shouldRender: s, limitedOfferTimeLeft: n } = (0, P.A)({ location: l }),
        [a, i] = (0, D.RF)(
            s ? T.M.GAME_SHOP_ORBS_REWARD_BANNER : null,
            (0, H.c)(T.M.GAME_SHOP_ORBS_REWARD_BANNER),
            void 0,
            !0,
        ),
        r = a !== T.M.GAME_SHOP_ORBS_REWARD_BANNER;
    return !s || r
        ? null
        : (0, t.jsxs)(G.$T, {
              className: U.U,
              color: G.Hv.BRAND,
              children: [
                  (0, t.jsx)(G.PM, {
                      noticeType: w.kqX.GAME_SHOP_ORBS_REWARD_BANNER,
                      onClick: () => i(Y.i.USER_DISMISS),
                  }),
                  (0, t.jsx)(y.C, { size: "xs", color: "currentColor" }),
                  (0, t.jsxs)("div", {
                      className: U.f,
                      children: [
                          (0, t.jsxs)(O.E, {
                              variant: "text-sm/bold",
                              color: "currentColor",
                              children: [B.intl.string(B.t.yYEZGi), null != n && ` (${n})`],
                          }),
                          (0, t.jsx)(O.E, { variant: "text-sm/bold", color: "currentColor", children: "\u2014" }),
                          (0, t.jsx)(O.E, {
                              variant: "text-sm/medium",
                              color: "currentColor",
                              children: B.intl.format(B.t.RUuXiA, { applicationName: B.intl.string(B.t.Uu8hke) }),
                          }),
                      ],
                  }),
              ],
          });
}
var W = s(328100),
    F = s(534514),
    V = s(514270);
function Z(e) {
    let { leaderboard: l, skuId: s, analyticsLocations: a, analyticsSectionId: i } = e,
        r = n.useMemo(() => ({ pageSection: i }), [i]);
    return null == l
        ? null
        : (0, t.jsx)(j.E9, {
              newValue: r,
              children: (0, t.jsxs)("div", {
                  className: V.kL,
                  children: [
                      (0, t.jsxs)("div", {
                          className: V.FS,
                          children: [
                              (0, t.jsx)(F.D, { variant: "display-lg", color: "text-strong", children: l.title }),
                              (0, t.jsx)(O.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: l.description,
                              }),
                          ],
                      }),
                      null != s &&
                          (0, t.jsx)("div", {
                              className: V.Ui,
                              children: (0, t.jsx)(W.A, {
                                  positionInSection: 0,
                                  skuId: s,
                                  variant: W.s.MEDIUM,
                                  analyticsLocations: a,
                              }),
                          }),
                  ],
              }),
          });
}
var J = s(371794),
    X = s(500102);
function z(e) {
    let { applicationId: l, backgroundImageAssetId: s } = e,
        n = null != s ? (0, J.YE)(l, s, 1024, E.pV) : null;
    return (0, t.jsx)("div", {
        className: X._,
        children: null != n ? (0, t.jsx)("div", { className: X.i, style: { backgroundImage: `url(${n})` } }) : null,
    });
}
var K = s(198647);
function q(e) {
    let { skuIds: l, variant: s = W.s.SMALL, analyticsLocations: n } = e;
    return null == l || 0 === l.length
        ? null
        : (0, t.jsx)("div", {
              className: i()(K.kL, K.$2, { [K.Wc]: s === W.s.MEDIUM }),
              children: l.map((e, l) =>
                  (0, t.jsx)(W.A, { positionInSection: l, skuId: e, variant: s, analyticsLocations: n }, `${e}-${l}`),
              ),
          });
}
var Q = s(259238);
function ee(e) {
    let { analyticsSectionId: l, sectionTitle: s, skuIds: a, variant: i = W.s.SMALL } = e,
        r = n.useMemo(() => ({ pageSection: l, pageSectionTitle: s }), [l, s]);
    return null == a || 0 === a.length
        ? null
        : (0, t.jsx)(j.E9, {
              newValue: r,
              children: (0, t.jsxs)("div", {
                  className: Q.h,
                  children: [
                      null != s &&
                          s.length > 0 &&
                          (0, t.jsx)(F.D, {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              lineClamp: 1,
                              className: Q.G,
                              children: s,
                          }),
                      (0, t.jsx)(q, { skuIds: a, variant: i }),
                  ],
              }),
          });
}
var el = s(59520);
function es(e, l, s, t) {
    let { scrollTop: n = 0, scrollOffset: a = 0, scrollHeight: i = 0, scrollWidth: r = 0 } = t;
    if (i > 0) {
        let t = (n + a) / i;
        if (t > 0) {
            let {
                sessionId: n,
                guildId: a,
                pageIndex: o,
                pageTitle: c,
                isUserGuildMember: d,
                pageHasLeaderboard: u,
            } = l;
            L.default.track(e, {
                slayer_storefront_session_id: n,
                guild_id: a,
                page_index: o,
                page_title: c,
                is_user_guild_member: d,
                page_has_leaderboard: u,
                scroll_visible_percent: t,
                page_height: Math.round(i),
                page_width: Math.round(r),
                location_stack: s,
            });
        }
    }
}
var et = s(384274);
function en(e) {
    let l,
        s,
        { applicationId: a, page: i } = e,
        { ref: r, width: o } = (0, C.Ay)(),
        c = (0, j.jM)(),
        { analyticsLocations: d } = (0, g.Ay)(),
        u = n.useRef(null),
        { handleScroll: p } =
            ((l = n.useRef(c)),
            n.useEffect(() => {
                l.current = c;
            }, [c]),
            (s = (0, el.I)(es, 5e3, [], { trailing: !0 })),
            {
                handleScroll: n.useCallback(() => {
                    if (null != u.current) {
                        let e = u.current.getScrollerNode(),
                            t = l.current;
                        null != e &&
                            s(w.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, t, d, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [s, d, u]),
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
        let { sessionId: e, guildId: l, pageIndex: s, pageTitle: t, isUserGuildMember: n, pageHasLeaderboard: a } = c;
        L.default.track(w.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            page_index: s,
            page_title: t,
            is_user_guild_member: n,
            page_has_leaderboard: a,
            location_stack: d,
        });
    }, [c, d]),
    null == i)
        ? null
        : (0, t.jsxs)(v.Ch, {
              ref: u,
              onScroll: p,
              children: [
                  (0, t.jsx)($, { location: "social_layer_storefront_page" }),
                  (0, t.jsxs)("section", {
                      ref: r,
                      className: et.k,
                      children: [
                          (0, t.jsx)(z, {
                              applicationId: a,
                              backgroundImageAssetId: i.leaderboard?.backgroundImageAssetId,
                          }),
                          !f &&
                              (0, t.jsx)(Z, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: i.leaderboard,
                                  skuId: h ? _[0] : void 0,
                                  analyticsLocations: d,
                              }),
                          (0, t.jsx)(ee, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: h ? void 0 : _,
                              variant: W.s.MEDIUM,
                          }),
                          (0, t.jsx)(ee, { analyticsSectionId: "non-featured-top-section", skuIds: x }),
                          i.sections?.map((e, l) =>
                              (0, t.jsx)(
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
var ea = s(253004);
function ei(e) {
    let { storefront: l, guildId: s, selectedPageIndex: a, selectedSku: i } = e,
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
                            let { pathname: e, search: t } = (0, p.JK)().location;
                            (0, E.rG)(e, t, l.applicationId, s) && null != c && (0, p.bG)(c(a));
                        },
                    }),
                    () => {
                        (0, N.j)();
                    }
                );
        }, [s, a, f, l.applicationId, c, g]),
        (0, t.jsxs)("div", {
            className: ea.k,
            children: [o?.(a, l), (0, t.jsx)(en, { applicationId: l.applicationId, page: l.pages[a] })],
        })
    );
}
function er(e) {
    let { match: l } = e,
        { guildId: s, gameShopPageIndex: a, gameShopSkuId: i } = l.params,
        r = (0, o.bG)([x.default], () => x.default.getSessionId(), []),
        c = n.useCallback((e, l, t) => w.BVt.CHANNELS_GAME_SHOP(s, e ?? 0, l, t), [s]),
        d = n.useCallback((e, l) => (null == s ? null : (0, t.jsx)(b.A, { storefront: l, selectedPageIndex: e })), [s]);
    return (
        n.useEffect(() => {
            null == s || null == r || (null == I.A.getGuild(s) && (0, m.Z2)(s, {}, { shouldNavigate: !1 }));
        }, [s, r]),
        (0, t.jsx)(eo, {
            guildId: s,
            skuId: i,
            pageIndex: null != a ? parseInt(a, 10) : void 0,
            renderHeader: d,
            getSocialLayerStorefrontLink: c,
        })
    );
}
function eo(e) {
    let { guildId: l, skuId: s, pageIndex: a = 0, renderHeader: p, getSocialLayerStorefrontLink: I } = e,
        { analyticsLocations: m } = (0, g.Ay)(u.A.SOCIAL_LAYER_STOREFRONT),
        E = (0, R.A)({ guildId: l }),
        N = (0, o.bG)([A.A], () => A.A.get(s), [s]);
    (0, _.pE)(), (0, f.x)({ applicationId: E?.storefront?.applicationId });
    let b = (0, d.A)((0, r.A)()),
        v = (0, o.bG)([h.Ay, x.default], () => h.Ay.isMember(l, x.default.getId())),
        C = n.useMemo(
            () =>
                null == a || isNaN(a) || (null != E && null != E.storefront && a >= E.storefront.pages.length) ? 0 : a,
            [a, E],
        ),
        L = E?.storefront?.pages[C]?.title ?? null,
        M = E?.storefront?.pages[C]?.leaderboard != null,
        y = n.useMemo(
            () => ({
                sessionId: b,
                guildId: l,
                pageIndex: C,
                pageTitle: L,
                isUserGuildMember: v,
                pageHasLeaderboard: M,
            }),
            [b, l, C, L, v, M],
        );
    return (n.useEffect(() => {
        null != l && (0, S.SP)(l, C, null != s ? s : null);
    }, [l, C, s]),
    null == l || E?.storefront == null)
        ? (0, t.jsx)("div", { className: i()(ea.u, ea.k), children: (0, t.jsx)(c.y, {}) })
        : (0, t.jsx)(g.f5, {
              value: m,
              children: (0, t.jsx)(k.J, {
                  renderHeader: p,
                  getSocialLayerStorefrontLink: I,
                  children: (0, t.jsx)(j.E9, {
                      newValue: y,
                      children: (0, t.jsx)(ei, {
                          storefront: E.storefront,
                          guildId: l,
                          selectedPageIndex: C,
                          selectedSku: N,
                      }),
                  }),
              }),
          });
}
