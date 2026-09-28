(t.r(l), t.d(l, { SocialLayerStorefrontInnerWrapper: () => eB, default: () => e$ }));
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
    A = t(793574),
    E = t(688810),
    h = t(976860),
    f = t(435658),
    x = t(594832),
    S = t(280450),
    m = t(696451),
    _ = t(71393),
    L = t(67480),
    j = t(927813),
    b = t(449054),
    C = t(871123),
    N = t(733391),
    k = t(439303),
    v = t(353281),
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
    M = t(206285),
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
var w = t(696292),
    V = t(939249),
    Y = t(366010),
    U = t(691540),
    Z = t(857250),
    $ = t(97483),
    W = t(926268),
    B = t(346411),
    q = t(271866),
    J = t(736653),
    z = t(885386),
    K = t(636537),
    Q = t(228366),
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
class es extends c.Ay.Store {
    static displayName = "DeveloperApplicationsStore";
    getFetchState() {
        return et;
    }
    isDeveloperOfApplication(e) {
        return null != e && en.has(e);
    }
}
let ea = new es(Q.h, {
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
    eo = t(617986),
    ec = t(402860),
    ed = t(70926),
    eu = t(287809),
    ep = t(147964),
    eI = t(174459),
    eg = t(975571),
    eA = t(371794),
    eE = t(945810);
let eh = (0, eE.mj)({
    name: "2026-09-application-test-mode-quick-access",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ef = t(995393),
    ex = t(616633),
    eS = t(518477),
    em = t(859425);
function e_(e) {
    let { content: l, onClick: t, ariaLabel: n, className: a } = e;
    return (0, s.jsx)(V.D, { className: r()(em.gb, a), onClick: t, "aria-label": n, children: l });
}
function eL() {
    let e = a.useCallback(() => {
        (0, eo.mA)({ fromContent: w.u.ORBS_BALANCE_MENU });
    }, []);
    return (0, s.jsx)(ed.SS, {
        cardAlignment: ed.SS.CardAlignment.END,
        ctaText: F.intl.string(F.t.VC4Mq0),
        ctaOnClick: e,
    });
}
function ej(e) {
    var l;
    let t,
        n,
        i,
        { storefront: o, selectedPageIndex: d } = e,
        u = (0, Y.M)((0, J.Ay)()),
        I = (0, c.bG)([eu.default], () => eu.default.getCurrentUser()),
        g = (0, k.jM)(),
        { analyticsLocations: f } = (0, E.Ay)(),
        { getSocialLayerStorefrontLink: x } = (0, v.H)(),
        S = o?.applicationId,
        { enabled: m } = eh.useConfig({ location: "SocialLayerStorefrontHeader" }),
        _ =
            ((l = m ? S : null),
            (t = z.Q_.useSetting()),
            (n = (0, c.bG)([ea], () => ea.getFetchState())),
            (i = (0, c.bG)([ea], () => ea.isDeveloperOfApplication(l))),
            a.useEffect(() => {
                null != l && t && n === el.INITIALIZED && ee();
            }, [l, t, n]),
            i),
        L = (0, c.bG)([ep.A], () => null != S && ep.A.inTestModeForApplication(S)),
        j = a.useCallback(() => {
            I?.id != null &&
                (0, ec.openUserProfileModal)({
                    userId: I.id,
                    tabSection: eS.RP.WISHLIST,
                    sourceAnalyticsLocations: [A.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [I]),
        b = a.useCallback(() => {
            (eI.default.track(X.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: g?.sessionId,
                cta_type: ef.ST.LEARN_MORE,
                location_stack: f,
            }),
                window.open(eg.A.getArticleURL(X.MVz.SOCIAL_LAYER_STOREFRONT)));
        }, [g, f]),
        C = a.useCallback(() => {
            null != S &&
                (0, q.q1)(S).then((e) => {
                    null == e
                        ? (0, U.P0)((0, Z.o)(ep.A.error ?? F.intl.string(F.t.SDP0vo), $.Ck.FAILURE))
                        : (0, ei.nf)(ei.HP.APPLICATION_TEST_MODE_DEBUG, {
                              shouldAutoOpenGameProfile: !1,
                              initialTabId: ex.t.STOREFRONT,
                          });
                });
        }, [S]),
        N = a.useCallback(() => {
            null != x && (0, h.pX)(x(0));
        }, [x]);
    if (null == o) return null;
    let T = null != o.logoAssetId ? (0, eA.YE)(o.applicationId, o.logoAssetId, 128) : null,
        O = null != o.lightThemeLogoAssetId ? (0, eA.YE)(o.applicationId, o.lightThemeLogoAssetId, 128) : null,
        R = null;
    return (
        (R = u ? (T ?? O) : (O ?? T)),
        (0, s.jsxs)(er.A, {
            disableDoubleClick: !0,
            className: em.N1,
            children: [
                (0, s.jsxs)(V.D, {
                    onClick: N,
                    className: em.gn,
                    children: [
                        null != R && (0, s.jsx)("img", { className: em.wm, src: R, alt: o.title }),
                        (0, s.jsx)(er.A.Title, { children: o.title }),
                    ],
                }),
                o.pages.length > 1 &&
                    (0, s.jsx)("div", {
                        className: em.YC,
                        children: o.pages.map((e, l) =>
                            (0, s.jsx)(
                                er.A.Title,
                                {
                                    onClick: () => {
                                        null != x && (0, h.pX)(x(l));
                                    },
                                    wrapperClassName: em.oB,
                                    className: r()(em.xT, { [em.ys]: d === l }),
                                    children: (0, s.jsx)(p.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${l}`,
                            ),
                        ),
                    }),
                (0, s.jsxs)("div", {
                    className: em.sZ,
                    children: [
                        (0, s.jsx)(e_, {
                            content: (0, s.jsx)(W.HeartIcon, { size: "xs", color: "currentColor" }),
                            onClick: j,
                            ariaLabel: F.intl.string(F.t["7lZ31J"]),
                            className: em.ij,
                        }),
                        (0, s.jsx)(eL, {}),
                        (0, s.jsx)(e_, {
                            onClick: b,
                            ariaLabel: F.intl.string(F.t.hvVgAZ),
                            content: (0, s.jsx)(p.E, {
                                variant: "text-sm/medium",
                                children: F.intl.string(F.t.hvVgAZ),
                            }),
                            className: em.AJ,
                        }),
                        _ &&
                            !L &&
                            (0, s.jsx)(e_, {
                                onClick: C,
                                ariaLabel: F.intl.string(F.t.QexSCe),
                                content: (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        (0, s.jsx)(B.WrenchIcon, { size: "xs", color: "currentColor" }),
                                        (0, s.jsx)(p.E, {
                                            variant: "text-sm/medium",
                                            children: F.intl.string(F.t.QexSCe),
                                        }),
                                    ],
                                }),
                                className: em.pL,
                            }),
                    ],
                }),
            ],
        })
    );
}
var eb = t(689175),
    eC = t(765671);
let eN = (0, eE.mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ek = t(467884),
    ev = t(352749);
function eT(e) {
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
                              children: (0, s.jsx)(ek.Ay, {
                                  positionInSection: 0,
                                  skuId: t,
                                  variant: ek.s6.MEDIUM,
                                  analyticsLocations: n,
                              }),
                          }),
                  ],
              }),
          });
}
var eO = t(199023);
function eR(e) {
    let { applicationId: l, backgroundImageAssetId: t } = e,
        n = null != t ? (0, eA.YE)(l, t, 1024, C.pV) : null;
    return (0, s.jsx)("div", {
        className: eO._,
        children: null != n ? (0, s.jsx)("div", { className: eO.i, style: { backgroundImage: `url(${n})` } }) : null,
    });
}
var ey = t(259745),
    eD = t(504082);
function eP(e) {
    let { className: l, skuIds: t, variant: n = ek.s6.SMALL, analyticsLocations: a } = e;
    return null == t || 0 === t.length
        ? null
        : (0, s.jsx)("div", {
              className: r()(l, eD.kL, eD.$2, { [eD.Wc]: n === ek.s6.MEDIUM }),
              children: t.map((e, l) =>
                  (0, s.jsx)(ek.Ay, { positionInSection: l, skuId: e, variant: n, analyticsLocations: a }, `${e}-${l}`),
              ),
          });
}
var eM = t(534125);
function eF(e) {
    let { analyticsSectionId: l, sectionTitle: t, skuIds: n, variant: i = ek.s6.SMALL } = e,
        r = a.useMemo(() => ({ pageSection: l, pageSectionTitle: t }), [l, t]);
    if (null == n || 0 === n.length) return null;
    let o = null != t && t.length > 0;
    return (0, s.jsx)(k.E9, {
        newValue: r,
        children: (0, s.jsxs)("div", {
            className: eM.hd,
            children: [
                o &&
                    (0, s.jsx)(u.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        className: eM.Gf,
                        children: t,
                    }),
                (0, s.jsx)(eP, { className: o ? eM.EM : void 0, skuIds: n, variant: i }),
            ],
        }),
    });
}
var eH = t(59520);
function eG(e, l, t, n) {
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
            eI.default.track(e, {
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
var ew = t(167551);
function eV(e) {
    let l,
        t,
        { applicationId: n, page: i } = e,
        { ref: r, width: o } = (0, eC.Ay)(),
        c = (0, k.jM)(),
        { analyticsLocations: d } = (0, E.Ay)(),
        u = a.useRef(null),
        { handleScroll: p } =
            ((l = a.useRef(c)),
            a.useEffect(() => {
                l.current = c;
            }, [c]),
            (t = (0, eH.I)(eG, 5e3, [], { trailing: !0 })),
            {
                handleScroll: a.useCallback(() => {
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
        I = (function (e) {
            let { location: l } = e;
            return eN.useConfig({ location: l }).enabled;
        })({ location: "SocialLayerStorefrontPage" }),
        [g, A] = a.useMemo(() => {
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
        h = 1 === g.length && null != o && o >= 834 && !I;
    return (a.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: s, isUserGuildMember: a, pageHasLeaderboard: i } = c;
        eI.default.track(X.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
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
        : (0, s.jsxs)(eb.Ch, {
              ref: u,
              onScroll: p,
              children: [
                  (0, s.jsx)(ey.M, { applicationId: n, analyticsLocations: d }),
                  (0, s.jsxs)("section", {
                      ref: r,
                      className: ew.k,
                      children: [
                          (0, s.jsx)(eR, {
                              applicationId: n,
                              backgroundImageAssetId: i.leaderboard?.backgroundImageAssetId,
                          }),
                          !I &&
                              (0, s.jsx)(eT, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: i.leaderboard,
                                  skuId: h ? g[0] : void 0,
                                  analyticsLocations: d,
                              }),
                          (0, s.jsx)(eF, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: h ? void 0 : g,
                              variant: ek.s6.MEDIUM,
                          }),
                          (0, s.jsx)(eF, { analyticsSectionId: "non-featured-top-section", skuIds: A }),
                          i.sections?.map((e, l) =>
                              (0, s.jsx)(
                                  eF,
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
var eY = t(537067);
let eU = 10 * j.A.Millis.SECOND;
function eZ(e) {
    let { storefront: l, guildId: t, selectedPageIndex: n, selectedSku: i } = e,
        r = (0, k.jM)(),
        { renderHeader: o, getSocialLayerStorefrontLink: c } = (0, v.H)(),
        d = a.useRef(r);
    a.useEffect(() => {
        d.current = r;
    }, [r]);
    let u = a.useCallback(() => {
            null != c && (0, h.bG)(c(0));
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
                        analyticsLocations: [A.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: d.current,
                        onClose: () => {
                            let { pathname: e, search: s } = (0, h.JK)().location;
                            (0, C.rG)(e, s, l.applicationId, t) && null != c && (0, h.bG)(c(n));
                        },
                    }),
                    () => {
                        (0, R.j)();
                    }
                );
        }, [t, n, p, l.applicationId, c, u]),
        (0, s.jsxs)("div", {
            className: eY.kL,
            children: [o?.(n, l), (0, s.jsx)(eV, { applicationId: l.applicationId, page: l.pages[n] })],
        })
    );
}
function e$(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: n, gameShopSkuId: i } = l.params,
        r = (0, c.bG)([S.default], () => S.default.getSessionId(), []),
        o = a.useCallback((e, l, n) => X.BVt.CHANNELS_GAME_SHOP(t, e ?? 0, l, n), [t]),
        d = (0, C.nY)(t),
        u = a.useCallback((e, l) => (0, s.jsx)(ej, { storefront: l, selectedPageIndex: e }), []);
    return (
        a.useEffect(() => {
            null == t || null == r || (null == _.A.getGuild(t) && (0, b.Z2)(t, {}, { shouldNavigate: !1 }));
        }, [t, r]),
        (0, s.jsx)(eB, {
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
function eW() {
    let [e, l] = a.useState(!1);
    return ((0, g.A)(() => l(!0), eU), e)
        ? (0, s.jsx)("div", { className: eY.kL, children: (0, s.jsx)(G, {}) })
        : (0, s.jsx)("div", { className: r()(eY.u1, eY.kL), children: (0, s.jsx)(d.y, {}) });
}
function eB(e) {
    let {
            applicationId: l,
            guildId: t,
            skuId: n,
            pageIndex: i = 0,
            analyticsPlacement: g,
            renderHeader: h,
            getSocialLayerStorefrontLink: _,
        } = e,
        { analyticsLocations: j } = (0, E.Ay)(A.A.SOCIAL_LAYER_STOREFRONT),
        b = (0, T.A)({ applicationId: l, guildId: t }),
        C = b?.storefront ?? null,
        R = (0, O.A)({ applicationId: l }),
        y = R.effectiveStorefront ?? C,
        D = (0, c.bG)([L.A], () => L.A.get(n), [n]);
    ((0, x.pE)(), (0, f.x)({ applicationId: b?.storefront?.applicationId }));
    let P = (0, I.A)((0, o.A)()),
        H = (0, c.bG)([m.Ay, S.default], () => m.Ay.isMember(t, S.default.getId())),
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
                  className: r()(eY.p$, eY.kL),
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
              ? (0, s.jsx)(eW, {}, l)
              : (0, s.jsx)("div", { className: r()(eY.u1, eY.kL), children: (0, s.jsx)(d.y, {}) })
        : (0, s.jsx)(E.f5, {
              value: j,
              children: (0, s.jsx)(v.J, {
                  renderHeader: h,
                  getSocialLayerStorefrontLink: _,
                  children: (0, s.jsx)(k.E9, {
                      newValue: Y,
                      children: (0, s.jsx)(eZ, {
                          storefront: y ?? b.storefront,
                          guildId: t,
                          selectedPageIndex: G,
                          selectedSku: D,
                      }),
                  }),
              }),
          });
}
