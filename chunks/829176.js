n.d(t, { rS: () => l }), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685);
var r = n(772848),
    i = n(544891),
    a = n(591759),
    o = n(981631);
function s(e, t, n) {
    let { planId: s, isGift: l, loadId: c, paymentMethodType: u, deepLinkType: d } = e,
        f = o.Z5c.BILLING_STANDALONE_CHECKOUT_PAGE(s, l, c, u, d),
        _ = new URL(a.Z.makeUrl(o.Z5c.BILLING_LOGIN_HANDOFF, !1)),
        p = (0, r.Z)();
    return (
        _.searchParams.append("handoff_key", p),
        _.searchParams.append("redirect_to", f),
        i.tn
            .post({
                url: o.ANM.HANDOFF,
                body: { key: p },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
            .then(
                (e) => t(e, _),
                (e) => n(e),
            )
    );
}
function l(e, t) {
    return s(
        e,
        (e, t) => {
            t.searchParams.append("handoff_token", e.body.handoff_token), window.open(t.href);
        },
        t,
    );
}
