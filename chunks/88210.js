(n.d(t, { ThirdPartyPromotionsModal: () => eh, P: () => eN }), n(321073));
var i,
    a = n(477900),
    l = n(582128),
    r = n(855986),
    o = n(52133),
    s = n(189213),
    d = n(366010),
    c = n(331322),
    u = n(939249),
    f = n(834730),
    m = n(289873),
    g = n(403581),
    b = n(192308),
    A = n(793574),
    p = n(688810),
    P = n(413599),
    E = n(129230),
    _ = n(792656),
    C = n(264779),
    T = n(597758),
    O = n(35587),
    R = n(412260),
    h = n(852218),
    N = n(194261),
    v = n(534514),
    x = n(251843),
    I = n(341973);
function M(e) {
    let { title: t, body: n, asset: i } = e;
    return (0, a.jsx)("div", {
        className: I.lA,
        children: (0, a.jsxs)("div", {
            className: I.LV,
            children: [
                (0, a.jsxs)("div", {
                    className: I.JN,
                    children: [
                        (0, a.jsx)("div", {
                            className: I.MC,
                            children: (0, a.jsx)(N.LockIcon, { size: "refresh_sm" }),
                        }),
                        (0, a.jsxs)("div", {
                            className: I.yO,
                            children: [
                                (0, a.jsx)(v.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                                (0, a.jsx)(v.D, { variant: "heading-xs/medium", color: "text-subtle", children: n }),
                            ],
                        }),
                    ],
                }),
                null != i &&
                    (0, a.jsx)("div", {
                        className: I.R4,
                        children: (0, a.jsx)(x._, {
                            src: i,
                            className: I.Ys,
                            width: 100,
                            height: 100,
                            zoomable: !1,
                            imageClassName: I.EM,
                        }),
                    }),
            ],
        }),
    });
}
var y = n(947641),
    L = n(646514),
    S = n(408278),
    j = n(624479),
    U = n(821609),
    D = n(695366),
    B = n(914410),
    k = n(5377),
    w = n(975571),
    H = n(856383),
    G = n(652215),
    V = n(691450),
    Y = n(792996);
function W() {
    let e = (0, k.N5)(),
        t = (0, k.P6)();
    return (0, a.jsxs)("div", {
        className: `${I.G9} ${I.sQ}`,
        children: [
            (0, a.jsx)(f.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: I.kT,
                children: Y.intl.format(V.default["65EEvD"], { days: t }),
            }),
            (0, a.jsx)(B.Ay, {
                progress: e,
                variant: B.qP.UNSET,
                override: { default: { gradientStart: "var(--illo-blue-70)", gradientEnd: "var(--illo-blue-10)" } },
            }),
        ],
    });
}
function K(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: I.oP, children: (0, a.jsx)("div", { className: I.t0, children: t }) });
}
let F = (e) => {
    let { recurrence: t, analyticsLocations: n = [] } = e,
        i = (0, a.jsx)(y.CheckmarkLargeBoldIcon, { color: L.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
        r = (0, a.jsx)("span", {
            className: I.nP,
            children: (0, a.jsx)(S.K, {
                icon: j.CopyIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "",
                onClick: () => {
                    (navigator.clipboard.writeText(t.code),
                        s(i),
                        E.default.track(G.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                            partner: t.partnerId,
                            cta_type: "copy code",
                            promotion: t.outboundTitle,
                            promotion_id: t.id,
                            location_stack: n,
                        }));
                },
            }),
        }),
        [o, s] = l.useState(() => r);
    if (null != t.code)
        return (0, a.jsx)("div", {
            className: I.oP,
            children: (0, a.jsxs)("div", {
                className: I.t0,
                children: [
                    (0, a.jsx)("div", {
                        className: I.cD,
                        children: (0, a.jsx)(f.E, {
                            variant: "body-md/medium",
                            color: "text-strong",
                            children: t.code,
                        }),
                    }),
                    o,
                    (0, a.jsx)(U.$, {
                        variant: "secondary",
                        size: "sm",
                        text:
                            t.redeemCtaText ??
                            Y.intl.formatToPlainString(Y.t.DF68t7, { redemptionURL: t.redemptionURL }),
                        onClick: () => {
                            (window.open(t.redemptionURL, "_blank"),
                                E.default.track(G.HAw.RECURRING_PROMOTION_CLAIMED),
                                E.default.track(G.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
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
function X(e) {
    let {
        recurrence: t,
        canBeClaimed: n,
        hasClaimError: i,
        setCode: l,
        setHasClaimError: r,
        className: o,
        analyticsLocations: s = [],
        onClaim: d,
        onClaimError: c,
        isClaiming: u,
    } = e;
    return n
        ? i
            ? (0, a.jsx)("div", {
                  className: o,
                  children: (0, a.jsx)(U.$, {
                      icon: D.CircleErrorIcon,
                      variant: "critical-secondary",
                      size: "sm",
                      disabled: !0,
                      text: Y.intl.string(Y.t["8LKchl"]),
                  }),
              })
            : (0, a.jsx)("div", {
                  className: o,
                  children: (0, a.jsx)(U.$, {
                      icon: N.LockIcon,
                      variant: "secondary",
                      size: "sm",
                      text: t.claimCtaText ?? Y.intl.string(Y.t.vwASIl),
                      loading: u,
                      onClick: () => {
                          (null != d
                              ? d()
                              : (0, C.kd)({
                                    promotionId: t.id,
                                    promotionTitle: t.outboundTitle,
                                    partnerId: t.partnerId,
                                    analyticsLocations: s,
                                }).then((e) => ((0, T.LI)(e), e.code))
                          )
                              .then((e) => {
                                  null != e && l(e);
                              })
                              .catch((e) => {
                                  !1 === (null != c && c(e)) && (r(!0), H.A.captureException(e));
                              });
                      },
                  }),
              })
        : null;
}
var z = (((i = {}).INLINE = "inline"), (i.FOOTER = "footer"), i);
function q(e) {
    let {
            recurrence: t,
            titleClassName: n,
            partnerLogo: i,
            showPartnerImage: r = !1,
            roundPromotionImage: o = !1,
            titleVariant: s = "primary",
            claimButtonPlacement: d = "inline",
            footerContent: u,
            analyticsLocations: f = [],
            onClaim: m,
            onClaimError: g,
            isClaiming: b,
            hideClaimButton: A = !1,
        } = e,
        [p, P] = l.useState(t.code),
        [E, _] = l.useState(!1),
        C = null == p;
    return (0, a.jsxs)("div", {
        className: I.lA,
        children: [
            (0, a.jsxs)("div", {
                className: I.LV,
                children: [
                    (0, a.jsxs)("div", {
                        className: I.JN,
                        children: [
                            i,
                            (0, a.jsxs)("div", {
                                className: null != n ? `${I.yO} ${n}` : I.yO,
                                children: [
                                    (0, a.jsx)(v.D, {
                                        variant: "secondary" === s ? "heading-sm/semibold" : "heading-lg/semibold",
                                        color: "text-strong",
                                        children: t.title,
                                    }),
                                    (0, a.jsxs)(c.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, a.jsx)(v.D, {
                                                variant: "heading-xs/medium",
                                                color: "text-subtle",
                                                children: E
                                                    ? Y.intl.format(Y.t.i2EuFO, {
                                                          helpdeskArticle: w.A.getArticleURL(G.MVz.RECURRING_PROMOTION),
                                                      })
                                                    : C
                                                      ? t.body
                                                      : null != t.bodyClaimed
                                                        ? Y.intl.format(t.bodyClaimed, { date: t.endDate })
                                                        : t.body,
                                            }),
                                            null != t.bodyNote &&
                                                (0, a.jsx)(v.D, {
                                                    variant: "heading-xs/medium",
                                                    color: "text-subtle",
                                                    children: Y.intl.format(t.bodyNote, {
                                                        partnerName: h.CD[t.partnerId].label,
                                                        helpdeskArticle: w.A.getArticleURL(G.MVz.RECURRING_PROMOTION),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            "inline" === d &&
                                !1 === A &&
                                (0, a.jsx)(X, {
                                    recurrence: t,
                                    canBeClaimed: C,
                                    hasClaimError: E,
                                    setCode: P,
                                    setHasClaimError: _,
                                    analyticsLocations: f,
                                    onClaim: m,
                                    onClaimError: g,
                                    isClaiming: b,
                                }),
                        ],
                    }),
                    r &&
                        (0, a.jsx)("div", {
                            className: I.R4,
                            children: (0, a.jsx)(x._, {
                                src: t.asset ?? "",
                                className: I.Ys,
                                imageClassName: o || t.partnerId === h.XY ? I.Cy : void 0,
                                width: 100,
                                height: 100,
                                zoomable: !1,
                            }),
                        }),
                ],
            }),
            "footer" === d && u,
            null != p && (0, a.jsx)(F, { recurrence: { ...t, code: p }, analyticsLocations: f }),
            "footer" === d &&
                null == p &&
                !1 === A &&
                (0, a.jsx)(K, {
                    children: (0, a.jsx)(X, {
                        recurrence: t,
                        canBeClaimed: C,
                        hasClaimError: E,
                        setCode: P,
                        setHasClaimError: _,
                        className: I.qx,
                        analyticsLocations: f,
                        onClaim: m,
                        onClaimError: g,
                        isClaiming: b,
                    }),
                }),
        ],
    });
}
function J(e) {
    let { promotion: t, claimButtonPlacement: n = z.INLINE, analyticsLocations: i } = e;
    return (0, a.jsx)(q, {
        recurrence: t,
        titleVariant: "secondary",
        showPartnerImage: null != t.asset,
        roundPromotionImage: null != t.asset,
        claimButtonPlacement: n,
        analyticsLocations: i,
    });
}
var Q = n(517352),
    $ = n(325499);
(n(398523), n(881373));
var Z = n(721157);
n(675772);
var ee = n(712620),
    et = n(749962),
    en = n(524698),
    ei = n(770300),
    ea = n(855e3),
    el = n(12947);
let er =
        "https://cdn.discordapp.com/assets/content/a95525ff6082a74538cbdc2d99c11fb59fe43718b018db01cfc02114785ad8fe.png",
    eo =
        "https://cdn.discordapp.com/assets/content/c93472f5033e3079579ad496c9a54a95faa23623f5b1d11590d536c861f52e7c.svg",
    es =
        "https://cdn.discordapp.com/assets/content/6bbac5a155872455d86969ce5309725d9aa0317ba3b104b3027716e70040e11f.webp",
    ed =
        "https://cdn.discordapp.com/assets/content/76f19b9f01c1c098511dcc09090cfac5a68ee07fda021bac227df6dfc75bac51.png",
    ec =
        "https://cdn.discordapp.com/assets/content/9fc3dd18f3074d23a9bf78be5287bf7a727597c962ea220a0ebda311fd7997ea.webp";
function eu(e, t) {
    if (null != e) return "single_promo" === e.type ? e.config : e.configsByOutboundTitle[t];
}
function ef() {
    return Y.intl.formatToPlainString(Y.t.p7BkHh, { discountPercentage: 20 });
}
function em() {
    return (0, $.i)("ThirdPartyPromotionPartnerConfigs") ? Y.intl.string(Y.t.nmvvaN) : Y.intl.string(Y.t.igiSKe);
}
let eg = {
    [h.KS]: {
        getLockedPreview: () => ({ title: ef(), body: em(), asset: es }),
        landingUrl: "https://steelseries.com/",
        recurringCardAsset: es,
        outboundConfigs: {
            type: "single_promo",
            config: { getTitle: ef, getBody: em, getBodyClaimed: () => Y.t.w8CXUl },
        },
    },
    [h.XY]: {
        getLockedPreview: () => ({
            title: (0, $.i)("ThirdPartyPromotionPartnerConfigs")
                ? Y.intl.formatToPlainString(V.default.PF1aT5, { discountPercentage: 30 })
                : Y.intl.formatToPlainString(V.default.LsJ9hj, { discountPercent: 30 }),
            body: (0, $.i)("ThirdPartyPromotionPartnerConfigs")
                ? Y.intl.formatToPlainString(V.default.KoKwMn, {})
                : Y.intl.formatToPlainString(V.default.Yl5ww1, {}),
            asset: eo,
        }),
        landingUrl: "https://www.logitech.com/",
        recurringCardAsset: eo,
        outboundConfigs: {
            type: "multiple_promo",
            configsByOutboundTitle: {
                "Logitech G": {
                    getTitle: () => Y.intl.formatToPlainString(V.default.jkdhZq, { discountPercent: 30 }),
                    getBody: () => Y.intl.formatToPlainString(V.default.mH30Yx, {}),
                },
                "Logitech 5%": {
                    getTitle: () => Y.intl.formatToPlainString(V.default.zeBjoX, { discountPercent: 5 }),
                    getBody: () => Y.intl.formatToPlainString(V.default.fC4abC, { months: 6 }),
                },
                "Logitech PRO Series Sim": {
                    getTitle: () => Y.intl.formatToPlainString(V.default.pSBCjv, { discountPercent: 5 }),
                    getBody: () => Y.intl.formatToPlainString(V.default.lsRjfl, {}),
                },
            },
        },
    },
    [h.uV]: {
        getLockedPreview: () => ({
            title: Y.intl.string(el.default["qyXYB/"]),
            body: Y.intl.string(el.default.tvS3wV),
            asset: ed,
        }),
        recurringCardAsset: ed,
        showSectionHeaders: !1,
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => Y.intl.string(el.default["qyXYB/"]),
                getBody: () => Y.intl.string(el.default.tvS3wV),
                getClaimCtaText: () => Y.intl.string(Y.t.zA9d1J),
                getRedeemCtaText: () => Y.intl.string(Y.t["+zx47d"]),
            },
        },
    },
    [h.NC]: {
        getLockedPreview: () => ({
            title: Y.intl.string(en.default.CwMGMb),
            body: Y.intl.formatToPlainString(en.default["7b+4f6"], { discountPercentage: 20, months: 6 }),
            asset: ec,
        }),
        landingUrl: "https://www.youtube.com/redeem",
        oneTimeCardAsset: ec,
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => Y.intl.string(en.default.CwMGMb),
                getBody: () => Y.intl.formatToPlainString(en.default["7b+4f6"], { discountPercentage: 20, months: 6 }),
                getRedeemCtaText: () => Y.intl.string(en.default.KfOPbQ),
                claimButtonPlacement: z.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
    [h.P_]: {
        getLockedPreview: () => ({
            title: Y.intl.string(ea.default.ecPCdG),
            body: Y.intl.string(ea.default["2370GD"]),
            asset: er,
        }),
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => Y.intl.string(ea.default.ecPCdG),
                getAsset: () => er,
                getBody: () => Y.intl.string(ea.default["2370GD"]),
                claimButtonPlacement: z.FOOTER,
            },
        },
        showSectionHeaders: !1,
    },
    [h.Bt]: {
        getLockedPreview: () => ({
            title: Y.intl.string(ei.default.xDMrVa),
            body: Y.intl.formatToPlainString(ei.default.LUOF3v, { date: ee.AQ }),
            asset: (0, Z.VO)(h.Bt, Q.oW.OUTBOUND_PROMOTION_CLAIM_MODAL_CARD, G.NJ8.DARK),
        }),
        showSectionHeaders: !1,
        outboundConfigs: {
            type: "single_promo",
            config: {
                getTitle: () => Y.intl.string(ei.default.xDMrVa),
                getBody: () => Y.intl.formatToPlainString(ei.default.LUOF3v, { date: ee.AQ }),
                getAsset: (e, t) => (0, Z.VO)(h.Bt, Q.oW.OUTBOUND_PROMOTION_CLAIM_MODAL_CARD, t),
                getClaimCtaText: () => Y.intl.string(et.default["lbyFG+"]),
                getRedeemCtaText: () => Y.intl.string(et.default["6rwUm2"]),
                claimButtonPlacement: z.FOOTER,
            },
        },
    },
};
var eb = n(831768);
function eA() {
    return (0, a.jsx)(M, {
        title: Y.intl.string(eb.default.oDfh3O),
        body: Y.intl.string(eb.default.nDEuO1),
        asset: "https://cdn.discordapp.com/assets/content/7ce3849519c8d8cd4657b08bd2c689ea934bb60f53b959a04eb3b1db5d2f002a.png",
    });
}
var ep = n(682901);
function eP(e, t) {
    return (0, o.v)(e[0], t[0]) && (0, o.v)(e[1], t[1]);
}
function eE(e, t, n) {
    let i = eg[e.partnerId ?? ""],
        a = eu(i?.outboundConfigs, e.outboundTitle);
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
function e_(e) {
    var t;
    let n,
        i,
        { records: o, claimedOutboundPromotionCodeMap: s, theme: m } = e,
        [g, b] = l.useState(!1),
        p = [...o].sort((e, t) => (t.startDate > e.startDate ? 1 : -1)),
        E = g ? p : p.slice(0, 1),
        _ = !g && p.length > 1,
        T =
            ((t = o[0]?.partnerId ?? ""),
            (n = (0, r.bG)([P.A], () => (0, d.M)(P.A.theme))),
            null == (i = eg[t]?.logos) ? void 0 : n ? i.dark : i.light);
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(c.B, {
                direction: "vertical",
                gap: 12,
                children: E.map((e) => {
                    var t, n;
                    let i, l;
                    return (0, a.jsx)(
                        q,
                        {
                            recurrence:
                                ((t = s[e.id] ?? null),
                                (i = eg[e.partnerId ?? ""]),
                                (l = eu(i?.outboundConfigs, e.outboundTitle)),
                                {
                                    ...eE(e, t, m),
                                    asset: i?.recurringCardAsset ?? "",
                                    bodyClaimed: l?.getBodyClaimed?.(),
                                    redemptionURL:
                                        ((n = i?.landingUrl),
                                        "" !== e.outboundRedemptionPageLink
                                            ? e.outboundRedemptionPageLink
                                            : null != n
                                              ? n
                                              : null == t
                                                ? ""
                                                : (0, C.kc)(t, e)),
                                }),
                            partnerLogo: T,
                            showPartnerImage: !0,
                            claimButtonPlacement: z.FOOTER,
                            footerContent: (0, a.jsx)(W, {}),
                            analyticsLocations: [A.A.THIRD_PARTY_PROMOTIONS_MODAL],
                        },
                        e.id,
                    );
                }),
            }),
            _ &&
                (0, a.jsx)(u.D, {
                    className: I.K8,
                    onClick: () => {
                        b(!0);
                    },
                    children: (0, a.jsx)(f.E, {
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        children: Y.intl.string(Y.t.rjjZxV),
                    }),
                }),
        ],
    });
}
function eC(e) {
    let { partnerId: t } = e,
        n = eg[t]?.getLockedPreview?.() ?? null;
    return null == n ? null : (0, a.jsx)(M, { title: n.title, body: n.body, asset: n.asset });
}
function eT(e) {
    let {
            partnerIds: t,
            title: n,
            subtitle: i,
            modalTeaser: l,
            showXboxCard: r = !1,
            transitionState: o,
            onClose: d,
            analyticsLocationsProp: u,
        } = e,
        { promotionsLoaded: f } = (0, O.y7)(),
        { analyticsLocations: g } = (0, p.Ay)(u);
    return f
        ? (0, a.jsx)(p.f5, {
              value: g,
              children: (0, a.jsxs)(s.a, {
                  title: n,
                  subtitle: i,
                  actions: [],
                  preview: (0, a.jsx)(_.A, {
                      subscriptionTier: ep.pe.TIER_2,
                      fullWidth: !0,
                      onClick: () => {
                          d();
                      },
                      onSubscribeModalClose: (e) => {
                          if (e) return T.Ay.fetchActivePromotions();
                      },
                  }),
                  transitionState: o,
                  onClose: d,
                  children: [
                      (0, a.jsxs)(c.B, {
                          direction: "vertical",
                          gap: 12,
                          children: [r && (0, a.jsx)(eA, {}), t.map((e) => (0, a.jsx)(eC, { partnerId: e }, e))],
                      }),
                      (0, a.jsx)(eO, { modalTeaser: l }),
                  ],
              }),
          })
        : (0, a.jsx)(m.y, {});
}
function eO(e) {
    let { modalTeaser: t } = e;
    if (null == t) return null;
    let n = t.icon ?? g.NitroWheelIcon;
    return (0, a.jsxs)("div", {
        className: I.ar,
        children: [
            (0, a.jsxs)("div", {
                className: I.Uv,
                children: [
                    (0, a.jsx)(n, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(f.E, {
                        variant: t.titleVariant ?? "body-sm/semibold",
                        color: "text-default",
                        children: t.title,
                    }),
                ],
            }),
            null != t.body && (0, a.jsx)(f.E, { variant: "body-sm/medium", color: "text-muted", children: t.body }),
        ],
    });
}
function eR(e) {
    let { partnerIds: t, title: n, subtitle: i, modalTeaser: l, transitionState: o, onClose: d } = e,
        u = (0, r.bG)([P.A], () => P.A.theme),
        [g, b] = (0, r.bG)(
            [R.A],
            () => {
                let e = [],
                    n = [];
                return (
                    t.forEach((t) => {
                        let i = eg[t]?.outboundConfigs;
                        function a(e) {
                            return null != eu(i, e.outboundTitle);
                        }
                        let l = R.A.getPromotionsByPartner(t);
                        (e.push(...l.recurring.filter(a)), n.push(...l.oneTime.filter(a)));
                    }),
                    [e, n]
                );
            },
            [t],
            eP,
        ),
        { promotionsLoaded: p, claimedOutboundPromotionCodeMap: E } = (0, O.y7)();
    if (!p) return (0, a.jsx)(m.y, {});
    let _ = t
            .map((e) => eg[e])
            .filter(Boolean)
            .every((e) => !1 !== e.showSectionHeaders),
        C = _ ? { recurring: Y.intl.string(V.default["9Y2p6p"]), oneTime: Y.intl.string(V.default.Wm58LR) } : void 0,
        T = (0, a.jsx)(c.B, {
            direction: "vertical",
            gap: 12,
            children: b.map((e) => {
                let t = eE(e, E[e.id] ?? null, u),
                    n = eu(eg[e.partnerId ?? ""]?.outboundConfigs, e.outboundTitle);
                return (0, a.jsx)(
                    J,
                    {
                        promotion: t,
                        claimButtonPlacement: n?.claimButtonPlacement,
                        analyticsLocations: [A.A.THIRD_PARTY_PROMOTIONS_MODAL],
                    },
                    e.id,
                );
            }),
        });
    return (0, a.jsx)(s.a, {
        title: n,
        subtitle: i,
        actions: [],
        transitionState: o,
        onClose: d,
        children: (0, a.jsxs)("div", {
            className: I.kL,
            children: [
                g.length > 0 &&
                    (0, a.jsxs)(c.B, {
                        direction: "vertical",
                        gap: 12,
                        children: [
                            null != C &&
                                (0, a.jsx)(f.E, {
                                    variant: "body-md/medium",
                                    color: "text-subtle",
                                    children: C.recurring,
                                }),
                            (0, a.jsx)(e_, { records: g, claimedOutboundPromotionCodeMap: E, theme: u }),
                        ],
                    }),
                b.length > 0 &&
                    (_
                        ? (0, a.jsx)("div", {
                              className: I.E7,
                              children: (0, a.jsxs)(c.B, {
                                  direction: "vertical",
                                  gap: 12,
                                  children: [
                                      null != C &&
                                          (0, a.jsx)(f.E, {
                                              variant: "body-md/medium",
                                              color: "text-subtle",
                                              children: C.oneTime,
                                          }),
                                      T,
                                  ],
                              }),
                          })
                        : T),
                (0, a.jsx)(eO, { modalTeaser: l }),
            ],
        }),
    });
}
function eh(e) {
    let {
        partnerIds: t,
        isLocked: n = !1,
        title: i,
        subtitle: l,
        modalTeaser: r,
        showXboxCard: o,
        transitionState: s,
        onClose: d,
        analyticsLocations: c,
    } = e;
    return n
        ? (0, a.jsx)(eT, {
              partnerIds: t,
              title: i,
              subtitle: l,
              modalTeaser: r,
              showXboxCard: o,
              transitionState: s,
              onClose: d,
              analyticsLocationsProp: c,
          })
        : (0, a.jsx)(eR, { partnerIds: t, title: i, subtitle: l, modalTeaser: r, transitionState: s, onClose: d });
}
function eN(e) {
    let {
            partnerIds: t,
            isLocked: i = !1,
            title: l,
            subtitle: r,
            modalTeaser: o,
            showXboxCard: s,
            analyticsLocations: d,
            onClose: c,
        } = e,
        u = s ? [...t, "xbox"] : t;
    (E.default.track(G.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_ids: u, partner_id: u[0], location_stack: d }),
        T.Ay.fetchActivePromotions(),
        (0, b.mM)(
            async () => {
                let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(n.bind(n, 88210));
                return (n) =>
                    (0, a.jsx)(e, {
                        ...n,
                        partnerIds: t,
                        isLocked: i,
                        title: l,
                        subtitle: r,
                        modalTeaser: o,
                        showXboxCard: s,
                        analyticsLocations: d,
                    });
            },
            { onCloseCallback: c },
        ));
}
