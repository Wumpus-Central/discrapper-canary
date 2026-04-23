n.d(t, { Oh: () => u, l8: () => c, vz: () => I });
var i = n(17928),
    r = n(936555),
    a = n(465932),
    s = n(440293),
    _ = n(164956),
    l = n(71393),
    o = n(217976),
    E = n(652215);
function d(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.A, _.A],
        i = t.getGuild(e);
    if (null == i) return !1;
    let a = (0, r.w)(i),
        s = i.features.has(E.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    return !!((a && s) || n.isViewingServerShop(e));
}
function c(e, t) {
    return !!d(e) || (0, o.I)(e, t);
}
function u(e) {
    let t = (0, o.A)(e),
        n = (0, i.bG)([l.A, _.A], () => d(e, [l.A, _.A]), [e]),
        { shouldHideGuildPurchaseEntryPoints: r } = (0, a.MH)(e);
    return !r && (n || t);
}
function I(e) {
    let t = u(e),
        n = (0, s.w)(e);
    return t && !n;
}
