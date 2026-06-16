"use strict";
n.d(t, { Z: () => ee });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(877624),
    c = n(702841),
    d = n(683071),
    _ = n(834730),
    h = n(428644),
    f = n(444927),
    p = n(274971),
    E = n(463376),
    m = n(558620),
    g = n(699595),
    A = n(211159),
    I = n(543767),
    T = n(442123),
    S = n(380619),
    y = n(17928),
    C = n(67948),
    N = n(778712),
    v = n(937008),
    R = n(807098),
    O = n(374200),
    b = n(298305),
    D = n(375708),
    L = n(387745);
function w() {
    let e = (0, y.bG)([O.A], () => {
            let e = O.A.getMarketingComponentByType(u.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, v.Pv)(),
        n = (0, R.T)(e?.asset),
        r = (0, R.T)(e?.backgroundAsset),
        s = e?.gradient,
        o =
            null != s && null != s.colors && s.colors.length >= 2
                ? (0, S.K5)({ gradient: s.colors, angle: s.angle ?? void 0 })
                : void 0,
        l = (0, S.gc)(r);
    null != l && ((l.backgroundSize = "cover, auto"), (l.backgroundPosition = "right center, 0% 0%"));
    let c = (0, S.x)(l, o),
        d = e?.assetVariant === C.u.LARGE_TILTED;
    return null == e || null == t
        ? null
        : (0, i.jsxs)("div", {
              className: L.qD,
              style: c,
              children: [
                  (0, i.jsx)("div", {
                      className: a()([L.my], { [L.R_]: d }),
                      children: (0, i.jsx)(b.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: n ?? "",
                          size: d ? N._3.SIZE_72 : N._3.SIZE_40,
                          imageScaling: 1.25,
                      }),
                  }),
                  (0, i.jsx)(_.E, {
                      variant: "text-md/medium",
                      color: "always-white",
                      children: D.intl.string(D.t.Abiuci),
                  }),
              ],
          });
}
var M = n(410516),
    P = n(91053),
    x = n(361597),
    k = n(97352),
    U = n(45938),
    G = n(975571),
    F = n(428262),
    V = n(166532),
    B = n(69494),
    j = n(482132),
    H = n(615310),
    Y = n(622631),
    W = n(597770),
    K = n(102741),
    $ = n(296589);
function z(e) {
    let { giftMessage: t = D.intl.string(D.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: r } = (0, v.Pv)();
    return !n || (0, U.Ik)(r)
        ? null
        : (0, i.jsx)(K.A, {
              className: $.z,
              iconSize: K.A.Sizes.SMALL,
              icon: W.o,
              color: null == t ? K.A.Colors.PRIMARY : K.A.Colors.SECONDARY,
              children: t,
          });
}
var q = n(921925),
    Z = n(71867),
    X = n(652215),
    Q = n(788868),
    J = n(249872);
function ee(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: s, subscriptionTier: o, trialId: y, handleClose: C } = e,
        {
            selectedSkuId: N,
            priceOptions: R,
            activeSubscription: b,
            defaultPlanId: L,
        } = (0, A.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
        })),
        { isPremium: W, isEligibleForTrial: K, isEligibleForDiscount: $, discountOffer: ee } = (0, E.i)(),
        et = (0, M.YJ)(ee),
        en = (0, m.A)(),
        ei = (0, H.bB)(),
        { isGift: er, giftRecipient: es, giftMessage: ea, claimableRewards: eo } = (0, v.Pv)(),
        el = (0, S.Mq)(en),
        eu = (0, c.bG)([O.A], () => {
            let e = O.A.getMarketingComponentByType(u.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        ec = er && el && null != eo && eo.length > 0 && eu,
        ed = (K || $) ?? !1,
        { monthlyDefaultSelected: e_ } = T.A.useConfig({
            location: `PremiumPaymentPlanSelectStep${er ? "" : " - DO NOT USE"}`,
        }),
        eh = (0, f.A)(e_),
        ef = r.useMemo(() => {
            let e = L;
            return er && eh && null != N && (e = Q.En[N]), (0, F.Tm)({ skuId: N, isPremium: W, defaultPlanId: e });
        }, [N, W, L, er, eh]),
        ep = $ && null != et && ef.includes(et) ? et : ef[0],
        eE = (0, c.bG)([k.A], () => k.A.get(ep)),
        em = [{ planId: eE?.id, quantity: 1 }],
        [eg, eA] = r.useState(ed),
        [eI, eT] = (0, I.YV)({
            items: em,
            renewal: !1,
            preventFetch: !ed,
            applyEntitlements: !0,
            trialId: y,
            paymentSourceId: R.paymentSourceId,
            currency: R.currency,
        });
    r.useEffect(() => {
        ed && eA(eI?.subscriptionPeriodEnd == null);
    }, [eI, ed]),
        (0, h.A)(
            "Payment Modal Plan Select Step",
            eg,
            5,
            { proratedInvoicePreview: eI, proratedInvoiceError: eT, isEligibleForOffer: ed },
            { tags: { app_context: "billing" } },
        );
    let eS = eT?.message ?? D.intl.string(D.t.R0RpRX),
        ey = ed && null == eT,
        eC = ed && null != eT,
        eN = ey && null == b && eI?.subscriptionPeriodEnd == null;
    (0, g.W)({ priceOptions: R, trialId: y, discountInvoicePreview: eI });
    let ev = r.useMemo(
        () => ({
            planOptions: ef,
            selectedPlanId: en?.id,
            planGroup: s,
            subscriptionPeriodEnd: eI?.subscriptionPeriodEnd,
            useCompactGiftComponents: ec,
            handleClose: C,
        }),
        [ef, en?.id, s, eI?.subscriptionPeriodEnd, ec, C],
    );
    if (eN) return (0, i.jsx)(p.E, { className: J.QW });
    l()(null != ei, "Step should be set"), l()(ef.length > 0, "Premium plan options should be set");
    let eR = er
        ? (0, i.jsx)(x.$p, { ...ev })
        : (0, i.jsx)(Y.X, { ...ev, isInPlanSelectStep: !0, showPlanStatusSubText: !0 });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(z, { giftMessage: ea }),
            !(er && (0, U.Ik)(es)) && (0, i.jsx)(B.A, { isEligibleForTrial: K }),
            (0, i.jsxs)(j.dZ, {
                children: [
                    (0, i.jsx)(Z.P, { className: J.ZB, planSkuId: eE?.skuId }),
                    (0, i.jsx)(q.A, {}),
                    eC ? (0, i.jsx)(d.w, { type: "critical", children: eS }) : eR,
                    ey &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("hr", { className: a()(J.IM, J.Go) }),
                                (0, i.jsx)(_.E, {
                                    variant: "text-xs/normal",
                                    children: D.intl.format(D.t.BHtnqA, {
                                        link: G.A.getArticleURL(X.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, i.jsxs)(j.UX, {
                children: [
                    ec && (0, i.jsx)(w, {}),
                    (0, i.jsx)(P.Z, {
                        onStepChange: t,
                        onBackClick: () => t(V.pn.SKU_SELECT),
                        showBackButton: null == n && null == o,
                        planOptions: ef,
                        shouldRenderUpdatedPaymentModal: ey,
                        isTrial: K,
                    }),
                ],
            }),
        ],
    });
}
