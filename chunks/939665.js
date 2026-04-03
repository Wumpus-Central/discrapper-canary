t.d(n, { Z: () => H });
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
    T = t(412260),
    I = t(91053),
    P = t(446929),
    h = t(97352),
    A = t(45938),
    g = t(975571),
    f = t(927578),
    j = t(937008),
    R = t(156312),
    M = t(166532),
    C = t(69494),
    N = t(534479),
    O = t(482132),
    y = t(970077),
    v = t(615310),
    b = t(340034),
    k = t(50956),
    U = t(921925),
    w = t(104745),
    D = t(652215),
    G = t(788868),
    L = t(985018),
    F = t(994560);
function H(e) {
    let { handleStepChange: n, initialPlanId: t, planGroup: r, subscriptionTier: a, trialId: H, handleClose: B } = e,
        {
            activeSubscription: W,
            selectedSkuId: K,
            defaultPlanId: z,
            priceOptions: V,
            isPremium: q,
            isEligibleForTrial: Y,
            isEligibleForDiscount: Z,
            referralTrialOfferId: X,
        } = (0, R.P5)(),
        Q = (0, y.A)(),
        J = (0, v.bB)(),
        { isGift: $, giftRecipient: ee, giftMessage: en, claimableRewards: et } = (0, j.Pv)(),
        ei = (0, S.Mq)(Q),
        el = (0, d.bG)([T.A], () => {
            let e = T.A.getMarketingComponentByType(u.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        er = $ && ei && null != et && et.length > 0 && el,
        es = (Y || Z) ?? !1,
        ea = l.useMemo(() => (0, f.Tm)({ skuId: K, isPremium: q, defaultPlanId: z }), [K, q, z]),
        eo = Z && ea.includes(G.gD.PREMIUM_MONTH_TIER_2) ? G.gD.PREMIUM_MONTH_TIER_2 : ea[0],
        eu = (0, d.bG)([h.A], () => h.A.get(eo)),
        ed = [{ planId: eu?.id, quantity: 1 }],
        [ec, ep] = l.useState(es),
        [em, eE] = (0, _.Kq)({
            items: ed,
            renewal: !1,
            preventFetch: !es,
            applyEntitlements: !0,
            trialId: H,
            paymentSourceId: V.paymentSourceId,
            currency: V.currency,
        });
    l.useEffect(() => {
        es && ep(em?.subscriptionPeriodEnd == null);
    }, [em, es]),
        (0, p.A)(
            "Payment Modal Plan Select Step",
            ec,
            5,
            { proratedInvoicePreview: em, proratedInvoiceError: eE, isEligibleForOffer: es },
            { tags: { app_context: "billing" } },
        );
    let e_ = eE?.message ?? L.intl.string(L.t.R0RpRX),
        eS = es && null == eE,
        ex = es && null != eE,
        eT = eS && null == W && em?.subscriptionPeriodEnd == null,
        eI = (0, E.D7)({ location: "premium_payment_plan_select_step" }),
        eP = l.useMemo(
            () => ({
                planOptions: ea,
                selectedPlanId: Q?.id,
                planGroup: r,
                subscriptionPeriodEnd: em?.subscriptionPeriodEnd,
                discountInvoiceItems: Z ? em?.invoiceItems : void 0,
                useCompactGiftComponents: er,
                handleClose: B,
            }),
            [ea, Q?.id, r, em?.subscriptionPeriodEnd, em?.invoiceItems, Z, er, B],
        );
    if (eT) return eI ? (0, i.jsx)(m.Ed, { className: F.QW }) : (0, i.jsx)(N.A, {});
    o()(null != J, "Step should be set"), o()(ea.length > 0, "Premium plan options should be set");
    let eh =
        eI && !$
            ? (0, i.jsx)(b.XH, { ...eP, isInPlanSelectStep: !0, showPlanStatusSubText: !0 })
            : (0, i.jsx)(P.$p, { ...eP });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(k.Z, { giftMessage: en }),
            !($ && (0, A.Ik)(ee)) && (0, i.jsx)(C.A, { isEligibleForTrial: Y }),
            (0, i.jsxs)(O.dZ, {
                children: [
                    !eI && eS && (0, i.jsx)("hr", { className: F.T4 }),
                    (0, i.jsx)(w.P, { className: F.ZB, planSkuId: eu?.skuId, referralTrialOfferId: X }),
                    (0, i.jsx)(U.A, {}),
                    ex ? (0, i.jsx)(c.wx6, { type: "critical", children: e_ }) : eh,
                    eS &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("hr", { className: s()(F.IM, { [F.Go]: eI }) }),
                                (0, i.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    children: L.intl.format(L.t.BHtnqA, {
                                        link: g.A.getArticleURL(D.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, i.jsxs)(O.UX, {
                children: [
                    er && (0, i.jsx)(x._, {}),
                    (0, i.jsx)(I.Z, {
                        onStepChange: n,
                        onBackClick: () => n(M.pn.SKU_SELECT),
                        showBackButton: null == t && null == a,
                        planOptions: ea,
                        shouldRenderUpdatedPaymentModal: eS,
                        isTrial: Y,
                    }),
                ],
            }),
        ],
    });
}
