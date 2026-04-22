n.d(t, { HF: () => c, Ng: () => o, Qp: () => s, cV: () => u });
var a = n(627968);
n(64700);
var r = n(562465),
    l = n(192308),
    i = n(652215);
async function s(e) {
    return (
        await r.Bo.post({ url: i.Rsh.BILLING_GIFT_CARD_VIEW, body: { pin: e }, oldFormErrors: !0, rejectWithError: !1 })
    ).body;
}
async function o(e, t, n) {
    try {
        let a = await r.Bo.post({
            url: i.Rsh.BILLING_GIFT_CARD_REDEEM,
            body: { pin: e, postal_code: t, country_code: n },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        return { success: !0, amount: a.body.amount, currency: a.body.currency.toLowerCase() };
    } catch (e) {
        throw e;
    }
}
function u(e) {
    let { amountRedeemed: t, currencyCode: r, loadId: i, onClose: s } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await n.e("8818").then(n.bind(n, 544036));
        return (n) =>
            (0, a.jsx)(e, {
                ...n,
                amountRedeemed: t,
                currencyCode: r,
                loadId: i,
                onClose: async () => {
                    s?.(), await n.onClose();
                },
            });
    });
}
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        {
            initialCode: t = "",
            onClose: r,
            onComplete: i,
            withRedemptionSuccessModal: s = !1,
            source: o,
            loadId: u,
            stackingBehavior: c,
        } = e;
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await n.e("13978").then(n.bind(n, 768161));
            return (n) =>
                (0, a.jsx)(e, {
                    ...n,
                    initialCode: t,
                    onComplete: i,
                    onClose: async () => {
                        r?.(), await n.onClose();
                    },
                    withRedemptionSuccessModal: s,
                    source: o,
                    loadId: u,
                });
        },
        { stackingBehavior: c },
    );
}
