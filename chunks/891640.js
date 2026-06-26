"use strict";
n.d(t, { F: () => E, i: () => p });
var i = n(284009),
    r = n.n(i),
    s = n(277984),
    a = n(930767),
    o = n(166532),
    l = n(71532),
    u = n(818348);
async function c(e, t) {
    let {
        stripe: n,
        stripeElements: i,
        billingAddressState: r,
        lastConfirmedSetupIntentRef: a,
        analyticsLocation: o,
        createSetupIntent: l,
    } = e;
    return {
        paymentSource: await (0, s.im)(
            n,
            i,
            { billingAddress: r.info, paymentSourceType: t, lastConfirmedSetupIntentRef: a, createSetupIntent: l },
            o,
        ),
        responseType: "payment-source",
    };
}
async function d(e, t) {
    let { stripe: n, billingAddressState: i, analyticsLocation: r } = e;
    return { paymentSource: await (0, s.bw)(n, i.info, t, r), responseType: "payment-source" };
}
async function _(e) {
    let { braintreeNonce: t, billingAddressState: n, analyticsLocation: i } = e;
    return (
        r()(null != t, "Missing braintreeNonce"),
        { paymentSource: await (0, s.u1)(t, n.info, i), responseType: "payment-source" }
    );
}
async function h(e, t, n) {
    let { adyenPaymentData: i, billingAddressState: r, analyticsLocation: o } = e;
    if (null != n && n.requireAdyenPaymentData && null == i)
        throw new a.v({
            message: "Missing adyenPaymentData",
            extraSentryInformation: { paymentSourceType: t, analyticsLocation: o },
        });
    let l = null != n ? n.overwriteSubscriptionPaymentSource : void 0,
        { redirectConfirmation: u, paymentSource: c } = await (0, s.$M)(r.info, t, o, i ?? void 0, l);
    return { hasRedirectURL: u, paymentSource: c };
}
async function f(e, t) {
    let { billingAddressState: n, analyticsLocation: i } = e;
    return { paymentSource: await (0, s.A8)(n.info, t, i), responseType: "payment-source" };
}
function p(e) {
    return e in E;
}
let E = {
    [u.he.CARD]: {
        submitAddressStep: async (e) =>
            e.shouldUsePaymentElement
                ? await c(e, u.he.CARD)
                : {
                      paymentSource: await (0, s.u6)(
                          e.stripe,
                          e.tokenState.token,
                          e.billingAddressState.info,
                          e.analyticsLocation,
                      ),
                      responseType: "payment-source",
                  },
    },
    [u.he.PAYMENT_REQUEST]: {
        renderAddressElementInStandaloneMode: !0,
        submitPaymentElementStepHandler: async (e) => {
            let { stripeElements: t, remountAddressElement: n, setBillingAddressState: i, stripe: r } = e,
                { paymentMethod: a } = await (0, s.hr)(r, t),
                { billingAddressInfo: o } = (0, l.uK)(a);
            i((e) => ({ ...e, info: o })), n();
        },
        stepAfterPaymentElement: o.pn.ADDRESS,
        submitAddressStep: async (e) => {
            if (e.shouldUsePaymentElement) return await c(e, u.he.PAYMENT_REQUEST);
            let {
                paymentRequestPaymentMethod: t,
                onPaymentRequestSourceFailed: n,
                billingAddressState: i,
                analyticsLocation: r,
            } = e;
            if (null == t) throw (n(), (0, s.i0)("Missing paymentRequestPaymentMethod"));
            return { paymentSource: await (0, s.Tv)(t, i.info, r), responseType: "payment-source" };
        },
    },
    [u.he.PIX]: { renderAddressElementInStandaloneMode: !0, submitAddressStep: async (e) => await c(e, u.he.PIX) },
    [u.he.IDEAL]: {
        submitAddressStep: async (e) =>
            e.shouldUsePaymentElement
                ? await c(e, u.he.IDEAL)
                : {
                      paymentSource: await (0, s.EB)(e.stripe, e.billingAddressState.info, e.analyticsLocation),
                      responseType: "payment-source",
                  },
    },
    [u.he.PRZELEWY24]: {
        submitAddressStep: async (e) => {
            let { stripe: t, p24BankState: n, billingAddressState: i, analyticsLocation: r } = e;
            if (void 0 === n) throw (0, s.i0)("Bank required for Przelewy24");
            return { paymentSource: await (0, s.TD)(t, { p24Bank: n }, i.info, r), responseType: "payment-source" };
        },
    },
    [u.he.EPS]: {
        submitAddressStep: async (e) => {
            let { stripe: t, epsBankState: n, billingAddressState: i, analyticsLocation: r } = e;
            return { paymentSource: await (0, s.Z9)(t, n, i.info, r), responseType: "payment-source" };
        },
    },
    [u.he.GIROPAY]: { submitAddressStep: async (e) => await d(e, u.he.GIROPAY) },
    [u.he.BANCONTACT]: { submitAddressStep: async (e) => await d(e, u.he.BANCONTACT) },
    [u.he.PAYPAL]: { submitAddressStep: async (e) => await _(e) },
    [u.he.VENMO]: { submitAddressStep: async (e) => await _(e) },
    [u.he.PAYSAFE_CARD]: { submitAddressStep: async (e) => await f(e, u.he.PAYSAFE_CARD) },
    [u.he.GRABPAY_MY]: { submitAddressStep: async (e) => await f(e, u.he.GRABPAY_MY) },
    [u.he.CASH_APP]: {
        submitAddressStep: async (e) => {
            let { paymentSource: t } = await h(e, u.he.CASH_APP, {
                requireAdyenPaymentData: !0,
                overwriteSubscriptionPaymentSource: e.overwriteSubscriptionPaymentSource,
            });
            if (null == t)
                throw new a.v({
                    message: "Cash App Pay Payment Source missing",
                    extraSentryInformation: {
                        paymentSourceType: u.he.CASH_APP,
                        analyticsLocation: e.analyticsLocation,
                    },
                });
            return { paymentSource: t, responseType: "payment-source" };
        },
    },
    [u.he.GCASH]: {
        submitAddressStep: async (e) => {
            let { hasRedirectURL: t } = await h(e, u.he.GCASH);
            return { hasRedirectURL: t, responseType: "redirect-url" };
        },
    },
    [u.he.MOMO_WALLET]: {
        submitAddressStep: async (e) => {
            let { hasRedirectURL: t } = await h(e, u.he.MOMO_WALLET);
            return { hasRedirectURL: t, responseType: "redirect-url" };
        },
    },
    [u.he.KAKAOPAY]: {
        submitAddressStep: async (e) => {
            let { hasRedirectURL: t } = await h(e, u.he.KAKAOPAY);
            return { hasRedirectURL: t, responseType: "redirect-url" };
        },
    },
    [u.he.GOPAY_WALLET]: {
        submitAddressStep: async (e) => {
            let { hasRedirectURL: t } = await h(e, u.he.GOPAY_WALLET);
            return { hasRedirectURL: t, responseType: "redirect-url" };
        },
    },
};
