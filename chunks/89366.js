n.d(t, {
    QQ: () => c,
    Us: () => u,
    qD: () => d,
});
var r = n(311907),
    i = n(287809),
    a = n(166403),
    s = n(816733),
    o = n(378135),
    l = n(788868);
let c = () => {
    let e = (0, r.bG)([a.A], () => a.A.getPremiumTypeSubscription());
    return !!(null == e ? void 0 : e.hasActiveTrial);
};
function u() {
    let e = (0, r.bG)([a.A], () => a.A.getPremiumTypeSubscription()),
        t = (0, r.bG)([i.default], () => i.default.getCurrentUser());
    return (null == e ? void 0 : e.hasActiveTrial) ? (null == t ? void 0 : t.premiumType) : null;
}
function d() {
    return l.MB.map((e) => s.A.getUserTrialOffer(e))
        .filter((e) => null != e && !(0, o.P)(e))
        .shift();
}
