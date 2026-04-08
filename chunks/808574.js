"use strict";
n.d(t, { w: () => m });
var r = n(627968),
    i = n(64700),
    s = n(384904),
    a = n(648335),
    o = n(626584),
    l = n(156312),
    u = n(166532),
    c = n(19311),
    d = n(71532),
    _ = n(836308),
    f = n(818348),
    p = n(985018);
let h = new o.A("PaymentElementStepFooter.tsx"),
    m = (e) => {
        let { stripe: t } = (0, l.P5)(),
            {
                shouldUseManaModal: n,
                paymentModalArgs: o,
                handleStepChange: m,
                setPaymentMethodSteps: E,
                onBack: g,
                primarySubmitting: A,
                primaryDisabled: I,
                PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: T,
            } = e,
            { setIsSubmittingCurrentStep: S, setBillingAddressState: y } = o,
            { paymentElementSelectedType: v, combinedStripeElementsRef: N, remountAddressElement: C } = e,
            R = i.useCallback(async () => {
                S(!0);
                try {
                    if (null == v || !(0, a.PE)(v)) throw (0, s.ne)("Valid Payment Element source type not found", !0);
                    let { steps: e, methodType: n } = T[v];
                    if ((E({ steps: e, methodType: n === f.he.UNKNOWN ? v : n }), v === f.he.PAYMENT_REQUEST)) {
                        let e = N.current,
                            { paymentMethod: n } = await (0, s.YB)(t, e),
                            { billingAddressInfo: r } = (0, d.uK)(n);
                        y((e) => ({ ...e, info: r })), C(), m(u.pn.ADDRESS);
                    } else {
                        let e = (0, a.eI)(v);
                        null != e ? m(e) : m(u.pn.ADDRESS);
                    }
                } catch (e) {
                    h.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
                } finally {
                    S(!1);
                }
            }, [v, T, N, C, m, t, E, S, y]);
        return (0, r.jsx)(_.uv, {
            onBack: g,
            primaryCTA: c.Ay.CTAType.CONTINUE,
            primaryType: "submit",
            primaryText: p.intl.string(p.t.PDTjLN),
            primarySubmitting: A,
            primaryDisabled: I,
            onPrimary: R,
            shouldUseManaModal: n,
        });
    };
