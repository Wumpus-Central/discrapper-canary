n.d(t, { Z: () => W });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(284009),
    o = n.n(a),
    u = n(877624),
    d = n(417597),
    c = n(397927),
    p = n(428644),
    m = n(69882),
    E = n(742810),
    S = n(543767),
    _ = n(810498),
    I = n(364876),
    P = n(412260),
    x = n(91053),
    T = n(446929),
    A = n(97352),
    h = n(45938),
    g = n(975571),
    f = n(927578),
    j = n(413748),
    R = n(937008),
    M = n(156312),
    C = n(166532),
    N = n(69494),
    O = n(534479),
    k = n(482132),
    y = n(970077),
    b = n(615310),
    v = n(961098),
    U = n(340034),
    w = n(50956),
    G = n(921925),
    D = n(104745),
    L = n(652215),
    F = n(788868),
    H = n(985018),
    B = n(994560);
function W(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: r, subscriptionTier: a, trialId: W, handleClose: K } = e,
        z = (0, j.t4)((e) => e.selectedSkuId),
        {
            activeSubscription: V,
            defaultPlanId: q,
            priceOptions: Y,
            isPremium: Z,
            isEligibleForTrial: X,
            isEligibleForDiscount: Q,
            referralTrialOfferId: J,
        } = (0, M.P5)(),
        $ = (0, y.A)(),
        ee = (0, b.bB)(),
        { isGift: et, giftRecipient: en, giftMessage: el, claimableRewards: ei } = (0, R.Pv)(),
        er = (0, _.Mq)($),
        es = (0, d.bG)([P.A], () => {
            let e = P.A.getMarketingComponentByType(u.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        ea = et && er && null != ei && ei.length > 0 && es,
        eo = (X || Q) ?? !1,
        eu = i.useMemo(() => (0, f.Tm)({ skuId: z, isPremium: Z, defaultPlanId: q }), [z, Z, q]),
        ed = Q && eu.includes(F.gD.PREMIUM_MONTH_TIER_2) ? F.gD.PREMIUM_MONTH_TIER_2 : eu[0],
        ec = (0, d.bG)([A.A], () => A.A.get(ed)),
        ep = [{ planId: ec?.id, quantity: 1 }],
        [em, eE] = i.useState(eo),
        [eS, e_] = (0, S.Kq)({
            items: ep,
            renewal: !1,
            preventFetch: !eo,
            applyEntitlements: !0,
            trialId: W,
            paymentSourceId: Y.paymentSourceId,
            currency: Y.currency,
        });
    i.useEffect(() => {
        eo && eE(eS?.subscriptionPeriodEnd == null);
    }, [eS, eo]),
        (0, p.A)(
            "Payment Modal Plan Select Step",
            em,
            5,
            { proratedInvoicePreview: eS, proratedInvoiceError: e_, isEligibleForOffer: eo },
            { tags: { app_context: "billing" } },
        );
    let eI = e_?.message ?? H.intl.string(H.t.R0RpRX),
        eP = eo && null == e_,
        ex = eo && null != e_,
        eT = eP && null == V && eS?.subscriptionPeriodEnd == null,
        eA = (0, E.D7)({ location: "premium_payment_plan_select_step" });
    (0, v.c)(eS, Q);
    let eh = i.useMemo(
        () => ({
            planOptions: eu,
            selectedPlanId: $?.id,
            planGroup: r,
            subscriptionPeriodEnd: eS?.subscriptionPeriodEnd,
            useCompactGiftComponents: ea,
            handleClose: K,
        }),
        [eu, $?.id, r, eS?.subscriptionPeriodEnd, ea, K],
    );
    if (eT) return eA ? (0, l.jsx)(m.Ed, { className: B.QW }) : (0, l.jsx)(O.A, {});
    o()(null != ee, "Step should be set"), o()(eu.length > 0, "Premium plan options should be set");
    let eg =
        eA && !et
            ? (0, l.jsx)(U.XH, { ...eh, isInPlanSelectStep: !0, showPlanStatusSubText: !0 })
            : (0, l.jsx)(T.$p, { ...eh });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(w.Z, { giftMessage: el }),
            !(et && (0, h.Ik)(en)) && (0, l.jsx)(N.A, { isEligibleForTrial: X }),
            (0, l.jsxs)(k.dZ, {
                children: [
                    !eA && eP && (0, l.jsx)("hr", { className: B.T4 }),
                    (0, l.jsx)(D.P, { className: B.ZB, planSkuId: ec?.skuId, referralTrialOfferId: J }),
                    (0, l.jsx)(G.A, {}),
                    ex ? (0, l.jsx)(c.wx6, { type: "critical", children: eI }) : eg,
                    eP &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: s()(B.IM, { [B.Go]: eA }) }),
                                (0, l.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    children: H.intl.format(H.t.BHtnqA, {
                                        link: g.A.getArticleURL(L.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsxs)(k.UX, {
                children: [
                    ea && (0, l.jsx)(I._, {}),
                    (0, l.jsx)(x.Z, {
                        onStepChange: t,
                        onBackClick: () => t(C.pn.SKU_SELECT),
                        showBackButton: null == n && null == a,
                        planOptions: eu,
                        shouldRenderUpdatedPaymentModal: eP,
                        isTrial: X,
                    }),
                ],
            }),
        ],
    });
}
