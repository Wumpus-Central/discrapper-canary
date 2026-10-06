n.d(t, { Dd: () => s, R8: () => c, Wn: () => m, eI: () => h, eX: () => A, mr: () => o });
var a = n(166532),
    r = n(818348),
    i = n(375708);
let l = new Set([
        ...new Set([r.he.CARD, r.he.PAYMENT_REQUEST, r.he.PAYPAL]),
        ...new Set([
            r.he.IDEAL,
            r.he.BANCONTACT,
            r.he.GOPAY_WALLET,
            r.he.KAKAOPAY,
            r.he.VENMO,
            r.he.CASH_APP,
            r.he.GCASH,
            r.he.PAYSAFE_CARD,
            r.he.GRABPAY_MY,
            r.he.MOMO_WALLET,
            r.he.PRZELEWY24,
            r.he.EPS,
            r.he.PIX,
        ]),
    ]),
    u = {
        [r.he.PAYPAL]: {
            paymentSourceType: r.he.PAYPAL,
            subtitleTranslationKey: i.t.Djzd7L,
            isRegionalPaymentMethod: !1,
            toStep: a.pn.PAYPAL_INFORMATION,
        },
        [r.he.VENMO]: {
            paymentSourceType: r.he.VENMO,
            subtitleTranslationKey: i.t["4KoTLM"],
            isRegionalPaymentMethod: !0,
            toStep: a.pn.VENMO_INFORMATION,
        },
        [r.he.CASH_APP]: {
            paymentSourceType: r.he.CASH_APP,
            subtitleTranslationKey: i.t["9ALP8w"],
            isRegionalPaymentMethod: !0,
            toStep: a.pn.CASH_APP_INFORMATION,
        },
        [r.he.GOPAY_WALLET]: {
            paymentSourceType: r.he.GOPAY_WALLET,
            subtitleTranslationKey: i.t["43J8JK"],
            isRegionalPaymentMethod: !0,
            isStaffOnly: !0,
        },
        [r.he.KAKAOPAY]: {
            paymentSourceType: r.he.KAKAOPAY,
            subtitleTranslationKey: i.t.CSVexi,
            isRegionalPaymentMethod: !0,
        },
        [r.he.GCASH]: {
            paymentSourceType: r.he.GCASH,
            subtitleTranslationKey: i.t.PjehcF,
            isRegionalPaymentMethod: !0,
        },
        [r.he.PAYSAFE_CARD]: {
            paymentSourceType: r.he.PAYSAFE_CARD,
            subtitleTranslationKey: i.t.boznHN,
            isRegionalPaymentMethod: !0,
        },
        [r.he.GRABPAY_MY]: {
            paymentSourceType: r.he.GRABPAY_MY,
            subtitleTranslationKey: i.t.T5davE,
            isRegionalPaymentMethod: !0,
        },
        [r.he.MOMO_WALLET]: {
            paymentSourceType: r.he.MOMO_WALLET,
            subtitleTranslationKey: i.t.J0A1Vk,
            isRegionalPaymentMethod: !0,
        },
        [r.he.PRZELEWY24]: {
            paymentSourceType: r.he.PRZELEWY24,
            subtitleTranslationKey: i.t.u25uL0,
            isRegionalPaymentMethod: !0,
            toStep: a.pn.PRZELEWY24_INFORMATION,
        },
        [r.he.EPS]: {
            paymentSourceType: r.he.EPS,
            subtitleTranslationKey: i.t["5BSDU6"],
            isRegionalPaymentMethod: !0,
            toStep: a.pn.EPS_INFORMATION,
        },
    };
function s(e) {
    return e.map((e) => ({
        id: e.custom_payment_method_id,
        options: {
            type: "static",
            subtitle:
                e.payment_source_type in u ? i.intl.string(u[e.payment_source_type].subtitleTranslationKey) : void 0,
        },
    }));
}
let o = {
    [r.he.CARD]: "card",
    [r.he.IDEAL]: "ideal",
    [r.he.BANCONTACT]: "bancontact",
    [r.he.PAYPAL]: "paypal",
    [r.he.VENMO]: "venmo",
    [r.he.CASH_APP]: "cashapp",
    [r.he.GOPAY_WALLET]: "gopay",
    [r.he.KAKAOPAY]: "kakaopay",
    [r.he.GCASH]: "gcash",
    [r.he.PAYSAFE_CARD]: "paysafecard",
    [r.he.GRABPAY_MY]: "grabpay",
    [r.he.MOMO_WALLET]: "momo",
    [r.he.PRZELEWY24]: "p24",
    [r.he.EPS]: "eps",
    [r.he.PIX]: "pix",
};
function c(e) {
    return e in u;
}
function h(e) {
    return c(e) ? (u[e].toStep ?? null) : null;
}
function m(e, t) {
    if ("card" === e || "link_card_brand" === e) return r.he.CARD;
    if ("ideal" === e) return r.he.IDEAL;
    if ("bancontact" === e) return r.he.BANCONTACT;
    if ("pix" === e) return r.he.PIX;
    if ("google_pay" === e || "apple_pay" === e) return r.he.PAYMENT_REQUEST;
    return e in t ? t[e] : null;
}
function A(e) {
    return l.has(e);
}
