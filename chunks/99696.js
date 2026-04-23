"use strict";
n.d(t, { HF: () => _, Ng: () => l, Qp: () => o, cV: () => d });
var i = n(627968);
n(64700);
var r = n(636537),
    s = n(192308),
    a = n(652215);
async function o(e) {
    return (
        await r.Bo.post({ url: a.Rsh.BILLING_GIFT_CARD_VIEW, body: { pin: e }, oldFormErrors: !0, rejectWithError: !1 })
    ).body;
}
async function l(e, t, n) {
    try {
        let i = await r.Bo.post({
            url: a.Rsh.BILLING_GIFT_CARD_REDEEM,
            body: { pin: e, postal_code: t, country_code: n },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        return { success: !0, amount: i.body.amount, currency: i.body.currency.toLowerCase() };
    } catch (e) {
        throw e;
    }
}
function d(e) {
    let { amountRedeemed: t, currencyCode: r, loadId: a, onClose: o } = e;
    (0, s.openModalLazy)(async () => {
        let { default: e } = await n.e("98399").then(n.bind(n, 367504));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                amountRedeemed: t,
                currencyCode: r,
                loadId: a,
                onClose: async () => {
                    o?.(), await n.onClose();
                },
            });
    });
}
function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        {
            initialCode: t = "",
            onClose: r,
            onComplete: a,
            withRedemptionSuccessModal: o = !1,
            source: l,
            loadId: d,
            stackingBehavior: _,
        } = e;
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await n.e("13978").then(n.bind(n, 768161));
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    initialCode: t,
                    onComplete: a,
                    onClose: async () => {
                        r?.(), await n.onClose();
                    },
                    withRedemptionSuccessModal: o,
                    source: l,
                    loadId: d,
                });
        },
        { stackingBehavior: _ },
    );
}
