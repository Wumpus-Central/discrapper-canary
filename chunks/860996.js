n.d(t, { C: () => o, x: () => c });
var i = n(17928),
    s = n(945810),
    a = n(710195),
    l = n(287809);
let r = { showDefaultBanner: !0, showHeroPlaceholder: !0 },
    E = {
        0: r,
        1: { showDefaultBanner: !1, showHeroPlaceholder: !0 },
        2: { showDefaultBanner: !1, showHeroPlaceholder: !1 },
    },
    o = (0, s.mj)({ name: "2026-07-quest-home-default-banner-removal", kind: "user", defaultConfig: r, variations: E });
function c() {
    return (0, i.bG)([l.default, a.A], () => {
        let e = l.default.getCurrentUser()?.id;
        if (null == e) return r;
        let t = a.A.getAssignment("user", e, o.definition.name);
        return t?.variantId == null || t.useAsEligibility ? r : (E[t.variantId] ?? r);
    });
}
