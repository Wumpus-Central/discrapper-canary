"use strict";
n.d(t, { A: () => d, J: () => c });
var r = n(311907),
    i = n(287809),
    s = n(474090),
    a = n(181079),
    o = n(957300),
    l = n(616075),
    u = n(788868);
function c(e, t, n, r, i) {
    if (!r) return !1;
    if (n) return !0;
    let a = t.getCurrentUser();
    return null != a && !!s.Ay.isPremiumExactly(a, u.PremiumTypes.TIER_2) && e.favoriteServerEnabled;
}
function d(e) {
    let t = (0, o.E)((e) => e.isPreviewMode),
        n = (0, l.e)({ location: e }),
        s = n.enabled,
        u = n.hasHigherPrivileges;
    return (0, r.bG)([a.A, i.default], () => c(a.A, i.default, t, s, u));
}
