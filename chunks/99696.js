"use strict";
n.d(t, { HF: () => c, Ng: () => d, Qp: () => l, cV: () => u, tn: () => _ });
var i = n(627968);
n(64700);
var r = n(636537),
    s = n(192308),
    a = n(652215),
    o = n(985018);
async function l(e) {
    return (
        await r.Bo.post({ url: a.Rsh.BILLING_GIFT_CARD_VIEW, body: { pin: e }, oldFormErrors: !0, rejectWithError: !1 })
    ).body;
}
async function d(e, t, n) {
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
function _(e) {
    return e?.body?.code === a.t02.GIFT_CARD_ALREADY_REDEEMED ? o.intl.string(o.t.oLIl4o) : o.intl.string(o.t.OBnXjv);
}
function u(e) {
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
function c() {
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
