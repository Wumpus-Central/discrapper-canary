n.d(t, { Z: () => S }), n(388685), n(997841);
var i = n(951288),
    r = n(647438),
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
    j = n(27034),
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
            planGroup: _,
            openInvoiceId: k,
            analyticsData: E,
            analyticsLocation: w,
            handleClose: Z,
        } = e,
        {
            activeSubscription: A,
            application: D,
            setUpdatedSubscription: I,
            contextMetadata: B,
            currencies: L,
            paymentSources: F,
            priceOptions: R,
            purchaseError: H,
            purchaseTokenAuthState: M,
            selectedPlan: W,
            selectedSku: G,
            setCurrency: z,
            setPaymentSourceId: V,
            setPurchaseState: q,
            setPurchaseError: K,
            purchaseState: Q,
            subscriptionMetadataRequest: Y,
            setHasAcceptedTerms: J,
        } = (0, f.JL)();
    a()(null != W, "Expected plan to be selected");
    let X = r.useRef(null),
        [U, $] = (0, c.Z)(!1, 500),
        ee = null == Y ? void 0 : Y.guild_id,
        et = (0, o.e7)([p.Z], () => p.Z.getGuild(ee), [ee]),
        [en, ei] = r.useState(null),
        er = (0, m.KW)(null != (t = null == G ? void 0 : G.flags) ? t : 0);
    r.useEffect(() => {
        null != H && null != X.current && X.current.scrollIntoView({ behavior: "smooth" });
    }, [H]);
    let el = r.useCallback(
            (e) => {
                I(e), P(b.h8.CONFIRM);
            },
            [P, I],
        ),
        ea = r.useRef(null);
    if (Q === h.A.PURCHASING) return (0, i.jsx)(v.Z, {});
    let eo = () => {
        P(b.h8.ADD_PAYMENT_STEPS);
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.Z, { className: C.breadcrumbs }),
            (0, i.jsxs)(j.C3, {
                children: [
                    (0, i.jsx)(y.Z, {}),
                    er &&
                        (0, i.jsxs)("div", {
                            className: C.userSubscriptionDetailsContainer,
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: "eyebrow",
                                    color: "header-secondary",
                                    children: O.intl.string(O.t.nf5LOT),
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: "text-xs/medium",
                                    color: "interactive-normal",
                                    children: O.intl.format(O.t.y4n0GR, {
                                        applicationName: null == D ? void 0 : D.name,
                                    }),
                                }),
                            ],
                        }),
                    !er &&
                        (0, i.jsxs)("div", {
                            className: C.guildPickerContainer,
                            children: [
                                (0, i.jsx)(s.vwX, {
                                    tag: s.RB0.H5,
                                    children: O.intl.string(O.t["5qyruL"]),
                                }),
                                (0, i.jsxs)("div", {
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
                                                    : O.intl.string(O.t.dtwqPT),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    null == A
                        ? (0, i.jsx)(u.Z, {
                              selectedPlanId: W.id,
                              planGroup: _,
                              paymentSources: F,
                              onPaymentSourceChange: (e) => V(null != e ? e.id : null),
                              priceOptions: R,
                              currencies: L,
                              onCurrencyChange: (e) => z(e),
                              handlePaymentSourceAdd: () => P(b.h8.ADD_PAYMENT_STEPS),
                              setHasAcceptedTerms: J,
                              legalTermsNodeRef: ea,
                              hasLegalTermsFlash: U,
                              trialFooterMessageOverride: N,
                              reviewWarningMessage: T,
                              metadata: er ? void 0 : Y,
                              purchaseState: Q,
                              hideSubscriptionDetails: !0,
                              handleClose: Z,
                          })
                        : (0, i.jsx)(d.Z, {
                              premiumSubscription: A,
                              paymentSources: F,
                              priceOptions: R,
                              onPaymentSourceChange: (e) => V(null != e ? e.id : null),
                              onPaymentSourceAdd: eo,
                              planId: W.id,
                              setHasAcceptedTerms: J,
                              legalTermsNodeRef: ea,
                              hasLegalTermsFlash: U,
                              onInvoiceError: (e) => {
                                  ei(e);
                              },
                              planGroup: _,
                              currencies: L,
                              onCurrencyChange: (e) => z(e),
                              hasOpenInvoice: null != k,
                              purchaseState: Q,
                              handleClose: Z,
                          }),
                ],
            }),
            (0, i.jsx)(j.O3, {
                children: (0, i.jsx)(x.Z, {
                    premiumSubscription: null != A ? A : null,
                    setPurchaseState: q,
                    onBack: () => null != S && P(S),
                    onNext: el,
                    onPurchaseError: (e) => K(e),
                    legalTermsNodeRef: ea,
                    flashLegalTerms: () => $(!0),
                    analyticsLocation: w,
                    baseAnalyticsData: E,
                    flowStartTime: B.startTime,
                    planGroup: _,
                    purchaseTokenAuthState: M,
                    openInvoiceId: k,
                    metadata: er ? void 0 : Y,
                    backButtonEligible: l,
                    invoiceError: en,
                    disablePurchase: (null == Y ? void 0 : Y.guild_id) == null && !er,
                    onPaymentSourceAdd: eo,
                }),
            }),
        ],
    });
}
