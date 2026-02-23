"use strict";
n.d(t, { HF: () => c, IK: () => l, Ng: () => u, Qp: () => o });
var r = n(627968);
n(64700);
var i = n(562465),
    s = n(397927),
    a = n(652215);
async function o(e) {
    return (
        await i.Bo.post({ url: a.Rsh.BILLING_GIFT_CARD_VIEW, body: { pin: e }, oldFormErrors: !0, rejectWithError: !1 })
    ).body;
}
async function l() {
    return await Promise.resolve(), { country: "US", set_at: null, allowed_currencies: ["usd"] };
}
async function u(e, t) {
    try {
        let n = await i.Bo.post({
            url: a.Rsh.BILLING_GIFT_CARD_REDEEM,
            body: { pin: e, postal_code: t },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        return { success: !0, amount: n.body.amount, currency: n.body.currency };
    } catch (e) {
        throw e;
    }
}
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { initialCode: t = "", onClose: i, onComplete: a } = e;
    (0, s.mMO)(async () => {
        let { default: e } = await n.e("13978").then(n.bind(n, 768161));
        return (n) =>
            (0, r.jsx)(e, {
                ...n,
                initialCode: t,
                onComplete: a,
                onClose: async () => {
                    i?.(), await n.onClose();
                },
            });
    });
}
