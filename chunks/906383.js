n.d(e, { Pc: () => s, ad: () => a });
var t = n(17928),
    u = n(166403),
    i = n(871123),
    l = n(69236),
    d = n(760716),
    o = n(202541);
function a(r) {
    return "NONE" !== r;
}
function s(r) {
    let e = (0, l.W8)(),
        n = (0, d.i)((r) => (r.overrideCurrentPremiumPlanId ? r.currentPremiumPlanId : void 0)),
        a = (0, t.bG)([u.A], () => {
            let r = u.A.getPremiumSubscription();
            return null != r && r.statusAllowsPerks ? (r.getCurrentSubscriptionPlanIdForGroup(o.LE) ?? null) : null;
        });
    return null == r
        ? "NONE"
        : (function (r) {
              let { flavor: e, rewardRequirements: n, hasEligibleNitro: t, currentPlanId: u } = r;
              if ("nitro" !== e) return "NONE";
              if (!t) return "NEEDS_NITRO";
              let l = (0, i.eV)(n);
              if (null == l || 1 !== l.length || null == u) return "NONE";
              let d = o.LE.indexOf(u),
                  a = o.LE.indexOf(l[0]);
              return -1 === d || -1 === a || d >= a ? "NONE" : "NEEDS_UPGRADE";
          })({
              flavor: r.flavor,
              rewardRequirements: r.rewardRequirements,
              hasEligibleNitro: e,
              currentPlanId: void 0 !== n ? n : a,
          });
}
