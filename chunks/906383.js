n.d(t, { Pc: () => c, ad: () => s });
var l = n(17928),
    r = n(166403),
    i = n(871123),
    a = n(69236),
    u = n(760716),
    o = n(202541);
function s(e) {
    return "NONE" !== e;
}
function c(e) {
    let t = (0, a.W8)(),
        n = (0, u.i)((e) => (e.overrideCurrentPremiumPlanId ? e.currentPremiumPlanId : void 0)),
        s = (0, l.bG)([r.A], () => {
            let e = r.A.getPremiumSubscription();
            return null != e && e.statusAllowsPerks ? (e.getCurrentSubscriptionPlanIdForGroup(o.LE) ?? null) : null;
        });
    return null == e
        ? "NONE"
        : (function (e) {
              let { flavor: t, rewardRequirements: n, hasEligibleNitro: l, currentPlanId: r } = e;
              if ("nitro" !== t) return "NONE";
              if (!l) return "NEEDS_NITRO";
              let a = (0, i.eV)(n);
              if (null == a || 1 !== a.length || null == r) return "NONE";
              let u = o.LE.indexOf(r),
                  s = o.LE.indexOf(a[0]);
              return -1 === u || -1 === s || u >= s ? "NONE" : "NEEDS_UPGRADE";
          })({
              flavor: e.flavor,
              rewardRequirements: e.rewardRequirements,
              hasEligibleNitro: t,
              currentPlanId: void 0 !== n ? n : s,
          });
}
