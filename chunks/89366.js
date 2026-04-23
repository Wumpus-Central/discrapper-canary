"use strict";
n.d(t, { QQ: () => u, Us: () => c, qD: () => d });
var r = n(311907),
    i = n(287809),
    s = n(166403),
    a = n(816733),
    o = n(378135),
    l = n(788868);
let u = () => {
    let e = (0, r.bG)([s.A], () => s.A.getPremiumTypeSubscription());
    return !!e?.hasActiveTrial;
};
function c() {
    let e = (0, r.bG)([s.A], () => s.A.getPremiumTypeSubscription()),
        t = (0, r.bG)([i.default], () => i.default.getCurrentUser());
    return e?.hasActiveTrial ? t?.premiumType : null;
}
function d() {
    return l.MB.map((e) => a.A.getUserTrialOffer(e))
        .filter((e) => null != e && !(0, o.P)(e))
        .shift();
}
