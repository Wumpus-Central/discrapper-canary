"use strict";
n.d(t, { WT: () => E });
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
    p = n(818348);
let h = (0, s.Mz)(),
    m = { renderStep: (e) => (0, r.jsx)(d.M, { ...e }) },
    g = (e) => {
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
    E = {
        CustomPaymentContextProvider: (e) => {
            let { children: t, loadId: n, applicationId: i, isGift: s, skuId: o, analyticsLocations: u = [], ...d } = e,
                { analyticsLocations: _ } = (0, c.P)({ applicationId: i, skuId: o, analyticsLocations: u, ...d });
            return (0, r.jsx)(a.f5, {
                value: _,
                children: (0, r.jsx)(l.PaymentContextProvider, {
                    loadId: n,
                    applicationId: i,
                    skuIDs: null != o ? [o] : [],
                    purchaseType: p.VV.ONE_TIME,
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
                p = l.onClose,
                m = i.useCallback(
                    (e) => {
                        p(), null != u && u(e);
                    },
                    [p, u],
                ),
                g = i.useMemo(
                    () => ({
                        onClose: m,
                        onComplete: c,
                        applicationId: s,
                        skuId: t,
                        initialPlanId: null,
                        analyticsObject: o,
                        analyticsLocations: f,
                    }),
                    [m, c, s, t, o, f],
                ),
                E = i.useMemo(
                    () => ({ skuId: t, loadId: n, flowSpecificOptions: d, analyticsLocations: f }),
                    [t, n, d, f],
                ),
                A = i.useMemo(
                    () => ({ sharedCheckoutContext: E, paymentModalProps: g, renderModalProps: l }),
                    [E, g, l],
                );
            return (0, r.jsx)(h.Provider, { value: A, children: _ });
        },
        UnifiedCheckoutCustomHeader: (e) => {
            let { onClose: t, step: n } = e,
                { isGift: i } = (0, o.Pv)();
            return (0, r.jsx)(_.A, { step: n, onClose: () => t(!1), isGift: i });
        },
        UnifiedCheckoutStepDefinitions: {
            [u.pn.GIFT_CUSTOMIZATION]: { StepController: g },
            [u.pn.REVIEW]: { legacyStepConfig: !0 },
        },
        CUSTOM_CONFIRM_STEP_CONFIG: m,
    };
