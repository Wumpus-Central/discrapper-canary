n.d(t, { Z: () => S }), n(388685), n(997841);
var i = n(54381),
    r = n(473749),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(330726),
    u = n(716534),
    d = n(664891),
    m = n(171246),
    f = n(430824),
    p = n(563132),
    b = n(409813),
    h = n(45572),
    g = n(51499),
    x = n(678334),
    j = n(456251),
    v = n(614277),
    y = n(698708),
    O = n(388032),
    C = n(301120);
function S(e) {
    var t, n;
    let {
            backButtonEligible: l,
            prevStep: S,
            handleStepChange: P,
            trialFooterMessageOverride: N,
            reviewWarningMessage: E,
            planGroup: T,
            openInvoiceId: k,
            analyticsData: w,
            analyticsLocation: Z,
            handleClose: _,
        } = e,
        {
            activeSubscription: A,
            application: D,
            setUpdatedSubscription: I,
            contextMetadata: B,
            currencies: F,
            paymentSources: L,
            priceOptions: R,
            purchaseError: H,
            purchaseTokenAuthState: M,
            selectedPlan: W,
            selectedSku: z,
            setCurrency: G,
            setPaymentSourceId: Y,
            setPurchaseState: q,
            setPurchaseError: J,
            purchaseState: Q,
            subscriptionMetadataRequest: V,
            setHasAcceptedTerms: K,
        } = (0, p.JL)();
    a()(null != W, "Expected plan to be selected");
    let U = r.useRef(null),
        [X, $] = (0, c.Z)(!1, 500),
        ee = null == V ? void 0 : V.guild_id,
        et = (0, o.e7)([f.Z], () => f.Z.getGuild(ee), [ee]),
        [en, ei] = r.useState(null),
        er = (0, m.KW)(null != (t = null == z ? void 0 : z.flags) ? t : 0);
    r.useEffect(() => {
        null != H && null != U.current && U.current.scrollIntoView({ behavior: "smooth" });
    }, [H]);
    let el = r.useCallback(
            (e) => {
                I(e), P(b.h8.CONFIRM);
            },
            [P, I],
        ),
        ea = r.useRef(null);
    if (Q === h.A.PURCHASING) return (0, i.jsx)(j.Z, {});
    let eo = () => {
        P(b.h8.ADD_PAYMENT_STEPS);
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.Z, { className: C.breadcrumbs }),
            (0, i.jsxs)(v.C3, {
                children: [
                    (0, i.jsx)(y.Z, {}),
                    er &&
                        (0, i.jsxs)("div", {
                            className: C.userSubscriptionDetailsContainer,
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: "eyebrow",
                                    color: "text-default",
                                    children: O.intl.string(O.t.nf5LOU),
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: "text-xs/medium",
                                    color: "interactive-text-default",
                                    children: O.intl.format(O.t.y4n0GS, {
                                        applicationName: null == D ? void 0 : D.name,
                                    }),
                                }),
                            ],
                        }),
                    !er &&
                        (0, i.jsx)("div", {
                            className: C.guildPickerContainer,
                            children: (0, i.jsx)(s.gNt, {
                                label: O.intl.string(O.t["5qyruI"]),
                                children: (0, i.jsxs)("div", {
                                    className: C.guildNameContainer,
                                    children: [
                                        (0, i.jsx)(s.Text, {
                                            variant: "text-md/normal",
                                            children: O.intl.string(O.t.dBih7e),
                                        }),
                                        (0, i.jsx)(s.Text, {
                                            variant: "text-md/normal",
                                            lineClamp: 1,
                                            children:
                                                null != (n = null == et ? void 0 : et.name)
                                                    ? n
                                                    : O.intl.string(O.t.dtwqPR),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    null == A
                        ? (0, i.jsx)(u.Z, {
                              selectedPlanId: W.id,
                              planGroup: T,
                              paymentSources: L,
                              onPaymentSourceChange: (e) => Y(null != e ? e.id : null),
                              priceOptions: R,
                              currencies: F,
                              onCurrencyChange: (e) => G(e),
                              handlePaymentSourceAdd: () => P(b.h8.ADD_PAYMENT_STEPS),
                              setHasAcceptedTerms: K,
                              legalTermsNodeRef: ea,
                              hasLegalTermsFlash: X,
                              trialFooterMessageOverride: N,
                              reviewWarningMessage: E,
                              metadata: er ? void 0 : V,
                              purchaseState: Q,
                              hideSubscriptionDetails: !0,
                              handleClose: _,
                          })
                        : (0, i.jsx)(d.Z, {
                              premiumSubscription: A,
                              paymentSources: L,
                              priceOptions: R,
                              onPaymentSourceChange: (e) => Y(null != e ? e.id : null),
                              onPaymentSourceAdd: eo,
                              planId: W.id,
                              setHasAcceptedTerms: K,
                              legalTermsNodeRef: ea,
                              hasLegalTermsFlash: X,
                              onInvoiceError: (e) => {
                                  ei(e);
                              },
                              planGroup: T,
                              currencies: F,
                              onCurrencyChange: (e) => G(e),
                              hasOpenInvoice: null != k,
                              purchaseState: Q,
                              handleClose: _,
                          }),
                ],
            }),
            (0, i.jsx)(v.O3, {
                children: (0, i.jsx)(x.Z, {
                    premiumSubscription: null != A ? A : null,
                    setPurchaseState: q,
                    onBack: () => null != S && P(S),
                    onNext: el,
                    onPurchaseError: (e) => J(e),
                    legalTermsNodeRef: ea,
                    flashLegalTerms: () => $(!0),
                    analyticsLocation: Z,
                    baseAnalyticsData: w,
                    flowStartTime: B.startTime,
                    planGroup: T,
                    purchaseTokenAuthState: M,
                    openInvoiceId: k,
                    metadata: er ? void 0 : V,
                    backButtonEligible: l,
                    invoiceError: en,
                    disablePurchase: (null == V ? void 0 : V.guild_id) == null && !er,
                    onPaymentSourceAdd: eo,
                }),
            }),
        ],
    });
}
