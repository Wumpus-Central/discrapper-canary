(t.r(l), t.d(l, { SocialLayerStorefrontInnerWrapper: () => e$, default: () => eU }));
var n,
    a = t(477900),
    s = t(582128),
    i = t(503698),
    r = t.n(i),
    o = t(132500),
    c = t(17928),
    d = t(289873),
    u = t(297264),
    I = t(834730),
    p = t(444927),
    g = t(220839),
    A = t(793574),
    h = t(688810),
    E = t(976860),
    f = t(435658),
    x = t(594832),
    S = t(280450),
    m = t(696451),
    _ = t(71393),
    L = t(67480),
    j = t(927813),
    b = t(449054),
    v = t(871123),
    N = t(733391),
    C = t(439303),
    k = t(353281),
    T = t(832163),
    O = t(429635),
    R = t(156454),
    y = t(317560);
function P(e) {
    let { alt: l, ariaLabel: t, ariaHidden: n, role: s, width: i = 288, height: r = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: i, height: r },
        src: "https://cdn.discordapp.com/assets/content/0ebc111b10e8d33bd2e363de426d3214a0efde115bc844528d489277e592c316.svg",
        alt: l,
        "aria-label": t,
        "aria-hidden": n,
        role: s ?? "img",
    });
}
var D = t(28863),
    M = t(188275),
    F = t(206285),
    G = t(375708),
    H = t(771442);
function w() {
    return (0, a.jsxs)("div", {
        className: H.p,
        children: [
            (0, a.jsx)("div", {
                className: H.b,
                children: (0, a.jsx)(P, { alt: "", ariaHidden: !0, role: "presentation" }),
            }),
            (0, a.jsx)(u.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: G.intl.string(F.default["0XMNl5"]),
            }),
            (0, a.jsxs)(I.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: [G.intl.string(F.default.NZbasC), (0, a.jsx)("br", {}), G.intl.string(F.default.Tc8sxG)],
            }),
            (0, a.jsx)(I.E, {
                variant: "text-md/medium",
                children: (0, a.jsx)(D.Anchor, { href: M.uy, children: G.intl.string(F.default.KPCFC9) }),
            }),
        ],
    });
}
var V = t(939249),
    Y = t(366010),
    U = t(376357),
    Z = t(857250),
    $ = t(97483),
    W = t(926268),
    B = t(346411),
    J = t(271866),
    q = t(736653),
    z = t(885386),
    K = t(636537),
    Q = t(73153),
    X = t(652215);
async function ee() {
    Q.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_START" });
    try {
        let e = await K.Bo.get({
            url: X.Rsh.APPLICATIONS,
            query: { with_team_applications: !0 },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        Q.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_SUCCESS", applicationIds: e.body.map((e) => e.id) });
    } catch (e) {
        Q.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_FAIL" });
    }
}
var el =
    (((n = {}).INITIALIZED = "INITIALIZED"), (n.LOADING = "LOADING"), (n.LOADED = "LOADED"), (n.ERROR = "ERROR"), n);
let et = el.INITIALIZED,
    en = new Set();
class ea extends c.Ay.Store {
    static displayName = "DeveloperApplicationsStore";
    getFetchState() {
        return et;
    }
    isDeveloperOfApplication(e) {
        return null != e && en.has(e);
    }
}
let es = new ea(Q.h, {
    LOGOUT: function () {
        ((et = el.INITIALIZED), (en = new Set()));
    },
    DEVELOPER_APPLICATIONS_FETCH_START() {
        et = el.LOADING;
    },
    DEVELOPER_APPLICATIONS_FETCH_SUCCESS: function (e) {
        let { applicationIds: l } = e;
        ((et = el.LOADED), (en = new Set(l)));
    },
    DEVELOPER_APPLICATIONS_FETCH_FAIL() {
        et = el.ERROR;
    },
});
var ei = t(793943),
    er = t(742589),
    eo = t(402860),
    ec = t(287809),
    ed = t(147964),
    eu = t(174459),
    eI = t(975571),
    ep = t(371794),
    eg = t(945810);
let eA = (0, eg.mj)({
    name: "2026-09-application-test-mode-quick-access",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var eh = t(676924),
    eE = t(995393),
    ef = t(616633),
    ex = t(518477),
    eS = t(859425);
function em(e) {
    let { content: l, onClick: t, ariaLabel: n, className: s } = e;
    return (0, a.jsx)(V.D, { className: r()(eS.gb, s), onClick: t, "aria-label": n, children: l });
}
function e_(e) {
    var l;
    let t,
        n,
        i,
        { storefront: o, selectedPageIndex: d } = e,
        u = (0, Y.M)((0, q.Ay)()),
        p = (0, c.bG)([ec.default], () => ec.default.getCurrentUser()),
        g = (0, C.jM)(),
        { analyticsLocations: E } = (0, h.Ay)(),
        { navigateToStorefrontPage: f } = (0, k.H)(),
        x = o?.applicationId,
        { enabled: S } = eA.useConfig({ location: "SocialLayerStorefrontHeader" }),
        m =
            ((l = S ? x : null),
            (t = z.Q_.useSetting()),
            (n = (0, c.bG)([es], () => es.getFetchState())),
            (i = (0, c.bG)([es], () => es.isDeveloperOfApplication(l))),
            s.useEffect(() => {
                null != l && t && n === el.INITIALIZED && ee();
            }, [l, t, n]),
            i),
        _ = (0, c.bG)([ed.A], () => null != x && ed.A.inTestModeForApplication(x)),
        L = s.useCallback(() => {
            p?.id != null &&
                (0, eo.openUserProfileModal)({
                    userId: p.id,
                    tabSection: ex.RP.WISHLIST,
                    sourceAnalyticsLocations: [A.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [p]),
        j = s.useCallback(() => {
            (eu.default.track(X.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: g?.sessionId,
                cta_type: eE.ST.LEARN_MORE,
                location_stack: E,
            }),
                window.open(eI.A.getArticleURL(X.MVz.SOCIAL_LAYER_STOREFRONT)));
        }, [g, E]),
        b = s.useCallback(() => {
            null != x &&
                (0, J.q1)(x).then((e) => {
                    null == e
                        ? (0, U.P)((0, Z.o)(ed.A.error ?? G.intl.string(G.t.SDP0vo), $.Ck.FAILURE))
                        : (0, ei.nf)(ei.HP.APPLICATION_TEST_MODE_DEBUG, {
                              shouldAutoOpenGameProfile: !1,
                              initialTabId: ef.t.STOREFRONT,
                          });
                });
        }, [x]),
        v = s.useCallback(() => {
            f?.(0);
        }, [f]);
    if (null == o) return null;
    let N = null != o.logoAssetId ? (0, ep.YE)(o.applicationId, o.logoAssetId, 128) : null,
        T = null != o.lightThemeLogoAssetId ? (0, ep.YE)(o.applicationId, o.lightThemeLogoAssetId, 128) : null,
        O = null;
    return (
        (O = u ? (N ?? T) : (T ?? N)),
        (0, a.jsxs)(er.A, {
            disableDoubleClick: !0,
            className: eS.N1,
            children: [
                (0, a.jsxs)(V.D, {
                    onClick: v,
                    className: eS.gn,
                    children: [
                        null != O && (0, a.jsx)("img", { className: eS.wm, src: O, alt: o.title }),
                        (0, a.jsx)(er.A.Title, { children: o.title }),
                    ],
                }),
                o.pages.length > 1 &&
                    (0, a.jsx)("div", {
                        className: eS.YC,
                        children: o.pages.map((e, l) =>
                            (0, a.jsx)(
                                er.A.Title,
                                {
                                    onClick: () => f?.(l),
                                    wrapperClassName: eS.oB,
                                    className: r()(eS.xT, { [eS.ys]: d === l }),
                                    children: (0, a.jsx)(I.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${l}`,
                            ),
                        ),
                    }),
                (0, a.jsxs)("div", {
                    className: eS.sZ,
                    children: [
                        (0, a.jsx)(em, {
                            content: (0, a.jsx)(W.HeartIcon, { size: "xs", color: "currentColor" }),
                            onClick: L,
                            ariaLabel: G.intl.string(G.t["7lZ31J"]),
                            className: eS.ij,
                        }),
                        (0, a.jsx)(eh.A, { location: A.A.SOCIAL_LAYER_STOREFRONT }),
                        (0, a.jsx)(em, {
                            onClick: j,
                            ariaLabel: G.intl.string(G.t.hvVgAZ),
                            content: (0, a.jsx)(I.E, {
                                variant: "text-sm/medium",
                                children: G.intl.string(G.t.hvVgAZ),
                            }),
                            className: eS.AJ,
                        }),
                        m &&
                            !_ &&
                            (0, a.jsx)(em, {
                                onClick: b,
                                ariaLabel: G.intl.string(G.t.QexSCe),
                                content: (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(B.WrenchIcon, { size: "xs", color: "currentColor" }),
                                        (0, a.jsx)(I.E, {
                                            variant: "text-sm/medium",
                                            children: G.intl.string(G.t.QexSCe),
                                        }),
                                    ],
                                }),
                                className: eS.pL,
                            }),
                    ],
                }),
            ],
        })
    );
}
var eL = t(689175),
    ej = t(765671);
let eb = (0, eg.mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ev = t(467884),
    eN = t(352749);
function eC(e) {
    let { leaderboard: l, skuId: t, analyticsLocations: n, analyticsSectionId: i } = e,
        r = s.useMemo(() => ({ pageSection: i }), [i]);
    return null == l
        ? null
        : (0, a.jsx)(C.E9, {
              newValue: r,
              children: (0, a.jsxs)("div", {
                  className: eN.kL,
                  children: [
                      (0, a.jsxs)("div", {
                          className: eN.FS,
                          children: [
                              (0, a.jsx)(u.D, { variant: "display-lg", color: "text-strong", children: l.title }),
                              (0, a.jsx)(I.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: l.description,
                              }),
                          ],
                      }),
                      null != t &&
                          (0, a.jsx)("div", {
                              className: eN.Ui,
                              children: (0, a.jsx)(ev.Ay, {
                                  positionInSection: 0,
                                  skuId: t,
                                  variant: ev.s6.MEDIUM,
                                  analyticsLocations: n,
                              }),
                          }),
                  ],
              }),
          });
}
var ek = t(199023);
function eT(e) {
    let { applicationId: l, backgroundImageAssetId: t } = e,
        n = null != t ? (0, ep.YE)(l, t, 1024, v.pV) : null;
    return (0, a.jsx)("div", {
        className: ek._,
        children: null != n ? (0, a.jsx)("div", { className: ek.i, style: { backgroundImage: `url(${n})` } }) : null,
    });
}
var eO = t(962299),
    eR = t(504082);
function ey(e) {
    let { className: l, skuIds: t, variant: n = ev.s6.SMALL, analyticsLocations: s } = e;
    return null == t || 0 === t.length
        ? null
        : (0, a.jsx)("div", {
              className: r()(l, eR.kL, eR.$2, { [eR.Wc]: n === ev.s6.MEDIUM }),
              children: t.map((e, l) =>
                  (0, a.jsx)(ev.Ay, { positionInSection: l, skuId: e, variant: n, analyticsLocations: s }, `${e}-${l}`),
              ),
          });
}
var eP = t(534125);
function eD(e) {
    let { analyticsSectionId: l, sectionTitle: t, skuIds: n, variant: i = ev.s6.SMALL } = e,
        r = s.useMemo(() => ({ pageSection: l, pageSectionTitle: t }), [l, t]);
    if (null == n || 0 === n.length) return null;
    let o = null != t && t.length > 0;
    return (0, a.jsx)(C.E9, {
        newValue: r,
        children: (0, a.jsxs)("div", {
            className: eP.hd,
            children: [
                o &&
                    (0, a.jsx)(u.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        className: eP.Gf,
                        children: t,
                    }),
                (0, a.jsx)(ey, { className: o ? eP.EM : void 0, skuIds: n, variant: i }),
            ],
        }),
    });
}
var eM = t(59520);
function eF(e, l, t, n) {
    let { scrollTop: a = 0, scrollOffset: s = 0, scrollHeight: i = 0, scrollWidth: r = 0 } = n;
    if (i > 0) {
        let n = (a + s) / i;
        if (n > 0) {
            let {
                sessionId: a,
                guildId: s,
                applicationId: o,
                pageIndex: c,
                pageTitle: d,
                isUserGuildMember: u,
                pageHasLeaderboard: I,
            } = l;
            eu.default.track(e, {
                slayer_storefront_session_id: a,
                guild_id: s,
                application_id: o,
                page_index: c,
                page_title: d,
                is_user_guild_member: u,
                page_has_leaderboard: I,
                scroll_visible_percent: n,
                page_height: Math.round(i),
                page_width: Math.round(r),
                location_stack: t,
            });
        }
    }
}
var eG = t(167551);
function eH(e) {
    let l,
        t,
        { applicationId: n, page: i } = e,
        { ref: r, width: o } = (0, ej.Ay)(),
        c = (0, C.jM)(),
        { analyticsLocations: d } = (0, h.Ay)(),
        u = s.useRef(null),
        { handleScroll: I } =
            ((l = s.useRef(c)),
            s.useEffect(() => {
                l.current = c;
            }, [c]),
            (t = (0, eM.I)(eF, 5e3, [], { trailing: !0 })),
            {
                handleScroll: s.useCallback(() => {
                    if (null != u.current) {
                        let e = u.current.getScrollerNode(),
                            n = l.current;
                        null != e &&
                            t(X.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, n, d, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [t, d, u]),
            }),
        p = (function (e) {
            let { location: l } = e;
            return eb.useConfig({ location: l }).enabled;
        })({ location: "SocialLayerStorefrontPage" }),
        [g, A] = s.useMemo(() => {
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
        E = 1 === g.length && null != o && o >= 834 && !p;
    return (s.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: a, isUserGuildMember: s, pageHasLeaderboard: i } = c;
        eu.default.track(X.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            application_id: n,
            page_index: t,
            page_title: a,
            is_user_guild_member: s,
            page_has_leaderboard: i,
            location_stack: d,
        });
    }, [c, n, d]),
    null == i)
        ? null
        : (0, a.jsxs)(eL.Ch, {
              ref: u,
              onScroll: I,
              children: [
                  (0, a.jsx)(eO.M, { applicationId: n, analyticsLocations: d }),
                  (0, a.jsxs)("section", {
                      ref: r,
                      className: eG.k,
                      children: [
                          (0, a.jsx)(eT, {
                              applicationId: n,
                              backgroundImageAssetId: i.leaderboard?.backgroundImageAssetId,
                          }),
                          !p &&
                              (0, a.jsx)(eC, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: i.leaderboard,
                                  skuId: E ? g[0] : void 0,
                                  analyticsLocations: d,
                              }),
                          (0, a.jsx)(eD, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: E ? void 0 : g,
                              variant: ev.s6.MEDIUM,
                          }),
                          (0, a.jsx)(eD, { analyticsSectionId: "non-featured-top-section", skuIds: A }),
                          i.sections?.map((e, l) =>
                              (0, a.jsx)(
                                  eD,
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
var ew = t(537067);
let eV = 10 * j.A.Millis.SECOND;
function eY(e) {
    let {
            storefront: l,
            guildId: t,
            selectedPageIndex: n,
            selectedSku: i,
            renderHeader: r,
            getSocialLayerStorefrontLink: o,
        } = e,
        c = (0, C.jM)(),
        d = s.useRef(c);
    s.useEffect(() => {
        d.current = c;
    }, [c]);
    let u = s.useCallback(() => {
            null != o && (0, E.bG)(o(0));
        }, [o]),
        I = i?.id;
    return (
        s.useEffect(() => {
            if (null != I)
                return (
                    (0, y.R)({
                        customNavigateToSocialLayerStorefront: u,
                        skuId: I,
                        applicationId: l.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [A.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: d.current,
                        onClose: () => {
                            let { pathname: e, search: a } = (0, E.JK)().location;
                            (0, v.rG)(e, a, l.applicationId, t) && null != o && (0, E.bG)(o(n));
                        },
                    }),
                    () => {
                        (0, y.j)();
                    }
                );
        }, [t, n, I, l.applicationId, o, u]),
        (0, a.jsxs)("div", {
            className: ew.kL,
            children: [r?.(n, l), (0, a.jsx)(eH, { applicationId: l.applicationId, page: l.pages[n] })],
        })
    );
}
function eU(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: n, gameShopSkuId: i } = l.params,
        r = (0, c.bG)([S.default], () => S.default.getSessionId(), []),
        o = s.useCallback((e, l, n) => X.BVt.CHANNELS_GAME_SHOP(t, e ?? 0, l, n), [t]),
        d = (0, v.nY)(t),
        u = s.useCallback((e, l) => (0, a.jsx)(e_, { storefront: l, selectedPageIndex: e }), []);
    return (
        s.useEffect(() => {
            null == t || null == r || (null == _.A.getGuild(t) && (0, b.Z2)(t, {}, { shouldNavigate: !1 }));
        }, [t, r]),
        (0, a.jsx)(e$, {
            applicationId: d,
            guildId: t,
            skuId: i,
            pageIndex: null != n ? parseInt(n, 10) : void 0,
            analyticsPlacement: C.Ye.SLAYER_SERVER_SHOP,
            renderHeader: u,
            getSocialLayerStorefrontLink: o,
        })
    );
}
function eZ() {
    let [e, l] = s.useState(!1);
    return ((0, g.A)(() => l(!0), eV), e)
        ? (0, a.jsx)("div", { className: ew.kL, children: (0, a.jsx)(w, {}) })
        : (0, a.jsx)("div", { className: r()(ew.u1, ew.kL), children: (0, a.jsx)(d.y, {}) });
}
function e$(e) {
    let {
            applicationId: l,
            guildId: t,
            skuId: n,
            pageIndex: i = 0,
            analyticsPlacement: g,
            renderHeader: _,
            getSocialLayerStorefrontLink: j,
        } = e,
        { analyticsLocations: b } = (0, h.Ay)(A.A.SOCIAL_LAYER_STOREFRONT),
        v = (0, O.A)({ applicationId: l, guildId: t }),
        y = v?.storefront ?? null,
        P = (0, R.A)({ applicationId: l }),
        D = P.effectiveStorefront ?? y,
        M = (0, c.bG)([L.A], () => L.A.get(n), [n]);
    ((0, x.pE)(), (0, f.x)({ applicationId: v?.storefront?.applicationId }));
    let H = (0, c.bG)([T.A], () => t ?? T.A.getGuildIdFromApplicationId(l), [t, l]),
        w = (0, p.A)(() => (0, o.A)()),
        V = (0, c.bG)([m.Ay, S.default], () => m.Ay.isMember(H, S.default.getId()), [H]),
        Y = s.useMemo(() => (null == i || isNaN(i) || (null != D && i >= D.pages.length) ? 0 : i), [i, D]),
        U = D?.pages[Y]?.title ?? null,
        Z = D?.pages[Y]?.leaderboard != null,
        $ = s.useMemo(
            () => ({
                placement: g,
                sessionId: w,
                guildId: H,
                applicationId: l,
                pageIndex: Y,
                pageTitle: U,
                isUserGuildMember: V,
                pageHasLeaderboard: Z,
            }),
            [g, w, H, l, Y, U, V, Z],
        );
    s.useEffect(() => {
        null != l && (0, N.SP)(l, Y, null != n ? n : null);
    }, [l, Y, n]);
    let W = s.useMemo(() => {
            if (null != j) return (e) => (0, E.pX)(j(e));
        }, [j]),
        B = s.useCallback(
            (e, l, t) => {
                (0, E.bG)(j(Y, e, t));
            },
            [j, Y],
        );
    return null == l || v?.storefront == null
        ? null != v && "loading" !== v.state
            ? (0, a.jsxs)("div", {
                  className: r()(ew.p$, ew.kL),
                  children: [
                      (0, a.jsx)(u.D, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: G.intl.string(F.default.OvBwPV),
                      }),
                      (0, a.jsx)(I.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: G.intl.string(F.default["Sy7D+/"]),
                      }),
                  ],
              })
            : P.isTestMode
              ? (0, a.jsx)(eZ, {}, l)
              : (0, a.jsx)("div", { className: r()(ew.u1, ew.kL), children: (0, a.jsx)(d.y, {}) })
        : (0, a.jsx)(h.f5, {
              value: b,
              children: (0, a.jsx)(k.J, {
                  navigateToStorefrontPage: W,
                  viewProductDetails: B,
                  children: (0, a.jsx)(C.E9, {
                      newValue: $,
                      children: (0, a.jsx)(eY, {
                          storefront: D ?? v.storefront,
                          guildId: H,
                          selectedPageIndex: Y,
                          selectedSku: M,
                          renderHeader: _,
                          getSocialLayerStorefrontLink: j,
                      }),
                  }),
              }),
          });
}
