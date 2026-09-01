i.d(t, { N: () => d });
var s = i(17928),
    n = i(531260),
    r = i(287809),
    a = i(166403);
let l = (0, i(945810).mj)({
    name: "2026-08-premium-group-perk-check",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var o = i(721157);
function d() {
    let e = (0, s.bG)([r.default], () => r.default.getCurrentUser()),
        t = (0, s.bG)([a.A], () => a.A.getPremiumTypeSubscription()),
        i = (0, s.bG)([a.A], () => a.A.hasFetchedSubscriptions()),
        { fractionalState: d, fetched: c } = (0, n.A)(),
        u = (function (e) {
            let { location: t } = e;
            return l.useConfig({ location: t });
        })({ location: "useIsUserEligibleForThirdPartyPerks" });
    if (!i || !c) return null;
    let { isEligible: m, reason: p } = (0, o.ij)(e, t, d, u);
    return { isEligible: m, state: (0, o.P3)(p), reason: p };
}
