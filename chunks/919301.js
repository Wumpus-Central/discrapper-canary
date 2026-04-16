"use strict";
n.d(t, { WT: () => E });
var r = n(627968),
    i = n(64700),
    s = n(688810),
    a = n(736843),
    o = n(156312),
    l = n(166532),
    u = n(317042),
    c = n(11054),
    d = n(639149),
    _ = n(941673),
    f = n(818348);
let p = (0, a.Mz)(),
    h = { renderStep: (e) => (0, r.jsx)(c.M, { ...e }) },
    m = (e) => {
        let { renderStep: t, paymentModalStepProps: n } = e,
            { handleStepChange: r, handleClose: s } = n,
            { renderStepBody: a, disabled: o } = (0, _.Z)({ handleStepChange: r, handleClose: s });
        return t({
            paymentModalStepProps: n,
            unifiedStepProps: i.useMemo(
                () => ({ layout: "custom-step-body", renderStepBody: a, primaryCTAButtonProps: { disabled: o } }),
                [a, o],
            ),
        });
    },
    E = {
        CustomPaymentContextProvider: (e) => {
            let {
                    children: t,
                    discoverySessionId: n,
                    loadId: i,
                    applicationId: a,
                    isGift: l,
                    skuId: c,
                    analyticsLocations: d = [],
                    ..._
                } = e,
                { analyticsLocations: p } = (0, u.P)({ applicationId: a, skuId: c, analyticsLocations: d, ..._ });
            return (0, r.jsx)(s.f5, {
                value: p,
                children: (0, r.jsx)(o.PaymentContextProvider, {
                    loadId: i,
                    discoverySessionId: n,
                    applicationId: a,
                    skuIDs: null != c ? [c] : [],
                    purchaseType: f.VV.ONE_TIME,
                    isGift: l,
                    ..._,
                    activeSubscription: null,
                    children: t,
                }),
            });
        },
        UnifiedCheckoutContextProvider: (e) => {
            let {
                    skuId: t,
                    loadId: n,
                    applicationId: a,
                    analyticsSourceLocation: o,
                    renderModalProps: l,
                    onClose: u,
                    onComplete: c,
                    flowSpecificOptions: d,
                    children: _,
                } = e,
                { analyticsLocations: f } = (0, s.Ay)(),
                h = l.onClose,
                m = i.useCallback(
                    (e) => {
                        h(), null != u && u(e);
                    },
                    [h, u],
                ),
                E = i.useMemo(
                    () => ({
                        onClose: m,
                        onComplete: c,
                        applicationId: a,
                        skuId: t,
                        initialPlanId: null,
                        analyticsObject: o,
                        analyticsLocations: f,
                    }),
                    [m, c, a, t, o, f],
                ),
                g = i.useMemo(
                    () => ({ skuId: t, loadId: n, applicationId: a, flowSpecificOptions: d, analyticsLocations: f }),
                    [t, n, a, d, f],
                ),
                A = i.useMemo(
                    () => ({ sharedCheckoutContext: g, paymentModalProps: E, renderModalProps: l }),
                    [g, E, l],
                );
            return (0, r.jsx)(p.Provider, { value: A, children: _ });
        },
        UnifiedCheckoutCustomHeader: d.A,
        UnifiedCheckoutStepDefinitions: {
            [l.pn.GIFT_CUSTOMIZATION]: { StepController: m },
            [l.pn.REVIEW]: { legacyStepConfig: !0 },
        },
        CUSTOM_CONFIRM_STEP_CONFIG: h,
    };
