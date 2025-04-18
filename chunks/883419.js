n.d(t, { Z: () => O }), n(388685), n(997841);
var r = n(200651),
    i = n(192379),
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
    N = n(456251),
    v = n(614277),
    j = n(698708),
    y = n(388032),
    C = n(856461);
function O(e) {
    var t, n;
    let { backButtonEligible: l, prevStep: O, handleStepChange: S, trialFooterMessageOverride: P, reviewWarningMessage: k, planGroup: W, openInvoiceId: _, analyticsData: E, analyticsLocation: T, handleClose: w } = e,
        { activeSubscription: Z, application: I, setUpdatedSubscription: A, contextMetadata: D, currencies: L, paymentSources: R, priceOptions: B, purchaseError: F, purchaseTokenAuthState: M, selectedPlan: H, selectedSku: z, setCurrency: G, setPaymentSourceId: K, setPurchaseState: Y, setPurchaseError: V, purchaseState: q, subscriptionMetadataRequest: Q, setHasAcceptedTerms: J } = (0, p.JL)();
    a()(null != H, 'Expected plan to be selected');
    let X = i.useRef(null),
        [U, $] = (0, c.Z)(!1, 500),
        ee = null == Q ? void 0 : Q.guild_id,
        et = (0, o.e7)([f.Z], () => f.Z.getGuild(ee), [ee]),
        [en, er] = i.useState(null),
        ei = (0, m.KW)(null != (t = null == z ? void 0 : z.flags) ? t : 0);
    i.useEffect(() => {
        null != F && null != X.current && X.current.scrollIntoView({ behavior: 'smooth' });
    }, [F]);
    let el = i.useCallback(
            (e) => {
                A(e), S(b.h8.CONFIRM);
            },
            [S, A]
        ),
        ea = i.useRef(null);
    return q === h.A.PURCHASING
        ? (0, r.jsx)(N.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(g.Z, { className: C.breadcrumbs }),
                  (0, r.jsxs)(v.C3, {
                      children: [
                          (0, r.jsx)(j.Z, {}),
                          ei &&
                              (0, r.jsxs)('div', {
                                  className: C.userSubscriptionDetailsContainer,
                                  children: [
                                      (0, r.jsx)(s.Text, {
                                          variant: 'eyebrow',
                                          color: 'header-secondary',
                                          children: y.NW.string(y.t.nf5LOT)
                                      }),
                                      (0, r.jsx)(s.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'interactive-normal',
                                          children: y.NW.format(y.t.y4n0GR, { applicationName: null == I ? void 0 : I.name })
                                      })
                                  ]
                              }),
                          !ei &&
                              (0, r.jsxs)('div', {
                                  className: C.guildPickerContainer,
                                  children: [
                                      (0, r.jsx)(s.vwX, {
                                          tag: s.RB0.H5,
                                          children: y.NW.string(y.t['5qyruL'])
                                      }),
                                      (0, r.jsxs)('div', {
                                          className: C.guildNameContainer,
                                          children: [
                                              (0, r.jsx)(s.Text, {
                                                  variant: 'text-md/normal',
                                                  children: y.NW.string(y.t.dBih7e)
                                              }),
                                              (0, r.jsx)(s.Text, {
                                                  variant: 'text-md/normal',
                                                  lineClamp: 1,
                                                  children: null != (n = null == et ? void 0 : et.name) ? n : y.NW.string(y.t.dtwqPT)
                                              })
                                          ]
                                      })
                                  ]
                              }),
                          null == Z
                              ? (0, r.jsx)(u.Z, {
                                    selectedPlanId: H.id,
                                    planGroup: W,
                                    paymentSources: R,
                                    onPaymentSourceChange: (e) => K(null != e ? e.id : null),
                                    priceOptions: B,
                                    currencies: L,
                                    onCurrencyChange: (e) => G(e),
                                    handlePaymentSourceAdd: () => S(b.h8.ADD_PAYMENT_STEPS),
                                    setHasAcceptedTerms: J,
                                    legalTermsNodeRef: ea,
                                    hasLegalTermsFlash: U,
                                    trialFooterMessageOverride: P,
                                    reviewWarningMessage: k,
                                    metadata: ei ? void 0 : Q,
                                    purchaseState: q,
                                    hideSubscriptionDetails: !0,
                                    handleClose: w
                                })
                              : (0, r.jsx)(d.Z, {
                                    premiumSubscription: Z,
                                    paymentSources: R,
                                    priceOptions: B,
                                    onPaymentSourceChange: (e) => K(null != e ? e.id : null),
                                    onPaymentSourceAdd: () => {
                                        S(b.h8.ADD_PAYMENT_STEPS);
                                    },
                                    planId: H.id,
                                    setHasAcceptedTerms: J,
                                    legalTermsNodeRef: ea,
                                    hasLegalTermsFlash: U,
                                    onInvoiceError: (e) => {
                                        er(e);
                                    },
                                    planGroup: W,
                                    currencies: L,
                                    onCurrencyChange: (e) => G(e),
                                    hasOpenInvoice: null != _,
                                    purchaseState: q,
                                    handleClose: w
                                })
                      ]
                  }),
                  (0, r.jsx)(v.O3, {
                      children: (0, r.jsx)(x.Z, {
                          premiumSubscription: null != Z ? Z : null,
                          setPurchaseState: Y,
                          onBack: () => null != O && S(O),
                          onNext: el,
                          onPurchaseError: (e) => V(e),
                          legalTermsNodeRef: ea,
                          flashLegalTerms: () => $(!0),
                          analyticsLocation: T,
                          baseAnalyticsData: E,
                          flowStartTime: D.startTime,
                          planGroup: W,
                          purchaseTokenAuthState: M,
                          openInvoiceId: _,
                          metadata: ei ? void 0 : Q,
                          backButtonEligible: l,
                          invoiceError: en,
                          disablePurchase: (null == Q ? void 0 : Q.guild_id) == null && !ei
                      })
                  })
              ]
          });
}
