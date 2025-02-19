r.d(t, { I: () => a }), r(47120);
var n = r(43747),
    l = r(215023),
    i = r(981631);
function a(e) {
    var t, r, a, o;
    let { product: s, isPremiumUser: c, tab: d } = e,
        u = null !== (o = null === (a = s.prices[c ? i.tuJ.PREMIUM_TIER_2 : i.tuJ.DEFAULT]) || void 0 === a ? void 0 : null === (r = a.countryPrices) || void 0 === r ? void 0 : null === (t = r.prices) || void 0 === t ? void 0 : t.slice(0, 2)) && void 0 !== o ? o : [],
        { balance: p } = (0, n.A)(),
        f = u.find((e) => e.currency === i.pKx.DISCORD_ORB);
    return d === l.AW.ORBS
        ? null != f
            ? {
                  displayPrices: [f],
                  checkoutEligiblePrices: [f]
              }
            : {
                  displayPrices: [],
                  checkoutEligiblePrices: []
              }
        : null != f && null != p && p >= f.amount
          ? {
                displayPrices: u,
                checkoutEligiblePrices: [f, ...u.filter((e) => e !== f)]
            }
          : {
                displayPrices: u,
                checkoutEligiblePrices: u
            };
}
