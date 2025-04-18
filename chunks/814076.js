n.d(t, { Z: () => s }), n(388685);
var r = n(192379),
    i = n(742280),
    a = n(442837),
    o = n(351402);
function s() {
    let [e, t] = r.useState(!1),
        [n, s] = r.useState(!1),
        l = (0, a.e7)([o.Z], () => i.M.EEA_COUNTRIES.has(o.Z.ipCountryCodeWithFallback));
    return {
        hasViewedPurchaseTerms: e,
        setHasViewedPurchaseTerms: t,
        showWithdrawalWaiver: l,
        hasAcceptedWithdrawalWaiver: !l || n,
        setHasAcceptedWithdrawalWaiver: s
    };
}
