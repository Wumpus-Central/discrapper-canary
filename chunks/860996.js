i.d(t, { C: () => o, x: () => d });
var s = i(17928),
    n = i(945810),
    r = i(710195),
    l = i(287809);
let a = { showDefaultBanner: !0, showHeroPlaceholder: !0 },
    c = {
        0: a,
        1: { showDefaultBanner: !1, showHeroPlaceholder: !0 },
        2: { showDefaultBanner: !1, showHeroPlaceholder: !1 },
    },
    o = (0, n.mj)({ name: "2026-07-quest-home-default-banner-removal", kind: "user", defaultConfig: a, variations: c });
function d() {
    return (0, s.bG)([l.default, r.A], () => {
        let e = l.default.getCurrentUser()?.id;
        if (null == e) return a;
        let t = r.A.getAssignment("user", e, o.definition.name);
        return t?.variantId == null || t.useAsEligibility ? a : (c[t.variantId] ?? a);
    });
}
