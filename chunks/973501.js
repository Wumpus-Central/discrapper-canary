(t.r(l), t.d(l, { SocialLayerStorefrontInnerWrapper: () => eZ, default: () => eY }));
var n,
    s = t(477900),
    a = t(582128),
    i = t(503698),
    r = t.n(i),
    o = t(132500),
    c = t(17928),
    d = t(289873),
    u = t(297264),
    p = t(834730),
    I = t(444927),
    g = t(220839),
    h = t(793574),
    A = t(688810),
    E = t(976860),
    f = t(435658),
    x = t(594832),
    m = t(280450),
    S = t(696451),
    _ = t(71393),
    L = t(67480),
    j = t(927813),
    b = t(449054),
    v = t(871123),
    N = t(733391),
    k = t(439303),
    C = t(353281),
    T = t(429635),
    O = t(156454),
    R = t(317560);
function y(e) {
    let { alt: l, ariaLabel: t, ariaHidden: n, role: a, width: i = 288, height: r = 162 } = e;
    return (0, s.jsx)("img", {
        style: { width: i, height: r },
        src: "https://cdn.discordapp.com/assets/content/0ebc111b10e8d33bd2e363de426d3214a0efde115bc844528d489277e592c316.svg",
        alt: l,
        "aria-label": t,
        "aria-hidden": n,
        role: a ?? "img",
    });
}
var D = t(28863),
    P = t(188275),
    M = t(621547),
    F = t(375708),
    H = t(771442);
function G() {
    return (0, s.jsxs)("div", {
        className: H.p,
        children: [
            (0, s.jsx)("div", {
                className: H.b,
                children: (0, s.jsx)(y, { alt: "", ariaHidden: !0, role: "presentation" }),
            }),
            (0, s.jsx)(u.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: F.intl.string(M.default["0XMNl5"]),
            }),
            (0, s.jsxs)(p.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: [F.intl.string(M.default.NZbasC), (0, s.jsx)("br", {}), F.intl.string(M.default.Tc8sxG)],
            }),
            (0, s.jsx)(p.E, {
                variant: "text-md/medium",
                children: (0, s.jsx)(D.Anchor, { href: P.uy, children: F.intl.string(M.default.KPCFC9) }),
            }),
        ],
    });
}
var w = t(939249),
    V = t(366010),
    Y = t(691540),
    U = t(857250),
    Z = t(97483),
    $ = t(926268),
    W = t(346411),
    B = t(271866),
    J = t(736653),
    q = t(885386),
    z = t(636537),
    K = t(228366),
    Q = t(652215);
async function X() {
    K.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_START" });
    try {
        let e = await z.Bo.get({
            url: Q.Rsh.APPLICATIONS,
            query: { with_team_applications: !0 },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        K.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_SUCCESS", applicationIds: e.body.map((e) => e.id) });
    } catch (e) {
        K.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_FAIL" });
    }
}
var ee =
    (((n = {}).INITIALIZED = "INITIALIZED"), (n.LOADING = "LOADING"), (n.LOADED = "LOADED"), (n.ERROR = "ERROR"), n);
let el = ee.INITIALIZED,
    et = new Set();
class en extends c.Ay.Store {
    static displayName = "DeveloperApplicationsStore";
    getFetchState() {
        return el;
    }
    isDeveloperOfApplication(e) {
        return null != e && et.has(e);
    }
}
let es = new en(K.h, {
    LOGOUT: function () {
        ((el = ee.INITIALIZED), (et = new Set()));
    },
    DEVELOPER_APPLICATIONS_FETCH_START() {
        el = ee.LOADING;
    },
    DEVELOPER_APPLICATIONS_FETCH_SUCCESS: function (e) {
        let { applicationIds: l } = e;
        ((el = ee.LOADED), (et = new Set(l)));
    },
    DEVELOPER_APPLICATIONS_FETCH_FAIL() {
        el = ee.ERROR;
    },
});
var ea = t(793943),
    ei = t(742589),
    er = t(402860),
    eo = t(287809),
    ec = t(147964),
    ed = t(174459),
    eu = t(975571),
    ep = t(371794),
    eI = t(945810);
let eg = (0, eI.mj)({
    name: "2026-09-application-test-mode-quick-access",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var eh = t(676924),
    eA = t(995393),
    eE = t(616633),
    ef = t(518477),
    ex = t(859425);
function em(e) {
    let { content: l, onClick: t, ariaLabel: n, className: a } = e;
    return (0, s.jsx)(w.D, { className: r()(ex.gb, a), onClick: t, "aria-label": n, children: l });
}
function eS(e) {
    var l;
    let t,
        n,
        i,
        { storefront: o, selectedPageIndex: d } = e,
        u = (0, V.M)((0, J.Ay)()),
        I = (0, c.bG)([eo.default], () => eo.default.getCurrentUser()),
        g = (0, k.jM)(),
        { analyticsLocations: f } = (0, A.Ay)(),
        { getSocialLayerStorefrontLink: x } = (0, C.H)(),
        m = o?.applicationId,
        { enabled: S } = eg.useConfig({ location: "SocialLayerStorefrontHeader" }),
        _ =
            ((l = S ? m : null),
            (t = q.Q_.useSetting()),
            (n = (0, c.bG)([es], () => es.getFetchState())),
            (i = (0, c.bG)([es], () => es.isDeveloperOfApplication(l))),
            a.useEffect(() => {
                null != l && t && n === ee.INITIALIZED && X();
            }, [l, t, n]),
            i),
        L = (0, c.bG)([ec.A], () => null != m && ec.A.inTestModeForApplication(m)),
        j = a.useCallback(() => {
            I?.id != null &&
                (0, er.openUserProfileModal)({
                    userId: I.id,
                    tabSection: ef.RP.WISHLIST,
                    sourceAnalyticsLocations: [h.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [I]),
        b = a.useCallback(() => {
            (ed.default.track(Q.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: g?.sessionId,
                cta_type: eA.ST.LEARN_MORE,
                location_stack: f,
            }),
                window.open(eu.A.getArticleURL(Q.MVz.SOCIAL_LAYER_STOREFRONT)));
        }, [g, f]),
        v = a.useCallback(() => {
            null != m &&
                (0, B.q1)(m).then((e) => {
                    null == e
                        ? (0, Y.P0)((0, U.o)(ec.A.error ?? F.intl.string(F.t.SDP0vo), Z.Ck.FAILURE))
                        : (0, ea.nf)(ea.HP.APPLICATION_TEST_MODE_DEBUG, {
                              shouldAutoOpenGameProfile: !1,
                              initialTabId: eE.t.STOREFRONT,
                          });
                });
        }, [m]),
        N = a.useCallback(() => {
            null != x && (0, E.pX)(x(0));
        }, [x]);
    if (null == o) return null;
    let T = null != o.logoAssetId ? (0, ep.YE)(o.applicationId, o.logoAssetId, 128) : null,
        O = null != o.lightThemeLogoAssetId ? (0, ep.YE)(o.applicationId, o.lightThemeLogoAssetId, 128) : null,
        R = null;
    return (
        (R = u ? (T ?? O) : (O ?? T)),
        (0, s.jsxs)(ei.A, {
            disableDoubleClick: !0,
            className: ex.N1,
            children: [
                (0, s.jsxs)(w.D, {
                    onClick: N,
                    className: ex.gn,
                    children: [
                        null != R && (0, s.jsx)("img", { className: ex.wm, src: R, alt: o.title }),
                        (0, s.jsx)(ei.A.Title, { children: o.title }),
                    ],
                }),
                o.pages.length > 1 &&
                    (0, s.jsx)("div", {
                        className: ex.YC,
                        children: o.pages.map((e, l) =>
                            (0, s.jsx)(
                                ei.A.Title,
                                {
                                    onClick: () => {
                                        null != x && (0, E.pX)(x(l));
                                    },
                                    wrapperClassName: ex.oB,
                                    className: r()(ex.xT, { [ex.ys]: d === l }),
                                    children: (0, s.jsx)(p.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${l}`,
                            ),
                        ),
                    }),
                (0, s.jsxs)("div", {
                    className: ex.sZ,
                    children: [
                        (0, s.jsx)(em, {
                            content: (0, s.jsx)($.HeartIcon, { size: "xs", color: "currentColor" }),
                            onClick: j,
                            ariaLabel: F.intl.string(F.t["7lZ31J"]),
                            className: ex.ij,
                        }),
                        (0, s.jsx)(eh.A, {}),
                        (0, s.jsx)(em, {
                            onClick: b,
                            ariaLabel: F.intl.string(F.t.hvVgAZ),
                            content: (0, s.jsx)(p.E, {
                                variant: "text-sm/medium",
                                children: F.intl.string(F.t.hvVgAZ),
                            }),
                            className: ex.AJ,
                        }),
                        _ &&
                            !L &&
                            (0, s.jsx)(em, {
                                onClick: v,
                                ariaLabel: F.intl.string(F.t.QexSCe),
                                content: (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        (0, s.jsx)(W.WrenchIcon, { size: "xs", color: "currentColor" }),
                                        (0, s.jsx)(p.E, {
                                            variant: "text-sm/medium",
                                            children: F.intl.string(F.t.QexSCe),
                                        }),
                                    ],
                                }),
                                className: ex.pL,
                            }),
                    ],
                }),
            ],
        })
    );
}
var e_ = t(689175),
    eL = t(765671);
let ej = (0, eI.mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var eb = t(467884),
    ev = t(352749);
function eN(e) {
    let { leaderboard: l, skuId: t, analyticsLocations: n, analyticsSectionId: i } = e,
        r = a.useMemo(() => ({ pageSection: i }), [i]);
    return null == l
        ? null
        : (0, s.jsx)(k.E9, {
              newValue: r,
              children: (0, s.jsxs)("div", {
                  className: ev.kL,
                  children: [
                      (0, s.jsxs)("div", {
                          className: ev.FS,
                          children: [
                              (0, s.jsx)(u.D, { variant: "display-lg", color: "text-strong", children: l.title }),
                              (0, s.jsx)(p.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: l.description,
                              }),
                          ],
                      }),
                      null != t &&
                          (0, s.jsx)("div", {
                              className: ev.Ui,
                              children: (0, s.jsx)(eb.Ay, {
                                  positionInSection: 0,
                                  skuId: t,
                                  variant: eb.s6.MEDIUM,
                                  analyticsLocations: n,
                              }),
                          }),
                  ],
              }),
          });
}
var ek = t(199023);
function eC(e) {
    let { applicationId: l, backgroundImageAssetId: t } = e,
        n = null != t ? (0, ep.YE)(l, t, 1024, v.pV) : null;
    return (0, s.jsx)("div", {
        className: ek._,
        children: null != n ? (0, s.jsx)("div", { className: ek.i, style: { backgroundImage: `url(${n})` } }) : null,
    });
}
var eT = t(962299),
    eO = t(504082);
function eR(e) {
    let { className: l, skuIds: t, variant: n = eb.s6.SMALL, analyticsLocations: a } = e;
    return null == t || 0 === t.length
        ? null
        : (0, s.jsx)("div", {
              className: r()(l, eO.kL, eO.$2, { [eO.Wc]: n === eb.s6.MEDIUM }),
              children: t.map((e, l) =>
                  (0, s.jsx)(eb.Ay, { positionInSection: l, skuId: e, variant: n, analyticsLocations: a }, `${e}-${l}`),
              ),
          });
}
var ey = t(534125);
function eD(e) {
    let { analyticsSectionId: l, sectionTitle: t, skuIds: n, variant: i = eb.s6.SMALL } = e,
        r = a.useMemo(() => ({ pageSection: l, pageSectionTitle: t }), [l, t]);
    if (null == n || 0 === n.length) return null;
    let o = null != t && t.length > 0;
    return (0, s.jsx)(k.E9, {
        newValue: r,
        children: (0, s.jsxs)("div", {
            className: ey.hd,
            children: [
                o &&
                    (0, s.jsx)(u.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        className: ey.Gf,
                        children: t,
                    }),
                (0, s.jsx)(eR, { className: o ? ey.EM : void 0, skuIds: n, variant: i }),
            ],
        }),
    });
}
var eP = t(59520);
function eM(e, l, t, n) {
    let { scrollTop: s = 0, scrollOffset: a = 0, scrollHeight: i = 0, scrollWidth: r = 0 } = n;
    if (i > 0) {
        let n = (s + a) / i;
        if (n > 0) {
            let {
                sessionId: s,
                guildId: a,
                applicationId: o,
                pageIndex: c,
                pageTitle: d,
                isUserGuildMember: u,
                pageHasLeaderboard: p,
            } = l;
            ed.default.track(e, {
                slayer_storefront_session_id: s,
                guild_id: a,
                application_id: o,
                page_index: c,
                page_title: d,
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
var eF = t(167551);
function eH(e) {
    let l,
        t,
        { applicationId: n, page: i } = e,
        { ref: r, width: o } = (0, eL.Ay)(),
        c = (0, k.jM)(),
        { analyticsLocations: d } = (0, A.Ay)(),
        u = a.useRef(null),
        { handleScroll: p } =
            ((l = a.useRef(c)),
            a.useEffect(() => {
                l.current = c;
            }, [c]),
            (t = (0, eP.I)(eM, 5e3, [], { trailing: !0 })),
            {
                handleScroll: a.useCallback(() => {
                    if (null != u.current) {
                        let e = u.current.getScrollerNode(),
                            n = l.current;
                        null != e &&
                            t(Q.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, n, d, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [t, d, u]),
            }),
        I = (function (e) {
            let { location: l } = e;
            return ej.useConfig({ location: l }).enabled;
        })({ location: "SocialLayerStorefrontPage" }),
        [g, h] = a.useMemo(() => {
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
        E = 1 === g.length && null != o && o >= 834 && !I;
    return (a.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: s, isUserGuildMember: a, pageHasLeaderboard: i } = c;
        ed.default.track(Q.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            application_id: n,
            page_index: t,
            page_title: s,
            is_user_guild_member: a,
            page_has_leaderboard: i,
            location_stack: d,
        });
    }, [c, n, d]),
    null == i)
        ? null
        : (0, s.jsxs)(e_.Ch, {
              ref: u,
              onScroll: p,
              children: [
                  (0, s.jsx)(eT.M, { applicationId: n, analyticsLocations: d }),
                  (0, s.jsxs)("section", {
                      ref: r,
                      className: eF.k,
                      children: [
                          (0, s.jsx)(eC, {
                              applicationId: n,
                              backgroundImageAssetId: i.leaderboard?.backgroundImageAssetId,
                          }),
                          !I &&
                              (0, s.jsx)(eN, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: i.leaderboard,
                                  skuId: E ? g[0] : void 0,
                                  analyticsLocations: d,
                              }),
                          (0, s.jsx)(eD, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: E ? void 0 : g,
                              variant: eb.s6.MEDIUM,
                          }),
                          (0, s.jsx)(eD, { analyticsSectionId: "non-featured-top-section", skuIds: h }),
                          i.sections?.map((e, l) =>
                              (0, s.jsx)(
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
var eG = t(537067);
let ew = 10 * j.A.Millis.SECOND;
function eV(e) {
    let { storefront: l, guildId: t, selectedPageIndex: n, selectedSku: i } = e,
        r = (0, k.jM)(),
        { renderHeader: o, getSocialLayerStorefrontLink: c } = (0, C.H)(),
        d = a.useRef(r);
    a.useEffect(() => {
        d.current = r;
    }, [r]);
    let u = a.useCallback(() => {
            null != c && (0, E.bG)(c(0));
        }, [c]),
        p = i?.id;
    return (
        a.useEffect(() => {
            if (null != p)
                return (
                    (0, R.R)({
                        customNavigateToSocialLayerStorefront: u,
                        skuId: p,
                        applicationId: l.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [h.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: d.current,
                        onClose: () => {
                            let { pathname: e, search: s } = (0, E.JK)().location;
                            (0, v.rG)(e, s, l.applicationId, t) && null != c && (0, E.bG)(c(n));
                        },
                    }),
                    () => {
                        (0, R.j)();
                    }
                );
        }, [t, n, p, l.applicationId, c, u]),
        (0, s.jsxs)("div", {
            className: eG.kL,
            children: [o?.(n, l), (0, s.jsx)(eH, { applicationId: l.applicationId, page: l.pages[n] })],
        })
    );
}
function eY(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: n, gameShopSkuId: i } = l.params,
        r = (0, c.bG)([m.default], () => m.default.getSessionId(), []),
        o = a.useCallback((e, l, n) => Q.BVt.CHANNELS_GAME_SHOP(t, e ?? 0, l, n), [t]),
        d = (0, v.nY)(t),
        u = a.useCallback((e, l) => (0, s.jsx)(eS, { storefront: l, selectedPageIndex: e }), []);
    return (
        a.useEffect(() => {
            null == t || null == r || (null == _.A.getGuild(t) && (0, b.Z2)(t, {}, { shouldNavigate: !1 }));
        }, [t, r]),
        (0, s.jsx)(eZ, {
            applicationId: d,
            guildId: t,
            skuId: i,
            pageIndex: null != n ? parseInt(n, 10) : void 0,
            analyticsPlacement: k.Ye.SLAYER_SERVER_SHOP,
            renderHeader: u,
            getSocialLayerStorefrontLink: o,
        })
    );
}
function eU() {
    let [e, l] = a.useState(!1);
    return ((0, g.A)(() => l(!0), ew), e)
        ? (0, s.jsx)("div", { className: eG.kL, children: (0, s.jsx)(G, {}) })
        : (0, s.jsx)("div", { className: r()(eG.u1, eG.kL), children: (0, s.jsx)(d.y, {}) });
}
function eZ(e) {
    let {
            applicationId: l,
            guildId: t,
            skuId: n,
            pageIndex: i = 0,
            analyticsPlacement: g,
            renderHeader: E,
            getSocialLayerStorefrontLink: _,
        } = e,
        { analyticsLocations: j } = (0, A.Ay)(h.A.SOCIAL_LAYER_STOREFRONT),
        b = (0, T.A)({ applicationId: l, guildId: t }),
        v = b?.storefront ?? null,
        R = (0, O.A)({ applicationId: l }),
        y = R.effectiveStorefront ?? v,
        D = (0, c.bG)([L.A], () => L.A.get(n), [n]);
    ((0, x.pE)(), (0, f.x)({ applicationId: b?.storefront?.applicationId }));
    let P = (0, I.A)((0, o.A)()),
        H = (0, c.bG)([S.Ay, m.default], () => S.Ay.isMember(t, m.default.getId())),
        G = a.useMemo(() => (null == i || isNaN(i) || (null != y && i >= y.pages.length) ? 0 : i), [i, y]),
        w = y?.pages[G]?.title ?? null,
        V = y?.pages[G]?.leaderboard != null,
        Y = a.useMemo(
            () => ({
                placement: g,
                sessionId: P,
                guildId: t,
                applicationId: l,
                pageIndex: G,
                pageTitle: w,
                isUserGuildMember: H,
                pageHasLeaderboard: V,
            }),
            [g, P, t, l, G, w, H, V],
        );
    return (a.useEffect(() => {
        null != l && (0, N.SP)(l, G, null != n ? n : null);
    }, [l, G, n]),
    null == l || b?.storefront == null)
        ? null != b && "loading" !== b.state
            ? (0, s.jsxs)("div", {
                  className: r()(eG.p$, eG.kL),
                  children: [
                      (0, s.jsx)(u.D, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: F.intl.string(M.default.OvBwPV),
                      }),
                      (0, s.jsx)(p.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: F.intl.string(M.default["Sy7D+/"]),
                      }),
                  ],
              })
            : R.isTestMode
              ? (0, s.jsx)(eU, {}, l)
              : (0, s.jsx)("div", { className: r()(eG.u1, eG.kL), children: (0, s.jsx)(d.y, {}) })
        : (0, s.jsx)(A.f5, {
              value: j,
              children: (0, s.jsx)(C.J, {
                  renderHeader: E,
                  getSocialLayerStorefrontLink: _,
                  children: (0, s.jsx)(k.E9, {
                      newValue: Y,
                      children: (0, s.jsx)(eV, {
                          storefront: y ?? b.storefront,
                          guildId: t,
                          selectedPageIndex: G,
                          selectedSku: D,
                      }),
                  }),
              }),
          });
}
