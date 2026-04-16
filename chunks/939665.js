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
    S = n(558620),
    _ = n(699595),
    I = n(94420),
    P = n(543767),
    x = n(810498),
    T = n(364876),
    A = n(412260),
    h = n(91053),
    g = n(446929),
    f = n(97352),
    j = n(45938),
    R = n(975571),
    M = n(927578),
    C = n(937008),
    N = n(156312),
    O = n(166532),
    k = n(69494),
    y = n(534479),
    b = n(482132),
    v = n(615310),
    U = n(340034),
    w = n(50956),
    G = n(921925),
    D = n(104745),
    L = n(652215),
    F = n(788868),
    H = n(985018),
    B = n(249872);
function W(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: r, subscriptionTier: a, trialId: W, handleClose: K } = e,
        z = (0, I.t4)((e) => e.selectedSkuId),
        {
            activeSubscription: V,
            defaultPlanId: q,
            priceOptions: Y,
            isPremium: Z,
            isEligibleForTrial: X,
            isEligibleForDiscount: Q,
            referralTrialOfferId: J,
        } = (0, N.P5)(),
        $ = (0, S.A)(),
        ee = (0, v.bB)(),
        { isGift: et, giftRecipient: en, giftMessage: el, claimableRewards: ei } = (0, C.Pv)(),
        er = (0, x.Mq)($),
        es = (0, d.bG)([A.A], () => {
            let e = A.A.getMarketingComponentByType(u.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        ea = et && er && null != ei && ei.length > 0 && es,
        eo = (X || Q) ?? !1,
        eu = i.useMemo(() => (0, M.Tm)({ skuId: z, isPremium: Z, defaultPlanId: q }), [z, Z, q]),
        ed = Q && eu.includes(F.gD.PREMIUM_MONTH_TIER_2) ? F.gD.PREMIUM_MONTH_TIER_2 : eu[0],
        ec = (0, d.bG)([f.A], () => f.A.get(ed)),
        ep = [{ planId: ec?.id, quantity: 1 }],
        [em, eE] = i.useState(eo),
        [eS, e_] = (0, P.Kq)({
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
    (0, _.c)(eS, Q);
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
    if (eT) return eA ? (0, l.jsx)(m.Ed, { className: B.QW }) : (0, l.jsx)(y.A, {});
    o()(null != ee, "Step should be set"), o()(eu.length > 0, "Premium plan options should be set");
    let eg =
        eA && !et
            ? (0, l.jsx)(U.XH, { ...eh, isInPlanSelectStep: !0, showPlanStatusSubText: !0 })
            : (0, l.jsx)(g.$p, { ...eh });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(w.Z, { giftMessage: el }),
            !(et && (0, j.Ik)(en)) && (0, l.jsx)(k.A, { isEligibleForTrial: X }),
            (0, l.jsxs)(b.dZ, {
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
                                        link: R.A.getArticleURL(L.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsxs)(b.UX, {
                children: [
                    ea && (0, l.jsx)(T._, {}),
                    (0, l.jsx)(h.Z, {
                        onStepChange: t,
                        onBackClick: () => t(O.pn.SKU_SELECT),
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
