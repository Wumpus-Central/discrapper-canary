(n.d(t, { Z: () => S }), n(388685), n(997841));
var i = n(255367),
    r = n(73800),
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
    v = n(456251),
    j = n(27034),
    y = n(698708),
    C = n(388032),
    O = n(856461);
function S(e) {
    var t, n;
    let { backButtonEligible: l, prevStep: S, handleStepChange: P, trialFooterMessageOverride: N, reviewWarningMessage: k, planGroup: _, openInvoiceId: E, analyticsData: T, analyticsLocation: w, handleClose: Z } = e,
        { activeSubscription: I, application: A, setUpdatedSubscription: D, contextMetadata: L, currencies: B, paymentSources: F, priceOptions: R, purchaseError: H, purchaseTokenAuthState: M, selectedPlan: W, selectedSku: G, setCurrency: z, setPaymentSourceId: K, setPurchaseState: V, setPurchaseError: q, purchaseState: Q, subscriptionMetadataRequest: Y, setHasAcceptedTerms: J } = (0, p.JL)();
    a()(null != W, 'Expected plan to be selected');
    let X = r.useRef(null),
        [U, $] = (0, c.Z)(!1, 500),
        ee = null == Y ? void 0 : Y.guild_id,
        et = (0, o.e7)([f.Z], () => f.Z.getGuild(ee), [ee]),
        [en, ei] = r.useState(null),
        er = (0, m.KW)(null != (t = null == G ? void 0 : G.flags) ? t : 0);
    r.useEffect(() => {
        null != H && null != X.current && X.current.scrollIntoView({ behavior: 'smooth' });
    }, [H]);
    let el = r.useCallback(
            (e) => {
                (D(e), P(b.h8.CONFIRM));
            },
            [P, D]
        ),
        ea = r.useRef(null);
    if (Q === h.A.PURCHASING) return (0, i.jsx)(v.Z, {});
    let eo = () => {
        P(b.h8.ADD_PAYMENT_STEPS);
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.Z, { className: O.breadcrumbs }),
            (0, i.jsxs)(j.C3, {
                children: [
                    (0, i.jsx)(y.Z, {}),
                    er &&
                        (0, i.jsxs)('div', {
                            className: O.userSubscriptionDetailsContainer,
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: 'eyebrow',
                                    color: 'header-secondary',
                                    children: C.intl.string(C.t.nf5LOT)
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'interactive-normal',
                                    children: C.intl.format(C.t.y4n0GR, { applicationName: null == A ? void 0 : A.name })
                                })
                            ]
                        }),
                    !er &&
                        (0, i.jsxs)('div', {
                            className: O.guildPickerContainer,
                            children: [
                                (0, i.jsx)(s.vwX, {
                                    tag: s.RB0.H5,
                                    children: C.intl.string(C.t['5qyruL'])
                                }),
                                (0, i.jsxs)('div', {
                                    className: O.guildNameContainer,
                                    children: [
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-md/normal',
                                            children: C.intl.string(C.t.dBih7e)
                                        }),
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-md/normal',
                                            lineClamp: 1,
                                            children: null != (n = null == et ? void 0 : et.name) ? n : C.intl.string(C.t.dtwqPT)
                                        })
                                    ]
                                })
                            ]
                        }),
                    null == I
                        ? (0, i.jsx)(u.Z, {
                              selectedPlanId: W.id,
                              planGroup: _,
                              paymentSources: F,
                              onPaymentSourceChange: (e) => K(null != e ? e.id : null),
                              priceOptions: R,
                              currencies: B,
                              onCurrencyChange: (e) => z(e),
                              handlePaymentSourceAdd: () => P(b.h8.ADD_PAYMENT_STEPS),
                              setHasAcceptedTerms: J,
                              legalTermsNodeRef: ea,
                              hasLegalTermsFlash: U,
                              trialFooterMessageOverride: N,
                              reviewWarningMessage: k,
                              metadata: er ? void 0 : Y,
                              purchaseState: Q,
                              hideSubscriptionDetails: !0,
                              handleClose: Z
                          })
                        : (0, i.jsx)(d.Z, {
                              premiumSubscription: I,
                              paymentSources: F,
                              priceOptions: R,
                              onPaymentSourceChange: (e) => K(null != e ? e.id : null),
                              onPaymentSourceAdd: eo,
                              planId: W.id,
                              setHasAcceptedTerms: J,
                              legalTermsNodeRef: ea,
                              hasLegalTermsFlash: U,
                              onInvoiceError: (e) => {
                                  ei(e);
                              },
                              planGroup: _,
                              currencies: B,
                              onCurrencyChange: (e) => z(e),
                              hasOpenInvoice: null != E,
                              purchaseState: Q,
                              handleClose: Z
                          })
                ]
            }),
            (0, i.jsx)(j.O3, {
                children: (0, i.jsx)(x.Z, {
                    premiumSubscription: null != I ? I : null,
                    setPurchaseState: V,
                    onBack: () => null != S && P(S),
                    onNext: el,
                    onPurchaseError: (e) => q(e),
                    legalTermsNodeRef: ea,
                    flashLegalTerms: () => $(!0),
                    analyticsLocation: w,
                    baseAnalyticsData: T,
                    flowStartTime: L.startTime,
                    planGroup: _,
                    purchaseTokenAuthState: M,
                    openInvoiceId: E,
                    metadata: er ? void 0 : Y,
                    backButtonEligible: l,
                    invoiceError: en,
                    disablePurchase: (null == Y ? void 0 : Y.guild_id) == null && !er,
                    onPaymentSourceAdd: eo
                })
            })
        ]
    });
}
