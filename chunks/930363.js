t.d(i, { T: () => u });
var e = t(158045);
let n = (0, t(945810).mj)({
    kind: "user",
    name: "2026-09-referral-trial-cta",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
function u(r, i) {
    return null != i && r?.isReferralTrial === !0 && n.getConfig({ location: "referral_trial_cta" })
        ? (0, e.LE)(r, i)
        : null;
}
