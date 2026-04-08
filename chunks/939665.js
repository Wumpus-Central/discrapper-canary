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
    _ = t(543767),
    S = t(810498),
    x = t(364876),
    T = t(412260),
    P = t(91053),
    h = t(446929),
    A = t(97352),
    I = t(45938),
    g = t(975571),
    f = t(927578),
    j = t(937008),
    R = t(156312),
    M = t(166532),
    C = t(69494),
    N = t(534479),
    O = t(482132),
    y = t(970077),
    b = t(615310),
    v = t(961098),
    k = t(340034),
    U = t(50956),
    w = t(921925),
    D = t(104745),
    G = t(652215),
    L = t(788868),
    F = t(985018),
    H = t(879663);
function B(e) {
    let { handleStepChange: n, initialPlanId: t, planGroup: r, subscriptionTier: a, trialId: B, handleClose: W } = e,
        {
            activeSubscription: K,
            selectedSkuId: z,
            defaultPlanId: V,
            priceOptions: q,
            isPremium: Y,
            isEligibleForTrial: Z,
            isEligibleForDiscount: X,
            referralTrialOfferId: Q,
        } = (0, R.P5)(),
        J = (0, y.A)(),
        $ = (0, b.bB)(),
        { isGift: ee, giftRecipient: en, giftMessage: et, claimableRewards: el } = (0, j.Pv)(),
        ei = (0, S.Mq)(J),
        er = (0, d.bG)([T.A], () => {
            let e = T.A.getMarketingComponentByType(u.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        es = ee && ei && null != el && el.length > 0 && er,
        ea = (Z || X) ?? !1,
        eo = i.useMemo(() => (0, f.Tm)({ skuId: z, isPremium: Y, defaultPlanId: V }), [z, Y, V]),
        eu = X && eo.includes(L.gD.PREMIUM_MONTH_TIER_2) ? L.gD.PREMIUM_MONTH_TIER_2 : eo[0],
        ed = (0, d.bG)([A.A], () => A.A.get(eu)),
        ec = [{ planId: ed?.id, quantity: 1 }],
        [ep, em] = i.useState(ea),
        [eE, e_] = (0, _.Kq)({
            items: ec,
            renewal: !1,
            preventFetch: !ea,
            applyEntitlements: !0,
            trialId: B,
            paymentSourceId: q.paymentSourceId,
            currency: q.currency,
        });
    i.useEffect(() => {
        ea && em(eE?.subscriptionPeriodEnd == null);
    }, [eE, ea]),
        (0, p.A)(
            "Payment Modal Plan Select Step",
            ep,
            5,
            { proratedInvoicePreview: eE, proratedInvoiceError: e_, isEligibleForOffer: ea },
            { tags: { app_context: "billing" } },
        );
    let eS = e_?.message ?? F.intl.string(F.t.R0RpRX),
        ex = ea && null == e_,
        eT = ea && null != e_,
        eP = ex && null == K && eE?.subscriptionPeriodEnd == null,
        eh = (0, E.D7)({ location: "premium_payment_plan_select_step" });
    (0, v.c)(eE, X);
    let eA = i.useMemo(
        () => ({
            planOptions: eo,
            selectedPlanId: J?.id,
            planGroup: r,
            subscriptionPeriodEnd: eE?.subscriptionPeriodEnd,
            useCompactGiftComponents: es,
            handleClose: W,
        }),
        [eo, J?.id, r, eE?.subscriptionPeriodEnd, es, W],
    );
    if (eP) return eh ? (0, l.jsx)(m.Ed, { className: H.QW }) : (0, l.jsx)(N.A, {});
    o()(null != $, "Step should be set"), o()(eo.length > 0, "Premium plan options should be set");
    let eI =
        eh && !ee
            ? (0, l.jsx)(k.XH, { ...eA, isInPlanSelectStep: !0, showPlanStatusSubText: !0 })
            : (0, l.jsx)(h.$p, { ...eA });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(U.Z, { giftMessage: et }),
            !(ee && (0, I.Ik)(en)) && (0, l.jsx)(C.A, { isEligibleForTrial: Z }),
            (0, l.jsxs)(O.dZ, {
                children: [
                    !eh && ex && (0, l.jsx)("hr", { className: H.T4 }),
                    (0, l.jsx)(D.P, { className: H.ZB, planSkuId: ed?.skuId, referralTrialOfferId: Q }),
                    (0, l.jsx)(w.A, {}),
                    eT ? (0, l.jsx)(c.wx6, { type: "critical", children: eS }) : eI,
                    ex &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: s()(H.IM, { [H.Go]: eh }) }),
                                (0, l.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    children: F.intl.format(F.t.BHtnqA, {
                                        link: g.A.getArticleURL(G.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsxs)(O.UX, {
                children: [
                    es && (0, l.jsx)(x._, {}),
                    (0, l.jsx)(P.Z, {
                        onStepChange: n,
                        onBackClick: () => n(M.pn.SKU_SELECT),
                        showBackButton: null == t && null == a,
                        planOptions: eo,
                        shouldRenderUpdatedPaymentModal: ex,
                        isTrial: Z,
                    }),
                ],
            }),
        ],
    });
}
