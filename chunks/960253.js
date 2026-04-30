"use strict";
n.d(t, { Oh: () => f, l8: () => _, vz: () => h });
var i = n(17928),
    r = n(936555),
    s = n(465932),
    a = n(440293),
    o = n(164956),
    l = n(71393),
    u = n(217976),
    c = n(652215);
function d(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.A, o.A],
        i = t.getGuild(e);
    if (null == i) return !1;
    let s = (0, r.w)(i),
        a = i.features.has(c.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    return !!((s && a) || n.isViewingServerShop(e));
}
function _(e, t) {
    return !!d(e) || (0, u.I)(e, t);
}
function f(e) {
    let t = (0, u.A)(e),
        n = (0, i.bG)([l.A, o.A], () => d(e, [l.A, o.A]), [e]),
        { shouldHideGuildPurchaseEntryPoints: r } = (0, s.MH)(e);
    return !r && (n || t);
}
function h(e) {
    let t = f(e),
        n = (0, a.w)(e);
    return t && !n;
}
