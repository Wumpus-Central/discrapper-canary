n.d(t, { Z: () => K });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(284009),
    o = n.n(a),
    u = n(877624),
    d = n(417597),
    c = n(683071),
    p = n(834730),
    m = n(428644),
    E = n(69882),
    S = n(742810),
    _ = n(558620),
    I = n(699595),
    P = n(94420),
    A = n(543767),
    x = n(810498),
    h = n(364876),
    T = n(412260),
    g = n(91053),
    f = n(446929),
    j = n(97352),
    R = n(45938),
    M = n(975571),
    C = n(927578),
    y = n(937008),
    N = n(156312),
    k = n(166532),
    b = n(69494),
    O = n(534479),
    v = n(482132),
    w = n(615310),
    U = n(340034),
    D = n(50956),
    G = n(921925),
    L = n(104745),
    F = n(652215),
    H = n(788868),
    B = n(985018),
    W = n(249872);
function K(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: r, subscriptionTier: a, trialId: K, handleClose: z } = e,
        V = (0, P.t4)((e) => e.selectedSkuId),
        {
            activeSubscription: q,
            defaultPlanId: Z,
            priceOptions: Y,
            isPremium: X,
            isEligibleForTrial: Q,
            isEligibleForDiscount: $,
            referralTrialOfferId: J,
        } = (0, N.P5)(),
        ee = (0, _.A)(),
        et = (0, w.bB)(),
        { isGift: en, giftRecipient: el, giftMessage: ei, claimableRewards: er } = (0, y.Pv)(),
        es = (0, x.Mq)(ee),
        ea = (0, d.bG)([T.A], () => {
            let e = T.A.getMarketingComponentByType(u.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        eo = en && es && null != er && er.length > 0 && ea,
        eu = (Q || $) ?? !1,
        ed = i.useMemo(() => (0, C.Tm)({ skuId: V, isPremium: X, defaultPlanId: Z }), [V, X, Z]),
        ec = $ && ed.includes(H.gD.PREMIUM_MONTH_TIER_2) ? H.gD.PREMIUM_MONTH_TIER_2 : ed[0],
        ep = (0, d.bG)([j.A], () => j.A.get(ec)),
        em = [{ planId: ep?.id, quantity: 1 }],
        [eE, eS] = i.useState(eu),
        [e_, eI] = (0, A.Kq)({
            items: em,
            renewal: !1,
            preventFetch: !eu,
            applyEntitlements: !0,
            trialId: K,
            paymentSourceId: Y.paymentSourceId,
            currency: Y.currency,
        });
    i.useEffect(() => {
        eu && eS(e_?.subscriptionPeriodEnd == null);
    }, [e_, eu]),
        (0, m.A)(
            "Payment Modal Plan Select Step",
            eE,
            5,
            { proratedInvoicePreview: e_, proratedInvoiceError: eI, isEligibleForOffer: eu },
            { tags: { app_context: "billing" } },
        );
    let eP = eI?.message ?? B.intl.string(B.t.R0RpRX),
        eA = eu && null == eI,
        ex = eu && null != eI,
        eh = eA && null == q && e_?.subscriptionPeriodEnd == null,
        eT = (0, S.D7)({ location: "premium_payment_plan_select_step" });
    (0, I.c)(e_, $);
    let eg = i.useMemo(
        () => ({
            planOptions: ed,
            selectedPlanId: ee?.id,
            planGroup: r,
            subscriptionPeriodEnd: e_?.subscriptionPeriodEnd,
            useCompactGiftComponents: eo,
            handleClose: z,
        }),
        [ed, ee?.id, r, e_?.subscriptionPeriodEnd, eo, z],
    );
    if (eh) return eT ? (0, l.jsx)(E.Ed, { className: W.QW }) : (0, l.jsx)(O.A, {});
    o()(null != et, "Step should be set"), o()(ed.length > 0, "Premium plan options should be set");
    let ef =
        eT && !en
            ? (0, l.jsx)(U.XH, { ...eg, isInPlanSelectStep: !0, showPlanStatusSubText: !0 })
            : (0, l.jsx)(f.$p, { ...eg });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(D.Z, { giftMessage: ei }),
            !(en && (0, R.Ik)(el)) && (0, l.jsx)(b.A, { isEligibleForTrial: Q }),
            (0, l.jsxs)(v.dZ, {
                children: [
                    !eT && eA && (0, l.jsx)("hr", { className: W.T4 }),
                    (0, l.jsx)(L.P, { className: W.ZB, planSkuId: ep?.skuId, referralTrialOfferId: J }),
                    (0, l.jsx)(G.A, {}),
                    ex ? (0, l.jsx)(c.w, { type: "critical", children: eP }) : ef,
                    eA &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: s()(W.IM, { [W.Go]: eT }) }),
                                (0, l.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    children: B.intl.format(B.t.BHtnqA, {
                                        link: M.A.getArticleURL(F.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsxs)(v.UX, {
                children: [
                    eo && (0, l.jsx)(h._, {}),
                    (0, l.jsx)(g.Z, {
                        onStepChange: t,
                        onBackClick: () => t(k.pn.SKU_SELECT),
                        showBackButton: null == n && null == a,
                        planOptions: ed,
                        shouldRenderUpdatedPaymentModal: eA,
                        isTrial: Q,
                    }),
                ],
            }),
        ],
    });
}
