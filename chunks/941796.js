n.d(t, { Z: () => ee });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    u = n(877624),
    c = n(702841),
    d = n(683071),
    p = n(834730),
    m = n(428644),
    h = n(444927),
    A = n(274971),
    E = n(463376),
    C = n(558620),
    y = n(699595),
    _ = n(211159),
    S = n(543767),
    P = n(442123),
    I = n(380619),
    f = n(17928),
    T = n(67948),
    N = n(778712),
    v = n(937008),
    g = n(807098),
    x = n(374200),
    R = n(298305),
    M = n(375708),
    b = n(387745);
function L() {
    let e = (0, f.bG)([x.A], () => {
            let e = x.A.getMarketingComponentByType(u.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, v.Pv)(),
        n = (0, g.T)(e?.asset),
        r = (0, g.T)(e?.backgroundAsset),
        i = e?.gradient,
        s =
            null != i && null != i.colors && i.colors.length >= 2
                ? (0, I.K5)({ gradient: i.colors, angle: i.angle ?? void 0 })
                : void 0,
        o = (0, I.gc)(r);
    null != o && ((o.backgroundSize = "cover, auto"), (o.backgroundPosition = "right center, 0% 0%"));
    let c = (0, I.x)(o, s),
        d = e?.assetVariant === T.u.LARGE_TILTED;
    return null == e || null == t
        ? null
        : (0, l.jsxs)("div", {
              className: b.qD,
              style: c,
              children: [
                  (0, l.jsx)("div", {
                      className: a()([b.my], { [b.R_]: d }),
                      children: (0, l.jsx)(R.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: n ?? "",
                          size: d ? N._3.SIZE_72 : N._3.SIZE_40,
                          imageScaling: 1.25,
                      }),
                  }),
                  (0, l.jsx)(p.E, {
                      variant: "text-md/medium",
                      color: "always-white",
                      children: M.intl.string(M.t.Abiuci),
                  }),
              ],
          });
}
var O = n(410516),
    j = n(91053),
    w = n(361597),
    D = n(97352),
    U = n(45938),
    k = n(975571),
    G = n(428262),
    F = n(166532),
    Y = n(69494),
    B = n(482132),
    W = n(615310),
    H = n(340034),
    V = n(597770),
    K = n(102741),
    Z = n(296589);
function q(e) {
    let { giftMessage: t = M.intl.string(M.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: r } = (0, v.Pv)();
    return !n || (0, U.Ik)(r)
        ? null
        : (0, l.jsx)(K.A, {
              className: Z.z,
              iconSize: K.A.Sizes.SMALL,
              icon: V.o,
              color: null == t ? K.A.Colors.PRIMARY : K.A.Colors.SECONDARY,
              children: t,
          });
}
var z = n(921925),
    $ = n(71867),
    X = n(652215),
    J = n(788868),
    Q = n(249872);
function ee(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: i, subscriptionTier: s, trialId: f, handleClose: T } = e,
        {
            selectedSkuId: N,
            priceOptions: g,
            activeSubscription: R,
            defaultPlanId: b,
        } = (0, _.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
        })),
        { isPremium: V, isEligibleForTrial: K, isEligibleForDiscount: Z, discountOffer: ee } = (0, E.i)(),
        et = (0, O.YJ)(ee),
        en = (0, C.A)(),
        el = (0, W.bB)(),
        { isGift: er, giftRecipient: ei, giftMessage: ea, claimableRewards: es } = (0, v.Pv)(),
        eo = (0, I.Mq)(en),
        eu = (0, c.bG)([x.A], () => {
            let e = x.A.getMarketingComponentByType(u.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        ec = er && eo && null != es && es.length > 0 && eu,
        ed = (K || Z) ?? !1,
        { monthlyDefaultSelected: ep } = P.A.useConfig({
            location: `PremiumPaymentPlanSelectStep${er ? "" : " - DO NOT USE"}`,
        }),
        em = (0, h.A)(ep),
        eh = r.useMemo(() => {
            let e = b;
            return er && em && null != N && (e = J.En[N]), (0, G.Tm)({ skuId: N, isPremium: V, defaultPlanId: e });
        }, [N, V, b, er, em]),
        eA = Z && null != et && eh.includes(et) ? et : eh[0],
        eE = (0, c.bG)([D.A], () => D.A.get(eA)),
        eC = [{ planId: eE?.id, quantity: 1 }],
        [ey, e_] = r.useState(ed),
        [eS, eP] = (0, S.YV)({
            items: eC,
            renewal: !1,
            preventFetch: !ed,
            applyEntitlements: !0,
            trialId: f,
            paymentSourceId: g.paymentSourceId,
            currency: g.currency,
        });
    r.useEffect(() => {
        ed && e_(eS?.subscriptionPeriodEnd == null);
    }, [eS, ed]),
        (0, m.A)(
            "Payment Modal Plan Select Step",
            ey,
            5,
            { proratedInvoicePreview: eS, proratedInvoiceError: eP, isEligibleForOffer: ed },
            { tags: { app_context: "billing" } },
        );
    let eI = eP?.message ?? M.intl.string(M.t.R0RpRX),
        ef = ed && null == eP,
        eT = ed && null != eP,
        eN = ef && null == R && eS?.subscriptionPeriodEnd == null;
    (0, y.W)({ priceOptions: g, trialId: f, discountInvoicePreview: eS });
    let ev = r.useMemo(
        () => ({
            planOptions: eh,
            selectedPlanId: en?.id,
            planGroup: i,
            subscriptionPeriodEnd: eS?.subscriptionPeriodEnd,
            useCompactGiftComponents: ec,
            handleClose: T,
        }),
        [eh, en?.id, i, eS?.subscriptionPeriodEnd, ec, T],
    );
    if (eN) return (0, l.jsx)(A.E, { className: Q.QW });
    o()(null != el, "Step should be set"), o()(eh.length > 0, "Premium plan options should be set");
    let eg = er
        ? (0, l.jsx)(w.$p, { ...ev })
        : (0, l.jsx)(H.XH, { ...ev, isInPlanSelectStep: !0, showPlanStatusSubText: !0 });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(q, { giftMessage: ea }),
            !(er && (0, U.Ik)(ei)) && (0, l.jsx)(Y.A, { isEligibleForTrial: K }),
            (0, l.jsxs)(B.dZ, {
                children: [
                    (0, l.jsx)($.P, { className: Q.ZB, planSkuId: eE?.skuId }),
                    (0, l.jsx)(z.A, {}),
                    eT ? (0, l.jsx)(d.w, { type: "critical", children: eI }) : eg,
                    ef &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: a()(Q.IM, Q.Go) }),
                                (0, l.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    children: M.intl.format(M.t.BHtnqA, {
                                        link: k.A.getArticleURL(X.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsxs)(B.UX, {
                children: [
                    ec && (0, l.jsx)(L, {}),
                    (0, l.jsx)(j.Z, {
                        onStepChange: t,
                        onBackClick: () => t(F.pn.SKU_SELECT),
                        showBackButton: null == n && null == s,
                        planOptions: eh,
                        shouldRenderUpdatedPaymentModal: ef,
                        isTrial: K,
                    }),
                ],
            }),
        ],
    });
}
