n.d(t, { WT: () => E });
var l = n(627968),
    r = n(64700),
    i = n(688810),
    s = n(736843),
    a = n(156312),
    o = n(166532),
    u = n(317042),
    d = n(11054),
    c = n(639149),
    C = n(941673),
    p = n(818348);
let m = (0, s.Mz)(),
    E = {
        CustomPaymentContextProvider: (e) => {
            let {
                    children: t,
                    discoverySessionId: n,
                    loadId: r,
                    applicationId: s,
                    isGift: o,
                    skuId: d,
                    analyticsLocations: c = [],
                    ...C
                } = e,
                { analyticsLocations: m } = (0, u.P)({ applicationId: s, skuId: d, analyticsLocations: c, ...C });
            return (0, l.jsx)(i.f5, {
                value: m,
                children: (0, l.jsx)(a.PaymentContextProvider, {
                    loadId: r,
                    discoverySessionId: n,
                    applicationId: s,
                    skuIDs: null != d ? [d] : [],
                    purchaseType: p.VV.ONE_TIME,
                    isGift: o,
                    ...C,
                    activeSubscription: null,
                    children: t,
                }),
            });
        },
        UnifiedCheckoutContextProvider: (e) => {
            let {
                    skuId: t,
                    loadId: n,
                    applicationId: s,
                    analyticsSourceLocation: a,
                    renderModalProps: o,
                    onClose: u,
                    onComplete: d,
                    flowSpecificOptions: c,
                    children: C,
                } = e,
                { analyticsLocations: p } = (0, i.Ay)(),
                E = o.onClose,
                A = r.useCallback(
                    (e) => {
                        E(), null != u && u(e);
                    },
                    [E, u],
                ),
                h = r.useMemo(
                    () => ({
                        onClose: A,
                        onComplete: d,
                        applicationId: s,
                        skuId: t,
                        initialPlanId: null,
                        analyticsObject: a,
                        analyticsLocations: p,
                    }),
                    [A, d, s, t, a, p],
                ),
                f = r.useMemo(
                    () => ({ skuId: t, loadId: n, applicationId: s, flowSpecificOptions: c, analyticsLocations: p }),
                    [t, n, s, c, p],
                ),
                _ = r.useMemo(
                    () => ({ sharedCheckoutContext: f, paymentModalProps: h, renderModalProps: o }),
                    [f, h, o],
                );
            return (0, l.jsx)(m.Provider, { value: _, children: C });
        },
        UnifiedCheckoutCustomHeader: c.A,
        UnifiedCheckoutStepDefinitions: {
            [o.pn.GIFT_CUSTOMIZATION]: {
                StepController: (e) => {
                    let { renderStep: t, paymentModalStepProps: n } = e,
                        { handleStepChange: l, handleClose: i } = n,
                        { renderStepBody: s, disabled: a } = (0, C.Z)({ handleStepChange: l, handleClose: i });
                    return t({
                        paymentModalStepProps: n,
                        unifiedStepProps: r.useMemo(
                            () => ({
                                layout: "custom-step-body",
                                renderStepBody: s,
                                primaryCTAButtonProps: { disabled: a },
                            }),
                            [s, a],
                        ),
                    });
                },
            },
            [o.pn.REVIEW]: { legacyStepConfig: !0 },
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(d.M, { ...e }) },
    };
