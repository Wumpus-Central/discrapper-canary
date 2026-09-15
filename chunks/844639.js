(t.r(l), t.d(l, { SocialLayerStorefrontInnerWrapper: () => e$, default: () => eV }));
var n = t(477900),
    s = t(582128),
    i = t(503698),
    a = t.n(i),
    r = t(132500),
    o = t(17928),
    d = t(289873),
    c = t(297264),
    u = t(834730),
    f = t(444927),
    g = t(220839),
    x = t(793574),
    p = t(688810),
    m = t(976860),
    h = t(435658),
    I = t(594832),
    j = t(280450),
    S = t(696451),
    A = t(71393),
    v = t(67480),
    b = t(927813),
    k = t(449054),
    E = t(871123),
    _ = t(733391),
    N = t(439303),
    C = t(353281),
    L = t(429635),
    y = t(977445),
    M = t(832163);
let T = [];
function R(e) {
    let l = (0, y.uS)(e ?? void 0),
        t = (0, o.bG)(
            [M.A],
            () => (null == e ? null : (M.A.getStorefrontDataForApplicationId(e)?.storefront ?? null)),
            [e],
        ),
        n = (0, o.bG)([M.A], () => (null != e ? M.A.getStorefrontEntries(e) : void 0), [e]),
        s = (0, o.bG)([M.A], () => (null != e ? M.A.getPreviewStorefrontId(e) : null), [e]),
        i = t?.id ?? null;
    return l
        ? {
              isTestMode: l,
              entries: n?.state === "fetched" ? n.entries : T,
              selectedStorefrontId: s ?? i,
              liveStorefrontId: i,
              liveStorefront: t,
          }
        : { isTestMode: !1, entries: T, selectedStorefrontId: i, liveStorefrontId: i, liveStorefront: t };
}
var O = t(317560);
function D(e) {
    let { alt: l, ariaLabel: t, ariaHidden: s, role: i, width: a = 288, height: r = 162 } = e;
    return (0, n.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/0ebc111b10e8d33bd2e363de426d3214a0efde115bc844528d489277e592c316.svg",
        alt: l,
        "aria-label": t,
        "aria-hidden": s,
        role: i ?? "img",
    });
}
var w = t(28863),
    G = t(188275),
    P = t(621547),
    H = t(375708),
    Y = t(771442);
function V() {
    return (0, n.jsxs)("div", {
        className: Y.p,
        children: [
            (0, n.jsx)("div", {
                className: Y.b,
                children: (0, n.jsx)(D, { alt: "", ariaHidden: !0, role: "presentation" }),
            }),
            (0, n.jsx)(c.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: H.intl.string(P.default["0XMNl5"]),
            }),
            (0, n.jsxs)(u.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: [H.intl.string(P.default.NZbasC), (0, n.jsx)("br", {}), H.intl.string(P.default.Tc8sxG)],
            }),
            (0, n.jsx)(u.E, {
                variant: "text-md/medium",
                children: (0, n.jsx)(w.Anchor, { href: G.uy, children: H.intl.string(P.default.KPCFC9) }),
            }),
        ],
    });
}
var F = t(696292),
    $ = t(939249),
    W = t(366010),
    Z = t(926268),
    U = t(736653),
    B = t(742589),
    J = t(617986),
    X = t(402860),
    z = t(70926),
    K = t(287809),
    q = t(174459),
    Q = t(975571),
    ee = t(371794),
    el = t(995393),
    et = t(652215),
    en = t(518477),
    es = t(859425);
function ei(e) {
    let { content: l, onClick: t, ariaLabel: s, className: i } = e;
    return (0, n.jsx)($.D, { className: a()(es.gb, i), onClick: t, "aria-label": s, children: l });
}
function ea() {
    let e = s.useCallback(() => {
        (0, J.mA)({ fromContent: F.u.ORBS_BALANCE_MENU });
    }, []);
    return (0, n.jsx)(z.SS, {
        cardAlignment: z.SS.CardAlignment.END,
        ctaText: H.intl.string(H.t.VC4Mq0),
        ctaOnClick: e,
    });
}
function er(e) {
    let { storefront: l, selectedPageIndex: t } = e,
        i = (0, W.M)((0, U.Ay)()),
        r = (0, o.bG)([K.default], () => K.default.getCurrentUser()),
        d = (0, N.jM)(),
        { analyticsLocations: c } = (0, p.Ay)(),
        { getSocialLayerStorefrontLink: f } = (0, C.H)(),
        g = s.useCallback(() => {
            r?.id != null &&
                (0, X.openUserProfileModal)({
                    userId: r.id,
                    tabSection: en.RP.WISHLIST,
                    sourceAnalyticsLocations: [x.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [r]),
        h = s.useCallback(() => {
            (q.default.track(et.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: d?.sessionId,
                cta_type: el.ST.LEARN_MORE,
                location_stack: c,
            }),
                window.open(Q.A.getArticleURL(et.MVz.SOCIAL_LAYER_STOREFRONT)));
        }, [d, c]),
        I = s.useCallback(() => {
            null != f && (0, m.pX)(f(0));
        }, [f]);
    if (null == l) return null;
    let j = null != l.logoAssetId ? (0, ee.YE)(l.applicationId, l.logoAssetId, 128) : null,
        S = null != l.lightThemeLogoAssetId ? (0, ee.YE)(l.applicationId, l.lightThemeLogoAssetId, 128) : null,
        A = null;
    return (
        (A = i ? (j ?? S) : (S ?? j)),
        (0, n.jsxs)(B.A, {
            disableDoubleClick: !0,
            className: es.N1,
            children: [
                (0, n.jsxs)($.D, {
                    onClick: I,
                    className: es.gn,
                    children: [
                        null != A && (0, n.jsx)("img", { className: es.wm, src: A, alt: l.title }),
                        (0, n.jsx)(B.A.Title, { children: l.title }),
                    ],
                }),
                l.pages.length > 1 &&
                    (0, n.jsx)("div", {
                        className: es.YC,
                        children: l.pages.map((e, l) =>
                            (0, n.jsx)(
                                B.A.Title,
                                {
                                    onClick: () => {
                                        null != f && (0, m.pX)(f(l));
                                    },
                                    wrapperClassName: es.oB,
                                    className: a()(es.xT, { [es.ys]: t === l }),
                                    children: (0, n.jsx)(u.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${l}`,
                            ),
                        ),
                    }),
                (0, n.jsxs)("div", {
                    className: es.sZ,
                    children: [
                        (0, n.jsx)(ei, {
                            content: (0, n.jsx)(Z.HeartIcon, { size: "xs", color: "currentColor" }),
                            onClick: g,
                            ariaLabel: H.intl.string(H.t["7lZ31J"]),
                            className: es.ij,
                        }),
                        (0, n.jsx)(ea, {}),
                        (0, n.jsx)(ei, {
                            onClick: h,
                            ariaLabel: H.intl.string(H.t.hvVgAZ),
                            content: (0, n.jsx)(u.E, {
                                variant: "text-sm/medium",
                                children: H.intl.string(H.t.hvVgAZ),
                            }),
                            className: es.AJ,
                        }),
                    ],
                }),
            ],
        })
    );
}
var eo = t(689175),
    ed = t(765671);
let ec = (0, t(945810).mj)({
    name: "2026-05-slayer-storefront-hide-leaderboard",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var eu = t(467884),
    ef = t(352749);
function eg(e) {
    let { leaderboard: l, skuId: t, analyticsLocations: i, analyticsSectionId: a } = e,
        r = s.useMemo(() => ({ pageSection: a }), [a]);
    return null == l
        ? null
        : (0, n.jsx)(N.E9, {
              newValue: r,
              children: (0, n.jsxs)("div", {
                  className: ef.kL,
                  children: [
                      (0, n.jsxs)("div", {
                          className: ef.FS,
                          children: [
                              (0, n.jsx)(c.D, { variant: "display-lg", color: "text-strong", children: l.title }),
                              (0, n.jsx)(u.E, {
                                  variant: "text-lg/semibold",
                                  color: "text-subtle",
                                  children: l.description,
                              }),
                          ],
                      }),
                      null != t &&
                          (0, n.jsx)("div", {
                              className: ef.Ui,
                              children: (0, n.jsx)(eu.Ay, {
                                  positionInSection: 0,
                                  skuId: t,
                                  variant: eu.s6.MEDIUM,
                                  analyticsLocations: i,
                              }),
                          }),
                  ],
              }),
          });
}
var ex = t(199023);
function ep(e) {
    let { applicationId: l, backgroundImageAssetId: t } = e,
        s = null != t ? (0, ee.YE)(l, t, 1024, E.pV) : null;
    return (0, n.jsx)("div", {
        className: ex._,
        children: null != s ? (0, n.jsx)("div", { className: ex.i, style: { backgroundImage: `url(${s})` } }) : null,
    });
}
var em = t(259745),
    eh = t(504082);
function eI(e) {
    let { className: l, skuIds: t, variant: s = eu.s6.SMALL, analyticsLocations: i } = e;
    return null == t || 0 === t.length
        ? null
        : (0, n.jsx)("div", {
              className: a()(l, eh.kL, eh.$2, { [eh.Wc]: s === eu.s6.MEDIUM }),
              children: t.map((e, l) =>
                  (0, n.jsx)(eu.Ay, { positionInSection: l, skuId: e, variant: s, analyticsLocations: i }, `${e}-${l}`),
              ),
          });
}
var ej = t(534125);
function eS(e) {
    let { analyticsSectionId: l, sectionTitle: t, skuIds: i, variant: a = eu.s6.SMALL } = e,
        r = s.useMemo(() => ({ pageSection: l, pageSectionTitle: t }), [l, t]);
    if (null == i || 0 === i.length) return null;
    let o = null != t && t.length > 0;
    return (0, n.jsx)(N.E9, {
        newValue: r,
        children: (0, n.jsxs)("div", {
            className: ej.hd,
            children: [
                o &&
                    (0, n.jsx)(c.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        className: ej.Gf,
                        children: t,
                    }),
                (0, n.jsx)(eI, { className: o ? ej.EM : void 0, skuIds: i, variant: a }),
            ],
        }),
    });
}
var eA = t(59520);
function ev(e, l, t, n) {
    let { scrollTop: s = 0, scrollOffset: i = 0, scrollHeight: a = 0, scrollWidth: r = 0 } = n;
    if (a > 0) {
        let n = (s + i) / a;
        if (n > 0) {
            let {
                sessionId: s,
                guildId: i,
                applicationId: o,
                pageIndex: d,
                pageTitle: c,
                isUserGuildMember: u,
                pageHasLeaderboard: f,
            } = l;
            q.default.track(e, {
                slayer_storefront_session_id: s,
                guild_id: i,
                application_id: o,
                page_index: d,
                page_title: c,
                is_user_guild_member: u,
                page_has_leaderboard: f,
                scroll_visible_percent: n,
                page_height: Math.round(a),
                page_width: Math.round(r),
                location_stack: t,
            });
        }
    }
}
var eb = t(167551);
function ek(e) {
    let l,
        t,
        { applicationId: i, page: a } = e,
        { ref: r, width: o } = (0, ed.Ay)(),
        d = (0, N.jM)(),
        { analyticsLocations: c } = (0, p.Ay)(),
        u = s.useRef(null),
        { handleScroll: f } =
            ((l = s.useRef(d)),
            s.useEffect(() => {
                l.current = d;
            }, [d]),
            (t = (0, eA.I)(ev, 5e3, [], { trailing: !0 })),
            {
                handleScroll: s.useCallback(() => {
                    if (null != u.current) {
                        let e = u.current.getScrollerNode(),
                            n = l.current;
                        null != e &&
                            t(et.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, n, c, {
                                scrollTop: e.scrollTop,
                                scrollOffset: e.offsetHeight,
                                scrollHeight: e.scrollHeight,
                                scrollWidth: e.scrollWidth,
                            });
                    }
                }, [t, c, u]),
            }),
        g = (function (e) {
            let { location: l } = e;
            return ec.useConfig({ location: l }).enabled;
        })({ location: "SocialLayerStorefrontPage" }),
        [x, m] = s.useMemo(() => {
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
        h = 1 === x.length && null != o && o >= 834 && !g;
    return (s.useEffect(() => {
        let { sessionId: e, guildId: l, pageIndex: t, pageTitle: n, isUserGuildMember: s, pageHasLeaderboard: a } = d;
        q.default.track(et.HAw.SLAYER_STOREFRONT_PAGE_VIEWED, {
            slayer_storefront_session_id: e,
            guild_id: l,
            application_id: i,
            page_index: t,
            page_title: n,
            is_user_guild_member: s,
            page_has_leaderboard: a,
            location_stack: c,
        });
    }, [d, i, c]),
    null == a)
        ? null
        : (0, n.jsxs)(eo.Ch, {
              ref: u,
              onScroll: f,
              children: [
                  (0, n.jsx)(em.M, { applicationId: i, analyticsLocations: c }),
                  (0, n.jsxs)("section", {
                      ref: r,
                      className: eb.k,
                      children: [
                          (0, n.jsx)(ep, {
                              applicationId: i,
                              backgroundImageAssetId: a.leaderboard?.backgroundImageAssetId,
                          }),
                          !g &&
                              (0, n.jsx)(eg, {
                                  analyticsSectionId: "leaderboard",
                                  leaderboard: a.leaderboard,
                                  skuId: h ? x[0] : void 0,
                                  analyticsLocations: c,
                              }),
                          (0, n.jsx)(eS, {
                              analyticsSectionId: "featured-top-section",
                              skuIds: h ? void 0 : x,
                              variant: eu.s6.MEDIUM,
                          }),
                          (0, n.jsx)(eS, { analyticsSectionId: "non-featured-top-section", skuIds: m }),
                          a.sections?.map((e, l) =>
                              (0, n.jsx)(
                                  eS,
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
var eE = t(785562),
    e_ = t(379418),
    eN = t(847374),
    eC = t(980707),
    eL = t(477782),
    ey = t(922016),
    eM = t(741412);
function eT(e) {
    let { entries: l, selectedStorefrontId: t, liveStorefrontId: s, onSelect: i, onClose: a } = e;
    return (0, n.jsx)(eC.W, {
        navId: "social-layer-storefront-entry",
        "aria-label": H.intl.string(P.default.c2I5Ti),
        onClose: a,
        onSelect: a,
        children: (0, n.jsx)(eL.rX, {
            children: l.map((e) => {
                var l;
                let r;
                return (0, n.jsx)(
                    eL.iD,
                    {
                        id: e.id,
                        group: "social-layer-storefront-entry",
                        checked: e.id === t,
                        action: () => {
                            (i(e.id), a());
                        },
                        label:
                            ((l = e.id === s),
                            (r = "" !== e.title ? e.title : H.intl.string(P.default.OvBwPV)),
                            l
                                ? H.intl.formatToPlainString(P.default.eF1VJh, { title: r })
                                : null == e.publishedAt
                                  ? H.intl.formatToPlainString(P.default.dX2mQt, { title: r })
                                  : r),
                    },
                    e.id,
                );
            }),
        }),
    });
}
function eR(e) {
    let { triggerRef: l, isOpen: t, onToggle: s, children: i } = e;
    return (0, n.jsx)("div", {
        className: eM.I,
        ref: l,
        children: (0, n.jsxs)($.D, {
            className: eM.h,
            onClick: s,
            "aria-expanded": t,
            "aria-haspopup": "menu",
            children: [i, (0, n.jsx)(eN.a, { size: "xs", color: "currentColor" })],
        }),
    });
}
function eO(e) {
    let { applicationId: l, children: t } = e,
        { entries: i, selectedStorefrontId: a, liveStorefrontId: r } = R(l),
        [o, d] = s.useState(!1),
        c = s.useRef(null),
        u = s.useCallback(() => d(!1), []),
        f = s.useCallback(() => d((e) => !e), []),
        g = s.useCallback((e) => (0, _.ZR)(l, e === r ? null : e), [l, r]);
    return (0, n.jsx)(ey.Y, {
        targetElementRef: c,
        shouldShow: o,
        animation: ey.Y.Animation.FADE,
        position: "bottom",
        align: "center",
        spacing: 8,
        onRequestClose: u,
        renderPopout: () =>
            (0, n.jsx)(eT, { entries: i, selectedStorefrontId: a, liveStorefrontId: r, onSelect: g, onClose: u }),
        children: () => (0, n.jsx)(eR, { triggerRef: c, isOpen: o, onToggle: f, children: t }),
    });
}
var eD = t(664267);
function ew(e) {
    let l = (0, e_.WA)({ timestamp: String(Math.floor(e.getTime() / 1e3)), format: "R" });
    return null != l ? (0, n.jsx)(eE.A, { node: l }) : null;
}
function eG(e) {
    let l,
        { storefront: t, isLive: i } = e,
        { publishedAt: a, applicationId: r } = t,
        { entries: o } = R(r),
        [d] = s.useState(() => Date.now());
    l =
        null == a
            ? H.intl.string(P.default.Id33AH)
            : a.getTime() > d
              ? H.intl.format(P.default.WOZod0, { timestamp: ew(a) })
              : i
                ? H.intl.format(P.default.QsHYzr, { timestamp: ew(a) })
                : H.intl.format(P.default["3x/M9Z"], { timestamp: ew(a) });
    let c = (0, n.jsx)(u.E, { variant: "text-md/semibold", color: "text-feedback-warning", children: l });
    return (0, n.jsx)("div", {
        className: eD.v,
        children: o.length > 1 ? (0, n.jsx)(eO, { applicationId: r, children: c }) : c,
    });
}
var eP = t(537067);
let eH = 10 * b.A.Millis.SECOND;
function eY(e) {
    let { storefront: l, guildId: t, selectedPageIndex: i, selectedSku: a, isTestMode: r, isLive: o } = e,
        d = (0, N.jM)(),
        { renderHeader: c, getSocialLayerStorefrontLink: u } = (0, C.H)(),
        f = s.useRef(d);
    s.useEffect(() => {
        f.current = d;
    }, [d]);
    let g = s.useCallback(() => {
            null != u && (0, m.bG)(u(0));
        }, [u]),
        p = a?.id;
    return (
        s.useEffect(() => {
            if (null != p)
                return (
                    (0, O.R)({
                        customNavigateToSocialLayerStorefront: g,
                        skuId: p,
                        applicationId: l.applicationId,
                        isStorefront: !0,
                        analyticsLocations: [x.A.SOCIAL_LAYER_STOREFRONT],
                        analyticsContext: f.current,
                        onClose: () => {
                            let { pathname: e, search: n } = (0, m.JK)().location;
                            (0, E.rG)(e, n, l.applicationId, t) && null != u && (0, m.bG)(u(i));
                        },
                    }),
                    () => {
                        (0, O.j)();
                    }
                );
        }, [t, i, p, l.applicationId, u, g]),
        (0, n.jsxs)("div", {
            className: eP.kL,
            children: [
                c?.(i, l),
                r && (0, n.jsx)(eG, { storefront: l, isLive: o }),
                (0, n.jsx)(ek, { applicationId: l.applicationId, page: l.pages[i] }),
            ],
        })
    );
}
function eV(e) {
    let { match: l } = e,
        { guildId: t, gameShopPageIndex: i, gameShopSkuId: a } = l.params,
        r = (0, o.bG)([j.default], () => j.default.getSessionId(), []),
        d = s.useCallback((e, l, n) => et.BVt.CHANNELS_GAME_SHOP(t, e ?? 0, l, n), [t]),
        c = (0, E.nY)(t),
        u = s.useCallback((e, l) => (0, n.jsx)(er, { storefront: l, selectedPageIndex: e }), []);
    return (
        s.useEffect(() => {
            null == t || null == r || (null == A.A.getGuild(t) && (0, k.Z2)(t, {}, { shouldNavigate: !1 }));
        }, [t, r]),
        (0, n.jsx)(e$, {
            applicationId: c,
            guildId: t,
            skuId: a,
            pageIndex: null != i ? parseInt(i, 10) : void 0,
            renderHeader: u,
            getSocialLayerStorefrontLink: d,
        })
    );
}
function eF() {
    let [e, l] = s.useState(!1);
    return ((0, g.A)(() => l(!0), eH), e)
        ? (0, n.jsx)("div", { className: eP.kL, children: (0, n.jsx)(V, {}) })
        : (0, n.jsx)("div", { className: a()(eP.u1, eP.kL), children: (0, n.jsx)(d.y, {}) });
}
function e$(e) {
    let {
            applicationId: l,
            guildId: t,
            skuId: i,
            pageIndex: g = 0,
            renderHeader: m,
            getSocialLayerStorefrontLink: A,
        } = e,
        { analyticsLocations: b } = (0, p.Ay)(x.A.SOCIAL_LAYER_STOREFRONT),
        k = (0, L.A)({ applicationId: l, guildId: t }),
        E = k?.storefront ?? null,
        y = (function (e) {
            let { applicationId: l } = e,
                { isTestMode: t, selectedStorefrontId: n, liveStorefrontId: i, liveStorefront: a } = R(l),
                r = t && null != n && n !== i;
            (s.useEffect(() => {
                t && null != l && (0, _.JX)(l);
            }, [t, l]),
                s.useEffect(() => {
                    r && null != l && null != n && (0, _.d8)(l, n);
                }, [r, l, n]));
            let d = (0, o.bG)([M.A], () => (r && null != n ? M.A.getStorefrontById(n) : void 0), [r, n]);
            return {
                isTestMode: t,
                selectedStorefrontId: n,
                liveStorefrontId: i,
                effectiveStorefront: r ? (d?.storefront ?? null) : a,
            };
        })({ applicationId: l }),
        T = y.effectiveStorefront ?? E,
        O = null != T && T.id === y.liveStorefrontId,
        D = (0, o.bG)([v.A], () => v.A.get(i), [i]);
    ((0, I.pE)(), (0, h.x)({ applicationId: k?.storefront?.applicationId }));
    let w = (0, f.A)((0, r.A)()),
        G = (0, o.bG)([S.Ay, j.default], () => S.Ay.isMember(t, j.default.getId())),
        Y = s.useMemo(() => (null == g || isNaN(g) || (null != T && g >= T.pages.length) ? 0 : g), [g, T]),
        V = T?.pages[Y]?.title ?? null,
        F = T?.pages[Y]?.leaderboard != null,
        $ = s.useMemo(
            () => ({
                sessionId: w,
                guildId: t,
                applicationId: l,
                pageIndex: Y,
                pageTitle: V,
                isUserGuildMember: G,
                pageHasLeaderboard: F,
            }),
            [w, t, l, Y, V, G, F],
        );
    return (s.useEffect(() => {
        null != l && (0, _.SP)(l, Y, null != i ? i : null);
    }, [l, Y, i]),
    null == l || k?.storefront == null)
        ? null != k && "loading" !== k.state
            ? (0, n.jsxs)("div", {
                  className: a()(eP.p$, eP.kL),
                  children: [
                      (0, n.jsx)(c.D, {
                          variant: "heading-lg/semibold",
                          color: "text-strong",
                          children: H.intl.string(P.default.OvBwPV),
                      }),
                      (0, n.jsx)(u.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          children: H.intl.string(P.default["Sy7D+/"]),
                      }),
                  ],
              })
            : y.isTestMode
              ? (0, n.jsx)(eF, {}, l)
              : (0, n.jsx)("div", { className: a()(eP.u1, eP.kL), children: (0, n.jsx)(d.y, {}) })
        : (0, n.jsx)(p.f5, {
              value: b,
              children: (0, n.jsx)(C.J, {
                  renderHeader: m,
                  getSocialLayerStorefrontLink: A,
                  children: (0, n.jsx)(N.E9, {
                      newValue: $,
                      children: (0, n.jsx)(eY, {
                          storefront: T ?? k.storefront,
                          guildId: t,
                          selectedPageIndex: Y,
                          selectedSku: D,
                          isTestMode: y.isTestMode,
                          isLive: O,
                      }),
                  }),
              }),
          });
}
