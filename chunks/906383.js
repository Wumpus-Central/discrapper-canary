var r = n(855986),
    l = n(166403),
    i = n(871123),
    u = n(69236),
    a = n(760716),
    o = n(682901);
n.d(
    t,
    {},
    {
        Pc: function (e) {
            let t = (0, u.W8)(),
                n = (0, a.i)((e) => (e.overrideCurrentPremiumPlanId ? e.currentPremiumPlanId : void 0)),
                s = (0, r.bG)([l.A], () => {
                    let e = l.A.getPremiumSubscription();
                    return null != e && e.statusAllowsPerks
                        ? (e.getCurrentSubscriptionPlanIdForGroup(o.LE) ?? null)
                        : null;
                });
            return null == e
                ? "NONE"
                : (function (e) {
                      let { flavor: t, rewardRequirements: n, hasEligibleNitro: r, currentPlanId: l } = e;
                      if ("nitro" !== t) return "NONE";
                      if (!r) return "NEEDS_NITRO";
                      let u = (0, i.eV)(n);
                      if (null == u || 1 !== u.length || null == l) return "NONE";
                      let a = o.LE.indexOf(l),
                          s = o.LE.indexOf(u[0]);
                      return -1 === a || -1 === s || a >= s ? "NONE" : "NEEDS_UPGRADE";
                  })({
                      flavor: e.flavor,
                      rewardRequirements: e.rewardRequirements,
                      hasEligibleNitro: t,
                      currentPlanId: void 0 !== n ? n : s,
                  });
        },
        ad: function (e) {
            return "NONE" !== e;
        },
    },
);
