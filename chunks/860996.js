"use strict";
n.d(t, { C: () => d, x: () => c });
var i = n(17928),
    r = n(945810),
    a = n(710195),
    s = n(287809);
let l = { showDefaultBanner: !0, showHeroPlaceholder: !0 },
    o = {
        0: l,
        1: { showDefaultBanner: !1, showHeroPlaceholder: !0 },
        2: { showDefaultBanner: !1, showHeroPlaceholder: !1 },
    },
    d = (0, r.mj)({ name: "2026-07-quest-home-default-banner-removal", kind: "user", defaultConfig: l, variations: o });
function c() {
    return (0, i.bG)([s.default, a.A], () => {
        let e = s.default.getCurrentUser()?.id;
        if (null == e) return l;
        let t = a.A.getAssignment("user", e, d.definition.name);
        return t?.variantId == null || t.useAsEligibility ? l : (o[t.variantId] ?? l);
    });
}
