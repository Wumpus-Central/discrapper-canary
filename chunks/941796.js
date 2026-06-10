n.d(t, { Z: () => J });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    u = n(877624),
    c = n(702841),
    d = n(683071),
    p = n(834730),
    m = n(428644),
    h = n(274971),
    A = n(463376),
    E = n(558620),
    C = n(699595),
    y = n(211159),
    _ = n(543767),
    P = n(380619),
    S = n(17928),
    I = n(67948),
    T = n(778712),
    f = n(937008),
    N = n(807098),
    v = n(374200),
    g = n(298305),
    x = n(375708),
    R = n(387745);
function M() {
    let e = (0, S.bG)([v.A], () => {
            let e = v.A.getMarketingComponentByType(u.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, f.Pv)(),
        n = (0, N.T)(e?.asset),
        r = (0, N.T)(e?.backgroundAsset),
        i = e?.gradient,
        s =
            null != i && null != i.colors && i.colors.length >= 2
                ? (0, P.K5)({ gradient: i.colors, angle: i.angle ?? void 0 })
                : void 0,
        o = (0, P.gc)(r);
    null != o && ((o.backgroundSize = "cover, auto"), (o.backgroundPosition = "right center, 0% 0%"));
    let c = (0, P.x)(o, s),
        d = e?.assetVariant === I.u.LARGE_TILTED;
    return null == e || null == t
        ? null
        : (0, l.jsxs)("div", {
              className: R.qD,
              style: c,
              children: [
                  (0, l.jsx)("div", {
                      className: a()([R.my], { [R.R_]: d }),
                      children: (0, l.jsx)(g.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: n ?? "",
                          size: d ? T._3.SIZE_72 : T._3.SIZE_40,
                          imageScaling: 1.25,
                      }),
                  }),
                  (0, l.jsx)(p.E, {
                      variant: "text-md/medium",
                      color: "always-white",
                      children: x.intl.string(x.t.Abiuci),
                  }),
              ],
          });
}
var b = n(410516),
    L = n(91053),
    j = n(361597),
    O = n(97352),
    w = n(45938),
    D = n(975571),
    U = n(428262),
    k = n(166532),
    G = n(69494),
    F = n(482132),
    Y = n(615310),
    B = n(340034),
    W = n(597770),
    H = n(102741),
    V = n(296589);
function K(e) {
    let { giftMessage: t = x.intl.string(x.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: r } = (0, f.Pv)();
    return !n || (0, w.Ik)(r)
        ? null
        : (0, l.jsx)(H.A, {
              className: V.z,
              iconSize: H.A.Sizes.SMALL,
              icon: W.o,
              color: null == t ? H.A.Colors.PRIMARY : H.A.Colors.SECONDARY,
              children: t,
          });
}
var Z = n(921925),
    q = n(71867),
    z = n(652215),
    $ = n(249872);
function J(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: i, subscriptionTier: s, trialId: S, handleClose: I } = e,
        {
            selectedSkuId: T,
            priceOptions: N,
            referralTrialOfferId: g,
            activeSubscription: R,
            defaultPlanId: W,
        } = (0, y.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            priceOptions: e.checkoutPriceOptions,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
        })),
        { isPremium: H, isEligibleForTrial: V, isEligibleForDiscount: J, discountOffer: X } = (0, A.i)(),
        Q = (0, b.YJ)(X),
        ee = (0, E.A)(),
        et = (0, Y.bB)(),
        { isGift: en, giftRecipient: el, giftMessage: er, claimableRewards: ei } = (0, f.Pv)(),
        ea = (0, P.Mq)(ee),
        es = (0, c.bG)([v.A], () => {
            let e = v.A.getMarketingComponentByType(u.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        eo = en && ea && null != ei && ei.length > 0 && es,
        eu = (V || J) ?? !1,
        ec = r.useMemo(() => (0, U.Tm)({ skuId: T, isPremium: H, defaultPlanId: W }), [T, H, W]),
        ed = J && null != Q && ec.includes(Q) ? Q : ec[0],
        ep = (0, c.bG)([O.A], () => O.A.get(ed)),
        em = [{ planId: ep?.id, quantity: 1 }],
        [eh, eA] = r.useState(eu),
        [eE, eC] = (0, _.YV)({
            items: em,
            renewal: !1,
            preventFetch: !eu,
            applyEntitlements: !0,
            trialId: S,
            paymentSourceId: N.paymentSourceId,
            currency: N.currency,
        });
    r.useEffect(() => {
        eu && eA(eE?.subscriptionPeriodEnd == null);
    }, [eE, eu]),
        (0, m.A)(
            "Payment Modal Plan Select Step",
            eh,
            5,
            { proratedInvoicePreview: eE, proratedInvoiceError: eC, isEligibleForOffer: eu },
            { tags: { app_context: "billing" } },
        );
    let ey = eC?.message ?? x.intl.string(x.t.R0RpRX),
        e_ = eu && null == eC,
        eP = eu && null != eC,
        eS = e_ && null == R && eE?.subscriptionPeriodEnd == null;
    (0, C.W)({ priceOptions: N, trialId: S, discountInvoicePreview: eE });
    let eI = r.useMemo(
        () => ({
            planOptions: ec,
            selectedPlanId: ee?.id,
            planGroup: i,
            subscriptionPeriodEnd: eE?.subscriptionPeriodEnd,
            useCompactGiftComponents: eo,
            handleClose: I,
        }),
        [ec, ee?.id, i, eE?.subscriptionPeriodEnd, eo, I],
    );
    if (eS) return (0, l.jsx)(h.E, { className: $.QW });
    o()(null != et, "Step should be set"), o()(ec.length > 0, "Premium plan options should be set");
    let eT = en
        ? (0, l.jsx)(j.$p, { ...eI })
        : (0, l.jsx)(B.XH, { ...eI, isInPlanSelectStep: !0, showPlanStatusSubText: !0 });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(K, { giftMessage: er }),
            !(en && (0, w.Ik)(el)) && (0, l.jsx)(G.A, { isEligibleForTrial: V }),
            (0, l.jsxs)(F.dZ, {
                children: [
                    (0, l.jsx)(q.P, { className: $.ZB, planSkuId: ep?.skuId, referralTrialOfferId: g }),
                    (0, l.jsx)(Z.A, {}),
                    eP ? (0, l.jsx)(d.w, { type: "critical", children: ey }) : eT,
                    e_ &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: a()($.IM, $.Go) }),
                                (0, l.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    children: x.intl.format(x.t.BHtnqA, {
                                        link: D.A.getArticleURL(z.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsxs)(F.UX, {
                children: [
                    eo && (0, l.jsx)(M, {}),
                    (0, l.jsx)(L.Z, {
                        onStepChange: t,
                        onBackClick: () => t(k.pn.SKU_SELECT),
                        showBackButton: null == n && null == s,
                        planOptions: ec,
                        shouldRenderUpdatedPaymentModal: e_,
                        isTrial: V,
                    }),
                ],
            }),
        ],
    });
}
