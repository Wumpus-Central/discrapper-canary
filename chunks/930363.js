i.d(a, { T: () => l });
var e = i(158045);
let t = (0, i(945810).mj)({
    kind: "user",
    name: "2026-09-referral-trial-cta",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
function l(r, a) {
    return null != a && r?.isReferralTrial === !0 && t.getConfig({ location: "referral_trial_cta" })
        ? (0, e.LE)(r, a)
        : null;
}
