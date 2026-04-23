"use strict";
n.d(t, { QQ: () => d, Us: () => _, qD: () => u });
var i = n(17928),
    r = n(287809),
    s = n(166403),
    a = n(354670),
    o = n(378135),
    l = n(788868);
let d = () => {
    let e = (0, i.bG)([s.A], () => s.A.getPremiumTypeSubscription());
    return !!e?.hasActiveTrial;
};
function _() {
    let e = (0, i.bG)([s.A], () => s.A.getPremiumTypeSubscription()),
        t = (0, i.bG)([r.default], () => r.default.getCurrentUser());
    return e?.hasActiveTrial ? t?.premiumType : null;
}
function u() {
    return l.MB.map((e) => a.A.getUserTrialOffer(e))
        .filter((e) => null != e && !(0, o.P)(e))
        .shift();
}
