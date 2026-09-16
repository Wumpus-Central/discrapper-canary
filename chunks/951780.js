(n.d(t, { P: () => eC, ThirdPartyPromotionsModal: () => e_ }), n(321073));
var i,
    a = n(477900),
    r = n(582128),
    s = n(366010),
    l = n(331322),
    o = n(939249),
    d = n(834730),
    c = n(289873),
    u = n(189213),
    m = n(403581),
    p = n(17928),
    b = n(52133),
    f = n(192308),
    g = n(793574),
    h = n(688810),
    x = n(363195),
    v = n(174459),
    _ = n(792656),
    C = n(962644),
    P = n(35587),
    T = n(412260),
    R = n(852218),
    A = n(194261),
    y = n(297264),
    E = n(144165),
    N = n(341973);
function j(e) {
    let { title: t, body: n, asset: i } = e;
    return (0, a.jsx)("div", {
        className: N.lA,
        children: (0, a.jsxs)("div", {
            className: N.LV,
            children: [
                (0, a.jsxs)("div", {
                    className: N.JN,
                    children: [
                        (0, a.jsx)("div", {
                            className: N.MC,
                            children: (0, a.jsx)(A.LockIcon, { size: "refresh_sm" }),
                        }),
                        (0, a.jsxs)("div", {
                            className: N.yO,
                            children: [
                                (0, a.jsx)(y.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                                (0, a.jsx)(y.D, { variant: "heading-sm/medium", color: "text-subtle", children: n }),
                            ],
                        }),
                    ],
                }),
                null != i &&
                    (0, a.jsx)("div", {
                        className: N.R4,
                        children: (0, a.jsx)(E._, {
                            src: i,
                            className: N.Ys,
                            width: 100,
                            height: 100,
                            zoomable: !1,
                            imageClassName: N.EM,
                        }),
                    }),
            ],
        }),
    });
}
var O = n(947641),
    I = n(408278),
    L = n(624479),
    U = n(821609),
    S = n(695366),
    M = n(661531),
    w = n(914410),
    k = n(58703),
    B = n(975571),
    D = n(38405),
    Y = n(264779),
    G = n(652215),
    V = n(810889),
    H = n(375708);
function z() {
    let e = (0, k.N5)(),
        t = (0, k.P6)();
    return (0, a.jsxs)("div", {
        className: `${N.G9} ${N.sQ}`,
        children: [
            (0, a.jsx)(d.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: N.kT,
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
function K(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: N.oP, children: (0, a.jsx)("div", { className: N.t0, children: t }) });
}
let W = (e) => {
    let { recurrence: t, analyticsLocations: n = [] } = e,
        i = (0, a.jsx)(O.r, { color: M.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
        s = (0, a.jsx)("span", {
            className: N.nP,
            children: (0, a.jsx)(I.K, {
                icon: L.CopyIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "",
                onClick: () => {
                    (navigator.clipboard.writeText(t.code),
                        o(i),
                        v.default.track(G.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                            partner: t.partnerId,
                            cta_type: "copy code",
                            promotion: t.outboundTitle,
                            promotion_id: t.id,
                            location_stack: n,
                        }));
                },
            }),
        }),
        [l, o] = r.useState(() => s);
    if (null != t.code)
        return (0, a.jsx)("div", {
            className: N.oP,
            children: (0, a.jsxs)("div", {
                className: N.t0,
                children: [
                    (0, a.jsx)("div", {
                        className: N.cD,
                        children: (0, a.jsx)(d.E, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            children: t.code,
                        }),
                    }),
                    l,
                    (0, a.jsx)(U.$, {
                        variant: "secondary",
                        size: "sm",
                        text:
                            t.redeemCtaText ??
                            H.intl.formatToPlainString(H.t.DF68t7, { redemptionURL: t.redemptionURL }),
                        onClick: () => {
                            (window.open(t.redemptionURL, "_blank"),
                                v.default.track(G.HAw.RECURRING_PROMOTION_CLAIMED),
                                v.default.track(G.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
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
function F(e) {
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
                  children: (0, a.jsx)(U.$, {
                      icon: S.E,
                      variant: "critical-secondary",
                      size: "sm",
                      disabled: !0,
                      text: H.intl.string(H.t["8LKchl"]),
                  }),
              })
            : (0, a.jsx)("div", {
                  className: l,
                  children: (0, a.jsx)(U.$, {
                      icon: A.LockIcon,
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
                                  ((0, C.LI)(e), r(e.code));
                              })
                              .catch((e) => {
                                  (s(!0), D.A.captureException(e));
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
            roundPromotionImage: o = !1,
            titleVariant: d = "primary",
            claimButtonPlacement: c = "inline",
            footerContent: u,
            analyticsLocations: m = [],
        } = e,
        [p, b] = r.useState(t.code),
        [f, g] = r.useState(!1),
        h = null == p;
    return (0, a.jsxs)("div", {
        className: N.lA,
        children: [
            (0, a.jsxs)("div", {
                className: N.LV,
                children: [
                    (0, a.jsxs)("div", {
                        className: N.JN,
                        children: [
                            i,
                            (0, a.jsxs)("div", {
                                className: null != n ? `${N.yO} ${n}` : N.yO,
                                children: [
                                    (0, a.jsx)(y.D, {
                                        variant: "secondary" === d ? "heading-md/semibold" : "heading-lg/semibold",
                                        color: "text-strong",
                                        children: t.title,
                                    }),
                                    (0, a.jsxs)(l.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, a.jsx)(y.D, {
                                                variant: "heading-sm/medium",
                                                color: "text-subtle",
                                                children: f
                                                    ? H.intl.format(H.t.i2EuFO, {
                                                          helpdeskArticle: B.A.getArticleURL(G.MVz.RECURRING_PROMOTION),
                                                      })
                                                    : h
                                                      ? t.body
                                                      : null != t.bodyClaimed
                                                        ? H.intl.format(t.bodyClaimed, { date: t.endDate })
                                                        : t.body,
                                            }),
                                            null != t.bodyNote &&
                                                (0, a.jsx)(y.D, {
                                                    variant: "heading-sm/medium",
                                                    color: "text-subtle",
                                                    children: H.intl.format(t.bodyNote, {
                                                        partnerName: R.CD[t.partnerId].label,
                                                        helpdeskArticle: B.A.getArticleURL(G.MVz.RECURRING_PROMOTION),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            "inline" === c &&
                                (0, a.jsx)(F, {
                                    recurrence: t,
                                    canBeClaimed: h,
                                    hasClaimError: f,
                                    setCode: b,
                                    setHasClaimError: g,
                                    analyticsLocations: m,
                                }),
                        ],
                    }),
                    s &&
                        (0, a.jsx)("div", {
                            className: N.R4,
                            children: (0, a.jsx)(E._, {
                                src: t.asset ?? "",
                                className: N.Ys,
                                imageClassName: o || t.partnerId === R.XY ? N.Cy : void 0,
                                width: 100,
                                height: 100,
                                zoomable: !1,
                            }),
                        }),
                ],
            }),
            "footer" === c && u,
            null != p && (0, a.jsx)(W, { recurrence: { ...t, code: p }, analyticsLocations: m }),
            "footer" === c &&
                null == p &&
                (0, a.jsx)(K, {
                    children: (0, a.jsx)(F, {
                        recurrence: t,
                        canBeClaimed: h,
                        hasClaimError: f,
                        setCode: b,
                        setHasClaimError: g,
                        className: N.qx,
                        analyticsLocations: m,
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
        "https://cdn.discordapp.com/assets/content/6bbac5a155872455d86969ce5309725d9aa0317ba3b104b3027716e70040e11f.webp",
    er =
        "https://cdn.discordapp.com/assets/content/9fc3dd18f3074d23a9bf78be5287bf7a727597c962ea220a0ebda311fd7997ea.webp";
function es(e, t) {
    if (null != e) return "single_promo" === e.type ? e.config : e.configsByOutboundTitle[t];
}
function el() {
    return H.intl.formatToPlainString(H.t.p7BkHh, { discountPercentage: Q.b });
}
function eo() {
    return (0, J.i)("ThirdPartyPromotionPartnerConfigs") ? H.intl.string(H.t.nmvvaN) : H.intl.string(H.t.igiSKe);
}
let ed = {
    [R.KS]: {
        getLockedPreview: () => ({ title: el(), body: eo(), asset: ea }),
        landingUrl: "https://steelseries.com/",
        recurringCardAsset: ea,
        outboundConfigs: {
            type: "single_promo",
            config: { getTitle: el, getBody: eo, getBodyClaimed: () => H.t.w8CXUl },
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
            asset: er,
        }),
        landingUrl: "https://www.youtube.com/redeem",
        oneTimeCardAsset: er,
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => H.intl.string(en.default.CwMGMb),
                getBody: () => H.intl.string(en.default.TgHy6p),
                getRedeemCtaText: () => H.intl.string(en.default.KfOPbQ),
                claimButtonPlacement: X.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
};
var ec = n(428685);
function eu() {
    return (0, a.jsx)(j, {
        title: H.intl.string(ec.default.oDfh3O),
        body: H.intl.string(ec.default.nDEuO1),
        asset: "https://cdn.discordapp.com/assets/content/7ce3849519c8d8cd4657b08bd2c689ea934bb60f53b959a04eb3b1db5d2f002a.png",
    });
}
var em = n(202541);
function ep(e, t) {
    return (0, b.v)(e[0], t[0]) && (0, b.v)(e[1], t[1]);
}
function eb(e, t, n) {
    let i = ed[e.partnerId ?? ""],
        a = es(i?.outboundConfigs, e.outboundTitle);
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
        asset: a?.getAsset?.(e, n) ?? i?.oneTimeCardAsset,
        claimCtaText: a?.getClaimCtaText?.(),
        redeemCtaText: a?.getRedeemCtaText?.(),
    };
}
function ef(e) {
    var t;
    let n,
        i,
        { records: c, claimedOutboundPromotionCodeMap: u, theme: m } = e,
        [b, f] = r.useState(!1),
        h = [...c].sort((e, t) => (t.startDate > e.startDate ? 1 : -1)),
        v = b ? h : h.slice(0, 1),
        _ = !b && h.length > 1,
        C =
            ((t = c[0]?.partnerId ?? ""),
            (n = (0, p.bG)([x.A], () => (0, s.M)(x.A.theme))),
            null == (i = ed[t]?.logos) ? void 0 : n ? i.dark : i.light);
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(l.B, {
                direction: "vertical",
                gap: 12,
                children: v.map((e) => {
                    var t;
                    let n, i;
                    return (0, a.jsx)(
                        $,
                        {
                            recurrence:
                                ((t = u[e.id] ?? null),
                                (n = ed[e.partnerId ?? ""]),
                                (i = es(n?.outboundConfigs, e.outboundTitle)),
                                {
                                    ...eb(e, t, m),
                                    asset: n?.recurringCardAsset ?? "",
                                    bodyClaimed: i?.getBodyClaimed?.(),
                                    redemptionURL:
                                        "" !== e.outboundRedemptionPageLink
                                            ? e.outboundRedemptionPageLink
                                            : (n?.landingUrl ?? ""),
                                }),
                            partnerLogo: C,
                            showPartnerImage: !0,
                            claimButtonPlacement: X.FOOTER,
                            footerContent: (0, a.jsx)(z, {}),
                            analyticsLocations: [g.A.THIRD_PARTY_PROMOTIONS_MODAL],
                        },
                        e.id,
                    );
                }),
            }),
            _ &&
                (0, a.jsx)(o.D, {
                    className: N.K8,
                    onClick: () => {
                        f(!0);
                    },
                    children: (0, a.jsx)(d.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: H.intl.string(H.t.rjjZxV),
                    }),
                }),
        ],
    });
}
function eg(e) {
    let { partnerId: t } = e,
        n = ed[t]?.getLockedPreview?.() ?? null;
    return null == n ? null : (0, a.jsx)(j, { title: n.title, body: n.body, asset: n.asset });
}
function eh(e) {
    let {
            partnerIds: t,
            title: n,
            subtitle: i,
            modalTeaser: r,
            showXboxCard: s = !1,
            transitionState: o,
            onClose: d,
            analyticsLocationsProp: m,
        } = e,
        { promotionsLoaded: p } = (0, P.y7)(),
        { analyticsLocations: b } = (0, h.Ay)(m);
    return p
        ? (0, a.jsx)(h.f5, {
              value: b,
              children: (0, a.jsxs)(u.Modal, {
                  title: n,
                  subtitle: i,
                  actions: [],
                  preview: (0, a.jsx)(_.A, {
                      subscriptionTier: em.pe.TIER_2,
                      fullWidth: !0,
                      onClick: () => {
                          d();
                      },
                      onSubscribeModalClose: (e) => {
                          if (e) return C.Ay.fetchActivePromotions();
                      },
                  }),
                  transitionState: o,
                  onClose: d,
                  children: [
                      (0, a.jsxs)(l.B, {
                          direction: "vertical",
                          gap: 12,
                          children: [s && (0, a.jsx)(eu, {}), t.map((e) => (0, a.jsx)(eg, { partnerId: e }, e))],
                      }),
                      (0, a.jsx)(ex, { modalTeaser: r }),
                  ],
              }),
          })
        : (0, a.jsx)(c.y, {});
}
function ex(e) {
    let { modalTeaser: t } = e;
    if (null == t) return null;
    let n = t.icon ?? m.t;
    return (0, a.jsxs)("div", {
        className: N.ar,
        children: [
            (0, a.jsxs)("div", {
                className: N.Uv,
                children: [
                    (0, a.jsx)(n, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(d.E, {
                        variant: t.titleVariant ?? "text-sm/semibold",
                        color: "text-default",
                        children: t.title,
                    }),
                ],
            }),
            null != t.body && (0, a.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", children: t.body }),
        ],
    });
}
function ev(e) {
    let { partnerIds: t, title: n, subtitle: i, modalTeaser: r, transitionState: s, onClose: o } = e,
        m = (0, p.bG)([x.A], () => x.A.theme),
        [b, f] = (0, p.bG)(
            [T.A],
            () => {
                let e = [],
                    n = [];
                return (
                    t.forEach((t) => {
                        let i = ed[t]?.outboundConfigs;
                        function a(e) {
                            return null != es(i, e.outboundTitle);
                        }
                        let r = T.A.getPromotionsByPartner(t);
                        (e.push(...r.recurring.filter(a)), n.push(...r.oneTime.filter(a)));
                    }),
                    [e, n]
                );
            },
            [t],
            ep,
        ),
        { promotionsLoaded: h, claimedOutboundPromotionCodeMap: v } = (0, P.y7)();
    if (!h) return (0, a.jsx)(c.y, {});
    let _ = t
            .map((e) => ed[e])
            .filter(Boolean)
            .every((e) => !1 !== e.showSectionHeaders),
        C = _ ? { recurring: H.intl.string(V.default["9Y2p6p"]), oneTime: H.intl.string(V.default.Wm58LR) } : void 0,
        R = (0, a.jsx)(l.B, {
            direction: "vertical",
            gap: 12,
            children: f.map((e) => {
                let t = eb(e, v[e.id] ?? null, m),
                    n = es(ed[e.partnerId ?? ""]?.outboundConfigs, e.outboundTitle);
                return (0, a.jsx)(
                    q,
                    {
                        promotion: t,
                        claimButtonPlacement: n?.claimButtonPlacement,
                        analyticsLocations: [g.A.THIRD_PARTY_PROMOTIONS_MODAL],
                    },
                    e.id,
                );
            }),
        });
    return (0, a.jsx)(u.Modal, {
        title: n,
        subtitle: i,
        actions: [],
        transitionState: s,
        onClose: o,
        children: (0, a.jsxs)("div", {
            className: N.kL,
            children: [
                b.length > 0 &&
                    (0, a.jsxs)(l.B, {
                        direction: "vertical",
                        gap: 12,
                        children: [
                            null != C &&
                                (0, a.jsx)(d.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: C.recurring,
                                }),
                            (0, a.jsx)(ef, { records: b, claimedOutboundPromotionCodeMap: v, theme: m }),
                        ],
                    }),
                f.length > 0 &&
                    (_
                        ? (0, a.jsx)("div", {
                              className: N.E7,
                              children: (0, a.jsxs)(l.B, {
                                  direction: "vertical",
                                  gap: 12,
                                  children: [
                                      null != C &&
                                          (0, a.jsx)(d.E, {
                                              variant: "text-md/medium",
                                              color: "text-subtle",
                                              children: C.oneTime,
                                          }),
                                      R,
                                  ],
                              }),
                          })
                        : R),
                (0, a.jsx)(ex, { modalTeaser: r }),
            ],
        }),
    });
}
function e_(e) {
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
        ? (0, a.jsx)(eh, {
              partnerIds: t,
              title: i,
              subtitle: r,
              modalTeaser: s,
              showXboxCard: l,
              transitionState: o,
              onClose: d,
              analyticsLocationsProp: c,
          })
        : (0, a.jsx)(ev, { partnerIds: t, title: i, subtitle: r, modalTeaser: s, transitionState: o, onClose: d });
}
function eC(e) {
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
    (v.default.track(G.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_ids: u, partner_id: u[0], location_stack: d }),
        C.Ay.fetchActivePromotions(),
        (0, f.openModalLazy)(
            async () => {
                let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(n.bind(n, 951780));
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
