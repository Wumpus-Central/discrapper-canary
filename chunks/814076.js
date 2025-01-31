n.d(t, { Z: () => o }), n(47120);
var i = n(192379),
    r = n(742280),
    a = n(442837),
    s = n(351402);
function o() {
    let [e, t] = i.useState(!1),
        [n, o] = i.useState(!1),
        l = (0, a.e7)([s.Z], () => r.M.EEA_COUNTRIES.has(s.Z.ipCountryCodeWithFallback));
    return {
        hasViewedPurchaseTerms: e,
        setHasViewedPurchaseTerms: t,
        showWithdrawalWaiver: l,
        hasAcceptedWithdrawalWaiver: !l || n,
        setHasAcceptedWithdrawalWaiver: o
    };
}
