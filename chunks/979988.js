t.d(l, { default: () => eX });
var n = t(477900),
    s = t(582128),
    r = t(503698),
    a = t.n(r),
    i = t(17928),
    o = t(935462),
    c = t(297264),
    u = t(834730),
    d = t(318254),
    m = t(638495),
    x = t(821609),
    h = t(939249),
    p = t(597770),
    b = t(366010),
    j = t(192308),
    _ = t(289873),
    f = t(34188),
    N = t(358618),
    v = t(983851),
    g = t(972213),
    I = t(241524),
    k = t(964486),
    A = t(736653),
    C = t(793574),
    E = t(688810),
    T = t(429913),
    y = t(427209),
    O = t(977445),
    S = t(561573),
    R = t(288106),
    L = t(993046),
    D = t(801228),
    P = t(652165),
    U = t(561794),
    w = t(280450),
    M = t(67480),
    H = t(174459),
    B = t(371794),
    G = t(871123),
    Y = t(733391),
    q = t(832163),
    F = t(429635),
    z = t(69236),
    W = t(723807),
    $ = t(2157),
    J = t(44724);
t(321073);
var X = t(898523),
    V = t(345938),
    K = t(510022),
    Z = t(317560),
    Q = t(99161),
    ee = t(105292),
    el = t(698132);
function et(e) {
    let { mediaItems: l, labels: t, selectedIndex: s, onSelectIndex: r } = e;
    return l.length <= 1
        ? null
        : (0, n.jsxs)("div", {
              className: el.kL,
              children: [
                  (0, n.jsx)(u.E, {
                      variant: "text-xs/semibold",
                      color: "text-subtle",
                      children: ee.intl.string(ee.t.U7DAV9),
                  }),
                  (0, n.jsx)("div", {
                      className: el.Vg,
                      children: l.map((e, l) =>
                          (0, n.jsx)(
                              h.D,
                              {
                                  className: a()(el.xn, { [el.Y4]: l === s }),
                                  onClick: () => r(l),
                                  "aria-label": t?.[l],
                                  "aria-pressed": l === s,
                                  children: (0, n.jsx)("img", {
                                      className: el.q_,
                                      src:
                                          null != e.thumbnailSrc
                                              ? e.thumbnailSrc
                                              : "video" === e.type
                                                ? e.videoThumbnailSrc
                                                : e.src,
                                      alt: "",
                                      draggable: !1,
                                  }),
                              },
                              l,
                          ),
                      ),
                  }),
              ],
          });
}
var en = t(263911),
    es = t(971146),
    er = t(696292),
    ea = t(617986),
    ei = t(817519);
function eo(e) {
    let { orbsGate: l, orbPrice: t, onCheckout: r, onTrackEarnMoreOrbs: a, variant: i = "secondary" } = e,
        o = (0, m.k)(),
        c = s.useCallback(() => {
            (a(), (0, ea.mA)({ fromContent: er.u.SOCIAL_LAYER_STOREFRONT }), (0, Z.j)(o));
        }, [a, o]);
    return "HIDDEN" === l || null == t
        ? null
        : "NOT_ENOUGH_ORBS" === l
          ? (0, n.jsx)(x.$, { onClick: c, variant: i, icon: d.C, text: ee.intl.string(ee.t.H57f41), fullWidth: !0 })
          : (0, n.jsx)(x.$, {
                onClick: r,
                disabled: "NEEDS_NITRO" === l,
                variant: i,
                text: (0, n.jsx)("span", {
                    className: ei.Y,
                    children: ee.intl.format(ee.t.lOtBOI, {
                        orbPrice: t.amount,
                        orbIconHook: () => (0, n.jsx)(d.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                    }),
                }),
                fullWidth: !0,
            });
}
var ec = t(310784),
    eu = t.n(ec),
    ed = t(775602),
    em = t(654107),
    ex = t(161573),
    eh = t(619517),
    ep = t(44788),
    eb = t(549100);
function ej(e) {
    return (0, ep.$o)({ ...e, className: eb.tN, mediaPlayerClassName: eb.yf });
}
function e_(e) {
    return (0, n.jsx)(eh.Ay, { ...e });
}
function ef(e) {
    let { item: l, isMuted: t, className: r, alt: a = "" } = e,
        o = (function (e) {
            let l = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [t] = (0, em.rh)(l, "#000000");
            return s.useMemo(() => {
                if (null == l || "#000000" === t) return;
                let e = eu()(t).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [l, t]);
        })(l),
        c = (0, i.bG)([ed.Ay], () => ed.Ay.useReducedMotion),
        [u, d] = s.useState(null),
        [m, x] = s.useState(l);
    m !== l && (x(l), m?.type === "image" && l?.type === "image" && m.src !== l.src ? d(m.src) : d(null));
    let h = s.useCallback(() => d(null), []);
    if (null == l) return null;
    let p = {
        background: o,
        backgroundImage: null != l.backgroundSrc ? `url(${l.backgroundSrc})` : void 0,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    return "video" === l.type
        ? (0, n.jsx)("div", {
              className: r ?? eb.kL,
              children: (0, n.jsx)(
                  "div",
                  {
                      className: `${eb.h4} ${eb.nR}`,
                      style: p,
                      children: (0, n.jsx)(
                          ex.rr,
                          {
                              href: null,
                              thumbnail: { url: l.videoThumbnailSrc, width: 747, height: 560 },
                              video: { url: l.src, proxyURL: l.src, width: 747, height: 560 },
                              provider: void 0,
                              allowFullScreen: !0,
                              maxHeight: 560,
                              maxWidth: 747,
                              playable: !0,
                              className: eb.Ki,
                              volume: 1,
                              autoMute: t,
                              autoPlay: !0,
                              disableClickToUnmute: !0,
                              renderVideoComponent: ej,
                              renderImageComponent: e_,
                              renderLinkComponent: ep.bU,
                          },
                          `${l.src}-${t ? "muted" : "unmuted"}`,
                      ),
                  },
                  l.src,
              ),
          })
        : (0, n.jsx)("div", {
              className: r ?? eb.kL,
              children: (0, n.jsxs)("div", {
                  className: eb.h4,
                  style: p,
                  children: [
                      (0, n.jsx)("img", { src: l.src, alt: a, className: eb.Sl }, l.src),
                      null != u && !c && (0, n.jsx)("img", { src: u, alt: "", className: eb.Ve, onAnimationEnd: h }, u),
                  ],
              }),
          });
}
var eN = t(821707),
    ev = t(454491),
    eg = t(403581),
    eI = t(75678),
    ek = t(936785),
    eA = t(741899),
    eC = t(906383),
    eE = t(556766),
    eT = t(421108),
    ey = t(944038),
    eO = t(910200),
    eS = t(202541),
    eR = t(206285),
    eL = t(774331);
function eD(e) {
    let { offer: l, applicationId: t, analyticsLocations: r, onUpsellClick: a } = e,
        i = (0, eE.m)(t),
        o = s.useMemo(() => {
            let e = i?.[l.promotionId];
            return null == e
                ? null
                : {
                      Icon: (0, ek.LZ)(e.pdp?.icon ?? null),
                      text: "",
                      tooltip: null,
                      endsAt: (0, ek.RD)(e.endsAt),
                      flavor: e.flavor,
                      rewardRequirements: e.rewardRequirements,
                      rewardStatus: e.rewardStatus,
                  };
        }, [i, l.promotionId]),
        c = (0, eC.Pc)(o),
        u = (0, eT.tm)(o?.endsAt ?? null),
        d = (0, W.h)(o),
        m = (0, eA.N)("social_layer_storefront_product_details_modal"),
        h = s.useCallback(() => {
            (a(),
                (0, eI.A)({
                    subscriptionTier: eS.pe.TIER_2,
                    applicationId: t,
                    analyticsLocations: r,
                    ...(0, G.zl)(o?.rewardRequirements ?? []),
                }));
        }, [a, t, r, o]);
    if (null == o || u || null == d || o.rewardStatus === R.GM.CONSUMED || null == m) return null;
    let { discountPercent: p } = m;
    return (0, eC.ad)(c)
        ? (0, n.jsx)(eO.Ay, {
              className: eL.l,
              gradientColor: "nitro-pink",
              text: ee.intl.format(eR.default.dWuM4X, { discountPercent: p }),
              trailing: (0, n.jsx)("div", {
                  className: eL.b,
                  children: (0, n.jsx)(x.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      icon: eg.t,
                      text: ee.intl.string(ee.t.pj0XBN),
                      onClick: h,
                  }),
              }),
          })
        : (0, n.jsx)(eO.Ay, {
              className: eL.l,
              gradientColor: "nitro-pink",
              Icon: eg.t,
              text: ee.intl.format(eR.default["1HXutk"], { discountPercent: p }),
              trailing: (0, n.jsx)("div", {
                  className: eL.b,
                  children: (0, n.jsx)(ey.d, { applicationId: t, coupon: d, analyticsLocations: r, surface: "pdp" }),
              }),
          });
}
var eP = t(743693),
    eU = t(15061),
    ew = t(995393),
    eM = t(188275),
    eH = t(652215),
    eB = t(338235);
function eG(e) {
    let { sku: l } = e;
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: eB.AX,
              children: [
                  (0, n.jsx)(c.D, { variant: "heading-lg/bold", color: "text-strong", children: l.name }),
                  (0, n.jsx)(u.E, { variant: "text-sm/normal", color: "text-subtle", children: l.description }),
              ],
          });
}
function eY(e) {
    let { amount: l, orbGate: t } = e;
    return (0, n.jsxs)("div", {
        className: a()(eB.aX, { [eB.dQ]: "NEEDS_NITRO" === t || "NOT_ENOUGH_ORBS" === t }),
        children: [
            (0, n.jsx)(d.C, { size: "xs", color: "currentColor" }),
            (0, n.jsx)(u.E, { variant: "text-md/semibold", color: "currentColor", children: l }),
        ],
    });
}
function eq(e) {
    let { normalPrice: l, discountedPrice: t, discountPercent: s, hasNitroOffer: r, wrap: a } = e;
    return r && null != t
        ? (0, n.jsx)(eN.A, { discountedPrice: t, normalPrice: l, wrap: a })
        : null != s && null != t
          ? (0, n.jsxs)("div", {
                className: eB._k,
                children: [
                    (0, n.jsx)(u.E, { variant: "text-md/medium", className: eB.Jb, children: l }),
                    (0, n.jsx)(u.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                    (0, n.jsx)(u.E, { variant: "text-md/bold", className: eB.Fi, children: s }),
                ],
            })
          : (0, n.jsx)(u.E, { variant: "text-md/semibold", color: "text-strong", children: l });
}
function eF(e) {
    let { orbPrice: l, orbsGate: t, formattedPrice: s, hasNitroOffer: r, wrap: i } = e,
        { normalPrice: o, discountedPrice: c, discountPercent: u } = s;
    if (null == o) return null;
    let d = "HIDDEN" !== t && null != l,
        m = "CAN_CHECKOUT" === t;
    return (0, n.jsxs)("div", {
        className: eB.sj,
        children: [
            (0, n.jsx)(es.V, { textColor: "text-subtle" }),
            (0, n.jsx)("div", {
                className: a()(eB.hO, d && eB.XE),
                children:
                    d && m
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(eY, { amount: l.amount, orbGate: t }),
                                  (0, n.jsx)(eq, {
                                      normalPrice: o,
                                      discountedPrice: c,
                                      discountPercent: u,
                                      hasNitroOffer: r,
                                      wrap: i,
                                  }),
                              ],
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(eq, {
                                      normalPrice: o,
                                      discountedPrice: c,
                                      discountPercent: u,
                                      hasNitroOffer: r,
                                      wrap: i,
                                  }),
                                  d && (0, n.jsx)(eY, { amount: l.amount, orbGate: t }),
                              ],
                          }),
            }),
        ],
    });
}
function ez(e) {
    let {
            sku: l,
            guildId: t,
            giftRecipient: r,
            giftingOrigin: a,
            trackPDPClick: o,
            analyticsLocations: c,
            orbPrice: d,
            orbsGate: b,
            formattedPrice: j,
            unavailableLabel: _,
        } = e,
        f = (0, m.k)(),
        N = l.id,
        v = (0, i.bG)([q.A], () => q.A.getNormalizedSKUEligibility(N), [N]),
        g = v && "CAN_CHECKOUT" === b,
        I = j.discountedPrice ?? j.normalPrice,
        k = s.useCallback(() => {
            (o(ew.Jq.BUY_BUTTON),
                (0, Q.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...c, C.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                        contextKey: f,
                    },
                ));
        }, [l, o, t, c, f]),
        A = s.useCallback(() => {
            (o(ew.Jq.GIFT_BUTTON),
                (0, Q.a)(
                    l,
                    { isGift: !0, giftRecipient: r, giftingOrigin: a },
                    {
                        analyticsLocations: [...c, C.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON],
                        contextKey: f,
                    },
                ));
        }, [l, o, r, a, c, f]),
        E = (0, T.h)(l.applicationId),
        y = s.useMemo(() => [...c, C.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [c]),
        O = s.useCallback(() => {
            null != E &&
                (o(ew.Jq.BUY_WITH_ORBS_BUTTON),
                (0, P.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    contextKey: f,
                    onComplete: () => {
                        ((0, Z.j)(f), (0, K.n)({ sku: l, application: E, analyticsLocations: y, contextKey: f }));
                    },
                    analyticsLocations: y,
                }));
        }, [l, E, y, o, f]),
        S = s.useCallback(() => {
            o(ew.Jq.EARN_MORE_ORBS_BUTTON);
        }, [o]),
        R = v
            ? (0, n.jsx)(eo, {
                  orbsGate: b,
                  orbPrice: d,
                  onCheckout: O,
                  onTrackEarnMoreOrbs: S,
                  variant: g ? "primary" : "secondary",
              })
            : null,
        L = (0, n.jsxs)("div", {
            className: eB.mr,
            children: [
                (0, n.jsx)(x.$, {
                    variant: g ? "secondary" : "primary",
                    onClick: k,
                    text: null != I ? ee.intl.format(ee.t.YkXGyY, { priceString: I }) : ee.intl.string(ee.t.boqtTA),
                    fullWidth: !0,
                }),
                (0, n.jsx)(h.D, {
                    className: eB.xP,
                    onClick: A,
                    "aria-label": ee.intl.string(ee.t.QAZA5f),
                    role: "button",
                    children: (0, n.jsx)(p.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                }),
            ],
        }),
        D = (0, n.jsx)(x.$, {
            icon: p.GiftIcon,
            variant: "secondary",
            onClick: A,
            text: ee.intl.string(ee.t.QAZA5f),
            fullWidth: !0,
        });
    return null != _
        ? (0, n.jsxs)("div", {
              className: eB.NC,
              children: [
                  (0, n.jsx)(u.E, {
                      variant: "text-xxs/normal",
                      color: "text-subtle",
                      children: ee.intl.string(ee.t["35vxnc"]),
                  }),
                  (0, n.jsx)(x.$, { variant: "secondary", text: _, disabled: !0, fullWidth: !0 }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: eB.NC,
              children: [
                  !v &&
                      (0, n.jsx)(u.E, {
                          variant: "text-xxs/normal",
                          color: "text-subtle",
                          children: ee.intl.string(ee.t.IqlPbQ),
                      }),
                  g && R,
                  v ? L : D,
                  !g && R,
              ],
          });
}
function eW(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let s = null != l.labelIconAssetId ? (0, B.YE)(t, l.labelIconAssetId) : null;
    return (0, n.jsxs)("div", {
        className: eB.HI,
        children: [
            null != s && (0, n.jsx)("img", { className: eB.IX, src: s, alt: "" }, s),
            (0, n.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function e$(e) {
    let { onClick: l, onMouseDown: t, children: s, ariaLabel: r, className: a = eB.jU } = e;
    return (0, n.jsx)(h.D, { onClick: l, onMouseDown: t, className: a, "aria-label": r, role: "button", children: s });
}
function eJ(e) {
    let { selectedCarouselItem: l, title: t, description: s, applicationId: r, className: a } = e;
    return (0, n.jsxs)("div", {
        className: a,
        children: [
            null != t && (0, n.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
            (0, n.jsx)(eW, { applicationId: r, selectedCarouselItem: l }),
            null != s && (0, n.jsx)(u.E, { variant: "text-sm/normal", color: "text-subtle", children: s }),
        ],
    });
}
function eX(e) {
    let {
            customNavigateToSocialLayerStorefront: l,
            transitionState: t,
            returnRef: r,
            skuId: c,
            applicationId: d,
            isStorefront: m,
            giftRecipient: x,
            giftingOrigin: h,
            analyticsLocations: p,
            analyticsContext: C,
            unavailableLabel: T,
            onClose: P,
        } = e,
        K = (0, I.A)("(max-width: 485px)"),
        { analyticsLocations: Z } = (0, E.Ay)(p ?? []),
        { guildId: Q } = (0, G.nG)(d),
        el = (0, i.bG)([w.default], () => w.default.getId());
    s.useEffect(() => {
        null != c && (0, Y.iR)(d, c);
    }, [d, c]);
    let es = (0, F.A)({ applicationId: d }),
        er = (0, i.bG)([q.A], () => q.A.getSkuAssets()),
        ea = (0, i.bG)([M.A], () => M.A.isFetching(c)),
        ei = (0, b.M)((0, A.Ay)()),
        [eo, ec] = s.useState(!0),
        eu = (0, D.A)({ skuId: c }),
        ed = (0, i.bG)([S.A], () => S.A.getFetchStateForSkuId(c)?.type, [c]),
        em = (0, O.uS)(d),
        ex = null == eu || eu.available || em ? null : (T ?? ee.intl.string(ee.t.RWouSQ)),
        eh = (0, L.JL)({ sku: eu }),
        { display: ep, reward: eb, offers: ej } = (0, $.b)({ surface: "pdp", applicationId: d, skuId: c }),
        e_ = s.useMemo(() => ej.find((e) => e.type === R.B8.ORB_REDEMPTION) ?? null, [ej]),
        eN = s.useMemo(() => ej.find((e) => e.promotionId === eM.ZX), [ej]),
        eg = null != eN ? (es?.storefront?.promotions?.[eN.promotionId] ?? null) : null,
        eI = (0, W.h)(eg),
        { state: ek, isReady: eA } = (0, z.we)({ orbPriceAmount: eh?.amount, spendOrbsOffer: e_ }),
        eC = (0, L.CD)({ sku: eu }),
        [eE, eT] = s.useState(0),
        [ey, eO] = s.useMemo(
            () =>
                (function (e, l, t, n) {
                    let { heroWidth: s } = n,
                        r = [],
                        a = [];
                    if (null == e || 0 === e.length) return [r, a];
                    for (let n of e) {
                        let e = null != n.assetId ? t[n.assetId] : null;
                        null != e &&
                            (r.push(n),
                            e.mime_type.startsWith("video/")
                                ? a.push({
                                      type: "video",
                                      src: (0, B.YE)(l, e, s, "mp4"),
                                      videoThumbnailSrc: (0, B.YE)(l, e, s, "webp"),
                                      thumbnailSrc:
                                          null != n.thumbnailAssetId
                                              ? (0, B.YE)(l, n.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != n.backgroundAssetId
                                              ? (0, B.YE)(l, n.backgroundAssetId, s, G.pV)
                                              : void 0,
                                  })
                                : a.push({
                                      type: "image",
                                      src: (0, B.YE)(l, e, s, "webp"),
                                      thumbnailSrc:
                                          null != n.thumbnailAssetId
                                              ? (0, B.YE)(l, n.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != n.backgroundAssetId
                                              ? (0, B.YE)(l, n.backgroundAssetId, s, G.pV)
                                              : void 0,
                                  }));
                    }
                    return [r, a];
                })(eu?.tenantMetadata?.socialLayer?.carouselItems ?? [], d, er, { heroWidth: 747 }),
            [eu, d, er],
        ),
        [eS, eR] = s.useState(null),
        [eL, eY] = s.useState(!1);
    s.useEffect(() => {
        if (null == eS) return;
        let e = new ResizeObserver(() => {
            eY(eS.scrollHeight > eS.clientHeight);
        });
        return (e.observe(eS), () => e.disconnect());
    }, [eS]);
    let eq = eE < eO.length ? eE : 0,
        eW = ey[eq] ?? null,
        eX = eO.length > 1,
        eV = eO.some((e) => "video" === e.type);
    ((0, U.pE)(),
        (0, k.Ay)(() => {
            (H.default.track(eH.HAw.OPEN_MODAL, { location_stack: Z, type: eM.Nh, sku_id: c, application_id: d }),
                (0, Y.Xw)());
        }));
    let eK = s.useCallback(
            (e) => {
                H.default.track(eH.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: C?.sessionId,
                    sku_id: c,
                    sku_storefront_promotion_id: (0, X.Z)(c),
                    guild_id: C?.guildId,
                    application_id: d,
                    cta_type: e,
                    location_stack: Z,
                });
            },
            [C, c, d, Z],
        ),
        eZ = s.useRef(!1),
        eQ = s.useRef(null),
        e0 = "success" === ed && null != eu,
        e1 = e0 && eA;
    s.useEffect(() => {
        if (eZ.current) return;
        function e() {
            eZ.current ||
                ((eZ.current = !0),
                H.default.track(eH.HAw.SLAYER_STOREFRONT_PDP_VIEWED, {
                    slayer_storefront_session_id: C?.sessionId,
                    sku_id: c,
                    sku_storefront_promotion_id: (0, X.Z)(c),
                    guild_id: C?.guildId ?? Q,
                    application_id: d,
                    placement: C?.placement,
                    orbs_purchase_gate_state: e0 || "HIDDEN" !== ek ? ek : void 0,
                    orb_price: "HIDDEN" === ek ? void 0 : eh?.amount,
                    orbs_purchase_gate_settled: e1,
                    location_stack: Z,
                }));
        }
        if (e1 || "error" === ed) return void e();
        eQ.current ??= Date.now() + 5e3;
        let l = setTimeout(e, Math.max(0, eQ.current - Date.now()));
        return () => clearTimeout(l);
    }, [ek, e0, e1, ed, C, c, d, Q, eh?.amount, Z]);
    let e4 = s.useCallback(
        (e) => {
            (eT(e), eK(ew.Jq.CAROUSEL_ITEM));
        },
        [eK],
    );
    s.useEffect(() => {
        null == c || M.A.isFetching(c) || (0, Y.Pp)(d, c);
    }, [d, c]);
    let e7 = s.useCallback(() => {
            null != eu &&
                (eK(ew.Jq.FORWARD_BUTTON),
                (0, V.d)({
                    sku: eu,
                    guildId: Q,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: Z,
                    analyticsContext: C,
                }));
        }, [eu, Q, eK, Z, C]),
        e2 = s.useCallback(() => {
            eK(ew.Jq.WISHLIST_BUTTON);
        }, [eK]),
        e3 = s.useCallback(() => {
            (0, J.G)({ applicationId: d });
        }, [d]),
        e9 = s.useCallback(() => {
            (eK(ew.Jq.VISIT_SHOP), (0, j.closeAllModals)(), null != l ? l() : (0, J.default)({ applicationId: d }));
        }, [d, eK, l]),
        e8 = s.useCallback(() => {
            (ec(!eo), eK(ew.Jq.MUTE_BUTTON));
        }, [eo, eK]),
        e5 = eu?.tenantMetadata?.socialLayer;
    if (null == eu || null == e5) return ea ? (0, n.jsx)(_.y, {}) : null;
    let e6 = es?.storefront,
        le = e6?.logoAssetId != null ? (0, B.YE)(e6.applicationId, e6.logoAssetId, 256) : null,
        ll = e6?.lightThemeLogoAssetId != null ? (0, B.YE)(e6.applicationId, e6.lightThemeLogoAssetId, 256) : null,
        lt = null;
    lt = ei ? (le ?? ll) : (ll ?? le);
    let ln = null;
    null != ex ? (ln = (0, n.jsx)(eU.G, { label: ex })) : eu.exclusive && (ln = (0, n.jsx)(en.I, {}));
    let ls = (0, n.jsxs)(n.Fragment, {
            children: [
                !m &&
                    (0, n.jsxs)(e$, {
                        onClick: e9,
                        onMouseDown: e3,
                        ariaLabel: ee.intl.string(ee.t["+v/1Dk"]),
                        className: eB.gW,
                        children: [
                            (0, n.jsx)(f.U, { size: "refresh_sm", color: "currentColor" }),
                            (0, n.jsx)(u.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: ee.intl.string(ee.t["+v/1Dk"]),
                            }),
                        ],
                    }),
                (0, n.jsxs)("div", {
                    className: eB.V7,
                    children: [
                        null != eu &&
                            (0, n.jsx)(eP._, {
                                sku: eu,
                                isCardHovered: !0,
                                className: a()(eB.jU, eB.ij),
                                trackButtonClick: e2,
                                variant: K ? "secondary" : "overlay-secondary",
                                location: "social_layer_storefront_product_details_modal",
                            }),
                        (0, n.jsx)(e$, {
                            onClick: e7,
                            ariaLabel: ee.intl.string(ee.t.Ej3B3Y),
                            children: (0, n.jsx)(y.A, { size: "refresh_sm", color: "currentColor" }),
                        }),
                        eV &&
                            (0, n.jsx)(e$, {
                                onClick: e8,
                                ariaLabel: eo ? ee.intl.string(ee.t.YqAjXy) : ee.intl.string(ee.t.w4m945),
                                children: eo
                                    ? (0, n.jsx)(N._, { size: "refresh_sm", color: "currentColor" })
                                    : (0, n.jsx)(v.H, { size: "refresh_sm", color: "currentColor" }),
                            }),
                        (0, n.jsx)(e$, {
                            onClick: P,
                            ariaLabel: ee.intl.string(ee.t.cpT0Cq),
                            children: (0, n.jsx)(g.XLargeIcon, { size: "refresh_sm", color: "currentColor" }),
                        }),
                    ],
                }),
            ],
        }),
        lr =
            null != eN && null != eI
                ? (0, n.jsx)(eD, {
                      offer: eN,
                      applicationId: d,
                      analyticsLocations: Z,
                      onUpsellClick: () => eK(ew.Jq.NITRO_UPSELL_BUTTON),
                  })
                : null != ep
                  ? (0, n.jsx)(ev.e, {
                        promotion: ep,
                        reward: eb,
                        applicationId: d,
                        analyticsLocations: Z,
                        onUpsellClick: () => eK(ew.Jq.NITRO_UPSELL_BUTTON),
                    })
                  : null,
        la = (0, n.jsxs)("div", {
            className: a()(eB.Td, { [eB.t7]: eL }),
            children: [
                (0, n.jsx)(eF, {
                    orbPrice: eh,
                    orbsGate: ek,
                    formattedPrice: eC,
                    hasNitroOffer: ep?.flavor === "nitro",
                    wrap: K,
                }),
                lr,
                (0, n.jsx)(ez, {
                    sku: eu,
                    guildId: Q,
                    giftRecipient: x?.id !== el ? x : void 0,
                    giftingOrigin: x?.id !== el ? h : void 0,
                    trackPDPClick: eK,
                    analyticsLocations: Z,
                    orbPrice: eh,
                    orbsGate: ek,
                    formattedPrice: eC,
                    unavailableLabel: ex,
                }),
            ],
        }),
        li = (0, n.jsxs)("div", {
            className: eB.il,
            children: [(0, n.jsx)(ef, { item: eO[eq], isMuted: eo, alt: eW?.label ?? eu.name }), !K && ls],
        });
    return (0, n.jsxs)(o.EO, {
        transitionState: t,
        "hide-shadow": !0,
        parentComponent: "SocialLayerStorefrontProductDetailsModal",
        className: eB.CR,
        size: o.rI.DYNAMIC,
        "aria-label": eu.name,
        returnRef: r,
        children: [
            K &&
                (0, n.jsxs)("div", {
                    className: eB.Od,
                    children: [
                        m &&
                            null != lt &&
                            (0, n.jsx)("div", {
                                className: eB.mA,
                                children: (0, n.jsx)("img", { className: eB.wm, src: lt, alt: e6?.title ?? "" }),
                            }),
                        ls,
                    ],
                }),
            (0, n.jsxs)(o.$m, {
                className: eB.jE,
                scrollbarGutter: !1,
                children: [
                    (0, n.jsxs)("div", {
                        className: eB.nr,
                        children: [
                            K && li,
                            (0, n.jsxs)("div", {
                                className: a()(eB.op, { [eB.uk]: eu.exclusive }),
                                children: [
                                    !K &&
                                        (0, n.jsx)("div", {
                                            className: eB.r$,
                                            children:
                                                null != lt
                                                    ? (0, n.jsx)("img", {
                                                          className: eB.wm,
                                                          src: lt,
                                                          alt: e6?.title ?? "",
                                                      })
                                                    : null,
                                        }),
                                    (0, n.jsxs)("div", {
                                        ref: eR,
                                        className: eB.zD,
                                        children: [
                                            null != ln && (0, n.jsx)("div", { className: eB.vS, children: ln }),
                                            eX
                                                ? (0, n.jsxs)(n.Fragment, {
                                                      children: [
                                                          (0, n.jsx)(eG, { sku: eu }),
                                                          (0, n.jsx)("div", {
                                                              className: eB._D,
                                                              children: (0, n.jsx)(et, {
                                                                  mediaItems: eO,
                                                                  labels: ey.map((e) => e.label),
                                                                  selectedIndex: eq,
                                                                  onSelectIndex: e4,
                                                              }),
                                                          }),
                                                          (0, n.jsx)(eJ, {
                                                              selectedCarouselItem: eW,
                                                              title: eW?.title,
                                                              description: eW?.description,
                                                              applicationId: d,
                                                              className: eB.Jv,
                                                          }),
                                                      ],
                                                  })
                                                : (0, n.jsx)(eJ, {
                                                      selectedCarouselItem: eW,
                                                      title: eu.name,
                                                      description: eu.description,
                                                      applicationId: d,
                                                      className: eB.cP,
                                                  }),
                                        ],
                                    }),
                                    !K && la,
                                ],
                            }),
                            !K && li,
                        ],
                    }),
                    K && la,
                ],
            }),
        ],
    });
}
