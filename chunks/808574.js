"use strict";
n.d(t, { w: () => E });
var r = n(627968),
    i = n(64700),
    s = n(323082),
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
    E = (e) => {
        let { stripe: t } = (0, l.P5)(),
            {
                shouldUseManaModal: n,
                paymentModalArgs: o,
                handleStepChange: E,
                setPaymentMethodSteps: m,
                onBack: g,
                primarySubmitting: A,
                primaryDisabled: I,
                PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: T,
            } = e,
            { setIsSubmittingCurrentStep: S, setBillingAddressState: y } = o,
            { paymentElementSelectedType: N, combinedStripeElementsRef: v, remountAddressElement: C } = e,
            O = i.useCallback(async () => {
                S(!0);
                try {
                    if (null == N || !(0, a.PE)(N)) throw (0, s.ne)("Valid Payment Element source type not found", !0);
                    let { steps: e, methodType: n } = T[N];
                    if ((m({ steps: e, methodType: n === f.he.UNKNOWN ? N : n }), N === f.he.PAYMENT_REQUEST)) {
                        let e = v.current,
                            { paymentMethod: n } = await (0, s.YB)(t, e),
                            { billingAddressInfo: r } = (0, d.uK)(n);
                        y((e) => ({ ...e, info: r })), C(), E(u.pn.ADDRESS);
                    } else {
                        let e = (0, a.eI)(N);
                        null != e ? E(e) : E(u.pn.ADDRESS);
                    }
                } catch (e) {
                    h.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
                } finally {
                    S(!1);
                }
            }, [N, T, v, C, E, t, m, S, y]);
        return (0, r.jsx)(_.uv, {
            onBack: g,
            primaryCTA: c.Ay.CTAType.CONTINUE,
            primaryType: "submit",
            primaryText: p.intl.string(p.t.PDTjLN),
            primarySubmitting: A,
            primaryDisabled: I,
            onPrimary: O,
            shouldUseManaModal: n,
        });
    };
