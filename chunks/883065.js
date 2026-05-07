t.r(l), t.d(l, { default: () => eE });
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
    _ = t(976860),
    f = t(530868),
    p = t(561794),
    x = t(495544),
    A = t(696451),
    h = t(71393),
    I = t(67480),
    E = t(449054),
    m = t(733391),
    S = t(439303),
    j = t(35826),
    R = t(429635),
    k = t(317560),
    N = t(939249),
    v = t(366010),
    b = t(834730),
    C = t(926268),
    L = t(736653),
    M = t(742589),
    O = t(975732),
    y = t(287809),
    T = t(174459),
    D = t(975571),
    P = t(371794);
let G = (0, t(945810).mj)({
    name: "2026-04-slayer-storefront-learn-more-link",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var H = t(44724),
    w = t(995393),
    Y = t(652215),
    U = t(518477),
    B = t(375708),
    $ = t(718356);
function F(e) {
    let { content: l, onClick: t, ariaLabel: n, className: a } = e;
    return (0, s.jsx)(N.D, { className: i()($.gb, a), onClick: t, "aria-label": n, children: l });
}
function V(e) {
    let { guildId: l, storefront: t, selectedPageIndex: a } = e,
        r = (0, v.M)((0, L.Ay)()),
        c = (0, o.bG)([y.default], () => y.default.getCurrentUser()),
        d = (0, S.jM)(),
        { analyticsLocations: _ } = (0, g.Ay)(),
        f = (function (e) {
            let { location: l } = e;
            return G.useConfig({ location: l }).enabled;
        })({ location: "slayer_storefront_header" }),
        p = n.useCallback(() => {
            c?.id != null &&
                (0, O.openUserProfileModal)({
                    userId: c.id,
                    tabSection: U.RP.WISHLIST,
                    sourceAnalyticsLocations: [u.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [c]),
        x = n.useCallback(() => {
            T.default.track(Y.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: d?.sessionId,
                cta_type: w.ST.LEARN_MORE,
                location_stack: _,
            });
            let e = f ? Y.MVz.SOCIAL_LAYER_STOREFRONT_UPDATED : Y.MVz.SOCIAL_LAYER_STOREFRONT;
            window.open(D.A.getArticleURL(e));
        }, [d, _, f]);
    if (null == t) return null;
    let A = null != t.logoAssetId ? (0, P.YE)(t.applicationId, t.logoAssetId, 128) : null,
        h = null != t.lightThemeLogoAssetId ? (0, P.YE)(t.applicationId, t.lightThemeLogoAssetId, 128) : null,
        I = null;
    return (
        (I = r ? (A ?? h) : (h ?? A)),
        (0, s.jsxs)(M.A, {
            disableDoubleClick: !0,
            className: $.N1,
            children: [
                (0, s.jsxs)(N.D, {
                    onClick: () => {
                        (0, H.default)({ guildId: l, pageIndex: 0 });
                    },
                    className: $.gn,
                    children: [
                        null != I && (0, s.jsx)("img", { className: $.wm, src: I, alt: t.title }),
                        (0, s.jsx)(M.A.Title, { children: t.title }),
                    ],
                }),
                t.pages.length > 1 &&
                    (0, s.jsx)("div", {
                        className: $.YC,
                        children: t.pages.map((e, t) =>
                            (0, s.jsx)(
                                M.A.Title,
                                {
                                    onClick: () => {
                                        (0, H.default)({ guildId: l, pageIndex: t });
                                    },
                                    wrapperClassName: $.oB,
                                    className: i()($.xT, { [$.ys]: a === t }),
                                    children: (0, s.jsx)(b.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${t}`,
                            ),
                        ),
                    }),
                (0, s.jsxs)("div", {
                    className: $.sZ,
                    children: [
                        (0, s.jsx)(F, {
                            content: (0, s.jsx)(C.C, { size: "xs", color: "currentColor" }),
                            onClick: p,
                            ariaLabel: B.intl.string(B.t["7lZ31J"]),
                            className: $.ij,
                        }),
                        (0, s.jsx)(F, {
                            onClick: x,
                            ariaLabel: B.intl.string(B.t.hvVgAZ),
                            content: (0, s.jsx)(b.E, {
                                variant: "text-sm/medium",
                                children: B.intl.string(B.t.hvVgAZ),
                            }),
                            className: $.AJ,
                        }),
                    ],
                }),
            ],
        })
    );
}
var W = t(689175),
    Z = t(765671),
    z = t(318254),
    J = t(554146),
    K = t(417098),
    X = t(853735),
    q = t(131607),
    Q = t(945942),
    ee = t(49999),
    el = t(922674);
function et(e) {
    let { location: l } = e,
        { shouldRender: t, limitedOfferTimeLeft: n } = (0, Q.A)({ location: l }),
        [a, i] = (0, q.RF)(
            t ? J.M.GAME_SHOP_ORBS_REWARD_BANNER : null,
            (0, X.c)(J.M.GAME_SHOP_ORBS_REWARD_BANNER),
            void 0,
            !0,
        ),
        r = a !== J.M.GAME_SHOP_ORBS_REWARD_BANNER;
    return !t || r
        ? null
        : (0, s.jsxs)(K.$T, {
              className: el.U,
              color: K.Hv.BRAND,
              children: [
                  (0, s.jsx)(K.PM, {
                      noticeType: Y.kqX.GAME_SHOP_ORBS_REWARD_BANNER,
                      onClick: () => i(ee.i.USER_DISMISS),
                  }),
                  (0, s.jsx)(z.C, { size: "xs", color: "currentColor" }),
                  (0, s.jsxs)("div", {
                      className: el.f,
                      children: [
                          (0, s.jsxs)(b.E, {
                              variant: "text-sm/bold",
                              color: "currentColor",
                              children: [B.intl.string(B.t.yYEZGi), null != n && ` (${n})`],
                          }),
                          (0, s.jsx)(b.E, { variant: "text-sm/bold", color: "currentColor", children: "\u2014" }),
                          (0, s.jsx)(b.E, {
                              variant: "text-sm/medium",
                              color: "currentColor",
                              children: B.intl.format(B.t.RUuXiA, { applicationName: B.intl.string(B.t.Uu8hke) }),
                          }),
                      ],
                  }),
              ],
          });
}
var es = t(467884),
    en = t(534514),
    ea = t(514270);
function ei(e) {
    let { leaderboard: l, skuId: t, analyticsLocations: a, analyticsSectionId: i } = e,
        r = n.useMemo(() => ({ pageSection: i }), [i]);
    return null == l
        ? null
        : (0, s.jsx)(S.E9, {
              newValue: r,
              children: (0, s.jsxs)("div", {
                  className: ea.kL,
                  children: [
                      (0, s.jsxs)("div", {
                          className: ea.FS,
                          children: [
                              (0, s.jsx)(en.D, { variant: "display-lg", color: "text-strong", children: l.title }),
                              (0, s.jsx)(b.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: l.description,
                              }),
                          ],
                      }),
                      null != t &&
                          (0, s.jsx)("div", {
                              className: ea.Ui,
                              children: (0, s.jsx)(es.A, {
                                  positionInSection: 0,
                                  skuId: t,
                                  variant: es.s.MEDIUM,
                                  analyticsLocations: a,
                              }),
                          }),
                  ],
              }),
          });
}
var er = t(871123),
    eo = t(500102);
function ec(e) {
    let { applicationId: l, backgroundImageAssetId: t } = e,
        n = null != t ? (0, P.YE)(l, t, 1024, er.pV) : null;
    return (0, s.jsx)("div", {
        className: eo._,
        children: null != n ? (0, s.jsx)("div", { className: eo.i, style: { backgroundImage: `url(${n})` } }) : null,
    });
}
var ed = t(198647);
function eu(e) {
    let { skuIds: l, variant: t = es.s.SMALL, analyticsLocations: n } = e;
    return null == l || 0 === l.length
        ? null
        : (0, s.jsx)("div", {
              className: i()(ed.kL, ed.$2, { [ed.Wc]: t === es.s.MEDIUM }),
              children: l.map((e, l) =>
                  (0, s.jsx)(es.A, { positionInSection: l, skuId: e, variant: t, analyticsLocations: n }, `${e}-${l}`),
              ),
          });
}
var eg = t(259238);
function e_(e) {
    let { analyticsSectionId: l, sectionTitle: t, skuIds: a, variant: i = es.s.SMALL } = e,
        r = n.useMemo(() => ({ pageSection: l, pageSectionTitle: t }), [l, t]);
    return null == a || 0 === a.length
        ? null
        : (0, s.jsx)(S.E9, {
              newValue: r,
              children: (0, s.jsxs)("div", {
                  className: eg.h,
                  children: [
                      null != t &&
                          t.length > 0 &&
                          (0, s.jsx)(en.D, {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              lineClamp: 1,
                              className: eg.G,
                              children: t,
                          }),
                      (0, s.jsx)(eu, { skuIds: a, variant: i }),
                  ],
              }),
          });
}
var ef = t(59520);
function ep(e, l, t, s) {
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
            T.default.track(e, {
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
var ex = t(384274);
function eA(e) {
    let l,
        t,
        { applicationId: a, page: i } = e,
        { ref: r, width: o } = (0, Z.Ay)(),
        c = (0, S.jM)(),
        { analyticsLocations: d } = (0, g.Ay)(),
        u = n.useRef(null),
        { handleScroll: _ } =
            ((l = n.useRef(c)),
            n.useEffect(() => {
                l.current = c;
            }, [c]),
            (t = (0, ef.I)(ep, 5e3, [], { trailing: !0 })),
            {
                handleScroll: n.useCallback(() => {
                    if (null != u.current) {
                        let e = u.current.getScrollerNode(),
                            s = l.current;
                        null != e &&
                            t(Y.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, s, d, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [t, d, u]),
            }),
        [f, p] = n.useMemo(() => {
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
        x = 1 === f.length && null != o && o >= 834;
    return (n.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: s, isUserGuildMember: n, pageHasLeaderboard: a } = c;
        T.default.track(Y.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
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
        : (0, s.jsxs)(W.Ch, {
              ref: u,
              onScroll: _,
              children: [
                  (0, s.jsx)(et, { location: "social_layer_storefront_page" }),
                  (0, s.jsxs)("section", {
                      ref: r,
                      className: ex.k,
                      children: [
                          (0, s.jsx)(ec, {
                              applicationId: a,
                              backgroundImageAssetId: i.leaderboard?.backgroundImageAssetId,
                          }),
                          (0, s.jsx)(ei, {
                              analyticsSectionId: "leaderboard",
                              leaderboard: i.leaderboard,
                              skuId: x ? f[0] : void 0,
                              analyticsLocations: d,
                          }),
                          (0, s.jsx)(e_, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: x ? void 0 : f,
                              variant: es.s.MEDIUM,
                          }),
                          (0, s.jsx)(e_, { analyticsSectionId: "non-featured-top-section", skuIds: p }),
                          i.sections?.map((e, l) =>
                              (0, s.jsx)(
                                  e_,
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
var eh = t(253004);
function eI(e) {
    let { storefront: l, guildId: t, selectedPageIndex: a, selectedSku: i } = e,
        r = (0, S.jM)(),
        o = n.useRef(r);
    n.useEffect(() => {
        o.current = r;
    }, [r]);
    let c = i?.id;
    return (
        n.useEffect(() => {
            if (null != c)
                return (
                    (0, k.R)({
                        skuId: c,
                        applicationId: l.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [u.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: o.current,
                        onClose: () => {
                            (0, _.JK)().location.pathname.indexOf(Y.BVt.CHANNELS_GAME_SHOP(t, a)) >= 0 &&
                                (0, j.A)({ guildId: t, pageIndex: a });
                        },
                    }),
                    () => {
                        (0, k.j)();
                    }
                );
        }, [t, a, c, l.applicationId]),
        (0, s.jsxs)("div", {
            className: eh.k,
            children: [
                (0, s.jsx)(V, { guildId: t, storefront: l, selectedPageIndex: a }),
                (0, s.jsx)(eA, { applicationId: l.applicationId, page: l.pages[a] }),
            ],
        })
    );
}
function eE(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: a, gameShopSkuId: _ } = l.params,
        { analyticsLocations: j } = (0, g.Ay)(u.A.SOCIAL_LAYER_STOREFRONT),
        k = (0, R.A)({ guildId: t }),
        N = (0, o.bG)([x.default], () => x.default.getSessionId(), []),
        v = (0, o.bG)([I.A], () => I.A.get(_), [_]);
    (0, p.pE)(), (0, f.x)({ applicationId: k?.storefront?.applicationId, location: "SocialLayerStorefront" });
    let b = (0, d.A)((0, r.A)()),
        C = (0, o.bG)([A.Ay, x.default], () => A.Ay.isMember(t, x.default.getId())),
        L = n.useMemo(() => {
            if (null == a) return 0;
            let e = parseInt(a, 10);
            return isNaN(e) || (null != k && null != k.storefront && e >= k.storefront.pages.length) ? 0 : e;
        }, [a, k]),
        M = k?.storefront?.pages[L]?.title ?? null,
        O = k?.storefront?.pages[L]?.leaderboard != null,
        y = n.useMemo(
            () => ({
                sessionId: b,
                guildId: t,
                pageIndex: L,
                pageTitle: M,
                isUserGuildMember: C,
                pageHasLeaderboard: O,
            }),
            [b, t, L, M, C, O],
        );
    return (n.useEffect(() => {
        null != t && (0, m.SP)(t, L, null != _ ? _ : null);
    }, [t, L, _]),
    n.useEffect(() => {
        null == t || null == N || (null == h.A.getGuild(t) && (0, E.Z2)(t, {}, { shouldNavigate: !1 }));
    }, [t, N]),
    null == t || k?.storefront == null)
        ? (0, s.jsx)("div", { className: i()(eh.u, eh.k), children: (0, s.jsx)(c.y, {}) })
        : (0, s.jsx)(g.f5, {
              value: j,
              children: (0, s.jsx)(S.E9, {
                  newValue: y,
                  children: (0, s.jsx)(eI, {
                      storefront: k.storefront,
                      guildId: t,
                      selectedPageIndex: L,
                      selectedSku: v,
                  }),
              }),
          });
}
