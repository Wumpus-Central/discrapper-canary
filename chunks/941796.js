n.d(t, { Z: () => ee });
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
    h = n(444927),
    A = n(274971),
    E = n(463376),
    C = n(558620),
    y = n(699595),
    _ = n(211159),
    S = n(543767),
    P = n(442123),
    I = n(380619),
    f = n(17928),
    T = n(67948),
    N = n(778712),
    g = n(937008),
    v = n(807098),
    x = n(374200),
    R = n(298305),
    M = n(375708),
    b = n(387745);
function L() {
    let e = (0, f.bG)([x.A], () => {
            let e = x.A.getMarketingComponentByType(u.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, g.Pv)(),
        n = (0, v.T)(e?.asset),
        r = (0, v.T)(e?.backgroundAsset),
        i = e?.gradient,
        s =
            null != i && null != i.colors && i.colors.length >= 2
                ? (0, I.K5)({ gradient: i.colors, angle: i.angle ?? void 0 })
                : void 0,
        o = (0, I.gc)(r);
    null != o && ((o.backgroundSize = "cover, auto"), (o.backgroundPosition = "right center, 0% 0%"));
    let c = (0, I.x)(o, s),
        d = e?.assetVariant === T.u.LARGE_TILTED;
    return null == e || null == t
        ? null
        : (0, l.jsxs)("div", {
              className: b.qD,
              style: c,
              children: [
                  (0, l.jsx)("div", {
                      className: a()([b.my], { [b.R_]: d }),
                      children: (0, l.jsx)(R.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: n ?? "",
                          size: d ? N._3.SIZE_72 : N._3.SIZE_40,
                          imageScaling: 1.25,
                      }),
                  }),
                  (0, l.jsx)(p.E, {
                      variant: "text-md/medium",
                      color: "always-white",
                      children: M.intl.string(M.t.Abiuci),
                  }),
              ],
          });
}
var O = n(410516),
    j = n(91053),
    w = n(361597),
    D = n(97352),
    U = n(45938),
    k = n(975571),
    G = n(428262),
    F = n(166532),
    Y = n(69494),
    B = n(482132),
    W = n(615310),
    H = n(340034),
    V = n(597770),
    K = n(102741),
    Z = n(296589);
function q(e) {
    let { giftMessage: t = M.intl.string(M.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: r } = (0, g.Pv)();
    return !n || (0, U.Ik)(r)
        ? null
        : (0, l.jsx)(K.A, {
              className: Z.z,
              iconSize: K.A.Sizes.SMALL,
              icon: V.o,
              color: null == t ? K.A.Colors.PRIMARY : K.A.Colors.SECONDARY,
              children: t,
          });
}
var z = n(921925),
    $ = n(71867),
    X = n(652215),
    J = n(788868),
    Q = n(249872);
function ee(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: i, subscriptionTier: s, trialId: f, handleClose: T } = e,
        {
            selectedSkuId: N,
            priceOptions: v,
            referralTrialOfferId: R,
            activeSubscription: b,
            defaultPlanId: V,
        } = (0, _.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            priceOptions: e.checkoutPriceOptions,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
        })),
        { isPremium: K, isEligibleForTrial: Z, isEligibleForDiscount: ee, discountOffer: et } = (0, E.i)(),
        en = (0, O.YJ)(et),
        el = (0, C.A)(),
        er = (0, W.bB)(),
        { isGift: ei, giftRecipient: ea, giftMessage: es, claimableRewards: eo } = (0, g.Pv)(),
        eu = (0, I.Mq)(el),
        ec = (0, c.bG)([x.A], () => {
            let e = x.A.getMarketingComponentByType(u.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        ed = ei && eu && null != eo && eo.length > 0 && ec,
        ep = (Z || ee) ?? !1,
        { monthlyDefaultSelected: em } = P.A.useConfig({
            location: `PremiumPaymentPlanSelectStep${ei ? "" : " - DO NOT USE"}`,
        }),
        eh = (0, h.A)(em),
        eA = r.useMemo(() => {
            let e = V;
            return ei && eh && null != N && (e = J.En[N]), (0, G.Tm)({ skuId: N, isPremium: K, defaultPlanId: e });
        }, [N, K, V, ei, eh]),
        eE = ee && null != en && eA.includes(en) ? en : eA[0],
        eC = (0, c.bG)([D.A], () => D.A.get(eE)),
        ey = [{ planId: eC?.id, quantity: 1 }],
        [e_, eS] = r.useState(ep),
        [eP, eI] = (0, S.YV)({
            items: ey,
            renewal: !1,
            preventFetch: !ep,
            applyEntitlements: !0,
            trialId: f,
            paymentSourceId: v.paymentSourceId,
            currency: v.currency,
        });
    r.useEffect(() => {
        ep && eS(eP?.subscriptionPeriodEnd == null);
    }, [eP, ep]),
        (0, m.A)(
            "Payment Modal Plan Select Step",
            e_,
            5,
            { proratedInvoicePreview: eP, proratedInvoiceError: eI, isEligibleForOffer: ep },
            { tags: { app_context: "billing" } },
        );
    let ef = eI?.message ?? M.intl.string(M.t.R0RpRX),
        eT = ep && null == eI,
        eN = ep && null != eI,
        eg = eT && null == b && eP?.subscriptionPeriodEnd == null;
    (0, y.W)({ priceOptions: v, trialId: f, discountInvoicePreview: eP });
    let ev = r.useMemo(
        () => ({
            planOptions: eA,
            selectedPlanId: el?.id,
            planGroup: i,
            subscriptionPeriodEnd: eP?.subscriptionPeriodEnd,
            useCompactGiftComponents: ed,
            handleClose: T,
        }),
        [eA, el?.id, i, eP?.subscriptionPeriodEnd, ed, T],
    );
    if (eg) return (0, l.jsx)(A.E, { className: Q.QW });
    o()(null != er, "Step should be set"), o()(eA.length > 0, "Premium plan options should be set");
    let ex = ei
        ? (0, l.jsx)(w.$p, { ...ev })
        : (0, l.jsx)(H.XH, { ...ev, isInPlanSelectStep: !0, showPlanStatusSubText: !0 });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(q, { giftMessage: es }),
            !(ei && (0, U.Ik)(ea)) && (0, l.jsx)(Y.A, { isEligibleForTrial: Z }),
            (0, l.jsxs)(B.dZ, {
                children: [
                    (0, l.jsx)($.P, { className: Q.ZB, planSkuId: eC?.skuId, referralTrialOfferId: R }),
                    (0, l.jsx)(z.A, {}),
                    eN ? (0, l.jsx)(d.w, { type: "critical", children: ef }) : ex,
                    eT &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: a()(Q.IM, Q.Go) }),
                                (0, l.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    children: M.intl.format(M.t.BHtnqA, {
                                        link: k.A.getArticleURL(X.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsxs)(B.UX, {
                children: [
                    ed && (0, l.jsx)(L, {}),
                    (0, l.jsx)(j.Z, {
                        onStepChange: t,
                        onBackClick: () => t(F.pn.SKU_SELECT),
                        showBackButton: null == n && null == s,
                        planOptions: eA,
                        shouldRenderUpdatedPaymentModal: eT,
                        isTrial: Z,
                    }),
                ],
            }),
        ],
    });
}
