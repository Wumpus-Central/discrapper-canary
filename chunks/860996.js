t.d(i, { C: () => d, x: () => o });
var s = t(17928),
    n = t(945810),
    r = t(710195),
    l = t(287809);
let a = { showDefaultBanner: !0, showHeroPlaceholder: !0 },
    c = {
        0: a,
        1: { showDefaultBanner: !1, showHeroPlaceholder: !0 },
        2: { showDefaultBanner: !1, showHeroPlaceholder: !1 },
    },
    d = (0, n.mj)({ name: "2026-07-quest-home-default-banner-removal", kind: "user", defaultConfig: a, variations: c });
function o() {
    return (0, s.bG)([l.default, r.A], () => {
        let e = l.default.getCurrentUser()?.id;
        if (null == e) return a;
        let i = r.A.getAssignment("user", e, d.definition.name);
        return i?.variantId == null || i.useAsEligibility ? a : (c[i.variantId] ?? a);
    });
}
