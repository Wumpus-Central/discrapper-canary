"use strict";
n.d(t, { HF: () => c, Ng: () => l, Qp: () => o, cV: () => u });
var r = n(627968);
n(64700);
var i = n(562465),
    s = n(192308),
    a = n(652215);
async function o(e) {
    return (
        await i.Bo.post({ url: a.Rsh.BILLING_GIFT_CARD_VIEW, body: { pin: e }, oldFormErrors: !0, rejectWithError: !1 })
    ).body;
}
async function l(e, t, n) {
    try {
        let r = await i.Bo.post({
            url: a.Rsh.BILLING_GIFT_CARD_REDEEM,
            body: { pin: e, postal_code: t, country_code: n },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        return { success: !0, amount: r.body.amount, currency: r.body.currency.toLowerCase() };
    } catch (e) {
        throw e;
    }
}
function u(e) {
    let { amountRedeemed: t, currencyCode: i, loadId: a, onClose: o } = e;
    (0, s.openModalLazy)(async () => {
        let { default: e } = await n.e("8818").then(n.bind(n, 544036));
        return (n) =>
            (0, r.jsx)(e, {
                ...n,
                amountRedeemed: t,
                currencyCode: i,
                loadId: a,
                onClose: async () => {
                    o?.(), await n.onClose();
                },
            });
    });
}
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        {
            initialCode: t = "",
            onClose: i,
            onComplete: a,
            withRedemptionSuccessModal: o = !1,
            source: l,
            loadId: u,
            stackingBehavior: c,
        } = e;
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await n.e("13978").then(n.bind(n, 768161));
            return (n) =>
                (0, r.jsx)(e, {
                    ...n,
                    initialCode: t,
                    onComplete: a,
                    onClose: async () => {
                        i?.(), await n.onClose();
                    },
                    withRedemptionSuccessModal: o,
                    source: l,
                    loadId: u,
                });
        },
        { stackingBehavior: c },
    );
}
