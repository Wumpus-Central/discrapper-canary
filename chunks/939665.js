t.d(n, { Z: () => W });
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
    x = t(543767),
    S = t(810498),
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
    G = t(592362),
    D = t(104745),
    L = t(652215),
    F = t(788868),
    H = t(985018),
    B = t(994560);
function W(e) {
    let { handleStepChange: n, initialPlanId: t, planGroup: r, subscriptionTier: a, trialId: W, handleClose: K } = e,
        {
            activeSubscription: V,
            hasFetchedSubscriptions: z,
            paymentSourceId: q,
            paymentSources: Y,
            selectedSkuId: Z,
            selectedPlan: X,
            step: Q,
            defaultPlanId: J,
            priceOptions: $,
            isPremium: ee,
            isEligibleForTrial: en,
            isEligibleForDiscount: et,
            referralTrialOfferId: el,
        } = (0, M.P5)(),
        { isGift: ei, giftRecipient: er, giftMessage: es, claimableRewards: ea } = (0, C.Pv)(),
        eo = (0, S.Mq)(X),
        eu = (0, d.bG)([T.A], () => {
            let e = T.A.getMarketingComponentByType(u.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        ed = ei && eo && null != ea && ea.length > 0 && eu,
        ec = (0, k.W)(Y, q),
        { newPlans: ep } = _.Ay.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        em = (0, d.bG)([g.default], () => g.default.getCurrentUser()),
        eE =
            !ei &&
            null != Z &&
            Z === F.pe.TIER_2 &&
            null != em &&
            em.hasHadPremium() &&
            z &&
            null == V &&
            (0, _.j2)(ec),
        e_ = (en || et) ?? !1,
        ex = i.useMemo(
            () =>
                (0, R.Tm)({
                    skuId: Z,
                    isPremium: ee,
                    multiMonthPlans: eE ? ep : [],
                    currentSubscription: V,
                    defaultPlanId: J,
                }),
            [Z, ee, ep, V, eE, J],
        ),
        eS = et && ex.includes(F.gD.PREMIUM_MONTH_TIER_2) ? F.gD.PREMIUM_MONTH_TIER_2 : ex[0],
        eP = (0, d.bG)([A.A], () => A.A.get(eS)),
        eT = [{ planId: eP?.id, quantity: 1 }],
        [eI, eh] = i.useState(e_),
        [eg, eA] = (0, x.Kq)({
            items: eT,
            renewal: !1,
            preventFetch: !e_,
            applyEntitlements: !0,
            trialId: W,
            paymentSourceId: $.paymentSourceId,
            currency: $.currency,
        });
    i.useEffect(() => {
        e_ && eh(eg?.subscriptionPeriodEnd == null);
    }, [eg, e_]),
        (0, p.A)(
            "Payment Modal Plan Select Step",
            eI,
            5,
            { proratedInvoicePreview: eg, proratedInvoiceError: eA, isEligibleForOffer: e_ },
            { tags: { app_context: "billing" } },
        );
    let ef = eA?.message ?? H.intl.string(H.t.R0RpRX),
        ej = e_ && null == eA,
        eR = e_ && null != eA,
        eC = ej && null == V && eg?.subscriptionPeriodEnd == null,
        eM = (0, E.D7)({ location: "premium_payment_plan_select_step" }),
        ey = i.useMemo(
            () => ({
                planOptions: ex,
                eligibleForMultiMonthPlans: eE,
                selectedPlanId: X?.id,
                planGroup: r,
                subscriptionPeriodEnd: eg?.subscriptionPeriodEnd,
                discountInvoiceItems: et ? eg?.invoiceItems : void 0,
                useCompactGiftComponents: ed,
                handleClose: K,
            }),
            [ex, eE, X?.id, r, eg?.subscriptionPeriodEnd, eg?.invoiceItems, et, ed, K],
        );
    if (eC) return eM ? (0, l.jsx)(m.Ed, { className: B.QW }) : (0, l.jsx)(O.A, {});
    o()(null != Q, "Step should be set"), o()(ex.length > 0, "Premium plan options should be set");
    let eN =
        eM && !ei
            ? (0, l.jsx)(b.XH, { ...ey, isInPlanSelectStep: !0, showPlanStatusSubText: !0 })
            : (0, l.jsx)(h.$p, { ...ey });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(U.Z, { giftMessage: es }),
            !(ei && (0, f.Ik)(er)) && (0, l.jsx)(N.A, { isEligibleForTrial: en }),
            (0, l.jsxs)(v.dZ, {
                children: [
                    !eM && ej && (0, l.jsx)("hr", { className: B.T4 }),
                    (0, l.jsx)(D.P, { className: B.ZB, planSkuId: eP?.skuId, referralTrialOfferId: el }),
                    (0, l.jsx)(G.A, {}),
                    (0, l.jsx)(w.A, {}),
                    eR ? (0, l.jsx)(c.wx6, { type: "critical", children: ef }) : eN,
                    ej &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: s()(B.IM, { [B.Go]: eM }) }),
                                (0, l.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    children: H.intl.format(H.t.BHtnqA, {
                                        link: j.A.getArticleURL(L.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsxs)(v.UX, {
                children: [
                    ed && (0, l.jsx)(P._, {}),
                    (0, l.jsx)(I.Z, {
                        onStepChange: n,
                        onBackClick: () => n(y.pn.SKU_SELECT),
                        showBackButton: null == t && null == a,
                        planOptions: ex,
                        shouldRenderUpdatedPaymentModal: ej,
                        isTrial: en,
                    }),
                ],
            }),
        ],
    });
}
