t.d(n, { Z: () => F });
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
    M = t(166532),
    C = t(69494),
    N = t(534479),
    O = t(482132),
    y = t(615310),
    v = t(340034),
    b = t(50956),
    k = t(921925),
    U = t(104745),
    w = t(652215),
    D = t(788868),
    G = t(985018),
    L = t(994560);
function F(e) {
    let { handleStepChange: n, initialPlanId: t, planGroup: r, subscriptionTier: a, trialId: F, handleClose: H } = e,
        {
            activeSubscription: B,
            selectedSkuId: W,
            selectedPlan: K,
            defaultPlanId: z,
            priceOptions: V,
            isPremium: q,
            isEligibleForTrial: Y,
            isEligibleForDiscount: Z,
            referralTrialOfferId: X,
        } = (0, R.P5)(),
        Q = (0, y.bB)(),
        { isGift: J, giftRecipient: $, giftMessage: ee, claimableRewards: en } = (0, j.Pv)(),
        et = (0, S.Mq)(K),
        ei = (0, d.bG)([P.A], () => {
            let e = P.A.getMarketingComponentByType(u.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        el = J && et && null != en && en.length > 0 && ei,
        er = (Y || Z) ?? !1,
        es = l.useMemo(() => (0, f.Tm)({ skuId: W, isPremium: q, defaultPlanId: z }), [W, q, z]),
        ea = Z && es.includes(D.gD.PREMIUM_MONTH_TIER_2) ? D.gD.PREMIUM_MONTH_TIER_2 : es[0],
        eo = (0, d.bG)([h.A], () => h.A.get(ea)),
        eu = [{ planId: eo?.id, quantity: 1 }],
        [ed, ec] = l.useState(er),
        [ep, em] = (0, _.Kq)({
            items: eu,
            renewal: !1,
            preventFetch: !er,
            applyEntitlements: !0,
            trialId: F,
            paymentSourceId: V.paymentSourceId,
            currency: V.currency,
        });
    l.useEffect(() => {
        er && ec(ep?.subscriptionPeriodEnd == null);
    }, [ep, er]),
        (0, p.A)(
            "Payment Modal Plan Select Step",
            ed,
            5,
            { proratedInvoicePreview: ep, proratedInvoiceError: em, isEligibleForOffer: er },
            { tags: { app_context: "billing" } },
        );
    let eE = em?.message ?? G.intl.string(G.t.R0RpRX),
        e_ = er && null == em,
        eS = er && null != em,
        ex = e_ && null == B && ep?.subscriptionPeriodEnd == null,
        eP = (0, E.D7)({ location: "premium_payment_plan_select_step" }),
        eT = l.useMemo(
            () => ({
                planOptions: es,
                selectedPlanId: K?.id,
                planGroup: r,
                subscriptionPeriodEnd: ep?.subscriptionPeriodEnd,
                discountInvoiceItems: Z ? ep?.invoiceItems : void 0,
                useCompactGiftComponents: el,
                handleClose: H,
            }),
            [es, K?.id, r, ep?.subscriptionPeriodEnd, ep?.invoiceItems, Z, el, H],
        );
    if (ex) return eP ? (0, i.jsx)(m.Ed, { className: L.QW }) : (0, i.jsx)(N.A, {});
    o()(null != Q, "Step should be set"), o()(es.length > 0, "Premium plan options should be set");
    let eI =
        eP && !J
            ? (0, i.jsx)(v.XH, { ...eT, isInPlanSelectStep: !0, showPlanStatusSubText: !0 })
            : (0, i.jsx)(I.$p, { ...eT });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(b.Z, { giftMessage: ee }),
            !(J && (0, g.Ik)($)) && (0, i.jsx)(C.A, { isEligibleForTrial: Y }),
            (0, i.jsxs)(O.dZ, {
                children: [
                    !eP && e_ && (0, i.jsx)("hr", { className: L.T4 }),
                    (0, i.jsx)(U.P, { className: L.ZB, planSkuId: eo?.skuId, referralTrialOfferId: X }),
                    (0, i.jsx)(k.A, {}),
                    eS ? (0, i.jsx)(c.wx6, { type: "critical", children: eE }) : eI,
                    e_ &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("hr", { className: s()(L.IM, { [L.Go]: eP }) }),
                                (0, i.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    children: G.intl.format(G.t.BHtnqA, {
                                        link: A.A.getArticleURL(w.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, i.jsxs)(O.UX, {
                children: [
                    el && (0, i.jsx)(x._, {}),
                    (0, i.jsx)(T.Z, {
                        onStepChange: n,
                        onBackClick: () => n(M.pn.SKU_SELECT),
                        showBackButton: null == t && null == a,
                        planOptions: es,
                        shouldRenderUpdatedPaymentModal: e_,
                        isTrial: Y,
                    }),
                ],
            }),
        ],
    });
}
