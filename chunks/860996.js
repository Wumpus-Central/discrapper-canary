i.d(t, { C: () => _, x: () => S });
var E = i(17928),
    s = i(945810),
    n = i(710195),
    r = i(287809);
let l = { showDefaultBanner: !0, showHeroPlaceholder: !0 },
    a = {
        0: l,
        1: { showDefaultBanner: !1, showHeroPlaceholder: !0 },
        2: { showDefaultBanner: !1, showHeroPlaceholder: !1 },
    },
    _ = (0, s.mj)({ name: "2026-07-quest-home-default-banner-removal", kind: "user", defaultConfig: l, variations: a });
function S() {
    return (0, E.bG)([r.default, n.A], () => {
        let e = r.default.getCurrentUser()?.id;
        if (null == e) return l;
        let t = n.A.getAssignment("user", e, _.definition.name);
        return t?.variantId == null || t.useAsEligibility ? l : (a[t.variantId] ?? l);
    });
}
