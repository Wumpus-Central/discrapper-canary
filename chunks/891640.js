n.d(t, { F: () => E, i: () => C });
var l = n(284009),
    i = n.n(l),
    r = n(277984),
    a = n(930767),
    s = n(166532),
    o = n(71532),
    u = n(818348);
async function c(e, t) {
    let {
        stripe: n,
        stripeElements: l,
        billingAddressState: i,
        lastConfirmedSetupIntentRef: a,
        analyticsLocation: s,
        createSetupIntent: o,
    } = e;
    return {
        paymentSource: await (0, r.im)(
            n,
            l,
            { billingAddress: i.info, paymentSourceType: t, lastConfirmedSetupIntentRef: a, createSetupIntent: o },
            s,
        ),
        responseType: "payment-source",
    };
}
async function d(e, t) {
    let { stripe: n, billingAddressState: l, analyticsLocation: i } = e;
    return { paymentSource: await (0, r.bw)(n, l.info, t, i), responseType: "payment-source" };
}
async function p(e) {
    let { braintreeNonce: t, billingAddressState: n, analyticsLocation: l } = e;
    return (
        i()(null != t, "Missing braintreeNonce"),
        { paymentSource: await (0, r.u1)(t, n.info, l), responseType: "payment-source" }
    );
}
async function m(e, t, n) {
    let { adyenPaymentData: l, billingAddressState: i, analyticsLocation: s } = e;
    if (null != n && n.requireAdyenPaymentData && null == l)
        throw new a.v({
            message: "Missing adyenPaymentData",
            extraSentryInformation: { paymentSourceType: t, analyticsLocation: s },
        });
    let o = null != n ? n.overwriteSubscriptionPaymentSource : void 0,
        { redirectConfirmation: u, paymentSource: c } = await (0, r.$M)(i.info, t, s, l ?? void 0, o);
    return { hasRedirectURL: u, paymentSource: c };
}
async function h(e, t) {
    let { billingAddressState: n, analyticsLocation: l } = e;
    return { paymentSource: await (0, r.A8)(n.info, t, l), responseType: "payment-source" };
}
function C(e) {
    return e in E;
}
let E = {
    [u.he.CARD]: {
        submitAddressStep: async (e) =>
            e.shouldUsePaymentElement
                ? await c(e, u.he.CARD)
                : {
                      paymentSource: await (0, r.u6)(
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
            let { stripeElements: t, remountAddressElement: n, setBillingAddressState: l, stripe: i } = e,
                { paymentMethod: a } = await (0, r.hr)(i, t),
                { billingAddressInfo: s } = (0, o.uK)(a);
            l((e) => ({ ...e, info: s })), n();
        },
        stepAfterPaymentElement: s.pn.ADDRESS,
        submitAddressStep: async (e) => {
            if (e.shouldUsePaymentElement) return await c(e, u.he.PAYMENT_REQUEST);
            let {
                paymentRequestPaymentMethod: t,
                onPaymentRequestSourceFailed: n,
                billingAddressState: l,
                analyticsLocation: i,
            } = e;
            if (null == t) throw (n(), (0, r.i0)("Missing paymentRequestPaymentMethod"));
            return { paymentSource: await (0, r.Tv)(t, l.info, i), responseType: "payment-source" };
        },
    },
    [u.he.PIX]: { submitAddressStep: async (e) => await c(e, u.he.PIX) },
    [u.he.IDEAL]: {
        submitAddressStep: async (e) =>
            e.shouldUsePaymentElement
                ? await c(e, u.he.IDEAL)
                : {
                      paymentSource: await (0, r.EB)(e.stripe, e.billingAddressState.info, e.analyticsLocation),
                      responseType: "payment-source",
                  },
    },
    [u.he.PRZELEWY24]: {
        submitAddressStep: async (e) => {
            let { stripe: t, p24BankState: n, billingAddressState: l, analyticsLocation: i } = e;
            if (void 0 === n) throw (0, r.i0)("Bank required for Przelewy24");
            return { paymentSource: await (0, r.TD)(t, { p24Bank: n }, l.info, i), responseType: "payment-source" };
        },
    },
    [u.he.EPS]: {
        submitAddressStep: async (e) => {
            let { stripe: t, epsBankState: n, billingAddressState: l, analyticsLocation: i } = e;
            return { paymentSource: await (0, r.Z9)(t, n, l.info, i), responseType: "payment-source" };
        },
    },
    [u.he.GIROPAY]: { submitAddressStep: async (e) => await d(e, u.he.GIROPAY) },
    [u.he.BANCONTACT]: { submitAddressStep: async (e) => await d(e, u.he.BANCONTACT) },
    [u.he.PAYPAL]: { submitAddressStep: async (e) => await p(e) },
    [u.he.VENMO]: { submitAddressStep: async (e) => await p(e) },
    [u.he.PAYSAFE_CARD]: { submitAddressStep: async (e) => await h(e, u.he.PAYSAFE_CARD) },
    [u.he.GRABPAY_MY]: { submitAddressStep: async (e) => await h(e, u.he.GRABPAY_MY) },
    [u.he.CASH_APP]: {
        submitAddressStep: async (e) => {
            let { paymentSource: t } = await m(e, u.he.CASH_APP, {
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
            let { hasRedirectURL: t } = await m(e, u.he.GCASH);
            return { hasRedirectURL: t, responseType: "redirect-url" };
        },
    },
    [u.he.MOMO_WALLET]: {
        submitAddressStep: async (e) => {
            let { hasRedirectURL: t } = await m(e, u.he.MOMO_WALLET);
            return { hasRedirectURL: t, responseType: "redirect-url" };
        },
    },
    [u.he.KAKAOPAY]: {
        submitAddressStep: async (e) => {
            let { hasRedirectURL: t } = await m(e, u.he.KAKAOPAY);
            return { hasRedirectURL: t, responseType: "redirect-url" };
        },
    },
    [u.he.GOPAY_WALLET]: {
        submitAddressStep: async (e) => {
            let { hasRedirectURL: t } = await m(e, u.he.GOPAY_WALLET);
            return { hasRedirectURL: t, responseType: "redirect-url" };
        },
    },
};
