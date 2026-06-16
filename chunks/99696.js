"use strict";
n.d(t, {
    Ey: () => h,
    HF: () => g,
    Ng: () => p,
    P6: () => _,
    Pc: () => d,
    Qp: () => c,
    cV: () => m,
    k$: () => f,
    tn: () => E,
});
var i = n(627968);
n(64700);
var r = n(636537),
    s = n(192308),
    a = n(174459),
    o = n(652215),
    l = n(375708),
    u = n(776409);
async function c(e) {
    return (
        await r.Bo.post({ url: o.Rsh.BILLING_GIFT_CARD_VIEW, body: { pin: e }, oldFormErrors: !0, rejectWithError: !1 })
    ).body;
}
function d(e) {
    a.default.track(o.HAw.GIFT_CARD_REDEMPTION_START, { source: e.source, load_id: e.loadId });
}
function _(e) {
    a.default.track(o.HAw.GIFT_CARD_REDEMPTION_EMBED_CLICKED, { source: e.source, load_id: e.loadId });
}
function h(e, t) {
    a.default.track(o.HAw.GIFT_CARD_REDEMPTION_COMPLETED, {
        source: t.source,
        load_id: t.loadId,
        redemption_amount: e.amount,
        redemption_currency: e.currency,
    });
}
function f(e) {
    a.default.track(o.HAw.GIFT_CARD_REDEMPTION_FAILED, { source: e.source, load_id: e.loadId });
}
async function p(e, t, n) {
    try {
        let i = await r.Bo.post({
            url: o.Rsh.BILLING_GIFT_CARD_REDEEM,
            body: { pin: e, postal_code: t, country_code: n },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        return { success: !0, amount: i.body.amount, currency: i.body.currency.toLowerCase() };
    } catch (e) {
        throw e;
    }
}
function E(e) {
    return e?.body?.code === o.t02.GIFT_CARD_ALREADY_REDEEMED
        ? l.intl.string(u.default.uo9YsP)
        : l.intl.string(u.default.EUKPip);
}
function m(e) {
    let { amountRedeemed: t, currencyCode: r, loadId: a, onClose: o } = e;
    (0, s.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("29566"), n.e("8818")]).then(n.bind(n, 544036));
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
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        {
            initialCode: t = "",
            onClose: r,
            onComplete: a,
            withRedemptionSuccessModal: o = !1,
            source: l,
            loadId: u,
            stackingBehavior: c,
        } = e;
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("73185"), n.e("13978")]).then(n.bind(n, 768161));
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
                    loadId: u,
                });
        },
        { stackingBehavior: c },
    );
}
