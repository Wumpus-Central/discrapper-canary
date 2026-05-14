s.r(l), s.d(l, { SocialLayerStorefrontInnerWrapper: () => er, default: () => ei });
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
    x = s(530868),
    _ = s(561794),
    I = s(495544),
    f = s(696451),
    h = s(71393),
    A = s(67480),
    E = s(449054),
    S = s(871123),
    m = s(733391),
    j = s(439303),
    k = s(353281),
    R = s(429635),
    N = s(317560),
    v = s(964395),
    b = s(689175),
    L = s(765671),
    C = s(174459),
    M = s(318254),
    y = s(834730),
    O = s(554146),
    T = s(417098),
    H = s(853735),
    D = s(131607),
    G = s(945942),
    P = s(652215),
    w = s(49999),
    Y = s(375708),
    B = s(922674);
function U(e) {
    let { location: l } = e,
        { shouldRender: s, limitedOfferTimeLeft: n } = (0, G.A)({ location: l }),
        [a, i] = (0, D.RF)(
            s ? O.M.GAME_SHOP_ORBS_REWARD_BANNER : null,
            (0, H.c)(O.M.GAME_SHOP_ORBS_REWARD_BANNER),
            void 0,
            !0,
        ),
        r = a !== O.M.GAME_SHOP_ORBS_REWARD_BANNER;
    return !s || r
        ? null
        : (0, t.jsxs)(T.$T, {
              className: B.U,
              color: T.Hv.BRAND,
              children: [
                  (0, t.jsx)(T.PM, {
                      noticeType: P.kqX.GAME_SHOP_ORBS_REWARD_BANNER,
                      onClick: () => i(w.i.USER_DISMISS),
                  }),
                  (0, t.jsx)(M.C, { size: "xs", color: "currentColor" }),
                  (0, t.jsxs)("div", {
                      className: B.f,
                      children: [
                          (0, t.jsxs)(y.E, {
                              variant: "text-sm/bold",
                              color: "currentColor",
                              children: [Y.intl.string(Y.t.yYEZGi), null != n && ` (${n})`],
                          }),
                          (0, t.jsx)(y.E, { variant: "text-sm/bold", color: "currentColor", children: "\u2014" }),
                          (0, t.jsx)(y.E, {
                              variant: "text-sm/medium",
                              color: "currentColor",
                              children: Y.intl.format(Y.t.RUuXiA, { applicationName: Y.intl.string(Y.t.Uu8hke) }),
                          }),
                      ],
                  }),
              ],
          });
}
var $ = s(467884),
    W = s(534514),
    F = s(514270);
function V(e) {
    let { leaderboard: l, skuId: s, analyticsLocations: a, analyticsSectionId: i } = e,
        r = n.useMemo(() => ({ pageSection: i }), [i]);
    return null == l
        ? null
        : (0, t.jsx)(j.E9, {
              newValue: r,
              children: (0, t.jsxs)("div", {
                  className: F.kL,
                  children: [
                      (0, t.jsxs)("div", {
                          className: F.FS,
                          children: [
                              (0, t.jsx)(W.D, { variant: "display-lg", color: "text-strong", children: l.title }),
                              (0, t.jsx)(y.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: l.description,
                              }),
                          ],
                      }),
                      null != s &&
                          (0, t.jsx)("div", {
                              className: F.Ui,
                              children: (0, t.jsx)($.A, {
                                  positionInSection: 0,
                                  skuId: s,
                                  variant: $.s.MEDIUM,
                                  analyticsLocations: a,
                              }),
                          }),
                  ],
              }),
          });
}
var Z = s(371794),
    J = s(500102);
function z(e) {
    let { applicationId: l, backgroundImageAssetId: s } = e,
        n = null != s ? (0, Z.YE)(l, s, 1024, S.pV) : null;
    return (0, t.jsx)("div", {
        className: J._,
        children: null != n ? (0, t.jsx)("div", { className: J.i, style: { backgroundImage: `url(${n})` } }) : null,
    });
}
var K = s(198647);
function X(e) {
    let { skuIds: l, variant: s = $.s.SMALL, analyticsLocations: n } = e;
    return null == l || 0 === l.length
        ? null
        : (0, t.jsx)("div", {
              className: i()(K.kL, K.$2, { [K.Wc]: s === $.s.MEDIUM }),
              children: l.map((e, l) =>
                  (0, t.jsx)($.A, { positionInSection: l, skuId: e, variant: s, analyticsLocations: n }, `${e}-${l}`),
              ),
          });
}
var q = s(259238);
function Q(e) {
    let { analyticsSectionId: l, sectionTitle: s, skuIds: a, variant: i = $.s.SMALL } = e,
        r = n.useMemo(() => ({ pageSection: l, pageSectionTitle: s }), [l, s]);
    return null == a || 0 === a.length
        ? null
        : (0, t.jsx)(j.E9, {
              newValue: r,
              children: (0, t.jsxs)("div", {
                  className: q.h,
                  children: [
                      null != s &&
                          s.length > 0 &&
                          (0, t.jsx)(W.D, {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              lineClamp: 1,
                              className: q.G,
                              children: s,
                          }),
                      (0, t.jsx)(X, { skuIds: a, variant: i }),
                  ],
              }),
          });
}
var ee = s(59520);
function el(e, l, s, t) {
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
            C.default.track(e, {
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
var es = s(384274);
function et(e) {
    let l,
        s,
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
            (s = (0, ee.I)(el, 5e3, [], { trailing: !0 })),
            {
                handleScroll: n.useCallback(() => {
                    if (null != u.current) {
                        let e = u.current.getScrollerNode(),
                            t = l.current;
                        null != e &&
                            s(P.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, t, d, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [s, d, u]),
            }),
        [x, _] = n.useMemo(() => {
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
        I = 1 === x.length && null != o && o >= 834;
    return (n.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: s, pageTitle: t, isUserGuildMember: n, pageHasLeaderboard: a } = c;
        C.default.track(P.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
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
        : (0, t.jsxs)(b.Ch, {
              ref: u,
              onScroll: p,
              children: [
                  (0, t.jsx)(U, { location: "social_layer_storefront_page" }),
                  (0, t.jsxs)("section", {
                      ref: r,
                      className: es.k,
                      children: [
                          (0, t.jsx)(z, {
                              applicationId: a,
                              backgroundImageAssetId: i.leaderboard?.backgroundImageAssetId,
                          }),
                          (0, t.jsx)(V, {
                              analyticsSectionId: "leaderboard",
                              leaderboard: i.leaderboard,
                              skuId: I ? x[0] : void 0,
                              analyticsLocations: d,
                          }),
                          (0, t.jsx)(Q, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: I ? void 0 : x,
                              variant: $.s.MEDIUM,
                          }),
                          (0, t.jsx)(Q, { analyticsSectionId: "non-featured-top-section", skuIds: _ }),
                          i.sections?.map((e, l) =>
                              (0, t.jsx)(
                                  Q,
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
var en = s(253004);
function ea(e) {
    let { storefront: l, guildId: s, selectedPageIndex: a, selectedSku: i } = e,
        r = (0, j.jM)(),
        { renderHeader: o, getSocialLayerStorefrontLink: c } = (0, k.H)(),
        d = n.useRef(r);
    n.useEffect(() => {
        d.current = r;
    }, [r]);
    let g = i?.id;
    return (
        n.useEffect(() => {
            if (null != g)
                return (
                    (0, N.R)({
                        getSocialLayerStorefrontLink: c,
                        skuId: g,
                        applicationId: l.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [u.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: d.current,
                        onClose: () => {
                            let { pathname: e, search: t } = (0, p.JK)().location;
                            (0, S.rG)(e, t, l.applicationId, s) && null != c && (0, p.bG)(c(a));
                        },
                    }),
                    () => {
                        (0, N.j)();
                    }
                );
        }, [s, a, g, l.applicationId, c]),
        (0, t.jsxs)("div", {
            className: en.k,
            children: [o?.(a, l), (0, t.jsx)(et, { applicationId: l.applicationId, page: l.pages[a] })],
        })
    );
}
function ei(e) {
    let { match: l } = e,
        { guildId: s, gameShopPageIndex: a, gameShopSkuId: i } = l.params,
        r = n.useCallback((e, l, t) => P.BVt.CHANNELS_GAME_SHOP(s, e ?? 0, l, t), [s]),
        o = n.useCallback(
            (e, l) => (null == s ? null : (0, t.jsx)(v.A, { guildId: s, storefront: l, selectedPageIndex: e })),
            [s],
        );
    return (0, t.jsx)(er, {
        guildId: s,
        skuId: i,
        pageIndex: null != a ? parseInt(a, 10) : void 0,
        renderHeader: o,
        getSocialLayerStorefrontLink: r,
    });
}
function er(e) {
    let { guildId: l, skuId: s, pageIndex: a = 0, renderHeader: p, getSocialLayerStorefrontLink: S } = e,
        { analyticsLocations: N } = (0, g.Ay)(u.A.SOCIAL_LAYER_STOREFRONT),
        v = (0, R.A)({ guildId: l }),
        b = (0, o.bG)([I.default], () => I.default.getSessionId(), []),
        L = (0, o.bG)([A.A], () => A.A.get(s), [s]);
    (0, _.pE)(), (0, x.x)({ applicationId: v?.storefront?.applicationId, location: "SocialLayerStorefront" });
    let C = (0, d.A)((0, r.A)()),
        M = (0, o.bG)([f.Ay, I.default], () => f.Ay.isMember(l, I.default.getId())),
        y = n.useMemo(
            () =>
                null == a || isNaN(a) || (null != v && null != v.storefront && a >= v.storefront.pages.length) ? 0 : a,
            [a, v],
        ),
        O = v?.storefront?.pages[y]?.title ?? null,
        T = v?.storefront?.pages[y]?.leaderboard != null,
        H = n.useMemo(
            () => ({
                sessionId: C,
                guildId: l,
                pageIndex: y,
                pageTitle: O,
                isUserGuildMember: M,
                pageHasLeaderboard: T,
            }),
            [C, l, y, O, M, T],
        );
    return (n.useEffect(() => {
        null != l && (0, m.SP)(l, y, null != s ? s : null);
    }, [l, y, s]),
    n.useEffect(() => {
        null == l || null == b || (null == h.A.getGuild(l) && (0, E.Z2)(l, {}, { shouldNavigate: !1 }));
    }, [l, b]),
    null == l || v?.storefront == null)
        ? (0, t.jsx)("div", { className: i()(en.u, en.k), children: (0, t.jsx)(c.y, {}) })
        : (0, t.jsx)(g.f5, {
              value: N,
              children: (0, t.jsx)(k.J, {
                  renderHeader: p,
                  getSocialLayerStorefrontLink: S,
                  children: (0, t.jsx)(j.E9, {
                      newValue: H,
                      children: (0, t.jsx)(ea, {
                          storefront: v.storefront,
                          guildId: l,
                          selectedPageIndex: y,
                          selectedSku: L,
                      }),
                  }),
              }),
          });
}
