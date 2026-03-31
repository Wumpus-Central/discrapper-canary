t.d(n, { Z: () => B });
var l = t(627968),
    i = t(64700),
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
    _ = t(666468),
    S = t(543767),
    x = t(810498),
    P = t(364876),
    T = t(412260),
    I = t(91053),
    h = t(446929),
    g = t(287809),
    A = t(97352),
    f = t(45938),
    j = t(975571),
    R = t(927578),
    C = t(937008),
    M = t(156312),
    y = t(166532),
    N = t(69494),
    O = t(534479),
    v = t(482132),
    b = t(340034),
    k = t(216641),
    U = t(50956),
    w = t(921925),
    G = t(104745),
    D = t(652215),
    L = t(788868),
    F = t(985018),
    H = t(994560);
function B(e) {
    let { handleStepChange: n, initialPlanId: t, planGroup: r, subscriptionTier: a, trialId: B, handleClose: W } = e,
        {
            activeSubscription: K,
            hasFetchedSubscriptions: V,
            paymentSourceId: z,
            paymentSources: q,
            selectedSkuId: Y,
            selectedPlan: Z,
            step: X,
            defaultPlanId: Q,
            priceOptions: J,
            isPremium: $,
            isEligibleForTrial: ee,
            isEligibleForDiscount: en,
            referralTrialOfferId: et,
        } = (0, M.P5)(),
        { isGift: el, giftRecipient: ei, giftMessage: er, claimableRewards: es } = (0, C.Pv)(),
        ea = (0, x.Mq)(Z),
        eo = (0, d.bG)([T.A], () => {
            let e = T.A.getMarketingComponentByType(u.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        eu = el && ea && null != es && es.length > 0 && eo,
        ed = (0, k.W)(q, z),
        { newPlans: ec } = _.Ay.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        ep = (0, d.bG)([g.default], () => g.default.getCurrentUser()),
        em =
            !el &&
            null != Y &&
            Y === L.pe.TIER_2 &&
            null != ep &&
            ep.hasHadPremium() &&
            V &&
            null == K &&
            (0, _.j2)(ed),
        eE = (ee || en) ?? !1,
        e_ = i.useMemo(
            () =>
                (0, R.Tm)({
                    skuId: Y,
                    isPremium: $,
                    multiMonthPlans: em ? ec : [],
                    currentSubscription: K,
                    defaultPlanId: Q,
                }),
            [Y, $, ec, K, em, Q],
        ),
        eS = en && e_.includes(L.gD.PREMIUM_MONTH_TIER_2) ? L.gD.PREMIUM_MONTH_TIER_2 : e_[0],
        ex = (0, d.bG)([A.A], () => A.A.get(eS)),
        eP = [{ planId: ex?.id, quantity: 1 }],
        [eT, eI] = i.useState(eE),
        [eh, eg] = (0, S.Kq)({
            items: eP,
            renewal: !1,
            preventFetch: !eE,
            applyEntitlements: !0,
            trialId: B,
            paymentSourceId: J.paymentSourceId,
            currency: J.currency,
        });
    i.useEffect(() => {
        eE && eI(eh?.subscriptionPeriodEnd == null);
    }, [eh, eE]),
        (0, p.A)(
            "Payment Modal Plan Select Step",
            eT,
            5,
            { proratedInvoicePreview: eh, proratedInvoiceError: eg, isEligibleForOffer: eE },
            { tags: { app_context: "billing" } },
        );
    let eA = eg?.message ?? F.intl.string(F.t.R0RpRX),
        ef = eE && null == eg,
        ej = eE && null != eg,
        eR = ef && null == K && eh?.subscriptionPeriodEnd == null,
        eC = (0, E.D7)({ location: "premium_payment_plan_select_step" }),
        eM = i.useMemo(
            () => ({
                planOptions: e_,
                eligibleForMultiMonthPlans: em,
                selectedPlanId: Z?.id,
                planGroup: r,
                subscriptionPeriodEnd: eh?.subscriptionPeriodEnd,
                discountInvoiceItems: en ? eh?.invoiceItems : void 0,
                useCompactGiftComponents: eu,
                handleClose: W,
            }),
            [e_, em, Z?.id, r, eh?.subscriptionPeriodEnd, eh?.invoiceItems, en, eu, W],
        );
    if (eR) return eC ? (0, l.jsx)(m.Ed, { className: H.QW }) : (0, l.jsx)(O.A, {});
    o()(null != X, "Step should be set"), o()(e_.length > 0, "Premium plan options should be set");
    let ey =
        eC && !el
            ? (0, l.jsx)(b.XH, { ...eM, isInPlanSelectStep: !0, showPlanStatusSubText: !0 })
            : (0, l.jsx)(h.$p, { ...eM });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(U.Z, { giftMessage: er }),
            !(el && (0, f.Ik)(ei)) && (0, l.jsx)(N.A, { isEligibleForTrial: ee }),
            (0, l.jsxs)(v.dZ, {
                children: [
                    !eC && ef && (0, l.jsx)("hr", { className: H.T4 }),
                    (0, l.jsx)(G.P, { className: H.ZB, planSkuId: ex?.skuId, referralTrialOfferId: et }),
                    (0, l.jsx)(w.A, {}),
                    ej ? (0, l.jsx)(c.wx6, { type: "critical", children: eA }) : ey,
                    ef &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: s()(H.IM, { [H.Go]: eC }) }),
                                (0, l.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    children: F.intl.format(F.t.BHtnqA, {
                                        link: j.A.getArticleURL(D.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsxs)(v.UX, {
                children: [
                    eu && (0, l.jsx)(P._, {}),
                    (0, l.jsx)(I.Z, {
                        onStepChange: n,
                        onBackClick: () => n(y.pn.SKU_SELECT),
                        showBackButton: null == t && null == a,
                        planOptions: e_,
                        shouldRenderUpdatedPaymentModal: ef,
                        isTrial: ee,
                    }),
                ],
            }),
        ],
    });
}
