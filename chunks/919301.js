"use strict";
n.d(t, { WT: () => A });
var r = n(627968),
    i = n(64700),
    a = n(688810),
    s = n(736843),
    o = n(937008),
    l = n(156312),
    u = n(166532),
    c = n(317042),
    d = n(11054),
    _ = n(639149),
    f = n(941673),
    h = n(818348);
let p = (0, s.Mz)(),
    g = { renderStep: (e) => (0, r.jsx)(d.M, { ...e }) },
    E = (e) => {
        let { renderStep: t, paymentModalStepProps: n } = e,
            { handleStepChange: r, handleClose: a } = n,
            { renderStepBody: s, disabled: o } = (0, f.Z)({ handleStepChange: r, handleClose: a });
        return t({
            paymentModalStepProps: n,
            unifiedStepProps: i.useMemo(
                () => ({ layout: "custom-step-body", renderStepBody: s, primaryCTAButtonProps: { disabled: o } }),
                [s, o],
            ),
        });
    },
    A = {
        CustomPaymentContextProvider: (e) => {
            let { children: t, loadId: n, applicationId: i, isGift: s, skuId: o, analyticsLocations: u = [], ...d } = e,
                { analyticsLocations: _ } = (0, c.P)({ applicationId: i, skuId: o, analyticsLocations: u, ...d });
            return (0, r.jsx)(a.f5, {
                value: _,
                children: (0, r.jsx)(l.PaymentContextProvider, {
                    loadId: n,
                    applicationId: i,
                    skuIDs: null != o ? [o] : [],
                    purchaseType: h.VV.ONE_TIME,
                    isGift: s,
                    ...d,
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
                    analyticsSourceLocation: o,
                    renderModalProps: l,
                    onClose: u,
                    onComplete: c,
                    flowSpecificOptions: d,
                    children: _,
                } = e,
                { analyticsLocations: f } = (0, a.Ay)(),
                h = l.onClose,
                g = i.useCallback(
                    (e) => {
                        h(), null != u && u(e);
                    },
                    [h, u],
                ),
                E = i.useMemo(
                    () => ({
                        onClose: g,
                        onComplete: c,
                        applicationId: s,
                        skuId: t,
                        initialPlanId: null,
                        analyticsObject: o,
                        analyticsLocations: f,
                    }),
                    [g, c, s, t, o, f],
                ),
                A = i.useMemo(
                    () => ({ skuId: t, loadId: n, flowSpecificOptions: d, analyticsLocations: f }),
                    [t, n, d, f],
                ),
                I = i.useMemo(
                    () => ({ sharedCheckoutContext: A, paymentModalProps: E, renderModalProps: l }),
                    [A, E, l],
                );
            return (0, r.jsx)(p.Provider, { value: I, children: _ });
        },
        UnifiedCheckoutCustomHeader: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, o.Pv)();
            return (0, r.jsx)(_.A, { step: t, isGift: n });
        },
        UnifiedCheckoutStepDefinitions: {
            [u.pn.GIFT_CUSTOMIZATION]: { StepController: E },
            [u.pn.REVIEW]: { legacyStepConfig: !0 },
        },
        CUSTOM_CONFIRM_STEP_CONFIG: g,
    };
