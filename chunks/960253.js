"use strict";
n.d(t, { Oh: () => f, l8: () => _, vz: () => p });
var r = n(311907),
    i = n(936555),
    s = n(465932),
    a = n(440293),
    o = n(164956),
    l = n(71393),
    u = n(217976),
    c = n(652215);
function d(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.A, o.A],
        r = t.getGuild(e);
    if (null == r) return !1;
    let s = (0, i.w)(r),
        a = r.features.has(c.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    return !!((s && a) || n.isViewingServerShop(e));
}
function _(e, t) {
    return !!d(e) || (0, u.I)(e, t);
}
function f(e) {
    let t = (0, u.A)(e),
        n = (0, r.bG)([l.A, o.A], () => d(e, [l.A, o.A]), [e]),
        { shouldHideGuildPurchaseEntryPoints: i } = (0, s.MH)(e);
    return !i && (n || t);
}
function p(e) {
    let t = f(e),
        n = (0, a.w)(e);
    return t && !n;
}
