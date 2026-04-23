"use strict";
n.d(t, { d: () => i });
var r = n(652215);
n(758836), n(985018);
let i = (e, t) => {
    let n = t && null != e[r.lid.PREMIUM_TIER_2] ? e[r.lid.PREMIUM_TIER_2] : e[r.lid.DEFAULT];
    return (n?.countryPrices?.prices?.slice(0, 2) ?? []).find((e) => e.currency === r.Yri.DISCORD_ORB) ?? null;
};
