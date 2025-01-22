r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(742280),
    s = r(442837),
    l = r(351402);
function u() {
    let [e, n] = a.useState(!1),
        [r, i] = a.useState(!1),
        u = (0, s.e7)([l.Z], () => o.M.EEA_COUNTRIES.has(l.Z.ipCountryCodeWithFallback));
    return {
        hasViewedPurchaseTerms: e,
        setHasViewedPurchaseTerms: n,
        showWithdrawalWaiver: u,
        hasAcceptedWithdrawalWaiver: !u || r,
        setHasAcceptedWithdrawalWaiver: i
    };
}
