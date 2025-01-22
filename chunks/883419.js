t.d(e, {
    Z: function () {
        return T;
    }
}),
    t(47120),
    t(789020);
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
    g = t(45572),
    x = t(51499),
    v = t(678334),
    b = t(456251),
    C = t(614277),
    j = t(698708),
    S = t(388032),
    N = t(596054);
function T(n) {
    var e, t;
    let { backButtonEligible: r, prevStep: T, handleStepChange: P, trialFooterMessageOverride: _, reviewWarningMessage: y, planGroup: k, openInvoiceId: E, analyticsData: Z, analyticsLocation: I, handleClose: A } = n,
        { activeSubscription: B, application: F, setUpdatedSubscription: R, contextMetadata: w, currencies: L, paymentSources: D, priceOptions: O, purchaseError: H, purchaseTokenAuthState: M, selectedPlan: W, selectedSku: K, setCurrency: G, setPaymentSourceId: Y, setPurchaseState: V, setPurchaseError: Q, purchaseState: q, subscriptionMetadataRequest: z, setHasAcceptedTerms: U } = (0, h.usePaymentContext)();
    a()(null != W, 'Expected plan to be selected');
    let J = l.useRef(null),
        [X, $] = (0, u.Z)(!1, 500),
        nn = null == z ? void 0 : z.guild_id,
        ne = (0, o.e7)([f.Z], () => f.Z.getGuild(nn), [nn]),
        [nt, ni] = l.useState(null),
        nl = (0, m.KW)(null !== (e = null == K ? void 0 : K.flags) && void 0 !== e ? e : 0);
    l.useEffect(() => {
        null != H && null != J.current && J.current.scrollIntoView({ behavior: 'smooth' });
    }, [H]);
    let nr = l.useCallback(
            (n) => {
                R(n), P(p.h8.CONFIRM);
            },
            [P, R]
        ),
        na = l.useRef(null);
    return q === g.A.PURCHASING
        ? (0, i.jsx)(b.Z, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(x.Z, { className: N.breadcrumbs }),
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
                                          children: S.intl.format(S.t.y4n0GR, { applicationName: null == F ? void 0 : F.name })
                                      })
                                  ]
                              }),
                          !nl &&
                              (0, i.jsxs)('div', {
                                  className: N.guildPickerContainer,
                                  children: [
                                      (0, i.jsx)(s.FormTitle, {
                                          tag: s.FormTitleTags.H5,
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
                          null == B
                              ? (0, i.jsx)(c.Z, {
                                    selectedPlanId: W.id,
                                    paymentSources: D,
                                    onPaymentSourceChange: (n) => Y(null != n ? n.id : null),
                                    priceOptions: O,
                                    currencies: L,
                                    onCurrencyChange: (n) => G(n),
                                    handlePaymentSourceAdd: () => P(p.h8.ADD_PAYMENT_STEPS),
                                    setHasAcceptedTerms: U,
                                    legalTermsNodeRef: na,
                                    hasLegalTermsFlash: X,
                                    trialFooterMessageOverride: _,
                                    reviewWarningMessage: y,
                                    metadata: nl ? void 0 : z,
                                    purchaseState: q,
                                    hideSubscriptionDetails: !0,
                                    handleClose: A
                                })
                              : (0, i.jsx)(d.Z, {
                                    premiumSubscription: B,
                                    paymentSources: D,
                                    priceOptions: O,
                                    onPaymentSourceChange: (n) => Y(null != n ? n.id : null),
                                    onPaymentSourceAdd: () => {
                                        P(p.h8.ADD_PAYMENT_STEPS);
                                    },
                                    planId: W.id,
                                    setHasAcceptedTerms: U,
                                    legalTermsNodeRef: na,
                                    hasLegalTermsFlash: X,
                                    onInvoiceError: (n) => {
                                        ni(n);
                                    },
                                    planGroup: k,
                                    currencies: L,
                                    onCurrencyChange: (n) => G(n),
                                    hasOpenInvoice: null != E,
                                    purchaseState: q,
                                    handleClose: A
                                })
                      ]
                  }),
                  (0, i.jsx)(C.O3, {
                      children: (0, i.jsx)(v.Z, {
                          premiumSubscription: null != B ? B : null,
                          setPurchaseState: V,
                          onBack: () => null != T && P(T),
                          onNext: nr,
                          onPurchaseError: (n) => Q(n),
                          legalTermsNodeRef: na,
                          flashLegalTerms: () => $(!0),
                          analyticsLocation: I,
                          baseAnalyticsData: Z,
                          flowStartTime: w.startTime,
                          planGroup: k,
                          purchaseTokenAuthState: M,
                          openInvoiceId: E,
                          metadata: nl ? void 0 : z,
                          backButtonEligible: r,
                          invoiceError: nt,
                          disablePurchase: (null == z ? void 0 : z.guild_id) == null && !nl
                      })
                  })
              ]
          });
}
