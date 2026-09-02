i.d(t, { C: () => o, x: () => d });
var s = i(17928),
    n = i(945810),
    r = i(710195),
    a = i(287809);
let l = { showDefaultBanner: !0, showHeroPlaceholder: !0 },
    c = {
        0: l,
        1: { showDefaultBanner: !1, showHeroPlaceholder: !0 },
        2: { showDefaultBanner: !1, showHeroPlaceholder: !1 },
    },
    o = (0, n.mj)({ name: "2026-07-quest-home-default-banner-removal", kind: "user", defaultConfig: l, variations: c });
function d() {
    return (0, s.bG)([a.default, r.A], () => {
        let e = a.default.getCurrentUser()?.id;
        if (null == e) return l;
        let t = r.A.getAssignment("user", e, o.definition.name);
        return t?.variantId == null || t.useAsEligibility ? l : (c[t.variantId] ?? l);
    });
}
