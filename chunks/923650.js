(n.d(t, { P: () => e_, ThirdPartyPromotionsModal: () => ev }), n(321073));
var i,
    a = n(477900),
    r = n(582128),
    s = n(366010),
    l = n(939249),
    o = n(834730),
    d = n(289873),
    c = n(189213),
    u = n(403581),
    m = n(17928),
    b = n(52133),
    p = n(192308),
    f = n(793574),
    g = n(688810),
    h = n(363195),
    x = n(174459),
    v = n(792656),
    _ = n(962644),
    P = n(35587),
    C = n(412260),
    R = n(852218),
    T = n(194261),
    A = n(297264),
    y = n(144165),
    E = n(341973);
function N(e) {
    let { title: t, body: n, asset: i } = e;
    return (0, a.jsx)("div", {
        className: E.lA,
        children: (0, a.jsxs)("div", {
            className: E.LV,
            children: [
                (0, a.jsxs)("div", {
                    className: E.JN,
                    children: [
                        (0, a.jsx)("div", {
                            className: E.MC,
                            children: (0, a.jsx)(T.LockIcon, { size: "refresh_sm" }),
                        }),
                        (0, a.jsxs)("div", {
                            className: E.yO,
                            children: [
                                (0, a.jsx)(A.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                                (0, a.jsx)(A.D, { variant: "heading-sm/medium", color: "text-subtle", children: n }),
                            ],
                        }),
                    ],
                }),
                null != i &&
                    (0, a.jsx)("div", {
                        className: E.R4,
                        children: (0, a.jsx)(y._, {
                            src: i,
                            className: E.Ys,
                            width: 100,
                            height: 100,
                            zoomable: !1,
                            imageClassName: E.EM,
                        }),
                    }),
            ],
        }),
    });
}
var j = n(947641),
    O = n(408278),
    I = n(624479),
    L = n(821609),
    U = n(695366),
    S = n(331322),
    M = n(661531),
    w = n(914410),
    k = n(58703),
    D = n(975571),
    B = n(38405),
    Y = n(264779),
    G = n(652215),
    V = n(810889),
    H = n(375708);
function z() {
    let e = (0, k.N5)(),
        t = (0, k.P6)();
    return (0, a.jsxs)("div", {
        className: `${E.G9} ${E.sQ}`,
        children: [
            (0, a.jsx)(o.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: E.kT,
                children: H.intl.format(V.default["65EEvD"], { days: t }),
            }),
            (0, a.jsx)(w.Ay, {
                progress: e,
                variant: w.qP.UNSET,
                override: { default: { gradientStart: "var(--illo-blue-70)", gradientEnd: "var(--illo-blue-10)" } },
            }),
        ],
    });
}
function F(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: E.oP, children: (0, a.jsx)("div", { className: E.t0, children: t }) });
}
let K = (e) => {
    let { recurrence: t, analyticsLocations: n = [] } = e,
        i = (0, a.jsx)(j.r, { color: M.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
        s = (0, a.jsx)("span", {
            className: E.nP,
            children: (0, a.jsx)(O.K, {
                icon: I.CopyIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "",
                onClick: () => {
                    (navigator.clipboard.writeText(t.code),
                        d(i),
                        x.default.track(G.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                            partner: t.partnerId,
                            cta_type: "copy code",
                            promotion: t.outboundTitle,
                            promotion_id: t.id,
                            location_stack: n,
                        }));
                },
            }),
        }),
        [l, d] = r.useState(() => s);
    if (null != t.code)
        return (0, a.jsx)("div", {
            className: E.oP,
            children: (0, a.jsxs)("div", {
                className: E.t0,
                children: [
                    (0, a.jsx)("div", {
                        className: E.cD,
                        children: (0, a.jsx)(o.E, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            children: t.code,
                        }),
                    }),
                    l,
                    (0, a.jsx)(L.$, {
                        variant: "secondary",
                        size: "sm",
                        text:
                            t.redeemCtaText ??
                            H.intl.formatToPlainString(H.t.DF68t7, { redemptionURL: t.redemptionURL }),
                        onClick: () => {
                            (window.open(t.redemptionURL, "_blank"),
                                x.default.track(G.HAw.RECURRING_PROMOTION_CLAIMED),
                                x.default.track(G.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                                    partner: t.partnerId,
                                    cta_type: "visit store",
                                    promotion: t.outboundTitle,
                                    promotion_id: t.id,
                                    url: t.redemptionURL,
                                    location_stack: n,
                                }));
                        },
                    }),
                ],
            }),
        });
};
function W(e) {
    let {
        recurrence: t,
        canBeClaimed: n,
        hasClaimError: i,
        setCode: r,
        setHasClaimError: s,
        className: l,
        analyticsLocations: o = [],
    } = e;
    return n
        ? i
            ? (0, a.jsx)("div", {
                  className: l,
                  children: (0, a.jsx)(L.$, {
                      icon: U.E,
                      variant: "critical-secondary",
                      size: "sm",
                      disabled: !0,
                      text: H.intl.string(H.t["8LKchl"]),
                  }),
              })
            : (0, a.jsx)("div", {
                  className: l,
                  children: (0, a.jsx)(L.$, {
                      icon: T.LockIcon,
                      variant: "secondary",
                      size: "sm",
                      text: t.claimCtaText ?? H.intl.string(H.t.vwASIl),
                      onClick: () => {
                          (0, Y.kd)({
                              promotionId: t.id,
                              promotionTitle: t.outboundTitle,
                              partnerId: t.partnerId,
                              analyticsLocations: o,
                          })
                              .then((e) => {
                                  ((0, _.LI)(e), r(e.code));
                              })
                              .catch((e) => {
                                  (s(!0), B.A.captureException(e));
                              });
                      },
                  }),
              })
        : null;
}
var X = (((i = {}).INLINE = "inline"), (i.FOOTER = "footer"), i);
function $(e) {
    let {
            recurrence: t,
            titleClassName: n,
            partnerLogo: i,
            showPartnerImage: s = !1,
            roundPromotionImage: l = !1,
            titleVariant: o = "primary",
            claimButtonPlacement: d = "inline",
            footerContent: c,
            analyticsLocations: u = [],
        } = e,
        [m, b] = r.useState(t.code),
        [p, f] = r.useState(!1),
        g = null == m;
    return (0, a.jsxs)("div", {
        className: E.lA,
        children: [
            (0, a.jsxs)("div", {
                className: E.LV,
                children: [
                    (0, a.jsxs)("div", {
                        className: E.JN,
                        children: [
                            i,
                            (0, a.jsxs)("div", {
                                className: null != n ? `${E.yO} ${n}` : E.yO,
                                children: [
                                    (0, a.jsx)(A.D, {
                                        variant: "secondary" === o ? "heading-md/semibold" : "heading-lg/semibold",
                                        color: "text-strong",
                                        children: t.title,
                                    }),
                                    (0, a.jsxs)(S.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, a.jsx)(A.D, {
                                                variant: "heading-sm/medium",
                                                color: "text-subtle",
                                                children: p
                                                    ? H.intl.format(H.t.i2EuFO, {
                                                          helpdeskArticle: D.A.getArticleURL(G.MVz.RECURRING_PROMOTION),
                                                      })
                                                    : g
                                                      ? t.body
                                                      : null != t.bodyClaimed
                                                        ? H.intl.format(t.bodyClaimed, { date: t.endDate })
                                                        : t.body,
                                            }),
                                            null != t.bodyNote &&
                                                (0, a.jsx)(A.D, {
                                                    variant: "heading-sm/medium",
                                                    color: "text-subtle",
                                                    children: H.intl.format(t.bodyNote, {
                                                        partnerName: R.CD[t.partnerId].label,
                                                        helpdeskArticle: D.A.getArticleURL(G.MVz.RECURRING_PROMOTION),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            "inline" === d &&
                                (0, a.jsx)(W, {
                                    recurrence: t,
                                    canBeClaimed: g,
                                    hasClaimError: p,
                                    setCode: b,
                                    setHasClaimError: f,
                                    analyticsLocations: u,
                                }),
                        ],
                    }),
                    s &&
                        (0, a.jsx)("div", {
                            className: E.R4,
                            children: (0, a.jsx)(y._, {
                                src: t.asset ?? "",
                                className: E.Ys,
                                imageClassName: l || t.partnerId === R.XY ? E.Cy : void 0,
                                width: 100,
                                height: 100,
                                zoomable: !1,
                            }),
                        }),
                ],
            }),
            "footer" === d && c,
            null != m && (0, a.jsx)(K, { recurrence: { ...t, code: m }, analyticsLocations: u }),
            "footer" === d &&
                null == m &&
                (0, a.jsx)(F, {
                    children: (0, a.jsx)(W, {
                        recurrence: t,
                        canBeClaimed: g,
                        hasClaimError: p,
                        setCode: b,
                        setHasClaimError: f,
                        className: E.qx,
                        analyticsLocations: u,
                    }),
                }),
        ],
    });
}
function q(e) {
    let { promotion: t, claimButtonPlacement: n = X.INLINE, analyticsLocations: i } = e;
    return (0, a.jsx)($, {
        recurrence: t,
        titleVariant: "secondary",
        showPartnerImage: null != t.asset,
        roundPromotionImage: null != t.asset,
        claimButtonPlacement: n,
        analyticsLocations: i,
    });
}
var J = n(325499),
    Z = n(789861),
    Q = n(398523),
    ee = n(881373),
    et = n(14429),
    en = n(264865);
let ei =
        "https://cdn.discordapp.com/assets/content/c93472f5033e3079579ad496c9a54a95faa23623f5b1d11590d536c861f52e7c.svg",
    ea =
        "https://cdn.discordapp.com/assets/content/6bbac5a155872455d86969ce5309725d9aa0317ba3b104b3027716e70040e11f.webp";
function er(e, t) {
    if (null != e) return "single_promo" === e.type ? e.config : e.configsByOutboundTitle[t];
}
function es() {
    return H.intl.formatToPlainString(H.t.p7BkHh, { discountPercentage: Q.b });
}
function el() {
    return (0, J.i)("ThirdPartyPromotionPartnerConfigs") ? H.intl.string(H.t.nmvvaN) : H.intl.string(H.t.igiSKe);
}
let eo = {
    [R.KS]: {
        getLockedPreview: () => ({ title: es(), body: el(), asset: ea }),
        landingUrl: "https://steelseries.com/",
        recurringCardAsset: ea,
        outboundConfigs: {
            type: "single_promo",
            config: { getTitle: es, getBody: el, getBodyClaimed: () => H.t.w8CXUl },
        },
    },
    [R.XY]: {
        getLockedPreview: () => ({
            title: (0, J.i)("ThirdPartyPromotionPartnerConfigs")
                ? H.intl.formatToPlainString(V.default.PF1aT5, { discountPercentage: ee.aW })
                : H.intl.formatToPlainString(V.default.LsJ9hj, { discountPercent: ee.aW }),
            body: (0, J.i)("ThirdPartyPromotionPartnerConfigs")
                ? H.intl.formatToPlainString(V.default.KoKwMn, {})
                : H.intl.formatToPlainString(V.default.Yl5ww1, {}),
            asset: ei,
        }),
        landingUrl: "https://www.logitech.com/",
        recurringCardAsset: ei,
        outboundConfigs: {
            type: "multiple_promo",
            configsByOutboundTitle: {
                "Logitech G": {
                    getTitle: () => H.intl.formatToPlainString(V.default.jkdhZq, { discountPercent: ee.aW }),
                    getBody: () => H.intl.formatToPlainString(V.default.mH30Yx, {}),
                },
                "Logitech 5%": {
                    getTitle: () => H.intl.formatToPlainString(V.default.zeBjoX, { discountPercent: ee.y$ }),
                    getBody: () => H.intl.formatToPlainString(V.default.fC4abC, { months: 6 }),
                },
                "Logitech PRO Series Sim": {
                    getTitle: () => H.intl.formatToPlainString(V.default.pSBCjv, { discountPercent: ee.K2 }),
                    getBody: () => H.intl.formatToPlainString(V.default.lsRjfl, {}),
                },
            },
        },
    },
    [R.Bt]: {
        showSectionHeaders: !1,
        landingUrl: "https://www.callofduty.com/",
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => H.intl.string(et.default["6vVfeK"]),
                getBody: (e) => H.intl.formatToPlainString(et.default.nsmhS2, { date: (0, Z.mh)(e.endDate) }),
                getAsset: (e, t) => (0, Y.WD)(e.id, t),
                getClaimCtaText: () => H.intl.string(et.default["lbyFG+"]),
                getRedeemCtaText: () => H.intl.string(et.default["6rwUm2"]),
                claimButtonPlacement: X.FOOTER,
            },
        },
    },
    [R.NC]: {
        getLockedPreview: () => ({
            title: H.intl.string(en.default.CwMGMb),
            body: H.intl.string(en.default.TgHy6p),
            asset: ei,
        }),
        landingUrl: "https://www.youtube.com/redeem",
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => H.intl.string(en.default.CwMGMb),
                getBody: () => H.intl.string(en.default.TgHy6p),
                getRedeemCtaText: () => H.intl.string(en.default.KfOPbQ),
                claimButtonPlacement: X.FOOTER,
            },
        },
    },
};
var ed = n(428685);
function ec() {
    return (0, a.jsx)(N, {
        title: H.intl.string(ed.default.oDfh3O),
        body: H.intl.string(ed.default.nDEuO1),
        asset: "https://cdn.discordapp.com/assets/content/7ce3849519c8d8cd4657b08bd2c689ea934bb60f53b959a04eb3b1db5d2f002a.png",
    });
}
var eu = n(202541);
function em(e, t) {
    return (0, b.v)(e[0], t[0]) && (0, b.v)(e[1], t[1]);
}
function eb(e, t, n) {
    let i = eo[e.partnerId ?? ""],
        a = er(i?.outboundConfigs, e.outboundTitle);
    return {
        id: e.id,
        partnerId: e.partnerId ?? "",
        title: a?.getTitle(e) ?? "",
        outboundTitle: e.outboundTitle,
        body: a?.getBody?.(e) ?? "",
        startDate: e.startDate,
        endDate: e.endDate,
        redemptionURL: e.outboundRedemptionPageLink,
        code: t,
        asset: a?.getAsset?.(e, n),
        claimCtaText: a?.getClaimCtaText?.(),
        redeemCtaText: a?.getRedeemCtaText?.(),
    };
}
function ep(e) {
    var t;
    let n,
        i,
        { records: d, claimedOutboundPromotionCodeMap: c, theme: u } = e,
        [b, p] = r.useState(!1),
        g = [...d].sort((e, t) => (t.startDate > e.startDate ? 1 : -1)),
        x = b ? g : g.slice(0, 1),
        v = !b && g.length > 1,
        _ =
            ((t = d[0]?.partnerId ?? ""),
            (n = (0, m.bG)([h.A], () => (0, s.M)(h.A.theme))),
            null == (i = eo[t]?.logos) ? void 0 : n ? i.dark : i.light);
    return (0, a.jsxs)("div", {
        children: [
            x.map((e) => {
                var t;
                let n, i;
                return (0, a.jsx)(
                    $,
                    {
                        recurrence:
                            ((t = c[e.id] ?? null),
                            (n = eo[e.partnerId ?? ""]),
                            (i = er(n?.outboundConfigs, e.outboundTitle)),
                            {
                                ...eb(e, t, u),
                                asset: n?.recurringCardAsset ?? "",
                                bodyClaimed: i?.getBodyClaimed?.(),
                                redemptionURL:
                                    "" !== e.outboundRedemptionPageLink
                                        ? e.outboundRedemptionPageLink
                                        : (n?.landingUrl ?? ""),
                            }),
                        partnerLogo: _,
                        showPartnerImage: !0,
                        claimButtonPlacement: X.FOOTER,
                        footerContent: (0, a.jsx)(z, {}),
                        analyticsLocations: [f.A.THIRD_PARTY_PROMOTIONS_MODAL],
                    },
                    e.id,
                );
            }),
            v &&
                (0, a.jsx)(l.D, {
                    className: E.K8,
                    onClick: () => {
                        p(!0);
                    },
                    children: (0, a.jsx)(o.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: H.intl.string(H.t.rjjZxV),
                    }),
                }),
        ],
    });
}
function ef(e) {
    let { partnerId: t } = e,
        n = eo[t]?.getLockedPreview?.() ?? null;
    return null == n ? null : (0, a.jsx)(N, { title: n.title, body: n.body, asset: n.asset });
}
function eg(e) {
    let {
            partnerIds: t,
            title: n,
            subtitle: i,
            modalTeaser: r,
            showXboxCard: s = !1,
            transitionState: l,
            onClose: o,
            analyticsLocationsProp: u,
        } = e,
        { promotionsLoaded: m } = (0, P.y7)(),
        { analyticsLocations: b } = (0, g.Ay)(u);
    return m
        ? (0, a.jsx)(g.f5, {
              value: b,
              children: (0, a.jsxs)(c.Modal, {
                  title: n,
                  subtitle: i,
                  actions: [],
                  preview: (0, a.jsx)(v.A, {
                      subscriptionTier: eu.pe.TIER_2,
                      fullWidth: !0,
                      onClick: () => {
                          o();
                      },
                      onSubscribeModalClose: (e) => {
                          if (e) return _.Ay.fetchActivePromotions();
                      },
                  }),
                  transitionState: l,
                  onClose: o,
                  children: [
                      s && (0, a.jsx)(ec, {}),
                      t.map((e) => (0, a.jsx)(ef, { partnerId: e }, e)),
                      (0, a.jsx)(eh, { modalTeaser: r }),
                  ],
              }),
          })
        : (0, a.jsx)(d.y, {});
}
function eh(e) {
    let { modalTeaser: t } = e;
    if (null == t) return null;
    let n = t.icon ?? u.t;
    return (0, a.jsxs)("div", {
        className: E.ar,
        children: [
            (0, a.jsxs)("div", {
                className: E.Uv,
                children: [
                    (0, a.jsx)(n, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(o.E, { variant: "text-sm/semibold", color: "text-default", children: t.title }),
                ],
            }),
            null != t.body && (0, a.jsx)(o.E, { variant: "text-sm/medium", color: "text-muted", children: t.body }),
        ],
    });
}
function ex(e) {
    let { partnerIds: t, title: n, subtitle: i, modalTeaser: r, transitionState: s, onClose: l } = e,
        u = (0, m.bG)([h.A], () => h.A.theme),
        [b, p] = (0, m.bG)(
            [C.A],
            () => {
                let e = [],
                    n = [];
                return (
                    t.forEach((t) => {
                        let i = eo[t]?.outboundConfigs;
                        function a(e) {
                            return null != er(i, e.outboundTitle);
                        }
                        let r = C.A.getPromotionsByPartner(t);
                        (e.push(...r.recurring.filter(a)), n.push(...r.oneTime.filter(a)));
                    }),
                    [e, n]
                );
            },
            [t],
            em,
        ),
        { promotionsLoaded: g, claimedOutboundPromotionCodeMap: x } = (0, P.y7)();
    if (!g) return (0, a.jsx)(d.y, {});
    let v = t
            .map((e) => eo[e])
            .filter(Boolean)
            .every((e) => !1 !== e.showSectionHeaders),
        _ = v ? { recurring: H.intl.string(V.default["9Y2p6p"]), oneTime: H.intl.string(V.default.Wm58LR) } : void 0,
        R = (0, a.jsx)("div", {
            className: E.kR,
            children: p.map((e) => {
                let t = eb(e, x[e.id] ?? null, u),
                    n = er(eo[e.partnerId ?? ""]?.outboundConfigs, e.outboundTitle);
                return (0, a.jsx)(
                    q,
                    {
                        promotion: t,
                        claimButtonPlacement: n?.claimButtonPlacement,
                        analyticsLocations: [f.A.THIRD_PARTY_PROMOTIONS_MODAL],
                    },
                    e.id,
                );
            }),
        });
    return (0, a.jsx)(c.Modal, {
        title: n,
        subtitle: i,
        actions: [],
        transitionState: s,
        onClose: l,
        children: (0, a.jsxs)("div", {
            className: E.kL,
            children: [
                b.length > 0 &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            null != _ &&
                                (0, a.jsx)(o.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: _.recurring,
                                }),
                            (0, a.jsx)("div", {
                                className: E.kR,
                                children: (0, a.jsx)(ep, { records: b, claimedOutboundPromotionCodeMap: x, theme: u }),
                            }),
                        ],
                    }),
                p.length > 0 &&
                    (v
                        ? (0, a.jsxs)("div", {
                              className: E.E7,
                              children: [
                                  null != _ &&
                                      (0, a.jsx)(o.E, {
                                          variant: "text-md/medium",
                                          color: "text-subtle",
                                          children: _.oneTime,
                                      }),
                                  R,
                              ],
                          })
                        : R),
                (0, a.jsx)(eh, { modalTeaser: r }),
            ],
        }),
    });
}
function ev(e) {
    let {
        partnerIds: t,
        isLocked: n = !1,
        title: i,
        subtitle: r,
        modalTeaser: s,
        showXboxCard: l,
        transitionState: o,
        onClose: d,
        analyticsLocations: c,
    } = e;
    return n
        ? (0, a.jsx)(eg, {
              partnerIds: t,
              title: i,
              subtitle: r,
              modalTeaser: s,
              showXboxCard: l,
              transitionState: o,
              onClose: d,
              analyticsLocationsProp: c,
          })
        : (0, a.jsx)(ex, { partnerIds: t, title: i, subtitle: r, modalTeaser: s, transitionState: o, onClose: d });
}
function e_(e) {
    let {
            partnerIds: t,
            isLocked: i = !1,
            title: r,
            subtitle: s,
            modalTeaser: l,
            showXboxCard: o,
            analyticsLocations: d,
            onClose: c,
        } = e,
        u = o ? [...t, "xbox"] : t;
    (x.default.track(G.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_ids: u, partner_id: u[0], location_stack: d }),
        _.Ay.fetchActivePromotions(),
        (0, p.openModalLazy)(
            async () => {
                let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(n.bind(n, 923650));
                return (n) =>
                    (0, a.jsx)(e, {
                        ...n,
                        partnerIds: t,
                        isLocked: i,
                        title: r,
                        subtitle: s,
                        modalTeaser: l,
                        showXboxCard: o,
                        analyticsLocations: d,
                    });
            },
            { onCloseCallback: c },
        ));
}
