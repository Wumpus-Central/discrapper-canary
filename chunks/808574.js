n.d(t, { w: () => _ });
var l = n(627968),
    i = n(64700),
    a = n(323082),
    r = n(648335),
    s = n(626584),
    o = n(156312),
    u = n(166532),
    c = n(19311),
    d = n(71532),
    p = n(836308),
    m = n(818348),
    h = n(985018);
let A = new s.A("PaymentElementStepFooter.tsx"),
    _ = (e) => {
        let { stripe: t } = (0, o.P5)(),
            {
                shouldUseManaModal: n,
                paymentModalArgs: s,
                handleStepChange: _,
                setPaymentMethodSteps: C,
                onBack: E,
                primarySubmitting: y,
                primaryDisabled: f,
                PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: P,
            } = e,
            { setIsSubmittingCurrentStep: S, setBillingAddressState: x } = s,
            { paymentElementSelectedType: T, combinedStripeElementsRef: N, remountAddressElement: g } = e,
            I = i.useCallback(async () => {
                S(!0);
                try {
                    if (null == T || !(0, r.PE)(T)) throw (0, a.ne)("Valid Payment Element source type not found", !0);
                    let { steps: e, methodType: n } = P[T];
                    if ((C({ steps: e, methodType: n === m.he.UNKNOWN ? T : n }), T === m.he.PAYMENT_REQUEST)) {
                        let e = N.current,
                            { paymentMethod: n } = await (0, a.YB)(t, e),
                            { billingAddressInfo: l } = (0, d.uK)(n);
                        x((e) => ({ ...e, info: l })), g(), _(u.pn.ADDRESS);
                    } else {
                        let e = (0, r.eI)(T);
                        null != e ? _(e) : _(u.pn.ADDRESS);
                    }
                } catch (e) {
                    A.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
                } finally {
                    S(!1);
                }
            }, [T, P, N, g, _, t, C, S, x]);
        return (0, l.jsx)(p.uv, {
            onBack: E,
            primaryCTA: c.Ay.CTAType.CONTINUE,
            primaryType: "submit",
            primaryText: h.intl.string(h.t.PDTjLN),
            primarySubmitting: y,
            primaryDisabled: f,
            onPrimary: I,
            shouldUseManaModal: n,
        });
    };
