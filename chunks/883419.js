n.d(t, { Z: () => S }), n(388685), n(997841);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(330726),
    u = n(716534),
    d = n(664891),
    m = n(171246),
    p = n(430824),
    f = n(563132),
    b = n(409813),
    h = n(45572),
    g = n(51499),
    x = n(678334),
    v = n(456251),
    j = n(614277),
    y = n(698708),
    O = n(388032),
    C = n(633290);
function S(e) {
    var t, n;
    let {
            backButtonEligible: l,
            prevStep: S,
            handleStepChange: P,
            trialFooterMessageOverride: N,
            reviewWarningMessage: T,
            planGroup: k,
            openInvoiceId: E,
            analyticsData: _,
            analyticsLocation: w,
            handleClose: Z,
        } = e,
        {
            activeSubscription: D,
            application: A,
            setUpdatedSubscription: I,
            contextMetadata: F,
            currencies: L,
            paymentSources: B,
            priceOptions: R,
            purchaseError: H,
            purchaseTokenAuthState: M,
            selectedPlan: W,
            selectedSku: G,
            setCurrency: z,
            setPaymentSourceId: V,
            setPurchaseState: q,
            setPurchaseError: Q,
            purchaseState: Y,
            subscriptionMetadataRequest: J,
            setHasAcceptedTerms: K,
        } = (0, f.JL)();
    a()(null != W, "Expected plan to be selected");
    let X = i.useRef(null),
        [U, $] = (0, c.Z)(!1, 500),
        ee = null == J ? void 0 : J.guild_id,
        et = (0, o.e7)([p.Z], () => p.Z.getGuild(ee), [ee]),
        [en, er] = i.useState(null),
        ei = (0, m.KW)(null != (t = null == G ? void 0 : G.flags) ? t : 0);
    i.useEffect(() => {
        null != H && null != X.current && X.current.scrollIntoView({ behavior: "smooth" });
    }, [H]);
    let el = i.useCallback(
            (e) => {
                I(e), P(b.h8.CONFIRM);
            },
            [P, I],
        ),
        ea = i.useRef(null);
    if (Y === h.A.PURCHASING) return (0, r.jsx)(v.Z, {});
    let eo = () => {
        P(b.h8.ADD_PAYMENT_STEPS);
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g.Z, { className: C.breadcrumbs }),
            (0, r.jsxs)(j.C3, {
                children: [
                    (0, r.jsx)(y.Z, {}),
                    ei &&
                        (0, r.jsxs)("div", {
                            className: C.userSubscriptionDetailsContainer,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "eyebrow",
                                    color: "header-secondary",
                                    children: O.intl.string(O.t.nf5LOT),
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-xs/medium",
                                    color: "interactive-normal",
                                    children: O.intl.format(O.t.y4n0GR, {
                                        applicationName: null == A ? void 0 : A.name,
                                    }),
                                }),
                            ],
                        }),
                    !ei &&
                        (0, r.jsxs)("div", {
                            className: C.guildPickerContainer,
                            children: [
                                (0, r.jsx)(s.vwX, { children: O.intl.string(O.t["5qyruL"]) }),
                                (0, r.jsxs)("div", {
                                    className: C.guildNameContainer,
                                    children: [
                                        (0, r.jsx)(s.Text, {
                                            variant: "text-md/normal",
                                            children: O.intl.string(O.t.dBih7e),
                                        }),
                                        (0, r.jsx)(s.Text, {
                                            variant: "text-md/normal",
                                            lineClamp: 1,
                                            children:
                                                null != (n = null == et ? void 0 : et.name)
                                                    ? n
                                                    : O.intl.string(O.t.dtwqPT),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    null == D
                        ? (0, r.jsx)(u.Z, {
                              selectedPlanId: W.id,
                              planGroup: k,
                              paymentSources: B,
                              onPaymentSourceChange: (e) => V(null != e ? e.id : null),
                              priceOptions: R,
                              currencies: L,
                              onCurrencyChange: (e) => z(e),
                              handlePaymentSourceAdd: () => P(b.h8.ADD_PAYMENT_STEPS),
                              setHasAcceptedTerms: K,
                              legalTermsNodeRef: ea,
                              hasLegalTermsFlash: U,
                              trialFooterMessageOverride: N,
                              reviewWarningMessage: T,
                              metadata: ei ? void 0 : J,
                              purchaseState: Y,
                              hideSubscriptionDetails: !0,
                              handleClose: Z,
                          })
                        : (0, r.jsx)(d.Z, {
                              premiumSubscription: D,
                              paymentSources: B,
                              priceOptions: R,
                              onPaymentSourceChange: (e) => V(null != e ? e.id : null),
                              onPaymentSourceAdd: eo,
                              planId: W.id,
                              setHasAcceptedTerms: K,
                              legalTermsNodeRef: ea,
                              hasLegalTermsFlash: U,
                              onInvoiceError: (e) => {
                                  er(e);
                              },
                              planGroup: k,
                              currencies: L,
                              onCurrencyChange: (e) => z(e),
                              hasOpenInvoice: null != E,
                              purchaseState: Y,
                              handleClose: Z,
                          }),
                ],
            }),
            (0, r.jsx)(j.O3, {
                children: (0, r.jsx)(x.Z, {
                    premiumSubscription: null != D ? D : null,
                    setPurchaseState: q,
                    onBack: () => null != S && P(S),
                    onNext: el,
                    onPurchaseError: (e) => Q(e),
                    legalTermsNodeRef: ea,
                    flashLegalTerms: () => $(!0),
                    analyticsLocation: w,
                    baseAnalyticsData: _,
                    flowStartTime: F.startTime,
                    planGroup: k,
                    purchaseTokenAuthState: M,
                    openInvoiceId: E,
                    metadata: ei ? void 0 : J,
                    backButtonEligible: l,
                    invoiceError: en,
                    disablePurchase: (null == J ? void 0 : J.guild_id) == null && !ei,
                    onPaymentSourceAdd: eo,
                }),
            }),
        ],
    });
}
