t.d(e, { Z: () => k }), t(47120), t(789020);
var i = t(200651),
    l = t(192379),
    r = t(512722),
    a = t.n(r),
    o = t(442837),
    s = t(481060),
    u = t(330726),
    c = t(716534),
    d = t(664891),
    m = t(171246),
    f = t(430824),
    h = t(563132),
    p = t(409813),
    x = t(45572),
    g = t(51499),
    v = t(678334),
    b = t(456251),
    C = t(614277),
    j = t(698708),
    S = t(388032),
    N = t(596054);
function k(n) {
    var e, t;
    let { backButtonEligible: r, prevStep: k, handleStepChange: _, trialFooterMessageOverride: T, reviewWarningMessage: E, planGroup: Z, openInvoiceId: P, analyticsData: y, analyticsLocation: I, handleClose: A } = n,
        { activeSubscription: L, application: R, setUpdatedSubscription: w, contextMetadata: F, currencies: B, paymentSources: D, priceOptions: O, purchaseError: M, purchaseTokenAuthState: H, selectedPlan: W, selectedSku: z, setCurrency: K, setPaymentSourceId: G, setPurchaseState: Y, setPurchaseError: V, purchaseState: q, subscriptionMetadataRequest: Q, setHasAcceptedTerms: J } = (0, h.JL)();
    a()(null != W, 'Expected plan to be selected');
    let X = l.useRef(null),
        [U, $] = (0, u.Z)(!1, 500),
        nn = null == Q ? void 0 : Q.guild_id,
        ne = (0, o.e7)([f.Z], () => f.Z.getGuild(nn), [nn]),
        [nt, ni] = l.useState(null),
        nl = (0, m.KW)(null !== (e = null == z ? void 0 : z.flags) && void 0 !== e ? e : 0);
    l.useEffect(() => {
        null != M && null != X.current && X.current.scrollIntoView({ behavior: 'smooth' });
    }, [M]);
    let nr = l.useCallback(
            (n) => {
                w(n), _(p.h8.CONFIRM);
            },
            [_, w]
        ),
        na = l.useRef(null);
    return q === x.A.PURCHASING
        ? (0, i.jsx)(b.Z, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(g.Z, { className: N.breadcrumbs }),
                  (0, i.jsxs)(C.C3, {
                      children: [
                          (0, i.jsx)(j.Z, {}),
                          nl &&
                              (0, i.jsxs)('div', {
                                  className: N.userSubscriptionDetailsContainer,
                                  children: [
                                      (0, i.jsx)(s.Text, {
                                          variant: 'eyebrow',
                                          color: 'header-secondary',
                                          children: S.intl.string(S.t.nf5LOT)
                                      }),
                                      (0, i.jsx)(s.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'interactive-normal',
                                          children: S.intl.format(S.t.y4n0GR, { applicationName: null == R ? void 0 : R.name })
                                      })
                                  ]
                              }),
                          !nl &&
                              (0, i.jsxs)('div', {
                                  className: N.guildPickerContainer,
                                  children: [
                                      (0, i.jsx)(s.vwX, {
                                          tag: s.RB0.H5,
                                          children: S.intl.string(S.t['5qyruL'])
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: N.guildNameContainer,
                                          children: [
                                              (0, i.jsx)(s.Text, {
                                                  variant: 'text-md/normal',
                                                  children: S.intl.string(S.t.dBih7e)
                                              }),
                                              (0, i.jsx)(s.Text, {
                                                  variant: 'text-md/normal',
                                                  lineClamp: 1,
                                                  children: null !== (t = null == ne ? void 0 : ne.name) && void 0 !== t ? t : S.intl.string(S.t.dtwqPT)
                                              })
                                          ]
                                      })
                                  ]
                              }),
                          null == L
                              ? (0, i.jsx)(c.Z, {
                                    selectedPlanId: W.id,
                                    paymentSources: D,
                                    onPaymentSourceChange: (n) => G(null != n ? n.id : null),
                                    priceOptions: O,
                                    currencies: B,
                                    onCurrencyChange: (n) => K(n),
                                    handlePaymentSourceAdd: () => _(p.h8.ADD_PAYMENT_STEPS),
                                    setHasAcceptedTerms: J,
                                    legalTermsNodeRef: na,
                                    hasLegalTermsFlash: U,
                                    trialFooterMessageOverride: T,
                                    reviewWarningMessage: E,
                                    metadata: nl ? void 0 : Q,
                                    purchaseState: q,
                                    hideSubscriptionDetails: !0,
                                    handleClose: A
                                })
                              : (0, i.jsx)(d.Z, {
                                    premiumSubscription: L,
                                    paymentSources: D,
                                    priceOptions: O,
                                    onPaymentSourceChange: (n) => G(null != n ? n.id : null),
                                    onPaymentSourceAdd: () => {
                                        _(p.h8.ADD_PAYMENT_STEPS);
                                    },
                                    planId: W.id,
                                    setHasAcceptedTerms: J,
                                    legalTermsNodeRef: na,
                                    hasLegalTermsFlash: U,
                                    onInvoiceError: (n) => {
                                        ni(n);
                                    },
                                    planGroup: Z,
                                    currencies: B,
                                    onCurrencyChange: (n) => K(n),
                                    hasOpenInvoice: null != P,
                                    purchaseState: q,
                                    handleClose: A
                                })
                      ]
                  }),
                  (0, i.jsx)(C.O3, {
                      children: (0, i.jsx)(v.Z, {
                          premiumSubscription: null != L ? L : null,
                          setPurchaseState: Y,
                          onBack: () => null != k && _(k),
                          onNext: nr,
                          onPurchaseError: (n) => V(n),
                          legalTermsNodeRef: na,
                          flashLegalTerms: () => $(!0),
                          analyticsLocation: I,
                          baseAnalyticsData: y,
                          flowStartTime: F.startTime,
                          planGroup: Z,
                          purchaseTokenAuthState: H,
                          openInvoiceId: P,
                          metadata: nl ? void 0 : Q,
                          backButtonEligible: r,
                          invoiceError: nt,
                          disablePurchase: (null == Q ? void 0 : Q.guild_id) == null && !nl
                      })
                  })
              ]
          });
}
