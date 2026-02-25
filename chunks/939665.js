n.d(t, { Z: () => W });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a),
    u = n(877624),
    d = n(417597),
    c = n(397927),
    p = n(428644),
    m = n(608805),
    E = n(69882),
    _ = n(666468),
    h = n(543767),
    x = n(810498),
    S = n(364876),
    P = n(412260),
    I = n(91053),
    T = n(446929),
    g = n(287809),
    A = n(97352),
    j = n(45938),
    f = n(975571),
    M = n(927578),
    R = n(937008),
    y = n(156312),
    C = n(166532),
    v = n(69494),
    N = n(534479),
    O = n(482132),
    b = n(340034),
    k = n(216641),
    w = n(50956),
    U = n(921925),
    D = n(592362),
    L = n(104745),
    G = n(652215),
    F = n(788868),
    H = n(985018),
    B = n(368959);
function W(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: s, subscriptionTier: a, trialId: W, handleClose: K } = e,
        {
            activeSubscription: z,
            hasFetchedSubscriptions: V,
            paymentSourceId: Z,
            paymentSources: q,
            selectedSkuId: Y,
            selectedPlan: X,
            step: Q,
            defaultPlanId: J,
            priceOptions: $,
            isPremium: ee,
            isEligibleForTrial: et,
            isEligibleForDiscount: en,
            referralTrialOfferId: el,
        } = (0, y.P5)(),
        { isGift: ei, giftRecipient: es, giftMessage: er, claimableRewards: ea } = (0, R.Pv)(),
        eo = (0, x.Mq)(X),
        eu = (0, d.bG)([P.A], () => {
            let e = P.A.getMarketingComponentByType(u.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        ed = ei && eo && null != ea && ea.length > 0 && eu,
        ec = (0, k.W)(q, Z),
        { newPlans: ep } = _.Ay.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        em = (0, d.bG)([g.default], () => g.default.getCurrentUser()),
        eE =
            !ei &&
            null != Y &&
            Y === F.pe.TIER_2 &&
            null != em &&
            em.hasHadPremium() &&
            V &&
            null == z &&
            (0, _.j2)(ec),
        e_ = (et || en) ?? !1,
        eh = i.useMemo(
            () =>
                (0, M.Tm)({
                    skuId: Y,
                    isPremium: ee,
                    multiMonthPlans: eE ? ep : [],
                    currentSubscription: z,
                    defaultPlanId: J,
                }),
            [Y, ee, ep, z, eE, J],
        ),
        ex = en && eh.includes(F.gD.PREMIUM_MONTH_TIER_2) ? F.gD.PREMIUM_MONTH_TIER_2 : eh[0],
        eS = (0, d.bG)([A.A], () => A.A.get(ex)),
        eP = [{ planId: eS?.id, quantity: 1 }],
        [eI, eT] = i.useState(e_),
        [eg, eA] = (0, h.Kq)({
            items: eP,
            renewal: !1,
            preventFetch: !e_,
            applyEntitlements: !0,
            trialId: W,
            paymentSourceId: $.paymentSourceId,
            currency: $.currency,
        });
    i.useEffect(() => {
        e_ && eT(eg?.subscriptionPeriodEnd == null);
    }, [eg, e_]),
        (0, p.A)(
            "Payment Modal Plan Select Step",
            eI,
            5,
            { proratedInvoicePreview: eg, proratedInvoiceError: eA, isEligibleForOffer: e_ },
            { tags: { app_context: "billing" } },
        );
    let ej = eA?.message ?? H.intl.string(H.t.R0RpRX),
        ef = e_ && null == eA,
        eM = e_ && null != eA,
        eR = ef && null == z && !!e_ && eg?.subscriptionPeriodEnd == null,
        ey = (0, m.D7)({ location: "premium_payment_plan_select_step" }),
        eC = i.useMemo(
            () => ({
                planOptions: eh,
                eligibleForMultiMonthPlans: eE,
                selectedPlanId: X?.id,
                planGroup: s,
                subscriptionPeriodEnd: eg?.subscriptionPeriodEnd,
                discountInvoiceItems: en ? eg?.invoiceItems : void 0,
                useCompactGiftComponents: ed,
                handleClose: K,
            }),
            [eh, eE, X?.id, s, eg?.subscriptionPeriodEnd, eg?.invoiceItems, en, ed, K],
        );
    if (eR) return ey ? (0, l.jsx)(E.Ed, { className: B.QW }) : (0, l.jsx)(N.A, {});
    o()(null != Q, "Step should be set"), o()(eh.length > 0, "Premium plan options should be set");
    let ev =
        ey && !ei
            ? (0, l.jsx)(b.XH, { ...eC, isInPlanSelectStep: !0, showSecondarySubTexts: !0 })
            : (0, l.jsx)(T.$p, { ...eC });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(w.Z, { giftMessage: er }),
            !(ei && (0, j.Ik)(es)) && (0, l.jsx)(v.A, { isEligibleForTrial: et }),
            (0, l.jsxs)(O.dZ, {
                children: [
                    !ey && ef && (0, l.jsx)("hr", { className: B.T4 }),
                    (0, l.jsx)(L.P, { className: B.ZB, planSkuId: eS?.skuId, referralTrialOfferId: el }),
                    (0, l.jsx)(D.A, {}),
                    (0, l.jsx)(U.A, {}),
                    eM ? (0, l.jsx)(c.wx6, { type: "critical", children: ej }) : ev,
                    ef &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: r()(B.IM, { [B.Go]: ey }) }),
                                (0, l.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    children: H.intl.format(H.t.BHtnqA, {
                                        link: f.A.getArticleURL(G.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsxs)(O.UX, {
                children: [
                    ed && (0, l.jsx)(S._, {}),
                    (0, l.jsx)(I.Z, {
                        onStepChange: t,
                        onBackClick: () => t(C.pn.SKU_SELECT),
                        showBackButton: null == n && null == a,
                        planOptions: eh,
                        shouldRenderUpdatedPaymentModal: ef,
                        isTrial: et,
                    }),
                ],
            }),
        ],
    });
}
