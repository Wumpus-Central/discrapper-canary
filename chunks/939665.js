t.d(n, { Z: () => L });
var i = t(627968),
    l = t(64700),
    r = t(503698),
    s = t.n(r),
    a = t(284009),
    o = t.n(a),
    u = t(877624),
    d = t(417597),
    c = t(397927),
    p = t(428644),
    m = t(69882),
    E = t(742810),
    _ = t(543767),
    S = t(810498),
    x = t(364876),
    P = t(412260),
    T = t(91053),
    I = t(446929),
    h = t(97352),
    g = t(45938),
    A = t(975571),
    f = t(927578),
    j = t(937008),
    R = t(156312),
    C = t(166532),
    M = t(69494),
    N = t(534479),
    O = t(482132),
    y = t(340034),
    v = t(50956),
    b = t(921925),
    k = t(104745),
    U = t(652215),
    w = t(788868),
    D = t(985018),
    G = t(879663);
function L(e) {
    let { handleStepChange: n, initialPlanId: t, planGroup: r, subscriptionTier: a, trialId: L, handleClose: F } = e,
        {
            activeSubscription: H,
            selectedSkuId: B,
            selectedPlan: W,
            step: K,
            defaultPlanId: z,
            priceOptions: V,
            isPremium: q,
            isEligibleForTrial: Y,
            isEligibleForDiscount: Z,
            referralTrialOfferId: X,
        } = (0, R.P5)(),
        { isGift: Q, giftRecipient: J, giftMessage: $, claimableRewards: ee } = (0, j.Pv)(),
        en = (0, S.Mq)(W),
        et = (0, d.bG)([P.A], () => {
            let e = P.A.getMarketingComponentByType(u.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        ei = Q && en && null != ee && ee.length > 0 && et,
        el = (Y || Z) ?? !1,
        er = l.useMemo(() => (0, f.Tm)({ skuId: B, isPremium: q, defaultPlanId: z }), [B, q, z]),
        es = Z && er.includes(w.gD.PREMIUM_MONTH_TIER_2) ? w.gD.PREMIUM_MONTH_TIER_2 : er[0],
        ea = (0, d.bG)([h.A], () => h.A.get(es)),
        eo = [{ planId: ea?.id, quantity: 1 }],
        [eu, ed] = l.useState(el),
        [ec, ep] = (0, _.Kq)({
            items: eo,
            renewal: !1,
            preventFetch: !el,
            applyEntitlements: !0,
            trialId: L,
            paymentSourceId: V.paymentSourceId,
            currency: V.currency,
        });
    l.useEffect(() => {
        el && ed(ec?.subscriptionPeriodEnd == null);
    }, [ec, el]),
        (0, p.A)(
            "Payment Modal Plan Select Step",
            eu,
            5,
            { proratedInvoicePreview: ec, proratedInvoiceError: ep, isEligibleForOffer: el },
            { tags: { app_context: "billing" } },
        );
    let em = ep?.message ?? D.intl.string(D.t.R0RpRX),
        eE = el && null == ep,
        e_ = el && null != ep,
        eS = eE && null == H && ec?.subscriptionPeriodEnd == null,
        ex = (0, E.D7)({ location: "premium_payment_plan_select_step" }),
        eP = l.useMemo(
            () => ({
                planOptions: er,
                selectedPlanId: W?.id,
                planGroup: r,
                subscriptionPeriodEnd: ec?.subscriptionPeriodEnd,
                discountInvoiceItems: Z ? ec?.invoiceItems : void 0,
                useCompactGiftComponents: ei,
                handleClose: F,
            }),
            [er, W?.id, r, ec?.subscriptionPeriodEnd, ec?.invoiceItems, Z, ei, F],
        );
    if (eS) return ex ? (0, i.jsx)(m.Ed, { className: G.QW }) : (0, i.jsx)(N.A, {});
    o()(null != K, "Step should be set"), o()(er.length > 0, "Premium plan options should be set");
    let eT =
        ex && !Q
            ? (0, i.jsx)(y.XH, { ...eP, isInPlanSelectStep: !0, showPlanStatusSubText: !0 })
            : (0, i.jsx)(I.$p, { ...eP });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v.Z, { giftMessage: $ }),
            !(Q && (0, g.Ik)(J)) && (0, i.jsx)(M.A, { isEligibleForTrial: Y }),
            (0, i.jsxs)(O.dZ, {
                children: [
                    !ex && eE && (0, i.jsx)("hr", { className: G.T4 }),
                    (0, i.jsx)(k.P, { className: G.ZB, planSkuId: ea?.skuId, referralTrialOfferId: X }),
                    (0, i.jsx)(b.A, {}),
                    e_ ? (0, i.jsx)(c.wx6, { type: "critical", children: em }) : eT,
                    eE &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("hr", { className: s()(G.IM, { [G.Go]: ex }) }),
                                (0, i.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    children: D.intl.format(D.t.BHtnqA, {
                                        link: A.A.getArticleURL(U.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, i.jsxs)(O.UX, {
                children: [
                    ei && (0, i.jsx)(x._, {}),
                    (0, i.jsx)(T.Z, {
                        onStepChange: n,
                        onBackClick: () => n(C.pn.SKU_SELECT),
                        showBackButton: null == t && null == a,
                        planOptions: er,
                        shouldRenderUpdatedPaymentModal: eE,
                        isTrial: Y,
                    }),
                ],
            }),
        ],
    });
}
